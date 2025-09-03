import type { Meta } from '@storybook/angular';
import { FktComponentInputs, FktComponentTwoWayBindings } from 'frakton-ng/internal/types';
import { FktButtonsListComponent, fktButtonsListOrientations } from 'frakton-ng/buttons-list';

const meta: Meta<FktButtonsListComponent<void>> = {
	title: 'Components/Buttons list',
	component: FktButtonsListComponent,
	argTypes: {
		context: {
			control: 'object',
		},
		orientation: {
			control: 'select',
			options: fktButtonsListOrientations
		},
		fill: {
			control: 'boolean'
		},
		actions: {
			control: 'object',
			type: {
				name: 'array',
				value: {
					name: "object",
					value: {}
				}
			}
		}
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktButtonsListComponent<void>>> & Partial<FktComponentTwoWayBindings<FktButtonsListComponent<void>>>
}

export const Preview: Story = {
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
				color: "green",
				text: "Action 2",
				variant: "default"
			},
			{
				identifier: "action-3",
				theme: "basic",
				color: "red",
				text: "Action 3"
			},
			{
				identifier: "action-4",
				theme: "raised",
				color: "yellow",
				text: "Action 4"
			},
			{
				identifier: "action-5",
				theme: "raised",
				icon: "plus",
				color: "primary"
			},
			{
				identifier: "action-6",
				theme: "basic",
				icon: "trash",
				variant: "rect",
				color: "red"
			}
		]
	}
};

export const FormActions: Story = {
	args: {
		actions: [
			{
				identifier: "cancel",
				theme: "basic",
				color: "red",
				text: "Cancel"
			},
			{
				identifier: "save-draft",
				theme: "stroked",
				color: "green",
				text: "Save Draft"
			},
			{
				identifier: "submit",
				theme: "raised",
				color: "green",
				text: "Submit"
			}
		],
		horizontalAlignment: "end"
	}
};

export const VerticalList: Story = {
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

export const IconOnlyActions: Story = {
	args: {
		actions: [
			{
				identifier: "edit",
				theme: "basic",
				color: "primary",
				icon: "pencil",
				tooltip: "Edit"
			},
			{
				identifier: "duplicate",
				theme: "basic",
				color: "green",
				icon: "trash",
				tooltip: "Duplicate"
			},
			{
				identifier: "delete",
				theme: "basic",
				color: "red",
				icon: "trash",
				tooltip: "Delete"
			}
		]
	}
};

export const DataTableActions: Story = {
	args: {
		actions: [
			{
				identifier: "view",
				theme: "basic",
				color: "primary",
				icon: "eye",
				variant: "rect",
				tooltip: "View Details"
			},
			{
				identifier: "edit",
				theme: "basic",
				color: "green",
				icon: "pencil",
				variant: "rect",
				tooltip: "Edit Item"
			},
			{
				identifier: "delete",
				theme: "basic",
				color: "red",
				icon: "trash",
				variant: "rect",
				tooltip: "Delete Item"
			}
		]
	}
};

export const BulkActions: Story = {
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
				color: "green",
				text: "Export",
				icon: "trash",
				iconPosition: "right"
			},
			{
				identifier: "delete-selected",
				theme: "raised",
				color: "red",
				text: "Delete Selected"
			}
		],
		horizontalAlignment: "space-between"
	}
};

export const ToolbarActions: Story = {
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
				color: "green",
				text: "Export",
				icon: "trash"
			},
			{
				identifier: "refresh",
				theme: "basic",
				color: "primary",
				icon: "trash",
				tooltip: "Refresh Data"
			}
		]
	}
};

export const FloatingActions: Story = {
	args: {
		actions: [
			{
				identifier: "chat",
				theme: "raised",
				color: "green",
				icon: "trash",
				tooltip: "Open Chat"
			},
			{
				identifier: "add",
				theme: "raised",
				color: "primary",
				icon: "plus",
				tooltip: "Add New Item"
			}
		],
		orientation: "vertical"
	}
};

export const LoadingStates: Story = {
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

export const DisabledStates: Story = {
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

// Aliases for MDX documentation compatibility
export const VerticalOrientation = VerticalList;
export const IconOnly = IconOnlyActions;

export default meta;
