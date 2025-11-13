# Frakton NG

**Architecturally opinionated. Visually unlimited.**

[![npm version](https://img.shields.io/npm/v/frakton-ng?style=flat-square)](https://www.npmjs.com/package/frakton-ng)
![bundlephobia](https://badgen.net/bundlephobia/minzip/frakton-ng)
![bundlephobia](https://badgen.net/bundlephobia/min/frakton-ng)
![bundlephobia](https://badgen.net/bundlephobia/tree-shaking/frakton-ng)

> A new kind of Angular UI library: enforced accessibility, signal-native architecture, and absolute visual freedom through a modern token system.
<img width="2452" height="1644" alt="image" src="https://github.com/user-attachments/assets/02a41442-9742-41bc-871e-caeebf299ebb" />


<br/>
<br/>
Frakton NG is a **next-generation Angular UI library** that separates what matters: enforced accessibility and modern architecture, with complete visual freedom. Built with Angular 21+ signals, standalone components, and a comprehensive design token system.

- **📦 Bundle Size**: < 700kb unpacked and < 150kb gzipped
- **🧩 Components**: 25+ production-ready
- **🚀 Zero Dependencies**: Only Angular required

<br/>

## 🖼️ **See It In Action**

[See the docs & interactive demos →](https://samukaii.github.io/frakton-ng)

<img width="2266" height="1341" alt="image" src="https://github.com/user-attachments/assets/edc62523-f557-4c99-934f-306346d3b174" />

<br/>
<br/>

## 🎯 **The Philosophy**

Unlike traditional UI libraries, Frakton NG is **opinionated about the right things**:

### **Non-Negotiable (Enforced)**

- ✅ **Accessibility-first**: Runtime ARIA validation, semantic color descriptions, WCAG compliance
- ✅ **Signal-native**: Built entirely with Angular signals for optimal reactivity
- ✅ **Modern patterns**: Standalone components, typed forms, new control flow syntax
- ✅ **Type safety**: Comprehensive TypeScript coverage with intelligent inference

### **Completely Flexible (Your Choice)**

- **Visual design**: All components use design tokens so you can customize every aspect of your product.
- **Color system**: Semantic colors OR custom hex values with automatic contrast
- **Theming**: Multi-theme support with runtime token inheritance
- **Layout**: No imposed spacing, sizing, or visual constraints

[See the docs & interactive demos →](https://samukaii.github.io/frakton-ng)

<br/>

## 🔥 **Why Choose Frakton NG Over Alternatives?**

### **Angular Material**

| Frakton NG                                                      | Angular Material                                              |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| ✅ **Complete visual freedom** - Comprehensive design tokens     | ❌ **Google's visual opinions** - Limited customization        |
| ✅ **No CSS resets** - Plays nice with existing styles           | ❌ **Global CSS resets** - Can conflict with other libraries   |
| ✅ **Signal-native** - Built for Angular's future                | ⚠️ **Legacy architecture** - Only partial support for signals |
| ✅ **TypeScript inference** - Overlay data automatically typed   | ❌ **Manual typing** - No automatic type inference             |
| ✅ **Modern patterns** - Standalone components, new control flow | ⚠️ **Mixed patterns** - Still uses NgModules                  |

### **PrimeNG**

| Frakton NG                                                            | PrimeNG                                            |
|-----------------------------------------------------------------------|----------------------------------------------------|
| ✅ **Accessibility-first** - Runtime validation, semantic descriptions | ⚠️ **Basic accessibility** - Limited enforcement   |
| ✅ **Lightweight** - Import only what you need                         | ❌ **Heavyweight bundle** - Large bundle sizes      |
| ✅ **Token-based theming** - Granular control                          | ⚠️ **Theme switching** - Predefined theme sets     |
| ✅ **Advanced overlays** - Type-safe, theme-inheriting                 | ❌ **Basic overlays** - Limited positioning options |

### **Ng-Bootstrap**

| Frakton NG                                                   | Ng-Bootstrap                                              |
|--------------------------------------------------------------|-----------------------------------------------------------|
| ✅ **Complete UI system** - Forms, overlays, design tokens    | ❌ **Bootstrap wrapper** - Limited to Bootstrap components |
| ✅ **Enterprise features** - Advanced positioning, validation | ❌ **Basic functionality** - Simple Bootstrap ports        |
| ✅ **No external dependencies** - Self-contained              | ❌ **External dependency** - Requires Bootstrap CSS        |
| ✅ **Modern Angular** - Signals, standalone, latest patterns  | ⚠️ **Legacy Angular** - Decorator-based architecture      |

<br/>

## 🚀 **Installation & Setup**

### **Quick Start**

```bash
npm install frakton-ng
```

### **Styles Configuration**

Add to your `angular.json`:

```json
{
  "styles": [
    "node_modules/frakton-ng/assets/styles.css",
    "node_modules/frakton-ng/assets/themes/light.css"
  ]
}
```

**Available themes:**

- `light.css` - Clean, modern light theme
- `dark.css` - Elegant dark theme
- Custom themes - Build your own with design tokens

### **Zero Configuration Usage**

```typescript
import {FktButtonComponent} from 'frakton-ng/button';

@Component({
  template: `
    <fkt-button 
      text="Save Changes" 
      color="#FF6B35"           <!-- Custom hex color -->
      theme="raised"
      icon="check"
      [loading]="isSaving()"
      (click)="save()">
    </fkt-button>
  `,
  imports: [FktButtonComponent],
  standalone: true
})
export class AppComponent {
  isSaving = signal(false);
}
```

<br/>

## **What Makes Frakton NG Unique**

### **Overlay Type Safety (First in Angular Ecosystem)**

Automatic TypeScript inference for overlay component data - no other Angular UI library offers this:

```typescript
// Your overlay component uses signals
@Component({...})
export class UserEditDialog {
  userId = input.required<string>();
  onSave = output<{ name: string, email: string }>();
}

// Overlay service automatically infers ALL types
const ref = overlay.open({
  component: UserEditDialog,
  data: {
    userId: user.id,              // ✅ Auto-typed as string
    onSave: (userData) => {       // ✅ userData auto-typed as {name: string, email: string}
      this.updateUser(userData);  // TypeScript knows the exact shape
    }
  }
});
```

### **Zero-Conflict Architecture**

No CSS resets means perfect compatibility with existing projects:

```html
<!-- Mix and match with ANY other UI library -->
<mat-toolbar>Angular Material</mat-toolbar>
<p-button>PrimeNG</p-button>
<fkt-button>Frakton NG</fkt-button>
<!-- All work together perfectly - no style conflicts -->
```

### **Runtime Accessibility Enforcement**

Most libraries document accessibility - Frakton NG **enforces** it:

```html
<!--Throws actual errors for accessibility violations-->
<fkt-button icon="save"/>
<!--❌ Error: "When no text is provided, ariaLabel is required"-->

<fkt-color-picker value="#FF5733"/>
<!--✅ Automatically announces "Bright red-orange" to screen readers-->
```

### **Signal-Native Performance**

Built entirely on Angular signals for optimal reactivity:

```typescript
// Traditional approach (heavy change detection)
export class TraditionalComponent {
  @Input() loading = false;

  get classes() {
    return `btn-${this.loading ? 'loading' : ''}`;
  }
}

// Frakton approach (signal-optimized)  
export class FraktonComponent {
  loading = input(false);
  classes = computed(() => `btn-${this.loading() ? 'loading' : ''}`);
  // Only recomputes when inputs actually change
}
```

<br/>

### **Complete Visual Freedom**

- **Design token architecture**: Three-tier fallback system (component → global → default)
- **Custom color intelligence**: Accepts hex colors with automatic contrast calculation
- **Theme inheritance**: Overlays automatically inherit design tokens from anchor elements
- **Zero visual opinions**: Every visual aspect is controlled via tokens


### **Advanced Overlay System**

- **Intelligent positioning**: 16 anchor positions with smart viewport-aware repositioning
- **Z-index management**: Automatic stacking without conflicts
- **Focus management**: Proper focus trapping and restoration
- **Theme inheritance**: Child overlays automatically match parent themes
- **Memory efficient**: Proper cleanup prevents memory leaks

### **Exceptional Documentation Experience**

Interactive documentation that goes beyond traditional UI libraries:

- **Live Control Playground**: Real-time component property editing with instant visual feedback
- **Design Token Playground**: Interactive token editing to see styling changes immediately
- **Code Examples**: Auto-generated code snippets for every component configuration
- **Angular-Native Documentation**: Custom documentation system DX-inspired by Storybook but fully Angular

<br/>
<br/>

## 📦 **Complete Component Library**

### **25+ Production-Ready Components**

#### **Actions**

- **Button** - Multi-theme with icon support and loading states
- **Buttons List** - Grouped action buttons with consistent styling

#### **Data Display**

- **Badge** - Status indicators and labels
- **Icon** - Complete HeroIcons integration (600+ icons)
- **Table** - Advanced data tables with sorting and actions

#### **Feedback**

- **No Results** - Empty state messaging
- **Spinner** - Loading indicators with size variants

#### **Form Controls**

- **Autocomplete** - Smart search with auto-creation
- **Badge Selector** - Visual selection interface
- **Checkbox** - Enhanced checkboxes with validation
- **Color Picker** - Advanced color selection with semantic intelligence
- **Date Picker** - Calendar-based date selection
- **Input** - Enhanced text inputs with formatting
- **Select** - Dropdown selection with search
- **Textarea** - Multi-line text input with auto-resize

#### **Navigation**

- **Calendar** - Standalone calendar with custom behaviors
- **Calendar Navigator** - Date navigation interface
- **Navigator** - Generic navigation primitive
- **Side Menu** - Collapsible navigation menus

#### **Overlay**

- **Dialog** - Modal dialogs with type-safe data passing
- **Drawer** - Slide-out panels
- **Overlay** - Powerful positioning system primitive
- **Tooltip** - Contextual help and information

<br/>

### **Bundle Efficiency**

| Metric            | Frakton NG        | Angular Material                    | PrimeNG                             |
|-------------------|-------------------|-------------------------------------|-------------------------------------|
| **Unpacked Size** | **698KB**         | ~8.5MB                              | ~11.4 MB                            |
| **Tree Shaking**  | ✅ Component-level | ⚠️ Module-level and component-level | ⚠️ Module-level and component-level |

<br/>

## 📊 **Performance & Architecture**

Frakton NG is built for production applications:

- **Zero Dependencies**: Only Angular core required - no external libraries
- **Tree-shakeable**: Import only the components you use
- **Signal-optimized**: Minimal change detection overhead
- **CSS-in-JS free**: No runtime style generation
- **Overlay-efficient**: Reuses DOM nodes, proper cleanup
- **Memory conscious**: Automatic subscription management
- **Bundle Efficient**: 5x smaller than Material, 9x smaller than PrimeNG

<br/>

## 🎯 **Perfect For**

### **Enterprise Applications**

- Custom design systems requiring full visual control
- Accessibility-critical applications (government, healthcare, finance)
- Multi-tenant SaaS with theme customization needs

### **Modern Angular Projects**

- Applications adopting Angular's latest patterns (signals, standalone)
- Teams wanting type-safe, reactive UI components
- Projects requiring advanced overlay functionality (dashboards, complex forms)

### **Design Systems**

- Organizations building custom component libraries
- Teams needing token-based theming architecture
- Projects requiring comprehensive documentation integration

<br/>

## ⚡️ Quick links

- [Docs & Demos](https://samukaii.github.io/frakton-ng)
- [Issues](https://github.com/Samukaii/frakton-ng/issues)

<br/>

## 🛠️ Contributing

Found a bug or want to suggest something?
Check `CONTRIBUTING.md` or open an issue.

MIT © Samuel Alejandro
