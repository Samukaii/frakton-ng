import './polyfills.server.mjs';
import"./chunk-RIAI3ORJ.mjs";var e=`<div class="container">\r
	<div class="container__item">\r
		<h3>Order #1234 Status:</h3>\r
		<fkt-badge-selector\r
			[(value)]="value"\r
			[options]="options()"\r
		/>\r
	</div>\r
\r
	<div class="container__status">\r
		Current status:\r
		<strong>\r
			{{ currentStatusLabel() }}\r
		</strong>\r
	</div>\r
</div>\r
`;var t=`.container {\r
	border: solid 1px var(--fkt-color-neutral-400);\r
	display: flex;\r
	flex-direction: column;\r
	border-radius: var(--fkt-radius-md);\r
	padding: var(--fkt-space-md);\r
	gap: var(--fkt-space-md);\r
\r
	&__item {\r
		display: flex;\r
		align-items: center;\r
		gap: var(--fkt-space-sm);\r
\r
		h3 {\r
			margin: 0;\r
			font-size: var(--fkt-font-size-sm);\r
			font-weight: var(--fkt-font-semibold);\r
		}\r
	}\r
\r
	&__status {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
	}\r
}\r
`;var o=`import { Component, computed, input, model } from '@angular/core';\r
import { FktBadge, FktBadgeSelectorComponent } from "frakton-ng/badge-selector";\r
\r
@Component({\r
	selector: 'order-status-example',\r
	templateUrl: './order-status-example.component.html',\r
	styleUrl: './order-status-example.component.scss',\r
	imports: [FktBadgeSelectorComponent]\r
})\r
export class OrderStatusExampleComponent {\r
	options = input<FktBadge[]>([\r
		{id: "pending", color: "warning", name: "Pending"},\r
		{id: "processing", color: "info", name: "Processing"},\r
		{id: "shipped", color: "info", name: "Shipped"},\r
		{id: "delivered", color: "success", name: "Delivered"},\r
		{id: "cancelled", color: "danger", name: "Cancelled"}\r
	]);\r
\r
	value = model<string>('processing');\r
\r
	protected currentStatusLabel = computed(() => {\r
		const statusId = this.value();\r
\r
		const status = this.options().find(\r
			status => status.id === statusId\r
		);\r
\r
		return status ? status.name : 'None';\r
	})\r
}\r
`;var r=`<div class="container">\r
	<h3>Task Priority</h3>\r
\r
	<div class="container__selector">\r
		<label>Priority Level:</label>\r
		<fkt-badge-selector\r
			[(value)]="value"\r
			[options]="options()"\r
		/>\r
	</div>\r
\r
	<div class="container__description">\r
		{{ priorityDescription() }}\r
	</div>\r
</div>\r
`;var a=`.container {\r
	padding: var(--fkt-space-md);\r
	border: solid 1px var(--fkt-color-neutral-400);\r
	border-radius: var(--fkt-space-md);\r
\r
	h3 {\r
		font-size: var(--fkt-font-size-lg);\r
		font-weight: var(--fkt-font-semibold);\r
		margin-bottom: var(--fkt-space-sm);\r
	}\r
\r
	&__selector {\r
		display: flex;\r
		align-items: center;\r
		gap: var(--fkt-space-sm);\r
\r
		label {\r
			font-size: var(--fkt-font-size-sm);\r
			font-weight: var(--fkt-font-medium);\r
		}\r
	}\r
\r
	&__description {\r
		margin-top: var(--fkt-space-sm);\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
	}\r
}\r
`;var s=`import { Component, computed, input, model } from '@angular/core';\r
import { FktBadge, FktBadgeSelectorComponent } from 'frakton-ng/badge-selector';\r
\r
type BadgeType = 'low' | 'medium' | 'high' | 'critical';\r
\r
@Component({\r
	selector: 'priority-example',\r
	templateUrl: './priority-example.component.html',\r
	styleUrl: './priority-example.component.scss',\r
	imports: [FktBadgeSelectorComponent]\r
})\r
export class PriorityExampleComponent {\r
	options = input<FktBadge<BadgeType>[]>([\r
		{id: "low", color: "success", name: "Low"},\r
		{id: "medium", color: "warning", name: "Medium"},\r
		{id: "high", color: "danger", name: "High"},\r
		{id: "critical", color: "danger", name: "Critical"}\r
	]);\r
\r
	value = model<BadgeType>('medium');\r
\r
	priorityDescription = computed(() => {\r
		const descriptions: Record<BadgeType, string> = {\r
			low: 'Tasks that can be completed when time permits',\r
			medium: 'Tasks that should be completed within normal timeframes',\r
			high: 'Tasks requiring prompt attention and completion',\r
			critical: 'Urgent tasks requiring immediate action'\r
		};\r
\r
		return descriptions[this.value()] || 'Select a priority level';\r
	})\r
}\r
`;var E={OrderStatusExampleComponent:{name:"OrderStatusExample",files:[{name:"order-status-example.component.html",content:e,language:"html"},{name:"order-status-example.component.ts",content:o,language:"typescript"},{name:"order-status-example.component.scss",content:t,language:"css"}]},PriorityExampleComponent:{name:"PriorityExample",files:[{name:"priority-example.component.html",content:r,language:"html"},{name:"priority-example.component.ts",content:s,language:"typescript"},{name:"priority-example.component.scss",content:a,language:"css"}]}};export{E as default};
