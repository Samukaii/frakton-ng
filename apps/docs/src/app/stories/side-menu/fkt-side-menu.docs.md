

# Side Menu

_A responsive and customizable side navigation menu component with collapsible states, grouped menu items, and integrated routing support. Built with Angular signals for optimal performance and provides tooltips for collapsed states._

## Key Features

- **Collapsible Navigation**: Seamless transition between expanded and collapsed states
- **Menu Groups**: Organize navigation items into logical groups with optional headers
- **Router Integration**: Built-in Angular Router support with active state highlighting
- **Tooltip Support**: Contextual tooltips when collapsed for better UX
- **Icon Integration**: Rich icon support using the Frakton icon system
- **Responsive Design**: Adapts to different screen sizes and touch interactions
- **Signal-Based State**: Built with Angular signals for efficient state management
- **Drawer Foundation**: Built on top of the robust FktDrawer component
- **Type Safety**: Full TypeScript support with strongly typed interfaces

## Configuration Options

<arg-types></arg-types>

### Types

```typescript
import {FktIconName} from "frakton-ng/icon";

interface FktMenuItem {
    name: string;           // Display name for the menu item
    icon: FktIconName;      // Icon identifier from Frakton icon set
    path: string;           // Router path for navigation
}

interface FktMenuGroup {
    name?: string;          // Optional group header text (if omitted, shows divider)
    items: FktMenuItem[];   // Array of menu items in this group
}
```

## Examples

<story-examples></story-examples>

## Use Cases

The Side Menu component is ideal for various navigation scenarios in modern web applications:

### Administrative Dashboards
Perfect for admin panels where users need quick access to management features like user administration, system monitoring, and configuration settings.

### Application Navigation
Excellent for main application navigation in complex apps with multiple sections, providing a persistent navigation structure that doesn't interfere with content.

### Content Management Systems
Great for CMS interfaces where editors need easy access to different content areas, media libraries, and administrative functions.

### E-commerce Platforms
Ideal for merchant dashboards where store owners need to navigate between inventory, orders, customers, and settings efficiently.

### Analytics and Reporting Platforms
Suitable for data-heavy applications where users need to navigate between different report types, dashboards, and data views.

### Multi-tenant Applications
Perfect for SaaS applications where different user roles need access to different features and sections based on their permissions.

## Accessibility

### Keyboard Navigation
- **Tab Navigation**: Full keyboard support for navigating through menu items and interactive elements
- **Enter/Space**: Activates menu items and triggers navigation
- **Escape**: Closes the menu when focused (if applicable)
- **Arrow Keys**: Navigate between menu items within groups

### Screen Reader Support
- **Navigation Landmarks**: Proper nav role and ARIA landmarks for menu structure
- **Menu Semantics**: Proper menubar, menu, and menuitem roles for screen reader understanding
- **State Announcements**: Expanded/collapsed states are announced to assistive technologies
- **Current Page**: Active menu item is properly identified and announced

### Focus Management
- **Logical Order**: Focus flows naturally through menu items and groups
- **Visual Indicators**: Clear focus indicators on all interactive menu items
- **Focus Restoration**: Proper focus management when menu state changes
- **Skip Navigation**: Support for skip-to-content patterns when needed

### ARIA Support
- **Role Attributes**: Proper ARIA roles for navigation and menu structure
- **State Attributes**: Dynamic ARIA states for expanded/collapsed menu
- **Label Associations**: Comprehensive labeling for menu items and groups
- **Current Page**: aria-current attribute for active navigation items

### Tooltip Accessibility
- **Keyboard Access**: Tooltips are accessible via keyboard when menu is collapsed
- **Screen Reader**: Tooltip content is available to screen readers
- **ARIA Descriptions**: Proper aria-describedby associations for tooltip content

### High Contrast Support
- **Color Independence**: Navigation state is conveyed through multiple channels (color, text, icons)
- **Contrast Ratios**: All text and interactive elements meet WCAG contrast requirements
- **System Integration**: Respects user's high contrast mode preferences

## Performance

### Efficient Rendering
- **Angular Signals**: Built with Angular signals for optimal change detection and rendering performance
- **OnPush Strategy**: Uses OnPush change detection for efficient updates
- **Smooth Transitions**: Hardware-accelerated CSS transitions for menu state changes
- **Lazy Loading**: Menu content can be lazily loaded for large navigation structures

### Memory Management
- **Signal Cleanup**: Automatic cleanup of signal subscriptions
- **Event Handling**: Efficient event listener management with proper cleanup
- **Router Integration**: Optimized router link handling without memory leaks

### Bundle Optimization
- **Tree Shakable**: Only used components are included in the final bundle
- **Minimal Dependencies**: Uses only essential Angular and Frakton components
- **Efficient Imports**: Barrel exports for optimal import patterns
- **Icon Optimization**: Icons are loaded efficiently through the Frakton icon system
