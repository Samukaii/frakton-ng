import"./chunk-A25UGBQK.js";var e=`<div class="example-container">\r
	<fkt-calendar [(currentDate)]="currentDate" [borderless]="borderless()" />\r
</div>\r
`;var t=`:host {\r
	width: 100%;\r
	height: 100%;\r
	display: flex;\r
	justify-content: center;\r
}\r
\r
h3, p {\r
	width: fit-content;\r
}\r
\r
.example-container {\r
	padding: 20px;\r
	border-radius: 8px;\r
	width: 100%;\r
	max-width: 800px;\r
	height: fit-content;\r
	border: solid 1px var(--fkt-color-neutral-200);\r
	display: flex;\r
	align-items: center;\r
	flex-direction: column;\r
\r
	h3 {\r
		margin: 0 0 16px 0;\r
		color: #333;\r
		font-size: 18px;\r
		font-weight: 600;\r
	}\r
}\r
\r
.selected-date {\r
	margin-top: 16px;\r
	font-weight: 500;\r
	color: #333;\r
	font-size: 14px;\r
}\r
`;var a=`import { Component, input, model } from '@angular/core';\r
import { FktCalendarComponent } from 'frakton-ng/calendar';\r
\r
@Component({\r
	selector: 'fkt-calendar-basic-example',\r
	imports: [FktCalendarComponent],\r
	templateUrl: './fkt-calendar-basic-example.component.html',\r
	styleUrl: './fkt-calendar-basic-example.component.scss'\r
})\r
export class FktCalendarBasicExampleComponent {\r
	currentDate = model(new Date());\r
	borderless = input(false);\r
}\r
`;var o=`<div class="example-container">\r
		<fkt-calendar\r
			[(currentDate)]="currentDate"\r
			[borderless]="borderless()"\r
		/>\r
</div>\r
`;var n=`:host {\r
	width: 100%;\r
	height: 100%;\r
	display: flex;\r
	justify-content: center;\r
}\r
\r
* {\r
	box-sizing: border-box;\r
}\r
\r
.example-container {\r
	color: white;\r
	width: 100%;\r
	max-width: 800px;\r
	height: fit-content;\r
	display: flex;\r
	align-items: center;\r
	flex-direction: column;\r
}\r
`;var r=`import { Component, input, model } from '@angular/core';\r
import { FktCalendarComponent } from 'frakton-ng/calendar';\r
\r
@Component({\r
	selector: 'fkt-calendar-borderless-example',\r
	imports: [FktCalendarComponent],\r
	templateUrl: './fkt-calendar-borderless-example.component.html',\r
	styleUrl: './fkt-calendar-borderless-example.component.scss'\r
})\r
export class FktCalendarBorderlessExampleComponent {\r
	currentDate = model(new Date());\r
	borderless = input(true)\r
}\r
`;var l=`<div class="example-container">\r
	<fkt-calendar\r
		[(currentDate)]="currentDate"\r
		[configFn]="customDateConfig"\r
		[borderless]="borderless()"\r
	/>\r
	<div class="legend">\r
		<div class="legend-item">\r
			<span class="legend-color weekend"></span>\r
			<span>Weekends</span>\r
		</div>\r
		<div class="legend-item">\r
			<span class="legend-color holiday"></span>\r
			<span>Holidays</span>\r
		</div>\r
		<div class="legend-item">\r
			<span class="legend-color past"></span>\r
			<span>Past dates</span>\r
		</div>\r
	</div>\r
</div>\r
`;var s=`:host {\r
	width: 100%;\r
	height: 100%;\r
	display: flex;\r
	justify-content: center;\r
}\r
\r
.example-container {\r
	padding: 20px;\r
	border-radius: 8px;\r
	width: 100%;\r
	max-width: 800px;\r
	height: fit-content;\r
	border: solid 1px var(--fkt-color-neutral-200);\r
	display: flex;\r
	align-items: center;\r
	flex-direction: column;\r
\r
	h3 {\r
		margin: 0 0 8px 0;\r
		color: #333;\r
		font-size: 18px;\r
		font-weight: 600;\r
	}\r
\r
	.description {\r
		margin: 0 0 16px 0;\r
		color: #666;\r
		font-size: 14px;\r
	}\r
}\r
\r
.legend {\r
	display: flex;\r
	gap: 16px;\r
	margin-top: 16px;\r
	flex-wrap: wrap;\r
	justify-content: center;\r
\r
	&-item {\r
		display: flex;\r
		align-items: center;\r
		gap: 6px;\r
		font-size: 12px;\r
		color: var(--fkt-color-neutral-600);\r
	}\r
\r
	&-color {\r
		width: 12px;\r
		height: 12px;\r
		border-radius: 2px;\r
		display: block;\r
\r
		&.weekend {\r
			background: var(--fkt-color-info-opacity-20);\r
			border: 1px solid var(--fkt-color-info);\r
		}\r
\r
		&.holiday {\r
			background: var(--fkt-color-danger-opacity-20);\r
			border: 1px solid var(--fkt-color-danger);\r
		}\r
\r
		&.past {\r
			background: var(--fkt-color-neutral-300);\r
			border: 1px solid var(--fkt-color-neutral-400);\r
		}\r
	}\r
}\r
\r
.selected-date {\r
	margin-top: 16px;\r
	font-weight: 500;\r
	color: #333;\r
	font-size: 14px;\r
}\r
\r
// Global styles for calendar date customization.\r
// Always use ::ng-deep combined with :host or other local class to avoid style leaking\r
:host ::ng-deep {\r
	&.weekend {\r
		background-color: var(--fkt-color-info-opacity-20) !important;\r
		color: var(--fkt-color-info) !important;\r
	}\r
\r
	&.holiday {\r
		background-color: var(--fkt-color-danger-opacity-20) !important;\r
		color: var(--fkt-color-danger) !important;\r
		font-weight: 600 !important;\r
	}\r
\r
	&.past {\r
		background-color: var(--fkt-color-neutral-300) !important;\r
		color: var(--fkt-color-neutral-500) !important;\r
		opacity: 0.6;\r
	}\r
}\r
`;var i=`import { Component, input, model } from '@angular/core';\r
import { FktCalendarComponent, FktCalendarDateConfigFn } from 'frakton-ng/calendar';\r
\r
@Component({\r
	selector: 'fkt-calendar-custom-styling-example',\r
	imports: [FktCalendarComponent],\r
	templateUrl: './fkt-calendar-custom-styling-example.component.html',\r
	styleUrl: './fkt-calendar-custom-styling-example.component.scss',\r
})\r
export class FktCalendarCustomStylingExampleComponent {\r
	currentDate = model(new Date("2025-12-25T12:00:00.000Z"));\r
	borderless = input(false);\r
\r
	customDateConfig: FktCalendarDateConfigFn = (date: Date) => {\r
		const today = new Date();\r
		const isWeekend = date.getDay() === 0 || date.getDay() === 6;\r
		const isHoliday = this.isHoliday(date);\r
		const isPast = date < today;\r
\r
		return {\r
			classes: [\r
				...(isWeekend ? ['weekend'] : []),\r
				...(isHoliday ? ['holiday'] : []),\r
				...(isPast ? ['past'] : [])\r
			],\r
			isToday: this.isSameDay(date, today)\r
		};\r
	};\r
\r
	private isHoliday(date: Date): boolean {\r
		// Example holidays (Christmas, New Year)\r
		const month = date.getMonth();\r
		const day = date.getDate();\r
		return (month === 11 && day === 25) || (month === 0 && day === 1);\r
	}\r
\r
	private isSameDay(date1: Date, date2: Date): boolean {\r
		return date1.getDate() === date2.getDate() &&\r
			date1.getMonth() === date2.getMonth() &&\r
			date1.getFullYear() === date2.getFullYear();\r
	}\r
}\r
`;var d=`<div class="example-container">\r
	<fkt-calendar\r
		[(currentDate)]="currentDate"\r
		[configFn]="disabledDateConfig"\r
		[borderless]="borderless()"\r
	/>\r
	<div class="legend">\r
		<div class="legend-item">\r
			<span class="legend-color past-date"></span>\r
			<span>Past dates</span>\r
		</div>\r
		<div class="legend-item">\r
			<span class="legend-color weekend-disabled"></span>\r
			<span>Weekends</span>\r
		</div>\r
		<div class="legend-item">\r
			<span class="legend-color blacked-out"></span>\r
			<span>Blackout dates (15th of month, Dec 24-26)</span>\r
		</div>\r
	</div>\r
\r
	<div class="info-box">\r
		<h4>Disabled Date Rules:</h4>\r
		<ul>\r
			<li>All past dates are disabled</li>\r
			<li>Weekends (Saturday & Sunday) are disabled</li>\r
			<li>15th of every month (maintenance day)</li>\r
			<li>December 24-26 (holiday period)</li>\r
		</ul>\r
	</div>\r
</div>\r
`;var c=`:host {\r
	width: 100%;\r
	height: 100%;\r
	display: flex;\r
	justify-content: center;\r
	align-items: center;\r
}\r
\r
* {\r
	box-sizing: border-box;\r
}\r
\r
.example-container {\r
	padding: 20px;\r
	border-radius: 8px;\r
	max-width: 800px;\r
	height: fit-content;\r
	width: 100%;\r
	border: solid 1px var(--fkt-color-neutral-200);\r
	display: flex;\r
	align-items: center;\r
	flex-direction: column;\r
\r
	h3 {\r
		margin: 0 0 8px 0;\r
		color: #333;\r
		font-size: 18px;\r
		font-weight: 600;\r
	}\r
\r
	.description {\r
		margin: 0 0 16px 0;\r
		color: #666;\r
		font-size: 14px;\r
	}\r
}\r
\r
.legend {\r
	display: flex;\r
	gap: 16px;\r
	margin-top: 16px;\r
	flex-wrap: wrap;\r
\r
	&-item {\r
		display: flex;\r
		align-items: center;\r
		gap: 6px;\r
		font-size: 12px;\r
		color: var(--fkt-color-neutral-600);\r
	}\r
\r
	&-color {\r
		width: 12px;\r
		height: 12px;\r
		border-radius: 2px;\r
		display: block;\r
\r
		&.past-date {\r
			background-color: var(--fkt-color-neutral-300);\r
			border: 1px solid var(--fkt-color-neutral-500);\r
		}\r
\r
		&.weekend-disabled {\r
			background: var(--fkt-color-warning-opacity-20);\r
			border: 1px solid var(--fkt-color-warning);\r
		}\r
\r
		&.blacked-out {\r
			background: var(--fkt-color-danger-opacity-20);\r
			border: 1px solid var(--fkt-color-warning);\r
		}\r
	}\r
}\r
\r
.info-box {\r
	margin-top: 16px;\r
	padding: 12px;\r
	background: var(--fkt-color-info-opacity-10);\r
	border-radius: var(--fkt-radius-md);\r
	color: var(--fkt-color-neutral-900);\r
	border: .5px solid var(--fkt-color-info-opacity-50);\r
	width: 100%;\r
\r
	h4 {\r
		margin: 0 0 8px 0;\r
		font-size: 14px;\r
		font-weight: 600;\r
	}\r
\r
	ul {\r
		margin: 0;\r
		padding-left: 16px;\r
		font-size: 13px;\r
\r
		li {\r
			margin-bottom: 4px;\r
		}\r
	}\r
}\r
\r
// Global styles for calendar date customization.\r
// Always use ::ng-deep combined with :host or other local class to avoid style leaking\r
:host ::ng-deep fkt-calendar {\r
	.disabled {\r
		cursor: not-allowed;\r
		opacity: 1;\r
	}\r
\r
	.past-date {\r
		background-color: var(--fkt-color-neutral-300);\r
		color: var(--fkt-color-neutral-500);\r
	}\r
\r
	.weekend-disabled {\r
		background-color: var(--fkt-color-warning-opacity-20);\r
		color: var(--fkt-color-warning);\r
	}\r
\r
	.blacked-out {\r
		background-color: var(--fkt-color-danger-opacity-20);\r
		color: var(--fkt-color-danger);\r
		position: relative;\r
\r
		&::before {\r
			content: '';\r
			position: absolute;\r
			top: 50%;\r
			left: 10%;\r
			right: 10%;\r
			height: 1px;\r
			background: var(--fkt-color-danger);\r
		}\r
	}\r
}\r
`;var p=`import { Component, input, model } from '@angular/core';\r
import { FktCalendarComponent, FktCalendarDateConfigFn } from 'frakton-ng/calendar';\r
\r
@Component({\r
	selector: 'fkt-calendar-disabled-dates-example',\r
	imports: [FktCalendarComponent],\r
	templateUrl: './fkt-calendar-disabled-dates-example.component.html',\r
	styleUrl: './fkt-calendar-disabled-dates-example.component.scss'\r
})\r
export class FktCalendarDisabledDatesExampleComponent {\r
	currentDate = model(new Date());\r
	borderless = input(false);\r
\r
	disabledDateConfig: FktCalendarDateConfigFn = (date: Date) => {\r
		const today = new Date();\r
		const isPast = date < today;\r
		const isWeekend = date.getDay() === 0 || date.getDay() === 6;\r
		const isBlackedOut = this.isBlackedOutDate(date);\r
\r
		const isDisabled = isPast || isWeekend || isBlackedOut;\r
\r
		return {\r
			classes: [\r
				...(isPast ? ['past-date'] : []),\r
				...(isWeekend ? ['weekend-disabled'] : []),\r
				...(isBlackedOut ? ['blacked-out'] : []),\r
				...(isDisabled ? ['disabled'] : [])\r
			],\r
			onClick: isDisabled ? undefined : () => {\r
				console.log('Date selected:', date);\r
			}\r
		};\r
	};\r
\r
	private isBlackedOutDate(date: Date): boolean {\r
		// Example: Block out specific date ranges (e.g., maintenance periods)\r
		const month = date.getMonth();\r
		const day = date.getDate();\r
\r
		// Block December 24-26 (holiday period)\r
		if (month === 11 && day >= 24 && day <= 26) {\r
			return true;\r
		}\r
\r
		// Block every 15th of the month (maintenance day)\r
		if (day === 15) {\r
			return true;\r
		}\r
\r
		return false;\r
	}\r
}\r
`;var m=`<div class="example-container">\r
	<fkt-calendar\r
		[(currentDate)]="currentDate"\r
		[configFn]="eventDateConfig()"\r
		[borderless]="borderless()"\r
	/>\r
	<div class="event-info">\r
		<div class="click-history">\r
			<div class="click-history-header">\r
				<h4>Click History</h4>\r
				<fkt-button text="Clear" (click)="clearHistory()" [disabled]="clickHistory().length === 0"></fkt-button>\r
			</div>\r
			<div class="history-items">\r
				@if (clickHistory().length === 0) {\r
					<p class="no-history">Click on any date to see interaction history</p>\r
				} @else {\r
					@for (item of clickHistory(); track item) {\r
						<div class="history-item">{{ item }}</div>\r
					}\r
				}\r
			</div>\r
		</div>\r
	</div>\r
</div>\r
`;var f=`:host {\r
	width: 100%;\r
	height: 100%;\r
	display: flex;\r
	justify-content: center;\r
}\r
\r
.example-container {\r
	padding: 20px;\r
	border: solid 1px var(--fkt-color-neutral-200);\r
	border-radius: 8px;\r
	display: flex;\r
	align-items: center;\r
	flex-direction: column;\r
	width: 100%;\r
	max-width: 800px;\r
	height: fit-content;\r
\r
	h3 {\r
		margin: 0 0 8px 0;\r
		color: #333;\r
		font-size: 18px;\r
		font-weight: 600;\r
	}\r
\r
	.description {\r
		margin: 0 0 16px 0;\r
		color: #666;\r
		font-size: 14px;\r
	}\r
}\r
\r
.event-info {\r
	margin-top: 16px;\r
	width: 100%;\r
}\r
\r
.click-history {\r
	width: 100%;\r
\r
	&-header {\r
		display: flex;\r
		justify-content: space-between;\r
		align-items: center;\r
		margin-bottom: 8px;\r
\r
		h4 {\r
			margin: 0;\r
			font-size: 14px;\r
			font-weight: 600;\r
			color: var(--fkt-color-neutral-600);\r
			flex: 1;\r
		}\r
\r
		button {\r
			padding: 4px 8px;\r
			font-size: 12px;\r
			border: 1px solid var(--fkt-color-neutral-400);\r
			background: var(--fkt-color-neutral-100);\r
			border-radius: 4px;\r
			cursor: pointer;\r
\r
			&:hover:not(:disabled) {\r
				background: #f5f5f5;\r
			}\r
\r
			&:disabled {\r
				opacity: 0.5;\r
				cursor: not-allowed;\r
			}\r
		}\r
	}\r
\r
	.history-items {\r
		max-height: 300px;\r
		overflow-y: auto;\r
		border: 1px solid var(--fkt-color-neutral-400);\r
		border-radius: 4px;\r
		background: var(--color-neutral-100);\r
	}\r
\r
	.no-history {\r
		padding: 12px;\r
		text-align: center;\r
		color: var(--fkt-color-neutral-500);\r
		font-size: 12px;\r
		margin: 0;\r
	}\r
\r
	.history-item {\r
		padding: var(--fkt-space-md);\r
		border-bottom: 1px solid var(--fkt-color-neutral-400);\r
		font-size: 12px;\r
		color: var(--fkt-color-neutral-950);\r
\r
		&:last-child {\r
			border-bottom: none;\r
		}\r
	}\r
}\r
\r
.selected-date {\r
	margin-top: 16px;\r
	font-weight: 500;\r
	color: var(--fkt-color-neutral-600);\r
	font-size: 14px;\r
}\r
\r
// Global styles for calendar date events\r
:host ::ng-deep {\r
	.has-events {\r
		position: relative;\r
		background: var(--fkt-color-success-opacity-20);\r
	}\r
}\r
`;var g=`import { Component, computed, input, model, signal } from '@angular/core';\r
import { FktCalendarComponent, FktCalendarDateConfigFn } from 'frakton-ng/calendar';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
\r
@Component({\r
	selector: 'fkt-calendar-events-example',\r
	imports: [FktCalendarComponent, FktButtonComponent],\r
	templateUrl: './fkt-calendar-events-example.component.html',\r
	styleUrl: './fkt-calendar-events-example.component.scss'\r
})\r
export class FktCalendarEventsExampleComponent {\r
	currentDate = model(new Date());\r
	borderless = input(false);\r
	eventDates = signal<string[]>([])\r
\r
	clickHistory = computed(() => {\r
		const dates = this.eventDates();\r
\r
		return dates.map(date => {\r
			return \`\${new Date().toLocaleTimeString()}: Clicked \${new Date(date).toLocaleDateString()}\`\r
		})\r
	});\r
\r
	eventDateConfig = computed<FktCalendarDateConfigFn>(() => {\r
		const history = this.eventDates();\r
\r
		return (date) => {\r
			return {\r
				onClick: () => this.handleDateClick(date),\r
				classes: history.includes(date.toISOString()) ? ['has-events'] : []\r
			};\r
		}\r
	});\r
\r
	private handleDateClick(date: Date): void {\r
		this.eventDates.update(eventDates => [...eventDates, date.toISOString()]);\r
	}\r
\r
	clearHistory(): void {\r
		this.eventDates.set([]);\r
	}\r
}\r
`;var le={FktCalendarBasicExampleComponent:{name:"FktCalendarBasicExample",files:[{name:"fkt-calendar-basic-example.component.html",content:e,language:"html"},{name:"fkt-calendar-basic-example.component.ts",content:a,language:"typescript"},{name:"fkt-calendar-basic-example.component.scss",content:t,language:"css"}]},FktCalendarBorderlessExampleComponent:{name:"FktCalendarBorderlessExample",files:[{name:"fkt-calendar-borderless-example.component.html",content:o,language:"html"},{name:"fkt-calendar-borderless-example.component.ts",content:r,language:"typescript"},{name:"fkt-calendar-borderless-example.component.scss",content:n,language:"css"}]},FktCalendarCustomStylingExampleComponent:{name:"FktCalendarCustomStylingExample",files:[{name:"fkt-calendar-custom-styling-example.component.html",content:l,language:"html"},{name:"fkt-calendar-custom-styling-example.component.ts",content:i,language:"typescript"},{name:"fkt-calendar-custom-styling-example.component.scss",content:s,language:"css"}]},FktCalendarDisabledDatesExampleComponent:{name:"FktCalendarDisabledDatesExample",files:[{name:"fkt-calendar-disabled-dates-example.component.html",content:d,language:"html"},{name:"fkt-calendar-disabled-dates-example.component.ts",content:p,language:"typescript"},{name:"fkt-calendar-disabled-dates-example.component.scss",content:c,language:"css"}]},FktCalendarEventsExampleComponent:{name:"FktCalendarEventsExample",files:[{name:"fkt-calendar-events-example.component.html",content:m,language:"html"},{name:"fkt-calendar-events-example.component.ts",content:g,language:"typescript"},{name:"fkt-calendar-events-example.component.scss",content:f,language:"css"}]}};export{le as default};
