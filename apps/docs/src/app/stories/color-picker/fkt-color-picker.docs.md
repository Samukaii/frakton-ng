## Key Features

### **Advanced Color Selection**

- **Visual Color Picker**: Interactive saturation-lightness selector with draggable controls
- **Hue & Alpha Sliders**: Dedicated controls for hue selection and transparency adjustment
- **Multiple Format Support**: HSL, RGB, and HEX color formats with real-time conversion
- **Alpha Channel Control**: Optional transparency/opacity support with visual indicators

### **Semantic Color Intelligence**

- **Human-Readable Descriptions**: Automatic generation of color descriptions like "vibrant blue", "pale yellow-orange", or "dark red"
- **Color Accessibility Support**: Visual color descriptions displayed directly in the picker interface for users with color vision deficiencies (daltonism)
- **Universal Design**: Descriptions benefit all users - from screen reader users to those with color blindness to designers who need precise color communication

### **Internationalization Ready**

- **Multi-Language Support**: Built-in locales for English, Portuguese (Brazil), Spanish, and French
- **Extensible Locale System**: Easy to add custom locales and translations
- **Cultural Color Naming**: Localized color descriptions that respect cultural color naming conventions
- **RTL Support**: Ready for right-to-left languages and layouts

### **Signal-Native Architecture**

- **Angular Signals Integration**: Full FormValueControl interface with reactive form handling
- **Real-Time Updates**: Instant color preview and format conversion using computed signals
- **Performance Optimized**: Minimal re-renders with efficient signal-based reactivity
- **Type-Safe**: Complete TypeScript support with strong typing throughout

### **Professional Controls**

- **Format Switcher**: Dynamic switching between HSL, RGB, and HEX input modes
- **Precision Input**: Manual input for exact color values with validation
- **Copy to Clipboard**: One-click color code copying with visual feedback
- **Clear Action**: Quick color removal with null state support

## Configuration Options

<arg-types></arg-types>

### Core Types

```typescript
import {FktColorPickerFormat, FktColorPickerLocale} from "frakton-ng/color-picker";

type FktColorPickerFormat = 'hsl' | 'rgb' | 'hex';

interface FktColorPickerLocale {
    controls: {
        ariaLegend: string;
        formatType: string;
        opacity: string;
        hsl: { hue: string; saturation: string; lightness: string; };
        hsv: { hue: string; saturation: string; brightness: string; };
        rgb: { red: string; green: string; blue: string; };
        hex: { code: string; };
    };
    actions: {
        copyColorCode: string;
    };
    preview: {
        color: string;
        textualDescription: string;
        code: string;
    };
    ariaColorDescriptions: {
        hue: Record<string, string>;
        saturation: Record<string, string>;
        lightness: Record<string, string>;
        alpha: Record<string, string>;
        phrases: Record<string, string>;
    };
}
```

### Advanced Features

#### Semantic Color Descriptions

The color picker features intelligent color descriptions that make colors accessible and understandable for everyone:

```typescript
// Examples of generated descriptions:
// "vibrant blue"           → HSL: 240°, 100%, 50%
// "pale yellow-orange"     → HSL: 45°, 20%, 80%
// "dark red"               → HSL: 0°, 80%, 30%
// "gray"                   → HSL: 210°, 3%, 50%
// "slightly tinted with blue" → HSL: 210°, 5%, 95%
```

**Key Benefits:**

- **Color Blind Accessibility**: Provides textual context for users who cannot distinguish colors visually
- **Designer Communication**: Enables precise color discussions using natural language
- **Universal Understanding**: Makes colors comprehensible regardless of visual perception abilities
- **Real-Time Feedback**: Descriptions update instantly as users adjust color values

**Smart Recognition System:**

- **16 Hue Categories**: From red through orange, yellow, green, cyan, blue, purple, and back to red
- **8 Saturation Levels**: From neutral gray to extremely vibrant colors
- **11 Lightness Ranges**: From black through various darkness/brightness levels to white
- **Contextual Intelligence**: Special handling for edge cases like near-white, near-black, and achromatic colors

#### Internationalization System

Built-in support for multiple languages with extensible locale system:

