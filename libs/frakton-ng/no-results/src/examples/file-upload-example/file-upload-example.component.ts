import { Component } from "@angular/core";
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";

@Component({
	selector: 'file-upload-example',
	template: `
		<fkt-no-results
			[noResults]="filesConfig"
		/>
	`,
	imports: [FktNoResultsComponent]
})
export class FileUploadExampleComponent {
	filesConfig: FktNoResults = {
		label: 'No files found',
		description: 'This folder is empty. Upload some files to get started.',
		icon: {name: 'folder-open', size: '120px'},
		action: {
			text: 'Upload Files',
			theme: 'raised',
			icon: 'arrow-up-tray',
			identifier: 'upload-files',
			click: () => this.openFileUpload()
		}
	};

	openFileUpload() {
		console.log('Opening file upload dialog...');
	}
}
