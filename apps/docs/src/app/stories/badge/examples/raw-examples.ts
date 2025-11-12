// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import badgeVariationsExampleTypescript from "./badge-variations-example.component.ts" with {loader: "text"};


export default {
	BadgeVariationsExampleComponent: {
		name: "BadgeVariationsExample",
		files: [
		
			{
				name: "badge-variations-example.component.ts",
				content: badgeVariationsExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
		]
	},
} as Record<string, ExternalExample>;
