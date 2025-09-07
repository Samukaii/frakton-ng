import basicExampleTemplate from "!!raw-loader!./basic-example/basic-example.component.html";
import basicExampleStyles from "!!raw-loader!./basic-example/basic-example.component.scss";
import basicExampleTypescript from "!!raw-loader!./basic-example/basic-example.component.ts";
import dateNavigationExampleTemplate from "!!raw-loader!./date-navigation-example/date-navigation-example.component.html";
import dateNavigationExampleStyles from "!!raw-loader!./date-navigation-example/date-navigation-example.component.scss";
import dateNavigationExampleTypescript from "!!raw-loader!./date-navigation-example/date-navigation-example.component.ts";
import disabledStateExampleTemplate from "!!raw-loader!./disabled-state-example/disabled-state-example.component.html";
import disabledStateExampleStyles from "!!raw-loader!./disabled-state-example/disabled-state-example.component.scss";
import disabledStateExampleTypescript from "!!raw-loader!./disabled-state-example/disabled-state-example.component.ts";
import itemNavigationExampleTemplate from "!!raw-loader!./item-navigation-example/item-navigation-example.component.html";
import itemNavigationExampleStyles from "!!raw-loader!./item-navigation-example/item-navigation-example.component.scss";
import itemNavigationExampleTypescript from "!!raw-loader!./item-navigation-example/item-navigation-example.component.ts";
import loadingExampleTemplate from "!!raw-loader!./loading-example/loading-example.component.html";
import loadingExampleStyles from "!!raw-loader!./loading-example/loading-example.component.scss";
import loadingExampleTypescript from "!!raw-loader!./loading-example/loading-example.component.ts";
import pageNavigationExampleTemplate from "!!raw-loader!./page-navigation-example/page-navigation-example.component.html";
import pageNavigationExampleStyles from "!!raw-loader!./page-navigation-example/page-navigation-example.component.scss";
import pageNavigationExampleTypescript from "!!raw-loader!./page-navigation-example/page-navigation-example.component.ts";


export const rawExamples = {
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
	dateNavigationExample: {
		name: "DateNavigationExample",
		files: [
		
			{
				name: "date-navigation-example.component.html",
				content: dateNavigationExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "date-navigation-example.component.ts",
				content: dateNavigationExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "date-navigation-example.component.scss",
				content: dateNavigationExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	disabledStateExample: {
		name: "DisabledStateExample",
		files: [
		
			{
				name: "disabled-state-example.component.html",
				content: disabledStateExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "disabled-state-example.component.ts",
				content: disabledStateExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "disabled-state-example.component.scss",
				content: disabledStateExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	itemNavigationExample: {
		name: "ItemNavigationExample",
		files: [
		
			{
				name: "item-navigation-example.component.html",
				content: itemNavigationExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "item-navigation-example.component.ts",
				content: itemNavigationExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "item-navigation-example.component.scss",
				content: itemNavigationExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	loadingExample: {
		name: "LoadingExample",
		files: [
		
			{
				name: "loading-example.component.html",
				content: loadingExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "loading-example.component.ts",
				content: loadingExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "loading-example.component.scss",
				content: loadingExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	pageNavigationExample: {
		name: "PageNavigationExample",
		files: [
		
			{
				name: "page-navigation-example.component.html",
				content: pageNavigationExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "page-navigation-example.component.ts",
				content: pageNavigationExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "page-navigation-example.component.scss",
				content: pageNavigationExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
}
