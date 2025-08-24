import { Meta, Story, Controls, ArgTypes } from '@storybook/addon-docs/blocks';
import * as stories from './[COMPONENT].stories';

<Meta of={stories} />

# [ComponentName]

_A brief summary describing what the component does, its main purpose, and the core user scenarios it covers._

## Key Features

- **[Feature 1]**: Short description.
- **[Feature 2]**: ...
- **[Feature 3]**: ...

## Configuration Options

<ArgTypes/>

### Types

```typescript
// Relevant types (enums, unions, interfaces, etc.).
type [YourType] = 'option1' | 'option2';
type [YourType2] = 'option1' | 'option2';
```

Examples

[Descriptive Example Name]

A short explanation of the scenario shown below.

<Story of={stories.[StoryName]} />
<p></p> // For break space between story and line
___
<Controls of={stories.[StoryName]} />

```ts
//  The code used in the example above (Use exactly the code used in the story)
// You must paste all example component snippet here including full component code, imports, template, etc. 
// Do not make up the code. Use example used in the story
```
<!-- Repeat this block for additional examples -->

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

