import { booleanAttribute, Component, input } from '@angular/core';
import { FktButtonsListComponent } from '@frakton-ng/buttons-list';
import { FktIconComponent } from '@frakton-ng/icon';
import { FktNoResults } from './fkt-no-results.types';

@Component({
	selector: 'fkt-no-results',
	imports: [FktIconComponent, FktButtonsListComponent],
	templateUrl: './fkt-no-results.component.html',
	styleUrl: './fkt-no-results.component.scss',
	host: {
		'[class.with-border]': "!borderless()"
	}
})
export class FktNoResultsComponent {
	noResults = input.required<FktNoResults>();
	borderless = input(false, {transform: booleanAttribute});
}
