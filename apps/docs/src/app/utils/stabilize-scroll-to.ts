interface StabilizeScrollToParams {
    root: HTMLElement;
    target: HTMLElement;
    signal: AbortSignal;
    duration?: number;
    maxAnimationDuration?: number;
    minAnimationDuration?: number;
    pixelsPerSecond?: number;
}

export function getDocsScrollRoot(document: Document, target?: HTMLElement) {
    const scrollableParent = target ? getScrollableParent(target) : null;

    return scrollableParent ?? (document.scrollingElement as HTMLElement | null);
}

function getScrollableParent(element: HTMLElement) {
    let parent = element.parentElement;

    while (parent) {
        const style = getComputedStyle(parent);
        const overflowY = style.overflowY;
        const canScroll =
            (overflowY === 'auto' ||
                overflowY === 'scroll' ||
                overflowY === 'overlay') &&
            parent.scrollHeight > parent.clientHeight;

        if (canScroll) return parent;

        parent = parent.parentElement;
    }

    return null;
}

export function stabilizeScrollTo({
    root,
    target,
    signal,
    duration = 2200,
    maxAnimationDuration = 900,
    minAnimationDuration = 180,
    pixelsPerSecond = 1800,
}: StabilizeScrollToParams) {
    const startedAt = performance.now();
    let stableFrames = 0;
    let lastExpectedTop: number | null = null;
    let animationStartedAt = startedAt;
    let animationStartTop = root.scrollTop;
    let animationTargetTop = root.scrollTop;
    let animationDuration = minAnimationDuration;

    const getExpectedScrollTop = () => {
        const rootRect = root.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        return (
            root.scrollTop +
            targetRect.top -
            rootRect.top -
            (root.clientHeight - targetRect.height) / 2
        );
    };

    const clamp = (value: number, min: number, max: number) => {
        return Math.min(Math.max(value, min), max);
    };

    const getAnimationDuration = (distance: number) => {
        return clamp(
            (distance / pixelsPerSecond) * 1000,
            minAnimationDuration,
            maxAnimationDuration
        );
    };

    const easeOutCubic = (progress: number) => {
        return 1 - Math.pow(1 - progress, 3);
    };

    const getCurrentAnimationTop = (now: number) => {
        const progress = clamp(
            (now - animationStartedAt) / animationDuration,
            0,
            1
        );
        const easedProgress = easeOutCubic(progress);

        return (
            animationStartTop +
            (animationTargetTop - animationStartTop) * easedProgress
        );
    };

    const retargetAnimation = (expectedTop: number, now: number) => {
        const currentTop = getCurrentAnimationTop(now);

        animationStartedAt = now;
        animationStartTop = currentTop;
        animationTargetTop = expectedTop;
        animationDuration = getAnimationDuration(
            Math.abs(animationTargetTop - animationStartTop)
        );
    };

    retargetAnimation(getExpectedScrollTop(), startedAt);

    const tick = () => {
        if (signal.aborted) return;

        const now = performance.now();
        const elapsed = now - startedAt;
        const expectedTop = getExpectedScrollTop();
        const delta =
            lastExpectedTop === null
                ? Number.POSITIVE_INFINITY
                : Math.abs(expectedTop - lastExpectedTop);

        if (Math.abs(expectedTop - animationTargetTop) > 1) {
            retargetAnimation(expectedTop, now);
        }

        const currentTop = getCurrentAnimationTop(now);
        const distance = animationTargetTop - currentTop;

        root.scrollTop = currentTop;

        stableFrames = delta < 1 ? stableFrames + 1 : 0;
        lastExpectedTop = expectedTop;

        const expired = elapsed > duration;
        const stable = stableFrames >= 12 && Math.abs(distance) < 1;

        if (!expired && !stable) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
}
