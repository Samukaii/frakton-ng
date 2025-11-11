import { fktButtonsListAlignments, FktButtonsListComponent, fktButtonsListOrientations } from 'frakton-ng/buttons-list';
import designTokens from './fkt-buttons-list-design-tokens.json';
//@ts-expect-error
import documentation from './fkt-buttons-list.docs.md' with { loader: 'text' }
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';

const meta: Meta = {
	title: 'Components/Actions/Buttons list',
	component: FktButtonsListComponent,
    description: "The FktButtonsList component provides a flexible container for displaying multiple buttons with consistent spacing and alignment. Built with Angular signals and customizable layout options, it supports both horizontal and vertical orientations with various alignment strategies.",
	designTokens: designTokens as any,
	documentation,
	argTypes: {
		context: {
			control: 'object',
			category: "Attributes",
			type: 'T',
			defaultValue: "undefined",
		},
		orientation: {
			control: 'select',
			options: fktButtonsListOrientations,
			category: "Attributes",
			type: 'FktButtonsListOrientation',
			import: "import {FktButtonsListOrientation} from 'frakton-ng/buttons-list'",
			defaultValue: "'horizontal'",
		},
		fill: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: "false",
		},
		verticalAlignment: {
			control: 'select',
			options: fktButtonsListAlignments,
			category: "Attributes",
			type: 'FktButtonsListOrientation',
			import: "import {FktButtonsListOrientation} from 'frakton-ng/buttons-list'",
			defaultValue: "'start'",
		},
		horizontalAlignment: {
			control: 'select',
			options: fktButtonsListAlignments,
			category: "Attributes",
			type: 'FktButtonsListAlignment',
			import: "import {FktButtonsListAlignment} from 'frakton-ng/buttons-list'",
			defaultValue: "'start'",
		},
		actions: {
			control: 'object',
			required: true,
			category: "Attributes",
			import: "import {FktButtonAction} from 'frakton-ng/button'",
			type: 'FktButtonAction<T>[]',
			defaultValue: "undefined",
		}
	}
};

export const Preview: Story<FktButtonsListComponent<any>> = {
	description: "A horizontal list of action buttons with different themes and colors, perfect for form actions.",
	args: {
		actions: [
			{
				identifier: "action-1",
				theme: "raised",
				color: "primary",
				text: "Action 1"
			},
			{
				identifier: "action-2",
				theme: "stroked",
				color: "success",
				text: "Action 2",
				shape: "default"
			},
			{
				identifier: "action-3",
				theme: "basic",
				color: "danger",
				text: "Action 3"
			},
			{
				identifier: "action-4",
				theme: "raised",
				color: "accent",
				text: "Action 4"
			},
			{
				identifier: "action-5",
				theme: "raised",
				icon: "plus",
				color: "primary",
				ariaLabel: "Action 5"
			},
			{
				identifier: "action-6",
				theme: "basic",
				icon: "trash",
				shape: "rect",
				color: "danger",
				ariaLabel: "Action 6"
			}
		]
	}
};

export const FormActions: Story<FktButtonsListComponent<any>> = {
	description: "Form action buttons with cancel, save, and submit actions using different alignment options.",
	args: {
		actions: [
			{
				identifier: "cancel",
				theme: "basic",
				color: "danger",
				text: "Cancel"
			},
			{
				identifier: "save-draft",
				theme: "stroked",
				color: "success",
				text: "Save Draft"
			},
			{
				identifier: "submit",
				theme: "raised",
				color: "success",
				text: "Submit"
			}
		],
		horizontalAlignment: "end"
	}
};

export const VerticalList: Story<FktButtonsListComponent<any>> = {
	description: "Buttons arranged vertically with filled button style and center alignment.",
	args: {
		actions: [
			{
				identifier: "dashboard",
				theme: "basic",
				color: "primary",
				text: "Dashboard",
				icon: "home",
				iconPosition: "left"
			},
			{
				identifier: "users",
				theme: "basic",
				color: "primary",
				text: "Users",
				icon: "users",
				iconPosition: "left"
			},
			{
				identifier: "settings",
				theme: "basic",
				color: "primary",
				text: "Settings",
				icon: "cog",
				iconPosition: "left"
			}
		],
		orientation: "vertical",
		fill: 'true' as any
	}
};

