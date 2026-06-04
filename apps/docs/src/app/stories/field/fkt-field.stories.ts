import { FktFieldComponent } from 'frakton-ng/field';
import { Meta } from '@/models/meta';
import { Story, StoryIntroduction } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-field.docs.md' with { loader: 'text' };
import designTokens from './fkt-field-design-tokens.json';
import { DesignToken } from '@/models/design-token';
import {
    FieldBasicInputExampleComponent,
    FieldHiddenLabelExampleComponent,
    FieldPrefixSuffixExampleComponent,
    FieldReactiveFormsExampleComponent,
    FieldTextareaExampleComponent,
    FieldValidationExampleComponent,
} from './examples';

const meta: Meta = {
	title: "Components/Form/Field",
	component: FktFieldComponent,
    designTokens: designTokens as DesignToken[],
    description: `Composable form field container for native controls. The field owns the visual shell
label, floating outline, prefix/suffix slots, required marker, disabled state, and projected errors
while the actual value stays on a native input or textarea through the fktInput directive.`,
	documentation,
    panelStyle: {
        outerWidth: '100%',
        fillContainer: true
    },
	argTypes: {
        label: {
            control: 'text',
            category: 'Attributes',
            type: 'string',
            required: true,
            description: 'Accessible field label. Required even when `hideLabel` is enabled so the control keeps a stable accessible name.'
        },
        hideLabel: {
            control: 'boolean',
            category: 'Attributes',
            type: 'boolean',
            defaultValue: 'false',
            description: 'Visually hides the floating label while keeping the label available for accessibility. Useful for search fields and compact filter inputs.'
        },
        requiredMarker: {
            control: 'boolean',
            category: 'Attributes',
            type: 'boolean',
            defaultValue: 'false',
            description: 'Shows a required marker next to the label. This is visual only; validation still belongs to the native control or form model.'
        },
	}
}

/**
 * Field composition patterns: a `fkt-field` wraps a native control marked with `fktInput`.
 * Prefixes, suffixes, hidden labels, and textareas are projected into the same field shell instead
 * of requiring a separate shorthand input component.
 */
export const Composition: StoryIntroduction = {};

/**
 * Basic native input. The field renders the label and outline while `input[fktInput]` remains the
 * real form control, so native attributes and browser behavior stay available to the consumer.
 */
export const BasicInput: Story<FieldBasicInputExampleComponent> = {
    component: FieldBasicInputExampleComponent,
    level: 3,
	args: {}
};

/**
 * Prefix and suffix slots are projected with `[fktFieldPrefix]` and `[fktFieldSuffix]`.
 * The field owns spacing around the slots, while the projected content can be any component or
 * directive such as icons, buttons, or tooltips.
 */
export const PrefixSuffix: Story<FieldPrefixSuffixExampleComponent> = {
    component: FieldPrefixSuffixExampleComponent,
    level: 3,
	args: {}
};

/**
 * Hidden labels keep compact controls visually clean without dropping the accessible label.
 * Use this for search boxes, table filters, command inputs, and other cases where the placeholder
 * is visible but the control still needs a stable semantic name.
 */
export const HiddenLabel: Story<FieldHiddenLabelExampleComponent> = {
    component: FieldHiddenLabelExampleComponent,
    level: 3,
	args: {}
};

/**
 * Textareas use the same `fktInput` directive and field shell as regular inputs.
 * The textarea remains native, so resizing, rows, maxlength, and external directives can be applied
 * directly by the consumer.
 */
export const Textarea: Story<FieldTextareaExampleComponent> = {
    component: FieldTextareaExampleComponent,
    level: 3,
	args: {}
};

/**
 * Form integration examples. The field reads state from the projected `FktFieldControl`; the consumer
 * keeps validation rules and error messages in the form model instead of passing a separate invalid
 * input into the field.
 */
export const Forms: StoryIntroduction = {};

/**
 * Signal Forms integration with Angular's `[field]` directive. The field reacts to value, touched,
 * invalid, and disabled state exposed by the projected `input[fktInput]`, and the error component is
 * projected with `fktError` so it appears only when the control is invalid and touched.
 */
export const SignalForms: Story<FieldValidationExampleComponent> = {
    component: FieldValidationExampleComponent,
    level: 3,
	args: {}
};

/**
 * Reactive Forms integration through `formControlName`. Programmatic updates, reset, disabled state,
 * and validation changes are read from the Angular control adapter instead of relying only on DOM
 * attributes.
 */
export const ReactiveForms: Story<FieldReactiveFormsExampleComponent> = {
    component: FieldReactiveFormsExampleComponent,
    level: 3,
	args: {}
};

export default meta;
