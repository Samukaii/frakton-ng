// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import inputBasicExampleTemplate from "./basic/input-basic-example.component.html" with {loader: "text"};
import inputBasicExampleStyles from "./basic/input-basic-example.component.scss" with {loader: "text"};
import inputBasicExampleTypescript from "./basic/input-basic-example.component.ts" with {loader: "text"};
import inputCharacterCountExampleTemplate from "./character-count/input-character-count-example.component.html" with {loader: "text"};
import inputCharacterCountExampleStyles from "./character-count/input-character-count-example.component.scss" with {loader: "text"};
import inputCharacterCountExampleTypescript from "./character-count/input-character-count-example.component.ts" with {loader: "text"};
import inputNativeAttributesExampleTemplate from "./native-attributes/input-native-attributes-example.component.html" with {loader: "text"};
import inputNativeAttributesExampleStyles from "./native-attributes/input-native-attributes-example.component.scss" with {loader: "text"};
import inputNativeAttributesExampleTypescript from "./native-attributes/input-native-attributes-example.component.ts" with {loader: "text"};
import inputReactiveFormsExampleTemplate from "./reactive-forms/input-reactive-forms-example.component.html" with {loader: "text"};
import inputReactiveFormsExampleStyles from "./reactive-forms/input-reactive-forms-example.component.scss" with {loader: "text"};
import inputReactiveFormsExampleTypescript from "./reactive-forms/input-reactive-forms-example.component.ts" with {loader: "text"};
import inputSignalFormsExampleTemplate from "./signal-forms/input-signal-forms-example.component.html" with {loader: "text"};
import inputSignalFormsExampleStyles from "./signal-forms/input-signal-forms-example.component.scss" with {loader: "text"};
import inputSignalFormsExampleTypescript from "./signal-forms/input-signal-forms-example.component.ts" with {loader: "text"};


export default {
	InputBasicExampleComponent: {
		name: "InputBasicExample",
		files: [
		
			{
				name: "input-basic-example.component.html",
				content: inputBasicExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "input-basic-example.component.ts",
				content: inputBasicExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "input-basic-example.component.scss",
				content: inputBasicExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	InputCharacterCountExampleComponent: {
		name: "InputCharacterCountExample",
		files: [
		
			{
				name: "input-character-count-example.component.html",
				content: inputCharacterCountExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "input-character-count-example.component.ts",
				content: inputCharacterCountExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "input-character-count-example.component.scss",
				content: inputCharacterCountExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	InputNativeAttributesExampleComponent: {
		name: "InputNativeAttributesExample",
		files: [
		
			{
				name: "input-native-attributes-example.component.html",
				content: inputNativeAttributesExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "input-native-attributes-example.component.ts",
				content: inputNativeAttributesExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "input-native-attributes-example.component.scss",
				content: inputNativeAttributesExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	InputReactiveFormsExampleComponent: {
		name: "InputReactiveFormsExample",
		files: [
		
			{
				name: "input-reactive-forms-example.component.html",
				content: inputReactiveFormsExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "input-reactive-forms-example.component.ts",
				content: inputReactiveFormsExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "input-reactive-forms-example.component.scss",
				content: inputReactiveFormsExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	InputSignalFormsExampleComponent: {
		name: "InputSignalFormsExample",
		files: [
		
			{
				name: "input-signal-forms-example.component.html",
				content: inputSignalFormsExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "input-signal-forms-example.component.ts",
				content: inputSignalFormsExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "input-signal-forms-example.component.scss",
				content: inputSignalFormsExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
} as Record<string, ExternalExample>;
