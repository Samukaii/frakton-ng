# Calendar

The **FktCalendar** component provides a comprehensive date selection interface with multiple view modes and extensive customization options. Built with Angular signals for optimal performance and reactivity, it supports date, month, and year selection with configurable styling and behavior.

## Key Features

- **Multi-View Navigation**: Seamlessly switch between date, month, and year selection modes
- **Signal-Based Architecture**: Built with modern Angular signals for optimal performance and reactivity
- **Extensive Customization**: Configure date appearance, behavior, and styling through flexible configuration functions
- **Borderless Design**: Optional borderless mode for seamless integration into existing layouts
- **Responsive Design**: Automatically adapts to different screen sizes and viewport constraints
- **Two-Way Data Binding**: Full support for Angular's two-way binding with models
- **Accessibility Ready**: Built with accessibility considerations and keyboard navigation support

## Configuration Options

<arg-types></arg-types>

### Types

```typescript
// Calendar step types - defines the current view mode
export type FktCalendarStep = 'date' | 'month' | 'year';

// Date configuration interface for customizing individual dates
export interface FktCalendarDateConfig {
    date: string;                    // ISO date string for the date
    onClick?: () => void;            // Custom click handler for the date
    isCurrentDate: boolean;          // Whether this date is currently selected
    isToday: boolean;               // Whether this date is today
    classes: string[];              // CSS classes to apply to the date
}

// Partial options for date configuration (excludes mandatory fields)
export type FktCalendarDateOptions = Partial<
    Omit<FktCalendarDateConfig, 'date' | 'isCurrentDate'>
>;

// Configuration function type for customizing dates
export type FktCalendarDateConfigFn = (date: Date) => FktCalendarDateOptions;
```

## Examples

<story-examples></story-examples>

## Component Architecture

The FktCalendar component is built with a modular architecture consisting of several specialized sub-components:

### Core Components

- **FktCalendarComponent**: Main calendar container and state management
- **CalendarDateSelectorComponent**: Date grid and individual date selection
- **CalendarMonthSelectorComponent**: Month selection grid
- **CalendarYearSelectorComponent**: Year selection grid

### Header Components

- **CalendarMonthHeaderComponent**: Navigation for date view (month/year selection)
- **CalendarYearHeaderComponent**: Navigation for month view (year selection)
- **CalendarMultiYearHeaderComponent**: Navigation for year view (multi-year range)

### State Management

The calendar uses a signal-based state management approach:

- `step` signal controls the current view mode
- `currentDate` model provides two-way binding for the selected date
- `lastStep` tracks previous view for proper navigation

## Use Cases

**Date Pickers**: Perfect for form inputs requiring date selection with calendar interface.

**Event Schedulers**: Ideal for scheduling applications where users need to select dates for events or appointments.

**Date Range Selectors**: Great for booking systems, report date ranges, and period selection interfaces.

**Dashboard Filters**: Useful for analytics dashboards requiring date-based filtering and navigation.

**Content Management**: Excellent for CMS systems where content publication dates need to be selected.

**Booking Systems**: Perfect for reservation systems, hotel bookings, and appointment scheduling.

## Accessibility

**Keyboard Navigation**: Full keyboard support with arrow keys, Enter, and Escape for navigation and selection.

**Screen Reader Support**: Proper ARIA labels and announcements for date information and navigation state.

**Focus Management**: Logical tab order and visible focus indicators throughout all calendar views.

**High Contrast Support**: Compatible with high contrast themes and user accessibility preferences.

**Semantic HTML**: Proper semantic structure with appropriate heading hierarchy and landmarks.

## Performance

**Signal-Based Reactivity**: Efficient change detection using Angular signals for optimal performance.

**Component Modularity**: Lazy loading of sub-components reduces initial bundle size.

**Efficient Rendering**: Only re-renders components when relevant data changes.

**Memory Management**: Proper cleanup of event listeners and subscriptions.

**Optimized Calculations**: Efficient date calculations and caching for better performance.
