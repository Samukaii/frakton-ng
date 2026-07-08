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
the accessible name, while optional built-in icons, custom content, and loading indicator slots
support limited composition without replacing the button's primary semantics.`,
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
        icon: {
            control: 'text',
            category: 'Attributes',
            type: 'FktIconName',
            import: "import { FktIconName } from 'frakton-ng/icon'",
            description:
                'Built-in icon rendered before the label. In icon-only mode this becomes the visible button content.',
        },
        suffixIcon: {
            control: 'text',
            category: 'Attributes',
            type: 'FktIconName',
            import: "import { FktIconName } from 'frakton-ng/icon'",
            description:
                'Built-in icon rendered after the label.',
        },
        iconOnly: {
            control: 'boolean',
            category: 'Attributes',
            type: 'boolean',
            defaultValue: 'false',
            description:
                'Renders only the built-in icon and exposes the required label through the native aria-label.',
        },
        loading: {
            control: 'boolean',
            category: 'Attributes',
            type: 'boolean',
            defaultValue: 'false',
            description:
                'Adds the loading indicator, binds aria-busy, and disables the native button.',
        },
        loadingPosition: {
            control: 'select',
            category: 'Attributes',
            type: "'start' | 'end'",
            options: ['start', 'end'],
            defaultValue: "'start'",
            description:
                'Controls which side shows the loading indicator. The indicator replaces icon at start or suffixIcon at end when present.',
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
            type: 'FktButtonColor',
            import: "import { FktButtonColor } from 'frakton-ng/button'",
            defaultValue: "'default'",
            description: `Default, semantic color (${fktColors.join(', ')}), or any CSS color value.`,
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
            defaultValue: "'default'",
            description:
                'Default, raised, stroked, or basic visual treatment. Default is resolved by the styling layer.',
        },
        shape: {
            control: 'select',
            category: 'Attributes',
            type: 'FktButtonShape',
            options: fktButtonShapes,
            import: "import { FktButtonShape } from 'frakton-ng/button'",
            defaultValue: "'default'",
            description:
                'Default, pill, squircle, rounded, or sharp border radius. Default is resolved by the styling layer.',
        },
        size: {
            control: 'select',
            category: 'Attributes',
            type: 'FktButtonSize',
            options: fktButtonSizes,
            import: "import { FktButtonSize } from 'frakton-ng/button'",
            defaultValue: "'default'",
            description:
                'Default, small, medium, or large control size. Icon-only buttons use the corresponding square dimensions.',
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
 * The appearances use the same native markup and semantic label. `type="button"` is applied by
 * default; consumers can use native attributes such as `name`, `value`, `form`, `autofocus`, and
 * `aria-describedby` without forwarding through a wrapper component.
 */
export const Basic: Story<ButtonBasicExampleComponent> = {
    component: ButtonBasicExampleComponent,
    level: 3,
    args: {},
};

/**
 * Semantic sizes provide compact, default, and large control densities. Icon-only buttons use
 * fixed square dimensions from the same size scale so toolbar and table actions remain aligned.
 */
export const Sizes: Story<ButtonSizesExampleComponent> = {
    component: ButtonSizesExampleComponent,
    level: 3,
    args: {},
};

/**
 * Limited composition keeps the required label under component ownership while exposing built-in
 * icon inputs, custom visual content, and a loading-indicator slot. Visual content is decorative;
 * the required label remains the accessible name.
 */
export const Composition: StoryIntroduction = {};

/**
 * Use `icon`, `suffixIcon`, and `iconOnly` for common icon buttons. Use `[fktButtonContent]` when
 * the visual content is application-specific and should replace the visible label. Add `fill`
 * to let the projected content own the full button surface.
 */
export const IconsAndContent: Story<ButtonCompositionExampleComponent> = {
    component: ButtonCompositionExampleComponent,
    level: 3,
    args: {},
};

/**
 * Loading inserts an indicator at the configured side. At `loadingPosition="start"` it replaces
 * `icon` when present; at `loadingPosition="end"` it replaces `suffixIcon` when present. It binds
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
 * Appearances and semantic colors across the supported shapes.
 */
export const TextVariants: Story<TextVariantsExampleComponent> = {
    component: TextVariantsExampleComponent,
    level: 3,
    args: {},
};

/**
 * Icon-only buttons use the same appearance, shape, and color contracts as labeled buttons. Their
 * required label is exposed through `aria-label`.
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
