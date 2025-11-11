# Contributing to Frakton NG

Welcome to Frakton NG! This guide will walk you through the complete process of contributing a new component to our design system.

## Table of Contents

- [Quick Start](#quick-start)
- [Component Development](#component-development)
- [Documentation & Stories](#documentation--stories)
- [Examples](#examples)
- [Design Tokens](#design-tokens)
- [Testing](#testing)
- [Automated Build Process](#automated-build-process)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)
- Git

### Setup

```bash
git clone https://github.com/your-org/frakton-ng.git
cd frakton-ng
pnpm install
```

### Development Commands

```bash
# Start documentation development server
pnpm docs:dev

# Build the library
pnpm build

# Run tests
pnpm test

# Index stories, generate design tokens, and update documentation
pnpm run index:stories

# Lint and format
pnpm lint
pnpm format
```

## Component Development

### 1. Create Component Structure in libs/

Create your component in the library folder:

```
libs/frakton-ng/[component-name]/src/
├── fkt-[component-name].component.ts        # Main component
├── fkt-[component-name].component.scss      # Styles with design tokens
├── fkt-[component-name].component.html      # Template
├── fkt-[component-name].component.spec.ts   # Unit tests
└── public-api.ts                           # Public exports
```

### 2. Component Implementation

```typescript
// libs/frakton-ng/my-component/src/fkt-my-component.component.ts
import {Component, input, output, model} from '@angular/core';

@Component({
    selector: 'fkt-my-component',
    imports: [/* dependencies */],
    templateUrl: './fkt-my-component.component.html',
    styleUrl: './fkt-my-component.component.scss'
})
export class FktMyComponent {
    // Signal inputs - Required for TypeScript inference
    label = input('');
    disabled = input(false);
    variant = input<'primary' | 'secondary'>('primary');

    // Signal outputs - Required for callback type inference
    onClick = output<MouseEvent>();
    onValueChange = output<string>();

    // Signal models - Required for two-way binding
    value = model('');
}
```

### 3. Naming Conventions

- **Component:** `FktComponentNameComponent`
- **Selector:** `fkt-component-name`
- **File names:** `fkt-component-name.component.ts`
- **Folder names:** `component-name` (kebab-case)

### 4. Public API

Create `libs/frakton-ng/[component-name]/src/public-api.ts`:

```typescript
export * from './fkt-my-component.component';

// Export types, interfaces, constants
export type MyComponentVariant = 'primary' | 'secondary';
export const MY_COMPONENT_DEFAULTS = {
    variant: 'primary' as MyComponentVariant
};
```

## Documentation & Stories

### 1. Create Documentation Structure in apps/docs/

Create the documentation structure:

```
apps/docs/src/app/stories/[component-name]/
├── fkt-[component-name].stories.ts          # Stories configuration
├── fkt-[component-name].docs.md             # Component documentation
├── fkt-[component-name]-design-tokens.json  # Auto-generated design tokens
└── examples/                                # Example components
    ├── [example-name]/
    │   ├── [example-name].component.ts
    │   ├── [example-name].component.html
    │   └── [example-name].component.scss
    ├── index.ts                             # Examples export
    └── raw-examples.ts                      # Auto-generated examples bundle
```

### 2. Create Stories File

Create `apps/docs/src/app/stories/[component-name]/fkt-[component-name].stories.ts`:

```typescript
import {FktMyComponent} from 'frakton-ng/my-component';
import {Meta} from '@/models/meta';
import {Story} from '@/models/story';
import designTokens from './fkt-my-component-design-tokens.json';
import {DesignToken} from '@/models/design-token';
// @ts-expect-error
import documentation from './fkt-my-component.docs.md' with {loader: "text"};

const meta: Meta = {
    title: "Components/Category/My Component",  // Categories: Actions, Form, Navigation, Data Display, Feedback, Overlays
    component: FktMyComponent,
    loadType: 'lazy', // or 'eagerly' for critical components
    documentation,
    designTokens: designTokens as DesignToken[],
    argTypes: {
        label: {
            control: 'text',
            category: "Attributes",
            type: 'string',
            defaultValue: "''",
        },
        disabled: {
            control: 'boolean',
            category: "Attributes",
            type: 'boolean',
            defaultValue: "false",
        },
        variant: {
            control: 'select',
            category: "Attributes",
            type: 'MyComponentVariant',
            options: ['primary', 'secondary'],
            import: "import {MyComponentVariant} from 'frakton-ng/my-component'",
            defaultValue: "'primary'",
        }
    }
}

// Define your stories
export const Default: Story<FktMyComponent> = {
    description: "Basic usage of the component with default settings.",
    args: {
        label: 'Click me',
        disabled: false,
        variant: 'primary'
    }
};

export const Disabled: Story<FktMyComponent> = {
    description: "Component in disabled state.",
    args: {
        label: 'Disabled',
        disabled: true
    }
};

// Export meta as default
export default meta;
```

### 3. Create Documentation

Create `apps/docs/src/app/stories/[component-name]/fkt-[component-name].docs.md`:

```markdown
# Component Name

Brief description of what the component does and its primary use cases.

## Key Features

- Feature 1
- Feature 2
- Feature 3

## Basic Usage

```typescript
import { FktMyComponent } from 'frakton-ng/my-component';

@Component({
    imports: [FktMyComponent],
    template: `
        <fkt-my-component
            label="Click me"
            [disabled]="false"
            variant="primary"
            (onClick)="handleClick($event)"
        />
    `
})
export class MyPageComponent {
    handleClick(event: MouseEvent) {
        console.log('Clicked!', event);
    }
}
```

## API Reference

### Inputs

| Name     | Type    | Default | Description                       |
|----------|---------|---------|-----------------------------------|
| label    | string  | ''      | The text to display               |
| disabled | boolean | false   | Whether the component is disabled |

### Outputs

| Name    | Type       | Description                     |
|---------|------------|---------------------------------|
| onClick | MouseEvent | Fired when component is clicked |

## Accessibility

- ARIA attributes are properly set
- Keyboard navigation is supported
- Focus management is handled

## Best Practices

### Do ✅

- Use semantic HTML
- Follow accessibility guidelines
- Keep props minimal and focused

### Don't ❌

- Overcomplicate the API
- Ignore accessibility
- Mix too many concerns

## Use Cases

- **Primary actions**: Main call-to-action buttons
- **Secondary actions**: Supporting actions and links
- **Form controls**: Submit and cancel buttons


## Examples

### 1. Create Example Components

Create example components in `apps/docs/src/app/stories/[component-name]/examples/`:

```typescript
// basic-example.component.ts
import { Component } from '@angular/core';
import { FktMyComponent } from 'frakton-ng/my-component';

@Component({
    selector: 'basic-example',
    imports: [FktMyComponent],
    template: `
        <div class="example-container">
            <h3>Basic Usage</h3>
            <fkt-my-component
                label="Basic Example"
                (onClick)="handleClick()"
            />
        </div>
    `,
    styleUrl: './basic-example.component.scss'
})
export class BasicExampleComponent {
    handleClick() {
        alert('Clicked!');
    }
}
```

### 2. Export Examples

Create `apps/docs/src/app/stories/[component-name]/examples/index.ts`:

```typescript
export * from './basic-example/basic-example.component';
export * from './advanced-example/advanced-example.component';
```

## Design Tokens

### 1. SCSS Structure

Design tokens are automatically extracted from structured comments in your component SCSS files:

```scss
// libs/frakton-ng/my-component/src/fkt-my-component.component.scss

// <design-tokens>
/*
Component background color for default state.
@name --fkt-my-component-background
@reference --fkt-color-neutral-50
@category Colors
@type color
*/

/*
Component padding for comfortable spacing.
@name --fkt-my-component-padding
@reference --fkt-space-md
@category Spacing
@type size
*/

/*
Component border radius for consistent styling.
@name --fkt-my-component-border-radius
@reference --fkt-radius-md
@category Border
@type size
*/
// </design-tokens>

:host {
    --fkt-my-component-background: var(--fkt-color-neutral-50);
    --fkt-my-component-padding: var(--fkt-space-md);
    --fkt-my-component-border-radius: var(--fkt-radius-md);

    display: block;
    background: var(--fkt-my-component-background);
    padding: var(--fkt-my-component-padding);
    border-radius: var(--fkt-my-component-border-radius);
}
```

### 2. Token Structure

Each token comment must include:

- **Description**: What the token controls
- **@name**: CSS custom property name
- **@reference**: Global token reference (optional)
- **@category**: Grouping (Colors, Spacing, Typography, etc.)
- **@type**: Token type (color, size, font, etc.)
- **@component**: Sub-component (optional)

## Testing

### 1. Unit Tests

Create tests in `libs/frakton-ng/[component-name]/src/fkt-[component-name].component.spec.ts`:

```typescript
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FktMyComponent} from './fkt-my-component.component';

describe('FktMyComponent', () => {
    let component: FktMyComponent;
    let fixture: ComponentFixture<FktMyComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FktMyComponent]
        });
        fixture = TestBed.createComponent(FktMyComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit onClick when clicked', () => {
        spyOn(component.onClick, 'emit');

        const button = fixture.debugElement.nativeElement;
        button.click();

        expect(component.onClick.emit).toHaveBeenCalled();
    });
});
```

### 2. Run Tests

```bash
pnpm test my-component
```

## Automated Build Process

The documentation build process is **completely automated** via the `pnpm run index:stories` command. This single command:

### ✅ Automatically Handles

1. **Design Token Extraction**: Scans all SCSS files in `libs/frakton-ng/*/src/` and extracts design tokens to `apps/docs/src/app/stories/*/fkt-*-design-tokens.json`

2. **External Examples Generation**: Bundles all example files from `apps/docs/src/app/stories/*/examples/` into `raw-examples.ts` files for code viewing

3. **Stories Map Generation**: Scans all `.stories.ts` and `.docs.md` files to generate `apps/docs/src/app/stories/stories-map.ts` with proper routing

4. **TypeScript AST Parsing**: Uses ts-morph to analyze story metadata and determine load types (eager vs lazy)

### 🔄 Development Workflow

```bash
# 1. Create your component in libs/frakton-ng/[component-name]/
# 2. Create stories and docs in apps/docs/src/app/stories/[component-name]/
# 3. Run the indexer to generate all artifacts
pnpm run index:stories

# 4. Start development server to see your changes
pnpm docs:serve
```

### ⚠️ Manual Tasks

You only need to manually create:

1. **Component Implementation**: Write the actual component in `libs/frakton-ng/`
2. **Stories Configuration**: Create stories file with metadata and argTypes
3. **Documentation Writing**: Write the markdown documentation
4. **Example Components**: Create example use cases in `apps/docs/src/app/stories/*/examples/`
5. **Testing**: Write unit and integration tests

## Best Practices

### Component Design

- **Single Responsibility**: Each component should have one clear purpose
- **Signal-Based APIs**: Always use `input()`, `output()`, `model()` for modern Angular compatibility
- **Accessibility First**: Include proper ARIA attributes and keyboard support
- **Consistent Naming**: Follow the `fkt-` prefix convention
- **Type Safety**: Provide strong TypeScript types for all APIs

### Documentation

- **Progressive Complexity**: Start with simple examples, build to complex ones
- **Real Use Cases**: Show practical applications, not just API demos
- **Performance Notes**: Include performance considerations when relevant
- **Migration Guides**: Help users transition from other solutions

### Examples

- **Focused Scenarios**: Each example should demonstrate one specific use case
- **Production Ready**: Examples should be copy-pasteable for real applications
- **Commented Code**: Explain non-obvious implementation details

### Design Tokens

- **Semantic Naming**: Use semantic names that describe purpose, not appearance
- **Reference Global Tokens**: Link to global design system tokens when possible
- **Logical Categorization**: Group related tokens together
- **Component Variants**: Use sub-component tokens for complex components

## Folder Structure Summary

```
frakton-ng/
├── libs/frakton-ng/                    # Component library
│   └── [component-name]/
│       └── src/
│           ├── fkt-[component-name].component.ts
│           ├── fkt-[component-name].component.scss
│           ├── fkt-[component-name].component.html
│           ├── fkt-[component-name].component.spec.ts
│           └── public-api.ts
├── apps/docs/                         # Documentation app
│   └── src/app/stories/
│       └── [component-name]/
│           ├── fkt-[component-name].stories.ts
│           ├── fkt-[component-name].docs.md
│           ├── fkt-[component-name]-design-tokens.json  # Auto-generated
│           └── examples/
│               ├── [example-name]/
│               │   ├── [example-name].component.ts
│               │   ├── [example-name].component.html
│               │   └── [example-name].component.scss
│               ├── index.ts
│               └── raw-examples.ts     # Auto-generated
└── scripts/                           # Build automation
    ├── index-documentation.ts         # Main indexer script
    ├── generate-design-tokens.ts
    ├── generate-external-examples.ts
    └── generate-story-indexer.ts
```

### Getting Help

1. **Check Documentation**: Review existing components for examples
2. **Open Issues**: Create GitHub issues for bugs or feature requests
3. **Discussions**: Use GitHub Discussions for questions and ideas
4. **Code Review**: Submit PRs early for feedback on approach

## Pull Request Process

1. **Fork and Branch**: Create a feature branch from `main`
2. **Implement**: Follow this guide to implement your component
3. **Test**: Ensure all tests pass and add new tests for your component
4. **Document**: Write comprehensive documentation and examples
5. **Index**: Run `pnpm run index:stories` to update automated artifacts
6. **Review**: Submit PR with clear description of changes
7. **Iterate**: Address feedback and update as needed

### PR Checklist

- [ ] Component implemented in `libs/frakton-ng/[component-name]/` following signal-based API conventions
- [ ] Design tokens documented in SCSS comments with proper structure
- [ ] Stories file created in `apps/docs/src/app/stories/[component-name]/` with complete metadata
- [ ] Markdown documentation written with comprehensive examples
- [ ] Example components demonstrate real use cases (if applicable)
- [ ] Unit tests cover main functionality
- [ ] `pnpm run index:stories` executed successfully
- [ ] All automated checks pass
- [ ] Documentation builds and displays correctly

## License

By contributing to Frakton NG, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to Frakton NG! 🎉
