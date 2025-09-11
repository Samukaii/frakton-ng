Storybook Story Template & Guidelines

Component Stories Structure Example

```ts
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
	[ComponentName]BasicExampleComponent,
	[ComponentName]AdvancedExampleComponent,
	[ComponentName]CustomStylingExampleComponent,
	[ComponentName]InteractiveExampleComponent,
	[ComponentName]DisabledStatesExampleComponent
} from './examples';

const meta: Meta = {
	title: 'Components/[ComponentName]',
	component: [ComponentName]Component,
	decorators: [
		moduleMetadata({
			imports: [
				[ComponentName]BasicExampleComponent,
				[ComponentName]AdvancedExampleComponent,
				[ComponentName]CustomStylingExampleComponent,
				[ComponentName]InteractiveExampleComponent,
				[ComponentName]DisabledStatesExampleComponent,
			],
		})
	],
	argTypes: {
		configFn: {
			control: 'object',
			description: "Configuration function description here.",
			table: {
				category: "Attributes",
				type: {
					summary: "[ComponentName]ConfigFn",
					detail: 'import {[ComponentName]ConfigFn} from "frakton-ng/[package-name]"'
				},
				defaultValue: {
					summary: "undefined"
				}
			}
		},
		currentValue: {
			control: 'text',
			description: "Current value description.",
			table: {
				category: "Attributes",
				type: {summary: 'ModelSignal<ValueType>'},
				defaultValue: {summary: 'defaultValue'}
			}
		},
		booleanProp: {
			control: 'boolean',
			description: "Boolean property description.",
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
			// Transform any Date arguments
			currentDate: new Date(args["currentDate"])
		},
		template: `<[component-name]-basic-example ${argsToTemplate(args)} />`,
	}),
	args: {
		currentDate: new Date(),
		booleanProp: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Basic implementation with standard functionality. Perfect starting point for most use cases.'
			}
		}
	}
};

export const AdvancedFeature: StoryObj = {
	render: (args) => ({
		props: {
			...args,
			currentDate: new Date(args["currentDate"])
		},
		template: `<[component-name]-advanced-example ${argsToTemplate(args)} />`,
	}),
	args: {
		currentDate: new Date("2025-12-25T12:00:00.000Z"),
		booleanProp: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Advanced features demonstration. Shows complex configuration and extended capabilities.'
			}
		}
	}
};

export const CustomStyling: StoryObj = {
	render: (args) => ({
		props: {
			...args,
			currentDate: new Date(args["currentDate"])
		},
		template: `<[component-name]-custom-styling-example ${argsToTemplate(args)} />`,
	}),
	args: {
		currentDate: new Date("2025-12-25T12:00:00.000Z"),
		booleanProp: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Custom styling and theming examples. Demonstrates how to apply different visual styles and themes.'
			}
		}
	}
};

export const InteractiveFeatures: StoryObj = {
	render: (args) => ({
		props: {
			...args,
			currentDate: new Date(args["currentDate"])
		},
		template: `<[component-name]-interactive-example ${argsToTemplate(args)} />`,
	}),
	args: {
		currentDate: new Date(),
		booleanProp: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Interactive functionality with callbacks and event handling. Shows user interaction patterns and data flow.'
			}
		}
	}
};

export const DisabledStates: StoryObj = {
	render: (args) => ({
		props: {
			...args,
			currentDate: new Date(args["currentDate"])
		},
		template: `<[component-name]-disabled-states-example ${argsToTemplate(args)} />`,
	}),
	args: {
		currentDate: new Date("2025-12-25T12:00:00.000Z"),
		booleanProp: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Disabled states and conditional functionality. Perfect for forms, booking systems, and restricted access scenarios.'
			}
		}
	}
};

export default meta;
```

---

Guidelines

## 1. Example Component Structure

### Required Example Components (Standard Set)
Always create these 5 example components for comprehensive documentation:

- **`basic-example/`**: Simple, straightforward usage
- **`[feature]-example/`**: Advanced or specialized feature demonstration  
- **`custom-styling-example/`**: Visual customization and theming
- **`interactive-example/`**: Event handling and user interactions
- **`disabled-states-example/`**: Disabled, restricted, or conditional states

### File Organization
Each example component must have separate files:
```
examples/
├── basic-example/
│   ├── [component-name]-basic-example.component.ts
│   ├── [component-name]-basic-example.component.html  
│   └── [component-name]-basic-example.component.scss
├── custom-styling-example/
│   ├── [component-name]-custom-styling-example.component.ts
│   ├── [component-name]-custom-styling-example.component.html
│   └── [component-name]-custom-styling-example.component.scss
└── ... (other examples)
```

## 2. Import Requirements

### Component Imports
- Always import from `'frakton-ng/[component-package]'` not relative paths
- Include `DatePipe` when displaying dates in templates
- Import required types and interfaces for configuration functions

```typescript
import { Component, model } from '@angular/core';
import { ComponentName, ComponentConfigFn } from 'frakton-ng/package-name';
import { DatePipe } from '@angular/common';
```

### Story Imports
- Import all example components in stories file
- Use `moduleMetadata` decorator for component registration
- Set `layout: 'centered'` in parameters

## 3. Documentation Standards

### Story Descriptions
Each story must include a descriptive `parameters.docs.description.story` explaining:
- What the example demonstrates
- When to use this pattern
- Key features highlighted

### Component Naming Convention
- Component: `[ComponentName][Feature]ExampleComponent`
- Selector: `[component-name]-[feature]-example`
- Story export: `[FeatureName]` (PascalCase)

## 4. Raw Examples File

### Required Structure
Create `raw-examples.ts` with raw-loader imports:
```typescript
import componentBasicExampleTemplate from "!!raw-loader!./basic-example/component-basic-example.component.html";
import componentBasicExampleStyles from "!!raw-loader!./basic-example/component-basic-example.component.scss";
import componentBasicExampleTypescript from "!!raw-loader!./basic-example/component-basic-example.component.ts";

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
	// ... repeat for each example
};
```

## 5. Component Implementation

### Signal-Based Architecture
- Use `model()` for two-way binding inputs
- Use `input()` for one-way data flow
- Use `signal()` for internal component state
- Implement configuration functions with proper typing

### Template Requirements
- Always include example container with descriptive title
- Show selected/current state when relevant
- Use proper Angular pipes for data formatting
- Include legends or helpers for complex examples

---

Sample Minimal Story for Fast Reference

```ts
export const MonthMode: StoryObj = {
	render: (args) => ({
		props: {
			...args,
			currentDate: new Date(args["currentDate"]) // Always ensure Date type is passed
		},
		template: `<month-mode-example ${argsToTemplate(args)} />`,
	}),
	args: {
		mode: 'month',
		currentDate: new Date(),
	},
	parameters: {
		docs: {
			description: {
				story: 'Description of what this story demonstrates and when to use it.'
			}
		}
	}
};
```

---

Key Reminders

Don’t write demo logic inside the main component.
Always use dedicated example/demo components for stories.

Prefer real bindings over hardcoded props in templates for control interactivity.

Document everything in argTypes for Storybook auto-generated docs.
