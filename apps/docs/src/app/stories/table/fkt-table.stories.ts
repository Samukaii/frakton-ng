import { FktTableComponent } from 'frakton-ng/table';
import {
    TableExamplesBasicTableComponent,
    TableExamplesCellRenderersComponent,
    TableExamplesColumnReorderComponent,
    TableExamplesColumnResizingComponent,
    TableExamplesColumnToggleComponent,
    TableExamplesConditionalStyleComponent,
    TableExamplesCustomCellComponentsComponent,
    TableExamplesCustomFilterComponentsComponent,
    TableExamplesCustomHeaderComponent,
    TableExamplesExpandableRowsComponent,
    TableExamplesExportComponent,
    TableExamplesFilteringComponent,
    TableExamplesFrozenRowsComponent,
    TableExamplesGridLinesComponent,
    TableExamplesLoadingComponent,
    TableExamplesPaginationComponent,
    TableExamplesPinnedColumnsComponent,
    TableExamplesRowClickComponent,
    TableExamplesRowSelectionComponent,
    TableExamplesSortingComponent,
    TableExamplesStatefulComponent,
    TableExamplesSizeComponent,
    TableExamplesStripedComponent,
    TableExamplesTemplateCellRenderingComponent,
    TableExamplesVirtualScrollComponent
} from './examples';
import { Meta } from '@/models/meta';
import { Story, StoryIntroduction } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-table.docs.md' with { loader: 'text' };
import designTokens from './fkt-table-design-tokens.json';
import { DesignToken } from '@/models/design-token';
import { FktTableContextDirective } from '../../../../../../libs/frakton-ng/table/src/core/fkt-table-context.directive';

const coreTable = {
	type: 'component',
	label: 'Core table',
	name: 'FktTableComponent',
} as const;

const selectionFeature = {
	type: 'directive',
	label: 'Selection',
	name: 'FktTableSelectionDirective',
	selector: 'fkt-table[fktTableSelection]',
} as const;

const resizeFeature = {
	type: 'directive',
	label: 'Resize',
	name: 'FktTableResizeDirective',
	selector: 'fkt-table[fktTableResize]',
} as const;

const reorderFeature = {
	type: 'directive',
	label: 'Reorder',
	name: 'FktTableReorderDirective',
	selector: 'fkt-table[fktTableReorder]',
} as const;

const virtualScrollFeature = {
	type: 'directive',
	label: 'Virtual scroll',
	name: 'FktTableVirtualScrollDirective',
	selector: 'fkt-table[fktTableVirtualScroll]',
} as const;

const frozenRowsFeature = {
	type: 'directive',
	label: 'Frozen rows',
	name: 'FktTableFrozenRowsDirective',
	selector: 'fkt-table[fktTableFrozenRows]',
} as const;

