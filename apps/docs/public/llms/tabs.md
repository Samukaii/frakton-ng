# Components/Navigation/Tabs

## Metadata

- id: tabs
- type: story
- route: /docs/tabs
- title: Components/Navigation/Tabs
- component: FktTabsListComponent
- import: `import { FktTabsListComponent } from 'frakton-ng/tabs';`

## Description

A compound component for organising content into named panels, with lazy, eager, and destructive render strategies.

## Features

### BasicUsage

- id: basic-usage
- type: story
- component: TabsBasicComponent

Default tabs using lazy rendering. Content is created on first visit and kept in DOM when switching away.

Example component: `TabsBasicComponent`

```ts title="tabs-basic.component.ts"
import { Component } from '@angular/core';
import { FktTabsListComponent, FktTabComponent } from 'frakton-ng/tabs';

@Component({
    selector: 'fkt-tabs-basic',
    imports: [
        FktTabsListComponent,
        FktTabComponent,
    ],
    templateUrl: './tabs-basic.component.html',
    styleUrl: './tabs-basic.component.scss',
})
export class TabsBasicComponent {}
```

```html title="tabs-basic.component.html"
<fkt-tabs-list>
    <fkt-tab key="overview" label="Overview">
        <p>The overview tab is selected by default. Tab content is rendered lazily — other tabs are only created when first visited.</p>
    </fkt-tab>
    <fkt-tab key="features" label="Features">
        <p>Once visited, this tab's content stays in the DOM. Switching away and back does not re-render it.</p>
    </fkt-tab>
    <fkt-tab key="usage" label="Usage">
        <p>Use <code>[(activeTab)]</code> to control or read the selected tab from outside the component.</p>
    </fkt-tab>
</fkt-tabs-list>
```

```css title="tabs-basic.component.scss"
p {
    margin: 0;
    color: var(--fkt-color-neutral-700);
    font-size: var(--fkt-font-size-md);
    line-height: 1.6;
}

code {
    background: var(--fkt-color-neutral-100);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
}
```

### WithIcons

- id: with-icons
- type: story
- component: TabsWithIconsComponent

Tab headers with icons alongside labels. Pass an icon name via the `icon` input on each `fkt-tab`.

Example component: `TabsWithIconsComponent`

```ts title="tabs-with-icons.component.ts"
import { Component } from '@angular/core';
import { FktTabsListComponent, FktTabComponent } from 'frakton-ng/tabs';

@Component({
    selector: 'fkt-tabs-with-icons',
    imports: [
        FktTabsListComponent,
        FktTabComponent,
    ],
    templateUrl: './tabs-with-icons.component.html',
    styleUrl: './tabs-with-icons.component.scss',
})
export class TabsWithIconsComponent {}
```

```html title="tabs-with-icons.component.html"
<fkt-tabs-list>
    <fkt-tab key="profile" label="Profile" icon="user">
        <p>Manage your personal information and preferences.</p>
    </fkt-tab>
    <fkt-tab key="security" label="Security" icon="lock-closed">
        <p>Configure password, two-factor authentication, and active sessions.</p>
    </fkt-tab>
    <fkt-tab key="notifications" label="Notifications" icon="bell">
        <p>Choose which events trigger email or in-app notifications.</p>
    </fkt-tab>
</fkt-tabs-list>
```

```css title="tabs-with-icons.component.scss"
p {
    margin: 0;
    color: var(--fkt-color-neutral-700);
    font-size: var(--fkt-font-size-md);
    line-height: 1.6;
}
```

### RenderModes

- id: render-modes
- type: story
- component: TabsRenderModesComponent

Comparison of all three render modes. Each section uses `fktTabLazy` content with a counter component so state destruction and preservation are clearly visible when switching tabs.

Example component: `TabsRenderModesComponent`

