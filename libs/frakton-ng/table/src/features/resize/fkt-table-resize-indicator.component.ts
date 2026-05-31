import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FktTableResizeDirective } from './fkt-table-resize.directive';

@Component({
    selector: 'fkt-table-resize-indicator',
    template: '',
    styleUrl: './fkt-table-resize-indicator.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.visible]': 'resize?.resizeIndicatorX() !== null',
        '[style.left.px]': 'resize?.resizeIndicatorX()',
    },
})
export class FktTableResizeIndicatorComponent {
    protected readonly resize = inject(FktTableResizeDirective, { optional: true });
}
