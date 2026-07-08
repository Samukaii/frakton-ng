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
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';
import { FktButtonContentDirective } from './directives/fkt-button-content.directive';
import { FktButtonLoadingIndicatorDirective } from './directives/fkt-button-loading-indicator.directive';
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
        '[attr.data-fkt-icon-only]': 'iconOnly() ? "" : null',
        '[attr.data-fkt-content-fill]': 'contentFill() ? "" : null',
        '[attr.data-fkt-disabled]': 'disabled() ? "" : null',
        '[attr.type]': 'type()',
        '[disabled]': 'effectiveDisabled()',
        '[attr.aria-busy]': 'loading() ? "true" : null',
        '[attr.aria-label]': 'usesAccessibleLabelOnly() ? label() : null',
        '[class.loading]': 'loading()',
        '[style.--_fkt-button-custom-color]': 'customColor()',
        '[style.--_fkt-button-explicit-text-color]': 'explicitLabelColor()',
    },
    imports: [NgTemplateOutlet, FktIconComponent],
})
export class FktButtonComponent {
    readonly label = input.required<string>();
    readonly loading = input(false, { transform: booleanAttribute });
    readonly loadingPosition = input<'start' | 'end'>('start');
    readonly disabled = input(false, { transform: booleanAttribute });
    readonly icon = input<FktIconName>();
    readonly suffixIcon = input<FktIconName>();
    readonly iconOnly = input(false, { transform: booleanAttribute });
    readonly color = input<FktButtonColor>('default');
    readonly labelColor = input<FktLabelColor>('auto');
    readonly appearance = input<FktButtonAppearance>('default');
    readonly shape = input<FktButtonShape>('default');
    readonly size = input<FktButtonSize>('default');
    readonly type = input<FktButtonType>('button');

    protected readonly content = contentChild(FktButtonContentDirective);
    protected readonly customLoadingIndicator = contentChild(
        FktButtonLoadingIndicatorDirective
    );

    protected readonly effectiveDisabled = computed(
        () => this.disabled() || this.loading()
    );

    protected readonly hasContent = computed(() => !!this.content());

    protected readonly contentFill = computed(
        () => this.content()?.fill() ?? false
    );

    protected readonly usesAccessibleLabelOnly = computed(
        () => this.iconOnly() || this.hasContent()
    );

    protected readonly showStartLoading = computed(() => {
        if (!this.loading()) return false;

        if (this.iconOnly()) return true;

        return this.loadingPosition() === 'start';
    });

    protected readonly showEndLoading = computed(
        () => this.loading() && !this.iconOnly() && this.loadingPosition() === 'end'
    );

    protected readonly showStartIcon = computed(() => {
        if (this.hasContent() || this.iconOnly()) return false;

        if (this.loading() && this.loadingPosition() === 'start') return false;

        return !!this.icon();
    });

    protected readonly showSuffixIcon = computed(() => {
        if (this.hasContent() || this.iconOnly()) return false;

        if (this.loading() && this.loadingPosition() === 'end') return false;

        return !!this.suffixIcon();
    });

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
