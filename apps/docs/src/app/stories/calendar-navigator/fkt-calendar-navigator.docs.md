## Key Features

- **Multiple Modes**: Switch between 'month' and 'year' display modes
- **Modal Integration**: Opens detailed calendar modals for date/month/year selection
- **Navigation Controls**: Previous/next navigation with customizable button states
- **Two-way Binding**: Reactive date binding with model signals
- **Overlay System**: Advanced modal positioning and management
- **Click Navigation**: Clickable month/year labels that open selection modals
- **Responsive Design**: Adapts to different screen sizes and containers

## Configuration Options

<arg-types></arg-types>

### Types

```typescript
type FktCalendarNavigatorMode = 'month' | 'year';
```

### Navigation Behavior

- **Month Mode**: Previous/Next buttons navigate by month, Month/Year labels open selection modals
- **Year Mode**: Previous/Next buttons navigate by year, Year label opens multi-year selection modal

## Use Cases

Perfect for date picker headers, event calendar controls, dashboard date filters, and appointment scheduling interfaces. Integrates seamlessly with form controls and data filtering systems.

## Accessibility

- **Keyboard Navigation**: Tab navigation through controls
- **Screen Reader Support**: Proper ARIA labels for navigation buttons
- **Focus Management**: Logical focus flow through interactive elements
- **Date Announcements**: Screen readers announce selected dates


