import { FktGeometryPoint } from 'frakton-ng/internal/types';

export interface FktMergedArea {
    left: number;
    right: number;
    top: number;
    bottom: number;
}

export interface MergeAreasOptions {
    rects: DOMRectReadOnly[];
    tolerance?: number;
}

export const mergeAreas = (options: MergeAreasOptions) => {
    const tolerance = Math.max(options.tolerance ?? 0, 0);

    if (options.rects.length === 0) {
        throw new Error('mergeAreas requires at least one rect.');
    }

    const area = options.rects.reduce<FktMergedArea>(
        (area, rect) => ({
            left: Math.min(area.left, rect.left),
            right: Math.max(area.right, rect.right),
            top: Math.min(area.top, rect.top),
            bottom: Math.max(area.bottom, rect.bottom),
        }),
        {
            left: Infinity,
            right: -Infinity,
            top: Infinity,
            bottom: -Infinity,
        }
    );

    const mergedArea = {
        left: area.left - tolerance,
        right: area.right + tolerance,
        top: area.top - tolerance,
        bottom: area.bottom + tolerance,
    };

    const isInside = (coordinates: FktGeometryPoint) => {
        const { x, y } = coordinates;

        return (
            x >= mergedArea.left &&
            x <= mergedArea.right &&
            y >= mergedArea.top &&
            y <= mergedArea.bottom
        );
    };

    return { area: mergedArea, isInside };
};
