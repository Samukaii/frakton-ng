import { Component } from "@angular/core";
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";


@Component({
	selector: 'compact-example',
	templateUrl: './compact-example.component.html',
	imports: [FktNoResultsComponent]
})
export class CompactExampleComponent {
	compactConfig: FktNoResults = {
		label: 'No data',
		icon: {name: 'exclamation-circle', size: '60px'},
		description: 'Data will appear here when available.'
	};
}
