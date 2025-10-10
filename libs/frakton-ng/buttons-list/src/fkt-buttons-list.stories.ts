import type { Meta, StoryObj } from '@storybook/angular';
import { FktComponentInputs, FktComponentTwoWayBindings } from 'frakton-ng/internal/types';
import {
	FktButtonsListAlignment,
	fktButtonsListAlignments,
	FktButtonsListComponent,
	fktButtonsListOrientations
} from 'frakton-ng/buttons-list';

const meta: Meta<FktButtonsListComponent<void>> = {
	title: 'Components/Buttons list',
	component: FktButtonsListComponent,
	argTypes: {
		context: {
			control: 'object',
			table: {
				category: "Attributes",
				type: {
					summary: 'T',
				},
				defaultValue: {
					summary: "undefined",
				},
			},
		},
		orientation: {
			control: 'select',
			options: fktButtonsListOrientations,
			table: {
				category: "Attributes",
				type: {
					summary: 'FktButtonsListOrientation',
					detail: "import {FktButtonsListOrientation} from 'frakton-ng/buttons-list'",
				},
				defaultValue: {
					summary: "'horizontal'",
				},
			},
		},
		fill: {
			control: 'boolean',
			table: {
				category: "Attributes",
				type: {
					summary: 'boolean',
				},
				defaultValue: {
					summary: "false",
				},
			},
		},
		verticalAlignment: {
			control: 'select',
			options: fktButtonsListAlignments,
			table: {
				category: "Attributes",
				type: {
					summary: 'FktButtonsListOrientation',
					detail: "import {FktButtonsListOrientation} from 'frakton-ng/buttons-list'",
				},
				defaultValue: {
					summary: "'start'",
				},
			},
		},
		horizontalAlignment: {
			control: 'select',
			options: fktButtonsListAlignments,
			table: {
				category: "Attributes",
				type: {
					summary: 'FktButtonsListAlignment',
					detail: "import {FktButtonsListAlignment} from 'frakton-ng/buttons-list'",
				},
				defaultValue: {
					summary: "'start'",
				},
			},
		},
		actions: {
			control: 'object',
			type: {
				name: "array",
				value: {name: "object", value: {}},
				required: true
			},
			table: {
				category: "Attributes",
				type: {
					detail: "import {FktButtonAction} from 'frakton-ng/button'",
					summary: 'FktButtonAction<T>[]',
				},
				defaultValue: {
					summary: "undefined",
				},
			},
		}
	}
};

export const Preview: StoryObj = {
	parameters: {
		docs: {
			story: "A horizontal list of action buttons with different themes and colors, perfect for form actions."
		}
	},
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
				variant: "default"
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
				color: "primary"
			},
			{
				identifier: "action-6",
				theme: "basic",
				icon: "trash",
				variant: "rect",
				color: "danger"
			}
		]
	}
};

export const FormActions: StoryObj = {
	parameters: {
		docs: {
			story: "Form action buttons with cancel, save, and submit actions using different alignment options."
		}
	},
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

export const VerticalList: StoryObj = {
	parameters: {
		docs: {
			story: "Buttons arranged vertically with filled button style and center alignment."
		}
	},
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

export const IconOnlyActions: StoryObj = {
	parameters: {
		docs: {
			story: "Compact icon-only buttons with tooltips for space-efficient toolbars."
		}
	},
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

export const DataTableActions: StoryObj = {
	parameters: {
		docs: {
			story: "Action buttons commonly used in data tables for row-level operations."
		}
	},
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

export const BulkActions: StoryObj = {
	parameters: {
		docs: {
			story: 'Demonstrates a group of bulk actions, such as selecting all items, exporting, or deleting selected entries. Each action can have a custom theme, color, icon, and label. Useful for batch operations in tables, lists, or admin panels.'
		}
	},
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

export const ToolbarActions: StoryObj = {
	parameters: {
		docs: {
			story: 'Shows a classic horizontal toolbar with multiple actions, including "New", "Import", "Export", and "Refresh". Icons, themes, and tooltips are supported for enhanced usability in top toolbars and navigation bars.'
		}
	},
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

export const FloatingActions: StoryObj = {
	parameters: {
		docs: {
			story: 'Displays floating action buttons (FAB) in a vertical stack. Ideal for mobile or compact layouts where quick access to chat or add actions is needed. Each button can show an icon and tooltip for accessibility.'
		}
	},
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

export const LoadingStates: StoryObj = {
	parameters: {
		docs: {
			story: 'Showcases actions in a loading state. Useful for asynchronous operations where feedback is required, such as saving data. The button can display a spinner and custom loading text until the process completes.'
		}
	},
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

export const DisabledStates: StoryObj = {
	parameters: {
		docs: {
			story: 'Illustrates disabled actions, preventing user interaction. Use for workflows where certain steps are unavailable or conditional, such as submitting forms only after all required fields are completed.'
		}
	},
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
