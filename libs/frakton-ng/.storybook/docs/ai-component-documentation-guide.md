# AI Component Documentation Guide

This guide provides comprehensive instructions for AI assistants to create high-quality component documentation following the established patterns in this Frakton-NG project.

## 📋 Documentation Requirements Checklist

When documenting a component, you must create ALL of the following:

### 1. Core Documentation Files
- [ ] `[component-name].docs.mdx` - Main documentation with StoryDoc blocks
- [ ] `[component-name].stories.ts` - Storybook stories with example components
- [ ] `examples/index.ts` - Barrel file exporting all example components
- [ ] `examples/raw-examples.ts` - Raw-loader imports for code display

### 2. Required Example Components (Standard Set)
Create exactly these 5 example types with separate folder structure:

- [ ] **`basic-example/`** - Simple usage, two-way binding, essential functionality
- [ ] **`[specialized-feature]-example/`** - Component-specific advanced feature (e.g., borderless, multi-select)
- [ ] **`custom-styling-example/`** - Visual customization, CSS classes, theming
- [ ] **`events-example/`** (or `interactive-example/`) - Event handlers, callbacks, user interactions
- [ ] **`disabled-dates-example/`** (or `disabled-states-example/`) - Disabled states, conditional functionality

### 3. File Structure for Each Example
```
examples/
├── basic-example/
│   ├── [component-name]-basic-example.component.ts      ✅ Required
│   ├── [component-name]-basic-example.component.html    ✅ Required  
│   └── [component-name]-basic-example.component.scss    ✅ Required
├── [feature]-example/
│   ├── [component-name]-[feature]-example.component.ts
│   ├── [component-name]-[feature]-example.component.html
│   └── [component-name]-[feature]-example.component.scss
└── ... (repeat for all 5 examples)
```

## 🔧 Implementation Standards

### ArgTypes Configuration (CRITICAL for DX)
ArgTypes must include comprehensive type information for developer experience:

```typescript
// ✅ REQUIRED: Complete argType with DX type information
configFn: {
	control: 'object',
	description: "Detailed description of what this function does and how to use it.",
	table: {
		category: "Attributes",
		type: {
			summary: "ComponentConfigFn", // EXACT interface/type name from component
			detail: 'import {ComponentConfigFn} from "frakton-ng/component-package"' // EXACT import statement
		},
		defaultValue: {
			summary: "undefined" // or actual default value
		}
	}
},
currentDate: {
	control: 'date',
	description: "Description with usage context and reactive binding info.",
	table: {
		category: "Attributes",
		type: {summary: 'ModelSignal<Date>'}, // Exact type from component input
		defaultValue: {summary: 'new Date()'}
	}
}
```

**ArgTypes Requirements:**
- ✅ `table.type.summary`: MUST match exact interface/type name from component
- ✅ `table.type.detail`: MUST include complete import statement with package name
- ✅ `table.category`: Always "Attributes" for consistency
- ✅ `table.defaultValue.summary`: Show actual default value or "undefined"
- ✅ `description`: Include usage context and when to use this property
- ✅ `control`: Appropriate Storybook control type

### Component Import Requirements
```typescript
// ✅ Correct imports
import { Component, model, signal } from '@angular/core';
import { ComponentName, ComponentConfigFn } from 'frakton-ng/package-name';
import { DatePipe } from '@angular/common';  // When displaying dates

// ❌ Incorrect - never use relative imports
import { ComponentName } from '../../component-name.component';
```

### Component Architecture Requirements
```typescript
@Component({
	selector: '[component-name]-[feature]-example',
	imports: [ComponentName, DatePipe],              // ✅ Include DatePipe when needed
	templateUrl: './[file-name].component.html',     // ✅ Separate template file
	styleUrl: './[file-name].component.scss'         // ✅ Separate style file
})
export class ComponentFeatureExampleComponent {
	// ✅ Use signals for state management
	selectedValue = model(defaultValue);
	internalState = signal(initialValue);
	
	// ✅ Implement configuration functions with proper typing
	configFn: ComponentConfigFn = (data: DataType) => {
		return {
			// configuration logic
		};
	};
}
```

