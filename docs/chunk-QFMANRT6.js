import{a as e,b as o}from"./chunk-J32JSFPI.js";import"./chunk-M5LKCV34.js";import"./chunk-QZXYR55Z.js";import"./chunk-YSGEPIXV.js";import"./chunk-I7PTK4BR.js";import"./chunk-CWG4WCSE.js";import"./chunk-IZD2X5KJ.js";import"./chunk-S7WYO5H5.js";import"./chunk-FY4XSVEU.js";import"./chunk-6QB3RJ5Q.js";import"./chunk-7BDPT3QJ.js";import"./chunk-KI4A6YQJ.js";import"./chunk-Q5KPX33S.js";import"./chunk-BXWRRZR7.js";import"./chunk-A25UGBQK.js";var t=`## Key Features\r
\r
### **Advanced Color Selection**\r
\r
- **Visual Color Picker**: Interactive saturation-lightness selector with draggable controls\r
- **Hue & Alpha Sliders**: Dedicated controls for hue selection and transparency adjustment\r
- **Multiple Format Support**: HSL, RGB, and HEX color formats with real-time conversion\r
- **Alpha Channel Control**: Optional transparency/opacity support with visual indicators\r
\r
### **Semantic Color Intelligence**\r
\r
- **Human-Readable Descriptions**: Automatic generation of color descriptions like "vibrant blue", "pale yellow-orange", or "dark red"\r
- **Color Accessibility Support**: Visual color descriptions displayed directly in the picker interface for users with color vision deficiencies (daltonism)\r
- **Universal Design**: Descriptions benefit all users - from screen reader users to those with color blindness to designers who need precise color communication\r
\r
### **Internationalization Ready**\r
\r
- **Multi-Language Support**: Built-in locales for English, Portuguese (Brazil), Spanish, and French\r
- **Extensible Locale System**: Easy to add custom locales and translations\r
- **Cultural Color Naming**: Localized color descriptions that respect cultural color naming conventions\r
- **RTL Support**: Ready for right-to-left languages and layouts\r
\r
### **Signal-Native Architecture**\r
\r
- **Angular Signals Integration**: Full FormValueControl interface with reactive form handling\r
- **Real-Time Updates**: Instant color preview and format conversion using computed signals\r
- **Performance Optimized**: Minimal re-renders with efficient signal-based reactivity\r
- **Type-Safe**: Complete TypeScript support with strong typing throughout\r
\r
### **Professional Controls**\r
\r
- **Format Switcher**: Dynamic switching between HSL, RGB, and HEX input modes\r
- **Precision Input**: Manual input for exact color values with validation\r
- **Copy to Clipboard**: One-click color code copying with visual feedback\r
- **Clear Action**: Quick color removal with null state support\r
\r
## Configuration Options\r
\r
<arg-types></arg-types>\r
\r
### Core Types\r
\r
\`\`\`typescript\r
import {FktColorPickerFormat, FktColorPickerLocale} from "frakton-ng/color-picker";\r
\r
type FktColorPickerFormat = 'hsl' | 'rgb' | 'hex';\r
\r
interface FktColorPickerLocale {\r
    controls: {\r
        ariaLegend: string;\r
        formatType: string;\r
        opacity: string;\r
        hsl: { hue: string; saturation: string; lightness: string; };\r
        hsv: { hue: string; saturation: string; brightness: string; };\r
        rgb: { red: string; green: string; blue: string; };\r
        hex: { code: string; };\r
    };\r
    actions: {\r
        copyColorCode: string;\r
    };\r
    preview: {\r
        color: string;\r
        textualDescription: string;\r
        code: string;\r
    };\r
    ariaColorDescriptions: {\r
        hue: Record<string, string>;\r
        saturation: Record<string, string>;\r
        lightness: Record<string, string>;\r
        alpha: Record<string, string>;\r
        phrases: Record<string, string>;\r
    };\r
}\r
\`\`\`\r
\r
### Advanced Features\r
\r
#### Semantic Color Descriptions\r
\r
The color picker features intelligent color descriptions that make colors accessible and understandable for everyone:\r
\r
\`\`\`typescript\r
// Examples of generated descriptions:\r
// "vibrant blue"           \u2192 HSL: 240\xB0, 100%, 50%\r
// "pale yellow-orange"     \u2192 HSL: 45\xB0, 20%, 80%\r
// "dark red"               \u2192 HSL: 0\xB0, 80%, 30%\r
// "gray"                   \u2192 HSL: 210\xB0, 3%, 50%\r
// "slightly tinted with blue" \u2192 HSL: 210\xB0, 5%, 95%\r
\`\`\`\r
\r
**Key Benefits:**\r
\r
- **Color Blind Accessibility**: Provides textual context for users who cannot distinguish colors visually\r
- **Designer Communication**: Enables precise color discussions using natural language\r
- **Universal Understanding**: Makes colors comprehensible regardless of visual perception abilities\r
- **Real-Time Feedback**: Descriptions update instantly as users adjust color values\r
\r
**Smart Recognition System:**\r
\r
- **16 Hue Categories**: From red through orange, yellow, green, cyan, blue, purple, and back to red\r
- **8 Saturation Levels**: From neutral gray to extremely vibrant colors\r
- **11 Lightness Ranges**: From black through various darkness/brightness levels to white\r
- **Contextual Intelligence**: Special handling for edge cases like near-white, near-black, and achromatic colors\r
\r
#### Internationalization System\r
\r
Built-in support for multiple languages with extensible locale system:\r
\r
\`\`\`typescript\r
import {FKT_COLOR_PICKER_LOCALE_TOKEN} from 'frakton-ng/color-picker';\r
import {inject} from '@angular/core';\r
\r
// Available locales: en, pt-br, es, fr\r
// Default: pt-br (Brazilian Portuguese)\r
\r
// Custom locale injection\r
providers: [\r
    {\r
        provide: FKT_COLOR_PICKER_LOCALE_TOKEN,\r
        useValue: customLocale\r
    }\r
]\r
\`\`\`\r
\r
#### Professional Color Selection Interface\r
\r
The modal provides intuitive visual controls for precise color selection:\r
\r
1. **2D Color Area**: Interactive saturation and lightness selection with visual feedback\r
2. **Hue Spectrum**: Full color spectrum slider for hue selection\r
3. **Alpha Control**: Transparency adjustment with visual alpha indicators\r
\r
## Integration Examples\r
\r
### Basic Form Integration\r
\r
\`\`\`typescript\r
import {Component, signal} from '@angular/core';\r
import {FktColorPickerComponent} from 'frakton-ng/color-picker';\r
\r
@Component({\r
    selector: 'app-theme-editor',\r
    imports: [FktColorPickerComponent],\r
    template: \`\r
    <fkt-color-picker\r
      label="Primary Color"\r
      [(value)]="primaryColor"\r
      defaultFormat="hex"\r
      outputFormat="hsl"\r
      [disableAlphaChannel]="false"\r
    />\r
  \`\r
})\r
export class ThemeEditorComponent {\r
    primaryColor = signal<string | null>('#3B82F6');\r
}\r
\`\`\`\r
\r
### Advanced Usage with Custom Locale\r
\r
\`\`\`typescript\r
import {Component, Provider} from '@angular/core';\r
import {FKT_COLOR_PICKER_LOCALE_TOKEN} from 'frakton-ng/color-picker';\r
\r
const customLocale = {\r
    controls: {\r
        ariaLegend: "Use arrow keys to change value",\r
        formatType: "Color format",\r
        // ... complete locale definition\r
    }\r
};\r
\r
@Component({\r
    providers: [\r
        {\r
            provide: FKT_COLOR_PICKER_LOCALE_TOKEN,\r
            useValue: customLocale\r
        }\r
    ]\r
})\r
export class LocalizedColorPickerComponent {\r
}\r
\`\`\`\r
\r
### Signal-Based Reactive Forms\r
\r
\`\`\`typescript\r
import {Component, computed, signal} from '@angular/core';\r
\r
@Component({\r
    template: \`\r
    <fkt-color-picker\r
      label="Brand Color"\r
      [(value)]="brandColor"\r
      [(touched)]="touched"\r
      [disabled]="disabled()"\r
      [invalid]="invalid()"\r
      [errors]="errors()"\r
    />\r
\r
    <p>Preview: {{ colorDescription() }}</p>\r
  \`\r
})\r
export class ReactiveColorComponent {\r
    brandColor = signal<string | null>(null);\r
    touched = signal(false);\r
    disabled = signal(false);\r
    invalid = signal(false);\r
    errors = signal([]);\r
\r
    colorDescription = computed(() => {\r
        const color = this.brandColor();\r
        return color ? \`Selected: \${color}\` : 'No color selected';\r
    });\r
}\r
\`\`\`\r
\r
## Technical Features\r
\r
### Format Support & Conversion\r
\r
Seamless conversion between HSL, RGB, and HEX color formats with precision handling:\r
\r
\`\`\`typescript\r
// Format examples\r
'hsl(240, 100%, 50%)'    // HSL format\r
'rgb(0, 0, 255)'         // RGB format\r
'#0000FF'                // HEX format\r
'hsla(240, 100%, 50%, 0.8)' // With alpha channel\r
\`\`\`\r
\r
### Overlay System Integration\r
\r
Built on Frakton NG's advanced overlay system with intelligent positioning and automatic theming.\r
\r
### Design Token Support\r
\r
Comprehensive design token system allowing complete visual customization while maintaining design consistency.\r
\r
## Use Cases\r
\r
- **Design Systems** - Theme customization, brand color selection, and style guide implementation\r
- **Content Management** - Background colors, text colors, and visual element styling\r
- **E-commerce Applications** - Product customization, color variants, and visual preferences\r
- **Dashboard Configuration** - Chart colors, status indicators, and personalization settings\r
- **Accessibility Tools** - Color contrast checkers and visual accessibility aids\r
- **Creative Applications** - Digital art tools, image editors, and design software\r
\r
## Accessibility & Standards\r
\r
### Universal Accessibility\r
\r
- **Color Descriptions**: Semantic color names displayed in the interface for users with color vision deficiencies\r
- **Screen Reader Support**: Full ARIA labeling and semantic structure for assistive technologies\r
- **Keyboard Navigation**: Complete keyboard support with arrow keys for precise color selection\r
- **Focus Management**: Logical tab order and clear focus indicators throughout the interface\r
- **High Contrast**: Respects system color preferences and high contrast modes\r
\r
### Inclusive Design Benefits\r
\r
The color descriptions feature serves multiple accessibility needs:\r
\r
- **Color Blindness Support**: Visual text descriptions help users who cannot distinguish certain colors\r
- **Screen Reader Compatibility**: Automatic ARIA labels provide context beyond just hex codes\r
- **Universal Communication**: Enables precise color discussions using natural language descriptors\r
`;var i={title:"Components/Form/Color Picker",component:o,description:"A sophisticated color picker component featuring semantic color descriptions, international localization, advanced visual selectors, and seamless Angular signals integration. Built for professional design tools and user-friendly color selection.",documentation:t,argTypes:{label:{control:"text",category:"Attributes",type:"string",defaultValue:"required",description:"Label text displayed for the color picker"},hideLabel:{control:"boolean",category:"Attributes",type:"boolean",defaultValue:"false",description:"Hide the label text visually while keeping it accessible"},defaultFormat:{control:"select",category:"Attributes",type:"FktColorPickerFormat",options:e,import:"import {FktColorPickerFormat} from 'frakton-ng/color-picker'",defaultValue:"'hsl'",description:"Default color format displayed in the picker"},outputFormat:{control:"select",category:"Attributes",type:"FktColorPickerFormat",options:e,import:"import {FktColorPickerFormat} from 'frakton-ng/color-picker'",defaultValue:"'hex'",description:"Format used for the output value"},disableAlphaChannel:{control:"boolean",category:"Attributes",type:"boolean",defaultValue:"false",description:"Disable alpha/transparency channel in the color picker"},disabled:{control:"boolean",category:"Form Control",type:"boolean",defaultValue:"false",description:"Disable the color picker interaction"},value:{control:"text",category:"Form Control",type:"string | null",defaultValue:"null",description:"Current color value"}}},s={description:"A basic color picker with default HSL format and HEX output. Supports alpha channel for transparency.",args:{label:"Choose Color",defaultFormat:"hsl",outputFormat:"hex"}},c={description:"Color picker configured for HEX format input and output with a pre-selected blue color.",args:{label:"Hex Color",defaultFormat:"hex",outputFormat:"hex",value:"#3498db"}},p={description:"Color picker using RGB format for both input and output with a pre-selected red color.",args:{label:"RGB Color",defaultFormat:"rgb",outputFormat:"rgb",value:"rgb(231, 76, 60)"}},u={description:"Color picker using HSL format for both input and output with a pre-selected green color.",args:{label:"HSL Color",defaultFormat:"hsl",outputFormat:"hsl",value:"hsl(142, 71%, 45%)"}},d={description:"Color picker with alpha channel enabled, allowing transparency selection. Shows a semi-transparent purple color.",args:{label:"Color with Transparency",defaultFormat:"hsl",outputFormat:"hsl",value:"hsla(271, 81%, 56%, 0.7)"}},m={description:"Color picker in disabled state that cannot be interacted with but shows the current color value.",args:{label:"Disabled Color Picker",disabled:!0,value:"#95a5a6"}},g={description:"Color picker with visually hidden label for compact layouts while maintaining accessibility.",args:{label:"Theme Color",value:"#9b59b6"}},h=i;export{s as BasicColorPicker,m as DisabledState,c as HexFormat,g as HiddenLabel,u as HslFormat,p as RgbFormat,d as WithAlphaChannel,h as default};
