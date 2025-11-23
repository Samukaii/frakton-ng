<story-meta title="Getting Started/Theming & Styling"/>

Frakton NG's design token system provides complete visual freedom while maintaining robust functionality. Every visual aspect is customizable through CSS custom properties.

---

## Design Token Architecture

### Three-Tier Fallback System

Frakton NG uses a sophisticated token hierarchy:

```css
/* Component-specific → Global semantic → Hardcoded fallback */

.container {
	color: var(
		--fkt-button-primary-color,    /* Component-specific */
		var(--fkt-color-primary,      /* Global semantic */
		#1f2937)                        /* Hardcoded fallback */
	);
}

```

### Token Categories

From the actual Frakton NG styles, you can customize:

- **Colors**: `--fkt-color-primary`, `--fkt-color-accent`, `--fkt-color-success`, `--fkt-color-warning`, `--fkt-color-danger`, `--fkt-color-info`
- **Spacing**: `--space-xs` (.5rem), `--space-sm` (.75rem), `--space-md` (1rem), `--space-lg` (1.25rem)
- **Typography**: `--font-size-xs` (.75rem) to `--font-size-4xl` (3rem), `--font-normal` (400) to `--font-black` (900)
- **Border Radius**: `--radius-xs` (.125rem) to `--radius-full` (9999px)
- **Shadows**: `--shadow-xs` to `--shadow-2xl`
- **Transitions**: `--fkt-transition-base`, `--fkt-transition-slow`

---

## Multi-Theme Support

### Default Setup

**Light theme is the default** - no additional configuration needed:

```json
{
  "styles": [
    "node_modules/frakton-ng/assets/styles.css",
    "node_modules/frakton-ng/assets/themes/light.css"
  ]
}
```

### Theme Switching Setup

For easy theme switching, include both theme files:

```json
{
  "styles": [
    "node_modules/frakton-ng/assets/styles.css",
    "node_modules/frakton-ng/assets/themes/light.css",
    "node_modules/frakton-ng/assets/themes/dark.css"
  ]
}
```

### Dynamic Theme Switching

Switch themes by adding `data-fkt-theme="dark"` to a root element:

```typescript
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private currentTheme = signal<'light' | 'dark'>('light');

  get theme() {
    return this.currentTheme.asReadonly();
  }

  toggleTheme() {
    const newTheme = this.currentTheme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: 'light' | 'dark') {
    this.currentTheme.set(theme);

    if (theme === 'dark') {
      document.body.setAttribute('data-fkt-theme', 'dark');
    } else {
      document.body.removeAttribute('data-fkt-theme');
    }

    // Optional: Save preference
    localStorage.setItem('fkt-theme', theme);
  }

  initializeTheme() {
    // Load saved preference or detect system preference
    const savedTheme = localStorage.getItem('fkt-theme') as 'light' | 'dark';
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    this.setTheme(initialTheme);
  }
}
```

### Theme Toggle Component

```typescript
@Component({
  selector: 'app-theme-toggle',
  template: `
    <fkt-button
      [icon]="themeService.theme() === 'light' ? 'moon' : 'sun'"
      [ariaLabel]="'Switch to ' + (themeService.theme() === 'light' ? 'dark' : 'light') + ' theme'"
      theme="basic"
      shape="rounded"
      (click)="themeService.toggleTheme()">
    </fkt-button>
  `,
  imports: [FktButtonComponent],
  standalone: true
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) {}
}
```

---

## Customization Strategies

### Global Brand Customization

Override global tokens from Frakton NG's actual system:

```css
:root {
  /* Override Semantic Colors */
  --fkt-color-primary: #6366f1;    /* Default: #1f2937 in light theme */
  --fkt-color-accent: #f59e0b;     /* Default: #ffb940 */
  --fkt-color-success: #10b981;    /* Default: #00C950FF */
  --fkt-color-danger: #ef4444;     /* Default: #E7000BFF */

  /* Override Spacing Scale */
  --space-xs: 0.375rem;    /* Default: 0.5rem */
  --space-md: 1.25rem;     /* Default: 1rem */
  --space-lg: 2rem;        /* Default: 1.25rem */

  /* Override Typography Scale */
  --font-size-md: 1.125rem;    /* Default: 1rem */
  --font-semibold: 700;         /* Default: 600 */

  /* Override Border Radius */
  --radius-md: 12px;        /* Default: 6px */
  --radius-lg: 16px;        /* Default: 8px */

  /* Override Shadows */
  --shadow-md: 0 8px 16px -4px rgb(0 0 0 / 0.1);

  /* Override Transitions */
  --fkt-transition-timing-fast: 200ms;    /* Default: 120ms */
}
```

