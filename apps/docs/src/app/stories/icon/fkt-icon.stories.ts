import {
	FktIconComponent,
	fktIconNames,
	fktIconSizes,
} from 'frakton-ng/icon';
import { IconsGalleyComponent } from './gallery/icons-galley.component';
import { Meta } from '@/models/meta';
import { Story, StoryIntroduction } from '@/models/story';
import documentation from './fkt-icon.docs.md' with { loader: 'text' };
import designTokens from './fkt-icon-design-tokens.json';
import { DesignToken } from '@/models/design-token';
import {
	IconBasicExampleComponent,
	IconCustomExampleComponent,
	IconCustomizationExampleComponent,
	IconSizesExampleComponent,
	IconVariantsExampleComponent,
} from './examples';

const meta: Meta = {
	title: 'Components/Data Display/Icon',
	description: `SVG icon component with typed built-in and application-defined names. Outline icons are
available synchronously, while Solid, Mini, and Micro catalogs are loaded on demand. Size, color,
and stroke width integrate with the design token system and remain customizable through CSS.`,
	component: FktIconComponent,
	documentation,
	designTokens: designTokens as DesignToken[],
	argTypes: {
		name: {
			control: 'select',
			category: 'Attributes',
			type: 'FktIconName',
			options: fktIconNames,
			import: "import { FktIconName } from 'frakton-ng/icon'",
			required: true,
			description: 'Typed name of a built-in icon or an application icon declared through module augmentation.',
		},
		variant: {
			control: 'select',
			category: 'Attributes',
			type: 'FktIconVariant',
			options: ['outline', 'solid', 'mini', 'micro'],
			import: "import { FktIconVariant } from 'frakton-ng/icon'",
			defaultValue: "'outline'",
			description: 'Selects the Heroicons artwork catalog. This is independent from the rendered icon size.',
		},
		size: {
			control: 'select',
			category: 'Attributes',
			type: 'FktIconSize',
			options: fktIconSizes,
			import: "import { FktIconSize } from 'frakton-ng/icon'",
			defaultValue: "'md'",
			description: 'Semantic rendered size: small, medium, or large.',
		},
	},
};

/**
 * Core icon usage. Icons are decorative by default and inherit the surrounding text color, so the
 * accessible name must belong to the button, link, field, or other interface element that contains
 * them.
 */
export const Usage: StoryIntroduction = {};

/**
 * A horizontal sample from the default Outline catalog. Icons inherit `currentColor` and use the
 * medium semantic size when no `variant` or `size` is provided.
 */
export const Basic: Story<IconBasicExampleComponent> = {
	component: IconBasicExampleComponent,
	level: 3,
	args: {},
};

/**
 * Search the built-in catalog by icon name. Select an item to copy its typed name for use with the
 * `name` input.
 */
export const Gallery: Story<IconsGalleyComponent> = {
    component: IconsGalleyComponent,
    onlyPreview: true,
    level: 3,
    args: {},
};

/**
 * Semantic sizes keep icons aligned with the density of the surrounding component. Medium is the
 * default; use small for compact controls and large when the interface needs stronger emphasis.
 */
export const Sizes: Story<IconSizesExampleComponent> = {
	component: IconSizesExampleComponent,
	level: 3,
	args: {},
};

/**
 * Artwork variants. Outline is the default 24-unit stroked catalog. Solid, Mini, and Micro are
 * filled catalogs designed by Heroicons for different visual densities. They do not set the
 * rendered component size; combine `variant` and `size` according to the surrounding interface.
 */
export const Variants: StoryIntroduction = {};

/**
 * The same icon across all four artwork catalogs. Filled variants are lazy-loaded the first time
 * they are requested and then cached by the icon registry.
 */
export const VariantComparison: Story<IconVariantsExampleComponent> = {
	component: IconVariantsExampleComponent,
	level: 3,
	args: {},
};

/**
 * Styling and theming. Design tokens establish application or component defaults, while regular
 * `color` and `font-size` declarations are useful for one-off adjustments. Stroke width affects
 * stroked artwork such as the Outline catalog.
 */
export const Customization: StoryIntroduction = {};

/**
 * Token-based and direct CSS customization. The SVG uses `currentColor` and `1em`, preserving the
 * normal CSS inheritance model instead of introducing separate color and pixel-size inputs.
 */
export const Styling: Story<IconCustomizationExampleComponent> = {
	component: IconCustomizationExampleComponent,
	level: 3,
	args: {},
};

/**
 * An application-provided icon rendered through its variantless fallback. The catalog used by this
 * documentation is registered in the application configuration, not by the example component.
 *
 * Define the SVG content in an application-owned catalog and use module augmentation to add its
 * keys to `FktIconName`:
 *
 * ```ts title="app/custom-icons.ts"
 * import { FktCustomIconCatalog } from 'frakton-ng/icon';
 *
 * export const customIcons = {
 *     'github': {
 *         viewBox: '0 0 32 32',
 *         content: '<path fill="currentColor" d="..." />',
 *     },
 *     'discord': {
 *         viewBox: '0 0 32 32',
 *         content: '<path fill="currentColor" d="..." />',
 *     },
 * } as const satisfies FktCustomIconCatalog;
 *
 * type CustomIcons = typeof customIcons;
 *
 * declare module 'frakton-ng/icon' {
 *     interface FktCustomIcons extends CustomIcons {}
 * }
 * ```
 *
 * Register the catalog once in the application providers:
 *
 * ```ts title="app/app.config.ts"
 * import { provideFktIcons } from 'frakton-ng/icon';
 * import { customIcons } from './custom-icons';
 *
 * export const appConfig = {
 *     providers: [provideFktIcons(customIcons)],
 * };
 * ```
 *
 * A plain definition is used for every requested variant. When artwork differs by variant, provide
 * a `variants` map and an optional `fallback`. SVG content is trusted and rendered without
 * sanitization, so catalogs must contain only static, application-owned markup.
 */
export const CustomIcon: Story<IconCustomExampleComponent> = {
	component: IconCustomExampleComponent,
	level: 3,
	args: {},
};

export default meta;
