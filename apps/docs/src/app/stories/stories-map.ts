import { StoryItem } from '@/models/story-item';
//@ts-expect-error
import gettingStartedInstallation from "./getting-started/installation.docs.md" with {loader: "text"}
import * as buttonStory from "./button/fkt-button.stories"

export const STORIES_MAP: StoryItem[] = [	{
		id: "getting-started-installation",
		title: "Getting Started/Installation",
		file: async () => ({
		 	// Imported eagerly for instant loading
			default: {
				title: "Getting Started/Installation",
				documentation: gettingStartedInstallation
			}
		}),
	},
	{
		id: "getting-started-migration-guides",
		title: "Getting Started/Migration Guides",
		file: async () => {
			//@ts-expect-error
			const documentation = await import("./getting-started/migration-guides.docs.md", {with: {loader: 'text'}}).then(file => file['default']);
	
			return {
				default: {
					title: "Getting Started/Migration Guides",
					documentation,
				}
			}
		},
	},
	{
		id: "getting-started-theming-styling",
		title: "Getting Started/Theming & Styling",
		file: async () => {
			//@ts-expect-error
			const documentation = await import("./getting-started/theming-styling.docs.md", {with: {loader: 'text'}}).then(file => file['default']);
	
			return {
				default: {
					title: "Getting Started/Theming & Styling",
					documentation,
				}
			}
		},
	},
	{
		id: "autocomplete",
		title: "Components/Form/Autocomplete",
		file: () => import("./autocomplete/fkt-autocomplete.stories"),
		externalExamples: () => import("./autocomplete/examples/raw-examples").then(file => file.default),
	},
	{
		id: "badge",
		title: "Components/Data Display/Badge",
		file: () => import("./badge/fkt-badge.stories"),
		externalExamples: () => import("./badge/examples/raw-examples").then(file => file.default),
	},
	{
		id: "badge-selector",
		title: "Components/Form/Badge Selector",
		file: () => import("./badge-selector/fkt-badge-selector.stories"),
		externalExamples: () => import("./badge-selector/examples/raw-examples").then(file => file.default),
	},
	{
		id: "button",
		title: "Components/Actions/Button",
		file: async () => buttonStory, // Imported eagerly for instant loading
		externalExamples: () => import("./button/examples/raw-examples").then(file => file.default),
	},
	{
		id: "buttons-list",
		title: "Components/Actions/Buttons list",
		file: () => import("./buttons-list/fkt-buttons-list.stories"),
		
	},
	{
		id: "calendar",
		title: "Components/Navigation/Calendar",
		file: () => import("./calendar/fkt-calendar.stories"),
		externalExamples: () => import("./calendar/examples/raw-examples").then(file => file.default),
	},
	{
		id: "calendar-navigator",
		title: "Components/Navigation/Calendar Navigator",
		file: () => import("./calendar-navigator/fkt-calendar-navigator.stories"),
		externalExamples: () => import("./calendar-navigator/examples/raw-examples").then(file => file.default),
	},
	{
		id: "checkbox",
		title: "Components/Form/Checkbox",
		file: () => import("./checkbox/fkt-checkbox.stories"),
		externalExamples: () => import("./checkbox/examples/raw-examples").then(file => file.default),
	},
	{
		id: "color-picker",
		title: "Components/Form/Color Picker",
		file: () => import("./color-picker/fkt-color-picker.stories"),
		
	},
	{
		id: "date-picker",
		title: "Components/Form/Date Picker",
		file: () => import("./date-picker/fkt-date-picker.stories"),
		
	},
	{
		id: "dialog",
		title: "Components/Overlays/Dialog",
		file: () => import("./dialog/fkt-dialog.stories"),
		externalExamples: () => import("./dialog/examples/raw-examples").then(file => file.default),
	},
	{
		id: "drawer",
		title: "Components/Navigation/Drawer",
		file: () => import("./drawer/fkt-drawer.stories"),
		
	},
	{
		id: "focus-trap",
		title: "Components/Accessibility/FocusTrap",
		file: () => import("./focus-trap/fkt-focus-trap.stories"),
		externalExamples: () => import("./focus-trap/examples/raw-examples").then(file => file.default),
	},
	{
		id: "icon",
		title: "Components/Data Display/Icon",
		file: () => import("./icon/fkt-icon.stories"),
		
	},
	{
		id: "input",
		title: "Components/Form/Input",
		file: () => import("./input/fkt-input.stories"),
		externalExamples: () => import("./input/examples/raw-examples").then(file => file.default),
	},
	{
		id: "navigator",
		title: "Components/Navigation/Navigator",
		file: () => import("./navigator/fkt-navigator.stories"),
		externalExamples: () => import("./navigator/examples/raw-examples").then(file => file.default),
	},
	{
		id: "no-results",
		title: "Components/Feedback/No Results",
		file: () => import("./no-results/fkt-no-results.stories"),
		externalExamples: () => import("./no-results/examples/raw-examples").then(file => file.default),
	},
	{
		id: "overlay",
		title: "Components/Overlays/Overlay",
		file: () => import("./overlay/fkt-overlay.stories"),
		externalExamples: () => import("./overlay/examples/raw-examples").then(file => file.default),
	},
	{
		id: "select",
		title: "Components/Form/Select",
		file: () => import("./select/fkt-select.stories"),
		externalExamples: () => import("./select/examples/raw-examples").then(file => file.default),
	},
	{
		id: "side-menu",
		title: "Components/Navigation/Side Menu",
		file: () => import("./side-menu/fkt-side-menu.stories"),
		externalExamples: () => import("./side-menu/examples/raw-examples").then(file => file.default),
	},
	{
		id: "spinner",
		title: "Components/Feedback/Spinner",
		file: () => import("./spinner/fkt-spinner.stories"),
		externalExamples: () => import("./spinner/examples/raw-examples").then(file => file.default),
	},
	{
		id: "table",
		title: "Components/Data Display/Table",
		file: () => import("./table/fkt-table.stories"),
		externalExamples: () => import("./table/examples/raw-examples").then(file => file.default),
	},
	{
		id: "textarea",
		title: "Components/Form/Textarea",
		file: () => import("./textarea/fkt-textarea.stories"),
		externalExamples: () => import("./textarea/examples/raw-examples").then(file => file.default),
	},
	{
		id: "tooltip",
		title: "Components/Overlays/Tooltip",
		file: () => import("./tooltip/fkt-tooltip.stories"),
		externalExamples: () => import("./tooltip/examples/raw-examples").then(file => file.default),
	},
];
