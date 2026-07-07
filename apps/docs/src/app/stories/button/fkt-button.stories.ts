import {
    FktButtonComponent,
    fktButtonAppearances,
    fktButtonShapes,
    fktButtonSizes,
    fktButtonTypes,
} from 'frakton-ng/button';
import { fktColors } from 'frakton-ng/core';
import { Meta } from '@/models/meta';
import { Story, StoryIntroduction } from '@/models/story';
import designTokens from './fkt-button-design-tokens.json';
import { DesignToken } from '@/models/design-token';
import documentation from './fkt-button.docs.md' with { loader: 'text' };
import {
    ButtonBasicExampleComponent,
    ButtonCompositionExampleComponent,
    ButtonCustomColorsExampleComponent,
    ButtonLoadingExampleComponent,
    ButtonSizesExampleComponent,
    IconVariantsExampleComponent,
    TextVariantsExampleComponent,
} from './examples';

const meta: Meta = {
    title: 'Components/Actions/Button',
    description: `Native button component with an opinionated visual structure. The required label owns
the accessible name, while optional prefix, suffix, and loading indicator slots support limited
composition without replacing the button's primary semantics.`,
    component: FktButtonComponent,
    documentation,
    designTokens: designTokens as DesignToken[],
    panelStyle: {
        outerWidth: '100%',
    },
    argTypes: {
        label: {
            control: 'text',
            category: 'Attributes',
            type: 'string',
            required: true,
            description:
                'Required semantic and visual label. This remains the single source of truth for the accessible name.',
        },
        hideLabel: {
            control: 'boolean',
            category: 'Attributes',
            type: 'boolean',
            defaultValue: 'false',
            description:
                'Hides the visual label and exposes it through the native aria-label. Use for icon-only buttons.',
        },
        loading: {
            control: 'boolean',
            category: 'Attributes',
            type: 'boolean',
            defaultValue: 'false',
            description:
                'Adds the loading indicator, binds aria-busy, and disables the native button while preserving normal content.',
        },
        disabled: {
            control: 'boolean',
            category: 'Attributes',
            type: 'boolean',
            defaultValue: 'false',
            description:
                'Controls the native disabled property. Loading also disables the button effectively.',
        },
        color: {
            control: 'text',
            category: 'Attributes',
            type: 'FktColor',
            import: "import { FktColor } from 'frakton-ng/core'",
            defaultValue: "'primary'",
            description: `Semantic color (${fktColors.join(', ')}) or any CSS color value.`,
        },
        labelColor: {
            control: 'text',
            category: 'Attributes',
            type: 'FktLabelColor',
            import: "import { FktLabelColor } from 'frakton-ng/core'",
            defaultValue: "'auto'",
            description:
                'Content color. Auto derives black or white from the selected color using relative color syntax.',
        },
        appearance: {
            control: 'select',
            category: 'Attributes',
            type: 'FktButtonAppearance',
            options: fktButtonAppearances,
            import: "import { FktButtonAppearance } from 'frakton-ng/button'",
            defaultValue: "'raised'",
            description: 'Raised, stroked, or basic visual treatment.',
        },
        shape: {
            control: 'select',
            category: 'Attributes',
            type: 'FktButtonShape',
            options: fktButtonShapes,
            import: "import { FktButtonShape } from 'frakton-ng/button'",
            defaultValue: "'rounded'",
            description: 'Rounded pill or rectangular border radius.',
        },
        size: {
            control: 'select',
            category: 'Attributes',
            type: 'FktButtonSize',
            options: fktButtonSizes,
            import: "import { FktButtonSize } from 'frakton-ng/button'",
            defaultValue: "'md'",
            description:
                'Semantic control size. Hidden-label buttons use the corresponding square dimensions.',
        },
        type: {
            control: 'select',
            category: 'Attributes',
            type: 'FktButtonType',
            options: fktButtonTypes,
            import: "import { FktButtonType } from 'frakton-ng/button'",
            defaultValue: "'button'",
            description:
                'Native button type. Defaults to button to avoid accidental form submission.',
        },
    },
};

/**
 * Native button usage. Apply `fktButton` directly to a `<button>` and provide its required label.
 * Events, focus, native attributes, directives, element references, and form behavior stay on the
 * actual interactive element.
 */
export const Usage: StoryIntroduction = {};

/**
 * The three themes use the same native markup and semantic label. `type="button"` is applied by
 * default; consumers can use native attributes such as `name`, `value`, `form`, `autofocus`, and
 * `aria-describedby` without forwarding through a wrapper component.
 */
export const Basic: Story<ButtonBasicExampleComponent> = {
    component: ButtonBasicExampleComponent,
    level: 3,
    args: {},
};

/**
 * Semantic sizes provide compact, default, and large control densities. Hidden-label buttons use
 * fixed square dimensions from the same size scale so toolbar and table actions remain aligned.
 */
export const Sizes: Story<ButtonSizesExampleComponent> = {
    component: ButtonSizesExampleComponent,
    level: 3,
    args: {},
};

/**
 * Limited composition keeps the required label under component ownership while exposing explicit
 * prefix, suffix, and loading-indicator slots. Projected content is decorative and hidden from the
 * accessibility tree.
 */
export const Composition: StoryIntroduction = {};

/**
 * Prefix and suffix content is projected with `[fktButtonPrefix]` and `[fktButtonSuffix]`.
 * Use `label + hideLabel` for icon-only actions instead of supplying a separate ARIA label.
 */
export const PrefixSuffix: Story<ButtonCompositionExampleComponent> = {
    component: ButtonCompositionExampleComponent,
    level: 3,
    args: {},
};

/**
 * Loading inserts an indicator before the prefix without replacing the normal content. It binds
 * `aria-busy="true"` and makes the effective disabled state `disabled || loading`. Project
 * `[fktButtonLoadingIndicator]` to replace the built-in spinner.
 */
export const Loading: Story<ButtonLoadingExampleComponent> = {
    component: ButtonLoadingExampleComponent,
    level: 3,
    args: {},
};

/**
 * Appearance combines visual treatment, shape, color, and size without changing button semantics. Semantic
 * colors follow the design system, while custom CSS colors compute a contrasting content color.
 */
export const Appearance: StoryIntroduction = {};

/**
 * Themes and semantic colors across rounded and rectangular shapes.
 */
export const TextVariants: Story<TextVariantsExampleComponent> = {
    component: TextVariantsExampleComponent,
    level: 3,
    args: {},
};

/**
 * Hidden-label icon buttons use the same appearance, shape, and color contracts as labeled buttons.
 * Their required label is exposed through `aria-label`.
 */
export const IconVariants: Story<IconVariantsExampleComponent> = {
    component: IconVariantsExampleComponent,
    level: 3,
    args: {},
};

/**
 * Any CSS color value is supported for application-specific actions. With
 * `labelColor="auto"`, the component derives black or white from the resolved color; pass
 * `labelColor` when the application needs an explicit override.
 */
export const CustomColors: Story<ButtonCustomColorsExampleComponent> = {
    component: ButtonCustomColorsExampleComponent,
    level: 3,
    args: {},
};

export default meta;