const meta: Meta = {
	title: "Components/Data Display/Table",
	component: FktTableComponent,
	description: `Schema-based table component built for type-safe column definitions and dynamic cell rendering.
Columns are defined in TypeScript using a cell factory — plain strings for simple values, aliased components
for common patterns, and direct component references for custom renderers. Filter state, sorting, and
pagination are owned by the consumer as signals, keeping the table free of business logic.`,
	documentation,
	designTokens: designTokens as DesignToken[],
    panelStyle: {
    },
	argTypes: {
		data: {
			owner: coreTable,
			control: 'object',
			category: "Attributes",
			type: 'T[]',
			required: true,
			description: 'Array of items to display. Each item must be a plain object with at least the field referenced by `identifier`.'
		},
		columns: {
			owner: coreTable,
			control: 'object',
			category: "Attributes",
			type: 'FktTableColumn<T>[]',
			import: "import { FktTableColumn } from 'frakton-ng/table'",
			required: true,
			description: 'Column definitions. Each column declares a `key`, a `header`, and a `cell` factory that returns either a plain string or a render descriptor produced by the `cell` helpers.'
		},
		identifier: {
			owner: coreTable,
			control: 'text',
			category: "Attributes",
			type: 'string',
			defaultValue: '"id"',
			description: 'Name of the property used as the unique row identifier. Defaults to `"id"`.'
		},
		loading: {
			owner: coreTable,
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: 'false',
			description: 'Replaces table rows with skeleton placeholders while true.'
		},
		skeletonLines: {
			owner: coreTable,
			control: 'number',
			category: "Attributes",
			type: 'number',
			defaultValue: '10',
			description: 'Number of skeleton rows shown when `loading` is true.'
		},
		singleExpand: {
			owner: coreTable,
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: 'false',
			description: 'Collapses the previously expanded row when another row is expanded (accordion mode). Only relevant when `fktTableExpand` is used.'
		},
		clickableRows: {
			owner: coreTable,
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: 'false',
			description: 'Applies a `pointer` cursor to rows. Pair with `(rowClick)` to handle navigation or selection.'
		},
		disableRowHover: {
			owner: coreTable,
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: 'false',
			description: 'Disables the row hover highlight. Useful when rows contain their own interactive elements.'
		},
		noResults: {
			owner: coreTable,
			control: 'object',
			category: "Attributes",
			type: 'FktNoResults',
			import: "import { FktNoResults } from 'frakton-ng/no-results'",
			defaultValue: '{ label: "No results" }',
			description: 'Configuration for the empty state rendered inside the table body when `data` is empty.'
		},
		classesFn: {
			owner: coreTable,
			control: 'text',
			category: "Attributes",
			type: 'FktTableClassesFn<T>',
			import: "import { FktTableClassesFn } from 'frakton-ng/table'",
			defaultValue: '() => ""',
			description: 'Function called once per row that returns extra CSS classes to apply to the `<tr>` element. Use to highlight specific rows based on data conditions.'
		},
		filters: {
			owner: coreTable,
			control: 'object',
			category: "Attributes",
			type: 'Filters',
			import: "import { FktTableFilterValue } from 'frakton-ng/table'",
			defaultValue: '{}',
			description: 'Two-way binding for the active filter state. Updated by the built-in filter popups; read by the consumer to drive the data fetch.'
		},
		defaultFilters: {
			owner: coreTable,
			control: 'object',
			category: "Attributes",
			type: 'Filters',
			import: "import { FktTableFilterValue } from 'frakton-ng/table'",
			defaultValue: '{}',
			description: 'Initial filter values shown pre-filled in the filter popups. The table treats these as the "reset" baseline when the user clears a filter.'
		},
		expandedRowIds: {
			owner: coreTable,
			control: 'object',
			category: "Attributes",
			type: '(string | number)[]',
			defaultValue: '[]',
			description: 'Two-way binding for the set of expanded row identifiers. Manage externally to open or close rows programmatically.'
		},
		rowClick: {
			owner: coreTable,
			control: 'object',
			category: "Events",
			type: 'T',
			description: 'Emitted when a row is clicked. Carries the full typed item — no index bookkeeping needed.'
		},
		sort: {
			owner: coreTable,
			control: 'object',
			category: "Events",
			type: 'FktTableSortEvent | null',
			import: "import { FktTableSortEvent } from 'frakton-ng/table'",
			description: 'Emitted when the user changes the sort column or direction. `null` means sorting was cleared.'
		},
		selection: {
			owner: selectionFeature,
			control: 'object',
			category: "Attributes",
			type: 'FktTableSelection<T>',
			import: "import { FktTableSelection } from 'frakton-ng/table'",
			defaultValue: '{ selectAll: false, items: [] }',
			description: 'Two-way binding for the selection state. `{ selectAll: true }` represents all items selected across pages without needing every ID.'
		},
		totalItems: {
			owner: selectionFeature,
			control: 'number',
			category: "Attributes",
			type: 'number | undefined',
			defaultValue: 'undefined',
			description: 'Total number of items across all pages. Shown in the "select all N items" banner when a full page is selected.'
		},
		columnWidths: {
			owner: resizeFeature,
			control: 'object',
			category: "Attributes",
			type: 'Record<string, number>',
			defaultValue: '{}',
			description: 'Two-way binding for column widths in pixels, keyed by column `key`. Persist and restore to save user preferences.'
		},
		mode: {
			owner: resizeFeature,
			control: 'select',
			options: ['fit', 'dynamic'] as const,
			category: "Attributes",
			type: '"fit" | "dynamic"',
			defaultValue: '"dynamic"',
			description: '`fit` keeps total table width fixed by shrinking the adjacent column; `dynamic` grows the table width freely.'
		},
		minColumnWidth: {
			owner: resizeFeature,
			control: 'number',
			category: "Attributes",
			type: 'number',
			defaultValue: '50',
			description: 'Minimum column width in pixels enforced during resize.'
		},
		columnOrder: {
			owner: reorderFeature,
			control: 'object',
			category: "Attributes",
			type: 'string[]',
			defaultValue: '[]',
			description: 'Two-way binding for the column order as an array of column `key` values. Persist and restore to save user preferences.'
		},
		size: {
			owner: coreTable,
			control: 'select',
			options: ['sm', 'md', 'lg'] as const,
			category: 'Attributes',
			type: '"sm" | "md" | "lg"',
			defaultValue: '"md"',
			description: 'Cell padding density preset. Overridable per-instance with `--fkt-table-header-cell-padding`.'
		},
		rowHeight: {
			owner: virtualScrollFeature,
			control: 'number',
			category: "Attributes",
			type: 'number',
			defaultValue: '48',
			description: 'Expected row height in pixels used to compute spacer sizes and the visible range. All rows must have a uniform height.'
		},
		// ─── fktTableFrozenRows directive ─────────────────────────────────────────────────────
		frozenData: {
			owner: frozenRowsFeature,
			control: 'object',
			category: "Attributes",
			type: 'T[]',
			required: true,
			description: 'Rows to pin at the top of the table, rendered in a sticky section above the regular body. Managed entirely by the consumer — pass a separate array and exclude those items from `[data]` to avoid duplication.'
		},
	}
}

