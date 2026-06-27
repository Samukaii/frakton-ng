import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import { Meta } from '@/models/meta';
import { Story, StoryIntroduction } from '@/models/story';
import documentation from './fkt-autocomplete.docs.md' with { loader: 'text' };
import designTokens from './fkt-autocomplete-design-tokens.json';
import {
    AutocompleteAutomaticValidationExampleComponent,
    AutocompleteBasicExampleComponent,
    AutocompleteCustomLocalSearchExampleComponent,
    AutocompleteCustomContentExampleComponent,
    AutocompleteFieldCompositionExampleComponent,
    AutocompleteFreeTextExampleComponent,
    AutocompleteFunctionKeysExampleComponent,
    AutocompleteHydratedValueExampleComponent,
    AutocompleteInfiniteLoadingExampleComponent,
    AutocompleteLazySearchExampleComponent,
    AutocompleteLocalSearchExampleComponent,
    AutocompleteManualValidationExampleComponent,
    AutocompleteMinSearchExampleComponent,
    AutocompleteMultipleExampleComponent,
    AutocompleteObjectOptionsExampleComponent,
    AutocompleteReactiveFormsExampleComponent,
    AutocompleteServerSearchExampleComponent,
    AutocompleteSignalFormsExampleComponent,
    AutocompleteVirtualScrollExampleComponent,
} from './examples';

const meta: Meta = {
    title: 'Components/Form/Autocomplete',
    component: FktAutocompleteComponent,
    designTokens: designTokens as any,
    description: `Autocomplete for real application forms. It separates search text from form value,
supports object options with primitive form values, accepts hydrated values from edit screens,
and works with local search, server search, multiple selection, free text, pagination, and
virtualized lists.`,
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
                'Search input placeholder rendered inside the autocomplete field.',
        },
        hint: {
            control: 'text',
            category: 'Attributes',
            type: 'InputSignal<string | undefined>',
            description:
                'Plain helper text forwarded to the internal fkt-field. Project `[fktHintStart]` for custom hint content.',
        },
        showError: {
            control: 'boolean',
            category: 'Attributes',
            type: 'InputSignal<boolean | undefined>',
            description:
                'Overrides the internal field error visibility rule. When omitted, errors are shown when the autocomplete control is invalid and touched.',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            category: 'Attributes',
            type: `InputSignal<'sm' | 'md' | 'lg'>`,
            defaultValue: 'md',
            description:
                'Field density forwarded to the internal fkt-field shell.',
        },
        requiredMarker: {
            control: 'boolean',
            category: 'Attributes',
            type: 'InputSignal<boolean | undefined>',
            description:
                'Overrides required marker visibility. When omitted, the internal field infers it from the autocomplete form state when possible.',
        },
        hideLabel: {
            control: 'boolean',
            category: 'Attributes',
            type: 'InputSignal<boolean>',
            defaultValue: 'false',
            description:
                'Visually hides the field label while keeping the accessible label. Useful for search/filter UI.',
        },
        options: {
            control: 'array',
            category: 'Attributes',
            type: 'InputSignal<Option[]>',
            description:
                'Current suggestion list. In server scenarios this should be the current page or search result, not necessarily the complete dataset.',
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
                'Optional property or function used to group options in the dropdown.',
        },
        localSearch: {
            control: 'boolean',
            category: 'Attributes',
            type: 'boolean | ((query: string, options: Option[]) => Option[])',
            defaultValue: 'false',
            description:
                'Enables local filtering. With no value it uses the built-in normalized search over label, name, and group. A function can be supplied for custom filtering.',
        },
        minSearch: {
            control: 'number',
            category: 'Attributes',
            type: 'InputSignal<number>',
            defaultValue: '0',
            description:
                'Minimum query length before options are searched or searchChange is emitted.',
        },
        searchDebounce: {
            control: 'number',
            category: 'Attributes',
            type: 'InputSignal<number>',
            defaultValue: '300',
            description:
                'Debounce applied to search behavior for both local filtering and server search events.',
        },
        loading: {
            control: 'boolean',
            category: 'Attributes',
            type: 'InputSignal<boolean>',
            defaultValue: 'false',
            description:
                'Disables interaction and renders loading state while remote options are being fetched.',
        },
        multiple: {
            control: 'boolean',
            category: 'Attributes',
            type: 'InputSignal<boolean>',
            defaultValue: 'false',
            description:
                'Uses chip-based multiple selection and stores an array of primitive values.',
        },
        freeText: {
            control: 'boolean',
            category: 'Attributes',
            type: 'InputSignal<boolean>',
            defaultValue: 'false',
            description:
                'Allows typed values that do not exist in the current options. When false, unresolved text is discarded on close.',
        },
        dropdownOpenChange: {
            control: 'text',
            category: 'Events',
            type: 'OutputEmitterRef<boolean>',
            description:
                'Emitted after the dropdown transitions between open and closed states.',
        },
        searchChange: {
            control: 'text',
            category: 'Events',
            type: 'OutputEmitterRef<string>',
            description:
                'Emitted after minSearch and searchDebounce rules are satisfied. Intended for server search.',
        },
    },
};

