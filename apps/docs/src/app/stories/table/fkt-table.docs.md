## API Reference

The table API is split between the base `FktTableComponent` and opt-in feature directives. The base component owns rendering, row identity, empty/loading states, filters, sorting events, row clicks, and expanded row IDs. Selection, resizing, reordering, export, frozen rows, and virtual scrolling are added by directives applied to the same `<fkt-table>` host.

<arg-types></arg-types>

## Column Contract

Columns are declared with `FktTableColumn<T>`:

```typescript
interface FktTableColumn<T> {
    key: string;
    header: string | (() => TemplateRef<any>);
    cell: (item: T) => FktTableCellRenderOptions | string;

    description?: string;
    allowSorting?: boolean;
    filter?: FktTableFilterRenderOptions;
    classes?: (item: T) => string | string[];

    pinned?: 'left' | 'right';
    width?: string;

    exportable?: boolean;
    exportHeader?: string;
    exportValue?: (item: T) => string;
}
```

`key` is the stable column identifier used by sorting, filters, export, resize state, reorder state, and pinned-column calculations. Keep it stable across releases if you persist user table preferences.

`cell` can return a plain string or a render descriptor from the cell factory. Use strings for simple values, registered aliases for common cells, `cell.custom(Component, props)` for standalone renderers, and `cell.template(templateRef, context)` when the cell depends on local template state.

## Row Identity

Rows are identified through the `identifier` input, which defaults to `"id"`. The referenced value must be unique in the current dataset. Selection, row expansion, and row comparison depend on this value rather than array index, so pagination and data refreshes can preserve state.

If your item uses another key, pass it explicitly:

```html
<fkt-table identifier="uuid" [data]="users()" [columns]="columns" />
```

## State Ownership

The table intentionally does not fetch, sort, filter, paginate, or persist data by itself. It emits user intent and waits for the consumer to update signals and pass new data back in.

Core two-way models:

```typescript
filters: FktTableFilterValue;
defaultFilters: FktTableFilterValue;
expandedRowIds: (string | number)[];
```

Feature directive models:

```typescript
selection: FktTableSelection<T>;
columnWidths: Record<string, number>;
columnOrder: string[];
```

This keeps server-side data flows predictable: listen to `(sort)`, bind `[(filters)]`, update request params, refetch, and provide the resulting slice through `[data]`.

## Sorting

Sorting is opt-in per column with `allowSorting: true`. When the user cycles the header control, the table emits:

```typescript
interface FktTableSortEvent {
    property: string;
    direction: 'asc' | 'desc';
}
```

The emitted `property` is the column `key`. A `null` sort event means sorting was cleared.

## Filtering

Filters are declared per column through render descriptors created by `defineFilters()`. Built-in filters cover text, select, number, and date range inputs. Custom filters use the same apply/reset lifecycle as the built-ins.

Custom filter components implement this shape:

```typescript
interface FktTableCustomFilter<T> {
    value: InputSignal<T>;
    apply: OutputEmitterRef<T>;
    defaultValue?: InputSignal<T | undefined>;
    close?: OutputEmitterRef<void>;
}
```

`[(filters)]` stores the active filter values. `[defaultFilters]` stores the reset baseline used when a filter is cleared.

## Selection

`fktTableSelection` adds checkbox selection and the `[(selection)]` model:

```typescript
type FktTableSelection<T> =
    | { selectAll: false; items: T[] }
    | { selectAll: true };
```

`{ selectAll: true }` is a sentinel for "all matching records", including records that are not currently loaded on the page. Use `[totalItems]` to show the full count in the selection banner.

## Layout Directives

`fktTableResize` tracks user column widths in `[(columnWidths)]`. Use `mode="fit"` to keep total width fixed by resizing the adjacent column, or `mode="dynamic"` to let the table width grow.

`fktTableReorder` tracks user column order in `[(columnOrder)]`. The array contains column keys and can be persisted as user preference data.

Pinned columns use `pinned: 'left' | 'right'` directly in the column definition. Pinned columns should also define a `width`, because sticky offsets are calculated from known widths.

`fktTableFrozenRows` renders `[frozenData]` in a sticky body above regular rows. The consumer should remove those same rows from `[data]` to avoid rendering duplicates.

## Virtual Scrolling

`fktTableVirtualScroll` renders only the visible row range plus buffer rows. It requires a constrained table height and a fixed row height:

```html
<fkt-table
    fktTableVirtualScroll
    [rowHeight]="48"
    [data]="rows()"
    [columns]="columns"
/>
```

All body rows must have uniform height. If you change the table `size` preset or cell content height, update `[rowHeight]` to match the actual rendered row height.

## Export

`fktTableExport` exposes `exportCsv(filename?)` through `#exporter="fktTableExport"`. Every column is exported by default.

Use `exportable: false` to skip a column, `exportValue` when the rendered cell is not plain text, and `exportHeader` when the visual header is a template or should differ from the CSV label.

## Styling Hooks

Use `classesFn` for row-level classes and `column.classes` for cell-level classes. For row background styling across Angular view-encapsulation boundaries, set `--fkt-row-cell-background` on the row class.

Common table CSS custom properties include:

```css
--fkt-table-max-height
--fkt-table-stripe-color
--fkt-table-column-border-color
--fkt-table-header-cell-padding
--fkt-table-frozen-separator-color
--fkt-table-frozen-separator-width
```

## Important Constraints

- Persisted `columnOrder` and `columnWidths` depend on stable column keys.
- Pinned columns should have explicit widths.
- Frozen rows are externally managed and should not also appear in regular `data`.
- Virtual scroll requires uniform row heights and a constrained scroll area.
- Sorting and filtering emit state only; the consumer is responsible for applying them to data.