/**
 * Visual presentation variants for the table: animated loading placeholders while data is in-flight,
 * alternating row stripes for easier row tracking, full grid lines for spreadsheet-style density,
 * row-level conditional coloring via `classesFn` and CSS custom properties, cell padding density
 * presets via `size`, and rows pinned to the top of the scroll area via `fktTableFrozenRows`.
 */
export const Display: StoryIntroduction = {};

/**
 * Starting point. Static data, no server interaction. Covers the three fundamental cell output
 * formats — plain text, registered alias, and directly referenced component — and demonstrates
 * `noResults` configuration for the empty state.
 */
export const Basic: Story<TableExamplesBasicTableComponent> = {
	component: TableExamplesBasicTableComponent,
	level: 3,
	args: {}
};

/**
 * The `[loading]` input replaces table rows with animated skeleton placeholders while data is
 * being fetched. Use `[skeletonLines]` to control how many placeholder rows appear (default `10`).
 *
 * Pair with Angular's `resource()` API: bind `[loading]="response.isLoading()"` and pass the resolved
 * value to `[data]`. A reload button in `[fktTableToolbar]` can call `response.reload()` to trigger
 * a fresh fetch.
 */
export const Loading: Story<TableExamplesLoadingComponent> = {
	component: TableExamplesLoadingComponent,
	level: 3,
	args: {}
};

/**
 * The `striped` attribute applies an alternating background to odd-indexed rows, making wide
 * tables easier to scan across columns.
 *
 * Striping is controlled by the `--fkt-table-stripe-color` CSS custom property
 * (default: `--fkt-color-neutral-50`). The stripe is suppressed on selected rows so
 * the selection highlight takes precedence.
 */
export const Striped: Story<TableExamplesStripedComponent> = {
	component: TableExamplesStripedComponent,
	level: 3,
	args: {}
};

