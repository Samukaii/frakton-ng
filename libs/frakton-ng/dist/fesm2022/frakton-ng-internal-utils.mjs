import { ValueChangeEvent, TouchedChangeEvent } from '@angular/forms';
import { filter } from 'rxjs';
import { inject, DestroyRef, signal, isSignal, afterRenderEffect, reflectComponentType, twoWayBinding, inputBinding, outputBinding, ElementRef, DOCUMENT } from '@angular/core';

const clampNumber = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
};

const normalizeLevels = {
    'year': date => {
        date.setMonth(0, 1);
        date.setHours(12, 0, 0, 0);
        return date;
    },
    'month': date => {
        date.setDate(1);
        date.setHours(12, 0, 0, 0);
        return date;
    },
    'date': date => {
        date.setHours(12, 0, 0, 0);
        return date;
    },
    'hour': date => {
        date.setMinutes(0, 0, 0);
        return date;
    },
    'minute': date => {
        date.setSeconds(0, 0);
        return date;
    },
    'seconds': date => {
        date.setMilliseconds(0);
        return date;
    },
};
const normalizeDate = (date, level) => {
    return normalizeLevels[level](new Date(date));
};

const compareDates = (first, second, level = 'date') => {
    const result = normalizeDate(first, level).getTime() -
        normalizeDate(second, level).getTime();
    if (result === 0)
        return 'equal';
    if (result > 0)
        return 'first-is-greater';
    return 'second-is-greater';
};

const controlErrorsSignal = (control) => {
    const destroyRef = inject(DestroyRef);
    const controlErrors = signal(null, ...(ngDevMode ? [{ debugName: "controlErrors", equal: () => false }] : [{ equal: () => false }]));
    let subscription = null;
    const watchFormControl = (control) => {
        let changes = control.events;
        controlErrors.set(control.errors);
        const matchEvent = (event) => {
            const events = [
                ValueChangeEvent,
                TouchedChangeEvent
            ];
            return !!events.find(targetEvent => event instanceof targetEvent);
        };
        return changes.pipe(filter(matchEvent)).subscribe(() => {
            controlErrors.set(control.errors);
        });
    };
    if (!isSignal(control)) {
        subscription = watchFormControl(control);
    }
    else {
        afterRenderEffect(() => {
            subscription = watchFormControl(control());
        });
    }
    destroyRef.onDestroy(() => {
        subscription?.unsubscribe();
    });
    return controlErrors;
};

const isWritableSignal = (value) => {
    if (!isSignal(value))
        return false;
    const conditions = [
        'update' in value,
        'set' in value,
        'asReadonly' in value,
    ];
    return conditions.every(Boolean);
};
const createComponentBindings = (component, data) => {
    const bindings = [];
    const mirror = reflectComponentType(component);
    mirror?.inputs.forEach(input => {
        const name = input.templateName;
        const isTwoWayBinding = !!mirror?.outputs.find(output => output.templateName === `${name}Change`);
        if (isTwoWayBinding) {
            if (name in data) {
                const value = data[name];
                bindings.push(twoWayBinding(input.templateName, isWritableSignal(value) ? value : signal(value)));
            }
            return;
        }
        if (name in data) {
            const value = data[name];
            bindings.push(inputBinding(input.templateName, isSignal(value) ? value : signal(value)));
        }
    });
    mirror?.outputs.forEach(output => {
        const name = output.templateName;
        if (name in data) {
            const value = data[name];
            bindings.push(outputBinding(output.templateName, value));
        }
    });
    return bindings;
};

const isNumber = (value) => {
    if (typeof value !== 'number' && typeof value !== 'string')
        return false;
    return !isNaN(+value);
};

const MarkUsed = () => () => {
};

const outsideClickEffect = (fn, options) => {
    const elementRef = inject(ElementRef);
    const destroyRef = inject(DestroyRef);
    const document = inject(DOCUMENT);
    const handleClickOutside = (event) => {
        const wrapper = elementRef.nativeElement;
        const excludedElements = options?.excludeIdsOrElements
            ?.map(id => typeof id === "string" ? document.getElementById(id) : id)
            ?.filter(element => !!element) ?? [];
        const isAnExcludedElement = excludedElements.some(excluded => excluded.contains(event.target));
        if (isAnExcludedElement)
            return;
        if (!wrapper.contains(event.target))
            fn(event.target);
    };
    document.addEventListener('mousedown', handleClickOutside);
    const destroy = () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    destroyRef.onDestroy(destroy);
    return { destroy };
};

