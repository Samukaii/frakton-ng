import { Meta } from '@/models/meta';
import { FktButtonGroupComponent, fktButtonGroupOrientations, fktButtonGroupShapes, fktButtonGroupSizes } from 'frakton-ng/button-group';
import documentation from './fkt-button-group.docs.md' with { loader: 'text' };
import { Story } from '@/models/story';
import { DesignToken } from '@/models/design-token';
import designTokens from './fkt-button-group-design-tokens.json';
import {
    ButtonGroupReactiveFormsComponent
} from '@/stories/button-group/examples/reactive-forms/button-group-reactive-forms.component';
import {
    ButtonGroupSignalFormsComponent
} from '@/stories/button-group/examples/signal-forms/button-group-signal-forms.component';
import {
    ButtonGroupInputDrivenComponent
} from '@/stories/button-group/examples/input-driven/button-group-input-driven.component';


const meta: Meta<FktButtonGroupComponent> = {
    title: "Components/Form/Button group",
    description: "Group related actions into toggleable buttons with support for icons, shapes, and multi-select workflows.",
    designTokens: designTokens as DesignToken[],
    component: FktButtonGroupComponent,
    argTypes: {
        accessibleLabel: {
            control: 'text',
            type: 'string',
            required: true,
            description: "Sets the `aria-label` on the group host, describing its purpose to screen readers — required whenever no visible label is adjacent to the control.",
            category: "Attributes"
        },
        invalid: {
            control: 'boolean',
            type: 'boolean',
            description: "Marks the control as invalid when used without a reactive or signal form. Combined with `touched`, it activates the error border styling on the buttons.",
            category: "Attributes"
        },
        errors: {
            control: 'array',
            type: 'readonly WithOptionalField<ValidationError>[]',
            import: "import { ValidationError, WithOptionalField } from '@angular/forms/signals'",
            description: "Validation errors from a reactive or signal form. The first error's `message` is forwarded to `aria-errormessage` for screen readers. Rendering the message visually is the consumer's responsibility via `fkt-field-error`.",
            category: "Attributes"
        },
        options: {
            control: 'array',
            schema: {
                id: {
                    type: 'text',
                    defaultValue: 'value'
                },
                label: 'text',
                icon: 'icon',
                hideLabel: 'boolean',
            },
            type: 'FktButtonGroupOption[]',
            import: "import {FktButtonGroupOption} from 'frakton-ng/button-group'",
            category: "Attributes",
            description: "Collection of buttons to render; each option needs a unique `id` and display `label`, with optional `icon` and `hideLabel` for icon-only layouts."
        },
        value: {
            control: 'text',
            category: "Attributes",
            type: 'string | null',
            defaultValue: 'null',
            description: "Currently selected option. Use a single `string` for one selection, an array when `multiple` is true, or `null` to clear the group."
        },
        disabled: {
            control: 'boolean',
            category: "Attributes",
            type: 'boolean',
            defaultValue: 'false',
            description: "Disables user interaction and keyboard focus for the entire button group."
        },
        shape: {
            control: 'select',
            options: fktButtonGroupShapes,
            type: 'FktButtonGroupShape',
            import: "import {FktButtonGroupShape} from 'frakton-ng/button-group'",
            description: "Controls the corner style of the buttons: rounded, rectangular, or flat.",
            category: 'Attributes'
        },
        touched: {
            control: 'boolean',
            category: "Attributes",
            type: "boolean",
            defaultValue: "false",
            description: "Signals whether the control has been interacted with; useful for form validation states.",
        },
        multiple: {
            control: 'boolean',
            category: "Attributes",
            type: "boolean",
            defaultValue: "false",
            description: "Allow selecting more than one option; `value` becomes an array of selected ids.",
        },
        deselectable: {
            control: 'boolean',
            category: "Attributes",
            type: "boolean",
            defaultValue: "false",
            description: "Enable clearing a selection by clicking a selected option again.",
        },
        size: {
            control: 'select',
            category: 'Attributes',
            type: 'FktButtonGroupSize',
            description: 'Sets control sizing (padding, icon, and label scale) using the `xs`–`xl` scale.',
            defaultValue: 'xs',
            options: fktButtonGroupSizes,
            import: "import {FktButtonGroupSize} from 'frakton-ng/button-group'"
        },
        orientation: {
            control: 'select',
            category: 'Attributes',
            type: 'FktButtonGroupOrientation',
            description: 'Controls whether buttons are laid out side by side (`horizontal`) or stacked (`vertical`). Arrow key navigation adapts automatically to the chosen axis.',
            defaultValue: 'horizontal',
            options: fktButtonGroupOrientations,
            import: "import {FktButtonGroupOrientation} from 'frakton-ng/button-group'"
        },

    },
    documentation
}

export const BasicUsage: Story<FktButtonGroupComponent> = {
    description: "Single-select group with labeled icons and a predefined selection.",
    args: {
        accessibleLabel: "Filters",
        options: [
            {
                id: 'list',
                label: "List",
                icon: 'list-bullet'
            },
            {
                id: 'grid',
                label: "Grid",
                icon: 'squares-2x2'
            },
            {
                id: 'cards',
                label: "Cards",
                icon: 'square-3-stack-3d'
            }
        ],
        // disabled: false,
        value: 'list'
    }
}

export const Multiple: Story<FktButtonGroupComponent> = {
    description: "Multi-select mode allowing several options to be active simultaneously; `value` is an array of selected ids.",
    args: {
        accessibleLabel: "Filters",
        options: [
            {
                id: 'list',
                label: "List",
                icon: 'list-bullet'
            },
            {
                id: 'grid',
                label: "Grid",
                icon: 'squares-2x2'
            },
            {
                id: 'cards',
                label: "Cards",
                icon: 'square-3-stack-3d'
            }
        ],
        // disabled: false,
        multiple: true as any,
        value: ['list', 'cards']
    },
    argTypes: {
        value: {
            control: 'array',
            schema: 'text'
        }
    }
}

