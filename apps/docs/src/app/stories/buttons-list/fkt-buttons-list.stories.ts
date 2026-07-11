import {fktButtonsListAlignments, FktButtonsListComponent, fktButtonsListOrientations} from 'frakton-ng/buttons-list';
import designTokens from './fkt-buttons-list-design-tokens.json';
import documentation from './fkt-buttons-list.docs.md' with {loader: 'text'};
import {Meta} from '@/models/meta';
import {Story} from '@/models/story';
import {buttonActionSchema} from '@/static/schemas/button-action.schema';

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
            control: 'array',
            schema: buttonActionSchema,
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
                appearance: 'raised',
                color: "primary",
                label: "Action 1"
            },
            {
                identifier: "action-2",
                appearance: 'stroked',
                color: "success",
                label: "Action 2",
                shape: "rounded"
            },
            {
                identifier: "action-3",
                appearance: 'basic',
                color: "danger",
                label: "Action 3"
            },
            {
                identifier: "action-4",
                appearance: 'raised',
                color: "accent",
                label: "Action 4"
            },
            {
                identifier: "action-5",
                appearance: 'raised',
                icon: "plus",
                color: "primary",
                label: "Action 5",
                iconOnly: true
            },
            {
                identifier: "action-6",
                appearance: 'basic',
                icon: "trash",
                color: "danger",
                label: "Action 6",
                iconOnly: true
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
                appearance: 'basic',
                color: "danger",
                label: "Cancel"
            },
            {
                identifier: "save-draft",
                appearance: 'stroked',
                color: "success",
                label: "Save Draft"
            },
            {
                identifier: "submit",
                appearance: 'raised',
                color: "success",
                label: "Submit"
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
                appearance: 'basic',
                color: "primary",
                label: "Dashboard",
                icon: "home",
            },
            {
                identifier: "users",
                appearance: 'basic',
                color: "primary",
                label: "Users",
                icon: "users",
            },
            {
                identifier: "settings",
                appearance: 'basic',
                color: "primary",
                label: "Settings",
                icon: "cog",
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
                appearance: 'basic',
                color: "primary",
                icon: "pencil",
                tooltip: "Edit",
                label: "Edit",
                iconOnly: true
            },
            {
                identifier: "duplicate",
                appearance: 'basic',
                color: "success",
                icon: "trash",
                tooltip: "Duplicate",
                label: "Duplicate",
                iconOnly: true
            },
            {
                identifier: "delete",
                appearance: 'basic',
                color: "danger",
                icon: "trash",
                tooltip: "Delete",
                label: "Delete",
                iconOnly: true
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
                appearance: 'basic',
                color: "primary",
                icon: "eye",
                label: "View Details",
                iconOnly: true,
                tooltip: "View Details",
            },
            {
                identifier: "edit",
                appearance: 'basic',
                color: "success",
                icon: "pencil",
                label: "Edit Item",
                iconOnly: true,
                tooltip: "Edit Item",
            },
            {
                identifier: "delete",
                appearance: 'basic',
                color: "danger",
                icon: "trash",
                label: "Delete Item",
                iconOnly: true,
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
                appearance: 'stroked',
                color: "primary",
                label: "Select All"
            },
            {
                identifier: "export",
                appearance: 'stroked',
                color: "success",
                label: "Export",
                suffixIcon: "trash",
            },
            {
                identifier: "delete-selected",
                appearance: 'raised',
                color: "danger",
                label: "Delete Selected"
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
                appearance: 'raised',
                color: "primary",
                label: "New",
                icon: "plus",
            },
            {
                identifier: "import",
                appearance: 'stroked',
                color: "primary",
                label: "Import",
                icon: "trash"
            },
            {
                identifier: "export",
                appearance: 'stroked',
                color: "success",
                label: "Export",
                icon: "trash"
            },
            {
                identifier: "refresh",
                appearance: 'basic',
                color: "primary",
                icon: "trash",
                tooltip: "Refresh Data",
                label: "Refresh Data",
                iconOnly: true
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
                appearance: 'raised',
                color: "success",
                icon: "trash",
                tooltip: "Open Chat",
                label: "Open Chat",
                iconOnly: true
            },
            {
                identifier: "add",
                appearance: 'raised',
                color: "primary",
                icon: "plus",
                tooltip: "Add New Item",
                label: "Add New Item",
                iconOnly: true
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
                appearance: 'raised',
                color: "primary",
                label: "Save",
                loading: true
            },
            {
                identifier: "cancel",
                appearance: 'stroked',
                color: "primary",
                label: "Cancel"
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
                appearance: 'raised',
                color: "primary",
                label: "Submit",
                disabled: true
            },
            {
                identifier: "reset",
                appearance: 'stroked',
                color: "primary",
                label: "Reset"
            }
        ]
    }
};

export default meta;