### Component-Specific Customization

Target specific components without affecting others:

```css
/* All buttons - Override Frakton's button tokens */
fkt-button {
  --fkt-button-border-radius: 0;               /* Default: var(--fkt-radius-full) */
  --fkt-button-font-weight: var(--fkt-font-bold);  /* Default: var(--fkt-font-semibold) */
  --fkt-button-padding-horizontal: 2rem;       /* Default: var(--fkt-space-md) */
}

/* Specific button variants */
.my-cta-button {
  --fkt-button-primary-color: #ff6b35;
  --fkt-button-primary-hover-color: #e55a2b;
  --fkt-button-border-radius: var(--fkt-radius-full);
  --fkt-button-padding-vertical: var(--fkt-space-lg);
}

/* Override neutral colors for dark sections */
.dark-section {
  --fkt-color-neutral-100: #374151;    /* Default light: #1F2937FF */
  --fkt-color-neutral-200: #4B5563;    /* Default light: #374151FF */
  --fkt-color-text-base: #F9FAFB;      /* Default light: var(--fkt-color-neutral-900) */
}
```

### Context-Specific Theming

Apply different themes to specific sections:

```html
<!-- Default theme -->
<header>
  <fkt-button text="Header Button"></fkt-button>
</header>

<!-- Dark theme section -->
<section data-fkt-theme="dark">
  <fkt-button text="Dark Section Button"></fkt-button>
</section>

<!-- Custom themed sidebar -->
<aside class="custom-sidebar">
  <fkt-button text="Sidebar Button"></fkt-button>
</aside>
```

```css
.custom-sidebar {
  /* Use actual Frakton neutral scale for backgrounds */
  --fkt-color-bg-base: var(--fkt-color-neutral-50);
  --fkt-color-bg-alt: var(--fkt-color-neutral-100);
  --fkt-color-text-base: var(--fkt-color-neutral-900);

  /* Override semantic colors */
  --fkt-color-primary: #8B5CF6;    /* Purple theme */
  --fkt-color-accent: #F59E0B;     /* Keep default accent */

  /* All Frakton components in sidebar inherit these colors */
}
```

---

## Advanced Customization

### Custom Color Intelligence

Frakton NG automatically calculates contrast for custom hex colors passed via component props:

```html
<!-- These automatically get proper contrast text colors -->
<fkt-button color="#FF5733" text="Orange Button"></fkt-button>
<fkt-button color="#2E86AB" text="Blue Button"></fkt-button>
<fkt-button color="#A23B72" text="Purple Button"></fkt-button>
```

### Complete CSS Token Freedom

**Important**: CSS custom properties (design tokens) are **never manipulated internally** by Frakton NG. This means you have complete freedom in how you define your tokens:

```css
:root {
  /* ✅ Hex values */
  --fkt-color-primary: #3b82f6;

  /* ✅ RGB/RGBA values */
  --fkt-color-success: rgb(34, 197, 94);
  --fkt-color-danger: rgba(239, 68, 68, 0.9);

  /* ✅ HSL values */
  --fkt-color-accent: hsl(45, 93%, 47%);

  /* ✅ CSS color keywords */
  --fkt-color-warning: orange;
  --fkt-color-info: cornflowerblue;

  /* ✅ Reference other CSS properties */
  --fkt-color-primary: var(--brand-primary-500);
  --fkt-color-neutral-background: var(--surface-color);

  /* ✅ CSS calc() and relative units */
  --fkt-space-2xl: calc(var(--fkt-space-md) * 1.5);
  --fkt-radius-xl: clamp(4px, 2vw, 12px);

  /* ✅ CSS functions and modern syntax */
  --fkt-color-warning: linear-gradient(45deg, #ff6b35, #f7931e);
  --fkt-color-info: color-mix(in srgb, blue 70%, white);

  /* ✅ Conditional values with CSS */
  --fkt-button-padding-vertical: max(12px, 1rem);
}
```

**Why this matters:**
- **No JavaScript processing** - tokens work as pure CSS
- **Maximum flexibility** - use any valid CSS value
- **Performance optimized** - no runtime color calculations for tokens
- **Future-proof** - works with new CSS features as they become available

### Runtime Token Manipulation

