import { Component, computed, input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

export type FktSkeletonAlignment = 'start' | 'center' | 'end' | 'stretch' | 'space-between';
export type FktSkeletonGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
    selector: 'fkt-skeleton-container',
    imports: [NgTemplateOutlet],
    template: `
        @if (repeatTemplate()) { @for (content of repeatedContent(); track
        content) {
        <ng-container [ngTemplateOutlet]="repeatTemplate()" />
        } } @else {
        <ng-content />
        }
    `,
    styleUrl: './fkt-skeleton-container.component.scss',
    host: {
        '[style.flex-direction]': 'direction()',
        '[style.justify-content]': 'justifyContent()',
        '[style.align-items]': 'alignItems()',
        '[style.margin-bottom]': 'marginBottom()',
        '[style.margin-top]': 'marginTop()',
        '[style.gap]': 'gap()',
        '[style.width]': 'width()',
        '[style.height]': 'height()',
        '[style.padding]': 'padding()',
    },
})
export class FktSkeletonContainerComponent {
    marginBottom = input<string>('0px');
    marginTop = input<string>('0px');
    direction = input<'row' | 'column'>('column');
    padding = input<string>('0');
    justify = input<FktSkeletonAlignment>('start');
    align = input<FktSkeletonAlignment>('stretch');
    gap = input('.75rem');
    width = input<string>('100%');
    height = input<string>('auto');
    repeatTemplate = input<TemplateRef<any>>();
    repeatCount = input(1);

    private alignmentMap: Record<FktSkeletonAlignment, string> = {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        stretch: 'stretch',
        'space-between': 'space-between',
    };

    justifyContent = () => this.alignmentMap[this.justify()];
    alignItems = () => this.alignmentMap[this.align()];

    protected readonly repeatedContent = computed(() =>
        new Array(this.repeatCount()).fill(null).map((_, index) => index)
    );
}