export const IconOnlyActions: Story<FktButtonsListComponent<any>> = {
	description: "Compact icon-only buttons with tooltips for space-efficient toolbars.",
	args: {
		actions: [
			{
				identifier: "edit",
				theme: "basic",
				color: "primary",
				icon: "pencil",
				tooltip: "Edit",
				ariaLabel: "Edit",
			},
			{
				identifier: "duplicate",
				theme: "basic",
				color: "success",
				icon: "trash",
				tooltip: "Duplicate",
				ariaLabel: "Duplicate",
			},
			{
				identifier: "delete",
				theme: "basic",
				color: "danger",
				icon: "trash",
				tooltip: "Delete",
				ariaLabel: "Delete",
			}
		]
	}
};

export const DataTableActions: Story<FktButtonsListComponent<any>> = {
	description: "Action buttons commonly used in data tables for row-level operations.",
	args: {
		actions: [
			{
				identifier: "view",
				theme: "basic",
				color: "primary",
				icon: "eye",
				shape: "rect",
				ariaLabel: "View Details",
				tooltip: "View Details",
			},
			{
				identifier: "edit",
				theme: "basic",
				color: "success",
				icon: "pencil",
				shape: "rect",
				ariaLabel: "Edit Item",
				tooltip: "Edit Item",
			},
			{
				identifier: "delete",
				theme: "basic",
				color: "danger",
				icon: "trash",
				shape: "rect",
				ariaLabel: "Delete Item",
				tooltip: "Delete Item"
			}
		]
	}
};

export const BulkActions: Story<FktButtonsListComponent<any>> = {
	description: 'Demonstrates a group of bulk actions, such as selecting all items, exporting, or deleting selected entries. Each action can have a custom theme, color, icon, and label. Useful for batch operations in tables, lists, or admin panels.',
	args: {
		actions: [
			{
				identifier: "select-all",
				theme: "stroked",
				color: "primary",
				text: "Select All"
			},
			{
				identifier: "export",
				theme: "stroked",
				color: "success",
				text: "Export",
				icon: "trash",
				iconPosition: "right"
			},
			{
				identifier: "delete-selected",
				theme: "raised",
				color: "danger",
				text: "Delete Selected"
			}
		],
		horizontalAlignment: "space-between"
	}
};

export const ToolbarActions: Story<FktButtonsListComponent<any>> = {
	description: 'Shows a classic horizontal toolbar with multiple actions, including "New", "Import", "Export", and "Refresh". Icons, themes, and tooltips are supported for enhanced usability in top toolbars and navigation bars.',
	args: {
		actions: [
			{
				identifier: "new",
				theme: "raised",
				color: "primary",
				text: "New",
				icon: "plus",
				iconPosition: "left"
			},
			{
				identifier: "import",
				theme: "stroked",
				color: "primary",
				text: "Import",
				icon: "trash"
			},
			{
				identifier: "export",
				theme: "stroked",
				color: "success",
				text: "Export",
				icon: "trash"
			},
			{
				identifier: "refresh",
				theme: "basic",
				color: "primary",
				icon: "trash",
				tooltip: "Refresh Data",
				ariaLabel: "Refresh Data",
			}
		]
	}
};

export const FloatingActions: Story<FktButtonsListComponent<any>> = {
	description: 'Displays floating action buttons (FAB) in a vertical stack. Ideal for mobile or compact layouts where quick access to chat or add actions is needed. Each button can show an icon and tooltip for accessibility.',
	args: {
		actions: [
			{
				identifier: "chat",
				theme: "raised",
				color: "success",
				icon: "trash",
				tooltip: "Open Chat",
				ariaLabel: "Open Chat",
			},
			{
				identifier: "add",
				theme: "raised",
				color: "primary",
				icon: "plus",
				tooltip: "Add New Item",
				ariaLabel: "Add New Item",
			}
		],
		orientation: "vertical"
	}
};

export const LoadingStates: Story<FktButtonsListComponent<any>> = {
	description: 'Showcases actions in a loading state. Useful for asynchronous operations where feedback is required, such as saving data. The button can display a spinner and custom loading text until the process completes.',
	args: {
		actions: [
			{
				identifier: "save",
				theme: "raised",
				color: "primary",
				text: "Save",
				loading: true,
				loadingText: "Saving..."
			},
			{
				identifier: "cancel",
				theme: "stroked",
				color: "primary",
				text: "Cancel"
			}
		]
	}
};

export const DisabledStates: Story<FktButtonsListComponent<any>> = {
	description: 'Illustrates disabled actions, preventing user interaction. Use for workflows where certain steps are unavailable or conditional, such as submitting forms only after all required fields are completed.',
	args: {
		actions: [
			{
				identifier: "submit",
				theme: "raised",
				color: "primary",
				text: "Submit",
				disabled: true
			},
			{
				identifier: "reset",
				theme: "stroked",
				color: "primary",
				text: "Reset"
			}
		]
	}
};

export default meta;
