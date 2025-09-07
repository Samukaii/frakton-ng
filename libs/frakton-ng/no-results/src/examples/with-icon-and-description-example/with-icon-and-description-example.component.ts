import { Component } from "@angular/core";
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";


@Component({
	selector: 'with-icon-and-description-example',
	template: `
		<fkt-no-results
			[noResults]="detailedConfig"
		/>
	`,
	imports: [FktNoResultsComponent]
})
export class WithIconAndDescriptionExampleComponent {
	detailedConfig: FktNoResults = {
		label: 'No products available',
		description: 'We couldn\'t find any products matching your criteria.',
		icon: {name: 'shopping-bag', size: '96px'}
	};
}
