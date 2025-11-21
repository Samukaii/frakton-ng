import './polyfills.server.mjs';
import"./chunk-RIAI3ORJ.mjs";var e=`<div class="example-container">\r
	<p class="description">Allows users to create new options by typing values not in the predefined list. Try typing\r
		"New Zealand" or another country not in the list.</p>\r
\r
	<fkt-autocomplete\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		[addOptionLabel]="addOptionLabel()"\r
		[allowAddOption]="allowAddOption()"\r
		(addOption)="onAutoCreate($event)"\r
		[options]="filteredOptions()"\r
		(search)="searchTerm.set($event)"\r
	/>\r
\r
	@if (selectedOption()) {\r
		<div class="selected-option">\r
			<div class="title">\r
				<h3>\r
					Selected option\r
				</h3>\r
				<hr>\r
			</div>\r
\r
			<div class="info">\r
				<p>\r
					<strong>Value:</strong> {{ selectedOption()?.value }}\r
				</p>\r
				<p>\r
					<strong>Label:</strong> {{ selectedOption()?.label }}\r
				</p>\r
			</div>\r
		</div>\r
	}\r
\r
	<div class="info-box">\r
		<strong>Tip:</strong> Type a country name that's not in the list to see the auto-creation feature in action.\r
	</div>\r
</div>\r
`;var t=`p {\r
	margin: 0;\r
}\r
\r
* {\r
	box-sizing: border-box;\r
}\r
\r
hr {\r
	border: none;\r
	border-bottom: solid 1px var(--fkt-color-neutral-300);\r
	margin: 0;\r
}\r
\r
.example-container {\r
	width: 100%;\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	h3 {\r
		margin: 0 0 0.5rem;\r
		color: var(--color-text-primary);\r
	}\r
\r
	.description {\r
		margin-bottom: 1rem;\r
		color: var(--fkt-color-neutral-600);\r
		font-size: var(--fkt-font-size-sm);\r
	}\r
\r
	.selected-option {\r
		margin-top: var(--fkt-space-xs);\r
		padding: var(--fkt-space-sm);\r
		border-radius: var(--fkt-radius-md);\r
		font-size: var(--fkt-font-size-sm);\r
		box-shadow: var(--fkt-shadow-md);\r
		border: 1px solid var(--fkt-color-neutral-200);\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-xs);\r
\r
		.info {\r
			display: flex;\r
			flex-direction: column;\r
			gap: var(--fkt-space-xs);\r
		}\r
\r
		.title {\r
			display: flex;\r
			flex-direction: column;\r
		}\r
	}\r
\r
	.info-box {\r
		margin-top: 1rem;\r
		padding: 0.75rem;\r
		width: 100%;\r
		background-color: var(--fkt-color-info-opacity-10, #e3f2fd);\r
		border-left: 4px solid var(--fkt-color-info, #2196f3);\r
		border-radius: 4px;\r
		font-size: 0.875rem;\r
\r
		strong {\r
			color: var(--fkt-color-info, #2196f3);\r
		}\r
	}\r
}\r
`;var o=`import { Component, computed, input, linkedSignal, model, signal } from '@angular/core';\r
import {\r
	FktAutoCompleteAddOptionEvent,\r
	FktAutocompleteComponent,\r
	FktAutocompleteOption\r
} from 'frakton-ng/autocomplete';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'fkt-autocomplete-auto-creation-example',\r
	imports: [FktAutocompleteComponent, Field],\r
	templateUrl: './fkt-autocomplete-auto-creation-example.component.html',\r
	styleUrl: './fkt-autocomplete-auto-creation-example.component.scss'\r
})\r
export class FktAutocompleteAutoCreationExampleComponent {\r
	selectedValue = input<FktAutocompleteOption | null>(null);\r
	label = input<string>('Country (create new if not found)');\r
	placeholder = input<string>('Type a country name');\r
	addOptionLabel = input<string>('Add country "{{inputValue}}"');\r
	allowAddOption = input<boolean>(true);\r
	options = model<FktAutocompleteOption[]>([\r
		{ value: "us", label: "United States" },\r
		{ value: "ca", label: "Canada" },\r
		{ value: "uk", label: "United Kingdom" },\r
		{ value: "de", label: "Germany" },\r
		{ value: "fr", label: "France" },\r
		{ value: "es", label: "Spain" },\r
		{ value: "it", label: "Italy" },\r
		{ value: "jp", label: "Japan" },\r
		{ value: "au", label: "Australia" },\r
		{ value: "br", label: "Brazil" },\r
	]);\r
\r
	protected searchTerm = signal('');\r
\r
	protected filteredOptions = linkedSignal(() => {\r
		const searchTerm = this.searchTerm();\r
\r
		return this.options().filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()));\r
	});\r
\r
	protected control = form(signal(''));\r
\r
	protected selectedOption = computed(() => {\r
		return this.options()?.find(option => option.value === this.control().value());\r
	});\r
\r
	protected onAutoCreate(event: FktAutoCompleteAddOptionEvent) {\r
		setTimeout(() => {\r
			const newOption = {\r
				value: crypto.randomUUID(),\r
				label: event.inputValue,\r
			};\r
\r
			this.options.update(options => [\r
				...options,\r
				newOption\r
			]);\r
\r
			event.done(newOption.value)\r
		}, 1000)\r
	}\r
}\r
`;var a=`<div class="example-container">\r
	<p class="description">Simple autocomplete with predefined options. Click to see all options or start typing to filter them.</p>\r
\r
	<fkt-autocomplete\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		[options]="filteredOptions()"\r
		(search)="searchTerm.set($event)"\r
	/>\r
\r
	@if (selectedOption()) {\r
		<div class="selected-option">\r
			<div class="title">\r
				<h3>\r
					Selected option\r
				</h3>\r
				<hr>\r
			</div>\r
\r
			<div class="info">\r
				<p>\r
					<strong>Value:</strong> {{ selectedOption()?.value }}\r
				</p>\r
				<p>\r
					<strong>Label:</strong> {{ selectedOption()?.label }}\r
				</p>\r
			</div>\r
		</div>\r
	}\r
</div>\r
`;var l=`p {\r
	margin: 0;\r
}\r
\r
* {\r
	box-sizing: border-box;\r
}\r
\r
hr {\r
	border: none;\r
	border-bottom: solid 1px var(--fkt-color-neutral-300);\r
	margin: 0;\r
}\r
\r
.example-container {\r
	width: 100%;\r
\r
	h3 {\r
		margin-bottom: 0.5rem;\r
		color: var(--color-text-primary);\r
	}\r
\r
	.description {\r
		margin-bottom: 1rem;\r
		color: var(--color-text-secondary);\r
		font-size: 0.875rem;\r
	}\r
\r
	.selected-option {\r
		margin-top: var(--fkt-space-xs);\r
		padding: var(--fkt-space-sm);\r
		border-radius: var(--fkt-radius-md);\r
		font-size: var(--fkt-font-size-sm);\r
		box-shadow: var(--fkt-shadow-md);\r
		border: 1px solid var(--fkt-color-neutral-200);\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-xs);\r
\r
		.info {\r
			display: flex;\r
			flex-direction: column;\r
			gap: var(--fkt-space-xs);\r
		}\r
\r
		.title {\r
			display: flex;\r
			flex-direction: column;\r
		}\r
	}\r
}\r
`;var s=`import { Component, computed, linkedSignal, model, signal } from '@angular/core';\r
import { FktAutocompleteComponent, FktAutocompleteOption } from 'frakton-ng/autocomplete';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'fkt-autocomplete-basic-example',\r
	imports: [FktAutocompleteComponent, Field],\r
	templateUrl: './fkt-autocomplete-basic-example.component.html',\r
	styleUrl: './fkt-autocomplete-basic-example.component.scss'\r
})\r
export class FktAutocompleteBasicExampleComponent {\r
	label = model<string>('Select a fruit');\r
	placeholder = model<string>('Start typing...');\r
	options = model<FktAutocompleteOption[]>([\r
		{ value: "apple", label: "Apple" },\r
		{ value: "banana", label: "Banana" },\r
		{ value: "cherry", label: "Cherry" },\r
		{ value: "grape", label: "Grape" },\r
		{ value: "orange", label: "Orange" },\r
		{ value: "strawberry", label: "Strawberry" },\r
	]);\r
\r
	control = form(signal(''));\r
\r
	protected searchTerm = signal('');\r
\r
	protected filteredOptions = linkedSignal(() => {\r
		const searchTerm = this.searchTerm();\r
\r
		return this.options().filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()));\r
	});\r
\r
	protected selectedOption = computed(() => {\r
		return this.options()?.find(option => option.value === this.control().value());\r
	});\r
\r
	onSearch(searchTerm: string) {\r
		console.log('Search term:', searchTerm);\r
	}\r
}\r
`;var n=`<div class="example-container">\r
	<p class="description">Demonstrates custom styling and disabled state functionality. Toggle the disabled state to\r
		see visual and functional changes.</p>\r
\r
	<div class="custom-styled-autocomplete" [class.disabled-wrapper]="control().disabled()">\r
		<fkt-autocomplete\r
			[field]="control"\r
			[label]="label()"\r
			[placeholder]="placeholder()"\r
			[options]="filteredOptions()"\r
			(search)="searchTerm.set($event)"\r
		/>\r
	</div>\r
\r
	<fkt-button\r
		[text]="(control().disabled() ? 'Enable': 'Disable') + ' Autocomplete'"\r
		(click)="toggleDisabled()"\r
	/>\r
\r
	@if (selectedOption()) {\r
		<div class="selected-option">\r
			<div class="title">\r
				<h3>\r
					Selected option\r
				</h3>\r
				<hr>\r
			</div>\r
\r
			<div class="info">\r
				<p>\r
					<strong>Value:</strong> {{ selectedOption()?.value }}\r
				</p>\r
				<p>\r
					<strong>Label:</strong> {{ selectedOption()?.label }}\r
				</p>\r
			</div>\r
		</div>\r
	}\r
\r
	<div class="status-indicator">\r
		Status: <span [class]="control().disabled() ? 'disabled-status' : 'enabled-status'">\r
			{{ control().disabled() ? 'Disabled' : 'Enabled' }}\r
		</span>\r
	</div>\r
</div>\r
`;var r=`p {\r
	margin: 0;\r
}\r
\r
* {\r
	box-sizing: border-box;\r
}\r
\r
hr {\r
	border: none;\r
	border-bottom: solid 1px var(--fkt-color-neutral-300);\r
	margin: 0;\r
}\r
\r
\r
.example-container {\r
	width: 100%;\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-xs);\r
\r
	h3 {\r
		margin-bottom: 0.5rem;\r
		color: var(--color-text-primary);\r
	}\r
\r
	.description {\r
		margin-bottom: 1rem;\r
		color: var(--color-text-secondary);\r
		font-size: 0.875rem;\r
	}\r
\r
	.custom-styled-autocomplete {\r
		position: relative;\r
		transition: opacity 0.3s ease;\r
\r
		&.disabled-wrapper {\r
			opacity: 0.6;\r
\r
			&::after {\r
				content: '';\r
				position: absolute;\r
				top: 0;\r
				left: 0;\r
				right: 0;\r
				bottom: 0;\r
				background-color: transparent;\r
				pointer-events: none;\r
				border-radius: 4px;\r
				border: 2px dashed var(--fkt-color-border-disabled, #ccc);\r
			}\r
		}\r
	}\r
\r
	.selected-option {\r
		margin-top: var(--fkt-space-xs);\r
		padding: var(--fkt-space-sm);\r
		border-radius: var(--fkt-radius-md);\r
		font-size: var(--fkt-font-size-sm);\r
		box-shadow: var(--fkt-shadow-md);\r
		border: 1px solid var(--fkt-color-neutral-200);\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-xs);\r
\r
		.info {\r
			display: flex;\r
			flex-direction: column;\r
			gap: var(--fkt-space-xs);\r
		}\r
\r
		.title {\r
			display: flex;\r
			flex-direction: column;\r
		}\r
	}\r
\r
	.status-indicator {\r
		margin-top: 1rem;\r
		font-size: 0.875rem;\r
		color: var(--color-text-secondary);\r
\r
		.enabled-status {\r
			color: var(--fkt-color-success, #4caf50);\r
			font-weight: 500;\r
		}\r
\r
		.disabled-status {\r
			color: var(--color-error, #f44336);\r
			font-weight: 500;\r
		}\r
	}\r
}\r
`;var i=`import { Component, computed, linkedSignal, model, signal } from '@angular/core';\r
import { FktAutocompleteComponent, FktAutocompleteOption } from 'frakton-ng/autocomplete';\r
import { Field, disabled, form } from '@angular/forms/signals';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
\r
@Component({\r
	selector: 'fkt-autocomplete-custom-styling-example',\r
	imports: [FktAutocompleteComponent, Field, FktButtonComponent],\r
	templateUrl: './fkt-autocomplete-custom-styling-example.component.html',\r
	styleUrl: './fkt-autocomplete-custom-styling-example.component.scss'\r
})\r
export class FktAutocompleteCustomStylingExampleComponent {\r
	selectedValue = model<FktAutocompleteOption | null>(null);\r
	label = model<string>('Styled Autocomplete');\r
	placeholder = model<string>('This field can be disabled');\r
	options = model<FktAutocompleteOption[]>([\r
		{ value: "apple", label: "Apple" },\r
		{ value: "banana", label: "Banana" },\r
		{ value: "cherry", label: "Cherry" },\r
		{ value: "grape", label: "Grape" },\r
		{ value: "orange", label: "Orange" },\r
		{ value: "strawberry", label: "Strawberry" },\r
	]);\r
\r
	private disabled = signal(false);\r
	protected searchTerm = signal('');\r
\r
	protected filteredOptions = linkedSignal(() => {\r
		const searchTerm = this.searchTerm();\r
\r
		return this.options().filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()));\r
	});\r
\r
	protected control = form(signal(''), path => {\r
		disabled(path, () => this.disabled());\r
	});\r
\r
	protected selectedOption = computed(() => {\r
		return this.options()?.find(option => option.value === this.control().value());\r
	});\r
\r
	protected toggleDisabled() {\r
		this.disabled.update(disabled => !disabled);\r
	}\r
}\r
`;var p=`<div class="example-container">\r
	<h3>Events & Actions</h3>\r
	<p class="description">Demonstrates event handling and custom actions. Each option has edit, favorite, and delete actions. All events are logged below.</p>\r
\r
	<fkt-autocomplete\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		[actions]="actions()"\r
		[options]="filteredOptions()"\r
		(search)="searchTerm.set($event)"\r
	/>\r
\r
	@if (selectedOption()) {\r
		<div class="selected-option">\r
			<div class="title">\r
				<h3>\r
					Selected option\r
				</h3>\r
				<hr>\r
			</div>\r
\r
			<div class="info">\r
				<p>\r
					<strong>Value:</strong> {{ selectedOption()?.value }}\r
				</p>\r
				<p>\r
					<strong>Label:</strong> {{ selectedOption()?.label }}\r
				</p>\r
			</div>\r
		</div>\r
	}\r
\r
	<div class="events-log">\r
		<h4>Event Log</h4>\r
		<div class="last-event">\r
			{{ lastEvent() || 'No events yet. Try searching or clicking actions.' }}\r
		</div>\r
	</div>\r
\r
	<div class="actions-legend">\r
		<h4>Available Actions</h4>\r
		<div class="legend-items">\r
			<div class="legend-item">\r
				<span class="icon-placeholder edit-icon"><fkt-icon name="pencil-square"/></span>\r
				<span>Edit - Modify the tag</span>\r
			</div>\r
			<div class="legend-item">\r
				<span class="icon-placeholder favorite-icon"><fkt-icon name="star"/></span>\r
				<span>Favorite - Mark as favorite</span>\r
			</div>\r
			<div class="legend-item">\r
				<span class="icon-placeholder delete-icon"><fkt-icon name="trash"/></span>\r
				<span>Delete - Remove the tag</span>\r
			</div>\r
		</div>\r
	</div>\r
</div>\r
`;var c=`p {\r
	margin: 0;\r
}\r
\r
* {\r
	box-sizing: border-box;\r
}\r
\r
hr {\r
	border: none;\r
	border-bottom: solid 1px var(--fkt-color-neutral-300);\r
	margin: 0;\r
}\r
\r
.example-container {\r
	width: 100%;\r
\r
	.description {\r
		margin-bottom: 1rem;\r
		color: var(--color-text-secondary);\r
		font-size: 0.875rem;\r
	}\r
\r
	.selected-option {\r
		margin-top: var(--fkt-space-xs);\r
		padding: var(--fkt-space-sm);\r
		border-radius: var(--fkt-radius-md);\r
		font-size: var(--fkt-font-size-sm);\r
		box-shadow: var(--fkt-shadow-md);\r
		border: 1px solid var(--fkt-color-neutral-200);\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-xs);\r
\r
		.info {\r
			display: flex;\r
			flex-direction: column;\r
			gap: var(--fkt-space-xs);\r
		}\r
\r
		.title {\r
			display: flex;\r
			flex-direction: column;\r
		}\r
	}\r
\r
	.events-log {\r
		margin-top: var(--fkt-space-xs);\r
		padding: var(--fkt-space-sm);\r
		border-radius: var(--fkt-radius-md);\r
		font-size: var(--fkt-font-size-sm);\r
		box-shadow: var(--fkt-shadow-md);\r
		border: 1px solid var(--fkt-color-neutral-200);\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-xs);\r
		background-color: var(--fkt-color-modal-background);\r
\r
		h4 {\r
			margin: 0 0 var(--fkt-space-xs);\r
			font-size: var(--fkt-space-sm);\r
			text-transform: uppercase;\r
			font-weight: var(--fkt-font-semibold);\r
		}\r
\r
		.last-event {\r
			font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
			font-size: 0.8rem;\r
			color: var(--color-text-secondary);\r
			padding: 0.5rem;\r
			border-radius: 3px;\r
			border: 1px solid var(--fkt-color-neutral-300);\r
		}\r
	}\r
\r
	.actions-legend {\r
		margin-top: 1.5rem;\r
		padding: 1rem;\r
		background-color: var(--fkt-color-modal-background);\r
		box-shadow: var(--fkt-shadow-md);\r
		border-radius: 4px;\r
\r
		h4 {\r
			margin: 0 0 var(--fkt-space-xs);\r
			font-size: var(--fkt-space-sm);\r
			text-transform: uppercase;\r
			font-weight: var(--fkt-font-semibold);\r
		}\r
\r
		.legend-items {\r
			display: flex;\r
			flex-direction: column;\r
			gap: 0.5rem;\r
		}\r
\r
		.legend-item {\r
			display: flex;\r
			align-items: center;\r
			gap: 0.5rem;\r
			font-size: 0.875rem;\r
			color: var(--color-text-secondary);\r
\r
			.icon-placeholder {\r
				width: 20px;\r
				height: 20px;\r
				display: flex;\r
				align-items: center;\r
				justify-content: center;\r
				border-radius: 3px;\r
				font-size: 12px;\r
\r
				&.edit-icon {\r
					color: var(--fkt-color-primary);\r
				}\r
\r
				&.favorite-icon {\r
					color: var(--fkt-color-warning);\r
				}\r
\r
				&.delete-icon {\r
					color: var(--fkt-color-danger);\r
				}\r
			}\r
		}\r
	}\r
}\r
`;var m=`import { Component, computed, linkedSignal, model, signal } from '@angular/core';\r
import { FktAutocompleteComponent, FktAutocompleteOption } from 'frakton-ng/autocomplete';\r
import { FktButtonAction } from 'frakton-ng/button';\r
import { FktIconComponent } from 'frakton-ng/icon';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'fkt-autocomplete-events-example',\r
	imports: [FktAutocompleteComponent, FktIconComponent, Field],\r
	templateUrl: './fkt-autocomplete-events-example.component.html',\r
	styleUrl: './fkt-autocomplete-events-example.component.scss'\r
})\r
export class FktAutocompleteEventsExampleComponent {\r
	label = model<string>('Manage tags');\r
	placeholder = model<string>('Select or search for tags');\r
	protected lastEvent = signal<string>('');\r
\r
	protected options = model<FktAutocompleteOption[]>([\r
		{value: "frontend", label: "Frontend"},\r
		{value: "backend", label: "Backend"},\r
		{value: "react", label: "React"},\r
		{value: "angular", label: "Angular"},\r
		{value: "vue", label: "Vue"},\r
		{value: "javascript", label: "JavaScript"},\r
		{value: "typescript", label: "TypeScript"},\r
		{value: "nodejs", label: "Node.js"},\r
		{value: "python", label: "Python"},\r
		{value: "java", label: "Java"},\r
	]);\r
\r
	protected searchTerm = signal('');\r
\r
	protected filteredOptions = linkedSignal(() => {\r
		const searchTerm = this.searchTerm();\r
\r
		return this.options().filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()));\r
	});\r
\r
	protected selectedOption = computed(() => {\r
		return this.options()?.find(option => option.value === this.control().value());\r
	});\r
\r
	protected control = form(signal(''));\r
\r
	protected actions = signal<FktButtonAction[]>([\r
		{\r
			icon: "pencil",\r
			color: 'primary',\r
			theme: 'basic',\r
			identifier: 'edit',\r
			ariaLabel: 'Edit option',\r
			click: () => {\r
				this.lastEvent.set("edit")\r
			}\r
		},\r
		{\r
			icon: "star",\r
			color: 'accent',\r
			theme: 'basic',\r
			identifier: 'favorite',\r
			ariaLabel: 'Favorite option',\r
			click: () => {\r
				this.lastEvent.set("favorite")\r
			}\r
		},\r
		{\r
			icon: "trash",\r
			color: 'danger',\r
			theme: 'basic',\r
			identifier: 'delete',\r
			ariaLabel: 'Delete option',\r
			click: () => {\r
				this.lastEvent.set("delete")\r
			}\r
		}\r
	]);\r
\r
	onSearch(searchTerm: string) {\r
		this.lastEvent.set(\`Search: "\${searchTerm}"\`);\r
		console.log('Search term:', searchTerm);\r
	}\r
}\r
`;var d=`<div class="example-container">\r
	<h3>Loading States & No Results</h3>\r
	<p class="description">Demonstrates loading indicators and no results handling. Use the buttons to simulate different states or type to search with realistic delays.</p>\r
\r
	<div class="controls">\r
		<fkt-button\r
			(click)="simulateLoading()"\r
			text="Simulate Loading (2s)"\r
			color="info"\r
			theme="raised">\r
		</fkt-button>\r
		<fkt-button\r
			(click)="simulateNoResults()"\r
			text="Simulate No Results"\r
			color="accent"\r
			theme="raised">\r
		</fkt-button>\r
		<fkt-button\r
			(click)="resetToNormal()"\r
			text="Reset to Normal"\r
			color="success"\r
			theme="raised">\r
		</fkt-button>\r
	</div>\r
\r
	<fkt-autocomplete\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		[options]="filteredOptions()"\r
		[loading]="loading()"\r
		[noResults]="noResults()"\r
		(search)="onSearch($event)"\r
	/>\r
\r
	@if (selectedOption()) {\r
		<div class="selected-option">\r
			<div class="title">\r
				<h3>\r
					Selected option\r
				</h3>\r
				<hr>\r
			</div>\r
\r
			<div class="info">\r
				<p>\r
					<strong>Value:</strong> {{ selectedOption()?.value }}\r
				</p>\r
				<p>\r
					<strong>Label:</strong> {{ selectedOption()?.label }}\r
				</p>\r
			</div>\r
		</div>\r
	}\r
\r
	<div class="state-indicator">\r
		<div class="state-item">\r
			<span class="state-label">Current State:</span>\r
			<span class="state-value" [class]="loading() ? 'loading-state' : 'ready-state'">\r
				{{ loading() ? 'Loading...' : 'Ready' }}\r
			</span>\r
		</div>\r
		<div class="state-item">\r
			<span class="state-label">Options Count:</span>\r
			<span class="state-value">{{ options().length }}</span>\r
		</div>\r
	</div>\r
\r
	<div class="usage-tips">\r
		<h4>Try this:</h4>\r
		<ul>\r
			<li>Type "alice" to search and see loading state</li>\r
			<li>Type "xyz" to see no results message</li>\r
			<li>Use buttons above to manually trigger states</li>\r
		</ul>\r
	</div>\r
</div>\r
`;var u=`p {\r
	margin: 0;\r
}\r
\r
* {\r
	box-sizing: border-box;\r
}\r
\r
hr {\r
	border: none;\r
	border-bottom: solid 1px var(--fkt-color-neutral-300);\r
	margin: 0;\r
}\r
\r
.example-container {\r
	width: 100%;\r
	padding: 1rem;\r
\r
	h3 {\r
		margin-bottom: 0.5rem;\r
		color: var(--color-text-primary);\r
	}\r
\r
	.description {\r
		margin-bottom: 1rem;\r
		color: var(--color-text-secondary);\r
		font-size: 0.875rem;\r
	}\r
\r
	.controls {\r
		display: flex;\r
		gap: 0.5rem;\r
		margin-bottom: 1rem;\r
		flex-wrap: wrap;\r
	}\r
\r
	.selected-option {\r
		margin-top: var(--fkt-space-xs);\r
		padding: var(--fkt-space-sm);\r
		border-radius: var(--fkt-radius-md);\r
		font-size: var(--fkt-font-size-sm);\r
		box-shadow: var(--fkt-shadow-md);\r
		border: 1px solid var(--fkt-color-neutral-200);\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-xs);\r
\r
		.info {\r
			display: flex;\r
			flex-direction: column;\r
			gap: var(--fkt-space-xs);\r
		}\r
\r
		.title {\r
			display: flex;\r
			flex-direction: column;\r
		}\r
	}\r
\r
	.state-indicator {\r
		margin-top: 1rem;\r
		padding: 1rem;\r
		background-color: #155DFC14;\r
		border-radius: 4px;\r
		border-left: 4px solid var(--fkt-color-info);\r
\r
		.state-item {\r
			display: flex;\r
			justify-content: space-between;\r
			align-items: center;\r
			margin-bottom: var(--fkt-space-xs);\r
			font-size: var(--fkt-font-size-sm);\r
\r
			&:last-child {\r
				margin-bottom: 0;\r
			}\r
\r
			.state-label {\r
				font-weight: 500;\r
			}\r
\r
			.state-value {\r
				font-weight: 600;\r
\r
				&.loading-state {\r
					color: var(--fkt-color-info, #2196f3);\r
				}\r
\r
				&.ready-state {\r
					color: var(--fkt-color-success, #4caf50);\r
				}\r
			}\r
		}\r
	}\r
\r
	.usage-tips {\r
		margin-top: var(--fkt-space-xl);\r
		padding: var(--fkt-space-md);\r
		background-color: #155DFC14;\r
		border-radius: var(--fkt-radius-md);\r
\r
		h4 {\r
			margin: 0 0 var(--fkt-space-xs);\r
			font-size: var(--fkt-font-size-sm);\r
			font-weight: var(--fkt-font-semibold);\r
		}\r
\r
		ul {\r
			margin: 0;\r
			padding-left: var(--fkt-space-lg);\r
			color: var(--color-text-secondary);\r
			font-size: var(--fkt-font-size-sm);\r
\r
			li {\r
				margin-bottom: var(--fkt-space-xs);\r
\r
				&:last-child {\r
					margin-bottom: 0;\r
				}\r
			}\r
		}\r
	}\r
}\r
`;var f=`import { Component, computed, linkedSignal, model, signal } from '@angular/core';\r
import { FktAutocompleteComponent, FktAutocompleteOption } from 'frakton-ng/autocomplete';\r
import { FktNoResults } from 'frakton-ng/no-results';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'fkt-autocomplete-loading-states-example',\r
	imports: [FktAutocompleteComponent, FktButtonComponent, Field],\r
	templateUrl: './fkt-autocomplete-loading-states-example.component.html',\r
	styleUrl: './fkt-autocomplete-loading-states-example.component.scss'\r
})\r
export class FktAutocompleteLoadingStatesExampleComponent {\r
	label = model<string>('Search with Loading States');\r
	placeholder = model<string>('Type to search');\r
	loading = model<boolean>(false);\r
\r
	control = form(signal(''));\r
	searchTerm = signal('');\r
	options = signal<FktAutocompleteOption[]>([]);\r
\r
	allOptions: FktAutocompleteOption[] = [\r
		{ value: "user1", label: "Alice Johnson" },\r
		{ value: "user2", label: "Bob Smith" },\r
		{ value: "user3", label: "Carol Davis" },\r
		{ value: "user4", label: "David Wilson" },\r
		{ value: "user5", label: "Emma Brown" },\r
		{ value: "user6", label: "Frank Miller" },\r
		{ value: "user7", label: "Grace Taylor" },\r
		{ value: "user8", label: "Henry Anderson" },\r
	];\r
\r
	noResults = model<FktNoResults>({\r
		label: "No users found. Try a different search term."\r
	});\r
\r
	protected filteredOptions = linkedSignal(() => {\r
		const searchTerm = this.searchTerm();\r
		if (!searchTerm) return this.options();\r
		return this.options().filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()));\r
	});\r
\r
	protected selectedOption = computed(() => {\r
		return this.allOptions?.find(option => option.value === this.control().value());\r
	});\r
\r
	simulateLoading() {\r
		this.loading.set(true);\r
		this.options.set([]);\r
\r
		// Simulate API call delay\r
		setTimeout(() => {\r
			this.options.set(this.allOptions);\r
			this.loading.set(false);\r
		}, 2000);\r
	}\r
\r
	simulateNoResults() {\r
		this.loading.set(true);\r
		this.options.set([]);\r
\r
		// Simulate API call with no results\r
		setTimeout(() => {\r
			this.options.set([]);\r
			this.loading.set(false);\r
		}, 1500);\r
	}\r
\r
	resetToNormal() {\r
		this.loading.set(false);\r
		this.options.set(this.allOptions);\r
	}\r
\r
	onSearch(searchTerm: string) {\r
		this.searchTerm.set(searchTerm);\r
\r
		if (searchTerm.length >= 2) {\r
			this.loading.set(true);\r
			this.options.set([]);\r
\r
			// Simulate search API call\r
			setTimeout(() => {\r
				const filtered = this.allOptions.filter(option =>\r
					option.label.toLowerCase().includes(searchTerm.toLowerCase())\r
				);\r
				this.options.set(filtered);\r
				this.loading.set(false);\r
			}, 800);\r
		} else {\r
			this.options.set(this.allOptions);\r
			this.loading.set(false);\r
		}\r
	}\r
}\r
`;var ne={FktAutocompleteAutoCreationExampleComponent:{name:"FktAutocompleteAutoCreationExample",files:[{name:"fkt-autocomplete-auto-creation-example.component.html",content:e,language:"html"},{name:"fkt-autocomplete-auto-creation-example.component.ts",content:o,language:"typescript"},{name:"fkt-autocomplete-auto-creation-example.component.scss",content:t,language:"css"}]},FktAutocompleteBasicExampleComponent:{name:"FktAutocompleteBasicExample",files:[{name:"fkt-autocomplete-basic-example.component.html",content:a,language:"html"},{name:"fkt-autocomplete-basic-example.component.ts",content:s,language:"typescript"},{name:"fkt-autocomplete-basic-example.component.scss",content:l,language:"css"}]},FktAutocompleteCustomStylingExampleComponent:{name:"FktAutocompleteCustomStylingExample",files:[{name:"fkt-autocomplete-custom-styling-example.component.html",content:n,language:"html"},{name:"fkt-autocomplete-custom-styling-example.component.ts",content:i,language:"typescript"},{name:"fkt-autocomplete-custom-styling-example.component.scss",content:r,language:"css"}]},FktAutocompleteEventsExampleComponent:{name:"FktAutocompleteEventsExample",files:[{name:"fkt-autocomplete-events-example.component.html",content:p,language:"html"},{name:"fkt-autocomplete-events-example.component.ts",content:m,language:"typescript"},{name:"fkt-autocomplete-events-example.component.scss",content:c,language:"css"}]},FktAutocompleteLoadingStatesExampleComponent:{name:"FktAutocompleteLoadingStatesExample",files:[{name:"fkt-autocomplete-loading-states-example.component.html",content:d,language:"html"},{name:"fkt-autocomplete-loading-states-example.component.ts",content:f,language:"typescript"},{name:"fkt-autocomplete-loading-states-example.component.scss",content:u,language:"css"}]}};export{ne as default};
