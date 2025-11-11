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
export type FktBadgeColor = 'green' | 'red' | 'blue' | 'orange';

export type FktBadgeVariant = 'opaque' | 'faded';
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
- Notification badges
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
