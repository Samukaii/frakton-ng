import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FktProgressBarSize, FktProgressBarVariant, FktProgressBarShape } from './fkt-progress-bar.types';
import { FktColor, fktColors } from 'frakton-ng/core';
import { fktColorFormatters, getContrastTextColor } from 'frakton-ng/internal/utils';

@Component({
    selector: 'fkt-progress-bar',
    templateUrl: './fkt-progress-bar.component.html',
    styleUrl: './fkt-progress-bar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--custom-color]': "customColor()",
        '[style.--custom-text-color]': "customTextColor()",
        '[class]': "classes()"
    }
})
export class FktProgressBarComponent {
    value = input<number>(0);
    max = input<number>(100);
    size = input<FktProgressBarSize>('xs');
    color = input<FktColor>('primary');
    variant = input<FktProgressBarVariant>('default');
    shape = input<FktProgressBarShape>('rounded');
    label = input<string>('');
    showLabel = input(false);
    showValue = input(false);
    formatValue = input<(value: number, max: number) => string>();
    ariaLabel = input<string>();
    indeterminate = input(false);

    protected normalizedMax = computed(() => Math.max(1, this.max()));

    protected clampedValue = computed(() => {
        const value = this.value();
        return Math.min(this.normalizedMax(), Math.max(0, value));
    });

    protected percentage = computed(() => {
        return (this.clampedValue() / this.normalizedMax()) * 100;
    });

    protected displayValue = computed(() => {
        const formatFn = this.formatValue();
        const value = this.clampedValue();
        const max = this.normalizedMax();
        if (formatFn) {
            return formatFn(value, max);
        }
        return `${Math.round(this.percentage())}%`;
    });

    protected ariaValueText = computed(() => this.displayValue());

    protected isCustomColor = computed(() => {
        const color = this.color();

        const isSemanticColor = fktColors.includes(color as any);
        if (isSemanticColor) return false;

        const parsed = fktColorFormatters.hex.parse(color);
        if (!parsed) {
            throw new Error(`Invalid color format for color "${color}". It must be in hex format`);
        }

        return true;
    });

    protected customColor = computed(() => {
        const color = this.color();
        const isCustom = this.isCustomColor();

        if (!isCustom) return 'none';

        return fktColorFormatters.hex.expand(color)!;
    });

    protected customTextColor = computed(() => {
        const color = this.customColor();

        if(color === 'none') return 'white';

        return getContrastTextColor(color);
    });

    protected classes = computed(() => {
        const isCustom = this.isCustomColor();
        const colorClass = isCustom ? 'custom' : this.color();

        const classes = [
            `size-${this.size()}`,
            `color-${colorClass}`,
            `variant-${this.variant()}`,
            `shape-${this.shape()}`
        ];

        if (this.indeterminate()) {
            classes.push('indeterminate');
        }

        return classes.join(' ');
    });
}
