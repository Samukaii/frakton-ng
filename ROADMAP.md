# Frakton NG - Component Roadmap

## Current Status

Frakton NG has implemented **29 of 36** core components, achieving **81% functional parity** with Material Design.

The design system (tokens, theming, documentation) is **100% complete**.

---

## 🚀 Flagship Components

Frakton NG's primary architectural innovations:

### Overlay System
Unified, signal-based foundation for all floating/modal components with automatic type inference.
- Advanced TypeScript inference from component signal APIs (input, output, model)
- 16 intelligent positioning options with automatic fallbacks
- Reactive data binding — overlays update in real-time with signal changes
- Two-way binding support with model signals
- Component-agnostic design — same components work in overlays, dialogs, or standalone

### Color Picker
Advanced color selection with semantic color intelligence and universal accessibility.
- Interactive HSL, RGB, and HEX format support with real-time conversion
- Semantic color descriptions (e.g., "vibrant blue", "pale yellow-orange") for accessibility
- Color blind support — descriptions help users with color vision deficiencies
- Multilingual with built-in support for EN, PT-BR, ES, FR and extensible locale system
- Alpha channel control with visual feedback

### Table
Modular, type-safe data table with extensible cell system.
- Built-in cells: default, template, tag, avatar, badge, and 15+ pre-built variants
- Custom cell registration with full TypeScript inference — options auto-complete based on component signals
- Actions with callbacks and tooltips
- Pagination, sorting, filtering
- Designed to scale to 10k+ rows

---

## ✅ Implemented Components (29)

### Data Input (8)
- **Autocomplete** — Search with suggestions and filtering
- **Checkbox** — Multiple selection control
- **Input** — Text field with validation and states
- **Select** — Dropdown selection with search
- **Textarea** — Multi-line text input
- **Date Picker** — Calendar-based date selection
- **Color Picker** — Interactive color selection ⭐
- **Tag Selector** — Multi-select tags with creation

### Navigation (5)
- **Navigator** — Structured navigation menu
- **Side Menu** — Collapsible sidebar navigation
- **Drawer** — Slide-out panel with overlay ⭐
- **Paginator** — Page navigation controls
- **Calendar Navigator** — Month/year navigation

### Presentation (7)
- **Avatar** — User profile images
- **Icon** — Scalable icon system
- **Table** — Data display with actions and custom cells ⭐
- **Tag** — Semantic labels and categories
- **Divider** — Visual content separation
- **Buttons List** — Grouped button layouts
- **Calendar** — Standalone calendar display

### Feedback (7)
- **Dialog** — Modal window for user interactions (overlay-based)
- **Tooltip** — Contextual information on hover (overlay-based)
- **Overlay** — Unified backdrop and positioning system ⭐
- **Progress Bar** — Linear progress indication
- **Skeleton** — Loading placeholder
- **Spinner** — Circular loading indicator
- **No Results** — Empty state messaging

### Utilities (1)
- **FocusTrap** — Keyboard navigation management

---

## 🎯 Roadmap - 7 Components in Development

### Phase 1: Core Essentials (Q1 2026)

#### **Radio Button**
Exclusive selection within a group (single choice per group).
- States: default, hover, disabled, focus
- Keyboard support (arrow keys)
- Vertical and horizontal layouts
- Group management with labels

#### **Slide Toggle (Switch)** (Done)
Boolean state control with visual animation.
- On/off states with smooth transitions
- Disabled state support
- Accessible keyboard interaction
- Optional labels and descriptions

#### **Tabs** (Done)
Organize content into switchable views.
- Tab activation by click or keyboard
- Scrollable tabs for overflow
- Disabled tab states
- Dynamic tab addition/removal

#### **Menu Contextual**
Floating dropdown for context-specific actions (built on Overlay system).
- Positioned relative to trigger element
- Auto-positioning (top/bottom/left/right)
- Nested menu support
- Keyboard navigation and focus management

