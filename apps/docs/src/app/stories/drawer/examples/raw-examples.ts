// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import narrowExampleTemplate from "./narrow-example/narrow-example.component.html" with {loader: "text"};
import narrowExampleStyles from "./narrow-example/narrow-example.component.scss" with {loader: "text"};
import narrowExampleTypescript from "./narrow-example/narrow-example.component.ts" with {loader: "text"};
import openedExampleTemplate from "./opened-example/opened-example.component.html" with {loader: "text"};
import openedExampleStyles from "./opened-example/opened-example.component.scss" with {loader: "text"};
import openedExampleTypescript from "./opened-example/opened-example.component.ts" with {loader: "text"};
import overlayExampleTemplate from "./overlay-example/overlay-example.component.html" with {loader: "text"};
import overlayExampleStyles from "./overlay-example/overlay-example.component.scss" with {loader: "text"};
import overlayExampleTypescript from "./overlay-example/overlay-example.component.ts" with {loader: "text"};
import pushExampleTemplate from "./push-example/push-example.component.html" with {loader: "text"};
import pushExampleStyles from "./push-example/push-example.component.scss" with {loader: "text"};
import pushExampleTypescript from "./push-example/push-example.component.ts" with {loader: "text"};
import wideExampleTemplate from "./wide-example/wide-example.component.html" with {loader: "text"};
import wideExampleStyles from "./wide-example/wide-example.component.scss" with {loader: "text"};
import wideExampleTypescript from "./wide-example/wide-example.component.ts" with {loader: "text"};


export default {
	NarrowExampleComponent: {
		name: "NarrowExample",
		files: [
		
			{
				name: "narrow-example.component.html",
				content: narrowExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "narrow-example.component.ts",
				content: narrowExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "narrow-example.component.scss",
				content: narrowExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	OpenedExampleComponent: {
		name: "OpenedExample",
		files: [
		
			{
				name: "opened-example.component.html",
				content: openedExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "opened-example.component.ts",
				content: openedExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "opened-example.component.scss",
				content: openedExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	OverlayExampleComponent: {
		name: "OverlayExample",
		files: [
		
			{
				name: "overlay-example.component.html",
				content: overlayExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "overlay-example.component.ts",
				content: overlayExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "overlay-example.component.scss",
				content: overlayExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	PushExampleComponent: {
		name: "PushExample",
		files: [
		
			{
				name: "push-example.component.html",
				content: pushExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "push-example.component.ts",
				content: pushExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "push-example.component.scss",
				content: pushExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	WideExampleComponent: {
		name: "WideExample",
		files: [
		
			{
				name: "wide-example.component.html",
				content: wideExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "wide-example.component.ts",
				content: wideExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "wide-example.component.scss",
				content: wideExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
} as Record<string, ExternalExample>;
