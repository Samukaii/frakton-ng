import { FktFieldComponent } from 'frakton-ng/field';
import { Meta } from '@/models/meta';
import { Story, StoryIntroduction } from '@/models/story';
import documentation from './fkt-field.docs.md' with { loader: 'text' };
import designTokens from './fkt-field-design-tokens.json';
import { DesignToken } from '@/models/design-token';
import {
    FieldAutomaticErrorsExampleComponent,
    FieldBasicInputExampleComponent,
    FieldCharacterCountExampleComponent,
    FieldCustomErrorExampleComponent,
    FieldHiddenLabelExampleComponent,
    FieldHintExampleComponent,
    FieldManualErrorExampleComponent,
    FieldPrefixSuffixExampleComponent,
    FieldReactiveFormsExampleComponent,
    FieldRequiredMarkerExampleComponent,
    FieldSizesExampleComponent,
    FieldTranslatedErrorsExampleComponent,
    FieldValidationExampleComponent
} from './examples';

const meta: Meta = {
	title: "Components/Form/Field",
	component: FktFieldComponent,
    designTokens: designTokens as DesignToken[],
    description: `Composable form field container for native controls. The field owns the visual shell,
label, floating outline, prefix/suffix slots, hint, required marker, disabled state, and error slot
while the actual value stays on a native control directive such as input[fktInputText].`,
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
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            category: 'Attributes',
            type: `'sm' | 'md' | 'lg'`,
            defaultValue: 'md',
            description: 'Controls the field density. The size affects the shell spacing and text rhythm used by the projected control.'
        },
        hint: {
            control: 'text',
            category: 'Attributes',
            type: 'string',
            description: 'Helper text rendered below the field while no error is visible. Use `[fktHintStart]` for custom start content and `[fktHintEnd]` for custom end metadata.'
        },
        showError: {
            control: 'boolean',
            category: 'Attributes',
            type: 'boolean',
            description: 'Overrides the default error visibility rule. When omitted, errors are shown when the projected control is invalid and touched.'
        },
        requiredMarker: {
            control: 'boolean',
            category: 'Attributes',
            type: 'boolean',
            description: 'Overrides required marker visibility. When omitted, the field infers the marker from the projected control validation state when possible.'
        },
	}
}

/**
 * Field composition patterns. A `fkt-field` wraps a native control directive such as
 * `input[fktInputText]`. The field owns the visual shell while the projected control owns value,
 * native attributes, and form integration.
 */
export const Composition: StoryIntroduction = {};

/**
 * Basic text input. The field renders the label and outline while `input[fktInputText]` remains the
 * real form control, so native attributes and browser behavior stay available to the consumer.
 */
export const BasicInput: Story<FieldBasicInputExampleComponent> = {
    component: FieldBasicInputExampleComponent,
    level: 3,
	args: {}
};

/**
 * Field sizes provide predefined densities for compact filters, default forms, and larger touch
 * targets. The size belongs to the field shell so future controls keep the same visual rhythm.
 */
