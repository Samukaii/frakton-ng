import { Component, input } from '@angular/core';
import { FktButtonsListComponent } from '../buttons-list';
import { FktIconComponent } from '../icon';
import { FktNoResults } from './fkt-no-results.types';

@Component({
	selector: 'fkt-no-results',
	imports: [FktIconComponent, FktButtonsListComponent],
	templateUrl: './fkt-no-results.component.html',
	styleUrl: './fkt-no-results.component.scss',
})
export class FktNoResultsComponent {
	noResults = input.required<FktNoResults>();
}
