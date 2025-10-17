import { Component, input } from "@angular/core";
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";


@Component({
	selector: 'simple-example',
	templateUrl: './simple-example.component.html',
	imports: [FktNoResultsComponent]
})
export class SimpleExampleComponent {
	noResults =  input.required<FktNoResults>()
	borderless = input(false)
}
