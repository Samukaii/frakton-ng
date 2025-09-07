import { booleanAttribute, Component, input } from '@angular/core';
import { FktButtonAction, FktButtonComponent } from 'frakton-ng/button';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { FktButtonsListAlignment, FktButtonsListOrientation } from './fkt-buttons-list.types';

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
	orientation = input<FktButtonsListOrientation>('horizontal');
	fill = input(false, { transform: booleanAttribute });
	verticalAlignment = input<FktButtonsListAlignment>('start');
	horizontalAlignment = input<FktButtonsListAlignment>('start');
	actions = input.required<FktButtonAction[]>();
}
