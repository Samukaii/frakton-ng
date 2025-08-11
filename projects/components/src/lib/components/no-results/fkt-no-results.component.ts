import { Component, input } from '@angular/core';
import { FktButtonsListComponent } from '../buttons-list/fkt-buttons-list.component';
import { FktNoResults } from '../../shared/types';
import { FktIconComponent } from '../icon';

@Component({
	selector: 'fkt-no-results',
	imports: [FktIconComponent, FktButtonsListComponent],
	templateUrl: './fkt-no-results.component.html',
	styleUrl: './fkt-no-results.component.scss',
})
export class FktNoResultsComponent {
	noResults = input.required<FktNoResults>();
}