export const Sizes: Story<FieldSizesExampleComponent> = {
    component: FieldSizesExampleComponent,
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
 * Hints provide secondary guidance below the field. Use the `hint` input for plain text, project
 * `[fktHintStart]` when the message needs custom template content, or `[fktHintEnd]` for
 * right-aligned supporting metadata. Visible errors replace the start hint.
 */
export const Hint: Story<FieldHintExampleComponent> = {
    component: FieldHintExampleComponent,
    level: 3,
    args: {}
};

/**
 * Character count is opt-in through `fktCharacterCount` on a textual control.
 * The field renders the computed count in the hint end slot by default. Project
 * `[fktHintEnd]` to replace that default with custom supporting metadata.
 */
export const CharacterCount: Story<FieldCharacterCountExampleComponent> = {
    component: FieldCharacterCountExampleComponent,
    level: 3,
    args: {}
};

/**
 * Required marker behavior. When `requiredMarker` is omitted, the field tries to infer the marker
 * from the projected control validation state. Pass `[requiredMarker]="true"` to force it on, or
 * `[requiredMarker]="false"` to hide it while keeping the validation rule active.
 */
export const RequiredMarker: Story<FieldRequiredMarkerExampleComponent> = {
    component: FieldRequiredMarkerExampleComponent,
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
 * Form integration examples. The field reads state from the projected `FktFieldControl`; the consumer
 * keeps validation rules in the form model instead of passing disabled, touched, invalid, or required
 * flags into the field manually.
 */
export const Forms: StoryIntroduction = {};

/**
 * Signal Forms integration with Angular's `[field]` directive. The field reacts to value, touched,
 * invalid, disabled, required, and error state exposed by the projected control.
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

/**
 * Error handling examples. By default, the field shows its error state when the projected control is
 * invalid and touched. That default can be overridden for submit attempts, server-side validation,
 * or custom form flows.
 */
export const ErrorHandling: StoryIntroduction = {};

/**
 * Manual error visibility through `showError`. When the input is defined, it replaces the default
 * `invalid && touched` rule for both the red border and the message area.
 */
export const ManualErrorControl: Story<FieldManualErrorExampleComponent> = {
    component: FieldManualErrorExampleComponent,
    level: 3,
    args: {}
};

/**
 * Custom projected error content. When `[fktError]` content is provided, it replaces the automatic
 * error message while still using the field's visibility and spacing behavior.
 */
export const CustomError: Story<FieldCustomErrorExampleComponent> = {
    component: FieldCustomErrorExampleComponent,
    level: 3,
    args: {}
};


/**
 * Automatic error messages with `provideFktConfig(withFieldErrorMessages(...))`. The resolver turns
 * normalized Signal Forms or Reactive Forms errors into the text rendered by each field.
 *
 * ```ts
 * export const appConfig: ApplicationConfig = {
 *     providers: [
 *         provideFktConfig(
 *             withFieldErrorMessages(({errors}) => {
 *                 if (!errors) return null;
 *                 const first = errors.errors[0];
 *
 *                 if (first.message) return first.message; // If field already has a message defined, returns it
 *
 *                 if (first.kind === 'required') return 'Field is required';
 *                 if (first.kind === 'email') return 'Enter a valid email address';
 *
 *                 if (first.kind === 'minLength') {
 *                     return `Use at least ${first.params['minLength']} characters`;
 *                 }
 *
 *                 if (first.kind === 'maxLength') {
 *                     return `Use at most ${first.params['maxLength']} characters`;
 *                 }
 *
 *                 return null;
 *             })
 *         )
 *     ]
 * }
 * ```
 */
export const AutomaticErrorMessages: Story<FieldAutomaticErrorsExampleComponent> = {
    component: FieldAutomaticErrorsExampleComponent,
    level: 3,
    args: {}
};

/**
 * Translated error messages combine `withI18nIntegration(...)` and `withFieldErrorMessages(...)`.
 * The field recomputes visible errors when the configured language source changes. `recomputeOn`
 * accepts a Signal, an Observable, or an array mixing Signals and Observables.
 *
 * ```ts
 * export const appConfig: ApplicationConfig = {
 *     providers: [
 *         provideFktConfig(
 *             withI18nIntegration(() => {
 *                 const translateService = inject(TranslateService);
 *
 *                 return {
 *                     recomputeOn: translateService.currentLanguage$,
 *                     translateFn: translateService.instant.bind(translateService),
 *                 };
 *             }),
 *             withFieldErrorMessages(({errors, t}) => {
 *                 if (!errors) return null;
 *
 *                 const first = errors.errors[0];
 *                 if (first.message) return first.message;
 *
 *                 if (first.kind === 'required') return t('errors.required');
 *                 if (first.kind === 'email') return t('errors.email');
 *
 *                 if (first.kind === 'minLength') {
 *                     return t('errors.minLength', first.params);
 *                 }
 *
 *                 if (first.kind === 'maxLength') {
 *                     return t('errors.maxLength', first.params);
 *                 }
 *
 *                 return null;
 *             })
 *         )
 *     ]
 * }
 * ```
 *
 * ```ts
 * withI18nIntegration(() => ({
 *   recomputeOn: currentLanguage, // Signal
 *   translateFn: translate,
 * }))
 *
 * withI18nIntegration(() => ({
 *   recomputeOn: translateService.onLangChange, // Observable
 *   translateFn: translateService.instant.bind(translateService),
 * }))
 *
 * withI18nIntegration(() => ({
 *   recomputeOn: [currentLanguage, translateService.onLangChange], // Signal + Observable
 *   translateFn: translateService.instant.bind(translateService),
 * }))
 * ```
 */
export const TranslatedErrorMessages: Story<FieldTranslatedErrorsExampleComponent> = {
    component: FieldTranslatedErrorsExampleComponent,
    level: 3,
    args: {}
};

export default meta;
