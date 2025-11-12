import"./chunk-A25UGBQK.js";var o=`<story-meta title="Getting Started/Theming & Styling"/>\r
\r
# Theming & Styling\r
\r
Frakton NG's design token system provides complete visual freedom while maintaining robust functionality. Every visual aspect is customizable through CSS custom properties.\r
\r
---\r
\r
## Design Token Architecture\r
\r
### Three-Tier Fallback System\r
\r
Frakton NG uses a sophisticated token hierarchy:\r
\r
\`\`\`css\r
/* Component-specific \u2192 Global semantic \u2192 Hardcoded fallback */\r
\r
.container {\r
	color: var(\r
		--fkt-button-primary-color,    /* Component-specific */\r
		var(--fkt-color-primary,      /* Global semantic */\r
		#1f2937)                        /* Hardcoded fallback */\r
	);\r
}\r
\r
\`\`\`\r
\r
### Token Categories\r
\r
From the actual Frakton NG styles, you can customize:\r
\r
- **Colors**: \`--fkt-color-primary\`, \`--fkt-color-accent\`, \`--fkt-color-success\`, \`--fkt-color-warning\`, \`--fkt-color-danger\`, \`--fkt-color-info\`\r
- **Spacing**: \`--space-xs\` (.5rem), \`--space-sm\` (.75rem), \`--space-md\` (1rem), \`--space-lg\` (1.25rem)\r
- **Typography**: \`--font-size-xs\` (.75rem) to \`--font-size-4xl\` (3rem), \`--font-normal\` (400) to \`--font-black\` (900)\r
- **Border Radius**: \`--radius-xs\` (.125rem) to \`--radius-full\` (9999px)\r
- **Shadows**: \`--shadow-xs\` to \`--shadow-2xl\`\r
- **Transitions**: \`--fkt-transition-base\`, \`--fkt-transition-slow\`\r
\r
---\r
\r
## Multi-Theme Support\r
\r
### Default Setup\r
\r
**Light theme is the default** - no additional configuration needed:\r
\r
\`\`\`json\r
{\r
  "styles": [\r
    "node_modules/frakton-ng/assets/styles.css",\r
    "node_modules/frakton-ng/assets/themes/light.css"\r
  ]\r
}\r
\`\`\`\r
\r
### Theme Switching Setup\r
\r
For easy theme switching, include both theme files:\r
\r
\`\`\`json\r
{\r
  "styles": [\r
    "node_modules/frakton-ng/assets/styles.css",\r
    "node_modules/frakton-ng/assets/themes/light.css",\r
    "node_modules/frakton-ng/assets/themes/dark.css"\r
  ]\r
}\r
\`\`\`\r
\r
### Dynamic Theme Switching\r
\r
Switch themes by adding \`data-fkt-theme="dark"\` to a root element:\r
\r
\`\`\`typescript\r
@Injectable({ providedIn: 'root' })\r
export class ThemeService {\r
  private currentTheme = signal<'light' | 'dark'>('light');\r
\r
  get theme() {\r
    return this.currentTheme.asReadonly();\r
  }\r
\r
  toggleTheme() {\r
    const newTheme = this.currentTheme() === 'light' ? 'dark' : 'light';\r
    this.setTheme(newTheme);\r
  }\r
\r
  setTheme(theme: 'light' | 'dark') {\r
    this.currentTheme.set(theme);\r
\r
    if (theme === 'dark') {\r
      document.body.setAttribute('data-fkt-theme', 'dark');\r
    } else {\r
      document.body.removeAttribute('data-fkt-theme');\r
    }\r
\r
    // Optional: Save preference\r
    localStorage.setItem('fkt-theme', theme);\r
  }\r
\r
  initializeTheme() {\r
    // Load saved preference or detect system preference\r
    const savedTheme = localStorage.getItem('fkt-theme') as 'light' | 'dark';\r
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\r
\r
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');\r
    this.setTheme(initialTheme);\r
  }\r
}\r
\`\`\`\r
\r
### Theme Toggle Component\r
\r
\`\`\`typescript\r
@Component({\r
  selector: 'app-theme-toggle',\r
  template: \`\r
    <fkt-button\r
      [icon]="themeService.theme() === 'light' ? 'moon' : 'sun'"\r
      [ariaLabel]="'Switch to ' + (themeService.theme() === 'light' ? 'dark' : 'light') + ' theme'"\r
      theme="basic"\r
      shape="rounded"\r
      (click)="themeService.toggleTheme()">\r
    </fkt-button>\r
  \`,\r
  imports: [FktButtonComponent],\r
  standalone: true\r
})\r
export class ThemeToggleComponent {\r
  constructor(public themeService: ThemeService) {}\r
}\r
\`\`\`\r
\r
---\r
\r
## Customization Strategies\r
\r
### Global Brand Customization\r
\r
Override global tokens from Frakton NG's actual system:\r
\r
\`\`\`css\r
:root {\r
  /* Override Semantic Colors */\r
  --fkt-color-primary: #6366f1;    /* Default: #1f2937 in light theme */\r
  --fkt-color-accent: #f59e0b;     /* Default: #ffb940 */\r
  --fkt-color-success: #10b981;    /* Default: #00C950FF */\r
  --fkt-color-danger: #ef4444;     /* Default: #E7000BFF */\r
\r
  /* Override Spacing Scale */\r
  --space-xs: 0.375rem;    /* Default: 0.5rem */\r
  --space-md: 1.25rem;     /* Default: 1rem */\r
  --space-lg: 2rem;        /* Default: 1.25rem */\r
\r
  /* Override Typography Scale */\r
  --font-size-md: 1.125rem;    /* Default: 1rem */\r
  --font-semibold: 700;         /* Default: 600 */\r
\r
  /* Override Border Radius */\r
  --radius-md: 12px;        /* Default: 6px */\r
  --radius-lg: 16px;        /* Default: 8px */\r
\r
  /* Override Shadows */\r
  --shadow-md: 0 8px 16px -4px rgb(0 0 0 / 0.1);\r
\r
  /* Override Transitions */\r
  --fkt-transition-timing-fast: 200ms;    /* Default: 120ms */\r
}\r
\`\`\`\r
\r
### Component-Specific Customization\r
\r
Target specific components without affecting others:\r
\r
\`\`\`css\r
/* All buttons - Override Frakton's button tokens */\r
fkt-button {\r
  --fkt-button-border-radius: 0;               /* Default: var(--fkt-radius-full) */\r
  --fkt-button-font-weight: var(--fkt-font-bold);  /* Default: var(--fkt-font-semibold) */\r
  --fkt-button-padding-horizontal: 2rem;       /* Default: var(--fkt-space-md) */\r
}\r
\r
/* Specific button variants */\r
.my-cta-button {\r
  --fkt-button-primary-color: #ff6b35;\r
  --fkt-button-primary-hover-color: #e55a2b;\r
  --fkt-button-border-radius: var(--fkt-radius-full);\r
  --fkt-button-padding-vertical: var(--fkt-space-lg);\r
}\r
\r
/* Override neutral colors for dark sections */\r
.dark-section {\r
  --fkt-color-neutral-100: #374151;    /* Default light: #1F2937FF */\r
  --fkt-color-neutral-200: #4B5563;    /* Default light: #374151FF */\r
  --fkt-color-text-base: #F9FAFB;      /* Default light: var(--fkt-color-neutral-900) */\r
}\r
\`\`\`\r
\r
### Context-Specific Theming\r
\r
Apply different themes to specific sections:\r
\r
\`\`\`html\r
<!-- Default theme -->\r
<header>\r
  <fkt-button text="Header Button"></fkt-button>\r
</header>\r
\r
<!-- Dark theme section -->\r
<section data-fkt-theme="dark">\r
  <fkt-button text="Dark Section Button"></fkt-button>\r
</section>\r
\r
<!-- Custom themed sidebar -->\r
<aside class="custom-sidebar">\r
  <fkt-button text="Sidebar Button"></fkt-button>\r
</aside>\r
\`\`\`\r
\r
\`\`\`css\r
.custom-sidebar {\r
  /* Use actual Frakton neutral scale for backgrounds */\r
  --fkt-color-bg-base: var(--fkt-color-neutral-50);\r
  --fkt-color-bg-alt: var(--fkt-color-neutral-100);\r
  --fkt-color-text-base: var(--fkt-color-neutral-900);\r
\r
  /* Override semantic colors */\r
  --fkt-color-primary: #8B5CF6;    /* Purple theme */\r
  --fkt-color-accent: #F59E0B;     /* Keep default accent */\r
\r
  /* All Frakton components in sidebar inherit these colors */\r
}\r
\`\`\`\r
\r
---\r
\r
## Advanced Customization\r
\r
### Custom Color Intelligence\r
\r
Frakton NG automatically calculates contrast for custom hex colors passed via component props:\r
\r
\`\`\`html\r
<!-- These automatically get proper contrast text colors -->\r
<fkt-button color="#FF5733" text="Orange Button"></fkt-button>\r
<fkt-button color="#2E86AB" text="Blue Button"></fkt-button>\r
<fkt-button color="#A23B72" text="Purple Button"></fkt-button>\r
\`\`\`\r
\r
### Complete CSS Token Freedom\r
\r
**Important**: CSS custom properties (design tokens) are **never manipulated internally** by Frakton NG. This means you have complete freedom in how you define your tokens:\r
\r
\`\`\`css\r
:root {\r
  /* \u2705 Hex values */\r
  --fkt-color-primary: #3b82f6;\r
\r
  /* \u2705 RGB/RGBA values */\r
  --fkt-color-success: rgb(34, 197, 94);\r
  --fkt-color-danger: rgba(239, 68, 68, 0.9);\r
\r
  /* \u2705 HSL values */\r
  --fkt-color-accent: hsl(45, 93%, 47%);\r
\r
  /* \u2705 CSS color keywords */\r
  --fkt-color-warning: orange;\r
  --fkt-color-info: cornflowerblue;\r
\r
  /* \u2705 Reference other CSS properties */\r
  --fkt-color-primary: var(--brand-primary-500);\r
  --fkt-color-neutral-background: var(--surface-color);\r
\r
  /* \u2705 CSS calc() and relative units */\r
  --fkt-space-2xl: calc(var(--fkt-space-md) * 1.5);\r
  --fkt-radius-xl: clamp(4px, 2vw, 12px);\r
\r
  /* \u2705 CSS functions and modern syntax */\r
  --fkt-color-warning: linear-gradient(45deg, #ff6b35, #f7931e);\r
  --fkt-color-info: color-mix(in srgb, blue 70%, white);\r
\r
  /* \u2705 Conditional values with CSS */\r
  --fkt-button-padding-vertical: max(12px, 1rem);\r
}\r
\`\`\`\r
\r
**Why this matters:**\r
- **No JavaScript processing** - tokens work as pure CSS\r
- **Maximum flexibility** - use any valid CSS value\r
- **Performance optimized** - no runtime color calculations for tokens\r
- **Future-proof** - works with new CSS features as they become available\r
\r
### Runtime Token Manipulation\r
\r
\`\`\`typescript\r
@Component({...})\r
export class DynamicThemeComponent {\r
  private elementRef = inject(ElementRef);\r
\r
  applyCustomTheme(colors: { primary: string; accent: string }) {\r
    const element = this.elementRef.nativeElement;\r
\r
    element.style.setProperty('--fkt-color-primary', colors.primary);\r
    element.style.setProperty('--fkt-color-accent', colors.accent);\r
  }\r
\r
  resetTheme() {\r
    const element = this.elementRef.nativeElement;\r
    element.style.removeProperty('--fkt-color-primary');\r
    element.style.removeProperty('--fkt-color-accent');\r
  }\r
}\r
\`\`\`\r
\r
---\r
\r
## Creating Custom Themes\r
\r
### Theme File Structure\r
\r
Create your own theme file following Frakton NG's actual dark theme structure:\r
\r
#### Color Theme\r
\r
\`\`\`css\r
/* custom-theme.css - Based on Frakton NG's dark theme */\r
[data-fkt-theme="custom"] {\r
  /* Brand Colors */\r
	--fkt-color-brand-primary: #4b5563;\r
	--fkt-color-brand-secondary: #ffb940;\r
\r
	/* Neutrals */\r
	--fkt-color-neutral-950: #FFFFFFFF;\r
	--fkt-color-neutral-900: #FFFFFFFF;\r
	--fkt-color-neutral-800: #F7F9Fa;\r
	--fkt-color-neutral-700: #F3F4F6FF;\r
	--fkt-color-neutral-600: #E5E7EBFF;\r
	--fkt-color-neutral-500: #D1D5DBFF;\r
	--fkt-color-neutral-400: #6B7280FF;\r
	--fkt-color-neutral-300: #4B5563FF;\r
	--fkt-color-neutral-200: #374151FF;\r
	--fkt-color-neutral-100: #1F2937FF;\r
	--fkt-color-neutral-50: #111827FF;\r
\r
	--fkt-color-neutral-background: #1f2329;\r
	--fkt-color-modal-background: #242A35;\r
\r
	/* States */\r
	--fkt-color-disabled: var(--fkt-color-neutral-400);\r
	--fkt-color-on-disabled: var(--fkt-color-neutral-600);\r
\r
	/* Semantic Colors */\r
\r
	/* PRIMARY */\r
	--fkt-color-primary: #769CE2;\r
	--fkt-color-on-primary: var(--fkt-color-neutral-100);\r
	--fkt-color-primary-hover: #85aaec;\r
\r
	--fkt-color-primary-opacity-10: rgba(133, 170, 236, 0.1);\r
	--fkt-color-primary-opacity-20: rgba(133, 170, 236, 0.2);\r
	--fkt-color-primary-opacity-30: rgba(133, 170, 236, 0.3);\r
	--fkt-color-primary-opacity-40: rgba(133, 170, 236, 0.4);\r
	--fkt-color-primary-opacity-50: rgba(133, 170, 236, 0.5);\r
	--fkt-color-primary-opacity-60: rgba(133, 170, 236, 0.6);\r
	--fkt-color-primary-opacity-70: rgba(133, 170, 236, 0.7);\r
	--fkt-color-primary-opacity-80: rgba(133, 170, 236, 0.8);\r
	--fkt-color-primary-opacity-90: rgba(133, 170, 236, 0.9);\r
\r
	/* ACCENT */\r
	--fkt-color-accent: #ffb940;\r
	--fkt-color-on-accent: #1F2937FF;\r
	--fkt-color-accent-hover: #ffc05b;\r
\r
	--fkt-color-accent-opacity-10: rgba(255, 185, 64, 0.1);\r
	--fkt-color-accent-opacity-20: rgba(255, 185, 64, 0.2);\r
	--fkt-color-accent-opacity-30: rgba(255, 185, 64, 0.3);\r
	--fkt-color-accent-opacity-40: rgba(255, 185, 64, 0.4);\r
	--fkt-color-accent-opacity-50: rgba(255, 185, 64, 0.5);\r
	--fkt-color-accent-opacity-60: rgba(255, 185, 64, 0.6);\r
	--fkt-color-accent-opacity-70: rgba(255, 185, 64, 0.7);\r
	--fkt-color-accent-opacity-80: rgba(255, 185, 64, 0.8);\r
	--fkt-color-accent-opacity-90: rgba(255, 185, 64, 0.9);\r
\r
	/* SUCCESS */\r
	--fkt-color-success: #00C950FF;\r
	--fkt-color-on-success: #F9fAFBFF;\r
	--fkt-color-success-hover: #00C950FF;\r
\r
	--fkt-color-success-opacity-10: rgba(0, 201, 80, 0.1);\r
	--fkt-color-success-opacity-20: rgba(0, 201, 80, 0.2);\r
	--fkt-color-success-opacity-30: rgba(0, 201, 80, 0.3);\r
	--fkt-color-success-opacity-40: rgba(0, 201, 80, 0.4);\r
	--fkt-color-success-opacity-50: rgba(0, 201, 80, 0.5);\r
	--fkt-color-success-opacity-60: rgba(0, 201, 80, 0.6);\r
	--fkt-color-success-opacity-70: rgba(0, 201, 80, 0.7);\r
	--fkt-color-success-opacity-80: rgba(0, 201, 80, 0.8);\r
	--fkt-color-success-opacity-90: rgba(0, 201, 80, 0.9);\r
\r
	/* WARNING */\r
	--fkt-color-warning: #FF6900FF;\r
	--fkt-color-on-warning: #F9fAFBFF;\r
	--fkt-color-warning-hover: #FF8904FF;\r
\r
	--fkt-color-warning-opacity-10: rgba(255, 137, 4, 0.1);\r
	--fkt-color-warning-opacity-20: rgba(255, 137, 4, 0.2);\r
	--fkt-color-warning-opacity-30: rgba(255, 137, 4, 0.3);\r
	--fkt-color-warning-opacity-40: rgba(255, 137, 4, 0.4);\r
	--fkt-color-warning-opacity-50: rgba(255, 137, 4, 0.5);\r
	--fkt-color-warning-opacity-60: rgba(255, 137, 4, 0.6);\r
	--fkt-color-warning-opacity-70: rgba(255, 137, 4, 0.7);\r
	--fkt-color-warning-opacity-80: rgba(255, 137, 4, 0.8);\r
	--fkt-color-warning-opacity-90: rgba(255, 137, 4, 0.9);\r
\r
	/* DANGER */\r
	--fkt-color-danger: #E64850;\r
	--fkt-color-on-danger: #F9fAFBFF;\r
	--fkt-color-danger-hover: #FB2C36FF;\r
\r
	--fkt-color-danger-opacity-10: rgba(230, 72, 80, 0.1);\r
	--fkt-color-danger-opacity-20: rgba(230, 72, 80, 0.2);\r
	--fkt-color-danger-opacity-30: rgba(230, 72, 80, 0.3);\r
	--fkt-color-danger-opacity-40: rgba(230, 72, 80, 0.4);\r
	--fkt-color-danger-opacity-50: rgba(230, 72, 80, 0.5);\r
	--fkt-color-danger-opacity-60: rgba(230, 72, 80, 0.6);\r
	--fkt-color-danger-opacity-70: rgba(230, 72, 80, 0.7);\r
	--fkt-color-danger-opacity-80: rgba(230, 72, 80, 0.8);\r
	--fkt-color-danger-opacity-90: rgba(230, 72, 80, 0.9);\r
\r
	/* INFO */\r
	--fkt-color-info: #4F86FF;\r
	--fkt-color-on-info: #F9fAFBFF;\r
	--fkt-color-info-hover: #2B7FFFFF;\r
\r
	--fkt-color-info-opacity-10: rgba(79, 134, 255, 0.1);\r
	--fkt-color-info-opacity-20: rgba(79, 134, 255, 0.2);\r
	--fkt-color-info-opacity-30: rgba(79, 134, 255, 0.3);\r
	--fkt-color-info-opacity-40: rgba(79, 134, 255, 0.4);\r
	--fkt-color-info-opacity-50: rgba(79, 134, 255, 0.5);\r
	--fkt-color-info-opacity-60: rgba(79, 134, 255, 0.6);\r
	--fkt-color-info-opacity-70: rgba(79, 134, 255, 0.7);\r
	--fkt-color-info-opacity-80: rgba(79, 134, 255, 0.8);\r
	--fkt-color-info-opacity-90: rgba(79, 134, 255, 0.9);\r
\r
	/* Text Colors */\r
	--fkt-color-text-base: var(--fkt-color-neutral-900);\r
	--fkt-color-text-muted: var(--fkt-color-neutral-600);\r
	--fkt-color-text-inverse: var(--fkt-color-neutral-100);\r
\r
	/* Backgrounds */\r
	--fkt-color-bg-base: var(--fkt-color-neutral-100);\r
	--fkt-color-bg-alt: var(--fkt-color-neutral-200);\r
\r
	/* Border */\r
	--fkt-color-border: var(--fkt-color-neutral-500);\r
}\r
\`\`\`\r
\r
#### Spacing Theme\r
\r
\`\`\`css\r
:root {\r
	/* Spacing */\r
	--fkt-space-3xs: .25rem; /* 4px */\r
	--fkt-space-2xs: .375rem; /* 6px */\r
	--fkt-space-xs: .5rem; /* 8px */\r
	--fkt-space-sm: .75rem; /* 12px */\r
	--fkt-space-md: 1rem; /* 16px */\r
	--fkt-space-lg: 1.25rem; /* 20px */\r
	--fkt-space-xl: 1.5rem; /* 24px */\r
	--fkt-space-2xl: 2rem; /* 32px */\r
	--fkt-space-3xl: 2.5rem; /* 40px */\r
	--fkt-space-4xl: 3rem; /* 48px */\r
	--fkt-space-5xl: 3.5rem; /* 56px */\r
	--fkt-space-6xl: 4rem; /* 64px */\r
\r
	/* Border Radius */\r
	--fkt-radius-xs: .125rem; /* 2px */\r
	--fkt-radius-sm: .25rem; /* 4px */\r
	--fkt-radius-md: .375rem; /* 6px */\r
	--fkt-radius-lg: .5rem; /* 8px */\r
	--fkt-radius-xl: .75rem; /* 12px */\r
	--fkt-radius-2xl: 1rem; /* 16px */\r
	--fkt-radius-3xl: 1.5rem; /* 24px */\r
	--fkt-radius-4xl: 2rem; /* 32px */\r
	--fkt-radius-full: 9999px;\r
\r
	/* Font Sizes */\r
	--fkt-font-size-xs: 0.75rem;    /* 12px */\r
	--fkt-font-size-sm: 0.875rem;   /* 14px */\r
	--fkt-font-size-md: 1rem;       /* 16px */\r
	--fkt-font-size-lg: 1.125rem;   /* 18px */\r
	--fkt-font-size-xl: 1.25rem;    /* 20px */\r
	--fkt-font-size-2xl: 1.5rem;    /* 24px */\r
	--fkt-font-size-3xl: 2rem;      /* 32px */\r
	--fkt-font-size-4xl: 3rem;      /* 48px */\r
\r
	--fkt-font-thin: 100;\r
	--fkt-font-extralight: 200;\r
	--fkt-font-light: 300;\r
	--fkt-font-normal: 400;\r
	--fkt-font-medium: 500;\r
	--fkt-font-semibold: 600;\r
	--fkt-font-bold: 700;\r
	--fkt-font-extrabold: 800;\r
	--fkt-font-black: 900;\r
\r
	--fkt-shadow-2xs: 0 1px rgb(0 0 0 / 0.05);\r
	--fkt-shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);\r
	--fkt-shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\r
	--fkt-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\r
	--fkt-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.2);\r
	--fkt-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.3);\r
	--fkt-shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);\r
\r
	/* Line Heights */\r
	--fkt-line-height-xs: 1;\r
	--fkt-line-height-sm: 1.25;\r
	--fkt-line-height-md: 1.5;\r
	--fkt-line-height-lg: 1.75;\r
	--fkt-line-height-xl: 2;\r
\r
	/* Transition Duration */\r
	--fkt-transition-timing-fast: 120ms;\r
	--fkt-transition-timing-normal: 250ms;\r
	--fkt-transition-timing-slow: 400ms;\r
	--fkt-transition-timing-xslow: 600ms;\r
\r
	/* Transition Easing */\r
	--fkt-transition-ease: cubic-bezier(0.4, 0, 0.2, 1);\r
	--fkt-transition-in: cubic-bezier(0.4, 0, 1, 1);\r
	--fkt-transition-out: cubic-bezier(0, 0, 0.2, 1);\r
	--fkt-transition-linear: linear;\r
\r
	/* Transition Property (exemplo de preset) */\r
	--fkt-transition-base: all var(--fkt-transition-timing-fast) var(--fkt-transition-ease);\r
	--fkt-transition-slow: all var(--fkt-transition-timing-slow) var(--fkt-transition-ease);\r
\r
	/* Animation Delay */\r
	--fkt-transition-delay-none: 0ms;\r
	--fkt-transition-delay-short: 50ms;\r
	--fkt-transition-delay-long: 200ms;\r
}\r
\`\`\`\r
\r
### Using Custom Themes\r
\r
\`\`\`typescript\r
export class CustomThemeService {\r
  applyCustomTheme() {\r
    document.body.setAttribute('data-fkt-theme', 'custom');\r
  }\r
\r
  removeCustomTheme() {\r
    document.body.removeAttribute('data-fkt-theme');\r
  }\r
}\r
\`\`\`\r
\r
---\r
\r
## Best Practices\r
\r
### Performance Considerations\r
\r
- **CSS Custom Properties are fast** - No runtime style generation\r
- **Cascade efficiently** - Use specificity wisely\r
- **Avoid inline styles** - Use CSS classes with token overrides\r
\r
### Maintainability\r
\r
\`\`\`css\r
/* \u2705 Good: Semantic naming */\r
.product-card {\r
  --fkt-color-primary: var(--brand-product-primary);\r
  --fkt-color-surface: var(--brand-surface-elevated);\r
}\r
\r
/* \u274C Avoid: Magic numbers */\r
.some-component {\r
  --fkt-button-padding-horizontal: 23px;\r
  --fkt-color-primary: #ff5733;\r
}\r
\`\`\`\r
\r
### Design System Integration\r
\r
\`\`\`css\r
/* Create your design system layer */\r
:root {\r
  /* Your design tokens */\r
  --ds-color-brand-100: #e0f2fe;\r
  --ds-color-brand-500: #0ea5e9;\r
  --ds-color-brand-900: #0c4a6e;\r
\r
  /* Map to Frakton tokens */\r
  --fkt-color-primary: var(--ds-color-brand-500);\r
  --fkt-color-primary-hover: var(--ds-color-brand-600);\r
  --fkt-color-primary-opacity-20: var(--ds-color-brand-100);\r
}\r
\`\`\`\r
\r
---\r
\r
## Resources\r
\r
### Design Token Reference\r
- **[Button Tokens](/docs/components-actions-button--raised)** - Complete button customization options\r
- **[Color System](/docs/foundation-colors)** - Color palette and semantic meanings\r
- **[Typography Scale](/docs/foundation-typography)** - Font sizes and hierarchies\r
\r
### Tools & Utilities\r
- **Browser DevTools** - Inspect and modify tokens in real-time\r
- **Design Token Studio** - External tool for token management\r
- **Storybook Controls** - Interactive token playground in documentation\r
`;export{o as default};
