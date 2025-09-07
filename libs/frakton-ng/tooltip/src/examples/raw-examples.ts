import basicTooltipExampleTemplate from "!!raw-loader!./basic-tooltip-example/basic-tooltip-example.component.html";
import basicTooltipExampleStyles from "!!raw-loader!./basic-tooltip-example/basic-tooltip-example.component.scss";
import basicTooltipExampleTypescript from "!!raw-loader!./basic-tooltip-example/basic-tooltip-example.component.ts";
import differentElementsExampleTemplate from "!!raw-loader!./different-elements-example/different-elements-example.component.html";
import differentElementsExampleStyles from "!!raw-loader!./different-elements-example/different-elements-example.component.scss";
import differentElementsExampleTypescript from "!!raw-loader!./different-elements-example/different-elements-example.component.ts";
import interactiveTooltipExampleTemplate from "!!raw-loader!./interactive-tooltip-example/interactive-tooltip-example.component.html";
import interactiveTooltipExampleStyles from "!!raw-loader!./interactive-tooltip-example/interactive-tooltip-example.component.scss";
import interactiveTooltipExampleTypescript from "!!raw-loader!./interactive-tooltip-example/interactive-tooltip-example.component.ts";
import positioningTooltipExampleTemplate from "!!raw-loader!./positioning-tooltip-example/positioning-tooltip-example.component.html";
import positioningTooltipExampleStyles from "!!raw-loader!./positioning-tooltip-example/positioning-tooltip-example.component.scss";
import positioningTooltipExampleTypescript from "!!raw-loader!./positioning-tooltip-example/positioning-tooltip-example.component.ts";


export const rawExamples = {
	basicTooltipExample: {
		name: "BasicTooltipExample",
		files: [
		
			{
				name: "basic-tooltip-example.component.html",
				content: basicTooltipExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "basic-tooltip-example.component.ts",
				content: basicTooltipExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "basic-tooltip-example.component.scss",
				content: basicTooltipExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	differentElementsExample: {
		name: "DifferentElementsExample",
		files: [
		
			{
				name: "different-elements-example.component.html",
				content: differentElementsExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "different-elements-example.component.ts",
				content: differentElementsExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "different-elements-example.component.scss",
				content: differentElementsExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	interactiveTooltipExample: {
		name: "InteractiveTooltipExample",
		files: [
		
			{
				name: "interactive-tooltip-example.component.html",
				content: interactiveTooltipExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "interactive-tooltip-example.component.ts",
				content: interactiveTooltipExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "interactive-tooltip-example.component.scss",
				content: interactiveTooltipExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
	positioningTooltipExample: {
		name: "PositioningTooltipExample",
		files: [
		
			{
				name: "positioning-tooltip-example.component.html",
				content: positioningTooltipExampleTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "positioning-tooltip-example.component.ts",
				content: positioningTooltipExampleTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "positioning-tooltip-example.component.scss",
				content: positioningTooltipExampleStyles as string,
				language: "css" as "css",
			},		
		]
	},
}