```typescript
@Component({...})
export class DynamicThemeComponent {
  private elementRef = inject(ElementRef);

  applyCustomTheme(colors: { primary: string; accent: string }) {
    const element = this.elementRef.nativeElement;

    element.style.setProperty('--fkt-color-primary', colors.primary);
    element.style.setProperty('--fkt-color-accent', colors.accent);
  }

  resetTheme() {
    const element = this.elementRef.nativeElement;
    element.style.removeProperty('--fkt-color-primary');
    element.style.removeProperty('--fkt-color-accent');
  }
}
```

---

## Creating Custom Themes

### Theme File Structure

Create your own theme file following Frakton NG's actual dark theme structure:

#### Color Theme

```css
/* custom-theme.css - Based on Frakton NG's dark theme */
[data-fkt-theme="custom"] {
  /* Brand Colors */
	--fkt-color-brand-primary: #4b5563;
	--fkt-color-brand-secondary: #ffb940;

	/* Neutrals */
	--fkt-color-neutral-950: #FFFFFFFF;
	--fkt-color-neutral-900: #FFFFFFFF;
	--fkt-color-neutral-800: #F7F9Fa;
	--fkt-color-neutral-700: #F3F4F6FF;
	--fkt-color-neutral-600: #E5E7EBFF;
	--fkt-color-neutral-500: #D1D5DBFF;
	--fkt-color-neutral-400: #6B7280FF;
	--fkt-color-neutral-300: #4B5563FF;
	--fkt-color-neutral-200: #374151FF;
	--fkt-color-neutral-100: #1F2937FF;
	--fkt-color-neutral-50: #111827FF;

	--fkt-color-neutral-background: #1f2329;
	--fkt-color-modal-background: #242A35;

	/* States */
	--fkt-color-disabled: var(--fkt-color-neutral-400);
	--fkt-color-on-disabled: var(--fkt-color-neutral-600);

	/* Semantic Colors */

	/* PRIMARY */
	--fkt-color-primary: #769CE2;
	--fkt-color-on-primary: var(--fkt-color-neutral-100);
	--fkt-color-primary-hover: #85aaec;

	--fkt-color-primary-opacity-10: rgba(133, 170, 236, 0.1);
	--fkt-color-primary-opacity-20: rgba(133, 170, 236, 0.2);
	--fkt-color-primary-opacity-30: rgba(133, 170, 236, 0.3);
	--fkt-color-primary-opacity-40: rgba(133, 170, 236, 0.4);
	--fkt-color-primary-opacity-50: rgba(133, 170, 236, 0.5);
	--fkt-color-primary-opacity-60: rgba(133, 170, 236, 0.6);
	--fkt-color-primary-opacity-70: rgba(133, 170, 236, 0.7);
	--fkt-color-primary-opacity-80: rgba(133, 170, 236, 0.8);
	--fkt-color-primary-opacity-90: rgba(133, 170, 236, 0.9);

	/* ACCENT */
	--fkt-color-accent: #ffb940;
	--fkt-color-on-accent: #1F2937FF;
	--fkt-color-accent-hover: #ffc05b;

	--fkt-color-accent-opacity-10: rgba(255, 185, 64, 0.1);
	--fkt-color-accent-opacity-20: rgba(255, 185, 64, 0.2);
	--fkt-color-accent-opacity-30: rgba(255, 185, 64, 0.3);
	--fkt-color-accent-opacity-40: rgba(255, 185, 64, 0.4);
	--fkt-color-accent-opacity-50: rgba(255, 185, 64, 0.5);
	--fkt-color-accent-opacity-60: rgba(255, 185, 64, 0.6);
	--fkt-color-accent-opacity-70: rgba(255, 185, 64, 0.7);
	--fkt-color-accent-opacity-80: rgba(255, 185, 64, 0.8);
	--fkt-color-accent-opacity-90: rgba(255, 185, 64, 0.9);

	/* SUCCESS */
	--fkt-color-success: #00C950FF;
	--fkt-color-on-success: #F9fAFBFF;
	--fkt-color-success-hover: #00C950FF;

	--fkt-color-success-opacity-10: rgba(0, 201, 80, 0.1);
	--fkt-color-success-opacity-20: rgba(0, 201, 80, 0.2);
	--fkt-color-success-opacity-30: rgba(0, 201, 80, 0.3);
	--fkt-color-success-opacity-40: rgba(0, 201, 80, 0.4);
	--fkt-color-success-opacity-50: rgba(0, 201, 80, 0.5);
	--fkt-color-success-opacity-60: rgba(0, 201, 80, 0.6);
	--fkt-color-success-opacity-70: rgba(0, 201, 80, 0.7);
	--fkt-color-success-opacity-80: rgba(0, 201, 80, 0.8);
	--fkt-color-success-opacity-90: rgba(0, 201, 80, 0.9);

	/* WARNING */
	--fkt-color-warning: #FF6900FF;
	--fkt-color-on-warning: #F9fAFBFF;
	--fkt-color-warning-hover: #FF8904FF;

	--fkt-color-warning-opacity-10: rgba(255, 137, 4, 0.1);
	--fkt-color-warning-opacity-20: rgba(255, 137, 4, 0.2);
	--fkt-color-warning-opacity-30: rgba(255, 137, 4, 0.3);
	--fkt-color-warning-opacity-40: rgba(255, 137, 4, 0.4);
	--fkt-color-warning-opacity-50: rgba(255, 137, 4, 0.5);
	--fkt-color-warning-opacity-60: rgba(255, 137, 4, 0.6);
	--fkt-color-warning-opacity-70: rgba(255, 137, 4, 0.7);
	--fkt-color-warning-opacity-80: rgba(255, 137, 4, 0.8);
	--fkt-color-warning-opacity-90: rgba(255, 137, 4, 0.9);

	/* DANGER */
	--fkt-color-danger: #E64850;
	--fkt-color-on-danger: #F9fAFBFF;
	--fkt-color-danger-hover: #FB2C36FF;

	--fkt-color-danger-opacity-10: rgba(230, 72, 80, 0.1);
	--fkt-color-danger-opacity-20: rgba(230, 72, 80, 0.2);
	--fkt-color-danger-opacity-30: rgba(230, 72, 80, 0.3);
	--fkt-color-danger-opacity-40: rgba(230, 72, 80, 0.4);
	--fkt-color-danger-opacity-50: rgba(230, 72, 80, 0.5);
	--fkt-color-danger-opacity-60: rgba(230, 72, 80, 0.6);
	--fkt-color-danger-opacity-70: rgba(230, 72, 80, 0.7);
	--fkt-color-danger-opacity-80: rgba(230, 72, 80, 0.8);
	--fkt-color-danger-opacity-90: rgba(230, 72, 80, 0.9);

	/* INFO */
	--fkt-color-info: #4F86FF;
	--fkt-color-on-info: #F9fAFBFF;
	--fkt-color-info-hover: #2B7FFFFF;

	--fkt-color-info-opacity-10: rgba(79, 134, 255, 0.1);
	--fkt-color-info-opacity-20: rgba(79, 134, 255, 0.2);
	--fkt-color-info-opacity-30: rgba(79, 134, 255, 0.3);
	--fkt-color-info-opacity-40: rgba(79, 134, 255, 0.4);
	--fkt-color-info-opacity-50: rgba(79, 134, 255, 0.5);
	--fkt-color-info-opacity-60: rgba(79, 134, 255, 0.6);
	--fkt-color-info-opacity-70: rgba(79, 134, 255, 0.7);
	--fkt-color-info-opacity-80: rgba(79, 134, 255, 0.8);
	--fkt-color-info-opacity-90: rgba(79, 134, 255, 0.9);

	/* Text Colors */
	--fkt-color-text-base: var(--fkt-color-neutral-900);
	--fkt-color-text-muted: var(--fkt-color-neutral-600);
	--fkt-color-text-inverse: var(--fkt-color-neutral-100);

	/* Backgrounds */
	--fkt-color-bg-base: var(--fkt-color-neutral-100);
	--fkt-color-bg-alt: var(--fkt-color-neutral-200);

	/* Border */
	--fkt-color-border: var(--fkt-color-neutral-500);
}
```

