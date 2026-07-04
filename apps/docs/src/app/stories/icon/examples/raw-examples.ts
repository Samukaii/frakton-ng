// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import iconBasicExampleTemplate from "./basic/icon-basic-example.component.html" with {loader: "text"};
import iconBasicExampleStyles from "./basic/icon-basic-example.component.scss" with {loader: "text"};
import iconBasicExampleTypescript from "./basic/icon-basic-example.component.ts" with {loader: "text"};
import iconCustomExampleTemplate from "./custom-icon/icon-custom-example.component.html" with {loader: "text"};
import iconCustomExampleStyles from "./custom-icon/icon-custom-example.component.scss" with {loader: "text"};
import iconCustomExampleTypescript from "./custom-icon/icon-custom-example.component.ts" with {loader: "text"};
import iconCustomizationExampleTemplate from "./customization/icon-customization-example.component.html" with {loader: "text"};
import iconCustomizationExampleStyles from "./customization/icon-customization-example.component.scss" with {loader: "text"};
import iconCustomizationExampleTypescript from "./customization/icon-customization-example.component.ts" with {loader: "text"};
import iconSizesExampleTemplate from "./sizes/icon-sizes-example.component.html" with {loader: "text"};
import iconSizesExampleStyles from "./sizes/icon-sizes-example.component.scss" with {loader: "text"};
import iconSizesExampleTypescript from "./sizes/icon-sizes-example.component.ts" with {loader: "text"};
import iconVariantsExampleTemplate from "./variants/icon-variants-example.component.html" with {loader: "text"};
import iconVariantsExampleStyles from "./variants/icon-variants-example.component.scss" with {loader: "text"};
import iconVariantsExampleTypescript from "./variants/icon-variants-example.component.ts" with {loader: "text"};


export default {
	IconBasicExampleComponent: {
		name: "IconBasicExample",
		files: [
		
			{
				name: "icon-basic-example.component.html",
				content: iconBasicExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "icon-basic-example.component.ts",
				content: iconBasicExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "icon-basic-example.component.scss",
				content: iconBasicExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	IconCustomExampleComponent: {
		name: "IconCustomExample",
		files: [
		
			{
				name: "icon-custom-example.component.html",
				content: iconCustomExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "icon-custom-example.component.ts",
				content: iconCustomExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "icon-custom-example.component.scss",
				content: iconCustomExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	IconCustomizationExampleComponent: {
		name: "IconCustomizationExample",
		files: [
		
			{
				name: "icon-customization-example.component.html",
				content: iconCustomizationExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "icon-customization-example.component.ts",
				content: iconCustomizationExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "icon-customization-example.component.scss",
				content: iconCustomizationExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	IconSizesExampleComponent: {
		name: "IconSizesExample",
		files: [
		
			{
				name: "icon-sizes-example.component.html",
				content: iconSizesExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "icon-sizes-example.component.ts",
				content: iconSizesExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "icon-sizes-example.component.scss",
				content: iconSizesExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
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
} as Record<string, ExternalExample>;
