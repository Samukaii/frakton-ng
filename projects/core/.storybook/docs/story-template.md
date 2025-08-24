Storybook Story Template & Guidelines

Component Structure Example

```ts
import type {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {ComponentName} from './[component-name].component';
import {Example1, Example2} from './examples';

const meta: Meta<[ComponentName]> = {
	title: 'Components/[ComponentName]',
	component: [ComponentName],
	decorators: [
		moduleMetadata({
			imports: [
				[Example1],
				[Example2]
			]
		})
	],
	argTypes: {
		// Always document controls, type, description, and defaults
		[inputName]: {
			control: '[control type]', // e.g., 'select', 'text', 'date'
			options: [inputOptions],   // if applicable
			description: '[Input description]',
			table: {
				type: {summary: '[Type summary]'},
				defaultValue: {summary: '[Default value]'}
			}
		},
		// ...repeat for each input
	}
};

type Story = StoryObj<[ComponentName]>;

// EXAMPLE STORIES:
export const ExampleStory: Story = {
	render: (args) => ({
		template: '<[example1-selector] [input1]="input1" [input2]="input2"></[example1-selector]>',
		props: {
			...args,
			// Add conversions if needed (e.g., Date)
		},
	}),
	args: {
		// Set reasonable defaults
		input1: '[default1]',
		input2: '[default2]',
	}
};

// Repeat for additional stories...
export default meta;
```

---

Guidelines

1. Create Example Components:

Always place demo/example components in the examples folder inside the feature directory.

Name them clearly, e.g., MonthModeExampleComponent.



2. Binding Inputs:

Always bind all relevant inputs using [inputName]="argName" so Storybook controls are interactive.

Default args should match expected initial state/use cases.

3. Strong Typing & Documentation:

Use TypeScript types everywhere (Meta, StoryObj).

Fill in description, table.type, and table.defaultValue in every argType.

4. Props Conversion:

If an input is a Date, always convert incoming args (from Storybook) using new Date(args.inputName).

Explain this conversion if handing off to another dev.

5. Consistent Structure:

meta at the top, then all stories, then export default meta;.

Each story should use its own example component for clarity.

6. Naming:

Use PascalCase for component and story names.

Keep selector names descriptive in the template.

7. Minimal Boilerplate:

Only import and use components relevant to the current story.

---

Sample Minimal Story for Fast Reference

```ts
export const MonthMode: Story = {
	render: (args) => ({
		template: '<month-mode-example [mode]="mode" [currentDate]="currentDate"></month-mode-example>',
		props: {
			...args,
			currentDate: new Date(args.currentDate) // Always ensure Date type is passed
		},
	}),
	args: {
		mode: 'month',
		currentDate: new Date(),
	}
};
```

---

Key Reminders

Don’t write demo logic inside the main component.
Always use dedicated example/demo components for stories.

Prefer real bindings over hardcoded props in templates for control interactivity.

Document everything in argTypes for Storybook auto-generated docs.