#### Spacing Theme

```css
:root {
	/* Spacing */
	--fkt-space-3xs: .25rem; /* 4px */
	--fkt-space-2xs: .375rem; /* 6px */
	--fkt-space-xs: .5rem; /* 8px */
	--fkt-space-sm: .75rem; /* 12px */
	--fkt-space-md: 1rem; /* 16px */
	--fkt-space-lg: 1.25rem; /* 20px */
	--fkt-space-xl: 1.5rem; /* 24px */
	--fkt-space-2xl: 2rem; /* 32px */
	--fkt-space-3xl: 2.5rem; /* 40px */
	--fkt-space-4xl: 3rem; /* 48px */
	--fkt-space-5xl: 3.5rem; /* 56px */
	--fkt-space-6xl: 4rem; /* 64px */

	/* Border Radius */
	--fkt-radius-xs: .125rem; /* 2px */
	--fkt-radius-sm: .25rem; /* 4px */
	--fkt-radius-md: .375rem; /* 6px */
	--fkt-radius-lg: .5rem; /* 8px */
	--fkt-radius-xl: .75rem; /* 12px */
	--fkt-radius-2xl: 1rem; /* 16px */
	--fkt-radius-3xl: 1.5rem; /* 24px */
	--fkt-radius-4xl: 2rem; /* 32px */
	--fkt-radius-full: 9999px;

	/* Font Sizes */
	--fkt-font-size-xs: 0.75rem;    /* 12px */
	--fkt-font-size-sm: 0.875rem;   /* 14px */
	--fkt-font-size-md: 1rem;       /* 16px */
	--fkt-font-size-lg: 1.125rem;   /* 18px */
	--fkt-font-size-xl: 1.25rem;    /* 20px */
	--fkt-font-size-2xl: 1.5rem;    /* 24px */
	--fkt-font-size-3xl: 2rem;      /* 32px */
	--fkt-font-size-4xl: 3rem;      /* 48px */

	--fkt-font-thin: 100;
	--fkt-font-extralight: 200;
	--fkt-font-light: 300;
	--fkt-font-normal: 400;
	--fkt-font-medium: 500;
	--fkt-font-semibold: 600;
	--fkt-font-bold: 700;
	--fkt-font-extrabold: 800;
	--fkt-font-black: 900;

	--fkt-shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
	--fkt-shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	--fkt-shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
	--fkt-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	--fkt-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.2);
	--fkt-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.3);
	--fkt-shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

	/* Line Heights */
	--fkt-line-height-xs: 1;
	--fkt-line-height-sm: 1.25;
	--fkt-line-height-md: 1.5;
	--fkt-line-height-lg: 1.75;
	--fkt-line-height-xl: 2;

	/* Transition Duration */
	--fkt-transition-timing-fast: 120ms;
	--fkt-transition-timing-normal: 250ms;
	--fkt-transition-timing-slow: 400ms;
	--fkt-transition-timing-xslow: 600ms;

	/* Transition Easing */
	--fkt-transition-ease: cubic-bezier(0.4, 0, 0.2, 1);
	--fkt-transition-in: cubic-bezier(0.4, 0, 1, 1);
	--fkt-transition-out: cubic-bezier(0, 0, 0.2, 1);
	--fkt-transition-linear: linear;

	/* Transition Property (exemplo de preset) */
	--fkt-transition-base: all var(--fkt-transition-timing-fast) var(--fkt-transition-ease);
	--fkt-transition-slow: all var(--fkt-transition-timing-slow) var(--fkt-transition-ease);

	/* Animation Delay */
	--fkt-transition-delay-none: 0ms;
	--fkt-transition-delay-short: 50ms;
	--fkt-transition-delay-long: 200ms;
}
```

