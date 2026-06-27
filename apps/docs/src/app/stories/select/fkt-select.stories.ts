import { FktSelectComponent } from 'frakton-ng/select';
import { Meta } from '@/models/meta';
import { Story, StoryIntroduction } from '@/models/story';
import documentation from './fkt-select.docs.md' with { loader: 'text' };
import designTokens from './fkt-select-design-tokens.json';
import {
    SelectBasicExampleComponent,
    SelectLazyFetchingExampleComponent,
    SelectCustomContentExampleComponent,
    SelectFieldCompositionExampleComponent,
    SelectFunctionKeysExampleComponent,
    SelectHydratedValueExampleComponent,
    SelectMultipleExampleComponent,
    SelectObjectOptionsExampleComponent,
    SelectReactiveFormsExampleComponent,
    SelectSignalFormsExampleComponent,
    SelectValidationsExampleComponent,
} from './examples';

const meta: Meta = {
    title: 'Components/Form/Select',
    component: FktSelectComponent,
    designTokens: designTokens as any,
    description: `Accessible selection control for finite option sets. It supports primitive and object
options, normalized primitive form values, grouping, multiple selection, hydrated edit values,
custom templates, Reactive Forms, Signal Forms, and the full fkt-field composition contract.`,
    documentation,
    panelStyle: {
        outerWidth: '100%',
        fillContainer: true,
    },
    argTypes: {
        label: {
            control: 'text',
            category: 'Attributes',
            type: 'InputSignal<string>',
            description:
                'Accessible field label rendered by the internal fkt-field wrapper.',
        },
        placeholder: {
            control: 'text',
            category: 'Attributes',
            type: 'InputSignal<string | undefined>',
            description:
                'Text shown when no value is selected.',
        },
        hint: {
            control: 'text',
            category: 'Attributes',
            type: 'InputSignal<string | undefined>',
            description:
                'Plain helper text forwarded to the internal fkt-field.',
        },
        showError: {
            control: 'boolean',
            category: 'Attributes',
            type: 'InputSignal<boolean | undefined>',
            description:
                'Overrides the default invalid and touched error visibility rule.',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            category: 'Attributes',
            type: `InputSignal<'sm' | 'md' | 'lg'>`,
            defaultValue: 'md',
            description:
                'Field density forwarded to the internal fkt-field.',
        },
        requiredMarker: {
            control: 'boolean',
            category: 'Attributes',
            type: 'InputSignal<boolean | undefined>',
            description:
                'Overrides required marker visibility. When omitted, it is inferred from the form control.',
        },
        hideLabel: {
            control: 'boolean',
            category: 'Attributes',
            type: 'InputSignal<boolean>',
            defaultValue: 'false',
            description:
                'Visually hides the label while keeping its accessible name.',
        },
        options: {
            control: 'array',
            category: 'Attributes',
            type: 'InputSignal<Option[]>',
            description:
                'Finite option list. Options may be primitive strings or rich objects.',
            required: true,
        },
        labelKey: {
            control: 'text',
            category: 'Attributes',
            type: 'keyof Option | ((option: Option) => string | number)',
            description:
                'Property or function used to derive the visible option label.',
        },
        valueKey: {
            control: 'text',
            category: 'Attributes',
            type: 'keyof Option | ((option: Option) => string | number)',
            description:
                'Property or function used to derive the primitive form value.',
        },
        groupKey: {
            control: 'text',
            category: 'Attributes',
            type: 'keyof Option | ((option: Option) => string | number | { label: string; value: string })',
            description:
                'Optional property or function used to group options.',
        },
        value: {
            control: 'text',
            category: 'Attributes',
            type: 'ModelSignal<FktSelectValue>',
            description:
                'Direct value binding. Forms should generally use formControl, formControlName, or formField.',
        },
        loading: {
            control: 'boolean',
            category: 'Attributes',
            type: 'InputSignal<boolean>',
            defaultValue: 'false',
            description:
                'Disables interaction and renders the loading state.',
        },
        disabled: {
            control: 'boolean',
            category: 'Attributes',
            type: 'InputSignal<boolean>',
            defaultValue: 'false',
            description:
                'Disables the control outside a forms integration.',
        },
        multiple: {
            control: 'boolean',
            category: 'Attributes',
            type: 'InputSignal<boolean>',
            defaultValue: 'false',
            description:
                'Stores an array of primitive values and renders removable chips.',
        },
        listHeight: {
            control: 'number',
            category: 'Attributes',
            type: 'InputSignal<number>',
            defaultValue: '300',
            description:
                'Maximum dropdown list height in pixels.',
        },
        valueChange: {
            control: 'text',
            category: 'Events',
            type: 'OutputEmitterRef<FktSelectValue>',
            description:
                'Emitted by direct value binding after the normalized selection changes.',
        },
        dropdownOpenChange: {
            control: 'text',
            category: 'Events',
            type: 'OutputEmitterRef<boolean>',
            description:
                'Emitted after the dropdown transitions between open and closed states.',
        },
    },
};

