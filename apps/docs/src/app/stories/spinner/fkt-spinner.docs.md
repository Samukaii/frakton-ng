## Key Features

- **Configurable Size**: Adjustable spinner diameter
- **Stroke Width Control**: Customizable border thickness
- **Color Themes**: Multiple predefined color options
- **CSS Custom Properties**: Uses modern CSS variables for styling
- **Lightweight**: Minimal DOM structure with pure CSS animation
- **Responsive**: Scales appropriately in different containers
- **Accessibility**: Screen reader friendly loading indicator
- **Performance**: Hardware-accelerated CSS animations

## Configuration Options

<arg-types></arg-types>

### FktColor Type

```typescript
type FktColor = 'primary' | 'yellow' | 'red' | 'green';
```

## Use Cases

Perfect for loading states, button loading indicators, table loading overlays, search results, file uploads, and any async operation requiring user feedback. Ideal for integration with HTTP interceptors and form validation.

## Accessibility

- **ARIA Labels**: Can be enhanced with loading announcements
- **Screen Reader Support**: Semantic loading indication
- **Reduced Motion**: Respects user's motion preferences
- **Focus Management**: Does not interfere with focus flow

## Performance

- **CSS Animations**: Uses hardware-accelerated CSS transforms
- **No JavaScript Animation**: Pure CSS for better performance
- **Lightweight DOM**: Minimal HTML structure
- **Memory Efficient**: No complex state or subscriptions

