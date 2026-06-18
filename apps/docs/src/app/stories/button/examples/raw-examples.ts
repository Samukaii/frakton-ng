// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import iconVariantsExampleTemplate from "./icon-variants/icon-variants-example.component.html" with {loader: "text"};
import iconVariantsExampleStyles from "./icon-variants/icon-variants-example.component.scss" with {loader: "text"};
import iconVariantsExampleTypescript from "./icon-variants/icon-variants-example.component.ts" with {loader: "text"};
import textVariantsExampleTemplate from "./text-variants/text-variants-example.component.html" with {loader: "text"};
import textVariantsExampleStyles from "./text-variants/text-variants-example.component.scss" with {loader: "text"};
import textVariantsExampleTypescript from "./text-variants/text-variants-example.component.ts" with {loader: "text"};


export default {
	IconVariantsExampleComponent: {
		name: "IconVariantsExample",
		files: [
		
			{
				name: "icon-variants-example.component.html",
				content: iconVariantsExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "icon-variants-example.component.ts",
				content: iconVariantsExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "icon-variants-example.component.scss",
				content: iconVariantsExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	TextVariantsExampleComponent: {
		name: "TextVariantsExample",
		files: [
		
			{
				name: "text-variants-example.component.html",
				content: textVariantsExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "text-variants-example.component.ts",
				content: textVariantsExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "text-variants-example.component.scss",
				content: textVariantsExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
} as Record<string, ExternalExample>;
