import type { FktPopoverOverflowStrategy } from 'frakton-ng/popover';
import { FktPopoverComponent, } from 'frakton-ng/popover';
import { Meta } from '@/models/meta';
import { Story, StoryIntroduction } from '@/models/story';
import { DesignToken } from '@/models/design-token';
import designTokens from './fkt-popover-design-tokens.json';
import documentation from './fkt-popover.docs.md' with { loader: 'text' };
import {
	PopoverAnimationsExampleComponent,
	PopoverBasicExampleComponent,
	PopoverControlledExampleComponent,
	PopoverDismissExampleComponent,
	PopoverFormExampleComponent,
	PopoverHoverExampleComponent,
	PopoverPositionsExampleComponent,
	PopoverRepositionExampleComponent,
	PopoverScrollExampleComponent,
	PopoverTokensExampleComponent,
	PopoverTriggerWidthExampleComponent,
} from './examples';

const popover = {
    type: 'component',
    label: 'Popover',
    name: 'FktPopoverComponent',
} as const;

const popoverTrigger = {
    type: 'directive',
    label: 'Popover trigger',
    name: 'FktPopoverTriggerDirective',
    selector: '[fktPopoverTrigger]',
} as const;

const meta: Meta = {
    title: 'Components/Overlays/Popover',
    description:
        'Declarative trigger-based popover for contextual UI such as previews, compact forms, and small action panels.',
    component: FktPopoverComponent,
    documentation,
    designTokens: designTokens as DesignToken[],
    argTypes: {
        open: {
            control: 'boolean',
            category: 'Attributes',
            type: 'ModelSignal<boolean>',
            owner: popover,
            defaultValue: 'false',
            description:
                'Two-way bindable open state. Use [(open)] or bind open and openChange separately.',
        },
        position: {
            control: 'text',
            owner: popover,
            category: 'Attributes',
            type: 'FktPopoverPosition',
            import: "import { FktPopoverPosition } from 'frakton-ng/popover'",
            defaultValue: "'bottom-center'",
            description: 'Preferred placement relative to the trigger.',
        },
        preferredFallbackPositions: {
            control: 'text',
            owner: popover,
            category: 'Attributes',
            type: 'FktPopoverPosition[]',
            import: "import { FktPopoverPosition } from 'frakton-ng/popover'",
            defaultValue: '[]',
            description:
                'Preferred fallback placements tried after position and before the automatic fit search.',
        },
        overflowStrategy: {
            control: 'select',
            owner: popover,
            category: 'Attributes',
            type: 'FktPopoverOverflowStrategy',
            import: "import { FktPopoverOverflowStrategy } from 'frakton-ng/popover'",
            options: ['fit', 'keep-position'] satisfies FktPopoverOverflowStrategy[],
            defaultValue: "'fit'",
            description:
                'Controls how the popover reacts when the preferred placement overflows. Fit chooses a better fitting placement; keep-position preserves the requested placement.',
        },
        offset: {
            control: 'number',
            category: 'Attributes',
            owner: popover,
            type: 'number',
            defaultValue: '8',
            description: 'Distance between the trigger and the panel, in pixels.',
        },
        animation: {
            control: 'text',
            category: 'Attributes',
            type: 'FktPopoverAnimation',
            owner: popover,
            import: "import { FktPopoverAnimation } from 'frakton-ng/popover'",
            defaultValue: "'fade-slide'",
            description:
                'Animation class list applied to the panel. Built-in values are fade-slide and none; custom values are appended as consumer classes.',
        },
        dismissOn: {
            control: 'object',
            category: 'Attributes',
            owner: popover,
            type: 'FktPopoverDismissOn',
            import: "import { FktPopoverDismissOn } from 'frakton-ng/popover'",
            defaultValue:
                "{ outsideClick: true, escape: true, scroll: false }",
            description:
                'Configures automatic dismiss triggers. Partial values are merged with the default dismiss configuration. Programmatic close is not affected.',
        },
        dismiss: {
            control: 'text',
            category: 'Events',
            owner: popover,
            type: 'OutputEmitterRef<FktPopoverDismissEvent>',
            import: "import { FktPopoverDismissEvent } from 'frakton-ng/popover'",
            description:
                'Emits when the popover closes because of an automatic dismiss trigger.',
        },
        positionChange: {
            control: 'text',
            category: 'Events',
            owner: popover,
            type: 'OutputEmitterRef<FktPopoverPosition>',
            import: "import { FktPopoverPosition } from 'frakton-ng/popover'",
            description:
                'Emits when the resolved placement changes after collision handling or programmatic repositioning.',
        },
        reposition: {
            control: 'text',
            category: 'Methods',
            owner: popover,
            type: '(target: FktPopoverRepositionTarget) => void',
            import: "import { FktPopoverRepositionTarget } from 'frakton-ng/popover'",
            description:
                "Recalculates placement. Programmatic repositioning persists the resolved placement as the active preference. Pass 'fit' to resolve through the fit search, or pass a concrete position to use that placement directly.",
        },
        restoreTriggerFocus: {
            control: 'text',
            category: 'Methods',
            owner: popover,
            type: '() => void',
            description:
                'Moves focus back to the trigger. Use it after state-driven closes when returning focus to the trigger is the desired flow.',
        },
        triggerOn: {
            control: 'select',
            owner: popoverTrigger,
            category: 'Attributes',
            type: "'click' | 'hover' | 'manual'",
            options: ['click', 'hover', 'manual'],
            defaultValue: "'click'",
            description:
                'Trigger directive input. Hover also opens on focus and closes after mouse/focus leaves the trigger and panel.',
        },
        triggerDisabled: {
            control: 'boolean',
            owner: popoverTrigger,
            category: 'Attributes',
            type: 'boolean',
            defaultValue: 'false',
            description:
                'Trigger directive input. Disables trigger-driven interaction without closing the panel or overriding the external open model.',
        },
    },
};

