import dynamicModeExampleTemplate from "!!raw-loader!./dynamic-mode-example/dynamic-mode-example.component.html";
import dynamicModeExampleStyles from "!!raw-loader!./dynamic-mode-example/dynamic-mode-example.component.scss";
import dynamicModeExampleTypescript from "!!raw-loader!./dynamic-mode-example/dynamic-mode-example.component.ts";
import formIntegrationExampleTemplate from "!!raw-loader!./form-integration-example/form-integration-example.component.html";
import formIntegrationExampleStyles from "!!raw-loader!./form-integration-example/form-integration-example.component.scss";
import formIntegrationExampleTypescript from "!!raw-loader!./form-integration-example/form-integration-example.component.ts";
import monthModeExampleTemplate from "!!raw-loader!./month-mode-example/month-mode-example.component.html";
import monthModeExampleStyles from "!!raw-loader!./month-mode-example/month-mode-example.component.scss";
import monthModeExampleTypescript from "!!raw-loader!./month-mode-example/month-mode-example.component.ts";
import yearModeExampleTemplate from "!!raw-loader!./year-mode-example/year-mode-example.component.html";
import yearModeExampleStyles from "!!raw-loader!./year-mode-example/year-mode-example.component.scss";
import yearModeExampleTypescript from "!!raw-loader!./year-mode-example/year-mode-example.component.ts";


export const rawExamples = {
	dynamicModeExample: {
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
	formIntegrationExample: {
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
	monthModeExample: {
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
	yearModeExample: {
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
}
