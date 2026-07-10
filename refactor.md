Mapeamento feito. Separei em três níveis: uso real da lib, uso na app/docs, e artefatos gerados/documentação.

1. Uso real dentro da lib

Esses são os pontos mais importantes para remover o legado.

Componentes que importam/renderizam `FktButtonLegacyComponent`:

- [buttons-list](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/buttons-list/src/fkt-buttons-list.component.ts)
    - usa `FktButtonLegacyComponent`
    - usa `FktButtonAction`
    - template: [fkt-buttons-list.component.html](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/buttons-list/src/fkt-buttons-list.component.html)

- [autocomplete action button](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/autocomplete/src/components/action-button/fkt-autocomplete-action-button.component.ts)
    - template: [fkt-autocomplete-action-button.component.html](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/autocomplete/src/components/action-button/fkt-autocomplete-action-button.component.html)

- Calendar:
    - [calendar-year-selector.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/calendar/src/selector/year/calendar-year-selector.component.ts)
    - [calendar-year-selector.component.html](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/calendar/src/selector/year/calendar-year-selector.component.html)
    - [calendar-month-selector.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/calendar/src/selector/month/calendar-month-selector.component.ts)
    - [calendar-month-selector.component.html](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/calendar/src/selector/month/calendar-month-selector.component.html)
    - [calendar-year-header.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/calendar/src/header/year/calendar-year-header.component.ts)
    - [calendar-year-header.component.html](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/calendar/src/header/year/calendar-year-header.component.html)
    - [calendar-month-header.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/calendar/src/header/month/calendar-month-header.component.ts)
    - [calendar-month-header.component.html](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/calendar/src/header/month/calendar-month-header.component.html)

- Color picker:
    - [fkt-color-picker.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/color-picker/src/fkt-color-picker.component.ts)
    - [fkt-color-picker.component.html](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/color-picker/src/fkt-color-picker.component.html)
    - [fkt-color-control.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/color-picker/src/components/control/fkt-color-control.component.ts)
    - [fkt-color-control.component.html](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/color-picker/src/components/control/fkt-color-control.component.html)

- Date picker:
    - [fkt-date-picker.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/date-picker/src/fkt-date-picker.component.ts)
    - [fkt-date-picker.component.html](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/date-picker/src/fkt-date-picker.component.html)

- Navigator:
    - [fkt-navigator.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/navigator/src/fkt-navigator.component.ts)
    - [fkt-navigator.component.html](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/navigator/src/fkt-navigator.component.html)

- Paginator:
    - [fkt-paginator.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/paginator/src/fkt-paginator.component.ts)
    - [fkt-paginator.component.html](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/paginator/src/fkt-paginator.component.html)

- Select:
    - [fkt-select.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/select/src/fkt-select.component.ts)
    - [fkt-select.component.html](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/select/src/fkt-select.component.html)

- Table layout/rendering:
    - [fkt-table-filter-renderer.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/table/src/renderers/filter/fkt-table-filter-renderer.component.ts)
    - [fkt-table-filter-renderer.component.html](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/table/src/renderers/filter/fkt-table-filter-renderer.component.html)
    - [fkt-table-row.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/table/src/layout/row/fkt-table-row.component.ts)
    - [fkt-table-row.component.html](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/table/src/layout/row/fkt-table-row.component.html)
    - [fkt-table-header-cell.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/table/src/layout/header-cell/fkt-table-header-cell.component.ts)
    - [fkt-table-header-cell.component.html](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/table/src/layout/header-cell/fkt-table-header-cell.component.html)

2. Tipos legados sem renderizar botão diretamente

Esses ainda dependem de `frakton-ng/button-legacy` por `FktButtonAction` ou tipos relacionados.

- [fkt-buttons-list.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/buttons-list/src/fkt-buttons-list.component.ts)
- [fkt-no-results.types.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/no-results/src/fkt-no-results.types.ts)
- [fkt-table.types.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/table/fkt-table.types.ts)
- [fkt-table-filter-text.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/table/filters/text/fkt-table-filter-text.component.ts)
- [fkt-table-filter-number.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/table/filters/number/fkt-table-filter-number.component.ts)
- [fkt-table-filter-select.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/table/filters/select/fkt-table-filter-select.component.ts)
- [fkt-table-filter-date-range.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/table/filters/date-range/fkt-table-filter-date-range.component.ts)
- [fkt-table-cell-actions.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/table/cells/actions/fkt-table-cell-actions.component.ts)
- [fkt-dialog-confirm-action.component.ts](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/dialog/src/confirm-action/fkt-dialog-confirm-action.component.ts)

3. Docs app/runtime interno

Esses são usos na aplicação de documentação, não na lib publicada diretamente.

Infraestrutura da docs:

