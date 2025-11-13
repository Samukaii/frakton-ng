## Key Features

- **Custom Icons**: Configurable icon with adjustable size
- **Flexible Content**: Title, description, and action button support
- **Action Integration**: Built-in button actions for user guidance
- **Responsive Design**: Adapts to container size and content
- **Consistent Styling**: Follows design system typography and spacing
- **Reusable Configuration**: Type-safe configuration interface
- **Accessibility**: Screen reader friendly with proper semantic structure

## Configuration Options
<arg-types></arg-types>

## Types
```typescript
import {FktIconName} from "frakton-ng/icon";
import {FktButtonAction} from "frakton-ng/button";

interface FktNoResults {
    label: string;                    // Main heading text (required)
    icon?: {                         // Optional icon configuration
        name: FktIconName;            // Icon name from icon library
        size?: string;                // Icon size (default: '116px')
    };
    description?: string;             // Optional descriptive text
    action?: FktButtonAction;         // Optional action button
}
```


## Use Cases

Ideal for search results, data tables, file listings, user lists, shopping carts, and any scenario where empty states need clear communication and user guidance. Perfect for integration with tables, autocomplete components, and custom lists.

## Accessibility

- **Semantic Structure**: Uses proper heading hierarchy (h3)
- **Screen Reader Support**: All text content is accessible
- **Focus Management**: Action buttons receive proper focus
- **ARIA Labels**: Icons have appropriate ARIA attributes
- **High Contrast**: Supports system high contrast modes

## Performance

- **Lightweight**: Minimal DOM structure and styling
- **No Heavy Dependencies**: Uses only core Angular features
- **Efficient Rendering**: Simple template with conditional rendering
- **Memory Efficient**: No complex state management

