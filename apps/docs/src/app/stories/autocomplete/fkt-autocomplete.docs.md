## API Reference

<arg-types></arg-types>

## Value Model

`fkt-autocomplete` separates the search query from the form value.

- The query is temporary text used to search and resolve options.
- The form value is the selected primitive value derived from `valueKey`.
- Multiple mode stores an array of primitive values.
- Object values written programmatically are normalized to primitives.

## Option Resolution

Primitive values are resolved against the current options first. If the option is not available yet,
the primitive value is used as a temporary label so edit screens can render before async data arrives.

Full option objects written programmatically are treated as hydrated/preloaded values:

- `valueKey` is used to normalize the form value.
- `labelKey` is used to render the visible label.
- Preloaded values do not automatically appear in the dropdown.
- When a real option with the same value later appears in `options`, it replaces the preloaded label.

`labelKey`, `valueKey`, and `groupKey` accept property names or functions:

```angular2html
<fkt-autocomplete
    [labelKey]="getLabel"
    [valueKey]="getValue"
    [groupKey]="getGroup"
/>
```

## Search

By default, the component is server-search friendly. It emits `searchChange` after `minSearch` and
`searchDebounce` are satisfied, and renders the options provided by the consumer.

Use `localSearch` when the current `options` array should be filtered by the component:

```angular2html
<fkt-autocomplete localSearch />
```

Passing a function to `localSearch` replaces the built-in search:

```angular2html
<fkt-autocomplete [localSearch]="customSearch" />
```

The built-in local search checks label, name, and group using normalized text comparison.

Use `isDropdownOpenedChange` when data should be fetched lazily only after the user opens the
autocomplete:

```angular2html
<fkt-autocomplete
    (isDropdownOpenedChange)="$event && fetchOptions()"
    (searchChange)="searchOptions($event)"
/>
```

Use `isDropdownOpened` as a two-way model when the overlay must be controlled externally:

```angular2html
<fkt-autocomplete [(isDropdownOpened)]="opened" />
```

## Commit Behavior

When the overlay closes, typed text is resolved before the component discards it:

- If the text matches an option by value or label, that option is applied.
- If it does not match and `freeText` is false, the search field is cleared.
- If it does not match and `freeText` is true, the typed value becomes the selected value.
- In multiple mode, free text is added as a chip and the search field is cleared.

## Field Composition

`fkt-autocomplete` composes `fkt-field` internally. Because of that, the same field inputs can be
passed directly to the autocomplete:

- `hint`
- `showError`
- `size`
- `requiredMarker`
- `hideLabel`

The autocomplete also accepts the field projection slots. Import those directives and components
from `frakton-ng/field`:

```ts
import {
  FktErrorDirective,
  FktFieldErrorComponent,
  FktFieldPrefixDirective,
  FktFieldSuffixDirective,
  FktHintEndDirective,
  FktHintStartDirective,
} from 'frakton-ng/field';
```

```angular2html
<fkt-autocomplete label="User" formControlName="user" [options]="users">
  <fkt-icon fktFieldPrefix name="user" />
  <span fktHintStart>Search by name or department.</span>
  <span fktHintEnd>Required</span>

  <fkt-field-error fktError>
    Select a valid user.
  </fkt-field-error>
</fkt-autocomplete>
```

`fktFieldSuffix` replaces the default autocomplete action button. Use it when the trailing action
area needs custom behavior.

For the full field contract, see [Field documentation](/docs/field/features).

## Templates

The overlay accepts projected templates for advanced rendering:

- `fktAutocompleteHeader`
- `fktAutocompleteGroup`
- `fktAutocompleteItem`
- `fktAutocompleteFooter`

Templates customize rendering only. Keyboard navigation, active descendant, selection, form value,
and overlay behavior remain managed by the component.

## Performance Directives

`fktAutocompleteInfiniteLoading` adds a sentinel to the overlay and emits `loadMore` when the end is
visible.

`fktAutocompleteVirtualScroll` renders only visible rows and requires explicit virtual dimensions:

```angular2html
<fkt-autocomplete
    fktAutocompleteVirtualScroll
    [virtualItemHeight]="40"
    [maxVirtualItems]="1000"
/>
```

The explicit limit prevents development-time surprises with browser scroll-height limits.
