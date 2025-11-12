import { Component } from "@angular/core";
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";


@Component({
	selector: 'with-action-example',
	templateUrl: './with-action-example.component.html',
	imports: [FktNoResultsComponent]
})
export class WithActionExampleComponent {
	actionableConfig: FktNoResults = {
		label: 'No tasks assigned',
		description: 'You don\'t have any tasks assigned yet.',
		icon: {name: 'clipboard-document-list'},
		action: {
			text: 'Create Task',
			theme: 'raised',
			identifier: 'create-task',
			click: () => this.createNewTask()
		}
	};

	createNewTask() {
		console.log('Creating new task...');
	}
}
