# Design Tokens Documentation Guide

## Overview
This guide defines the required structure for documenting design tokens in frakton-ng library components. Design tokens are documented in SCSS files and automatically converted to JSON using the provided script.

## Process Overview

1. **Document tokens in SCSS** following the structured format
2. **Run the automated script** to generate JSON file
3. **Verify the generated output**

## SCSS Documentation Requirements

### File Structure
Each component's main SCSS file must contain design token documentation between delimiters:

```scss
// <design-tokens>
/*
{Description of the token's purpose}
@name {CSS custom property name}
@reference {Reference to design system token or literal value}
@component {Component category}
@category {Token category}
@type {Token type}
*/
${variable-name}: var({CSS custom property}, {fallback value});

// </design-tokens>
```

### Required Properties in Comment Blocks

- **Description**: Clear explanation of token's purpose (first line)
- **@name**: CSS custom property name (e.g., `--fkt-button-padding-vertical`)
- **@reference**: Reference token from design system (e.g., `--space-xs`) or literal value
- **@component**: Component category (e.g., "Field", "Modal", "Button") - optional
- **@category**: Token category (e.g., "Spacing", "Colors", "Typography", "Shape")
- **@type**: Token type (e.g., "size", "color")

## Naming Conventions

### CSS Custom Properties
Format: `--fkt-{component}-{element}-{property}`

Examples:
- `--fkt-button-padding-vertical`
- `--fkt-color-picker-modal-background-color`
- `--fkt-input-border-radius`

### SCSS Variables
Format: `${property-name}` (simplified from CSS custom property)

Examples:
- `$padding-vertical`
- `$modal-background-color`
- `$border-radius`

## Categories and Types

### Categories
- **Spacing**: Padding, margin, gap, width, height
- **Colors**: Background, text, border colors
- **Typography**: Font weights, sizes, line heights
- **Shape**: Border radius, border width

### Types
- **size**: For spacing, dimensions, font sizes
- **color**: For all color-related tokens
- **font**: For typography-specific tokens

## Component Categories
- "Field" - Input-like components
- "Modal" - Overlay/dialog components
- "Button" - Button components
- "Color controls" - Specialized controls
- Component-specific names as needed

## Automated JSON Generation

### Script Location
`libs/frakton-ng/scripts/create-design-tokens.mjs`

### Usage
```bash
node libs/frakton-ng/scripts/create-design-tokens.mjs {component-directory} {project-root} {component-name}
```

### Parameters
1. **component-directory**: Path to the component's src directory (e.g., `libs/frakton-ng/button/src`)
2. **project-root**: Root path of the project (e.g., `C:\Users\samuel\programming\frakton-ng`)
3. **component-name**: Component name for the output file (e.g., `button`)

### Example Command
```bash
node libs/frakton-ng/scripts/create-design-tokens.mjs libs/frakton-ng/button/src C:\Users\samuel\programming\frakton-ng button
```

This generates: `libs/frakton-ng/button/src/fkt-button-design-tokens.json`

### Script Functionality
The script:
1. Scans all `.scss` files in the specified directory
2. Extracts design token blocks between `// <design-tokens>` delimiters
3. Parses comment blocks for token metadata
4. Resolves `@reference` values from global design system tokens
5. Removes duplicate tokens
6. Outputs formatted JSON array

## Example Implementation

### SCSS (`fkt-example.component.scss`)
```scss
// <design-tokens>
/*
Gap between example elements.
@name --fkt-example-gap
@reference --space-xs
@component Field
@category Spacing
@type size
*/
$gap: var(--fkt-example-gap, var(--fkt-space-xs));

/*
Background color for example component.
@name --fkt-example-background-color
@reference --color-neutral-50
@component Field
@category Colors
@type color
*/
$background-color: var(--fkt-example-background-color, var(--color-neutral-50));
// </design-tokens>

:host {
  gap: $gap;
  background-color: $background-color;
}
```

### Generated JSON (via script)
```json
[
  {
    "description": "Gap between example elements.",
    "name": "--fkt-example-gap",
    "reference": "--space-xs",
    "component": "Field",
    "category": "Spacing",
    "type": "size",
    "defaultValue": ".5rem"
  },
  {
    "description": "Background color for example component.",
    "name": "--fkt-example-background-color", 
    "reference": "--color-neutral-50",
    "component": "Field",
    "category": "Colors",
    "type": "color",
    "defaultValue": "#FFFFFFFF"
  }
]
```

## AI Agent Workflow

When documenting design tokens for a component:

1. **Identify the component directory structure**
2. **Write SCSS documentation** following exact format requirements
3. **Run the generation script** with correct parameters:
   ```bash
   node libs/frakton-ng/scripts/create-design-tokens.mjs {component-src-dir} {project-root} {component-name}
   ```
4. **Verify the generated JSON file** exists and contains expected tokens
5. **Do NOT manually create or edit JSON files** - always use the script

## Critical Requirements

### SCSS Structure
- [ ] Use exact delimiter format: `// <design-tokens>` and `// </design-tokens>`
- [ ] Each token has complete comment block with all required @properties
- [ ] CSS custom properties follow naming convention
- [ ] SCSS variables properly declared with var() and fallbacks

### Script Usage
- [ ] Always use the automated script for JSON generation
- [ ] Provide correct directory paths and component name
- [ ] Verify script output after execution
- [ ] Never manually edit generated JSON files

### Naming & Format
- [ ] Follow consistent naming conventions
- [ ] Use approved categories and types
- [ ] Reference design system tokens when available
- [ ] Include meaningful descriptions

## Troubleshooting

### Script Not Finding Tokens
- Verify SCSS delimiters are exact: `// <design-tokens>` and `// </design-tokens>`
- Check comment block format with proper `/*` and `*/`
- Ensure @property syntax is correct

### Missing Default Values
- Script automatically resolves `@reference` values from global tokens
- If reference token not found, uses literal value from `@reference`

### Duplicate Tokens
- Script automatically removes duplicates based on `@name`
- Ensure unique token names across all component SCSS files