/**
 * The `gridLines` attribute draws both vertical column separators and horizontal row
 * borders, turning the table into a full spreadsheet-style grid.
 *
 * Controlled by `--fkt-table-column-border-color` for the line color (defaults to the same value as
 * the row border). When disabled, the table returns to the default style where only row borders between
 * non-last rows are visible.
 */
export const GridLines: Story<TableExamplesGridLinesComponent> = {
	component: TableExamplesGridLinesComponent,
	level: 3,
	args: {}
};

/**
 * Row-level styling via `[classesFn]`. The function receives each row item and returns a CSS
 * class string applied to the `<tr>` element.
 *
 * Style the returned class with regular CSS selectors when the style can target the rendered cells
 * directly, such as `.status-cancelled td { background-color: red; }`. As an alternative, the table
 * also exposes a `--fkt-row-cell-background` CSS custom property on the row host. Set this variable
 * on the class applied to `<tr>` when you prefer to style through the table's design-token surface.
 *
 * Use `::ng-deep` on a wrapper element in your component template to target the `<tr>` without
 * needing `ViewEncapsulation.None`.
 */
export const ConditionalStyle: Story<TableExamplesConditionalStyleComponent> = {
	component: TableExamplesConditionalStyleComponent,
	level: 3,
	args: {}
};

/**
 * The `size` input controls cell padding density across the whole table — header and body cells —
 * through a three-level preset: `sm`, `md` (default), and `lg`.
 *
 * Presets use a private CSS custom property (`--_table-cell-padding`) as the fallback layer, so the
 * public override token `--fkt-table-header-cell-padding` always takes precedence. You can use `size`
 * as a baseline and still fine-tune individual instances with the token.
 *
 * When using `size` with `fktTableVirtualScroll`, update `[rowHeight]` to match the new row height
 * since virtual scroll needs a fixed row height for spacer calculations.
 */
export const Size: Story<TableExamplesSizeComponent> = {
	component: TableExamplesSizeComponent,
	level: 3,
	args: {},
};

/**
 * The `fktTableFrozenRows` directive pins a set of rows to the top of the table, keeping them
 * visible while the rest of the content scrolls. Apply it to `<fkt-table>` and pass the rows
 * to keep frozen via `[frozenData]`.
 *
 * Frozen rows are managed entirely by the consumer: pass a separate array for `[frozenData]`
 * and a filtered array for `[data]`. This keeps the table free of internal pin state, so frozen
 * rows remain correct across pagination, filtering, and live data updates without the table
 * needing to remember anything.
 *
 * A visual separator border is drawn below the frozen section. Customize it with
 * `--fkt-table-frozen-separator-color` and `--fkt-table-frozen-separator-width`.
 */
export const FrozenRows: Story<TableExamplesFrozenRowsComponent> = {
	component: TableExamplesFrozenRowsComponent,
	level: 3,
	args: {},
};

/**
 * Columns control how each cell is rendered through the `cell` factory returned by `defineCells()`.
 * Define this once globally — typically in a shared file for the whole app or per feature module — passing an alias map that binds short keys to component classes:
 *
 * ```ts
 * import { defineCells } from 'frakton-ng/table';
 *
 * const cell = defineCells({
 *     tag: FktTagComponent,
 *     actions: FktButtonsListComponent,
 *     // ...other cells you want to register
 * });
 * ```
 *
 * The factory exposes four rendering strategies — plain string, registered alias, custom component,
 * and inline template — each shown in a dedicated example below.
 */
export const CellRendering: StoryIntroduction = {};

/**
 * A plain string is the baseline — return one directly from `cell` for any text value.
 * For cells that render a component, the alias strategy references it by a short key from the
 * map passed to `defineCells()`:
 *
 * ```ts
 * { key: 'status', header: 'Status', cell: (user) => cell.tag({ label: user.status }) }
 * ```
 *
 * Props are statically typed against the registered component's inputs — mismatches are caught at compile time.
 */
export const CellAlias: Story<TableExamplesCellRenderersComponent> = {
	component: TableExamplesCellRenderersComponent,
    level: 3,
	args: {}
};

