import autoExpandExampleTemplate from "!!raw-loader!./auto-expand-example/auto-expand-example.component.html";
import autoExpandExampleStyles from "!!raw-loader!./auto-expand-example/auto-expand-example.component.scss";
import autoExpandExampleTypescript from "!!raw-loader!./auto-expand-example/auto-expand-example.component.ts";
import basicExampleTemplate from "!!raw-loader!./basic-example/basic-example.component.html";
import basicExampleStyles from "!!raw-loader!./basic-example/basic-example.component.scss";
import basicExampleTypescript from "!!raw-loader!./basic-example/basic-example.component.ts";
import characterCounterExampleTemplate from "!!raw-loader!./character-counter-example/character-counter-example.component.html";
import characterCounterExampleStyles from "!!raw-loader!./character-counter-example/character-counter-example.component.scss";
import characterCounterExampleTypescript from "!!raw-loader!./character-counter-example/character-counter-example.component.ts";
import disabledExampleTemplate from "!!raw-loader!./disabled-example/disabled-example.component.html";
import disabledExampleStyles from "!!raw-loader!./disabled-example/disabled-example.component.scss";
import disabledExampleTypescript from "!!raw-loader!./disabled-example/disabled-example.component.ts";
import formIntegrationExampleTemplate from "!!raw-loader!./form-integration-example/form-integration-example.component.html";
import formIntegrationExampleStyles from "!!raw-loader!./form-integration-example/form-integration-example.component.scss";
import formIntegrationExampleTypescript from "!!raw-loader!./form-integration-example/form-integration-example.component.ts";
import validationExampleTemplate from "!!raw-loader!./validation-example/validation-example.component.html";
import validationExampleStyles from "!!raw-loader!./validation-example/validation-example.component.scss";
import validationExampleTypescript from "!!raw-loader!./validation-example/validation-example.component.ts";


export const rawExamples = {
	autoExpandExample: {
		name: "AutoExpandExample",
		files: [
		
			{
				name: "auto-expand-example.component.html",
				content: autoExpandExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "auto-expand-example.component.ts",
				content: autoExpandExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "auto-expand-example.component.scss",
				content: autoExpandExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	basicExample: {
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
	characterCounterExample: {
		name: "CharacterCounterExample",
		files: [
		
			{
				name: "character-counter-example.component.html",
				content: characterCounterExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "character-counter-example.component.ts",
				content: characterCounterExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "character-counter-example.component.scss",
				content: characterCounterExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	disabledExample: {
		name: "DisabledExample",
		files: [
		
			{
				name: "disabled-example.component.html",
				content: disabledExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "disabled-example.component.ts",
				content: disabledExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "disabled-example.component.scss",
				content: disabledExampleStyles as string,
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
	validationExample: {
		name: "ValidationExample",
		files: [
		
			{
				name: "validation-example.component.html",
				content: validationExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "validation-example.component.ts",
				content: validationExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "validation-example.component.scss",
				content: validationExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
}
