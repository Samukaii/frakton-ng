import { Component } from "@angular/core";
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";

@Component({
	selector: 'data-table-example',
	templateUrl: './data-table-example.component.html',
	imports: [FktNoResultsComponent]
})
export class DataTableExampleComponent {
	tableConfig: FktNoResults = {
		label: 'No data available',
		description: 'There are no records to display at this time.',
		icon: {name: 'table-cells', size: '100px'},
		action: {
			text: 'Add Record',
			theme: 'raised',
			identifier: 'add-record',
			click: () => this.openAddRecordModal()
		}
	};

	openAddRecordModal() {
		console.log('Opening add record modal...');
	}
}
