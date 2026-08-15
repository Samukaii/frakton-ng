import { DesignToken } from '@/models/design-token';
import { Meta } from '@/models/meta';
import { Story, StoryIntroduction } from '@/models/story';
import type { FktPopoverOverflowStrategy } from 'frakton-ng/popover';
import { FktPopoverComponent } from 'frakton-ng/popover';
import {
  PopoverAnimationsExampleComponent,
  PopoverAnchorExampleComponent,
  PopoverAnchorWidthExampleComponent,
  PopoverControlledExampleComponent,
  PopoverDisclosureExampleComponent,
  PopoverDismissExampleComponent,
  PopoverFormExampleComponent,
  PopoverHoverExampleComponent,
  PopoverPositionsExampleComponent,
  PopoverRepositionExampleComponent,
  PopoverRtlExampleComponent,
  PopoverTokensExampleComponent
} from './examples';
import designTokens from './fkt-popover-design-tokens.json';
import documentation from './fkt-popover.docs.md' with { loader: 'text' };

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
        'Low-level primitive for custom contextual surfaces that do not fit a specialized Frakton NG component.',
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
        preferredPosition: {
            control: 'text',
            owner: popover,
            category: 'Attributes',
            type: 'FktPopoverPosition',
            import: "import { FktPopoverPosition } from 'frakton-ng/popover'",
            defaultValue: "'bottom-center'",
            description: 'Preferred placement relative to the resolved anchor.',
        },
        preferredFallbackPositions: {
            control: 'text',
            owner: popover,
            category: 'Attributes',
            type: 'FktPopoverPosition[]',
            import: "import { FktPopoverPosition } from 'frakton-ng/popover'",
            defaultValue: '[]',
            description:
                'Preferred fallback placements tried after preferredPosition and before the automatic fit search.',
        },
        positionDirection: {
            control: 'select',
            owner: popover,
            category: 'Attributes',
            type: 'FktPopoverPositionDirection',
            import: "import { FktPopoverPositionDirection } from 'frakton-ng/popover'",
            options: ['auto', 'ltr', 'rtl'],
            defaultValue: "'auto'",
            description:
                'Direction used to resolve logical start/end positions. Auto reads the resolved anchor computed direction.',
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
            description: 'Distance between the resolved anchor and the panel, in pixels.',
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
        returnFocus: {
            control: 'boolean',
            category: 'Attributes',
            owner: popover,
            type: 'boolean',
            defaultValue: 'false',
            description:
                'Returns focus to the trigger when an open popover is closed through the open state. Automatic dismiss reasons keep their own focus behavior.',
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
        'dismiss.escape': {
            control: 'text',
            category: 'Events',
            owner: popover,
            type: 'OutputEmitterRef<FktPopoverDismissEvent>',
            import: "import { FktPopoverDismissEvent } from 'frakton-ng/popover'",
            description: 'Filtered dismiss output emitted only for Escape.',
        },
        'dismiss.outsideClick': {
            control: 'text',
            category: 'Events',
            owner: popover,
            type: 'OutputEmitterRef<FktPopoverDismissEvent>',
            import: "import { FktPopoverDismissEvent } from 'frakton-ng/popover'",
            description: 'Filtered dismiss output emitted only for outside clicks.',
        },
        'dismiss.scroll': {
            control: 'text',
            category: 'Events',
            owner: popover,
            type: 'OutputEmitterRef<FktPopoverDismissEvent>',
            import: "import { FktPopoverDismissEvent } from 'frakton-ng/popover'",
            description: 'Filtered dismiss output emitted only for external scroll.',
        },
        'dismiss.mouseLeave': {
            control: 'text',
            category: 'Events',
            owner: popover,
            type: 'OutputEmitterRef<FktPopoverDismissEvent>',
            import: "import { FktPopoverDismissEvent } from 'frakton-ng/popover'",
            description: 'Filtered dismiss output emitted only when hover leaves the safe area.',
        },
        'dismiss.focusOut': {
            control: 'text',
            category: 'Events',
            owner: popover,
            type: 'OutputEmitterRef<FktPopoverDismissEvent>',
            import: "import { FktPopoverDismissEvent } from 'frakton-ng/popover'",
            description: 'Filtered dismiss output emitted only when focus leaves the popover.',
        },
        popoverId: {
            control: 'text',
            category: 'Properties',
            owner: popover,
            type: 'Signal<string>',
            description:
                'Generated popover identifier. Apply it to the semantic element targeted by an explicit ARIA relationship when the chosen pattern requires one.',
        },
        resolvedPosition: {
            control: 'text',
            category: 'Events',
            owner: popover,
            type: "OutputEmitterRef<{ position: FktPopoverPosition; direction: 'ltr' | 'rtl' }>",
            import: "import { FktPopoverPosition } from 'frakton-ng/popover'",
            description:
                'Emits when the resolved placement changes after collision handling or programmatic repositioning.',
        },
        repositionTo: {
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
                'Trigger directive input. Apply it to the interactive control that owns the popover. Hover also opens on focus and closes after mouse/focus leaves the trigger and panel.',
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
        anchor: {
            control: 'text',
            owner: popoverTrigger,
            category: 'Attributes',
            type: 'HTMLElement | null',
            defaultValue: 'null',
            description:
                'Optional geometric anchor. The trigger itself is used when no anchor is provided.',
        },
    },
};

/**
 * Popover is a low-level primitive for custom contextual surfaces that do not fit a specialized
 * Frakton NG component. Prefer Tooltip, Dialog, Select, Autocomplete, and other dedicated components
 * when their interaction pattern matches the use case.
 *
 * It owns visibility, trigger interaction, automatic dismiss, and positioning. The interaction being
 * built still owns its semantics, keyboard behavior, and focus policy. The examples below show
 * complete patterns rather than a single universal Popover contract.
 */
export const Usage: StoryIntroduction = {};

/**
 * A disclosure button exposes its state through `aria-expanded` and can identify the controlled
 * content with `aria-controls`. `popoverId()` supplies stable identity without deciding which
 * element owns the relationship. Ordinary disclosure content does not require an additional role or
 * a focus trap. The default trigger interaction opens on click, closes on outside click or Escape,
 * and uses `bottom-center` placement.
 */
export const Disclosure: Story<PopoverDisclosureExampleComponent> = {
    component: PopoverDisclosureExampleComponent,
    level: 3,
    args: {},
};

/**
 * An informational preview supplements the trigger without becoming an interactive widget.
 * `triggerOn="hover"` opens from pointer hover and keyboard focus, while `aria-describedby` exposes
 * the same information as the trigger description. A safe area protects pointer movement across the
 * gap. Use Tooltip for a short conventional description; this pattern fits richer visual context
 * that remains non-interactive. Prefer click and a complete interactive pattern for persistent,
 * touch-first, or focusable content.
 */
export const InformationalPreview: Story<PopoverHoverExampleComponent> = {
    component: PopoverHoverExampleComponent,
    level: 3,
    args: {},
};

/**
 * A task-oriented form can use dialog semantics and contain sequential keyboard focus while open.
 * `fktFocusTrap` manages Tab and Shift+Tab, but does not make the background inert or declare the
 * surface modal. The example also provides a name, initial focus, clear dismissal, and focus return.
 * See the
 * [Focus Trap documentation](/docs/focus-trap/features) for its complete contract.
 */
export const DialogForm: Story<PopoverFormExampleComponent> = {
    component: PopoverFormExampleComponent,
    level: 3,
    args: {},
};

/**
 * Configure where the panel appears relative to its anchor and how it reacts when the requested
 * placement does not fit.
 */
export const Positioning: StoryIntroduction = {};

/**
 * Positions describe where the panel sits around the anchor. `top` and `bottom` are block sides;
 * `start` and `end` are inline sides. Corner positions use the `*-corner` suffix.
 */
export const Positions: Story<PopoverPositionsExampleComponent> = {
    component: PopoverPositionsExampleComponent,
    level: 3,
    args: {},
};

/**
 * Logical `start` and `end` positions follow the anchor direction by default. Use
 * `positionDirection="ltr"` or `positionDirection="rtl"` when geometry should be fixed
 * independently from the content direction.
 */
export const RtlPositioning: Story<PopoverRtlExampleComponent> = {
    component: PopoverRtlExampleComponent,
    level: 3,
    args: {},
};

/**
 * The trigger owns interaction and focus restoration. Bind its `anchor` input when positioning
 * should use a different `HTMLElement`; the anchor contributes geometry only and carries no widget
 * semantics. Without an explicit anchor, the trigger itself supplies both responsibilities.
 */
export const ExplicitAnchor: Story<PopoverAnchorExampleComponent> = {
    component: PopoverAnchorExampleComponent,
    level: 3,
    args: {},
};

/**
 * Use `--fkt-popover-anchor-width` with panel sizing tokens when the panel should derive its
 * width from the resolved anchor. Without an explicit anchor, the trigger is used automatically.
 */
export const AnchorRelativeSizing: Story<PopoverAnchorWidthExampleComponent> =
    {
        component: PopoverAnchorWidthExampleComponent,
        level: 3,
        args: {},
    };

/**
 * Use `overflowStrategy="keep-position"` when the preferred placement should be preserved, and call
 * `repositionTo('fit')` when content or layout changes after the popover is open. Programmatic
 * repositioning persists the resolved placement as the active preference.
 */
export const Reposition: Story<PopoverRepositionExampleComponent> = {
    component: PopoverRepositionExampleComponent,
    level: 3,
    args: {},
};

/**
 * Automatic dismiss can be configured independently from state. `dismiss` reports the automatic
 * reason, while `dismiss.escape`, `dismiss.outsideClick`, and the other filtered outputs remove the
 * need for reason guards. Partial `dismissOn` objects merge with the defaults. Escape returns focus
 * only when the focused element would be hidden with the panel. Enable `returnFocus` when
 * state-driven closes should return focus, or call `restoreTriggerFocus()` for a single flow.
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
 * Bind `[(open)]` when the parent should observe or update the state. Use `triggerOn="manual"` when
 * the trigger's own handler or parent state should control activation. The directive still belongs on
 * the real interactive control and remains the default positioning anchor. This is not a separate
 * controlled mode; trigger and dismiss behavior remain configured independently. ARIA state remains
 * the responsibility of the semantic widget being built.
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
