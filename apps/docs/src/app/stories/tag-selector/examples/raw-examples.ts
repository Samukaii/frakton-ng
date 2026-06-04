// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import orderStatusExampleTemplate from "./order-status/order-status-example.component.html" with {loader: "text"};
import orderStatusExampleStyles from "./order-status/order-status-example.component.scss" with {loader: "text"};
import orderStatusExampleTypescript from "./order-status/order-status-example.component.ts" with {loader: "text"};
import priorityExampleTemplate from "./priority/priority-example.component.html" with {loader: "text"};
import priorityExampleStyles from "./priority/priority-example.component.scss" with {loader: "text"};
import priorityExampleTypescript from "./priority/priority-example.component.ts" with {loader: "text"};


export default {
	OrderStatusExampleComponent: {
		name: "OrderStatusExample",
		files: [
		
			{
				name: "order-status-example.component.html",
				content: orderStatusExampleTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "order-status-example.component.ts",
				content: orderStatusExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "order-status-example.component.scss",
				content: orderStatusExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	PriorityExampleComponent: {
		name: "PriorityExample",
		files: [
		
			{
				name: "priority-example.component.html",
				content: priorityExampleTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "priority-example.component.ts",
				content: priorityExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "priority-example.component.scss",
				content: priorityExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
} as Record<string, ExternalExample>;
