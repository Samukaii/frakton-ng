import { Component, input, linkedSignal, signal } from '@angular/core';
import { DesignTokenItem } from '@/models/design-token-item';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktInputOldComponent } from 'frakton-ng/input-old';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { getUpdatedNumericTokenValue } from '../numeric-token-control';

type SpacingSide = 'top' | 'right' | 'bottom' | 'left';

interface SpacingSides {
    top: string;
    right: string;
    bottom: string;
    left: string;
}

const parseSpacing = (value: string): SpacingSides => {
    const parts = value.trim().split(/\s+/).filter(Boolean);
    const [first = '', second = first, third = first, fourth = second] = parts;

    if (parts.length === 2) {
        return {
            top: first,
            right: second,
            bottom: first,
            left: second,
        };
    }

    if (parts.length === 3) {
        return {
            top: first,
            right: second,
            bottom: third,
            left: second,
        };
    }

    return {
        top: first,
        right: second,
        bottom: third,
        left: fourth,
    };
};

@Component({
    selector: 'app-design-token-spacing-control',
    imports: [
        FktButtonComponent,
        FktInputOldComponent,
        FktTooltipDirective,
    ],
    templateUrl: './design-token-spacing-control.component.html',
    styleUrl: './design-token-spacing-control.component.scss',
})
export class DesignTokenSpacingControlComponent {
    readonly token = input.required<DesignTokenItem>();

    protected readonly expanded = signal(false);
    protected readonly sides = linkedSignal(() =>
        parseSpacing(this.token().control())
    );

    protected updateSide(side: SpacingSide, value: string | null) {
        const sides = {
            ...this.sides(),
            [side]: value || '0',
        };

        this.sides.set(sides);
        this.token().control.set(
            [sides.top, sides.right, sides.bottom, sides.left].join(' ')
        );
    }

    protected onKeydown(
        event: KeyboardEvent,
        side: SpacingSide,
        value: string
    ) {
        const operationByKey: Partial<
            Record<string, 'increase' | 'decrease'>
        > = {
            ArrowUp: 'increase',
            ArrowDown: 'decrease',
            '+': 'increase',
            '-': 'decrease',
        };

        const operation = operationByKey[event.key];

        if (!operation) return;

        this.updateSide(
            side,
            getUpdatedNumericTokenValue(event, value, operation)
        );
    }
}