/**
 * Core selection behavior. The autocomplete keeps the typed query separate from the form value:
 * search text is temporary, while selected options write normalized primitive values to the form.
 */
export const Selection: StoryIntroduction = {};

/**
 * Basic single selection with primitive string options. When options are already primitive values,
 * the component does not require `labelKey` or `valueKey`.
 */
export const Basic: Story<AutocompleteBasicExampleComponent> = {
    component: AutocompleteBasicExampleComponent,
    level: 3,
    args: {},
};

/**
 * Object options can be normalized through `labelKey` and `valueKey`. This keeps the visual label
 * tied to the rich option object while the form stores only the stable identifier.
 */
export const ObjectOptions: Story<AutocompleteObjectOptionsExampleComponent> = {
    component: AutocompleteObjectOptionsExampleComponent,
    level: 3,
    args: {},
};

/**
 * `labelKey`, `valueKey`, and `groupKey` can also be functions. Use function keys when the visible
 * label, primitive value, or group metadata needs to be derived from the raw option object.
 */
export const FunctionKeys: Story<AutocompleteFunctionKeysExampleComponent> = {
    component: AutocompleteFunctionKeysExampleComponent,
    level: 3,
    args: {},
};

/**
 * Multiple selection stores an array of primitive values and keeps the dropdown open after each
 * selection. Selected options are rendered as removable chips.
 */
export const MultipleSelection: Story<AutocompleteMultipleExampleComponent> = {
    component: AutocompleteMultipleExampleComponent,
    level: 3,
    args: {},
};

/**
 * `freeText` allows values that are not present in the option list. In multiple mode, committed
 * free text becomes a chip; without `freeText`, unresolved search text is discarded on close.
 */
export const FreeText: Story<AutocompleteFreeTextExampleComponent> = {
    component: AutocompleteFreeTextExampleComponent,
    level: 3,
    args: {},
};

/**
 * Hydrated values are useful on edit screens where the API returns objects before the option list is
 * loaded. The component normalizes object values to primitives, keeps their labels as preload data,
 * and replaces those labels when fresh options with the same value arrive.
 */
export const HydratedValues: Story<AutocompleteHydratedValueExampleComponent> =
    {
        component: AutocompleteHydratedValueExampleComponent,
        level: 3,
        args: {},
    };

/**
 * Content customization. Header, group, item, and footer templates let the consumer shape the
 * overlay while keeping keyboard navigation, active descendant, selection, and form behavior inside
 * the component.
 */
export const Templates: StoryIntroduction = {};

/**
 * Custom item, group, header, footer, chip, and empty-state templates. Template contexts expose
 * normalized options and search state, so custom UI remains type-safe while the form value stays
 * primitive. Chip templates preserve the built-in removal behavior and accessibility contract.
 */
export const CustomContent: Story<AutocompleteCustomContentExampleComponent> = {
    component: AutocompleteCustomContentExampleComponent,
    level: 3,
    args: {},
};

/**
 * Search behavior. By default the component is server-search friendly: it emits debounced queries
 * and displays the provided options. Use `localSearch` when the options in memory should be filtered
 * by the component itself.
 */
export const Search: StoryIntroduction = {};

/**
 * Default local search. `localSearch` enables the built-in permissive filter, which compares label,
 * name, and group using normalized text, so accents, casing, and punctuation do not make the search
 * brittle.
 */
export const LocalSearch: Story<AutocompleteLocalSearchExampleComponent> = {
    component: AutocompleteLocalSearchExampleComponent,
    level: 3,
    args: {},
};

/**
 * Custom local search. Passing a function to `localSearch` replaces the built-in filter and lets the
 * consumer decide exactly which fields should be queried.
 */
export const CustomLocalSearch: Story<AutocompleteCustomLocalSearchExampleComponent> =
    {
        component: AutocompleteCustomLocalSearchExampleComponent,
        level: 3,
        args: {},
    };

