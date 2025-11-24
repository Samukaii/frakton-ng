import { FktDividerComponent } from 'frakton-ng/divider';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
import designTokens from './fkt-divider-design-tokens.json';
import { DesignToken } from '@/models/design-token';
// @ts-expect-error
import documentation from './fkt-divider.docs.md' with {loader: "text"};

const meta: Meta = {
    title: "Components/Layout/Divider",
    description: "A flexible divider component for visually separating content with customizable orientation, styling, and optional labels.",
    component: FktDividerComponent,
    loadType: 'lazy',
    documentation,
    customDimensions: {
      width: '100%'
    },
    designTokens: designTokens as DesignToken[],
    argTypes: {
        orientation: {
            control: 'select',
            category: "Attributes",
            type: 'FktDividerOrientation',
            options: ['horizontal', 'vertical'],
            import: "import {FktDividerOrientation} from 'frakton-ng/divider'",
            defaultValue: "'horizontal'",
            description: 'Orientation of the divider'
        },
        variant: {
            control: 'select',
            category: "Attributes",
            type: 'FktDividerVariant',
            options: ['solid', 'dashed', 'dotted'],
            import: "import {FktDividerVariant} from 'frakton-ng/divider'",
            defaultValue: "'solid'",
            description: 'Visual style of the divider line'
        },
        size: {
            control: 'select',
            category: "Attributes",
            type: 'FktDividerSize',
            options: ['thin', 'medium', 'thick'],
            import: "import {FktDividerSize} from 'frakton-ng/divider'",
            defaultValue: "'medium'",
            description: 'Thickness of the divider line'
        },
        color: {
            control: 'select',
            category: "Attributes",
            type: 'FktColor',
            options: ['primary', 'secondary', 'neutral', 'success', 'warning', 'danger', 'info'],
            import: "import {FktColor} from 'frakton-ng/core'",
            defaultValue: "'neutral'",
            description: 'Color of the divider'
        },
        spacing: {
            control: 'select',
            category: "Attributes",
            type: 'FktDividerSpacing',
            options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
            import: "import {FktDividerSpacing} from 'frakton-ng/divider'",
            defaultValue: "'md'",
            description: 'Margin spacing around the divider'
        },
        label: {
            control: 'text',
            category: "Attributes",
            type: 'string | undefined',
            defaultValue: "undefined",
            description: 'Optional label text to display on the divider'
        },
        customColor: {
            control: 'text',
            category: "Attributes",
            type: 'string | undefined',
            defaultValue: "undefined",
            description: 'Custom hex color for the divider'
        }
    }
}

export const Default: Story<FktDividerComponent> = {
    description: "Basic horizontal divider with default settings.",
    args: {
        orientation: 'horizontal',
        variant: 'solid',
        size: 'medium',
        spacing: 'md'
    }
};

export const HorizontalSizes: Story<FktDividerComponent> = {
    description: "Horizontal divider with a label in the center.",
    args: {
        orientation: 'horizontal',
        variant: 'solid',
        spacing: 'md',
        label: 'Section Break'
    },
    variants: {
        orientation: 'vertical',
        items: [
            {
                title: "Thin",
                args: {
                    size: 'thin',
                }
            },
            {
                title: "Medium",
                args: {
                    size: 'medium'
                }
            },
            {
                title: "Thick",
                args: {
                    size: 'thick'
                }
            },
        ]
    }
};

export const HorizontalVariants: Story<FktDividerComponent> = {
    description: "Horizontal divider with a label in the center.",
    args: {
        orientation: 'horizontal',
        variant: 'solid',
        size: 'medium',
        spacing: 'md',
        label: 'Section Break'
    },
    variants: {
        orientation: 'vertical',
        items: [
            {
                title: "Solid",
                args: {
                    variant: 'solid',
                }
            },
            {
                title: "Dashed",
                args: {
                    variant: 'dashed',
                }
            },
            {
                title: "Dotted",
                args: {
                    variant: 'dotted',
                }
            },
        ]
    }
};

export const HorizontalWithLabel: Story<FktDividerComponent> = {
    description: "Vertical divider with a label in the middle.",
    args: {
        orientation: 'horizontal',
        variant: 'solid',
        spacing: 'md',
        label: 'OR'
    },
    variants: {
        orientation: 'vertical',
        items: [
            {
                title: "Thin",
                args: {
                    size: 'thin'
                }
            },
            {
                title: "Medium",
                args: {
                    size: 'medium'
                }
            },
            {
                title: "Thick",
                args: {
                    size: 'thick'
                }
            },
        ]
    }
};

export const VerticalSizes: Story<FktDividerComponent> = {
    description: "Vertical divider for separating content horizontally.",
    customDimensions: {
        height: '400px'
    },
    args: {
        orientation: 'vertical',
        variant: 'solid',
        size: 'medium',
        spacing: 'md'
    },
    variants: {
        items: [
            {
                title: "Thin",
                args: {
                    size: 'thin'
                }
            },
            {
                title: "Medium",
                args: {
                    size: 'medium'
                }
            },
            {
                title: "Thick",
                args: {
                    size: 'thick'
                }
            },
        ]
    }
};

export const VerticalVariants: Story<FktDividerComponent> = {
    description: "Vertical divider for separating content horizontally.",
    customDimensions: {
        height: '400px'
    },
    args: {
        orientation: 'vertical',
        size: 'medium',
        spacing: 'md'
    },
    variants: {
        items: [
            {
                title: "Solid",
                args: {
                    variant: 'solid',
                }
            },
            {
                title: "Dashed",
                args: {
                    variant: 'dashed',
                }
            },
            {
                title: "Dotted",
                args: {
                    variant: 'dotted',
                }
            },
        ]
    }
};

export const VerticalWithLabel: Story<FktDividerComponent> = {
    description: "Vertical divider with a label in the middle.",
    customDimensions: {
        height: '400px'
    },
    args: {
        orientation: 'vertical',
        variant: 'solid',
        spacing: 'md',
        label: 'OR'
    },
    variants: {
        items: [
            {
                title: "Thin",
                args: {
                    size: 'thin'
                }
            },
            {
                title: "Medium",
                args: {
                    size: 'medium'
                }
            },
            {
                title: "Thick",
                args: {
                    size: 'thick'
                }
            },
        ]
    }
};

export const Spacings: Story<FktDividerComponent> = {
    description: "Horizontal divider with a label in the center.",
    args: {
        orientation: 'horizontal',
        variant: 'solid',
        size: 'medium',
        spacing: 'md',
        label: 'Section Break'
    },
    variants: {
        items: [
            {
                title: "XS",
                args: {
                    spacing: "xs"
                }
            },
            {
                title: "SM",
                args: {
                    spacing: "sm"
                }
            },
            {
                title: "MD",
                args: {
                    spacing: "md"
                }
            },
            {
                title: "LG",
                args: {
                    spacing: "lg"
                }
            },
            {
                title: "XL",
                args: {
                    spacing: "xl"
                }
            },
        ]
    }
};

export default meta;
