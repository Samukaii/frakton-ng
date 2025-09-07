import { Component } from "@angular/core";
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";


@Component({
	selector: 'simple-example',
	template: `
		<fkt-no-results
			[noResults]="simpleConfig"
		/>
	`,
	imports: [FktNoResultsComponent]
})
export class SimpleExampleComponent {
	simpleConfig: FktNoResults = {
		label: 'No results found'
	};
}
