The **FktButtonsList** component provides a flexible container for displaying multiple buttons with consistent spacing and alignment. Built with Angular signals and customizable layout options, it supports both horizontal and vertical orientations with various alignment strategies.

## Key Features

- **Flexible Layouts**: Horizontal and vertical orientation options
- **Smart Alignment**: Multiple alignment options for precise positioning
- **Fill Options**: Buttons can expand to fill available space
- **Action Integration**: Seamless integration with FktButtonAction interface
- **Context Support**: Generic context passing for action handlers
- **Tooltip Support**: Built-in tooltip integration for enhanced UX
- **Responsive Design**: Adapts to container size and orientation
- **Signal-Based**: Built with Angular signals for optimal performance

## Configuration Options

<arg-types></arg-types>

## Types

```typescript
import {FktIconName} from "frakton-ng/icon";
import {FktButtonTheme, FktButtonVariant} from "frakton-ng/button";
import {FktColor} from "frakton-ng/core";

interface FktButtonAction<Context = any> {
    identifier: string;          // Unique identifier for the action
    text?: string;              // Button text content
    icon?: FktIconName;         // Optional icon
    iconPosition?: 'left' | 'right'; // Icon position
    theme?: FktButtonTheme;     // Button theme (raised, stroked, basic)
    variant?: FktButtonVariant; // Button variant (default, icon, rect)
    color?: FktColor;           // Button color
    loading?: boolean;          // Loading state
    disabled?: boolean;         // Disabled state
    tooltip?: string;           // Tooltip text
    click?: (context: Context) => void; // Click handler function
}


```

## Examples

<div data-examples></div>

### Layout Options

#### Orientation

- **`horizontal`**: Buttons arranged in a row
- **`vertical`**: Buttons arranged in a column

#### Alignment Options

- **`start`**: Align to start of container
- **`space-between`**: Even spacing between buttons
- **`space-evenly`**: Equal spacing around all buttons
- **`space-around`**: Equal spacing around each button
- **`end`**: Align to end of container

## Use Cases

### Form Actions

Perfect for form button groups:

- Submit, cancel, and reset buttons
- Multi-step form navigation
- Save draft and publish actions
- Form validation controls

### Data Tables

Ideal for table action buttons:

- Row-level CRUD operations
- Bulk action controls
- Export and import functions
- Status change buttons

### Navigation

Great for navigation interfaces:

- Sidebar navigation menus
- Tab-based navigation
- Breadcrumb actions
- Page controls

### Toolbar Actions

Essential for toolbar implementations:

- Editor toolbars
- Action bars
- Context menus
- Quick action panels

## Accessibility

- **Keyboard Navigation**: Full keyboard support with Tab navigation
- **Screen Reader Support**: Button actions properly announced
- **Focus Management**: Logical focus flow between buttons
- **Tooltip Integration**: Enhanced context with accessible tooltips
- **High Contrast**: Supports system high contrast modes
- **ARIA Labels**: Proper labeling for complex button groups

## Performance

- **Efficient Rendering**: Optimized button rendering with OnPush strategy
- **Context Passing**: Efficient context handling without unnecessary re-renders
- **Memory Management**: Proper cleanup of event handlers
- **Signal-Based**: Built with Angular signals for optimal performance