### Story Structure Requirements
```typescript
// ✅ REQUIRED: Use render function with args transformation
export const ExampleStory: StoryObj = {
	render: (args) => ({
		props: {
			...args,
			// ✅ CRITICAL: Transform Date arguments to ensure proper typing
			currentDate: new Date(args["currentDate"])
		},
		template: `<component-example-name ${argsToTemplate(args)} />`,
	}),
	args: {
		currentDate: new Date(), // Default args
		booleanProperty: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Specific description of what this story demonstrates and when to use it.'
			}
		}
	}
};
```

### Template Requirements
```html
<!-- ✅ Always include descriptive container -->
<div class="example-container">
	<h3>Example Title</h3>
	<p class="description">Brief explanation of what this example demonstrates</p>
	
	<!-- ✅ Component usage with proper bindings -->
	<component-name 
		[(modelProperty)]="selectedValue"
		[configProperty]="configFn"
		[booleanProperty]="true"
	/>
	
	<!-- ✅ Show current state when relevant -->
	<p class="selected-date">Selected: {{ selectedValue() | date:'fullDate' }}</p>
	
	<!-- ✅ Include legends/helpers for complex examples -->
	<div class="legend">
		<!-- Legend items for complex examples -->
	</div>
</div>
```

## 📝 Documentation File Templates

### Stories File Template
```typescript
import { argsToTemplate, Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
	ComponentBasicExampleComponent,
	ComponentFeatureExampleComponent,
	ComponentCustomStylingExampleComponent,
	ComponentEventsExampleComponent,
	ComponentDisabledStatesExampleComponent
} from './examples';
import { ComponentName } from './component-name.component';
import { ComponentConfigFn } from './component-name.types';

const meta: Meta = {
	title: 'Components/ComponentName',
	component: ComponentName,
	decorators: [
		moduleMetadata({
			imports: [
				ComponentBasicExampleComponent,
				ComponentFeatureExampleComponent,
				ComponentCustomStylingExampleComponent,
				ComponentEventsExampleComponent,
				ComponentDisabledStatesExampleComponent,
			],
		})
	],
	// CRITICAL: ArgTypes with proper DX type information
	argTypes: {
		configFn: {
			control: 'object',
			description: "Advanced configuration function description...",
			table: {
				category: "Attributes",
				type: {
					summary: "ComponentConfigFn", // Exact interface name
					detail: 'import {ComponentConfigFn} from "frakton-ng/component-package"' // Import statement
				},
				defaultValue: {
					summary: "undefined"
				}
			}
		},
		currentValue: {
			control: 'date', // or appropriate control
			description: "Current value description with usage guidance.",
			table: {
				category: "Attributes",
				type: {summary: 'ModelSignal<Date>'}, // Exact type
				defaultValue: {summary: 'new Date()'} // Default value
			}
		},
		booleanProperty: {
			control: 'boolean',
			description: "Boolean property description and usage scenarios.",
			table: {
				category: "Attributes",
				type: {summary: 'boolean'},
				defaultValue: {summary: "false"}
			}
		},
	}
};

export const Basic: StoryObj = {
	render: (args) => ({
		props: {
			...args,
			// Transform Date arguments to ensure proper typing
			currentValue: new Date(args["currentValue"])
		},
		template: `<component-basic-example ${argsToTemplate(args)} />`,
	}),
	args: {
		currentValue: new Date(),
		booleanProperty: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Basic implementation with standard functionality. Perfect starting point for most use cases.'
			}
		}
	}
};

// Repeat for all 5 examples with descriptive story descriptions
export default meta;
```

### Raw Examples File Template
```typescript
import componentBasicExampleTemplate from "!!raw-loader!./basic-example/component-basic-example.component.html";
import componentBasicExampleStyles from "!!raw-loader!./basic-example/component-basic-example.component.scss";
import componentBasicExampleTypescript from "!!raw-loader!./basic-example/component-basic-example.component.ts";
// ... repeat for all examples

export const rawExamples = {
	componentBasicExample: {
		name: "ComponentBasicExample",
		files: [
			{
				name: "component-basic-example.component.html",
				content: componentBasicExampleTemplate as string,
				language: "html" as "html",
			},
			{
				name: "component-basic-example.component.ts",
				content: componentBasicExampleTypescript as string,
				language: "typescript" as "typescript",
			},
			{
				name: "component-basic-example.component.scss",
				content: componentBasicExampleStyles as string,
				language: "css" as "css",
			},
		]
	},
	// ... repeat for all examples
};
```

