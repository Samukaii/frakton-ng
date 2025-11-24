## Key Features

- **Interactive Selection**: Click to open dropdown with available badge options
- **Visual Preview**: Shows currently selected badge with proper styling
- **Overlay System**: Uses smart positioning to avoid viewport overflow
- **Type Safety**: Generic component with strongly typed ID values
- **Two-Way Binding**: Seamless integration with reactive forms and signals
- **Keyboard Navigation**: Full accessibility support with keyboard interaction
- **Signal-Based**: Built with Angular signals for optimal performance

## Configuration Options

<arg-types></arg-types>

### Types

```ts
import {FktTagColor} from "frakton-ng/tag";

export interface FktTag<Id extends string = string> {
    id: Id;
    name: string;
    color: FktTagColor;
}
```

### Two-Way Binding

The component supports Angular's two-way binding syntax:

```html

<fkt-tag-selector
    [options]="statusOptions"
    [(value)]="selectedStatus"
/>
```

## Use Cases

### Status Management

Perfect for managing entity status:

- Order and shipping status
- Project and task status
- User account status
- System health indicators

### Category Selection

Ideal for categorization interfaces:

- Content categories
- Product classifications
- Department assignments
- Priority levels

### Team and Assignment

Great for team management:

- Team member assignments
- Department selection
- Role assignments
- Responsibility areas

### Configuration

Essential for settings and preferences:

- Theme and appearance
- Notification preferences
- Access levels
- Feature toggles

## Accessibility

- **Keyboard Navigation**: Full keyboard support for opening and navigating options
- **Screen Reader Support**: Proper ARIA labels and announcements
- **Focus Management**: Logical focus flow between selector and options
- **High Contrast**: Supports system high contrast modes
- **State Communication**: Selection changes are clearly communicated

## Performance

- **Lazy Loading**: Dropdown content created only when opened
- **Efficient Rendering**: Optimized change detection with Angular signals
- **Memory Management**: Proper cleanup of overlay references
- **Type Safety**: Compile-time type checking for tag IDs
