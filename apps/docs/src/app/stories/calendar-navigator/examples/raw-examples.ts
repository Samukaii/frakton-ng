// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import dynamicModeExampleTemplate from "./dynamic-mode-example/dynamic-mode-example.component.html" with {loader: "text"};
import dynamicModeExampleStyles from "./dynamic-mode-example/dynamic-mode-example.component.scss" with {loader: "text"};
import dynamicModeExampleTypescript from "./dynamic-mode-example/dynamic-mode-example.component.ts" with {loader: "text"};
import formIntegrationExampleTemplate from "./form-integration-example/form-integration-example.component.html" with {loader: "text"};
import formIntegrationExampleStyles from "./form-integration-example/form-integration-example.component.scss" with {loader: "text"};
import formIntegrationExampleTypescript from "./form-integration-example/form-integration-example.component.ts" with {loader: "text"};
import monthModeExampleTemplate from "./month-mode-example/month-mode-example.component.html" with {loader: "text"};
import monthModeExampleStyles from "./month-mode-example/month-mode-example.component.scss" with {loader: "text"};
import monthModeExampleTypescript from "./month-mode-example/month-mode-example.component.ts" with {loader: "text"};
import yearModeExampleTemplate from "./year-mode-example/year-mode-example.component.html" with {loader: "text"};
import yearModeExampleStyles from "./year-mode-example/year-mode-example.component.scss" with {loader: "text"};
import yearModeExampleTypescript from "./year-mode-example/year-mode-example.component.ts" with {loader: "text"};


export default {
	DynamicModeExampleComponent: {
		name: "DynamicModeExample",
		files: [
		
			{
				name: "dynamic-mode-example.component.html",
				content: dynamicModeExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "dynamic-mode-example.component.ts",
				content: dynamicModeExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "dynamic-mode-example.component.scss",
				content: dynamicModeExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	FormIntegrationExampleComponent: {
		name: "FormIntegrationExample",
		files: [
		
			{
				name: "form-integration-example.component.html",
				content: formIntegrationExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "form-integration-example.component.ts",
				content: formIntegrationExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "form-integration-example.component.scss",
				content: formIntegrationExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	MonthModeExampleComponent: {
		name: "MonthModeExample",
		files: [
		
			{
				name: "month-mode-example.component.html",
				content: monthModeExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "month-mode-example.component.ts",
				content: monthModeExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "month-mode-example.component.scss",
				content: monthModeExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	YearModeExampleComponent: {
		name: "YearModeExample",
		files: [
		
			{
				name: "year-mode-example.component.html",
				content: yearModeExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "year-mode-example.component.ts",
				content: yearModeExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "year-mode-example.component.scss",
				content: yearModeExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
} as Record<string, ExternalExample>;