/**
 * Server search with `searchChange`. The emitted query already respects `minSearch` and
 * `searchDebounce`, so the consumer can fetch data directly without duplicating debounce logic.
 */
export const ServerSearch: Story<AutocompleteServerSearchExampleComponent> = {
    component: AutocompleteServerSearchExampleComponent,
    level: 3,
    args: {},
};

/**
 * Lazy fetching can be triggered from `dropdownOpenChange`. This is useful when the first request
 * should happen only after the user opens the autocomplete instead of during initial page render.
 */
export const LazyFetching: Story<AutocompleteLazySearchExampleComponent> = {
    component: AutocompleteLazySearchExampleComponent,
    level: 3,
    args: {},
};

/**
 * `minSearch` delays searching until the query has enough characters. The same rule is used by
 * local filtering and server search events, and the overlay explains the required length.
 */
export const MinSearchAndDebounce: Story<AutocompleteMinSearchExampleComponent> =
    {
        component: AutocompleteMinSearchExampleComponent,
        level: 3,
        args: {},
    };

/**
 * Large and remote datasets. Infinite loading and virtual scroll are opt-in directives so normal
 * autocomplete usage stays simple while heavy scenarios can add explicit performance behavior.
 */
export const DataLoading: StoryIntroduction = {};

/**
 * Infinite loading uses a sentinel inside the options overlay. It emits `loadMore` when the user
 * reaches the end and respects the component loading state to avoid repeated requests.
 */
export const InfiniteLoading: Story<AutocompleteInfiniteLoadingExampleComponent> =
    {
        component: AutocompleteInfiniteLoadingExampleComponent,
        level: 3,
        args: {},
    };

/**
 * Virtual scroll renders only the visible option rows. This example lazy-loads ten thousand users
 * when the dropdown opens, then renders the grouped list with explicit virtual dimensions.
 */
export const VirtualScroll: Story<AutocompleteVirtualScrollExampleComponent> = {
    component: AutocompleteVirtualScrollExampleComponent,
    level: 3,
    args: {},
};

/**
 * Form integration. The component implements ControlValueAccessor and works with Angular Signal
 * Forms and Reactive Forms while keeping its internal search input as a private implementation
 * detail.
 */
export const Forms: StoryIntroduction = {};

/**
 * Signal Forms integration through Angular's `[formField]` directive. The autocomplete value is still
 * normalized through `valueKey`, while validation and disabled state are provided by the form field.
 */
export const SignalForms: Story<AutocompleteSignalFormsExampleComponent> = {
    component: AutocompleteSignalFormsExampleComponent,
    level: 3,
    args: {},
};

/**
 * Reactive Forms integration with validation, programmatic updates, reset, and disabled state.
 */
export const ReactiveForms: Story<AutocompleteReactiveFormsExampleComponent> = {
    component: AutocompleteReactiveFormsExampleComponent,
    level: 3,
    args: {},
};

/**
 * Field composition and validation examples. `fkt-autocomplete` composes `fkt-field` internally, so
 * it inherits the same prefix, suffix, hint, required marker, and error projection contract. Import
 * field slot directives from `frakton-ng/field` when you need to customize those regions.
 *
 * Read the full field contract in the [Field documentation](/docs/field/features).
 */
export const FieldCompositionAndValidations: StoryIntroduction = {};

/**
 * Field composition slots. Prefix, suffix, hint start, and hint end are projected into the internal
 * `fkt-field`. A custom suffix replaces the autocomplete default action button.
 */
export const FieldComposition: Story<AutocompleteFieldCompositionExampleComponent> =
    {
        component: AutocompleteFieldCompositionExampleComponent,
        level: 3,
        args: {},
    };

/**
 * Automatic validation. Without `[fktError]`, the internal `fkt-field` renders the configured
 * automatic error message and keeps the same visibility rule used by other field-based controls.
 */
export const AutomaticValidation: Story<AutocompleteAutomaticValidationExampleComponent> =
    {
        component: AutocompleteAutomaticValidationExampleComponent,
        level: 3,
        args: {},
    };

/**
 * Manual validation content. Project `[fktError]` when the autocomplete needs custom error markup
 * while still using the field's invalid state, spacing, and visibility behavior.
 */
export const ManualValidation: Story<AutocompleteManualValidationExampleComponent> =
    {
        component: AutocompleteManualValidationExampleComponent,
        level: 3,
        args: {},
    };

export default meta;
