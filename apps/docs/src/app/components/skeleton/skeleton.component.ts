import { Component, computed, input } from '@angular/core';

@Component({
    selector: 'fkt-skeleton',
    imports: [],
    templateUrl: './skeleton.component.html',
    styleUrl: './skeleton.component.scss',
    host: {
        '[style.width]': "width()",
        '[style.height]': "height()",
        '[style.border-radius]': "borderRadius()",
        '[style.margin-bottom]': "marginBottom()",
    }
})
export class SkeletonComponent {
    width = input('100%');
    height = input('50px');
    shape = input<'rounded' | 'circle'>('rounded');
    marginBottom = input('.5rem');

    borderRadius = computed(() => {
        return this.shape() === 'rounded' ? 'var(--fkt-radius-md)': 'var(--fkt-radius-full)';
    });
}
