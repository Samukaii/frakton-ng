import { booleanAttribute, Component, input } from '@angular/core';

@Component({
    selector: 'fkt-skeleton-container',
    imports: [],
    templateUrl: './skeleton-container.component.html',
    styleUrl: './skeleton-container.component.scss',
    host: {
        "[style.justify-content]": "horizontal() ? verticalAlignment() : horizontalAlignment()",
        "[style.align-items]": "horizontal() ? verticalAlignment() : horizontalAlignment()",
        "[style.flex-direction]": "horizontal() ? 'row' : 'column'",
        "[style.width]": "width()",
        "[style.margin-bottom]": "marginBottom()",
    }
})
export class SkeletonContainerComponent {
    width = input('100%');
    horizontal = input(false, {
        transform: booleanAttribute
    });
    verticalAlignment = input<'flex-start' | 'center' | 'flex-end'>('flex-start');
    horizontalAlignment = input<'flex-start' | 'center' | 'flex-end'>('flex-start');
    marginBottom = input('2rem');

}
