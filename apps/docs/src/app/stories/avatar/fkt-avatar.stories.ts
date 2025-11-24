import { FktAvatarComponent, fktAvatarShapes, fktAvatarSizes } from 'frakton-ng/avatar';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
import designTokens from './fkt-avatar-design-tokens.json';
import { DesignToken } from '@/models/design-token';
// @ts-expect-error
import documentation from './fkt-avatar.docs.md' with { loader: 'text' };
import { fktColors } from 'frakton-ng/core';

const meta: Meta = {
    title: "Components/Data Display/Avatar",
    description: "A versatile avatar component for displaying user profile pictures, initials, or icons with customizable styling options.",
    component: FktAvatarComponent,
    loadType: 'lazy',
    documentation,
    designTokens: designTokens as DesignToken[],
    argTypes: {
        src: {
            control: 'text',
            category: "Attributes",
            type: 'string | undefined',
            defaultValue: "undefined",
            description: 'URL of the avatar image'
        },
        alt: {
            control: 'text',
            category: "Attributes",
            type: 'string',
            defaultValue: "'Avatar'",
            description: 'Alternative text for the avatar image'
        },
        initials: {
            control: 'text',
            category: "Attributes",
            type: 'string',
            defaultValue: "''",
            description: 'Initials to display when no image is provided'
        },
        icon: {
            control: 'text',
            category: "Attributes",
            type: 'FktIconName',
            defaultValue: "'user'",
            import: "import {FktIconName} from 'frakton-ng/icon'",
            description: 'Icon to display when no image or initials are provided'
        },
        size: {
            control: 'select',
            category: "Attributes",
            type: 'FktAvatarSize',
            options: fktAvatarSizes,
            import: "import {FktAvatarSize} from 'frakton-ng/avatar'",
            defaultValue: "'md'",
            description: 'Size of the avatar'
        },
        shape: {
            control: 'select',
            category: "Attributes",
            type: 'FktAvatarShape',
            options: fktAvatarShapes,
            import: "import {FktAvatarShape} from 'frakton-ng/avatar'",
            defaultValue: "'circle'",
            description: 'Shape of the avatar'
        },
        backgroundColor: {
            control: 'select',
            category: "Attributes",
            type: 'FktColor',
            options: fktColors,
            import: "import {FktColor} from 'frakton-ng/core'",
            defaultValue: "'primary'",
            description: 'Background color of the avatar'
        },
        textColor: {
            control: 'text',
            category: "Attributes",
            type: 'string | "auto"',
            defaultValue: "'auto'",
            description: 'Text color of the avatar (auto for contrast-based)'
        },
        loading: {
            control: 'boolean',
            category: "Attributes",
            type: 'boolean',
            defaultValue: "false",
            description: 'Whether the avatar is in loading state'
        }
    }
}

export const Basic: Story<FktAvatarComponent> = {
    description: "Basic avatar with default settings showing an icon.",
    args: {
        size: 'md',
        shape: 'circle',
        backgroundColor: 'primary',
        textColor: 'auto'
    }
};

export const Image: Story<FktAvatarComponent> = {
    description: "Avatar displaying a user image.",
    args: {
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        alt: 'User avatar',
        shape: 'circle'
    },
    variants: {
        items: [
            {
                title: "Extra large",
                args: {
                    size: 'xl',
                }
            },
            {
                title: "Large",
                args: {
                    size: 'lg',
                }
            },
            {
                title: "Normal",
                args: {
                    size: 'md',
                }
            },
            {
                title: "Small",
                args: {
                    size: 'sm',
                }
            },
            {
                title: "Extra small",
                args: {
                    size: 'xs',
                }
            },
        ]
    }
};

export const Initials: Story<FktAvatarComponent> = {
    description: "Avatar displaying user initials.",
    args: {
        shape: 'circle',
        backgroundColor: 'primary',
        textColor: 'auto'
    },
    variants: {
        items: [
            {
                title: "Extra large",
                args: {
                    size: 'xl',
                    initials: 'SA'
                }
            },
            {
                title: "Large",
                args: {
                    size: 'lg',
                    initials: 'JD'
                }
            },
            {
                title: "Normal",
                args: {
                    size: 'md',
                    initials: 'AM'
                }
            },
            {
                title: "Small",
                args: {
                    size: 'sm',
                    initials: 'SU'
                }
            },
            {
                title: "Extra small",
                args: {
                    size: 'xs',
                    initials: 'JK'
                }
            },
        ]
    }
};