/**
 * Popovers render contextual content in the browser top layer without moving it to a global overlay
 * container. Tokens, inherited classes, scoped styles, and animation classes keep flowing through
 * the normal cascade.
 *
 * Use it for disclosure and placement. It does not assign menu, tooltip, dialog, or listbox
 * semantics by itself.
 */
export const Usage: StoryIntroduction = {};

/**
 * The default trigger interaction opens on click, closes on outside click or Escape, and uses
 * `bottom-center` placement. The trigger remains the real interactive element and the content
 * template becomes the native popover panel.
 */
export const Basic: Story<PopoverBasicExampleComponent> = {
    component: PopoverBasicExampleComponent,
    level: 3,
    args: {},
};

/**
 * Use `triggerOn="hover"` on the trigger for lightweight pointer and keyboard preview interactions.
 * Focus can move into the panel, and pointer movement between trigger and panel is protected by a
 * safe area. Prefer click for persistent, touch-first, or complex interactive flows.
 */
export const HoverAndFocus: Story<PopoverHoverExampleComponent> = {
    component: PopoverHoverExampleComponent,
    level: 3,
    args: {},
};

/**
 * Popover content is just Angular template content, so compact forms can live inside the panel
 * without a special API.
 */
export const Forms: Story<PopoverFormExampleComponent> = {
    component: PopoverFormExampleComponent,
    level: 3,
    args: {},
};

/**
 * Configure where the panel appears relative to the trigger and how it reacts when the requested
 * placement does not fit.
 */
export const Positioning: StoryIntroduction = {};

/**
 * Positions describe where the panel sits around the trigger. `start`, `center`, and `end` align
 * the panel along the chosen side of the trigger. Corner positions place the panel around trigger
 * corners.
 */
export const Positions: Story<PopoverPositionsExampleComponent> = {
    component: PopoverPositionsExampleComponent,
    level: 3,
    args: {},
};

/**
 * Use `overflowStrategy="keep-position"` when the preferred placement should be preserved, and call
 * `reposition('fit')` when content or layout changes after the popover is open. Programmatic
 * repositioning persists the resolved placement as the active preference.
 */
export const Reposition: Story<PopoverRepositionExampleComponent> = {
    component: PopoverRepositionExampleComponent,
    level: 3,
    args: {},
};

/**
 * Use `--fkt-popover-trigger-width` with panel sizing tokens when the panel should derive its
 * width from the trigger. This keeps sizing in CSS instead of adding one-off width inputs.
 */
export const TriggerRelativeSizing: Story<PopoverTriggerWidthExampleComponent> =
    {
        component: PopoverTriggerWidthExampleComponent,
        level: 3,
        args: {},
    };

/**
 * Automatic dismiss can be configured independently from state. `dismiss` reports the automatic
 * reason, while content actions close by updating the `open` state. Partial `dismissOn` objects
 * merge with the defaults, so omitted options keep their default behavior. Focus restoration is
 * explicit: Escape returns focus to the trigger, and content actions can call
 * `restoreTriggerFocus()` when returning keyboard users to the trigger is the desired flow.
 */
export const DismissBehavior: Story<PopoverDismissExampleComponent> = {
    component: PopoverDismissExampleComponent,
    level: 2,
    args: {},
};

/**
 * Bind `[(open)]` when a parent component should observe or change the popover state directly.
 */
export const State: StoryIntroduction = {};

/**
 * Bind `[(open)]` when the parent should observe or update the state. Use `triggerOn="manual"`
 * when the trigger should only provide the positioning reference while external controls open the panel.
 * This is not a separate controlled mode; trigger and dismiss behavior remain configured independently.
 */
export const ProgrammaticState: Story<PopoverControlledExampleComponent> = {
    component: PopoverControlledExampleComponent,
    level: 3,
    args: {},
};

/**
 * Customize the panel surface and motion with CSS tokens and native popover animation selectors.
 */
export const Customization: StoryIntroduction = {};

/**
 * The panel has a light default appearance and exposes styling hooks through CSS tokens instead of
 * TypeScript style props.
 */
export const DesignTokens: Story<PopoverTokensExampleComponent> = {
    component: PopoverTokensExampleComponent,
    level: 3,
    args: {},
};

/**
 * Motion is class-based because the panel is a native popover. Use the built-in `fade-slide`,
 * disable it with `none`, or pass custom classes and animate with browser-native tools such as
 * `:popover-open`, `@starting-style`, `allow-discrete`, and transitions for `display` or `overlay`.
 * Keep animation classes local with `fkt-popover ::ng-deep .my-animation-class`, or put shared
 * animation classes in `styles.css` when they are reused across the app.
 */
export const Animations: Story<PopoverAnimationsExampleComponent> = {
    component: PopoverAnimationsExampleComponent,
    level: 3,
    args: {},
};

export default meta;
