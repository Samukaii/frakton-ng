import { ArgTypes, Meta } from '@storybook/addon-docs/blocks';
import * as [componentName]Stories from './[component-name].stories';
import { rawExamples } from "./examples/raw-examples";
import { StoryDoc } from "../../.storybook/blocks/StoryDoc";

<Meta of={[componentName]Stories} />

# [ComponentName]

_A brief summary describing what the component does, its main purpose, and the core user scenarios it covers._

## Key Features

- **[Feature 1]**: Short description of key functionality
- **[Feature 2]**: Description of another important feature
- **[Feature 3]**: Additional notable capability
- **[Feature 4]**: Signal-based architecture or other technical highlights

## Configuration Options

<ArgTypes/>

### Types

```typescript
// Core types and interfaces relevant to component usage
export type [ComponentStep] = 'option1' | 'option2' | 'option3';

// Configuration interfaces for component customization
export interface [ComponentConfig] {
	property: string;                    // Description of property purpose
	onClick?: () => void;               // Optional callback handler
	isEnabled: boolean;                 // Boolean state description
	classes: string[];                  // CSS classes array
}

// Partial options type (excludes mandatory fields)
export type [ComponentOptions] = Partial<
	Omit<[ComponentConfig], 'property' | 'isEnabled'>
>;

// Configuration function type for advanced customization
export type [ComponentConfigFn] = (data: DataType) => [ComponentOptions];
```

## Examples

<StoryDoc of={[componentName]Stories.Basic} code={rawExamples.[componentName]BasicExample}/>

<StoryDoc of={[componentName]Stories.AdvancedFeature} code={rawExamples.[componentName]AdvancedExample}/>

<StoryDoc of={[componentName]Stories.CustomStyling} code={rawExamples.[componentName]CustomExample}/>

<StoryDoc of={[componentName]Stories.InteractiveFeatures} code={rawExamples.[componentName]InteractiveExample}/>

<StoryDoc of={[componentName]Stories.DisabledStates} code={rawExamples.[componentName]DisabledExample}/>

## Component Architecture

Brief explanation of the component's internal structure and sub-components:

### Core Components
- **[MainComponent]**: Primary component and state management
- **[SubComponent1]**: Specific functionality description
- **[SubComponent2]**: Another sub-component purpose

### State Management
Explanation of signal-based state management approach:
- `signal1` controls primary behavior
- `signal2` provides two-way binding
- `signal3` tracks internal state

Use Cases

[Short, concrete examples of when this component is the right fit. Focus on real application contexts and integration scenarios.]

Accessibility

Keyboard Navigation: Explain tab order and shortcuts.

Screen Reader Support: ARIA labels and announcements.

Focus Management: How interactive elements are organized for accessibility.

Other Notes: Any additional considerations (e.g., high contrast support, localization, etc.)


---

**Tips for Using This Template:**

- Replace `[COMPONENT]`, `[ComponentName]`, `[StoryName]`, etc., with the actual values.
- Keep explanations concise, clear, and focused on developer understanding.
- Use `<ArgTypes/>` for auto-generated prop tables, `<Story />` for live previews, and `<Controls />` for interactive prop editing.
- The `Types` section should only list what’s really relevant to usage/configuration.
- If a section does not apply (e.g., Accessibility for a purely visual widget), feel free to omit or condense it.

