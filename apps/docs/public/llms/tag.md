# Components/Data Display/Tag

## Metadata

- id: tag
- type: story
- route: /docs/tag
- title: Components/Data Display/Tag
- component: FktTagComponent
- import: `import { FktTagComponent } from 'frakton-ng/tag';`

## Description

The FktTag component provides a visual indicator for status, categories, counts, and other contextual information. Built with Angular signals and flexible styling options, it offers semantic color coding and variant styles for different visual prominence levels.

## Features

### SuccessTag

- id: success-tag
- type: story

A standard badge with success state and opaque styling, perfect for status indicators.

### ErrorTag

- id: error-tag
- type: story

Badge showing error state with red color for urgent attention.

### WarningTag

- id: warning-tag
- type: story

Badge with orange color for warnings and pending states that need attention.

### InfoTag

- id: info-tag
- type: story

Badge with blue color for informational content and faded variant for subtle display.

### TagVariations

- id: tag-variations
- type: story
- component: TagVariationsExampleComponent

Comprehensive showcase of all available colors and variants, demonstrating the full range of badge styling options.

Example component: `TagVariationsExampleComponent`

```ts title="tag-variations-example.component.ts"
import { Component } from '@angular/core';
import { FktTagComponent } from 'frakton-ng/tag';

@Component({
	selector: 'tag-variations-example',
	imports: [
		FktTagComponent
	],
	styleUrl: './tag-variations-example.component.scss',
	templateUrl: './tag-variations-example.component.html'
})
export class TagVariationsExampleComponent {

}
```

```html title="tag-variations-example.component.html"
<div class="container">
    <div class="container__item">
        <h2>Opaque Variant</h2>
        <div>
            <fkt-tag text="Success" color="success" variant="opaque"/>
            <fkt-tag text="Danger" color="danger" variant="opaque"/>
            <fkt-tag text="Info" color="info" variant="opaque"/>
            <fkt-tag text="Warning" color="warning" variant="opaque"/>
        </div>
    </div>
    <div class="container__item">
        <h2>Faded Variant</h2>
        <div>
            <fkt-tag text="Success" color="success" variant="faded"/>
            <fkt-tag text="Danger" color="danger" variant="faded"/>
            <fkt-tag text="Info" color="info" variant="faded"/>
            <fkt-tag text="Warning" color="warning" variant="faded"/>
        </div>
    </div>
</div>
```

```css title="tag-variations-example.component.scss"
.container {
    display: flex;
    flex-direction: column;
    gap: var(--fkt-space-md);
}

.container__item {
    display: flex;
    flex-direction: column;
    gap: var(--fkt-space-xs);
}

.container__item h2 {
    font-size: var(--fkt-font-size-lg);
    font-weight: var(--fkt-font-semibold);
    border-bottom: solid 1px var(--fkt-color-neutral-200);
    padding-bottom: var(--fkt-space-3xs);
}

.container__item > div {
    display: flex;
    align-items: center;
    gap: var(--fkt-space-xs);
    flex-wrap: wrap;
}
```

### CountTag

- id: count-tag
- type: story

Numerical badges perfect for displaying counts, quantities, and numbers.

### StatusTag

- id: status-tag
- type: story

Status indicators for workflow states, item conditions, and process stages.

### PriorityTag

- id: priority-tag
- type: story

Priority indicators for tasks, issues, and items requiring attention levels.

### CategoryTag

- id: category-tag
- type: story

Category and classification badges for organizing and labeling content.

### LongTextTag

- id: long-text-tag
- type: story

Badges with longer text content demonstrating text handling and wrapping.

## API Reference

## Key Features

- **Semantic Colors**: Green, red, blue, and orange color options for different states
- **Visual Variants**: Opaque and faded styles for different prominence levels
- **Flexible Content**: Supports text content with automatic sizing
- **Responsive Design**: Adapts to content and container sizes
- **Accessibility**: Proper contrast ratios and readable text
- **Signal-Based**: Built with Angular signals for optimal performance

## Configuration Options

<arg-types></arg-types>

### Types

```ts
export type FktTagColor = 'green' | 'red' | 'blue' | 'orange';

export type FktTagVariant = 'opaque' | 'faded';
```

## Use Cases

### Status Indicators

Perfect for showing state and status:

- Order and payment status
- User activity states
- System health indicators
- Process completion status

### Categorization

Ideal for content organization:

- Product categories and types
- Content tags and labels
- Feature indicators
- Classification systems

### Notifications

Great for alert and notification systems:

- Unread message counts
- Alert indicators
- Activity counters

### Data Visualization

Essential for dashboard and reporting:

- Metric indicators
- Performance badges
- Quality scores
- Achievement markers

## Accessibility

- **Color Independence**: Information is not conveyed through color alone
- **Contrast Ratios**: Meets WCAG contrast requirements for text readability
- **Screen Reader Support**: Badge content is properly announced
- **Semantic Meaning**: Color choices reflect common semantic associations
- **Text Clarity**: Readable text sizes and font weights

## Performance

- **Lightweight**: Minimal CSS and JavaScript footprint
- **Efficient Rendering**: Optimized change detection with Angular signals
- **Memory Efficient**: No complex state management or subscriptions
