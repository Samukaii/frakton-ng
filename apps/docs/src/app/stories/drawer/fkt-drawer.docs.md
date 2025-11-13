## Key Features

- **Dual Display Modes**: Push mode (displaces content) and overlay mode (floats over content)
- **Configurable Width**: Customizable drawer width to fit content needs
- **Smooth Animations**: CSS-based transitions for opening and closing
- **Backdrop Support**: Optional backdrop with click-to-close functionality in overlay mode
- **Signal-Based**: Built with Angular signals for optimal performance
- **Responsive Design**: Adapts to different screen sizes and orientations
- **Event Handling**: Comprehensive event system for user interactions

## Configuration Options

### Types

```typescript
export type FktDrawerTypes = 'overlay' | 'push';
```

<arg-types></arg-types>

## Use Cases

- **Navigation Menus**: Primary and secondary navigation interfaces
- **Settings Panels**: Application configuration and user preferences
- **Filters and Search**: Advanced filtering and search interfaces
- **Shopping Carts**: E-commerce cart and checkout processes
- **Document Outlines**: Content navigation and table of contents
- **Toolbar Extensions**: Additional tools and options

## Accessibility

- **Keyboard Navigation**: Full keyboard support with Tab and Escape keys
- **Focus Management**: Proper focus handling when drawer opens/closes
- **Screen Reader Support**: Appropriate ARIA attributes and announcements
- **Color Contrast**: High contrast support for visual accessibility
- **Motion Preferences**: Respects user's reduced motion preferences
- **Touch Friendly**: Optimized for touch interactions on mobile devices

## Performance

- **Efficient Animations**: Hardware-accelerated CSS transitions
- **Signal-Based Updates**: Optimized change detection with Angular signals
- **Memory Management**: Proper cleanup of event listeners and subscriptions
- **Responsive Rendering**: Efficient handling of viewport changes
