import { booleanAttribute, Component, input } from '@angular/core';
import { TooltipDirective } from '../../directives';
import { FktButtonAction, FktButtonComponent } from '../button';

@Component({
	selector: 'fkt-buttons-list',
	imports: [FktButtonComponent, TooltipDirective],
	templateUrl: './fkt-buttons-list.component.html',
	styleUrl: './fkt-buttons-list.component.scss',
	host: {
		'[class.vertical]': 'orientation() === "vertical"',
		'[class.fill]': 'fill()',
	},
})
export class FktButtonsListComponent<T> {
	context = input<T>();
	orientation = input<'horizontal' | 'vertical'>('horizontal');
	fill = input(false, { transform: booleanAttribute });
	actions = input.required<FktButtonAction[]>();
}
