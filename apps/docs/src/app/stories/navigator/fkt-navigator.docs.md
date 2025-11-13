## Key Features

- **Flexible Content**: Center content area using Angular's content projection
- **Navigation Controls**: Previous and next buttons with customizable states
- **Disabled State Support**: Individual control over button availability
- **Consistent Styling**: Uniform appearance across different use cases
- **Icon Integration**: Built-in chevron icons for navigation direction
- **Event Emission**: Clean event handling for navigation actions
- **Responsive Layout**: Proper spacing and alignment on all screen sizes

## Configuration Options

<arg-types></arg-types>


### Content Projection

The component accepts any content between its tags, which will be centered between the navigation buttons.

## Use Cases

Perfect for page navigation, date navigation, item browsing, image galleries, multi-step forms, wizards, and any scenario requiring previous/next navigation patterns. Ideal for data pagination and sequential content display.

## Accessibility

- **Keyboard Navigation**: Tab navigation between buttons
- **Screen Reader Support**: Proper ARIA labels on navigation buttons
- **Focus Management**: Logical focus flow
- **Disabled State**: Proper disabled attribute handling
- **Semantic HTML**: Uses button elements for interactive controls

## Performance

- **Event Handling**: Efficient event emission without unnecessary processing
- **Content Projection**: Minimal overhead for content rendering
- **Button States**: Reactive updates without full re-rendering
- **Memory Management**: No subscriptions or complex state management
