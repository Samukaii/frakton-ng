// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import basicUsageStyles from "./basic-usage/basic-usage.component.scss" with {loader: "text"};
import basicUsageTypescript from "./basic-usage/basic-usage.component.ts" with {loader: "text"};
import formSectionsStyles from "./form-sections/form-sections.component.scss" with {loader: "text"};
import formSectionsTypescript from "./form-sections/form-sections.component.ts" with {loader: "text"};
import layoutShowcaseStyles from "./layout-showcase/layout-showcase.component.scss" with {loader: "text"};
import layoutShowcaseTypescript from "./layout-showcase/layout-showcase.component.ts" with {loader: "text"};


export default {
	BasicUsageComponent: {
		name: "BasicUsage",
		files: [
		
			{
				name: "basic-usage.component.ts",
				content: basicUsageTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "basic-usage.component.scss",
				content: basicUsageStyles as string,
				language: "css" as const,
			},		
		]
	},
	FormSectionsComponent: {
		name: "FormSections",
		files: [
		
			{
				name: "form-sections.component.ts",
				content: formSectionsTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "form-sections.component.scss",
				content: formSectionsStyles as string,
				language: "css" as const,
			},		
		]
	},
	LayoutShowcaseComponent: {
		name: "LayoutShowcase",
		files: [
		
			{
				name: "layout-showcase.component.ts",
				content: layoutShowcaseTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "layout-showcase.component.scss",
				content: layoutShowcaseStyles as string,
				language: "css" as const,
			},		
		]
	},
} as Record<string, ExternalExample>;
