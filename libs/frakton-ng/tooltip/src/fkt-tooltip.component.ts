import { Component, computed, inject, input } from '@angular/core';
import { FktColor } from 'frakton-ng/core';
import { OVERLAY_INFO } from "frakton-ng/overlay";
import { FktGeometryPosition } from "frakton-ng/internal/types";

@Component({
    selector: 'fkt-tooltip',
    imports: [],
    templateUrl: './fkt-tooltip.component.html',
    styleUrl: './fkt-tooltip.component.scss',
    host: {
        '[style.--tooltip-color]': 'tooltipColor()',
    },
})
export class FktTooltipComponent {
    text = input.required<string>();
    color = input<FktColor>();

    private overlayInfo = inject(OVERLAY_INFO);

    private colorMap: Record<FktColor, string> = {
        danger: 'var(--fkt-tooltip-color-danger, var(--fkt-color-danger))',
        success: 'var(--fkt-tooltip-color-success, var(--fkt-color-success))',
        primary: 'var(--fkt-tooltip-color-primary, var(--fkt-color-primary))',
        accent: 'var(--fkt-tooltip-color-accent, var(--fkt-color-accent))',
        warning: 'var(--fkt-tooltip-color-warning, var(--fkt-color-warning))',
        info: 'var(--fkt-tooltip-color-info, var(--fkt-color-info))',
    };

    private tipPositionMap: Record<FktGeometryPosition, FktGeometryPosition> = {
        'bottom-center': 'top-center',
        'bottom-end': 'top-end',
        'bottom-left': 'top-left',
        'bottom-right': 'top-right',
        'bottom-start': 'top-start',

        'left-center': 'right-center',
        'left-end': 'right-end',
        'left-start': 'right-start',

        'right-center': 'left-center',
        'right-end': 'left-end',
        'right-start': 'left-start',

        'top-center': 'bottom-center',
        'top-end': 'bottom-end',
        'top-left': 'bottom-left',
        'top-right': 'bottom-right',
        'top-start': 'bottom-start',
    };

    protected tooltipColor = computed(() => {
        return this.colorMap[this.color() ?? 'primary'] ?? this.color();
    });

    protected tipPositionClass = computed(() => {
        const currentPosition = this.overlayInfo.currentPosition();
        const tipPosition =
            this.tipPositionMap[currentPosition ?? 'bottom-center'];

        return `message__tip--${tipPosition}`;
    });
}