export const Loading: Story<FktAvatarComponent> = {
    description: "Avatar in loading state.",
    args: {
        backgroundColor: 'primary',
        loading: true
    },
    variants: {
        items: [
            {
                title: "Extra large",
                args: {
                    size: 'xl',
                    initials: 'SA'
                }
            },
            {
                title: "Large",
                args: {
                    size: 'lg',
                    initials: 'JD'
                }
            },
            {
                title: "Normal",
                args: {
                    size: 'md',
                    initials: 'AM'
                }
            },
            {
                title: "Small",
                args: {
                    size: 'sm',
                    initials: 'SU'
                }
            },
            {
                title: "Extra small",
                args: {
                    size: 'xs',
                    initials: 'JK'
                }
            },
        ]
    }
};


export const CustomIcons: Story<FktAvatarComponent> = {
    description: "Avatar with a custom icon.",
    args: {
        icon: 'star',
        shape: 'circle',
        backgroundColor: 'info'
    },
    variants: {
        items: [
            {
                title: "Extra large",
                args: {
                    size: 'xl',
                    icon: 'map'
                }
            },
            {
                title: "Large",
                args: {
                    size: 'lg',
                    icon: 'user-group'
                }
            },
            {
                title: "Normal",
                args: {
                    size: 'md',
                    icon: 'rectangle-group'
                }
            },
            {
                title: "Small",
                args: {
                    size: 'sm',
                    icon: 'rocket-launch'
                }
            },
            {
                title: "Extra small",
                args: {
                    size: 'xs',
                    icon: 'key'
                }
            },
        ]
    }
};

export const Shapes: Story<FktAvatarComponent> = {
    description: "Avatar with circle shape.",
    args: {
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        size: 'lg',
        shape: 'circle'
    },
    variants: {
        items: [
            {
                title: "Circle",
                args: {
                    shape: 'circle',
                }
            },
            {
                title: "Square",
                args: {
                    shape: 'square',
                }
            },
            {
                title: "Rounded",
                args: {
                    shape: 'rounded',
                }
            },
        ]
    }
};

export const SemanticColors: Story<FktAvatarComponent> = {
    description: "Avatar with primary background color.",
    args: {
        initials: 'PR',
        size: 'lg',
        backgroundColor: 'primary'
    },
    variants: {
        items: [
            {
                title: "Primary",
                args: {
                    backgroundColor: 'primary',
                    initials: 'PR',
                }
            },
            {
                title: "Info",
                args: {
                    backgroundColor: 'info',
                    initials: 'IN',
                }
            },
            {
                title: "Warning",
                args: {
                    backgroundColor: 'warning',
                    initials: 'WA',
                }
            },
            {
                title: "Danger",
                args: {
                    backgroundColor: 'danger',
                    initials: 'DA',
                }
            },
            {
                title: "Accent",
                args: {
                    backgroundColor: 'accent',
                    initials: 'AC',
                }
            },
            {
                title: "Success",
                args: {
                    backgroundColor: 'success',
                    initials: 'SU',
                }
            },
        ]
    }
};


export const CustomColors: Story<FktAvatarComponent> = {
    description: "Avatar with custom hex colors.",
    args: {
        initials: 'CC',
        size: 'lg',
        backgroundColor: '#8B5CF6',
    },
    variants: {
        items: [
            {
                title: 'White',
                args: {
                    backgroundColor: '#ffffff'
                },
            },
            {
                title: 'Purple',
                args: {
                    backgroundColor: '#8B5CF6'
                },
            },
            {
                title: 'Magenta',
                args: {
                    backgroundColor: '#a606c5'
                },
            },
            {
                title: 'Black',
                args: {
                    backgroundColor: '#000000'
                },
            },
            {
                title: 'Dark blue',
                args: {
                    backgroundColor: '#0d235b'
                },
            },
            {
                title: 'Brown',
                args: {
                    backgroundColor: '#572413'
                },
            },

        ]
    }
};


export default meta;
