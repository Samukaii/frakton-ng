# Storybook Stories Guide for Frakton-NG Components

## Overview
This guide defines the required structure for creating Storybook stories for frakton-ng library components. Stories must follow consistent patterns for documentation, design token integration, and component demonstrations.

## Two Approaches for Story Implementation

### Approach 1: Direct Component Usage
For simple components with basic property demonstration:
```typescript
export const BasicStory: Story = {
  render: renderComponent(ComponentName),
  args: { /* component properties */ }
};
```

### Approach 2: Example Component Wrapper
For complex components requiring custom logic, events, or demonstrations:
```typescript
export const AdvancedStory: Story = {
  render: renderComponent(ExampleWrapperComponent),
  args: { /* wrapper component properties */ }
};
```

## File Structure

### Story File Location
Stories must be located at: `libs/frakton-ng/{component}/src/fkt-{component}.stories.ts`

### Example Components (When Needed)
When complex demonstrations are required:
```
libs/frakton-ng/{component}/src/examples/
├── index.ts                              # Export all example components
├── {example-name}-example/
│   ├── fkt-{component}-{example-name}-example.component.ts
│   ├── fkt-{component}-{example-name}-example.component.html
│   └── fkt-{component}-{example-name}-example.component.scss
```

## Required Imports

### Basic Stories
```typescript
import { Meta, StoryObj } from '@storybook/angular';
import { ComponentName } from 'frakton-ng/{component}';
import { customDocsControl } from '../../.storybook/decorators/custom-docs-control';
import { renderComponent } from '../../.storybook/decorators/render-component';
import designTokens from './fkt-{component}-design-tokens.json';
```

### With Example Components
```typescript
import { Meta, StoryObj } from '@storybook/angular';
import {
  ExampleComponent1,
  ExampleComponent2,
  // ... other example components
} from './examples';
import { MainComponent } from './fkt-{component}.component';
import { customDocsControl } from '../../.storybook/decorators/custom-docs-control';
import { renderComponent } from '../../.storybook/decorators/render-component';
import designTokens from './fkt-{component}-design-tokens.json';
```

## Meta Configuration

```typescript
const meta: Meta<ComponentName> = {
  title: 'Components/{Category}/{Component Name}',
  component: ComponentName,
  parameters: {
    docs: {
      description: {
        component: 'Brief component description explaining purpose and functionality.'
      }
    }
  },
  decorators: [
    customDocsControl({
      designTokens: designTokens as any
    }),
  ],
  argTypes: {
    // Property definitions...
  }
};
```

### Title Categories
- **Form**: Input-related components (inputs, selectors, pickers)
- **Layout**: Structural components (cards, containers, grids)
- **Navigation**: Navigation-related components (menus, tabs, breadcrumbs)
- **Feedback**: User feedback components (alerts, notifications, spinners)
- **Display**: Content display components (tables, lists, galleries)
- **Calendar**: Date/time related components
- **Media**: Image, video, audio components

## ArgTypes Documentation

### Property Definition Structure
```typescript
propertyName: {
  control: 'control-type',
  type: {
    name: 'type-name',
    value: {} // for complex types
  },
  table: {
    category: 'Category Name',
    type: {
      summary: 'TypeScript type',
      detail: 'import statement for complex types'
    },
    defaultValue: { summary: 'default value' }
  },
  description: 'Clear description of the property purpose'
}
```

### Control Types
- **text**: String inputs
- **boolean**: Boolean properties
- **select**: Enum/union types with `options` array
- **number**: Numeric inputs
- **date**: Date inputs
- **object**: Complex object types
- **color**: Color values

### Categories
- **Attributes**: Component configuration properties
- **Events**: Event handlers and callbacks
- **Methods**: Public methods that can be accessed in component

## Example Component Pattern

### When to Use Example Components
Create example components when stories need:
- Custom event handling logic
- Complex state management
- Integration with other components
- Interactive demonstrations
- Custom styling or layout

### Example Component Structure
```typescript
import { Component, input, model, signal, computed } from '@angular/core';
import { MainComponent, ConfigType } from 'frakton-ng/{component}';
import { OtherComponents } from 'frakton-ng/other';

@Component({
  selector: 'fkt-{component}-{example-name}-example',
  imports: [MainComponent, OtherComponents],
  templateUrl: './fkt-{component}-{example-name}-example.component.html',
  styleUrl: './fkt-{component}-{example-name}-example.component.scss'
})
export class Fkt{Component}{ExampleName}ExampleComponent {
  // Mirror the main component's inputs for Storybook controls
  currentDate = model(new Date());
  borderless = input(false);
  
  // Custom example logic
  customState = signal(initialValue);
  computedConfig = computed(() => {
    // Complex configuration logic
    return configurationObject;
  });

  // Event handlers
  handleCustomEvent(data: any): void {
    // Custom logic
  }
}
```

