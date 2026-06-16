import { FktInputTextDirective } from 'frakton-ng/input-text';
import { Meta } from '@/models/meta';
import { Story, StoryIntroduction } from '@/models/story';
import documentation from './fkt-input.docs.md';
import {
    InputBasicExampleComponent,
    InputCharacterCountExampleComponent,
    InputNativeAttributesExampleComponent,
    InputReactiveFormsExampleComponent,
    InputSignalFormsExampleComponent,
} from './examples';

const meta: Meta = {
    title: 'Components/Form/Input',
    component: FktInputTextDirective,
    description: `Native input directive for Frakton fields. Use input[fktInputText] inside
fkt-field when the user needs a single-line text control that keeps native attributes, forms,
i18n, masks, and third-party directives on the actual input element.`,
    documentation,
    panelStyle: {
        outerWidth: '100%',
        fillContainer: true,
    },
    argTypes: {},
};

/**
 * Input text composition patterns. The input directive owns the native single-line control state,
 * while `fkt-field` owns label, outline, hint, error, density, prefix/suffix, and supporting text.
 */
export const Composition: StoryIntroduction = {};

/**
 * Basic usage with `input[fktInputText]` projected into `fkt-field`. Use this for normal text entry
 * where the consumer still needs direct access to native input attributes and directives.
 */
export const Basic: Story<InputBasicExampleComponent> = {
    component: InputBasicExampleComponent,
    level: 3,
    args: {},
};

/**
 * Native attributes stay on the real input element. Use `type`, `autocomplete`, `inputmode`,
 * `spellcheck`, `readonly`, `disabled`, masking directives, and browser-specific attributes
 * directly on `input[fktInputText]`.
 */
export const NativeAttributes: Story<InputNativeAttributesExampleComponent> = {
    component: InputNativeAttributesExampleComponent,
    level: 3,
    args: {},
};

/**
 * Character count is provided by `fktCharacterCount`. The directive reads the max length from the
 * normalized field state, so Signal Forms, Reactive Forms, and native maxlength can share the same
 * field supporting UI.
 */
export const CharacterCount: Story<InputCharacterCountExampleComponent> = {
    component: InputCharacterCountExampleComponent,
    level: 3,
    args: {},
};

/**
 * Form integration examples. The input directive participates in the same `FktFieldControl`
 * contract as textarea, so the field can react to value, focused, disabled, touched, invalid,
 * required, errors, and max length without manual state forwarding.
 */
export const Forms: StoryIntroduction = {};

/**
 * Signal Forms integration through Angular's `[field]` directive. Validation state, disabled state,
 * required marker, and max length are read from the projected control.
 */
export const SignalForms: Story<InputSignalFormsExampleComponent> = {
    component: InputSignalFormsExampleComponent,
    level: 3,
    args: {},
};

/**
 * Reactive Forms integration through `formControlName`. The field reacts to programmatic updates,
 * reset, disabled state, and validation changes from the Angular control.
 */
export const ReactiveForms: Story<InputReactiveFormsExampleComponent> = {
    component: InputReactiveFormsExampleComponent,
    level: 3,
    args: {},
};

export default meta;
