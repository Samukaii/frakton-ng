# Divider

A flexible divider component for visually separating content sections with customizable orientation, styling, spacing, and optional labels.

## Key Features

- **Dual Orientation**: Horizontal and vertical dividers
- **Multiple Styles**: Solid, dashed, and dotted line variants
- **Flexible Sizing**: Three thickness options (thin, medium, thick)
- **Custom Colors**: Semantic colors and custom hex values
- **Optional Labels**: Text labels for contextual separation
- **Responsive Spacing**: Configurable margin spacing
- **Accessibility**: Proper ARIA separator role

## Basic Usage

```typescript
import { FktDividerComponent } from 'frakton-ng/divider';

@Component({
    imports: [FktDividerComponent],
    template: `
        <!-- Basic horizontal divider -->
        <fkt-divider />

        <!-- Horizontal divider with label -->
        <fkt-divider label="Section Break" />

        <!-- Vertical divider -->
        <div style="display: flex; height: 100px;">
            <div>Content A</div>
            <fkt-divider orientation="vertical" />
            <div>Content B</div>
        </div>

        <!-- Custom styled divider -->
        <fkt-divider 
            variant="dashed" 
            color="primary" 
            size="thick"
            spacing="lg"
        />
    `
})
export class MyPageComponent {}
```

## API Reference

### Inputs

| Name        | Type                   | Default      | Description                             |
|-------------|------------------------|--------------|-----------------------------------------|
| orientation | FktDividerOrientation  | 'horizontal' | Orientation of the divider              |
| variant     | FktDividerVariant      | 'solid'      | Visual style of the divider line        |
| size        | FktDividerSize         | 'medium'     | Thickness of the divider line           |
| color       | FktColor               | 'neutral'    | Color of the divider                    |
| spacing     | FktDividerSpacing      | 'md'         | Margin spacing around the divider       |
| label       | string                 | undefined    | Optional label text to display          |
| customColor | string                 | undefined    | Custom hex color for the divider        |

### Types

```typescript
import { 
    FktDividerOrientation, 
    FktDividerVariant, 
    FktDividerSize,
    FktDividerSpacing 
} from 'frakton-ng/divider';

type FktDividerOrientation = 'horizontal' | 'vertical';
type FktDividerVariant = 'solid' | 'dashed' | 'dotted';
type FktDividerSize = 'thin' | 'medium' | 'thick';
type FktDividerSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
```

## Accessibility

- Uses proper ARIA `separator` role
- Includes `aria-orientation` attribute for screen readers
- Labels are properly associated with the divider
- High contrast colors for visual clarity

## Use Cases

### Section Separation
```html
<section>
    <h2>User Profile</h2>
    <p>User profile content...</p>
</section>

<fkt-divider label="Account Settings" />

<section>
    <h2>Account Settings</h2>
    <p>Account settings content...</p>
</section>
```

### Form Sections
```html
<form>
    <div class="personal-info">
        <!-- Personal information fields -->
    </div>
    
    <fkt-divider 
        label="Contact Information" 
        spacing="lg"
        variant="dashed" 
    />
    
    <div class="contact-info">
        <!-- Contact information fields -->
    </div>
</form>
```

### Sidebar Layout
```html
<div class="layout">
    <aside class="sidebar">
        <!-- Sidebar content -->
    </aside>
    
    <fkt-divider orientation="vertical" spacing="md" />
    
    <main class="content">
        <!-- Main content -->
    </main>
</div>
```

### Card Separators
```html
<div class="card">
    <div class="card-header">
        <h3>Card Title</h3>
    </div>
    
    <fkt-divider spacing="sm" />
    
    <div class="card-content">
        <p>Card content...</p>
    </div>
    
    <fkt-divider spacing="sm" />
    
    <div class="card-footer">
        <button>Action</button>
    </div>
</div>
```

### Dialog Sections
```html
<div class="dialog">
    <div class="dialog-content">
        <p>Are you sure you want to continue?</p>
    </div>
    
    <fkt-divider spacing="md" />
    
    <div class="dialog-actions">
        <button>Cancel</button>
        <button>Confirm</button>
    </div>
</div>
```

## Best Practices

### Do ✅

- Use horizontal dividers for vertical content flow
- Use vertical dividers for horizontal layouts (flexbox/grid)
- Choose appropriate spacing for your layout density
- Use labels to provide context for content separation
- Use semantic colors that match your design system
- Consider the visual weight of different sizes and variants

### Don't ❌

- Overuse dividers - they should enhance, not clutter
- Use vertical dividers without proper container height
- Mix too many different styles in one interface
- Use dividers where white space would be more appropriate
- Ignore contrast requirements for accessibility

## Styling Notes

### Vertical Dividers
When using vertical dividers, ensure the parent container has a defined height:

```css
.container {
    display: flex;
    height: 200px; /* Required for vertical dividers */
    align-items: stretch;
}
```

### Custom Spacing
The spacing property affects margin, but you can override with CSS for specific needs:

```css
.custom-spacing fkt-divider {
    margin: 2rem 0; /* Custom vertical margin */
}
```

### Label Customization
Labels can be styled via CSS custom properties:

```css
fkt-divider {
    --fkt-divider-label-color: #666;
    --fkt-divider-label-background: #f5f5f5;
    --fkt-divider-label-font-weight: 600;
}
```

## Examples

### Login Form Divider
```html
<form class="login-form">
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button type="submit">Login</button>
    
    <fkt-divider 
        label="OR" 
        spacing="lg"
        color="neutral"
        variant="solid"
    />
    
    <button type="button" class="social-login">
        Login with Google
    </button>
</form>
```

### Dashboard Sections
```html
<div class="dashboard">
    <div class="metrics">
        <!-- KPI metrics -->
    </div>
    
    <fkt-divider 
        label="Recent Activity" 
        spacing="xl"
        color="primary"
    />
    
    <div class="activity-feed">
        <!-- Activity items -->
    </div>
</div>
```

### Navigation Menu
```html
<nav class="menu">
    <a href="/dashboard">Dashboard</a>
    <a href="/projects">Projects</a>
    
    <fkt-divider spacing="sm" />
    
    <a href="/settings">Settings</a>
    <a href="/help">Help</a>
</nav>
```
