// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import toggleInputDrivenTemplate from "./input-driven/toggle-input-driven.component.html" with {loader: "text"};
import toggleInputDrivenStyles from "./input-driven/toggle-input-driven.component.scss" with {loader: "text"};
import toggleInputDrivenTypescript from "./input-driven/toggle-input-driven.component.ts" with {loader: "text"};
import toggleReactiveFormsTemplate from "./reactive-forms/toggle-reactive-forms.component.html" with {loader: "text"};
import toggleReactiveFormsStyles from "./reactive-forms/toggle-reactive-forms.component.scss" with {loader: "text"};
import toggleReactiveFormsTypescript from "./reactive-forms/toggle-reactive-forms.component.ts" with {loader: "text"};
import toggleSignalFormsTemplate from "./signal-forms/toggle-signal-forms.component.html" with {loader: "text"};
import toggleSignalFormsStyles from "./signal-forms/toggle-signal-forms.component.scss" with {loader: "text"};
import toggleSignalFormsTypescript from "./signal-forms/toggle-signal-forms.component.ts" with {loader: "text"};


export default {
	ToggleInputDrivenComponent: {
		name: "ToggleInputDriven",
		files: [
		
			{
				name: "toggle-input-driven.component.html",
				content: toggleInputDrivenTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "toggle-input-driven.component.ts",
				content: toggleInputDrivenTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "toggle-input-driven.component.scss",
				content: toggleInputDrivenStyles as string,
				language: "css" as const,
			},		
		]
	},
	ToggleReactiveFormsComponent: {
		name: "ToggleReactiveForms",
		files: [
		
			{
				name: "toggle-reactive-forms.component.html",
				content: toggleReactiveFormsTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "toggle-reactive-forms.component.ts",
				content: toggleReactiveFormsTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "toggle-reactive-forms.component.scss",
				content: toggleReactiveFormsStyles as string,
				language: "css" as const,
			},		
		]
	},
	ToggleSignalFormsComponent: {
		name: "ToggleSignalForms",
		files: [
		
			{
				name: "toggle-signal-forms.component.html",
				content: toggleSignalFormsTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "toggle-signal-forms.component.ts",
				content: toggleSignalFormsTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "toggle-signal-forms.component.scss",
				content: toggleSignalFormsStyles as string,
				language: "css" as const,
			},		
		]
	},
} as Record<string, ExternalExample>;
