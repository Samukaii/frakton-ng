import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FktDividerOrientation, FktDividerVariant, FktDividerSize, FktDividerSpacing } from './fkt-divider.types';
import { FktColor, fktColors } from 'frakton-ng/core';
import { fktColorFormatters } from 'frakton-ng/internal/utils';

@Component({
    selector: 'fkt-divider',
    templateUrl: './fkt-divider.component.html',
    styleUrl: './fkt-divider.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class]': "classes()",
        'role': 'separator',
        '[attr.aria-orientation]': "orientation()"
    }
})
export class FktDividerComponent {
    orientation = input<FktDividerOrientation>('horizontal');
    variant = input<FktDividerVariant>('solid');
    size = input<FktDividerSize>('thin');
    spacing = input<FktDividerSpacing>('md');
    label = input<string>();

    protected classes = computed(() => {
        let classes = '';

        classes += `orientation-${this.orientation()}`;
        classes += ` variant-${this.variant()}`;
        classes += ` size-${this.size()}`;
        classes += ` spacing-${this.spacing()}`;

        if (this.label()) {
            classes += ' with-label';
        }

        return classes;
    });
}
