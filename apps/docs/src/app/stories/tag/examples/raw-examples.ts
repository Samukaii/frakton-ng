// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import tagVariationsExampleTemplate from "./tag-variations-example/tag-variations-example.component.html" with {loader: "text"};
import tagVariationsExampleStyles from "./tag-variations-example/tag-variations-example.component.scss" with {loader: "text"};
import tagVariationsExampleTypescript from "./tag-variations-example/tag-variations-example.component.ts" with {loader: "text"};


export default {
	TagVariationsExampleComponent: {
		name: "TagVariationsExample",
		files: [
		
			{
				name: "tag-variations-example.component.html",
				content: tagVariationsExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "tag-variations-example.component.ts",
				content: tagVariationsExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "tag-variations-example.component.scss",
				content: tagVariationsExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
} as Record<string, ExternalExample>;
