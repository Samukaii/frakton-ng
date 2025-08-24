import { booleanAttribute, Component, input } from '@angular/core';
import { FktButtonAction, FktButtonComponent } from '../button';
import { FktTooltipDirective } from '../tooltip';

@Component({
	selector: 'fkt-buttons-list',
	imports: [FktButtonComponent, FktTooltipDirective],
	templateUrl: './fkt-buttons-list.component.html',
	styleUrl: './fkt-buttons-list.component.scss',
	host: {
		'[class.vertical]': 'orientation() === "vertical"',
		'[class.horizontal]': 'orientation() === "horizontal"',
		'[class.fill]': 'fill()',
		'[style.--vertical-alignment]': 'verticalAlignment()',
		'[style.--horizontal-alignment]': 'horizontalAlignment()',
	},
})
export class FktButtonsListComponent<T> {
	context = input<T>();
	orientation = input<'horizontal' | 'vertical'>('horizontal');
	fill = input(false, { transform: booleanAttribute });
	verticalAlignment = input<'start' | 'space-between' | 'space-evenly' | 'space-around' | 'end'>('start');
	horizontalAlignment = input<'start' | 'space-between' | 'space-evenly' | 'space-around' | 'end'>('start');
	actions = input.required<FktButtonAction[]>();
}
