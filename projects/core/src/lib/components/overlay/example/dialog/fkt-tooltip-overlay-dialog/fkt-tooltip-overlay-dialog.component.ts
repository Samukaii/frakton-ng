import { Component, input } from '@angular/core';
import { FktIconComponent } from '../../../../icon';

@Component({
	selector: 'fkt-tooltip-overlay-dialog',
	imports: [
		FktIconComponent
	],
	template: `
		<div class="container">
			@if (type() === 'info') {
				<fkt-icon name="information-circle" size="16"></fkt-icon>
			}
			@if (type() === 'warning') {
				<fkt-icon name="exclamation-triangle" size="16"></fkt-icon>
			}
			@if (type() === 'error') {
				<fkt-icon name="x-circle" size="16"></fkt-icon>
			}
			@if (type() === 'success') {
				<fkt-icon name="check-circle" size="16"></fkt-icon>
			}
			<span class="container__text">{{ text() }}</span>
		</div>
	`,
	styleUrl: './fkt-tooltip-overlay-dialog.component.scss'
})
export class FktTooltipOverlayDialogComponent {
	text = input('Tooltip message');
	type = input<'info' | 'warning' | 'error' | 'success'>('info');
}