/**
 * `cell.custom(Component, props)` mounts any Angular component directly inside the cell. Props are typed
 * against the component's `input()` and `model()` signals — no `@Input()` decorator, no template wiring.
 * The table instantiates the component and applies the bindings automatically.
 *
 * ```ts
 * cell: (product) => cell.custom(MyComponent, { ...props });
 * ```
 *
 * This example uses two custom cells: `ImageCellComponent` for a product thumbnail and `RatingCellComponent`
 * for a star-rating display.
 */
export const CustomCellComponents: Story<TableExamplesCustomCellComponentsComponent> = {
	component: TableExamplesCustomCellComponentsComponent,
	level: 3,
	args: {}
};

/**
 * `cell.template(templateRef, context)` renders an inline `TemplateRef` from the parent component.
 * The context object is available in the template as `$implicit` and any additional named keys you pass.
 *
 * ```ts
 * cell: (product) => cell.template(this.templateRef, { ...context });
 * ```
 *
 * This is the right choice when the cell content is tightly coupled to parent state — a local signal, a specific
 * formatter, a computed value — and creating a standalone component would be overkill. `viewChild` gives you a
 * typed reference to any `<ng-template>` in the host template.
 */
export const TemplateRef: Story<TableExamplesTemplateCellRenderingComponent> = {
	component: TableExamplesTemplateCellRenderingComponent,
	level: 3,
	args: {}
};

/**
 * Column headers are plain strings by default. Setting `header` to a function returning a `TemplateRef`
 * lets you render any markup in the header cell — a tooltip, a column aggregate, a label derived from parent state.
 *
 * This example shows aggregates computed from the loaded data (total users, average age) displayed directly
 * in the relevant column headers.
 */
export const CustomHeaders: Story<TableExamplesCustomHeaderComponent> = {
	component: TableExamplesCustomHeaderComponent,
	level: 3,
	args: {}
};

/**
 * Interaction patterns: row click for navigation or detail panels, multi-row selection with
 * cross-page persistence and a select-all sentinel, and expandable row panels for inline detail rendering.
 */
export const Interaction: StoryIntroduction = {};

/**
 * Row click via the `(rowClick)` output. Emits the full typed row item — no index, no template reference.
 * Add `[clickableRows]="true"` to show a pointer cursor. Common use case: navigating to a detail view or
 * opening a side panel.
 */
export const RowClick: Story<TableExamplesRowClickComponent> = {
	component: TableExamplesRowClickComponent,
	level: 3,
	args: {}
};

/**
 * Row selection via the `fktTableSelection` directive. Add `FktTableSelectionDirective` to imports and
 * apply `fktTableSelection` to `<fkt-table>`. Selection state lives in `[(selection)]` and persists across pages —
 * the table tracks selected items by ID.
 *
 * When every item on a page is checked, a banner appears offering to extend the selection to all N items in the
 * dataset. This uses a `{ selectAll: true }` sentinel so the consumer can delegate the operation to the backend
 * without holding every ID in memory. Pass `[totalItems]` to show the exact count in the banner.
 */
export const RowSelection: Story<TableExamplesRowSelectionComponent> = {
	component: TableExamplesRowSelectionComponent,
	level: 3,
	args: {}
};

/**
 * Expandable rows via the `fktTableExpand` directive. Add `FktTableExpandDirective` to imports and pass
 * your expand template to `[fktTableExpand]` on `<fkt-table>`. The template is instantiated lazily — only when the
 * row is first opened — and has full closure access to the parent component's signals, services, and methods.
 *
 * Set `[singleExpand]="true"` on the table for accordion behavior (opening one row closes the others). Expanded
 * row IDs are tracked in `[(expandedRowIds)]` for external control.
 */
export const ExpandableRows: Story<TableExamplesExpandableRowsComponent> = {
	component: TableExamplesExpandableRowsComponent,
	level: 3,
	args: {}
};

