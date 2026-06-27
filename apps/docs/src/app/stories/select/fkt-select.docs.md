## API Reference

<arg-types></arg-types>

## Value Model

`fkt-select` stores primitive values even when its options are rich objects.

- Primitive options are used directly as labels and values.
- `labelKey` derives the visible label from an object option.
- `valueKey` derives the stable `string` or `number` stored by the form.
- Multiple mode stores an array of primitive values.
- Object values written programmatically are normalized through `valueKey`.

`labelKey`, `valueKey`, and `groupKey` accept property names or functions:

```angular2html
<fkt-select
    [labelKey]="getLabel"
    [valueKey]="getValue"
    [groupKey]="getGroup"
/>
```

## Hydrated Values

Edit screens often receive the selected object before the current option list. A full option object
written through a form is treated as preload data:

- Its label is rendered immediately.
- Its value is normalized through `valueKey`.
- It is not automatically added to the dropdown.
- A real option with the same value replaces the preload data when it arrives.

## Field Composition

Select composes `fkt-field` and accepts its field inputs:

- `hint`
- `showError`
- `size`
- `requiredMarker`
- `hideLabel`

It also exposes the field projection slots:

- `fktFieldPrefix`
- `fktFieldSuffix`
- `fktHintStart`
- `fktHintEnd`
- `fktError`

`fktFieldSuffix` replaces the default clear and dropdown action button.

For the complete field contract, see [Field documentation](/docs/field/features).

## Templates

The following structural directives customize rendering:

- `fktSelectHeader`
- `fktSelectGroup`
- `fktSelectItem`
- `fktSelectFooter`
- `fktSelectChip`
- `fktSelectEmpty`

Templates change presentation only. The Select continues to own keyboard navigation, active
descendant, selection state, accessibility, and form integration.

## Lazy Fetching

Use `dropdownOpenChange` when the finite option list should only be fetched after the user opens
the dropdown:

```angular2html
<fkt-select
    [options]="options()"
    (dropdownOpenChange)="$event && fetchOptions()"
/>
```

The output reports both opening and closing transitions. It observes the dropdown lifecycle; opening,
closing, focus, keyboard behavior, and selection remain managed by the Select.

Select is designed for finite option sets. Use Autocomplete when the user needs search, server
queries, infinite loading, or virtualized results.
