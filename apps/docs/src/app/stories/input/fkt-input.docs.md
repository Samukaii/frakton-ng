## Import

```ts
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';
```

## Usage Model

`fktInputText` is a directive for the native `<input>` element. It is designed to be projected
inside `fkt-field`, keeping the native control open for browser attributes, forms, i18n, masking
libraries, and third-party directives while the field owns the visual shell.

```html
<fkt-field label="Full name">
    <input
        fktInputText
        placeholder="Enter a full name"
    >
</fkt-field>
```

## Native Input First

The directive does not replace the native input API. Keep attributes such as `type`, `autocomplete`,
`inputmode`, `spellcheck`, `readonly`, `disabled`, and masking directives on the input itself.

```html
<fkt-field label="CPF">
    <input
        fktInputText
        ngxMask="000.000.000-00"
        formControlName="cpf"
    >
</fkt-field>
```

## Field Integration

The input implements the same field-control contract as `fktTextarea`. The field can read value,
focus, disabled, touched, invalid, required, error, and max-length state from the projected input
without the consumer forwarding those flags manually.

## Character Count

Use `fktCharacterCount` from `frakton-ng/field` when the field should render a max-length counter in
the hint end area. The max length is inferred from Signal Forms, Reactive Forms, or the native
`maxlength` attribute when available.

```html
<fkt-field label="Display name">
    <input
        fktInputText
        fktCharacterCount
        [formField]="form.displayName"
    >
</fkt-field>
```

## API

<arg-types></arg-types>
