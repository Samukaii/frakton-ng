// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import basicExampleTemplate from "./basic/basic-example.component.html" with {loader: "text"};
import basicExampleStyles from "./basic/basic-example.component.scss" with {loader: "text"};
import basicExampleTypescript from "./basic/basic-example.component.ts" with {loader: "text"};


export default {
	BasicExampleComponent: {
		name: "BasicExample",
		files: [
		
			{
				name: "basic-example.component.html",
				content: basicExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "basic-example.component.ts",
				content: basicExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "basic-example.component.scss",
				content: basicExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
} as Record<string, ExternalExample>;
