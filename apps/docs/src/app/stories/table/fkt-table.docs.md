# Table

_A powerful and flexible table component for displaying tabular data with dynamic columns, row actions, loading states, and customizable empty states. Built with Angular signals for optimal performance and provides extensive customization options for real-world data display scenarios._

## Key Features

- **Dynamic Column Configuration**: Function-based column definitions that adapt to your data structure
- **Row Actions**: Customizable action buttons for each table row with conditional visibility
- **Loading States**: Built-in loading spinner with customizable messaging
- **Empty State Management**: Rich empty states with icons, descriptions, and action buttons
- **Flexible Cell Types**: Support for different cell renderers including default and action cells
- **Custom Row Styling**: Function-based row class generation for conditional styling
- **Header Actions**: Main action button in table header for global operations
- **Signal-Based Performance**: Built with Angular signals for efficient updates
- **Type Safety**: Full TypeScript support with generic types for your data models

## Configuration Options

<arg-types></arg-types>

### Types

```typescript
// Core table interfaces
interface TableColumn {
    position: string;        // Column order identifier
    name: string;           // Display name in header
    cell: TableCell;        // Cell configuration
}

interface TableCell<Type extends TableCellType = TableCellType> {
    type: Type;             // Cell renderer type: 'default' | 'with-action'
    options: ComponentData<InstanceType<TableCellsMapping[Type]>>;
}

interface TableAction {
    classes?: string[];     // CSS classes for action button
    name: string;          // Action identifier
    condition: boolean;    // Whether to show the action
    icon: IconName;        // Icon for the action button
    click: () => void;     // Action handler
}

// Function types for dynamic behavior
type TableColumnFn<T extends FktIdentifiable> = (item: T) => TableColumn[];
type TableActionFn<T extends FktIdentifiable> = (item: T) => TableAction[];
type TableClassesFn<T extends FktIdentifiable> = (item: T) => string;

// Data requirements
interface FktIdentifiable {
    id: number | string;   // Required unique identifier
}
```

## Examples

<story-examples></story-examples>

## Use Cases

The Table component is ideal for various data display scenarios in modern web applications:

### Administrative Dashboards

Perfect for user management, system monitoring, and configuration interfaces where data needs to be presented clearly with actionable controls.

### Data Management Interfaces

Excellent for CRM systems, inventory management, and database frontends where users need to view, edit, and interact with large datasets.

### Content Management Systems

Great for article listings, media libraries, and any content that requires tabular organization with bulk and individual actions.

### Analytics and Reporting

Suitable for displaying metrics, logs, and analytical data with sorting, filtering, and export capabilities.

### E-commerce Platforms

Ideal for product catalogs, order management, and customer data where visual status indicators and quick actions are essential.

## Accessibility

### Keyboard Navigation

- **Tab Navigation**: Full keyboard support for navigating through table headers, action buttons, and interactive elements
- **Enter/Space**: Activates action buttons and interactive elements within table cells
- **Arrow Keys**: Native browser support for navigating table cells when using screen readers

### Screen Reader Support

- **Table Structure**: Proper HTML table markup with thead, tbody, and semantic structure
- **Header Association**: Table headers are properly associated with data cells
- **Action Announcements**: Row actions are properly labeled and announced to screen readers
- **State Communication**: Loading states and empty states are communicated through accessible text

### Focus Management

- **Logical Order**: Focus flows naturally through table headers and row actions
- **Visual Indicators**: Clear focus indicators on all interactive elements
- **Skip Patterns**: Efficient navigation patterns for large tables

### ARIA Support

- **Role Attributes**: Proper ARIA roles for table structure and interactive elements
- **State Attributes**: Dynamic ARIA states for loading, expanded/collapsed states
- **Label Associations**: Comprehensive labeling for action buttons and controls

### High Contrast Support

- **Color Independence**: All information is conveyed through multiple channels (color, text, icons)
- **Contrast Ratios**: Text and interactive elements meet WCAG contrast requirements
- **System Integration**: Respects user's high contrast mode preferences

## Performance

### Efficient Rendering

- **Angular Signals**: Built with Angular signals for optimal change detection and rendering performance
- **OnPush Strategy**: Uses OnPush change detection for efficient updates
- **Virtual Scrolling Ready**: Compatible with Angular CDK virtual scrolling for large datasets

### Memory Management

- **Function References**: Proper handling of function references to avoid memory leaks
- **Event Cleanup**: Automatic cleanup of event listeners and subscriptions
- **Computed Values**: Efficient computation of derived values using Angular signals

### Bundle Optimization

- **Tree Shakable**: Only used components are included in the final bundle
- **Minimal Dependencies**: Uses only essential Angular and Frakton components
- **Efficient Imports**: Barrel exports for optimal import patterns
