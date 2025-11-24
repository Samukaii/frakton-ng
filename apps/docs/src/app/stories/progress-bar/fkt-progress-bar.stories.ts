import { FktProgressBarComponent, fktProgressBarSizes } from 'frakton-ng/progress-bar';
import { BasicUsageComponent, DashboardMetricsComponent, WithLabelsComponent } from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
import designTokens from './fkt-progress-bar-design-tokens.json';
import { DesignToken } from '@/models/design-token';
// @ts-expect-error
import documentation from './fkt-progress-bar.docs.md' with {loader: "text"};
import { fktColors } from 'frakton-ng/core';

const meta: Meta = {
    title: "Components/Feedback/Progress Bar",
    description: "A versatile progress bar component for displaying progress indicators, loading states, and completion status with customizable styling options.",
    component: FktProgressBarComponent,
    loadType: 'lazy',
    documentation,
    customDimensions: {
      width: '100%'
    },
    designTokens: designTokens as DesignToken[],
    argTypes: {
        value: {
            control: 'number',
            category: "Attributes",
            type: 'number',
            defaultValue: "0",
            description: 'Current progress value'
        },
        max: {
            control: 'number',
            category: "Attributes",
            type: 'number',
            defaultValue: "100",
            description: 'Maximum progress value'
        },
        size: {
            control: 'select',
            category: "Attributes",
            type: 'FktProgressBarSize',
            options: fktProgressBarSizes,
            import: "import {FktProgressBarSize} from 'frakton-ng/progress-bar'",
            defaultValue: "'md'",
            description: 'Size of the progress bar'
        },
        color: {
            control: 'select',
            category: "Attributes",
            type: 'FktColor',
            options: fktColors,
            import: "import {FktColor} from 'frakton-ng/core'",
            defaultValue: "'primary'",
            description: 'Color scheme of the progress bar. Supports semantic colors or custom hex values.'
        },
        variant: {
            control: 'select',
            category: "Attributes",
            type: 'FktProgressBarVariant',
            options: ['default', 'striped', 'animated'],
            import: "import {FktProgressBarVariant} from 'frakton-ng/progress-bar'",
            defaultValue: "'default'",
            description: 'Visual variant of the progress bar'
        },
        shape: {
            control: 'select',
            category: "Attributes",
            type: 'FktProgressBarShape',
            options: ['rounded', 'square'],
            import: "import {FktProgressBarShape} from 'frakton-ng/progress-bar'",
            defaultValue: "'rounded'",
            description: 'Shape of the progress bar'
        },
        label: {
            control: 'text',
            category: "Attributes",
            type: 'string',
            defaultValue: "''",
            description: 'Optional label text for the progress bar'
        },
        showLabel: {
            control: 'boolean',
            category: "Attributes",
            type: 'boolean',
            defaultValue: "false",
            description: 'Whether to show the label text'
        },
        showValue: {
            control: 'boolean',
            category: "Attributes",
            type: 'boolean',
            defaultValue: "false",
            description: 'Whether to show the progress value'
        },
        formatValue: {
            control: 'object',
            category: "Attributes",
            type: '(value: number, max: number) => string | undefined',
            defaultValue: "undefined",
            description: 'Custom formatter for the progress value display'
        },
        ariaLabel: {
            control: 'text',
            category: "Attributes",
            type: 'string | undefined',
            defaultValue: "undefined",
            description: 'Custom aria-label for accessibility'
        },
        indeterminate: {
            control: 'boolean',
            category: "Attributes",
            type: 'boolean',
            defaultValue: "false",
            description: 'Whether the progress bar is in indeterminate state'
        }
    }
}

export const Default: Story<FktProgressBarComponent> = {
    description: "Basic progress bar with default settings.",
    args: {
        value: 65,
        size: 'xs',
        color: 'primary',
        variant: 'default',
        shape: 'rounded'
    }
};

export const WithLabel: Story<FktProgressBarComponent> = {
    description: "Progress bar with label text displayed above.",
    args: {
        value: 75,
        label: 'Upload Progress',
        showLabel: true,
        showValue: true,
        indeterminate: false,
        color: 'primary'
    }
};

export const ValueOnly: Story<FktProgressBarComponent> = {
    description: "Progress bar with value shown inside the fill area.",
    args: {
        value: 45,
        showValue: true,
        color: 'primary'
    }
};

