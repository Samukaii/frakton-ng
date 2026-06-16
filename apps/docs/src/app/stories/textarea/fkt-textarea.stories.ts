import { FktTextareaDirective } from 'frakton-ng/textarea';
import { Meta } from '@/models/meta';
import { Story, StoryIntroduction } from '@/models/story';
import documentation from './fkt-textarea.docs.md';
import {
    TextareaAutoExpandExampleComponent,
    TextareaBasicExampleComponent,
    TextareaCharacterCountExampleComponent,
    TextareaReactiveFormsExampleComponent,
    TextareaSignalFormsExampleComponent,
} from './examples';
import designTokens from '../field/fkt-field-design-tokens.json';
import { DesignToken } from '@/models/design-token';

const meta: Meta = {
    title: 'Components/Form/Textarea',
    component: FktTextareaDirective,
    designTokens: designTokens as DesignToken[],
    description: `Native textarea directive for Frakton fields. Use textarea[fktTextarea] inside
fkt-field when the user needs a multi-line text control with field state integration, auto-expand,
and optional character count support.`,
    documentation,
    panelStyle: {
        outerWidth: '100%',
        fillContainer: true,
    },
    argTypes: {
        autoExpand: {
            control: 'boolean',
            category: 'Attributes',
            type: 'boolean',
            defaultValue: 'false',
            description:
                'Automatically adjusts the textarea height to fit its content while the value changes.',
        },
    },
};

/**
 * Textarea composition patterns. The textarea directive owns the native multiline control state,
 * while `fkt-field` owns label, outline, hint, error, density, prefix/suffix, and supporting text.
 */
export const Composition: StoryIntroduction = {};

/**
 * Basic usage with `textarea[fktTextarea]` projected into `fkt-field`. Native textarea attributes
 * such as `rows`, `placeholder`, `spellcheck`, `readonly`, and `disabled` stay on the native element.
 */
export const Basic: Story<TextareaBasicExampleComponent> = {
    component: TextareaBasicExampleComponent,
    level: 3,
    args: {},
};

/**
 * Auto-expand keeps the field compact initially and grows the textarea vertically as content wraps
 * or new lines are added. Use this for comments, notes, descriptions, and support messages.
 */
export const AutoExpand: Story<TextareaAutoExpandExampleComponent> = {
    component: TextareaAutoExpandExampleComponent,
    level: 3,
    args: {},
};

/**
 * Character count is provided by `fktCharacterCount`. The directive reads the max length from the
 * same normalized field state used by input text, so Signal Forms, Reactive Forms, and native
 * maxlength can share the same field supporting UI.
 */
export const CharacterCount: Story<TextareaCharacterCountExampleComponent> = {
    component: TextareaCharacterCountExampleComponent,
    level: 3,
    args: {},
};

/**
 * Form integration examples. The textarea directive participates in the same `FktFieldControl`
 * contract as input text, so the field can react to value, focused, disabled, touched, invalid,
 * required, errors, and max length without manual state forwarding.
 */
export const Forms: StoryIntroduction = {};

/**
 * Signal Forms integration through Angular's `[field]` directive. Validation state, disabled state,
 * required marker, and max length are read from the projected control.
 */
export const SignalForms: Story<TextareaSignalFormsExampleComponent> = {
    component: TextareaSignalFormsExampleComponent,
    level: 3,
    args: {},
};

/**
 * Reactive Forms integration through `formControlName`. The field reacts to programmatic updates,
 * reset, disabled state, and validation changes from the Angular control.
 */
export const ReactiveForms: Story<TextareaReactiveFormsExampleComponent> = {
    component: TextareaReactiveFormsExampleComponent,
    level: 3,
    args: {},
};

export default meta;
