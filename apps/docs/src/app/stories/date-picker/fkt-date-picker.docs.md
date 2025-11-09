The **FktDatePicker** component provides an intuitive and accessible date selection interface. Built with Angular signals and reactive forms, it offers a clean input field with a calendar overlay for date selection.

## Key Features

- **Calendar Interface**: Beautiful calendar modal with month/year navigation
- **Input Field**: Clean text input with automatic date formatting
- **Form Integration**: Seamless integration with SignalFormControl and reactive forms
- **Date Validation**: Built-in validation for date format and validity
- **Keyboard Support**: Full keyboard navigation and accessibility
- **Flexible Positioning**: Smart overlay positioning to avoid viewport overflow
- **Custom Styling**: Consistent design that matches your application theme
- **Locale Support**: Adapts to different date formats and locales

## Configuration Options

<arg-types></arg-types>

### Date Format Support

The component supports various date input formats:

- ISO strings: `"2024-12-31"`
- Date objects: `new Date(2024, 11, 31)`
- Formatted strings: `"12/31/2024"`, `"31-12-2024"`

### Calendar Features

- **Month Navigation**: Previous/next month buttons
- **Year Selection**: Click year to open year picker
- **Today Highlight**: Current date is visually highlighted
- **Weekend Styling**: Weekends can have different styling
- **Outside Click**: Calendar closes when clicking outside

## Examples

<story-examples></story-examples>

## Use Cases

### Event Planning

Perfect for scheduling and event management:

- Meeting scheduling
- Event planning
- Appointment booking
- Deadline setting

### Data Entry

Ideal for forms requiring date input:

- Registration forms
- Profile information
- Transaction records
- Historical data entry

### Filtering and Search

Great for date-based filtering:

- Date range filters
- Report generation
- Data analysis
- Search criteria

### Booking Systems

Essential for reservation systems:

- Hotel bookings
- Flight reservations
- Table reservations
- Service appointments

## Accessibility

- **Keyboard Navigation**: Full keyboard support with arrow keys and Enter/Escape
- **Screen Reader Support**: Proper ARIA labels and calendar structure
- **Focus Management**: Logical focus flow between input and calendar
- **High Contrast**: Supports system high contrast modes
- **Label Association**: Proper label-input relationships
- **Date Announcements**: Selected dates are announced to screen readers
