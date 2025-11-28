import { Meta } from '@/models/meta';
import { FktButtonGroupComponent, fktButtonGroupShapes, fktButtonGroupSizes } from 'frakton-ng/button-group';
//@ts-expect-error
import documentation from './fkt-button-group.docs.md' with { loader: 'text' };
import { Story } from '@/models/story';
import { DesignToken } from '@/models/design-token';
import designTokens from './fkt-button-group-design-tokens.json';


const meta: Meta<FktButtonGroupComponent> = {
    title: "Components/Form/Button group",
    description: "Group related actions into toggleable buttons with support for icons, shapes, and multi-select workflows.",
    designTokens: designTokens as DesignToken[],
    component: FktButtonGroupComponent,
    argTypes: {
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
    },
    documentation
}

export const BasicUsage: Story<FktButtonGroupComponent> = {
    description: "Single-select group with labeled icons and a predefined selection.",
    args: {
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
        disabled: true,
        value: 'list'
    }
}

export const Shapes: Story<FktButtonGroupComponent> = {
    description: "Compare rounded, rectangular, and flat shapes while keeping the same options.",
    args: {
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
        disabled: true,
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
        disabled: true,
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

export const OnlyLabels: Story<FktButtonGroupComponent> = {
    description: "Text-only buttons without icons for compact layouts.",
    args: {
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
        disabled: true,
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
        disabled: true,
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


export default meta;
