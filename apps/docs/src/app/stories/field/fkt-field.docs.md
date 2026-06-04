## Configuration Options

<arg-types></arg-types>

## Required Marker

`requiredMarker` controls only the visual marker rendered next to the label. Validation still belongs to the projected control or form model.

When `requiredMarker` is not defined, the field tries to infer the marker from the projected control:

- Signal Forms: reads the field required state.
- Reactive Forms: runs the configured validator and checks for a `required` error.
- Native inputs: reads the native `required` property.

Use `[requiredMarker]="true"` to force the marker on and `[requiredMarker]="false"` to hide it.

## Field Error Messages

Global error messages are configured with `provideFktConfig` and `withFieldErrorMessages`.

```ts
provideFktConfig(
  withFieldErrorMessages(({ errors, t }) => {
    if (!errors) return null;

    const first = errors.errors[0];
    if (first.message) return first.message;

    if (first.kind === 'required') return t('errors.required');
    if (first.kind === 'email') return t('errors.email');

    if (first.kind === 'minLength' || first.kind === 'minlength') {
      return t('errors.minLength', first.params);
    }

    if (first.kind === 'maxLength' || first.kind === 'maxlength') {
      return t('errors.maxLength', first.params);
    }

    return null;
  })
)
```

## I18n Integration

`withI18nIntegration` connects Frakton NG to the application's translation service. The library does not own translation files or formats; it only receives a `translateFn` and a source that triggers recomputation.

`recomputeOn` accepts:

- a Signal;
- an Observable;
- an array mixing Signals and Observables.

```ts
provideFktConfig(
  withI18nIntegration(() => {
    const translateService = inject(TranslateService);

    return {
      recomputeOn: translateService.currentLanguage$,
      translateFn: translateService.instant.bind(translateService),
    };
  }),
  withFieldErrorMessages(({ errors, t }) => {
    if (!errors) return null;

    const first = errors.errors[0];
    if (first.message) return first.message;

    if (first.kind === 'required') return t('errors.required');
    if (first.kind === 'email') return t('errors.email');

    if (first.kind === 'minLength' || first.kind === 'minlength') {
      return t('errors.minLength', first.params);
    }

    if (first.kind === 'maxLength' || first.kind === 'maxlength') {
      return t('errors.maxLength', first.params);
    }

    return null;
  })
)
```

```ts
withI18nIntegration(() => ({
  recomputeOn: currentLanguage, // Signal
  translateFn: translate,
}))

withI18nIntegration(() => ({
  recomputeOn: translateService.onLangChange, // Observable
  translateFn: translateService.instant.bind(translateService),
}))

withI18nIntegration(() => ({
  recomputeOn: [currentLanguage, translateService.onLangChange],
  translateFn: translateService.instant.bind(translateService),
}))
```