---

### Phase 2: Supporting Components (Q2 2026)

#### **Card**
Container for grouped content with visual elevation.
- Background color and shadow elevation levels
- Flexible header, content, and action sections
- Image support and padding control
- Hover states and clickable variants

#### **Badge**
Small indicator or counter overlay on elements.
- Numeric and dot variants
- Customizable colors and positions
- Accessible announcements
- Animation on value change

#### **Expansion Panel**
Collapsible content panel with smooth animations.
- Expanded/collapsed state toggle
- Header with icon and description
- Nested panels support
- Optional accordion behavior

#### **Snackbar**
Non-blocking notification messages (built on Overlay system).
- Auto-dismiss with configurable duration
- Action button support
- Stacking multiple notifications
- Accessible announcements

#### **Button Toggle** (Done)
Group of buttons where one or multiple can be selected.
- Single or multiple selection modes
- Exclusive toggle behavior
- Visual feedback on selection
- Keyboard accessibility

#### **Toolbar**
Horizontal container for actions and controls.
- Flexible layout with spacing control
- Icon and text button support
- Divider and spacer utilities
- Responsive behavior

---

### Phase 3: Advanced Components (Q2-Q3 2026)

#### **Grid List**
Responsive grid layout for organized content.
- Configurable column count
- Responsive breakpoints
- Gap and padding controls
- Image ratio preservation

#### **Timepicker**
Time selection interface (hours, minutes, seconds).
- 24-hour and 12-hour format
- Input field with picker
- Keyboard navigation
- Range and duration support

#### **Stepper (Wizard)**
Multi-step form or process interface.
- Linear and non-linear navigation
- Step validation and completion states
- Optional summary review step
- Editable completed steps

#### **Bottom Sheet**
Sliding panel from bottom of screen (built on Overlay system).
- Modal and non-modal variants
- Drag-to-dismiss capability
- Scrollable content support
- Full-screen and half-screen heights

---

## 🔧 Planned Enhancements

### Table - Architectural Refinement

The Table component is production-ready with core features (pagination, actions, modular cell system) but will undergo significant architectural refinement before v1.0.

**Current State**: Functional and in active use
- Built-in cell types: default, template
- 20+ pre-built specialized cells (tag, avatar, badge, etc)
- Custom cell registration with full type inference
- Actions with icons, tooltips, and callbacks
- Pagination support

**May Change Before v1.0**:
- Internal rendering patterns
- Cell composition API
- State management approach
- Integration with advanced features

**Planned Features**:
- Frozen columns
- Custom header rendering
- Advanced sorting and filtering
- Drag-and-drop reordering
- Large dataset optimization (10k+ rows)

**Why**: Ensuring architectural decisions made now can properly support advanced features without breaking changes later.

---

### Multi Date Select
Extended Date Picker with advanced selection:
- **Multi-selection**: Select multiple individual dates
- **Range selection**: Select date intervals
- **Multiple granularities**: Day, month, and year selection modes
- **Side-by-side view**: Configurable number of calendar panels (2+)
- **Synchronized state**: All panels update together

**Timeline**: Post Phase 3

---

## 📚 Design System

Complete implementation with full documentation:
- **Typography** — Font scales, weights, and line heights
- **Color Palette** — Semantic and utility colors with contrast compliance
- **Spacing System** — Consistent spacing scale (4px base)
- **Theming** — Light and dark mode support with custom overrides
- **Motion** — Easing curves, timing, and transition guidelines
- **Accessibility** — WCAG compliance and inclusive interaction patterns

---

## Architecture Philosophy

Frakton NG is built on three core innovations:

1. **Overlay System** — Unified foundation for all floating/modal components
2. **Extensible Patterns** — Custom cells, hooks, and composable units
3. **Type Safety** — Full TypeScript inference without sacrificing flexibility

This foundation enables components that are both simple to use and powerful when needed.