```ts title="tabs-render-modes.component.ts"
import { Component } from '@angular/core';
import { FktTabsListComponent, FktTabComponent, FktTabLazyDirective } from 'frakton-ng/tabs';
import { TabCounterComponent } from './tab-counter.component';
import { FktTagComponent } from 'frakton-ng/tag';

@Component({
    selector: 'fkt-tabs-render-modes',
    imports: [
        FktTabsListComponent,
        FktTabComponent,
        FktTabLazyDirective,
        TabCounterComponent,
        FktTagComponent,
    ],
    templateUrl: './tabs-render-modes.component.html',
    styleUrl: './tabs-render-modes.component.scss',
})
export class TabsRenderModesComponent {}
```

```html title="tabs-render-modes.component.html"
<div class="demo">
    <div class="demo__header">
        <h3 class="demo__title">Lazy <fkt-tag color="info" text="default" class="demo__badge"></fkt-tag></h3>
        <p class="demo__hint">Increment the counter, switch tabs, come back — count is preserved after first visit.</p>
    </div>
    <fkt-tabs-list renderMode="lazy">
        <fkt-tab key="a" label="Tab A">
            <ng-template fktTabLazy>
                <fkt-tab-counter />
            </ng-template>
        </fkt-tab>
        <fkt-tab key="b" label="Tab B">
            <ng-template fktTabLazy>
                <fkt-tab-counter />
            </ng-template>
        </fkt-tab>
        <fkt-tab key="c" label="Tab C">
            <ng-template fktTabLazy>
                <fkt-tab-counter />
            </ng-template>
        </fkt-tab>
    </fkt-tabs-list>
</div>

<div class="demo">
    <div class="demo__header">
        <h3 class="demo__title">Eager</h3>
        <p class="demo__hint">All counters are rendered upfront. Count is always preserved regardless of visit order.</p>
    </div>
    <fkt-tabs-list renderMode="eager">
        <fkt-tab key="a" label="Tab A">
            <ng-template fktTabLazy>
                <fkt-tab-counter />
            </ng-template>
        </fkt-tab>
        <fkt-tab key="b" label="Tab B">
            <ng-template fktTabLazy>
                <fkt-tab-counter />
            </ng-template>
        </fkt-tab>
        <fkt-tab key="c" label="Tab C">
            <ng-template fktTabLazy>
                <fkt-tab-counter />
            </ng-template>
        </fkt-tab>
    </fkt-tabs-list>
</div>

<div class="demo">
    <div class="demo__header">
        <h3 class="demo__title">Destructive</h3>
        <p class="demo__hint">Increment the counter, switch tabs, come back — count resets because the component is destroyed.</p>
    </div>
    <fkt-tabs-list renderMode="destructive">
        <fkt-tab key="a" label="Tab A">
            <ng-template fktTabLazy>
                <fkt-tab-counter />
            </ng-template>
        </fkt-tab>
        <fkt-tab key="b" label="Tab B">
            <ng-template fktTabLazy>
                <fkt-tab-counter />
            </ng-template>
        </fkt-tab>
        <fkt-tab key="c" label="Tab C">
            <ng-template fktTabLazy>
                <fkt-tab-counter />
            </ng-template>
        </fkt-tab>
    </fkt-tabs-list>
</div>
```

```css title="tabs-render-modes.component.scss"
.demo {
    display: flex;
    flex-direction: column;
    gap: var(--fkt-space-sm);

    & + .demo {
        margin-top: var(--fkt-space-xl);
        padding-top: var(--fkt-space-xl);
        border-top: solid 1px var(--fkt-color-neutral-200);
    }

    &__header {
        display: flex;
        flex-direction: column;
        gap: var(--fkt-space-xs);
    }

    &__title {
        margin: 0;
        font-size: var(--fkt-font-size-md);
        font-weight: var(--fkt-font-semibold);
        color: var(--fkt-color-neutral-900);
        display: flex;
        align-items: center;
        gap: var(--fkt-space-xs);
    }

    &__badge {
        font-size: var(--fkt-font-size-xs);
        font-weight: var(--fkt-font-normal);
        background: var(--fkt-color-neutral-100);
        color: var(--fkt-color-neutral-600);
        padding: 2px 8px;
        border-radius: 99px;
    }

    &__hint {
        margin: 0;
        font-size: var(--fkt-font-size-sm);
        color: var(--fkt-color-neutral-600);
    }
}
```

## API Reference

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
