## Key Features

- Compound component pattern: `fkt-tabs-list` manages state, `fkt-tab` declares content
- Three render modes: `destructive`, `lazy` (default), and `eager`
- Signal-based active tab via `model<string>()` — two-way bindable with `[(activeTab)]`
- Optional icons in tab headers via the `icon` input on `fkt-tab`
- Tabs can be hidden dynamically via the `hidden` input
- `hideTabsWhenOnlyOne` suppresses the header when only one tab is visible
- Keyboard navigation via arrow keys (left/right)
- ARIA roles: `role="tablist"`, `role="tab"`, `aria-selected`, `role="tabpanel"`, `aria-labelledby`

## Configuration Options

<arg-types></arg-types>

## Render Modes

The `renderMode` input controls how tab content is managed in the DOM.

| Mode | Behavior | Use when |
|------|----------|----------|
| `lazy` *(default)* | Content is rendered on first visit and kept in DOM | Best for most cases — preserves state, avoids upfront cost |
| `eager` | All content is rendered immediately on mount | Content must be alive from the start (e.g., forms that track dirty state) |
| `destructive` | Content is destroyed and recreated on every navigation | Content should always be fresh (e.g., data that reloads on entry) |

> **Note on stateful content**: The render mode only affects components or templates declared inside `<ng-template fktTabLazy>`. Content projected directly as children of `<fkt-tab>` is part of the parent component's view and is not destroyed between navigations regardless of mode.

## Usage

```html
<fkt-tabs-list [(activeTab)]="activeTab" renderMode="lazy">
    <fkt-tab key="tab1" label="Tab 1">
        <p>Tab 1 content</p>
    </fkt-tab>
    <fkt-tab key="tab2" label="Tab 2" [hidden]="someCondition">
        <p>Tab 2 content</p>
    </fkt-tab>
</fkt-tabs-list>
```

## Accessibility

- `role="tablist"` on the header container
- `role="tab"` and `aria-selected` on each tab button
- `role="tabpanel"` and `aria-labelledby` on each content panel, linked to its corresponding tab button via `id`
- Arrow key navigation cycles through visible tabs
- Tab key moves focus in and out of the tab list (not between tabs)
