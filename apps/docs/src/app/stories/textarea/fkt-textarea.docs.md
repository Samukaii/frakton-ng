## Import

```ts
import { FktFieldComponent } from 'frakton-ng/field';
import { FktTextareaDirective } from 'frakton-ng/textarea';
```

## Usage Model

`fktTextarea` is a directive for the native `<textarea>` element. It is designed to be projected
inside `fkt-field`, keeping the native control open for browser attributes, forms, i18n, and
third-party directives while the field owns the visual shell.

```html
<fkt-field label="Description">
    <textarea
        fktTextarea
        rows="4"
        placeholder="Describe the item..."
    ></textarea>
</fkt-field>
```

## Field Integration

The textarea implements the same field-control contract as `fktInputText`. The field can read value,
focus, disabled, touched, invalid, required, error, and max-length state from the projected textarea
without the consumer forwarding those flags manually.

## Auto Expand

Use `autoExpand` when the textarea should grow vertically as content changes. This is useful for
comments, notes, descriptions, and message boxes that should start compact.

```html
<textarea fktTextarea autoExpand rows="2"></textarea>
```

## Character Count

Use `fktCharacterCount` from `frakton-ng/field` when the field should render a max-length counter in
the hint end area. The max length is inferred from Signal Forms, Reactive Forms, or the native
`maxlength` attribute when available.

```html
<fkt-field label="Bio">
    <textarea
        fktTextarea
        fktCharacterCount
        [field]="form.bio"
    ></textarea>
</fkt-field>
```

## API

<arg-types></arg-types>
