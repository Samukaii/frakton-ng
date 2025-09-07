import orderStatusExampleStyles from "!!raw-loader!./order-status/order-status-example.component.scss";
import orderStatusExampleTypescript from "!!raw-loader!./order-status/order-status-example.component.ts";
import priorityExampleStyles from "!!raw-loader!./priority/priority-example.component.scss";
import priorityExampleTypescript from "!!raw-loader!./priority/priority-example.component.ts";


export const rawExamples = {
	orderStatusExample: {
		name: "OrderStatusExample",
		files: [
		
			{
				name: "order-status-example.component.ts",
				content: orderStatusExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "order-status-example.component.scss",
				content: orderStatusExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	priorityExample: {
		name: "PriorityExample",
		files: [
		
			{
				name: "priority-example.component.ts",
				content: priorityExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "priority-example.component.scss",
				content: priorityExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
}
