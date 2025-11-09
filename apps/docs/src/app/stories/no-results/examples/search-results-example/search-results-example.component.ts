import { Component } from "@angular/core";
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";


@Component({
	selector: 'search-results-example',
	templateUrl: './search-results-example.component.html',
	imports: [FktNoResultsComponent]
})
export class SearchResultsExampleComponent {
	searchQuery = 'angular components';

	searchConfig: FktNoResults = {
		label: 'No search results',
		description: `No results found for "${this.searchQuery}". Try different keywords.`,
		icon: {name: 'magnifying-glass', size: '80px'},
		action: {
			text: 'Clear Search',
			theme: 'stroked',
			identifier: 'clear-search',
			click: () => this.clearSearch()
		}
	};

	clearSearch() {
		this.searchQuery = '';
		console.log('Search cleared');
	}
}