### Example Component Template
```html
<div class="example-container">
  <main-component
    [(property)]="property"
    [config]="computedConfig()"
    [otherProp]="otherProp()"
    (customEvent)="handleCustomEvent($event)"
  />
  
  <!-- Additional UI for demonstration -->
  <div class="demo-controls">
    <!-- Interactive elements, history, etc. -->
  </div>
</div>
```

### Export Pattern
In `examples/index.ts`:
```typescript
export { Fkt{Component}BasicExampleComponent } from './basic-example/fkt-{component}-basic-example.component';
export { Fkt{Component}AdvancedExampleComponent } from './advanced-example/fkt-{component}-advanced-example.component';
// ... other exports
```

## Story Implementation Patterns

### Simple Component Story
```typescript
export const BasicUsage: Story = {
  render: renderComponent(ComponentName),
  args: {
    label: 'Example Label',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic usage demonstration.'
      }
    }
  }
};
```

### Example Component Story
```typescript
export const InteractiveDemo: Story = {
  render: renderComponent(ExampleWrapperComponent),
  args: {
    currentDate: new Date(),
    borderless: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration with custom event handling and state management.'
      }
    }
  }
};
```

## Required Stories

### 1. Basic Story
- Name: `Basic` or `Basic{ComponentName}`
- Purpose: Show component with default configuration
- Implementation: Direct component usage

### 2. Variant Stories
Create stories for each significant variation:
- Different configurations
- Different states (disabled, loading, error)
- Different modes or formats

### 3. Interactive Stories
When complex interactions are needed:
- Use example components
- Show real-world usage patterns
- Demonstrate event handling

### 4. Edge Case Stories
- Disabled states
- Error conditions
- Empty/no-data states
- Loading states

## Complete Example: Calendar Component

```typescript
import type { Meta, StoryObj } from '@storybook/angular';
import {
  FktCalendarBasicExampleComponent,
  FktCalendarBorderlessExampleComponent,
  FktCalendarEventsExampleComponent
} from './examples';
import { FktCalendarComponent } from './fkt-calendar.component';
import { customDocsControl } from '../../.storybook/decorators/custom-docs-control';
import { renderComponent } from '../../.storybook/decorators/render-component';
import designTokens from './fkt-calendar-design-tokens.json';

const meta: Meta<FktCalendarComponent> = {
  title: 'Components/Calendar',
  component: FktCalendarComponent,
  decorators: [
    customDocsControl({
      designTokens: designTokens as any
    })
  ],
  argTypes: {
    currentDate: {
      control: 'date',
      type: {
        name: "object",
        value: {}
      },
      table: {
        category: "Attributes",
        type: {
          summary: 'ModelSignal<Date>'
        },
        defaultValue: {
          summary: 'new Date()'
        }
      },
      description: "Currently selected date in the calendar."
    },
    borderless: {
      control: 'boolean',
      table: {
        category: "Attributes",
        type: { summary: 'boolean' },
        defaultValue: { summary: "false" }
      },
      description: "Removes the calendar border for cleaner look."
    }
  }
};

type Story = StoryObj<FktCalendarComponent>;

export const Basic: Story = {
  render: renderComponent(FktCalendarBasicExampleComponent),
  args: {
    currentDate: new Date(),
    borderless: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic calendar with date selection and two-way binding.'
      }
    }
  }
};

export const InteractiveEvents: Story = {
  render: renderComponent(FktCalendarEventsExampleComponent),
  args: {
    currentDate: new Date(),
    borderless: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive calendar with event handling and click history.'
      }
    }
  }
};

export default meta;
```

## AI Agent Requirements

When creating or updating Storybook stories:

1. **Assess Complexity**: Determine if direct component usage or example components are needed
2. **File Structure**: Create proper directory structure for examples if needed
3. **Import Management**: Import all required components and utilities
4. **Design Token Integration**: Always include design tokens JSON
5. **ArgTypes Documentation**: Document all public properties with proper categories
6. **Story Coverage**: Create stories for major variants and use cases
7. **Example Components**: Follow naming and structure conventions exactly
8. **Export Pattern**: Maintain consistent export structure

## Validation Checklist

- [ ] Appropriate approach chosen (direct vs example components)
- [ ] File structure follows conventions
- [ ] All required imports present
- [ ] Design tokens imported and integrated
- [ ] Meta configuration complete
- [ ] ArgTypes documented with proper categories
- [ ] Stories cover major component functionality
- [ ] Example components follow naming conventions (if used)
- [ ] Example components exported in index.ts (if used)
- [ ] All stories have descriptive documentation
- [ ] Export default meta at end of file
