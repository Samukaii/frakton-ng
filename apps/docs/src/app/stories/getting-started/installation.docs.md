<story-meta title="Getting Started/Installation" loadType="eagerly"/>

Welcome to **Frakton NG** - the next-generation Angular UI library that combines enforced accessibility, signal-native architecture, and complete visual freedom.

---
## Quick Installation

### 1. Install the Package

```bash
npm install frakton-ng
```

### 2. Add Styles to Your Project

Add Frakton NG styles to your `angular.json`:

```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/frakton-ng/assets/styles.css",
              "node_modules/frakton-ng/assets/themes/light.css"
            ]
          }
        }
      }
    }
  }
}
```

**Available themes:**
- `light.css` - Modern light theme
- `dark.css` - Elegant dark theme

### 3. Your First Component

Import and use components as standalone modules:

```typescript
import { Component, signal } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h1>Welcome to My App</h1>

      <!-- Basic button -->
      <fkt-button text="Click me!" (click)="handleClick()"></fkt-button>

      <!-- Button with icon and loading state -->
      <fkt-button
        text="Save Changes"
        icon="check"
        color="success"
        [loading]="isSaving()"
        (click)="save()">
      </fkt-button>

      <!-- Custom hex color with auto-contrast -->
      <fkt-button
        text="Custom Color"
        color="#FF6B35"
        theme="raised">
      </fkt-button>
    </div>
  `,
  imports: [FktButtonComponent],
  standalone: true
})
export class HomeComponent {
  isSaving = signal(false);

  handleClick() {
    console.log('Button clicked!');
  }

  async save() {
    this.isSaving.set(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.isSaving.set(false);
  }
}
```


---

## Accessibility First

Frakton NG **enforces** accessibility at runtime:

### Automatic Validation

```html
<!--❌ This will throw an error-->
<fkt-button icon="save" />
<!--Error: "When no text is provided, ariaLabel is required"-->

<!--✅ This is valid-->
<fkt-button icon="save" ariaLabel="Save document" />
```

### Semantic Color Descriptions

```html
<!--Color picker automatically provides descriptions-->
<fkt-color-picker [(value)]="selectedColor" />
<!--When user selects #4A90E2, screen reader announces: "Medium blue"-->
```

### Keyboard Navigation

All components support full keyboard navigation out of the box:

- **Tab**: Navigate between interactive elements
- **Enter/Space**: Activate buttons and controls
- **Arrow keys**: Navigate lists, calendars, and complex components
- **Escape**: Close overlays and reset focus

---

## Type-Safe Overlays

Frakton NG's overlay system provides automatic TypeScript inference:

```typescript
import { FktOverlayService } from 'frakton-ng/overlay';

// Create your overlay component with signals
@Component({...})
export class UserEditDialog {
  userId = input.required<string>();
  userName = input('');
  onSave = output<{name: string, email: string}>();
  onCancel = output<void>();
}

// Use overlay with full type safety
export class MyComponent {
  constructor(private overlay: FktOverlayService) {}

  openEditDialog(user: User) {
    const ref = this.overlay.open({
      component: UserEditDialog,
      data: {
        userId: user.id,              // ✅ Auto-typed as string
        userName: user.name,          // ✅ Auto-typed as string
        onSave: (userData) => {       // ✅ userData auto-typed as {name: string, email: string}
          this.updateUser(userData);
          ref.close();
        },
        onCancel: () => ref.close()   // ✅ Auto-typed as () => void
      }
    });
  }
}
```


---

## Next Steps

### Continue Learning
- **[Theming & Styling](/docs/getting-started-theming-styling)** - Master design tokens and theme switching
- **[Migration Guides](/docs/getting-started-migration-guides)** - Migrate from other UI libraries

### Explore Components
- **[Button](/docs/button)** - Multiple themes, custom colors, loading states
- **[Input](/docs/input)** - Signal-based forms with validation
- **[Color Picker](/docs/color-picker)** - Multi-format with accessibility
- **[Overlay System](/docs/overlay)** - Type-safe overlays and dialogs

### Learn Advanced Features
- **Form Integration** - Signal-based reactive forms
- **Accessibility Guide** - WCAG compliance and best practices
- **Performance Optimization** - Signal-native reactivity patterns

### Join the Community
- **[GitHub Issues](https://github.com/Samukaii/frakton-ng/issues)** - Report bugs and request features
- **[NPM Package](https://www.npmjs.com/package/frakton-ng)** - Install Frakton NG into your project
- **[Discord Community](https://discord.gg/7r6dsN4aah)** - Join our community

---

> **Ready to build?** Start with a button, explore the interactive playground, and discover how Frakton NG's signal-native architecture and design token system can transform your Angular development experience.
