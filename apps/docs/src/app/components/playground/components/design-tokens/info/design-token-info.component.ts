import { Component, computed, input } from '@angular/core';
import { DesignTokenItem } from '@/models/design-token-item';
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';
import { FktTagColor, FktTagComponent } from 'frakton-ng/tag';
import { HumanizeDesignTokenPipe } from '@/pipes/humanize-design-token.pipe';

@Component({
    selector: 'app-design-token-info',
    imports: [FktIconComponent, FktTagComponent, HumanizeDesignTokenPipe],
    templateUrl: './design-token-info.component.html',
    styleUrl: './design-token-info.component.scss',
})
export class DesignTokenInfoComponent {
    token = input.required<DesignTokenItem>();
    templateSelector = input.required<string>();

    protected categoryIcon = computed(() => {
        const token = this.token();

        const icons: Record<string, { icon: FktIconName; color: FktTagColor }> =
            {
                Typography: { icon: 'h2', color: 'info' },
                Colors: { icon: 'paint-brush', color: 'warning' },
                Sizing: { icon: 'viewfinder-circle', color: 'success' },
                Spacing: { icon: 'squares-2x2', color: 'accent' },
                Shape: { icon: 'rectangle-group', color: 'success' },
                Effects: { icon: 'sparkles', color: 'danger' },
            };

        return icons[token.category];
    });
}
