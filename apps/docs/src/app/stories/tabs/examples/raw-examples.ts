// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import tabsBasicTemplate from "./basic/tabs-basic.component.html" with {loader: "text"};
import tabsBasicStyles from "./basic/tabs-basic.component.scss" with {loader: "text"};
import tabsBasicTypescript from "./basic/tabs-basic.component.ts" with {loader: "text"};
import tabCounterTypescript from "./render-modes/tab-counter.component.ts" with {loader: "text"};
import tabsRenderModesTemplate from "./render-modes/tabs-render-modes.component.html" with {loader: "text"};
import tabsRenderModesStyles from "./render-modes/tabs-render-modes.component.scss" with {loader: "text"};
import tabsRenderModesTypescript from "./render-modes/tabs-render-modes.component.ts" with {loader: "text"};
import tabsWithIconsTemplate from "./with-icons/tabs-with-icons.component.html" with {loader: "text"};
import tabsWithIconsStyles from "./with-icons/tabs-with-icons.component.scss" with {loader: "text"};
import tabsWithIconsTypescript from "./with-icons/tabs-with-icons.component.ts" with {loader: "text"};


export default {
	TabsBasicComponent: {
		name: "TabsBasic",
		files: [
		
			{
				name: "tabs-basic.component.html",
				content: tabsBasicTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "tabs-basic.component.ts",
				content: tabsBasicTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "tabs-basic.component.scss",
				content: tabsBasicStyles as string,
				language: "css" as const,
			},		
		]
	},
	TabCounterComponent: {
		name: "TabCounter",
		files: [
		
			{
				name: "tab-counter.component.ts",
				content: tabCounterTypescript as string,
				language: "typescript" as const,
			},		
		]
	},
	TabsRenderModesComponent: {
		name: "TabsRenderModes",
		files: [
		
			{
				name: "tabs-render-modes.component.html",
				content: tabsRenderModesTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "tabs-render-modes.component.ts",
				content: tabsRenderModesTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "tabs-render-modes.component.scss",
				content: tabsRenderModesStyles as string,
				language: "css" as const,
			},		
		]
	},
	TabsWithIconsComponent: {
		name: "TabsWithIcons",
		files: [
		
			{
				name: "tabs-with-icons.component.html",
				content: tabsWithIconsTemplate as string,
				language: "angular2html" as const,
			},		
			{
				name: "tabs-with-icons.component.ts",
				content: tabsWithIconsTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "tabs-with-icons.component.scss",
				content: tabsWithIconsStyles as string,
				language: "css" as const,
			},		
		]
	},
} as Record<string, ExternalExample>;