/**
 * Data management patterns: column sorting via event emission, column filters using built-in or
 * custom filter components, and server-side pagination — all driven by consumer-owned signals with
 * no internal state in the table.
 */
export const Data: StoryIntroduction = {};

/**
 * Column sorting via the `(sort)` output. The table emits an `FktTableSortEvent` — the column `key` and
 * direction (`asc` | `desc`) — then waits. The consumer updates a signal, refetches, and passes the new data back in.
 * No internal sort logic, no opinion on multi-column sorting. Add `allowSorting: true` to any column definition to opt it in.
 */
export const Sorting: Story<TableExamplesSortingComponent> = {
	component: TableExamplesSortingComponent,
	level: 3,
	args: {}
};

/**
 * Filters are declared per-column using the `filter` factory returned by `defineFilters()`.
 * Like `defineCells`, define it once globally with an alias map of filter components:
 *
 * ```ts
 * export const filter = defineFilters({
 *     text: FktTableFilterTextComponent,
 *     select: FktTableFilterSelectComponent,
 *     number: FktTableFilterNumberComponent,
 *     dateRange: FktTableFilterDateRangeComponent,
 * });
 * ```
 *
 * Then attach a registered filter alias to a column:
 *
 * ```ts
 * {
 *     key: 'name',
 *     header: 'Name',
 *     filter: filter.text('name', {
 *         label: 'Search',
 *     }),
 * }
 * ```
 *
 * Filter state flows through `[(filters)]` as a plain object owned by the consumer — easy to
 * debounce, serialize, URL-sync, or pass directly to an API.
 *
 * Frakton NG ships four built-in filter components that can be registered: text, select, number
 * (with `=`, `<`, `>`, `<=`, `>=` modifiers), and date range.
 */
export const Filtering: Story<TableExamplesFilteringComponent> = {
	component: TableExamplesFilteringComponent,
	level: 3,
	args: {}
};

/**
 * `filter.custom(key, Component, config)` plugs any Angular component into the filter popup.
 * The component integrates with the same apply/reset lifecycle as built-in filters.
 *
 * Use this when none of the four built-in types fit — multi-select trees, autocomplete pickers, range sliders,
 * or any domain-specific control. This example implements a multi-select category filter that replaces
 * the standard single-select.
 */
export const CustomFilter: Story<TableExamplesCustomFilterComponentsComponent> = {
	component: TableExamplesCustomFilterComponentsComponent,
	level: 3,
	args: {}
};

/**
 * Server-side pagination with Angular's `resource()` API. Page state lives in the parent as a signal —
 * the table renders exactly what it receives and emits nothing. Changing `currentPage` triggers a new resource
 * load, which fetches the next slice and updates the data array.
 */
export const Pagination: Story<TableExamplesPaginationComponent> = {
	component: TableExamplesPaginationComponent,
	level: 3,
	args: {}
};

/**
 * Column display and layout features: sticky pinned columns at either edge, signal-driven visibility
 * toggle, drag-and-drop reordering, and resizable column widths — with two-way bindings on all state
 * for easy persistence.
 */
export const Columns: StoryIntroduction = {};

/**
 * Sticky columns via `pinned: 'left' | 'right'` in the column definition. Left-pinned columns stick
 * to the left edge during horizontal scroll; right-pinned columns stick to the right.
 *
 * Add `width` to each pinned column so that offsets for subsequent pinned columns are computed correctly.
 * A shadow marks the boundary between pinned and scrollable content.
 */
export const PinnedColumns: Story<TableExamplesPinnedColumnsComponent> = {
	component: TableExamplesPinnedColumnsComponent,
	level: 3,
	args: {}
};

/**
 * Dynamic column visibility driven by a signal. Maintain a list of column toggle states
 * and derive the visible `columns` array with `computed()`. Place the checkboxes in
 * `[fktTableToolbar]` to keep the controls adjacent to the table.
 *
 * Because `columns` is a signal-derived value, the table reacts automatically when
 * visibility changes — no imperative update calls needed.
 */
