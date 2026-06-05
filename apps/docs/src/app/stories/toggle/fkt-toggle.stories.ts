import { Meta } from '@/models/meta';
import { FktToggleComponent } from 'frakton-ng/toggle';
import documentation from './fkt-toggle.docs.md' with { loader: 'text' };
import { Story } from '@/models/story';
import { DesignToken } from '@/models/design-token';
import designTokens from './fkt-toggle-design-tokens.json';
import { ToggleReactiveFormsComponent } from '@/stories/toggle/examples/reactive-forms/toggle-reactive-forms.component';
import { ToggleSignalFormsComponent } from '@/stories/toggle/examples/signal-forms/toggle-signal-forms.component';
import { ToggleInputDrivenComponent } from '@/stories/toggle/examples/input-driven/toggle-input-driven.component';

const meta: Meta<FktToggleComponent> = {
    title: "Components/Form/Toggle",
    description: "A binary switch control that toggles between on and off states, with full keyboard support and form integration.",
    designTokens: designTokens as DesignToken[],
    component: FktToggleComponent,
    argTypes: {
        label: {
            control: 'text',
            type: 'string',
            required: true,
            description: "Visible label text and accessible name for the control. Always provided — use `hideLabel` to hide it visually while keeping it available to screen readers.",
            category: "Attributes"
        },
        hideLabel: {
            control: 'boolean',
            type: 'boolean',
            defaultValue: 'false',
            description: "Hides the visible label while preserving the accessible name via `aria-label`. Useful for inline or icon-adjacent layouts.",
            category: "Attributes"
        },
        value: {
            control: 'boolean',
            type: 'boolean',
            defaultValue: 'false',
            description: "Current on/off state of the toggle. Bind with `[(value)]` for two-way signal-driven control.",
            category: "Attributes"
        },
        touched: {
            control: 'boolean',
            type: 'boolean',
            defaultValue: 'false',
            description: "Signals whether the user has interacted with the control. Used in input-driven mode to gate error visibility.",
            category: "Attributes"
        },
        disabled: {
            control: 'boolean',
            type: 'boolean',
            defaultValue: 'false',
            description: "Prevents interaction and removes the control from the tab order. Communicated to assistive technologies via `aria-disabled`.",
            category: "Attributes"
        },
        invalid: {
            control: 'boolean',
            type: 'boolean',
            defaultValue: 'false',
            description: "Marks the control as invalid when used without a reactive or signal form. Has no visual effect on the toggle itself — use alongside `fkt-field-error` for the error message.",
            category: "Attributes"
        },
        errors: {
            control: 'array',
            type: 'readonly WithOptionalField<ValidationError>[]',
            import: "import { ValidationError, WithOptionalField } from '@angular/forms/signals'",
            description: "Validation errors from a reactive or signal form. The first error's `message` is forwarded to `aria-errormessage` for screen readers. Rendering the message visually is the consumer's responsibility via `fkt-field-error`.",
            category: "Attributes"
        },
    },
    documentation
}

export const BasicUsage: Story<FktToggleComponent> = {
    description: "Default toggle in off state with a visible label.",
    args: {
        label: "Receive notifications",
        value: false,
    }
}

export const States: Story<FktToggleComponent> = {
    description: "All visual states: off, on, disabled off, and disabled on.",
    args: {
        label: "Receive notifications",
    },
    variants: {
        orientation: 'vertical',
        items: [
            {
                title: "Off",
                args: { value: false }
            },
            {
                title: "On",
                args: { value: true }
            },
            {
                title: "Disabled off",
                args: { value: false, disabled: true }
            },
            {
                title: "Disabled on",
                args: { value: true, disabled: true }
            },
        ]
    }
}

export const HiddenLabel: Story<FktToggleComponent> = {
    description: "Toggle with the label hidden visually but still accessible to screen readers via `aria-label`.",
    args: {
        label: "Receive notifications",
        hideLabel: true as unknown as undefined,
        value: false,
    }
}

export const ReactiveForms: Story<ToggleReactiveFormsComponent> = {
    component: ToggleReactiveFormsComponent,
    description: "Integration with Angular Reactive Forms via `formControl`. Uses `Validators.requiredTrue` to enforce that the toggle must be enabled, with error display and disable toggling.",
    args: {}
}

export const SignalForms: Story<ToggleSignalFormsComponent> = {
    component: ToggleSignalFormsComponent,
    description: "Integration with the signal-based `@angular/forms/signals` API via the `[field]` binding. Shows required validation and signal-driven disabled state.",
    args: {}
}

export const InputDriven: Story<ToggleInputDrivenComponent> = {
    component: ToggleInputDrivenComponent,
    description: "Manual signal-driven binding using `[(value)]` and `[(touched)]` two-way models without a form abstraction. Validation is handled directly in the template.",
    args: {}
}

export default meta;
