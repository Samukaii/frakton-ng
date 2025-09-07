import { Component } from "@angular/core";
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";


@Component({
	selector: 'simple-example',
	templateUrl: './simple-example.component.html',
	imports: [FktNoResultsComponent]
})
export class SimpleExampleComponent {
	simpleConfig: FktNoResults = {
		label: 'No results found'
	};
}