const outsideMouseEnterWatcher = (options) => {
    const elementRef = inject(ElementRef);
    const destroyRef = inject(DestroyRef);
    const document = inject(DOCUMENT);
    let handler = () => { };
    let registered = false;
    const handleMouseOver = (event) => {
        const wrapper = elementRef.nativeElement;
        const related = event.relatedTarget;
        const excludedElements = options?.excludeIds
            ?.map(id => document.getElementById(id))
            ?.filter(element => !!element) ?? [];
        const isStillInside = wrapper.contains(event.target) ||
            wrapper.contains(related) ||
            excludedElements.some(el => el.contains(event.target) || el.contains(related));
        if (isStillInside)
            return;
        handler();
    };
    const watch = (fn) => {
        handler = fn;
        if (!registered) {
            document.addEventListener('mouseover', handleMouseOver, true);
            registered = true;
        }
    };
    const stop = () => {
        if (!registered)
            return;
        document.removeEventListener('mouseover', handleMouseOver, true);
        registered = false;
    };
    destroyRef.onDestroy(stop);
    return { watch, stop };
};

/**
 * Verifica se o elemento "target" está contido dentro do "container".
 * Isso inclui casos em que o target é o próprio container.
 */
function isElementInside(target, container) {
    let node = target;
    while (node) {
        if (node === container) {
            return true;
        }
        node = node.parentElement;
    }
    return false;
}

const elementSizeSignal = (element, options) => {
    const destroyRef = inject(DestroyRef);
    const size = signal(options?.startWithNull ? null : element.getBoundingClientRect(), ...(ngDevMode ? [{ debugName: "size" }] : []));
    const observer = new ResizeObserver(() => {
        size.set(element.getBoundingClientRect());
    });
    observer.observe(element);
    destroyRef.onDestroy(() => {
        observer.disconnect();
    });
    return size.asReadonly();
};

const isValidDateString = (dateString) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
};

const wait = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
};

const isIsoDateString = (str) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(str) &&
    isValidDateString(str);

const topStart = (anchor, target) => ({
    x: anchor.x,
    y: anchor.y - target.height,
});
const topEnd = (anchor, target) => ({
    x: anchor.x + anchor.width - target.width,
    y: anchor.y - target.height,
});
const topLeft = (anchor, target) => ({
    x: anchor.x - target.width,
    y: anchor.y - target.height,
});
const topRight = (anchor, target) => ({
    x: anchor.x + anchor.width,
    y: anchor.y - target.height,
});
const topCenter = (anchor, target) => ({
    x: anchor.x + anchor.width / 2 - target.width / 2,
    y: anchor.y - target.height,
});
const bottomStart = (anchor) => ({
    x: anchor.x,
    y: anchor.y + anchor.height,
});
const bottomEnd = (anchor, target) => ({
    x: anchor.x + anchor.width - target.width,
    y: anchor.y + anchor.height,
});
const bottomLeft = (anchor, target) => ({
    x: anchor.x - target.width,
    y: anchor.y + anchor.height,
});
const bottomRight = (anchor) => ({
    x: anchor.x + anchor.width,
    y: anchor.y + anchor.height,
});
const bottomCenter = (anchor, target) => ({
    x: anchor.x + anchor.width / 2 - target.width / 2,
    y: anchor.y + anchor.height,
});
const leftStart = (anchor, target) => ({
    x: anchor.x - target.width,
    y: anchor.y,
});
const leftCenter = (anchor, target) => ({
    x: anchor.x - target.width,
    y: anchor.y + anchor.height / 2 - target.height / 2,
});
const leftEnd = (anchor, target) => ({
    x: anchor.x - target.width,
    y: anchor.y + anchor.height - target.height,
});
const rightStart = (anchor) => ({
    x: anchor.x + anchor.width,
    y: anchor.y,
});
const rightEnd = (anchor, target) => ({
    x: anchor.x + anchor.width,
    y: anchor.y + anchor.height - target.height,
});
const rightCenter = (anchor, target) => ({
    x: anchor.x + anchor.width,
    y: anchor.y + anchor.height / 2 - target.height / 2,
});
const geometryPositionCalculations = {
    'top-start': topStart,
    'bottom-start': bottomStart,
    'left-start': leftStart,
    'right-start': rightStart,
    'top-center': topCenter,
    'bottom-center': bottomCenter,
    'left-center': leftCenter,
    'right-center': rightCenter,
    'top-left': topLeft,
    'top-right': topRight,
    'bottom-left': bottomLeft,
    'bottom-right': bottomRight,
    'top-end': topEnd,
    'bottom-end': bottomEnd,
    'left-end': leftEnd,
    'right-end': rightEnd,
};

/**
 * Generated bundle index. Do not edit.
 */

export { MarkUsed, clampNumber, compareDates, controlErrorsSignal, createComponentBindings, elementSizeSignal, geometryPositionCalculations, isElementInside, isIsoDateString, isNumber, isValidDateString, normalizeDate, outsideClickEffect, outsideMouseEnterWatcher, wait };
//# sourceMappingURL=frakton-ng-internal-utils.mjs.map
