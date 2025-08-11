import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'fkt-card',
	imports: [],
	templateUrl: './fkt-card.component.html',
	styleUrl: './fkt-card.component.scss',
	host: {
		'[class.with-border]': '!borderless()',
		'[class.with-shadow]': '!shadowless()',
	},
})
export class FktCardComponent {
	borderless = input(false, {
		transform: booleanAttribute,
	});
	shadowless = input(false, {
		transform: booleanAttribute,
	});
}
