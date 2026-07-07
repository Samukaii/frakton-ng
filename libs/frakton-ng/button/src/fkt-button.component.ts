import { NgTemplateOutlet } from '@angular/common';
import {
    booleanAttribute,
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChild,
    input,
} from '@angular/core';
import { FktLabelColor } from 'frakton-ng/core';
import { FktButtonLoadingIndicatorDirective } from './directives/fkt-button-loading-indicator.directive';
import { FktButtonPrefixDirective } from './directives/fkt-button-prefix.directive';
import { FktButtonSuffixDirective } from './directives/fkt-button-suffix.directive';
import {
    FktButtonColor,
    fktButtonColors,
    FktButtonAppearance,
    FktButtonShape,
    FktButtonSize,
    FktButtonType,
} from './fkt-button.types';

@Component({
    selector: 'button[fktButton]',
    templateUrl: './fkt-button.component.html',
    styleUrl: './fkt-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'fkt-button',
        '[attr.data-fkt-appearance]': 'appearance()',
        '[attr.data-fkt-shape]': 'shape()',
        '[attr.data-fkt-color]': 'dataColor()',
        '[attr.data-fkt-size]': 'size()',
        '[attr.data-fkt-loading]': 'loading() ? "" : null',
        '[attr.data-fkt-disabled]': 'disabled() ? "" : null',
        '[attr.type]': 'type()',
        '[disabled]': 'effectiveDisabled()',
        '[attr.aria-busy]': 'loading() ? "true" : null',
        '[attr.aria-label]': 'hideLabel() ? label() : null',
        '[class.loading]': 'loading()',
        '[class.hide-label]': 'hideLabel()',
        '[style.--_fkt-button-custom-color]': 'customColor()',
        '[style.--_fkt-button-explicit-text-color]': 'explicitLabelColor()',
    },
    imports: [NgTemplateOutlet],
})
export class FktButtonComponent {
    readonly label = input.required<string>();
    readonly hideLabel = input(false, { transform: booleanAttribute });
    readonly loading = input(false, { transform: booleanAttribute });
    readonly loadingPosition = input<'start' | 'end'>('start');
    readonly disabled = input(false, { transform: booleanAttribute });
    readonly color = input<FktButtonColor>('default');
    readonly labelColor = input<FktLabelColor>('auto');
    readonly appearance = input<FktButtonAppearance>('default');
    readonly shape = input<FktButtonShape>('default');
    readonly size = input<FktButtonSize>('default');
    readonly type = input<FktButtonType>('button');

    protected readonly prefix = contentChild(FktButtonPrefixDirective);
    protected readonly suffix = contentChild(FktButtonSuffixDirective);
    protected readonly customLoadingIndicator = contentChild(
        FktButtonLoadingIndicatorDirective
    );

    protected readonly effectiveDisabled = computed(
        () => this.disabled() || this.loading()
    );

    protected readonly isCustomColor = computed(() => {
        return !fktButtonColors.includes(
            this.color() as (typeof fktButtonColors)[number]
        );
    });

    protected readonly dataColor = computed(() =>
        this.isCustomColor() ? 'custom' : this.color()
    );

    protected readonly customColor = computed(() => {
        if (!this.isCustomColor()) return null;

        return this.color();
    });

    protected readonly explicitLabelColor = computed(() => {
        const labelColor = this.labelColor();

        return labelColor === 'auto' ? null : labelColor;
    });
}