export const Sizes: Story<FktProgressBarComponent> = {
    description: "Progress bar with different sizes.",
    args: {
        value: 60,
        color: 'primary',
        size: 'md'
    },
    variants: {
        items: [
            {
                title: "Extra Small",
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
            }
        ]
    }
};

export const SemanticColors: Story<FktProgressBarComponent> = {
    description: "Progress bar with semantic colors.",
    args: {
        value: 70,
        size: 'xs',
        color: 'primary'
    },
    variants: {
        items: [
            {
                title: "Primary",
                args: {
                    color: 'primary'
                }
            },
            {
                title: "Accent",
                args: {
                    color: 'accent'
                }
            },
            {
                title: "Success",
                args: {
                    color: 'success',
                    value: 85
                }
            },
            {
                title: "Warning",
                args: {
                    color: 'warning',
                    value: 55
                }
            },
            {
                title: "Danger",
                args: {
                    color: 'danger',
                    value: 25
                }
            },
            {
                title: "Info",
                args: {
                    color: 'info',
                    value: 40
                }
            }
        ]
    }
};

export const Variants: Story<FktProgressBarComponent> = {
    description: "Progress bar with different variants.",
    args: {
        value: 65,
        color: 'primary',
        size: 'lg',
        variant: 'default'
    },
    variants: {
        items: [
            {
                title: "Default",
                args: {
                    variant: 'default'
                }
            },
            {
                title: "Striped",
                args: {
                    variant: 'striped'
                }
            },
            {
                title: "Animated",
                args: {
                    variant: 'animated',
                    value: 75
                }
            }
        ]
    }
};

export const Shapes: Story<FktProgressBarComponent> = {
    description: "Progress bar with different shapes.",
    args: {
        value: 50,
        color: 'primary',
        size: 'lg',
        shape: 'rounded'
    },
    variants: {
        items: [
            {
                title: "Rounded",
                args: {
                    shape: 'rounded'
                }
            },
            {
                title: "Square",
                args: {
                    shape: 'square'
                }
            }
        ]
    }
};

export const Indeterminate: Story<FktProgressBarComponent> = {
    description: "Progress bar in indeterminate state.",
    args: {
        indeterminate: true,
        color: 'primary',
        size: 'xs'
    },
    variants: {
        items: [
            {
                title: "Primary",
                args: {
                    color: 'primary'
                }
            },
            {
                title: "Success",
                args: {
                    color: 'success'
                }
            },
            {
                title: "Warning",
                args: {
                    color: 'warning'
                }
            },
            {
                title: "Info",
                args: {
                    color: 'info'
                }
            }
        ]
    }
};

export const CustomColor: Story<FktProgressBarComponent> = {
    description: "Progress bar with custom hex color.",
    args: {
        value: 80,
        showValue: true,
        size: 'xs',
        indeterminate: false
    },
    variants: {
        items: [
            {
                title: "Purple",
                args: {
                    color: '#5b1aff',
                    value: 32,
                }
            },
            {
                title: "Lime",
                args: {
                    color: '#00ff2b',
                    value: 44,
                }
            },
            {
                title: "Black",
                args: {
                    color: '#000000',
                    value: 23,
                }
            },
            {
                title: "White",
                args: {
                    color: '#ffffff',
                    value: 93,
                }
            },
            {
                title: "Magenta",
                args: {
                    color: '#ff1a94',
                    value: 31,
                }
            },
        ]
    }
};

export const CompleteProgress: Story<FktProgressBarComponent> = {
    description: "Progress bar showing completed state.",
    args: {
        value: 100,
        label: 'Download Complete',
        showLabel: true,
        showValue: true,
        color: 'success',
        size: 'lg'
    }
};

export const ExampleList: Story<BasicUsageComponent> = {
    component: BasicUsageComponent,
    description: "Grouped progress bars showing sizes, semantic colors, and animated variants.",
    args: {}
};

export const ExampleWithLabels: Story<WithLabelsComponent> = {
    component: WithLabelsComponent,
    description: "Demonstrates label rows, inline values, and custom value formatting.",
    args: {}
};

export const ExampleDashboardMetrics: Story<DashboardMetricsComponent> = {
    component: DashboardMetricsComponent,
    description: "Dashboard-style KPIs with semantic colors, custom hex values, and striped states.",
    args: {}
};

export default meta;
