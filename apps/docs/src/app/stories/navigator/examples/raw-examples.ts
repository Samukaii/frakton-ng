// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import basicExampleTemplate from "./basic-example/basic-example.component.html" with {loader: "text"};
import basicExampleStyles from "./basic-example/basic-example.component.scss" with {loader: "text"};
import basicExampleTypescript from "./basic-example/basic-example.component.ts" with {loader: "text"};
import dateNavigationExampleTemplate from "./date-navigation-example/date-navigation-example.component.html" with {loader: "text"};
import dateNavigationExampleStyles from "./date-navigation-example/date-navigation-example.component.scss" with {loader: "text"};
import dateNavigationExampleTypescript from "./date-navigation-example/date-navigation-example.component.ts" with {loader: "text"};
import disabledStateExampleTemplate from "./disabled-state-example/disabled-state-example.component.html" with {loader: "text"};
import disabledStateExampleStyles from "./disabled-state-example/disabled-state-example.component.scss" with {loader: "text"};
import disabledStateExampleTypescript from "./disabled-state-example/disabled-state-example.component.ts" with {loader: "text"};
import itemNavigationExampleTemplate from "./item-navigation-example/item-navigation-example.component.html" with {loader: "text"};
import itemNavigationExampleStyles from "./item-navigation-example/item-navigation-example.component.scss" with {loader: "text"};
import itemNavigationExampleTypescript from "./item-navigation-example/item-navigation-example.component.ts" with {loader: "text"};
import loadingExampleTemplate from "./loading-example/loading-example.component.html" with {loader: "text"};
import loadingExampleStyles from "./loading-example/loading-example.component.scss" with {loader: "text"};
import loadingExampleTypescript from "./loading-example/loading-example.component.ts" with {loader: "text"};
import pageNavigationExampleTemplate from "./page-navigation-example/page-navigation-example.component.html" with {loader: "text"};
import pageNavigationExampleStyles from "./page-navigation-example/page-navigation-example.component.scss" with {loader: "text"};
import pageNavigationExampleTypescript from "./page-navigation-example/page-navigation-example.component.ts" with {loader: "text"};


export default {
	BasicExampleComponent: {
		name: "BasicExample",
		files: [
		
			{
				name: "basic-example.component.html",
				content: basicExampleTemplate as string,
				language: "angular2html" as const,
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
	DateNavigationExampleComponent: {
		name: "DateNavigationExample",
		files: [
		
			{
				name: "date-navigation-example.component.html",
				content: dateNavigationExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "date-navigation-example.component.ts",
				content: dateNavigationExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "date-navigation-example.component.scss",
				content: dateNavigationExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	DisabledStateExampleComponent: {
		name: "DisabledStateExample",
		files: [
		
			{
				name: "disabled-state-example.component.html",
				content: disabledStateExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "disabled-state-example.component.ts",
				content: disabledStateExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "disabled-state-example.component.scss",
				content: disabledStateExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	ItemNavigationExampleComponent: {
		name: "ItemNavigationExample",
		files: [
		
			{
				name: "item-navigation-example.component.html",
				content: itemNavigationExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "item-navigation-example.component.ts",
				content: itemNavigationExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "item-navigation-example.component.scss",
				content: itemNavigationExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	LoadingExampleComponent: {
		name: "LoadingExample",
		files: [
		
			{
				name: "loading-example.component.html",
				content: loadingExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "loading-example.component.ts",
				content: loadingExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "loading-example.component.scss",
				content: loadingExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	PageNavigationExampleComponent: {
		name: "PageNavigationExample",
		files: [
		
			{
				name: "page-navigation-example.component.html",
				content: pageNavigationExampleTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "page-navigation-example.component.ts",
				content: pageNavigationExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "page-navigation-example.component.scss",
				content: pageNavigationExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
} as Record<string, ExternalExample>;
