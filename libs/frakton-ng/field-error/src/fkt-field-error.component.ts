import { booleanAttribute, Component, input } from '@angular/core';


@Component({
	selector: 'fkt-field-error',
	imports: [],
	templateUrl: './fkt-field-error.component.html',
	styleUrl: './fkt-field-error.component.scss',
	host: {
		'[class.active]': 'show() && error()',
	},
})
export class FktFieldErrorComponent {
	show = input(false, {transform: booleanAttribute});
	error = input.required<string | undefined>();
}
