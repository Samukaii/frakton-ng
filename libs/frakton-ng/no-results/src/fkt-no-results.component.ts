import { booleanAttribute, Component, input } from '@angular/core';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktNoResults } from './fkt-no-results.types';

/**
 * A component that displays a "no results" state with customizable content and actions.
 * 
 * @example
 * ```html
 * <fkt-no-results 
 *   [noResults]="noResultsConfig"
 *   [borderless]="true">
 * </fkt-no-results>
 * ```
 * 
 * @example
 * ```typescript
 * export class MyComponent {
 *   noResultsConfig: FktNoResults = {
 *     icon: 'search',
 *     title: 'No items found',
 *     message: 'Try adjusting your search criteria',
 *     actions: [
 *       { label: 'Clear filters', action: () => this.clearFilters() }
 *     ]
 *   };
 * }
 * ```
 */
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
	/**
	 * Configuration object for the no results display
	 * @required
	 */
	noResults = input.required<FktNoResults>();
	
	/**
	 * Whether to display the component without a border
	 * @default false
	 */
	borderless = input(false, {transform: booleanAttribute});
}
