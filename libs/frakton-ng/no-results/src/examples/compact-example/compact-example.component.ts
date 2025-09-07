import { Component } from "@angular/core";
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";


@Component({
	selector: 'compact-example',
	template: `
		<div class="w-64 h-48 border border-gray-300 p-4">
			<fkt-no-results
				[noResults]="compactConfig"
			/>
		</div>
	`,
	imports: [FktNoResultsComponent]
})
export class CompactExampleComponent {
	compactConfig: FktNoResults = {
		label: 'No data',
		icon: {name: 'exclamation-circle', size: '60px'},
		description: 'Data will appear here when available.'
	};
}
