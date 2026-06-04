// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import buttonGroupInputDrivenTemplate from "./input-driven/button-group-input-driven.component.html" with {loader: "text"};
import buttonGroupInputDrivenStyles from "./input-driven/button-group-input-driven.component.scss" with {loader: "text"};
import buttonGroupInputDrivenTypescript from "./input-driven/button-group-input-driven.component.ts" with {loader: "text"};
import buttonGroupReactiveFormsTemplate from "./reactive-forms/button-group-reactive-forms.component.html" with {loader: "text"};
import buttonGroupReactiveFormsStyles from "./reactive-forms/button-group-reactive-forms.component.scss" with {loader: "text"};
import buttonGroupReactiveFormsTypescript from "./reactive-forms/button-group-reactive-forms.component.ts" with {loader: "text"};
import buttonGroupSignalFormsTemplate from "./signal-forms/button-group-signal-forms.component.html" with {loader: "text"};
import buttonGroupSignalFormsStyles from "./signal-forms/button-group-signal-forms.component.scss" with {loader: "text"};
import buttonGroupSignalFormsTypescript from "./signal-forms/button-group-signal-forms.component.ts" with {loader: "text"};


export default {
	ButtonGroupInputDrivenComponent: {
		name: "ButtonGroupInputDriven",
		files: [
		
			{
				name: "button-group-input-driven.component.html",
				content: buttonGroupInputDrivenTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "button-group-input-driven.component.ts",
				content: buttonGroupInputDrivenTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "button-group-input-driven.component.scss",
				content: buttonGroupInputDrivenStyles as string,
				language: "css" as const,
			},		
		]
	},
	ButtonGroupReactiveFormsComponent: {
		name: "ButtonGroupReactiveForms",
		files: [
		
			{
				name: "button-group-reactive-forms.component.html",
				content: buttonGroupReactiveFormsTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "button-group-reactive-forms.component.ts",
				content: buttonGroupReactiveFormsTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "button-group-reactive-forms.component.scss",
				content: buttonGroupReactiveFormsStyles as string,
				language: "css" as const,
			},		
		]
	},
	ButtonGroupSignalFormsComponent: {
		name: "ButtonGroupSignalForms",
		files: [
		
			{
				name: "button-group-signal-forms.component.html",
				content: buttonGroupSignalFormsTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "button-group-signal-forms.component.ts",
				content: buttonGroupSignalFormsTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "button-group-signal-forms.component.scss",
				content: buttonGroupSignalFormsStyles as string,
				language: "css" as const,
			},		
		]
	},
} as Record<string, ExternalExample>;