/**
 * Selection fundamentals. Select is intended for finite, known option sets. When users need to
 * search a large or remote dataset, use Autocomplete instead.
 */
export const Selection: StoryIntroduction = {};

/**
 * Primitive string options need no mapping configuration. The selected string is written directly
 * to the form.
 */
export const Basic: Story<SelectBasicExampleComponent> = {
    component: SelectBasicExampleComponent,
    level: 3,
    args: {},
};

/**
 * Rich objects use `labelKey` for display and `valueKey` for the stable primitive form value.
 */
export const ObjectOptions: Story<SelectObjectOptionsExampleComponent> = {
    component: SelectObjectOptionsExampleComponent,
    level: 3,
    args: {},
};

/**
 * `labelKey`, `valueKey`, and `groupKey` also accept functions for derived labels, identifiers,
 * and group metadata.
 */
export const FunctionKeysAndGrouping: Story<SelectFunctionKeysExampleComponent> =
    {
        component: SelectFunctionKeysExampleComponent,
        level: 3,
        args: {},
    };

/**
 * Multiple selection writes an array of primitive values and keeps the dropdown open while options
 * are added or removed.
 */
export const MultipleSelection: Story<SelectMultipleExampleComponent> = {
    component: SelectMultipleExampleComponent,
    level: 3,
    args: {},
};

/**
 * Full option objects can be written programmatically on edit screens. The Select uses them as
 * temporary preload data, renders their label, and normalizes the form value through `valueKey`.
 */
export const HydratedValues: Story<SelectHydratedValueExampleComponent> = {
    component: SelectHydratedValueExampleComponent,
    level: 3,
    args: {},
};

/**
 * Item, group, header, footer, chip, and empty templates customize rendering without moving
 * selection, keyboard navigation, active descendant, or form state into consumer code.
 */
export const CustomContent: Story<SelectCustomContentExampleComponent> = {
    component: SelectCustomContentExampleComponent,
    level: 3,
    args: {},
};

/**
 * `dropdownOpenChange` can trigger a deferred request when a finite option list only needs to be
 * fetched after the user first opens the Select. Dropdown behavior remains owned by the component.
 */
export const LazyFetching: Story<SelectLazyFetchingExampleComponent> =
    {
        component: SelectLazyFetchingExampleComponent,
        level: 3,
        args: {},
    };

/**
 * Form integrations. Select implements ControlValueAccessor and supports both established Reactive
 * Forms and Angular Signal Forms.
 */
export const Forms: StoryIntroduction = {};

/**
 * Reactive Forms provide value, disabled, touched, required, and validation state to the internal
 * field.
 */
export const ReactiveForms: Story<SelectReactiveFormsExampleComponent> = {
    component: SelectReactiveFormsExampleComponent,
    level: 3,
    args: {},
};

/**
 * Signal Forms use the same Select API through `formField`; required and disabled state remain
 * reactive.
 */
export const SignalForms: Story<SelectSignalFormsExampleComponent> = {
    component: SelectSignalFormsExampleComponent,
    level: 3,
    args: {},
};

/**
 * Field composition and validation. Select composes `fkt-field` internally and exposes the same
 * prefix, suffix, hint, error, size, label, and required-marker contract.
 *
 * See the [Field documentation](/docs/field/features) for the complete field behavior.
 */
export const FieldCompositionAndValidations: StoryIntroduction = {};

/**
 * Prefixes, suffixes, and supporting content can be projected directly into the Select.
 */
export const FieldComposition: Story<SelectFieldCompositionExampleComponent> = {
    component: SelectFieldCompositionExampleComponent,
    level: 3,
    args: {},
};

/**
 * Automatic errors use the configured field error resolver. Projecting `fktError` replaces that
 * message for cases that need control-specific content.
 */
export const Validations: Story<SelectValidationsExampleComponent> = {
    component: SelectValidationsExampleComponent,
    level: 3,
    args: {},
};

export default meta;
