import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FktAvatarSize, FktAvatarShape, FktAvatarVariant } from './fkt-avatar.types';
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';
import { FktColor, fktColors } from 'frakton-ng/core';
import { fktColorFormatters, getContrastTextColor } from 'frakton-ng/internal/utils';

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
        const color = this.backgroundColor();
        return !fktColors.includes(color as any);
    });

    protected customBgColor = computed(() => {
        const color = this.backgroundColor();
        const isCustomColor = this.isCustomBgColor();

        if (!isCustomColor) return 'none';

        const colorHex = fktColorFormatters.hex.parse(color);
        if (!colorHex) {
            throw new Error(`Invalid color format for backgroundColor "${color}". It must be in hex format`);
        }

        return fktColorFormatters.hex.expand(color)!;
    });

    protected customTextColor = computed(() => {
        const bgColor = this.backgroundColor();
        const textColor = this.textColor();
        const isCustomBgColor = this.isCustomBgColor();

        if (!isCustomBgColor) return 'none';

        if (textColor !== 'auto') {
            const isCustomTextColor = !fktColors.includes(textColor as any);
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
        const isCustomText = textColor !== 'auto' && !fktColors.includes(textColor as any);

        let classes = '';

        const bgColor = isCustomBg ? 'custom' : this.backgroundColor();
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
}
