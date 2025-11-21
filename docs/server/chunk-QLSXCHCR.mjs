import './polyfills.server.mjs';
import"./chunk-RIAI3ORJ.mjs";var e=`<div class="info">\r
	<strong>\r
		Click field to load users\r
	</strong>\r
	<p>\r
		<strong>Status:</strong>\r
		{{ loading() ? 'Loading users from API...' : 'Users loaded successfully' }}\r
	</p>\r
</div>\r
<fkt-select\r
	[field]="control"\r
	(selectOpened)="loadOptions()"\r
	[label]="label()"\r
	[placeholder]="placeholder()"\r
	[options]="options()"\r
	[loading]="loading()"\r
/>\r
`;var t=`:host {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
}\r
\r
p {\r
	margin: 0;\r
}\r
\r
.info {\r
	padding: var(--fkt-space-md);\r
	background-color: var(--fkt-color-info-opacity-10);\r
	border-radius: var(--fkt-radius-md);\r
	font-size: var(--fkt-font-size-sm);\r
	color: var(--fkt-color-neutral-700);\r
	display: flex;\r
	flex-direction: column;\r
}\r
`;var o=`import { Component, input, signal } from '@angular/core';\r
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'select-async-loading-example',\r
	templateUrl: './async-loading-example.component.html',\r
	styleUrl: './async-loading-example.component.scss',\r
	imports: [FktSelectComponent, Field]\r
})\r
export class AsyncLoadingExampleComponent {\r
	label = input<string>();\r
	placeholder = input<string>();\r
	options = signal<FktSelectOption[]>([]);\r
	loading = signal(false);\r
\r
	protected control = form(signal(''));\r
\r
	async loadOptions() {\r
		this.loading.set(true);\r
		this.options.set([]);\r
\r
		// Simulate API call\r
		await new Promise(resolve => setTimeout(resolve, 2000));\r
\r
		const users: FktSelectOption[] = [\r
			{value: 'user1', label: 'John Doe'},\r
			{value: 'user2', label: 'Jane Smith'},\r
			{value: 'user3', label: 'Bob Johnson'},\r
			{value: 'user4', label: 'Alice Williams'},\r
			{value: 'user5', label: 'Charlie Brown'},\r
		];\r
\r
		this.options.set(users);\r
		this.loading.set(false);\r
	}\r
}\r
`;var l=`<fkt-select\r
	[field]="control"\r
	[label]="label()"\r
	[placeholder]="placeholder()"\r
	[options]="options()"\r
	[loading]="loading()"\r
	[noResults]="noResults()"\r
/>\r
<div class="info">\r
	<strong>Selected Value:</strong> {{ control().value() || 'None' }}\r
</div>\r
`;var a=`:host {
	display: flex;
	flex-direction: column;
	gap: var(--fkt-space-md);
}

.info {
	padding: var(--fkt-space-md);
	background-color: var(--fkt-color-info-opacity-10);
	color: var(--fkt-color-neutral-700);
	border-radius: var(--fkt-radius-md);
	font-size: var(--fkt-font-size-sm);
}

fkt-select {
    width: fit-content;
}
`;var n=`import { Component, input, signal } from '@angular/core';\r
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'select-default-example',\r
	templateUrl: './default-example.component.html',\r
	styleUrl: './default-example.component.scss',\r
	imports: [FktSelectComponent, Field]\r
})\r
export class DefaultExampleComponent {\r
	label = input<string>();\r
	placeholder = input<string>();\r
	options = input.required<FktSelectOption[]>();\r
	loading = input<boolean>(false);\r
	noResults = input<any>();\r
\r
	protected control = form(signal(''));\r
}\r
`;var s=`<fkt-select\r
	[field]="control"\r
	[label]="label()"\r
	[placeholder]="placeholder()"\r
	[options]="options()"\r
/>\r
<fkt-button\r
	(click)="toggleDisabled()"\r
	theme="stroked"\r
	[text]="control().disabled() ? 'Enable field' : 'Disable field'"\r
>\r
</fkt-button>\r
`;var r=`:host {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
}\r
`;var i=`import { Component, input, signal } from '@angular/core';\r
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { Field, disabled, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'select-disabled-example',\r
	styleUrl: './disabled-example.component.scss',\r
	templateUrl: './disabled-example.component.html',\r
	imports: [FktSelectComponent, FktButtonComponent, Field]\r
})\r
export class DisabledExampleComponent {\r
	label = input<string>();\r
	placeholder = input<string>();\r
	options = input.required<FktSelectOption[]>();\r
\r
	protected control = form(signal('option2'), path => {\r
		disabled(path, () => this.disabled());\r
	});\r
	protected disabled = signal(true);\r
\r
	toggleDisabled() {\r
		this.disabled.update(disabled => !disabled);\r
		console.log(this.disabled())\r
	}\r
}\r
`;var p=`<fkt-select\r
	[field]="control"\r
	[label]="label()"\r
	[placeholder]="placeholder()"\r
	[options]="options()"\r
	[loading]="loading()"\r
	[noResults]="noResults()!"\r
/>\r
<div class="info">\r
	Click the dropdown to see the custom "no results" message\r
</div>\r
`;var m=`:host {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
}\r
\r
.info {\r
	padding: var(--fkt-space-md);\r
	background-color: var(--fkt-color-info-opacity-10);\r
	color: var(--fkt-color-neutral-700);\r
	border-radius: var(--fkt-radius-md);\r
	font-size: var(--fkt-font-size-sm);\r
}\r
`;var c=`import { Component, input, signal } from '@angular/core';\r
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';\r
import { FktNoResults } from 'frakton-ng/no-results';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'select-empty-state-example',\r
	templateUrl: './empty-state-example.component.html',\r
	styleUrl: './empty-state-example.component.scss',\r
	imports: [FktSelectComponent, Field]\r
})\r
export class EmptyStateExampleComponent {\r
	label = input<string>();\r
	placeholder = input<string>();\r
	options = input.required<FktSelectOption[]>();\r
	loading = input<boolean>(false);\r
	noResults = input<FktNoResults>();\r
\r
	protected control = form(signal(''))\r
}\r
`;var d=`<fkt-select\r
	[field]="control"\r
	[label]="label()"\r
	[placeholder]="placeholder()"\r
	[options]="options()"\r
/>\r
<div class="info">\r
	<p>\r
		Scrollable dropdown with {{ options().length }} options\r
	</p>\r
	<p>\r
		<strong>Selected:</strong> {{ control().value() || 'None' }}\r
	</p>\r
</div>\r
`;var g=`:host {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
}\r
\r
.info {\r
	padding: var(--fkt-space-md);\r
	background-color: var(--fkt-color-info-opacity-10);\r
	color: var(--fkt-color-neutral-700);\r
	border-radius: var(--fkt-radius-md);\r
	font-size: var(--fkt-font-size-sm);\r
\r
	p {\r
		margin: var(--fkt-space-xs) 0 0;\r
	}\r
}\r
`;var f=`import { Component, input, signal } from '@angular/core';\r
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'select-large-list-example',\r
	templateUrl: './large-list-example.component.html',\r
	styleUrl: './large-list-example.component.scss',\r
	imports: [FktSelectComponent, Field]\r
})\r
export class LargeListExampleComponent {\r
	label = input<string>();\r
	placeholder = input<string>();\r
	options = input.required<FktSelectOption[]>();\r
\r
	protected control = form(signal(''));\r
}\r
`;var u=`<fkt-select\r
	[field]="control"\r
	[label]="label()"\r
	[placeholder]="placeholder()"\r
	[options]="options()"\r
	[loading]="loading()"\r
/>\r
<div class="info">\r
	<p>\r
		<strong>Loading State:</strong> {{ loading() ? 'Loading options...' : 'Ready' }}\r
	</p>\r
</div>\r
`;var x=`:host {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
}\r
\r
.info {\r
	padding: var(--fkt-space-md);\r
	background-color: var(--fkt-color-info-opacity-10);\r
	color: var(--fkt-color-neutral-700);\r
	border-radius: var(--fkt-radius-md);\r
	font-size: var(--fkt-font-size-sm);\r
}\r
`;var k=`import { Component, input, signal } from '@angular/core';\r
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'select-loading-example',\r
	templateUrl: './loading-example.component.html',\r
	styleUrl: './loading-example.component.scss',\r
	imports: [FktSelectComponent, Field]\r
})\r
export class LoadingExampleComponent {\r
	label = input<string>();\r
	placeholder = input<string>();\r
	options = input.required<FktSelectOption[]>();\r
	loading = input<boolean>(true);\r
\r
	protected control = form(signal(''));\r
}\r
`;var h=`<fkt-select\r
	[field]="control"\r
	[label]="label()"\r
	[placeholder]="placeholder()"\r
	[options]="options()"\r
/>\r
<div class="info">\r
	<strong>Pre-selected Country:</strong> {{ selectedLabel() }}\r
</div>\r
`;var v=`:host {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
}\r
\r
.info {\r
	padding: var(--fkt-space-md);\r
	background-color: var(--fkt-color-info-opacity-10);\r
	color: var(--fkt-color-neutral-700);\r
	border-radius: var(--fkt-radius-md);\r
	font-size: var(--fkt-font-size-sm);\r
}\r
`;var y=`import { Component, computed, input, signal } from '@angular/core';\r
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'select-preselected-example',\r
	templateUrl: './preselected-example.component.html',\r
	styleUrl: './preselected-example.component.scss',\r
	imports: [FktSelectComponent, Field]\r
})\r
export class PreselectedExampleComponent {\r
	label = input<string>();\r
	placeholder = input<string>();\r
	options = input.required<FktSelectOption[]>();\r
\r
	protected control = form(signal('us')); // Pre-selected value\r
\r
	selectedLabel = computed(() => {\r
		const value = this.control().value();\r
		const option = this.options().find(opt => opt.value === value);\r
		return option ? option.label : 'None';\r
	});\r
}\r
`;var b=`<fkt-select\r
	[field]="control"\r
	[label]="label()"\r
	[placeholder]="placeholder()"\r
	[options]="options()"\r
/>\r
<fkt-field-error [show]="control().invalid() && control().touched()" [error]="control().errors()[0]?.message"/>\r
<div class="info">\r
	<p>\r
		<strong>Validation Status:</strong>\r
		{{ control().valid() ? 'Valid \u2713' : 'Invalid - Priority is required' }}\r
	</p>\r
	<div>\r
		Touch field and click outside to Show Error\r
	</div>\r
</div>\r
`;var E=`:host {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
}\r
\r
.info {\r
	padding: var(--fkt-space-md);\r
	background-color: var(--fkt-color-info-opacity-10);\r
	color: var(--fkt-color-neutral-700);\r
	border-radius: var(--fkt-radius-md);\r
	font-size: var(--fkt-font-size-sm);\r
\r
	div {\r
		margin-top: var(--fkt-space-xs);\r
		font-weight: var(--fkt-font-semibold);\r
	}\r
}\r
`;var F=`import { Component, input, signal } from '@angular/core';\r
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';\r
import { Field, form, required } from '@angular/forms/signals';\r
import { FktFieldErrorComponent } from 'frakton-ng/field-error';\r
\r
@Component({\r
	selector: 'select-validation-example',\r
	templateUrl: './validation-example.component.html',\r
	styleUrl: './validation-example.component.scss',\r
	imports: [FktSelectComponent, Field, FktFieldErrorComponent]\r
})\r
export class ValidationExampleComponent {\r
	label = input<string>();\r
	placeholder = input<string>();\r
	options = input.required<FktSelectOption[]>();\r
\r
	protected control = form(signal(''), path => {\r
		required(path, {message: "Field is required"});\r
	});\r
}\r
`;var We={AsyncLoadingExampleComponent:{name:"AsyncLoadingExample",files:[{name:"async-loading-example.component.html",content:e,language:"html"},{name:"async-loading-example.component.ts",content:o,language:"typescript"},{name:"async-loading-example.component.scss",content:t,language:"css"}]},DefaultExampleComponent:{name:"DefaultExample",files:[{name:"default-example.component.html",content:l,language:"html"},{name:"default-example.component.ts",content:n,language:"typescript"},{name:"default-example.component.scss",content:a,language:"css"}]},DisabledExampleComponent:{name:"DisabledExample",files:[{name:"disabled-example.component.html",content:s,language:"html"},{name:"disabled-example.component.ts",content:i,language:"typescript"},{name:"disabled-example.component.scss",content:r,language:"css"}]},EmptyStateExampleComponent:{name:"EmptyStateExample",files:[{name:"empty-state-example.component.html",content:p,language:"html"},{name:"empty-state-example.component.ts",content:c,language:"typescript"},{name:"empty-state-example.component.scss",content:m,language:"css"}]},LargeListExampleComponent:{name:"LargeListExample",files:[{name:"large-list-example.component.html",content:d,language:"html"},{name:"large-list-example.component.ts",content:f,language:"typescript"},{name:"large-list-example.component.scss",content:g,language:"css"}]},LoadingExampleComponent:{name:"LoadingExample",files:[{name:"loading-example.component.html",content:u,language:"html"},{name:"loading-example.component.ts",content:k,language:"typescript"},{name:"loading-example.component.scss",content:x,language:"css"}]},PreselectedExampleComponent:{name:"PreselectedExample",files:[{name:"preselected-example.component.html",content:h,language:"html"},{name:"preselected-example.component.ts",content:y,language:"typescript"},{name:"preselected-example.component.scss",content:v,language:"css"}]},ValidationExampleComponent:{name:"ValidationExample",files:[{name:"validation-example.component.html",content:b,language:"html"},{name:"validation-example.component.ts",content:F,language:"typescript"},{name:"validation-example.component.scss",content:E,language:"css"}]}};export{We as default};
