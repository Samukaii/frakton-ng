import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'fkt-color-control-item',
	imports: [],
	templateUrl: './fkt-color-control-item.component.html',
	styleUrl: './fkt-color-control-item.component.scss',
	host: {
		'[class.last]': 'isLast()',
		'[class.first]': 'isFirst()',
	}
})
export class FktColorControlItemComponent {
	isLast = input(false, {
		transform: booleanAttribute
	});
	isFirst = input(false, {
		transform: booleanAttribute
	});
}