### Using Custom Themes

```typescript
export class CustomThemeService {
  applyCustomTheme() {
    document.body.setAttribute('data-fkt-theme', 'custom');
  }

  removeCustomTheme() {
    document.body.removeAttribute('data-fkt-theme');
  }
}
```

---

## Best Practices

### Performance Considerations

- **CSS Custom Properties are fast** - No runtime style generation
- **Cascade efficiently** - Use specificity wisely
- **Avoid inline styles** - Use CSS classes with token overrides

### Maintainability

```css
/* ✅ Good: Semantic naming */
.product-card {
  --fkt-color-primary: var(--brand-product-primary);
  --fkt-color-surface: var(--brand-surface-elevated);
}

/* ❌ Avoid: Magic numbers */
.some-component {
  --fkt-button-padding-horizontal: 23px;
  --fkt-color-primary: #ff5733;
}
```

### Design System Integration

```css
/* Create your design system layer */
:root {
  /* Your design tokens */
  --ds-color-brand-100: #e0f2fe;
  --ds-color-brand-500: #0ea5e9;
  --ds-color-brand-900: #0c4a6e;

  /* Map to Frakton tokens */
  --fkt-color-primary: var(--ds-color-brand-500);
  --fkt-color-primary-hover: var(--ds-color-brand-600);
  --fkt-color-primary-opacity-20: var(--ds-color-brand-100);
}
```

---

## Resources

### Design Token Reference
- **[Button Tokens](/docs/components-actions-button--raised)** - Complete button customization options
- **[Color System](/docs/foundation-colors)** - Color palette and semantic meanings
- **[Typography Scale](/docs/foundation-typography)** - Font sizes and hierarchies

### Tools & Utilities
- **Browser DevTools** - Inspect and modify tokens in real-time
- **Design Token Studio** - External tool for token management
- **Storybook Controls** - Interactive token playground in documentation