export const ColumnToggle: Story<TableExamplesColumnToggleComponent> = {
	component: TableExamplesColumnToggleComponent,
	level: 3,
	args: {}
};

/**
 * Drag-and-drop column reordering via the `fktTableReorder` directive. Add `FktTableReorderDirective`
 * to imports and apply `fktTableReorder` to `<fkt-table>`. Any non-pinned header becomes draggable. The new order
 * is tracked in `[(columnOrder)]` as an array of column keys — persist it to restore the layout across sessions.
 */
export const ColumnReorder: Story<TableExamplesColumnReorderComponent> = {
	component: TableExamplesColumnReorderComponent,
	level: 3,
	args: {}
};

/**
 * Column width resizing via the `fktTableResize` directive. Add `FktTableResizeDirective` to imports
 * and apply `fktTableResize` to `<fkt-table>`. A drag handle appears on the right edge of each header cell.
 *
 * `mode="fit"` redistributes width between the dragged column and its right neighbor, keeping the total table
 * width fixed. `mode="dynamic"` (default) lets the table grow freely. New widths are tracked in `[(columnWidths)]`
 * keyed by column `key` — persist them to restore user layout preferences.
 */
export const ColumnResizing: Story<TableExamplesColumnResizingComponent> = {
	component: TableExamplesColumnResizingComponent,
	level: 3,
	args: {
        mode: 'dynamic',
        minColumnWidth: 50,
    }
};

/**
 * Advanced integration patterns: CSV export via the `fktTableExport` directive, DOM virtualization
 * for large datasets with `fktTableVirtualScroll`, and persisting the full table layout — widths,
 * order, filters — to `localStorage` using `effect()`.
 */
export const Advanced: StoryIntroduction = {};

/**
 * CSV export via the `fktTableExport` directive. Add `FktTableExportDirective` to imports,
 * apply `fktTableExport` to `<fkt-table>`, and expose it with `#exporter="fktTableExport"`. Call
 * `exporter.exportCsv(filename?)` from any button — typically placed in `[fktTableToolbar]`.
 *
 * By default every column is included. Set `exportable: false` on a column definition to exclude it.
 * Use `exportValue` to provide a plain-text export value when the cell renders a component (e.g. a tag
 * or badge). Use `exportHeader` to override the header label in the CSV when the column uses a
 * custom header template.
 */
export const Export: Story<TableExamplesExportComponent> = {
	component: TableExamplesExportComponent,
	level: 3,
	args: {}
};

/**
 * DOM virtualization via the `fktTableVirtualScroll` directive. Add `FktTableVirtualScrollDirective`
 * to imports and apply `fktTableVirtualScroll` to `<fkt-table>`. Only the rows visible in the viewport (plus a
 * small buffer) are in the DOM — the rest are spacer elements that maintain the correct scroll height.
 *
 * Requires a constrained height on the table host (via `--fkt-table-max-height` CSS variable or an explicit
 * `height` on the host). Set `[rowHeight]` to match the actual row height in pixels (default `48`).
 * All rows must have a uniform height.
 */
export const VirtualScroll: Story<TableExamplesVirtualScrollComponent> = {
	component: TableExamplesVirtualScrollComponent,
	level: 3,
	args: {
        rowHeight: 48,
    }
};

/**
 * Persisting table layout and filter state to `localStorage` using `effect()`.
 * Column widths (`[(columnWidths)]`), column order (`[(columnOrder)]`), and filter values
 * (`[(filters)]`) are all two-way-bound signals — reading or writing them triggers Angular's
 * reactive graph just like any other signal.
 *
 * An `effect()` watches all three signals and serializes them to `localStorage` on every change.
 * On component init the saved value is read back and used as the initial signal value.
 * A "Reset layout" button clears the stored entry and resets all signals to their defaults.
 */
export const Stateful: Story<TableExamplesStatefulComponent> = {
	component: TableExamplesStatefulComponent,
	level: 3,
	args: {}
};

export default meta;
