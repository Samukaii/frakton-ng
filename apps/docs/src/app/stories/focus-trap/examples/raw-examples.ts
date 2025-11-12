// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import fktFocusTrapBasicExampleTemplate from "./basic-example/fkt-focus-trap-basic-example.component.html" with {loader: "text"};
import fktFocusTrapBasicExampleStyles from "./basic-example/fkt-focus-trap-basic-example.component.scss" with {loader: "text"};
import fktFocusTrapBasicExampleTypescript from "./basic-example/fkt-focus-trap-basic-example.component.ts" with {loader: "text"};
import fktFocusTrapFormExampleTemplate from "./form-example/fkt-focus-trap-form-example.component.html" with {loader: "text"};
import fktFocusTrapFormExampleStyles from "./form-example/fkt-focus-trap-form-example.component.scss" with {loader: "text"};
import fktFocusTrapFormExampleTypescript from "./form-example/fkt-focus-trap-form-example.component.ts" with {loader: "text"};
import fktFocusTrapModalExampleTemplate from "./modal-example/fkt-focus-trap-modal-example.component.html" with {loader: "text"};
import fktFocusTrapModalExampleStyles from "./modal-example/fkt-focus-trap-modal-example.component.scss" with {loader: "text"};
import fktFocusTrapModalExampleTypescript from "./modal-example/fkt-focus-trap-modal-example.component.ts" with {loader: "text"};


export default {
	FktFocusTrapBasicExampleComponent: {
		name: "FktFocusTrapBasicExample",
		files: [
		
			{
				name: "fkt-focus-trap-basic-example.component.html",
				content: fktFocusTrapBasicExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "fkt-focus-trap-basic-example.component.ts",
				content: fktFocusTrapBasicExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "fkt-focus-trap-basic-example.component.scss",
				content: fktFocusTrapBasicExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	FktFocusTrapFormExampleComponent: {
		name: "FktFocusTrapFormExample",
		files: [
		
			{
				name: "fkt-focus-trap-form-example.component.html",
				content: fktFocusTrapFormExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "fkt-focus-trap-form-example.component.ts",
				content: fktFocusTrapFormExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "fkt-focus-trap-form-example.component.scss",
				content: fktFocusTrapFormExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	FktFocusTrapModalExampleComponent: {
		name: "FktFocusTrapModalExample",
		files: [
		
			{
				name: "fkt-focus-trap-modal-example.component.html",
				content: fktFocusTrapModalExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "fkt-focus-trap-modal-example.component.ts",
				content: fktFocusTrapModalExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "fkt-focus-trap-modal-example.component.scss",
				content: fktFocusTrapModalExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
} as Record<string, ExternalExample>;
