// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import autoExpandExampleTemplate from "./auto-expand-example/auto-expand-example.component.html" with {loader: "text"};
import autoExpandExampleStyles from "./auto-expand-example/auto-expand-example.component.scss" with {loader: "text"};
import autoExpandExampleTypescript from "./auto-expand-example/auto-expand-example.component.ts" with {loader: "text"};
import basicExampleTemplate from "./basic-example/basic-example.component.html" with {loader: "text"};
import basicExampleStyles from "./basic-example/basic-example.component.scss" with {loader: "text"};
import basicExampleTypescript from "./basic-example/basic-example.component.ts" with {loader: "text"};
import characterCounterExampleTemplate from "./character-counter-example/character-counter-example.component.html" with {loader: "text"};
import characterCounterExampleStyles from "./character-counter-example/character-counter-example.component.scss" with {loader: "text"};
import characterCounterExampleTypescript from "./character-counter-example/character-counter-example.component.ts" with {loader: "text"};
import disabledExampleTemplate from "./disabled-example/disabled-example.component.html" with {loader: "text"};
import disabledExampleStyles from "./disabled-example/disabled-example.component.scss" with {loader: "text"};
import disabledExampleTypescript from "./disabled-example/disabled-example.component.ts" with {loader: "text"};
import formIntegrationExampleTemplate from "./form-integration-example/form-integration-example.component.html" with {loader: "text"};
import formIntegrationExampleStyles from "./form-integration-example/form-integration-example.component.scss" with {loader: "text"};
import formIntegrationExampleTypescript from "./form-integration-example/form-integration-example.component.ts" with {loader: "text"};
import validationExampleTemplate from "./validation-example/validation-example.component.html" with {loader: "text"};
import validationExampleStyles from "./validation-example/validation-example.component.scss" with {loader: "text"};
import validationExampleTypescript from "./validation-example/validation-example.component.ts" with {loader: "text"};


export default {
	AutoExpandExampleComponent: {
		name: "AutoExpandExample",
		files: [
		
			{
				name: "auto-expand-example.component.html",
				content: autoExpandExampleTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "auto-expand-example.component.ts",
				content: autoExpandExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "auto-expand-example.component.scss",
				content: autoExpandExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	BasicExampleComponent: {
		name: "BasicExample",
		files: [
		
			{
				name: "basic-example.component.html",
				content: basicExampleTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "basic-example.component.ts",
				content: basicExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "basic-example.component.scss",
				content: basicExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	CharacterCounterExampleComponent: {
		name: "CharacterCounterExample",
		files: [
		
			{
				name: "character-counter-example.component.html",
				content: characterCounterExampleTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "character-counter-example.component.ts",
				content: characterCounterExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "character-counter-example.component.scss",
				content: characterCounterExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	DisabledExampleComponent: {
		name: "DisabledExample",
		files: [
		
			{
				name: "disabled-example.component.html",
				content: disabledExampleTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "disabled-example.component.ts",
				content: disabledExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "disabled-example.component.scss",
				content: disabledExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	FormIntegrationExampleComponent: {
		name: "FormIntegrationExample",
		files: [
		
			{
				name: "form-integration-example.component.html",
				content: formIntegrationExampleTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "form-integration-example.component.ts",
				content: formIntegrationExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "form-integration-example.component.scss",
				content: formIntegrationExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	ValidationExampleComponent: {
		name: "ValidationExample",
		files: [
		
			{
				name: "validation-example.component.html",
				content: validationExampleTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "validation-example.component.ts",
				content: validationExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "validation-example.component.scss",
				content: validationExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
} as Record<string, ExternalExample>;
