import {
    booleanAttribute,
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
} from '@angular/core';
import { FktAvatarSize, FktAvatarShape, FktAvatarVariant } from './fkt-avatar.types';
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';
import { FktColor, fktColors } from 'frakton-ng/core';
import { fktColorFormatters, getContrastTextColor } from 'frakton-ng/internal/utils';

const fktAvatarColors = [...fktColors, 'neutral'] as const;
const randomBackgroundColors = [
    'primary',
    'accent',
    'danger',
    'warning',
    'success',
    'info',
] as const;

@Component({
    selector: 'fkt-avatar',
    templateUrl: './fkt-avatar.component.html',
    styleUrl: './fkt-avatar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FktIconComponent],
    host: {
        '[style.--custom-bg-color]': "customBgColor()",
        '[style.--custom-text-color]': "customTextColor()",
        '[class]': "classes()"
    }
})
export class FktAvatarComponent {
    src = input<string>();
    alt = input('Avatar');
    initials = input('');
    randomBackground = input(false, {
        transform: booleanAttribute,
    });
    icon = input<FktIconName>('user');
    size = input<FktAvatarSize>('md');
    shape = input<FktAvatarShape>('circle');
    backgroundColor = input<FktColor>('primary');
    textColor = input<FktColor | 'auto'>('auto');
    loading = input(false);

    protected variant = computed<FktAvatarVariant>(() => {
        if (this.src()) return 'image';
        if (this.initials()) return 'initials';
        if (this.icon()) return 'icon';
        return 'placeholder';
    });

    protected isCustomBgColor = computed(() => {
        const color = this.resolvedBackgroundColor();
        return !fktAvatarColors.includes(color as any);
    });

    protected resolvedBackgroundColor = computed(() => {
        if (!this.randomBackground()) return this.backgroundColor();

        const seed = this.randomBackgroundSeed();
        const index = this.hashString(seed) % randomBackgroundColors.length;

        return randomBackgroundColors[index];
    });

    private randomBackgroundSeed = computed(() => {
        return this.initials() || this.alt() || this.src() || this.icon() || 'avatar';
    });

    protected customBgColor = computed(() => {
        const color = this.resolvedBackgroundColor();
        const isCustomColor = this.isCustomBgColor();

        if (!isCustomColor) return 'none';

        const colorHex = fktColorFormatters.hex.parse(color);
        if (!colorHex) {
            throw new Error(`Invalid color format for backgroundColor "${color}". It must be in hex format`);
        }

        return fktColorFormatters.hex.expand(color)!;
    });

    protected customTextColor = computed(() => {
        const bgColor = this.resolvedBackgroundColor();
        const textColor = this.textColor();
        const isCustomBgColor = this.isCustomBgColor();

        if (!isCustomBgColor) return 'none';

        if (textColor !== 'auto') {
            const isCustomTextColor = !fktAvatarColors.includes(textColor as any);
            if (isCustomTextColor) {
                const colorHex = fktColorFormatters.hex.parse(textColor);
                if (!colorHex) {
                    throw new Error(`Invalid color format for textColor "${textColor}". It must be in hex format`);
                }
                return fktColorFormatters.hex.expand(textColor)!;
            }
            return 'none';
        }

        return getContrastTextColor(bgColor);
    });

    protected classes = computed(() => {
        const isCustomBg = this.isCustomBgColor();
        const textColor = this.textColor();
        const isCustomText = textColor !== 'auto' && !fktAvatarColors.includes(textColor as any);

        let classes = '';

        const bgColor = isCustomBg ? 'custom' : this.resolvedBackgroundColor();
        const finalTextColor = isCustomText ? 'custom' : textColor;

        classes += `size-${this.size()}`;
        classes += ` shape-${this.shape()}`;
        classes += ` variant-${this.variant()}`;
        classes += ` bg-${bgColor}`;

        if (finalTextColor !== 'auto') {
            classes += ` text-${finalTextColor}`;
        }

        if (this.loading()) {
            classes += ' loading';
        }

        return classes;
    });

    protected displayInitials = computed(() => {
        const initials = this.initials();
        if (initials.length <= 2) return initials;
        return initials.substring(0, 2);
    });

    protected onImageError = () => {
        // Could emit an event here if needed
    };

    private hashString(value: string): number {
        let hash = 0;

        for (let index = 0; index < value.length; index++) {
            hash = (hash << 5) - hash + value.charCodeAt(index);
            hash |= 0;
        }

        return Math.abs(hash);
    }
}