### MDX Documentation Template
```mdx
import { ArgTypes, Meta } from '@storybook/addon-docs/blocks';
import * as componentStories from './component-name.stories';
import { rawExamples } from "./examples/raw-examples";
import { StoryDoc } from "../../.storybook/blocks/StoryDoc";

<Meta of={componentStories} />

# ComponentName

Brief description of component purpose and main functionality.

## Key Features

- **Feature 1**: Description of key capability
- **Feature 2**: Another important feature
- **Signal-Based Architecture**: Built with modern Angular signals

## Configuration Options

<ArgTypes/>

### Types

```typescript
// Include all relevant types with inline documentation
export type ComponentStep = 'option1' | 'option2' | 'option3';

export interface ComponentConfig {
	property: string;                    // Property description
	onClick?: () => void;               // Optional callback
	isEnabled: boolean;                 // Boolean state
	classes: string[];                  // CSS classes
}
```

## Examples

<StoryDoc of={componentStories.Basic} code={rawExamples.componentBasicExample}/>

<StoryDoc of={componentStories.AdvancedFeature} code={rawExamples.componentFeatureExample}/>

<StoryDoc of={componentStories.CustomStyling} code={rawExamples.componentCustomExample}/>

<StoryDoc of={componentStories.Events} code={rawExamples.componentEventsExample}/>

<StoryDoc of={componentStories.DisabledStates} code={rawExamples.componentDisabledExample}/>

## Use Cases

**Use Case 1**: Description of when to use this component

**Use Case 2**: Another common scenario

## Accessibility

**Keyboard Navigation**: Description of keyboard support

**Screen Reader Support**: ARIA and accessibility features

## Performance

**Signal-Based Reactivity**: Efficiency and performance benefits

---

## 🎯 Content Guidelines

### Example Component Purposes
1. **Basic Example**: Show the simplest, most common usage with two-way binding
2. **Feature Example**: Demonstrate the component's specialized or advanced feature
3. **Custom Styling**: Visual customization, CSS classes, themes, and appearance options
4. **Events Example**: User interactions, callbacks, click handlers, state changes
5. **Disabled States**: Conditional functionality, restrictions, disabled dates/options

### Story Descriptions
Each story must include specific, helpful descriptions that explain:
- What the example demonstrates
- When developers should use this pattern
- Key features being highlighted
- Real-world application scenarios

### Documentation Quality
- Include comprehensive type definitions with inline comments
- Provide practical use cases and integration scenarios
- Cover accessibility and performance considerations
- Ensure all examples demonstrate real-world patterns

## ⚠️ Common Mistakes to Avoid

❌ **Don't create inline templates/styles** - Always use separate files
❌ **Don't use relative imports** - Always use package imports (`frakton-ng/package`)
❌ **Don't mix demo logic in main component** - Keep examples separate
❌ **Don't skip any of the 5 required examples** - All examples are mandatory
❌ **Don't forget DatePipe imports** - Include when displaying dates
❌ **Don't omit StoryDoc blocks** - Essential for code display in documentation
❌ **Don't use generic descriptions** - Be specific about what each example shows
❌ **Don't omit argTypes configuration** - Critical for DX and auto-generated docs
❌ **Don't use incorrect type names** - Must match exact interface names from component
❌ **Don't forget Date transformations** - Always convert string dates to Date objects in render functions
❌ **Don't use static templates** - Always use render functions with argsToTemplate for interactivity

## ✅ Success Criteria

A complete component documentation should:
- ✅ Include all 5 required example types with separate files
- ✅ Use proper import paths and Angular signals architecture
- ✅ Have comprehensive MDX documentation with StoryDoc blocks
- ✅ Include properly structured raw-examples.ts with raw-loader imports
- ✅ Provide meaningful, specific story descriptions
- ✅ Demonstrate real-world usage patterns and customization options
- ✅ Cover accessibility, performance, and architectural considerations