- [toolbar.component.ts](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/core/toolbar/toolbar.component.ts)
- [toolbar.component.html](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/core/toolbar/toolbar.component.html)
- [features.component.ts](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/pages/docs-page/features/features.component.ts)
- [features.component.html](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/pages/docs-page/features/features.component.html)
- [api-reference.component.ts](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/pages/docs-page/api-reference/api-reference.component.ts)
- [api-reference.component.html](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/pages/docs-page/api-reference/api-reference.component.html)
- [markdown-wrapper-copy-button.component.ts](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/components/markdown/copy-button/markdown-wrapper-copy-button.component.ts)
- [markdown-wrapper-copy-button.component.html](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/components/markdown/copy-button/markdown-wrapper-copy-button.component.html)
- [story-source-code.component.ts](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/components/playground/components/source-code/story-source-code.component.ts)
- [story-source-code.component.html](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/components/playground/components/source-code/story-source-code.component.html)
- [story-design-tokens-item.component.ts](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/components/playground/components/design-tokens/item/story-design-tokens-item.component.ts)
- [story-design-tokens-item.component.html](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/components/playground/components/design-tokens/item/story-design-tokens-item.component.html)
- [design-token-spacing-control.component.ts](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/components/playground/components/design-tokens/controls/spacing/design-token-spacing-control.component.ts)
- [design-token-spacing-control.component.html](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/components/playground/components/design-tokens/controls/spacing/design-token-spacing-control.component.html)
- [schema-editor-array.component.ts](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/components/schema-editor/array/schema-editor-array.component.ts)
- [button-action.schema.ts](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/static/schemas/button-action.schema.ts)

Stories/examples com uso direto:

- Autocomplete examples
- Button group examples
- Calendar examples
- Dialog examples
- Field examples
- Focus trap examples
- Input examples
- Navigator examples
- Overlay examples
- Select examples
- Side menu examples
- Spinner examples
- Table examples
- Tabs examples
- Textarea examples
- Toggle examples
- Tooltip examples

Em termos práticos, quase todos são arquivos `\*.component.ts/html` dentro de:

- [autocomplete/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/autocomplete/examples)
- [button-group/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/button-group/examples)
- [calendar/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/calendar/examples)
- [dialog/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/dialog/examples)
- [field/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/field/examples)
- [focus-trap/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/focus-trap/examples)
- [input/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/input/examples)
- [navigator/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/navigator/examples)
- [overlay/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/overlay/examples)
- [select/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/select/examples)
- [side-menu/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/side-menu/examples)
- [spinner/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/spinner/examples)
- [table/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/table/examples)
- [tabs/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/tabs/examples)
- [textarea/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/textarea/examples)
- [toggle/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/toggle/examples)
- [tooltip/examples](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/tooltip/examples)

4. Documentação fonte com exemplos legados

- [installation.docs.md](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/getting-started/installation.docs.md)
- [migration-guides.docs.md](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/getting-started/migration-guides.docs.md)
- [theming-styling.docs.md](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/getting-started/theming-styling.docs.md)
- [fkt-buttons-list.docs.md](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/buttons-list/fkt-buttons-list.docs.md)
- [fkt-buttons-list.stories.ts](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/buttons-list/fkt-buttons-list.stories.ts)
- [fkt-dialog.docs.md](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/dialog/fkt-dialog.docs.md)
- [fkt-no-results.docs.md](C:/Users/samuel/programming/frakton-ng/apps/docs/src/app/stories/no-results/fkt-no-results.docs.md)

5. Config/entrypoints/artefatos que ainda mantêm o legado vivo

- [apps/docs/tsconfig.app.json](C:/Users/samuel/programming/frakton-ng/apps/docs/tsconfig.app.json)
    - alias para `frakton-ng/button-legacy`.

- [button-legacy public-api](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/button-legacy/public-api.ts)
- [button-legacy component](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/button-legacy/src/fkt-button-legacy.component.ts)
- [button-legacy types](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/button-legacy/src/fkt-button.types.ts)
- [button-legacy spec](C:/Users/samuel/programming/frakton-ng/libs/frakton-ng/button-legacy/src/fkt-button.component.spec.ts)

6. Arquivos gerados que vão cair depois da migração

Não migraria manualmente primeiro; eles devem ser regenerados pelo indexador depois.

- `apps/docs/public/llms-full.md`
- `apps/docs/public/llms/\*.md`
- `apps/docs/src/app/stories/stories-map.ts`

Resumo de prioridade

1. Migrar componentes publicados da lib: `autocomplete`, `calendar`, `color-picker`, `date-picker`, `navigator`, `paginator`, `select`, `table`, `buttons-list`.
2. Resolver `FktButtonAction` fora de `button-legacy`, provavelmente puxando para `frakton-ng/button` ou para `buttons-list`.
3. Migrar app/docs runtime.
4. Migrar stories/examples/docs fonte.
5. Remover alias, package `button-legacy`, e regenerar docs públicas.