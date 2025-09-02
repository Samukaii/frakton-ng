import { Component, input } from '@angular/core';

@Component({
	selector: 'fkt-card-list',
	imports: [],
	templateUrl: './fkt-card-list.component.html',
	styleUrl: './fkt-card-list.component.scss',
	host: {
		'[style.--min-width]': 'minWidth()',
	},
})
export class FktCardListComponent {
	minWidth = input('350px');
}
