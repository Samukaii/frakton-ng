import './polyfills.server.mjs';
import"./chunk-RIAI3ORJ.mjs";var e=`<div class="container">\r
	<fkt-no-results\r
		[noResults]="compactConfig"\r
	/>\r
</div>\r
`;var t=`.container {\r
	padding: var(--fkt-space-md);\r
	border: solid 1px var(--fkt-color-neutral-300);\r
	width: 16rem;\r
	height: 12rem;\r
}\r
`;var o=`import { Component } from "@angular/core";\r
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";\r
\r
\r
@Component({\r
	selector: 'compact-example',\r
	templateUrl: './compact-example.component.html',\r
	imports: [FktNoResultsComponent]\r
})\r
export class CompactExampleComponent {\r
	compactConfig: FktNoResults = {\r
		label: 'No data',\r
		icon: {name: 'exclamation-circle', size: '60px'},\r
		description: 'Data will appear here when available.'\r
	};\r
}\r
`;var a=`<fkt-no-results\r
			[noResults]="tableConfig"\r
		/>`;var n="";var s=`import { Component } from "@angular/core";\r
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";\r
\r
@Component({\r
	selector: 'data-table-example',\r
	templateUrl: './data-table-example.component.html',\r
	imports: [FktNoResultsComponent]\r
})\r
export class DataTableExampleComponent {\r
	tableConfig: FktNoResults = {\r
		label: 'No data available',\r
		description: 'There are no records to display at this time.',\r
		icon: {name: 'table-cells', size: '100px'},\r
		action: {\r
			text: 'Add Record',\r
			theme: 'raised',\r
			identifier: 'add-record',\r
			click: () => this.openAddRecordModal()\r
		}\r
	};\r
\r
	openAddRecordModal() {\r
		console.log('Opening add record modal...');\r
	}\r
}\r
`;var l=`<fkt-no-results\r
			[noResults]="filesConfig"\r
		/>`;var m="";var p=`import { Component } from "@angular/core";\r
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";\r
\r
@Component({\r
	selector: 'file-upload-example',\r
	templateUrl: './file-upload-example.component.html',\r
	imports: [FktNoResultsComponent]\r
})\r
export class FileUploadExampleComponent {\r
	filesConfig: FktNoResults = {\r
		label: 'No files found',\r
		description: 'This folder is empty. Upload some files to get started.',\r
		icon: {name: 'folder-open', size: '120px'},\r
		action: {\r
			text: 'Upload Files',\r
			theme: 'raised',\r
			icon: 'arrow-up-tray',\r
			identifier: 'upload-files',\r
			click: () => this.openFileUpload()\r
		}\r
	};\r
\r
	openFileUpload() {\r
		console.log('Opening file upload dialog...');\r
	}\r
}\r
`;var r=`<fkt-no-results\r
			[noResults]="searchConfig"\r
		/>`;var i="";var c=`import { Component } from "@angular/core";\r
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";\r
\r
\r
@Component({\r
	selector: 'search-results-example',\r
	templateUrl: './search-results-example.component.html',\r
	imports: [FktNoResultsComponent]\r
})\r
export class SearchResultsExampleComponent {\r
	searchQuery = 'angular components';\r
\r
	searchConfig: FktNoResults = {\r
		label: 'No search results',\r
		description: \`No results found for "\${this.searchQuery}". Try different keywords.\`,\r
		icon: {name: 'magnifying-glass', size: '80px'},\r
		action: {\r
			text: 'Clear Search',\r
			theme: 'stroked',\r
			identifier: 'clear-search',\r
			click: () => this.clearSearch()\r
		}\r
	};\r
\r
	clearSearch() {\r
		this.searchQuery = '';\r
		console.log('Search cleared');\r
	}\r
}\r
`;var d=`<fkt-no-results\r
	[noResults]="noResults()"\r
	[borderless]="borderless()"\r
/>\r
`;var x="";var u=`import { Component, input } from "@angular/core";\r
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";\r
\r
\r
@Component({\r
	selector: 'simple-example',\r
	templateUrl: './simple-example.component.html',\r
	imports: [FktNoResultsComponent]\r
})\r
export class SimpleExampleComponent {\r
	noResults =  input.required<FktNoResults>()\r
	borderless = input(false)\r
}\r
`;var h=`<fkt-no-results\r
			[noResults]="actionableConfig"\r
		/>`;var g="";var f=`import { Component } from "@angular/core";\r
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";\r
\r
\r
@Component({\r
	selector: 'with-action-example',\r
	templateUrl: './with-action-example.component.html',\r
	imports: [FktNoResultsComponent]\r
})\r
export class WithActionExampleComponent {\r
	actionableConfig: FktNoResults = {\r
		label: 'No tasks assigned',\r
		description: 'You don\\'t have any tasks assigned yet.',\r
		icon: {name: 'clipboard-document-list'},\r
		action: {\r
			text: 'Create Task',\r
			theme: 'raised',\r
			identifier: 'create-task',\r
			click: () => this.createNewTask()\r
		}\r
	};\r
\r
	createNewTask() {\r
		console.log('Creating new task...');\r
	}\r
}\r
`;var C=`<fkt-no-results\r
			[noResults]="detailedConfig"\r
		/>`;var k="";var R=`import { Component } from "@angular/core";\r
import { FktNoResults, FktNoResultsComponent } from "frakton-ng/no-results";\r
\r
\r
@Component({\r
	selector: 'with-icon-and-description-example',\r
	templateUrl: './with-icon-and-description-example.component.html',\r
	imports: [FktNoResultsComponent]\r
})\r
export class WithIconAndDescriptionExampleComponent {\r
	detailedConfig: FktNoResults = {\r
		label: 'No products available',\r
		description: 'We couldn\\'t find any products matching your criteria.',\r
		icon: {name: 'shopping-bag', size: '96px'}\r
	};\r
}\r
`;var Ae={CompactExampleComponent:{name:"CompactExample",files:[{name:"compact-example.component.html",content:e,language:"html"},{name:"compact-example.component.ts",content:o,language:"typescript"},{name:"compact-example.component.scss",content:t,language:"css"}]},DataTableExampleComponent:{name:"DataTableExample",files:[{name:"data-table-example.component.html",content:a,language:"html"},{name:"data-table-example.component.ts",content:s,language:"typescript"},{name:"data-table-example.component.scss",content:n,language:"css"}]},FileUploadExampleComponent:{name:"FileUploadExample",files:[{name:"file-upload-example.component.html",content:l,language:"html"},{name:"file-upload-example.component.ts",content:p,language:"typescript"},{name:"file-upload-example.component.scss",content:m,language:"css"}]},SearchResultsExampleComponent:{name:"SearchResultsExample",files:[{name:"search-results-example.component.html",content:r,language:"html"},{name:"search-results-example.component.ts",content:c,language:"typescript"},{name:"search-results-example.component.scss",content:i,language:"css"}]},SimpleExampleComponent:{name:"SimpleExample",files:[{name:"simple-example.component.html",content:d,language:"html"},{name:"simple-example.component.ts",content:u,language:"typescript"},{name:"simple-example.component.scss",content:x,language:"css"}]},WithActionExampleComponent:{name:"WithActionExample",files:[{name:"with-action-example.component.html",content:h,language:"html"},{name:"with-action-example.component.ts",content:f,language:"typescript"},{name:"with-action-example.component.scss",content:g,language:"css"}]},WithIconAndDescriptionExampleComponent:{name:"WithIconAndDescriptionExample",files:[{name:"with-icon-and-description-example.component.html",content:C,language:"html"},{name:"with-icon-and-description-example.component.ts",content:R,language:"typescript"},{name:"with-icon-and-description-example.component.scss",content:k,language:"css"}]}};export{Ae as default};