export const Shapes: Story<FktButtonGroupComponent> = {
    description: "Compare rounded, rectangular, and flat shapes while keeping the same options.",
    args: {
        accessibleLabel: "Filters",
        options: [
            {
                id: 'list',
                label: "List",
                icon: 'list-bullet'
            },
            {
                id: 'grid',
                label: "Grid",
                icon: 'squares-2x2'
            },
            {
                id: 'cards',
                label: "Cards",
                icon: 'square-3-stack-3d'
            }
        ],
        // disabled: false,
    },
    variants: {
        orientation: 'vertical',
        items: [
            {
                title: "Rounded",
                args: {
                    shape: 'rounded'
                }
            },
            {
                title: "Rect",
                args: {
                    shape: 'rect'
                }
            },
            {
                title: "Flat",
                args: {
                    shape: 'flat'
                }
            },
        ]
    }
}

export const Sizes: Story<FktButtonGroupComponent> = {
    description: "Demonstrates how the control scales across the available size tokens.",
    args: {
        accessibleLabel: "Filters",
        options: [
            {
                id: 'list',
                label: "List",
                icon: 'list-bullet'
            },
            {
                id: 'grid',
                label: "Grid",
                icon: 'squares-2x2'
            },
            {
                id: 'cards',
                label: "Cards",
                icon: 'square-3-stack-3d'
            }
        ],
        // disabled: false,
    },
    variants: {
        orientation: 'vertical',
        items: [
            {
                title: "Extra small",
                args: {
                    size: 'xs'
                }
            },
            {
                title: "Small",
                args: {
                    size: 'sm'
                }
            },
            {
                title: "Medium",
                args: {
                    size: 'md'
                }
            },
            {
                title: "Large",
                args: {
                    size: 'lg'
                }
            },
            {
                title: "Extra large",
                args: {
                    size: 'xl'
                }
            },
        ]
    }
}

export const Orientations: Story<FktButtonGroupComponent> = {
    description: "Compares horizontal and vertical layouts. Arrow key navigation adapts automatically: left/right for horizontal, up/down for vertical.",
    args: {
        accessibleLabel: "Filters",
        options: [
            {
                id: 'list',
                label: "List",
                icon: 'list-bullet'
            },
            {
                id: 'grid',
                label: "Grid",
                icon: 'squares-2x2'
            },
            {
                id: 'cards',
                label: "Cards",
                icon: 'square-3-stack-3d'
            }
        ],
    },
    variants: {
        orientation: 'vertical',
        items: [
            {
                title: "Horizontal",
                args: { orientation: 'horizontal' }
            },
            {
                title: "Vertical",
                args: { orientation: 'vertical' }
            },
        ]
    }
}

export const OnlyLabels: Story<FktButtonGroupComponent> = {
    description: "Text-only buttons without icons for compact layouts.",
    args: {
        accessibleLabel: "Filters",
        options: [
            {
                id: 'list',
                label: "List",
            },
            {
                id: 'grid',
                label: "Grid",
            },
            {
                id: 'cards',
                label: "Cards",
            }
        ],
        // disabled: false,
    },
    variants: {
        orientation: 'vertical',
        items: [
            {
                title: "Rounded",
                args: {
                    shape: 'rounded'
                }
            },
            {
                title: "Rect",
                args: {
                    shape: 'rect'
                }
            },
            {
                title: "Flat",
                args: {
                    shape: 'flat'
                }
            },
        ]
    }
}


export const OnlyIcons: Story<FktButtonGroupComponent> = {
    description: "Icon-only presentation with labels hidden for minimal UI.",
    args: {
        accessibleLabel: "Filters",
        options: [
            {
                id: 'list',
                label: "List",
                icon: 'list-bullet',
                hideLabel: true
            },
            {
                id: 'grid',
                label: "Grid",
                icon: 'squares-2x2',
                hideLabel: true
            },
            {
                id: 'cards',
                label: "Cards",
                icon: 'square-3-stack-3d',
                hideLabel: true
            }
        ],
        // disabled: false,
    },
    variants: {
        orientation: 'vertical',
        items: [
            {
                title: "Rounded",
                args: {
                    shape: 'rounded'
                }
            },
            {
                title: "Rect",
                args: {
                    shape: 'rect'
                }
            },
            {
                title: "Flat",
                args: {
                    shape: 'flat'
                }
            },
        ]
    }
}

export const ReactiveForms: Story<ButtonGroupReactiveFormsComponent> = {
    component: ButtonGroupReactiveFormsComponent,
    description: "Integration with Angular Reactive Forms via `formControl`. Demonstrates `Validators.required`, error display tied to control status, and toggling the disabled state programmatically.",
    args: {}
}

export const SignalForms: Story<ButtonGroupSignalFormsComponent> = {
    component: ButtonGroupSignalFormsComponent,
    description: "Integration with the signal-based `@angular/forms/signals` API via the `[field]` binding. Shows required validation, signal-driven disabled state, and reactive error messages.",
    args: {}
}

export const InputDriven: Story<ButtonGroupInputDrivenComponent> = {
    component: ButtonGroupInputDrivenComponent,
    description: "Manual signal-driven binding using `[(value)]` and `[(touched)]` two-way models without a form abstraction. Validation and error display are handled directly in the template.",
    args: {}
}


export default meta;
