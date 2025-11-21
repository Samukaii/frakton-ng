import"./chunk-ENRHZQ2S.js";var e=`<div class="container">\r
			<fkt-calendar-navigator\r
				[mode]="internalMode()"\r
				[currentDate]="internalDate()"\r
			/>\r
\r
			<div class="container__info">\r
				<div>\r
					<fkt-badge\r
						text="Mode: {{internalMode()}}"\r
						color="info">\r
\r
					</fkt-badge>\r
				</div>\r
\r
				<strong class="container__info-selected">\r
					Selected: {{ internalDate() | date:'fullDate' }}\r
				</strong>\r
			</div>\r
\r
			<div class="container__actions">\r
				<fkt-button\r
					(click)="goToToday()"\r
					text="Today"\r
				>\r
				</fkt-button>\r
\r
				<fkt-button\r
					(click)="toggleMode()"\r
					theme="stroked"\r
					text="Switch to {{ internalMode() === 'month' ? 'Year' : 'Month' }} mode"\r
				>\r
				</fkt-button>\r
			</div>\r
		</div>\r
`;var t=`.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-xl);\r
\r
	&__info {\r
		display: flex;\r
		justify-content: space-between;\r
		align-items: center;\r
		margin-top: var(--fkt-space-xs);\r
		padding-top: var(--fkt-space-xs);\r
		border-top: 1px solid var(--fkt-color-neutral-200);\r
		color: var(--fkt-color-neutral-600);\r
\r
		&-selected {\r
			color: var(--fkt-color-neutral-600);\r
			text-align: center;\r
			font-weight: var(--fkt-font-semibold);\r
		}\r
	}\r
\r
	&__actions {\r
		gap: var(--fkt-space-xs);\r
		display: flex;\r
		justify-content: flex-end;\r
	}\r
}\r
`;var o=`import { Component, input, linkedSignal } from '@angular/core';\r
import { FktCalendarNavigatorComponent, FktCalendarNavigatorMode } from 'frakton-ng/calendar-navigator';\r
import { DatePipe } from '@angular/common';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktBadgeComponent } from 'frakton-ng/badge';\r
\r
@Component({\r
	selector: 'dynamic-mode-example',\r
	templateUrl: './dynamic-mode-example.component.html',\r
	styleUrl: './dynamic-mode-example.component.scss',\r
	imports: [FktCalendarNavigatorComponent, DatePipe, FktButtonComponent, FktBadgeComponent]\r
})\r
export class DynamicModeExampleComponent {\r
	protected currentDate = input(new Date());\r
	protected mode = input<FktCalendarNavigatorMode>('month');\r
\r
	protected internalMode = linkedSignal(this.mode);\r
	protected internalDate = linkedSignal(this.currentDate);\r
\r
	protected toggleMode() {\r
		this.internalMode.update(currentMode => currentMode === 'month' ? 'year' : 'month');\r
	}\r
\r
	protected goToToday() {\r
		this.internalDate.set(new Date());\r
	}\r
}\r
`;var a=`<div class="navigator">\r
	<fkt-calendar-navigator\r
		[mode]="mode()"\r
		[currentDate]="currentDate()"\r
	/>\r
</div>\r
<div class="info">\r
	Selected: {{ dateForm.selectedDate().value() | date:'fullDate' }}\r
</div>\r
`;var n=`.navigator {\r
	border-bottom: solid 1px var(--fkt-color-neutral-200);\r
	padding-bottom: var(--fkt-space-xs);\r
	margin-bottom: var(--fkt-space-md);\r
}\r
\r
.info {\r
	color: var(--fkt-color-neutral-500);\r
	text-align: center;\r
	font-weight: var(--fkt-font-semibold);\r
}\r
`;var r=`import { Component, input, linkedSignal } from '@angular/core';\r
import { DatePipe } from '@angular/common';\r
import { FktCalendarNavigatorComponent, FktCalendarNavigatorMode } from 'frakton-ng/calendar-navigator';\r
import { form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'form-integration-example',\r
	templateUrl: './form-integration-example.component.html',\r
	styleUrl: './form-integration-example.component.scss',\r
	imports: [FktCalendarNavigatorComponent, DatePipe]\r
})\r
export class FormIntegrationExampleComponent {\r
	currentDate = input(new Date());\r
	mode = input<FktCalendarNavigatorMode>('month');\r
\r
	private value = linkedSignal(() => {\r
		return {\r
			selectedDate: this.currentDate()\r
		}\r
	})\r
\r
	protected dateForm = form(this.value)\r
}\r
`;var m=`<fkt-calendar-navigator\r
			[mode]="mode()"\r
			[currentDate]="currentDate()"\r
		/>`;var l="";var i=`import { Component, input } from '@angular/core';\r
import { FktCalendarNavigatorComponent, FktCalendarNavigatorMode } from 'frakton-ng/calendar-navigator';\r
\r
@Component({\r
	selector: 'month-mode-example',\r
	templateUrl: './month-mode-example.component.html',\r
	styleUrl: './month-mode-example.component.scss',\r
	imports: [FktCalendarNavigatorComponent]\r
})\r
export class MonthModeExampleComponent {\r
	currentDate = input(new Date());\r
	mode = input<FktCalendarNavigatorMode>('month');\r
}\r
`;var p=`<fkt-calendar-navigator\r
			[mode]="mode()"\r
			[currentDate]="currentDate()"\r
		/>`;var d="";var s=`import { Component, input } from '@angular/core';\r
import { FktCalendarNavigatorComponent, FktCalendarNavigatorMode } from 'frakton-ng/calendar-navigator';\r
\r
@Component({\r
	selector: 'year-mode-example',\r
	templateUrl: './year-mode-example.component.html',\r
	styleUrl: './year-mode-example.component.scss',\r
	imports: [FktCalendarNavigatorComponent]\r
})\r
export class YearModeExampleComponent {\r
	currentDate = input(new Date());\r
	mode = input<FktCalendarNavigatorMode>('month');\r
}\r
`;var Q={DynamicModeExampleComponent:{name:"DynamicModeExample",files:[{name:"dynamic-mode-example.component.html",content:e,language:"html"},{name:"dynamic-mode-example.component.ts",content:o,language:"typescript"},{name:"dynamic-mode-example.component.scss",content:t,language:"css"}]},FormIntegrationExampleComponent:{name:"FormIntegrationExample",files:[{name:"form-integration-example.component.html",content:a,language:"html"},{name:"form-integration-example.component.ts",content:r,language:"typescript"},{name:"form-integration-example.component.scss",content:n,language:"css"}]},MonthModeExampleComponent:{name:"MonthModeExample",files:[{name:"month-mode-example.component.html",content:m,language:"html"},{name:"month-mode-example.component.ts",content:i,language:"typescript"},{name:"month-mode-example.component.scss",content:l,language:"css"}]},YearModeExampleComponent:{name:"YearModeExample",files:[{name:"year-mode-example.component.html",content:p,language:"html"},{name:"year-mode-example.component.ts",content:s,language:"typescript"},{name:"year-mode-example.component.scss",content:d,language:"css"}]}};export{Q as default};