```typescript
import {FKT_COLOR_PICKER_LOCALE_TOKEN} from 'frakton-ng/color-picker';
import {inject} from '@angular/core';

// Available locales: en, pt-br, es, fr
// Default: pt-br (Brazilian Portuguese)

// Custom locale injection
providers: [
    {
        provide: FKT_COLOR_PICKER_LOCALE_TOKEN,
        useValue: customLocale
    }
]
```

#### Professional Color Selection Interface

The modal provides intuitive visual controls for precise color selection:

1. **2D Color Area**: Interactive saturation and lightness selection with visual feedback
2. **Hue Spectrum**: Full color spectrum slider for hue selection
3. **Alpha Control**: Transparency adjustment with visual alpha indicators

## Integration Examples

### Basic Form Integration

```typescript
import {Component, signal} from '@angular/core';
import {FktColorPickerComponent} from 'frakton-ng/color-picker';

@Component({
    selector: 'app-theme-editor',
    imports: [FktColorPickerComponent],
    template: `
    <fkt-color-picker
      label="Primary Color"
      [(value)]="primaryColor"
      defaultFormat="hex"
      outputFormat="hsl"
      [disableAlphaChannel]="false"
    />
  `
})
export class ThemeEditorComponent {
    primaryColor = signal<string | null>('#3B82F6');
}
```

### Advanced Usage with Custom Locale

```typescript
import {Component, Provider} from '@angular/core';
import {FKT_COLOR_PICKER_LOCALE_TOKEN} from 'frakton-ng/color-picker';

const customLocale = {
    controls: {
        ariaLegend: "Use arrow keys to change value",
        formatType: "Color format",
        // ... complete locale definition
    }
};

@Component({
    providers: [
        {
            provide: FKT_COLOR_PICKER_LOCALE_TOKEN,
            useValue: customLocale
        }
    ]
})
export class LocalizedColorPickerComponent {
}
```

### Signal-Based Reactive Forms

```typescript
import {Component, computed, signal} from '@angular/core';

@Component({
    template: `
    <fkt-color-picker
      label="Brand Color"
      [(value)]="brandColor"
      [(touched)]="touched"
      [disabled]="disabled()"
      [invalid]="invalid()"
      [errors]="errors()"
    />

    <p>Preview: {{ colorDescription() }}</p>
  `
})
export class ReactiveColorComponent {
    brandColor = signal<string | null>(null);
    touched = signal(false);
    disabled = signal(false);
    invalid = signal(false);
    errors = signal([]);

    colorDescription = computed(() => {
        const color = this.brandColor();
        return color ? `Selected: ${color}` : 'No color selected';
    });
}
```

## Technical Features

### Format Support & Conversion

Seamless conversion between HSL, RGB, and HEX color formats with precision handling:

```typescript
// Format examples
'hsl(240, 100%, 50%)'    // HSL format
'rgb(0, 0, 255)'         // RGB format
'#0000FF'                // HEX format
'hsla(240, 100%, 50%, 0.8)' // With alpha channel
```

### Overlay System Integration

Built on Frakton NG's advanced overlay system with intelligent positioning and automatic theming.

### Design Token Support

Comprehensive design token system allowing complete visual customization while maintaining design consistency.

## Use Cases

- **Design Systems** - Theme customization, brand color selection, and style guide implementation
- **Content Management** - Background colors, text colors, and visual element styling
- **E-commerce Applications** - Product customization, color variants, and visual preferences
- **Dashboard Configuration** - Chart colors, status indicators, and personalization settings
- **Accessibility Tools** - Color contrast checkers and visual accessibility aids
- **Creative Applications** - Digital art tools, image editors, and design software

## Accessibility & Standards

### Universal Accessibility

- **Color Descriptions**: Semantic color names displayed in the interface for users with color vision deficiencies
- **Screen Reader Support**: Full ARIA labeling and semantic structure for assistive technologies
- **Keyboard Navigation**: Complete keyboard support with arrow keys for precise color selection
- **Focus Management**: Logical tab order and clear focus indicators throughout the interface
- **High Contrast**: Respects system color preferences and high contrast modes

### Inclusive Design Benefits

The color descriptions feature serves multiple accessibility needs:

- **Color Blindness Support**: Visual text descriptions help users who cannot distinguish certain colors
- **Screen Reader Compatibility**: Automatic ARIA labels provide context beyond just hex codes
- **Universal Communication**: Enables precise color discussions using natural language descriptors
