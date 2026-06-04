// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import basicTooltipExampleTemplate from "./basic-tooltip-example/basic-tooltip-example.component.html" with {loader: "text"};
import basicTooltipExampleStyles from "./basic-tooltip-example/basic-tooltip-example.component.scss" with {loader: "text"};
import basicTooltipExampleTypescript from "./basic-tooltip-example/basic-tooltip-example.component.ts" with {loader: "text"};
import differentElementsExampleTemplate from "./different-elements-example/different-elements-example.component.html" with {loader: "text"};
import differentElementsExampleStyles from "./different-elements-example/different-elements-example.component.scss" with {loader: "text"};
import differentElementsExampleTypescript from "./different-elements-example/different-elements-example.component.ts" with {loader: "text"};
import interactiveTooltipExampleTemplate from "./interactive-tooltip-example/interactive-tooltip-example.component.html" with {loader: "text"};
import interactiveTooltipExampleStyles from "./interactive-tooltip-example/interactive-tooltip-example.component.scss" with {loader: "text"};
import interactiveTooltipExampleTypescript from "./interactive-tooltip-example/interactive-tooltip-example.component.ts" with {loader: "text"};
import positioningTooltipExampleTemplate from "./positioning-tooltip-example/positioning-tooltip-example.component.html" with {loader: "text"};
import positioningTooltipExampleStyles from "./positioning-tooltip-example/positioning-tooltip-example.component.scss" with {loader: "text"};
import positioningTooltipExampleTypescript from "./positioning-tooltip-example/positioning-tooltip-example.component.ts" with {loader: "text"};


export default {
	BasicTooltipExampleComponent: {
		name: "BasicTooltipExample",
		files: [
		
			{
				name: "basic-tooltip-example.component.html",
				content: basicTooltipExampleTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "basic-tooltip-example.component.ts",
				content: basicTooltipExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "basic-tooltip-example.component.scss",
				content: basicTooltipExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	DifferentElementsExampleComponent: {
		name: "DifferentElementsExample",
		files: [
		
			{
				name: "different-elements-example.component.html",
				content: differentElementsExampleTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "different-elements-example.component.ts",
				content: differentElementsExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "different-elements-example.component.scss",
				content: differentElementsExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	InteractiveTooltipExampleComponent: {
		name: "InteractiveTooltipExample",
		files: [
		
			{
				name: "interactive-tooltip-example.component.html",
				content: interactiveTooltipExampleTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "interactive-tooltip-example.component.ts",
				content: interactiveTooltipExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "interactive-tooltip-example.component.scss",
				content: interactiveTooltipExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
	PositioningTooltipExampleComponent: {
		name: "PositioningTooltipExample",
		files: [
		
			{
				name: "positioning-tooltip-example.component.html",
				content: positioningTooltipExampleTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "positioning-tooltip-example.component.ts",
				content: positioningTooltipExampleTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "positioning-tooltip-example.component.scss",
				content: positioningTooltipExampleStyles as string,
				language: "css" as const,
			},		
		]
	},
} as Record<string, ExternalExample>;
