# Frakton NG Documentation System - Complete Technical Guide

> A comprehensive explanation of how Frakton NG's custom documentation system works, from component creation to interactive documentation rendering.

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [The Complete Flow](#the-complete-flow)
4. [Layer 1: Component Development](#layer-1-component-development)
5. [Layer 2: Story Creation](#layer-2-story-creation)
6. [Layer 3: Build-Time Generation](#layer-3-build-time-generation)
7. [Layer 4: Runtime Documentation](#layer-4-runtime-documentation)
8. [Data Models](#data-models)
9. [Advanced Features](#advanced-features)
10. [Design Decisions](#design-decisions)

---

## Overview

Frakton NG uses a **custom documentation system** built entirely in Angular, inspired by Storybook's API ergonomics but implemented natively for complete control, performance, and Angular-specific optimizations.

### Key Characteristics

- **Convention over Configuration**: File structure and naming determine behavior
- **Auto-Generation**: Design tokens, examples, and navigation are generated automatically
- **Type-Safe**: Full TypeScript inference throughout
- **Signal-Based**: Reactive architecture using Angular signals
- **Zero External Dependencies**: No Storybook, no iframe isolation, pure Angular
- **Performance-First**: Code splitting, lazy loading, caching

### Why Custom?

1. **Design Token Live Editing**: Impossible to implement cleanly in Storybook
2. **Type-Safe Playground**: Angular-native component creation with signal bindings
3. **Zero-Conflict Demo**: Documentation itself demonstrates the zero-conflict architecture
4. **Complete Control**: Every pixel, every interaction, every optimization
5. **Easy Contribution**: Simple Angular code, no Storybook complexity

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    DOCUMENTATION SYSTEM                          │
└─────────────────────────────────────────────────────────────────┘
           │
           │
    ┌──────┴──────┐
    │             │
    ▼             ▼
┌────────┐    ┌────────┐
│  LIB   │    │  DOCS  │
│ LAYER  │    │  LAYER │
└────────┘    └────────┘
    │             │
    │             │
    ├─► Component ─────┐
    │   + SCSS         │
    │   + Types        │
    │                  │
    │                  ├─► Story Definition
    │                  │   + Meta
    │                  │   + Stories
    │                  │
    │                  ├─► Markdown Docs
    │                  │   + Custom Elements
    │                  │
    │                  └─► Examples (optional)
    │                      + Component files
    │
    ▼
┌──────────────────────────────────────┐
│   BUILD-TIME GENERATION SCRIPTS      │
├──────────────────────────────────────┤
│  1. generate-design-tokens.ts        │
│     ↓ SCSS → JSON                    │
│                                      │
│  2. generate-external-examples.ts    │
│     ↓ Components → raw-examples.ts   │
│                                      │
│  3. generate-story-indexer.ts        │
│     ↓ All stories → stories-map.ts   │
└──────────────────────────────────────┘
    │
    ▼
┌──────────────────────────────────────┐
│        RUNTIME APPLICATION           │
├──────────────────────────────────────┤
│  Router → DocsPage                   │
│           ↓                          │
│           StoryLoader (cache)        │
│           ↓                          │
│           FeaturesTab                │
│           ├─► Playground             │
│           │   ├─► Dynamic Component  │
│           │   ├─► Controls Panel     │
│           │   └─► Design Tokens      │
│           │                          │
│           ├─► Source Code            │
│           │   └─► Auto-Generated     │
│           │                          │
│           └─► API Reference (MD)     │
│               └─► Custom Elements    │
└──────────────────────────────────────┘
```

---

## The Complete Flow

### Step-by-Step Journey: Component → Documentation

```
1. Developer creates component in libs/frakton-ng/button/
   ├─ fkt-button.component.ts
   ├─ fkt-button.component.scss (with design tokens)
   └─ fkt-button.component.html

2. Developer creates story in apps/docs/src/app/stories/button/
   ├─ fkt-button.stories.ts (Meta + Stories)
   ├─ fkt-button.docs.md (Markdown documentation)
   └─ examples/ (optional complex examples)

3. Developer runs: pnpm index:docs
   ├─ Extracts design tokens from SCSS → fkt-button-design-tokens.json
   ├─ Processes examples → raw-examples.ts
   └─ Generates navigation → stories-map.ts (with imports)

4. Developer runs: pnpm docs:dev
   ├─ Angular dev server starts
   └─ Documentation is accessible at localhost:4200

5. User navigates to /docs/button
   ├─ Router loads DocsPageComponent
   ├─ StoryLoaderService fetches story data (lazy/eager)
   ├─ Component renders dynamically with signal bindings
   └─ Playground, code examples, and docs are interactive
```

---

## Layer 1: Component Development

### Location: `libs/frakton-ng/[component-name]/`

Components are developed in the library monorepo with a specific structure:

```
libs/frakton-ng/button/
├── src/
│   ├── fkt-button.component.ts        # Main component
│   ├── fkt-button.component.html      # Template
│   ├── fkt-button.component.scss      # Styles with design tokens
│   ├── fkt-button.component.spec.ts   # Tests
│   └── fkt-button.types.ts            # TypeScript types
├── index.ts
└── public-api.ts                      # Public exports
```

### Design Tokens in SCSS

Design tokens are documented directly in the SCSS using structured comments:

```scss
// libs/frakton-ng/button/src/fkt-button.component.scss

// <design-tokens>
/*
Gap between button content elements (icon and text).
@name --fkt-button-content-gap
@reference --fkt-space-xs
@category Spacing
@type size
*/
$content-gap: var(--fkt-button-content-gap, var(--fkt-space-xs));

/*
Padding for button (vertical and horizontal).
@name --fkt-button-padding-vertical
@reference --fkt-space-xs
@category Spacing
@type size
*/
$padding-vertical: var(--fkt-button-padding-vertical, var(--fkt-space-xs));

/*
Button background color for primary theme.
@name --fkt-button-primary-background
@reference --fkt-color-primary
@category Colors
@type color
*/
$primary-bg: var(--fkt-button-primary-background, var(--fkt-color-primary));
// </design-tokens>

:host {
    display: inline-flex;
    gap: $content-gap;
    padding: $padding-vertical var(--fkt-button-padding-horizontal);
    background: $primary-bg;
    // ... rest of styles
}
```

**Key Conventions:**
- Tokens wrapped in `// <design-tokens>` and `// </design-tokens>`
- Each token has a comment block with:
  - **Description**: What the token controls
  - **@name**: CSS custom property name
  - **@reference**: Global token it references (optional)
  - **@category**: Grouping (Colors, Spacing, Typography, etc.)
  - **@type**: Token type (color, size, font, etc.)

### Component Implementation

```typescript
// libs/frakton-ng/button/src/fkt-button.component.ts

import { Component, input, output } from '@angular/core';

@Component({
    selector: 'fkt-button',
    templateUrl: './fkt-button.component.html',
    styleUrl: './fkt-button.component.scss',
    standalone: true
})
export class FktButtonComponent {
    // Signal inputs - enables TypeScript inference in stories
    text = input<string>('');
    theme = input<FktButtonTheme>('raised');
    color = input<FktColor>('primary');
    disabled = input<boolean>(false);
    loading = input<boolean>(false);

    // Signal outputs - type-safe event handling
    onClick = output<MouseEvent>();
}

export type FktButtonTheme = 'raised' | 'stroked' | 'basic';
```

---

## Layer 2: Story Creation

### Location: `apps/docs/src/app/stories/[component-name]/`

Stories define how components are documented and demonstrated.

```
apps/docs/src/app/stories/button/
├── fkt-button.stories.ts              # Story definitions
├── fkt-button.docs.md                 # Markdown documentation
├── fkt-button-design-tokens.json      # Auto-generated
└── examples/                          # Optional complex examples
    ├── text-variants/
    │   ├── text-variants-example.component.ts
    │   ├── text-variants-example.component.html
    │   └── text-variants-example.component.scss
    ├── index.ts
    └── raw-examples.ts                # Auto-generated
```

### Story File Structure

```typescript
// apps/docs/src/app/stories/button/fkt-button.stories.ts

import { FktButtonComponent, fktButtonThemes } from 'frakton-ng/button';
import { fktColors } from 'frakton-ng/core';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
import designTokens from './fkt-button-design-tokens.json';
// @ts-expect-error - Markdown imported as text via esbuild
import documentation from './fkt-button.docs.md' with { loader: "text" };

// META: Global component metadata
const meta: Meta = {
    title: "Components/Actions/Button",  // Hierarchical title → menu structure
    component: FktButtonComponent,        // Angular component class
    loadType: 'eagerly',                  // 'eagerly' | 'lazy' (optimization)
    description: "Interactive button component with multiple themes and states",
    documentation,                        // Markdown content as string
    designTokens: designTokens as DesignToken[],  // Auto-generated tokens

    // ARG TYPES: Define playground controls
    argTypes: {
        text: {
            control: 'text',               // Control type: text | select | boolean | color
            category: "Attributes",        // Groups in playground panel
            type: 'string',                // TypeScript type (for docs)
            defaultValue: "''",            // Default value as string
            description: 'Button text content'
        },
        theme: {
            control: 'select',
            category: "Attributes",
            type: 'FktButtonTheme',
            options: fktButtonThemes,      // Dropdown options
            import: "import { FktButtonTheme } from 'frakton-ng/button'",
            defaultValue: "'raised'",
        },
        color: {
            control: 'select',
            category: "Attributes",
            type: 'FktColor',
            options: fktColors,
            import: "import { FktColor } from 'frakton-ng/core'",
            defaultValue: "'primary'",
        },
        disabled: {
            control: 'boolean',
            category: "Attributes",
            type: 'boolean',
            defaultValue: "false",
        },
        loading: {
            control: 'boolean',
            category: "Attributes",
            type: 'boolean',
            defaultValue: "false",
        },
        onClick: {
            control: 'event',
            category: "Events",
            type: 'EventEmitter<MouseEvent>',
        }
    }
}

// STORIES: Component variations
export const Raised: Story<FktButtonComponent> = {
    description: "Standard button with elevated appearance using Material Design principles",
    args: {
        text: 'Click me',
        theme: 'raised',
        color: 'primary',
        disabled: false,
        loading: false
    }
};

export const Stroked: Story<FktButtonComponent> = {
    description: "Outlined button for secondary actions",
    args: {
        text: 'Secondary Action',
        theme: 'stroked',
        color: 'accent',
    }
};

export const WithIcon: Story<FktButtonComponent> = {
    description: "Button with icon support",
    args: {
        text: 'Download',
        icon: 'download',
        theme: 'raised',
    }
};

// Story with custom component (complex example)
import { TextVariantsExampleComponent } from './examples';

export const TextVariants: Story<TextVariantsExampleComponent> = {
    component: TextVariantsExampleComponent,  // Override component
    description: "Comprehensive showcase of all button text variants",
    args: {},  // Component handles its own state
};

export default meta;
```

### Markdown Documentation

```markdown
<!-- apps/docs/src/app/stories/button/fkt-button.docs.md -->

## Key Features

- **Multiple Themes**: Raised, stroked, and basic visual themes
- **Flexible Variants**: Default, icon-only, and rectangular button variants
- **Loading States**: Built-in loading state with spinner
- **Custom Colors**: Support for semantic colors and custom hex values
- **Accessibility**: Full keyboard support and ARIA attributes

## Basic Usage

```typescript
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
  selector: 'app-example',
  template: `
    <fkt-button
      text="Click me"
      theme="raised"
      color="primary"
      [disabled]="false"
      [loading]="isLoading()"
      (click)="handleClick()">
    </fkt-button>
  `,
  imports: [FktButtonComponent]
})
export class ExampleComponent {
  isLoading = signal(false);

  handleClick() {
    this.isLoading.set(true);
    // Perform action...
  }
}
```

## Configuration Options

<arg-types></arg-types>

## Examples

<story-examples></story-examples>

## Accessibility

- **Keyboard Navigation**: Full keyboard support with Enter/Space activation
- **Screen Reader Support**: Proper ARIA labels and roles
- **Focus Management**: Visible focus indicators and focus trap support
- **Loading State**: Announces loading state to screen readers

## Best Practices

### Do ✅

- Use semantic colors for consistent theming
- Provide clear, action-oriented text
- Use loading states for async operations
- Include icons for better visual hierarchy

### Don't ❌

- Don't use buttons for navigation (use links)
- Don't create overly long button text
- Don't stack too many buttons without grouping
```

**Custom Elements in Markdown:**
- `<arg-types></arg-types>` - Renders table of argTypes
- `<story-examples></story-examples>` - Renders all stories with playground
- `<beta-alert>Text</beta-alert>` - Shows beta warning

### External Examples (Optional)

For complex demonstrations that require multiple files:

```typescript
// apps/docs/src/app/stories/button/examples/text-variants/text-variants-example.component.ts

import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
    selector: 'text-variants-example',
    templateUrl: './text-variants-example.component.html',
    styleUrl: './text-variants-example.component.scss',
    standalone: true,
    imports: [FktButtonComponent]
})
export class TextVariantsExampleComponent {
    variants = ['raised', 'stroked', 'basic'] as const;
    colors = ['primary', 'accent', 'success', 'warning', 'danger'] as const;
}
```

```html
<!-- text-variants-example.component.html -->
<div class="variants-grid">
  @for (variant of variants; track variant) {
    <div class="variant-section">
      <h3>{{ variant }}</h3>
      @for (color of colors; track color) {
        <fkt-button
          [text]="color"
          [theme]="variant"
          [color]="color">
        </fkt-button>
      }
    </div>
  }
</div>
```

```typescript
// apps/docs/src/app/stories/button/examples/index.ts
export * from './text-variants/text-variants-example.component';
export * from './icon-variants/icon-variants-example.component';
// Export all example components
```

---

## Layer 3: Build-Time Generation

### Command: `pnpm index:docs`

This runs the main script: `scripts/index-documentation.ts`

### Script 1: Generate Design Tokens

**File:** `scripts/generate-design-tokens.ts`

**Purpose:** Extract design tokens from SCSS files and generate JSON

**Process:**

```typescript
// 1. Find all SCSS files in libs/frakton-ng/*/src/
const scssFiles = glob('libs/frakton-ng/*/src/**/*.scss');

// 2. For each SCSS file, extract token blocks
const extractTokens = (filePath: string) => {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Find blocks between // <design-tokens> and // </design-tokens>
    const tokenBlockRegex = /\/\/\s*<design-tokens>([\s\S]*?)\/\/\s*<\/design-tokens>/;
    const match = content.match(tokenBlockRegex);

    if (!match) return [];

    // Extract individual token comments
    const commentsRegex = /\/\*([\s\S]*?)\*\//gm;
    const comments = [...match[1].matchAll(commentsRegex)];

    return comments.map(comment => {
        const lines = comment[1].split('\n');
        const token: DesignToken = {
            description: lines[0].trim(),
            name: '',
            reference: '',
            category: '',
            type: '',
            defaultValue: ''
        };

        // Parse @annotations
        lines.forEach(line => {
            if (line.includes('@name')) {
                token.name = line.split('@name')[1].trim();
            }
            if (line.includes('@reference')) {
                token.reference = line.split('@reference')[1].trim();
            }
            if (line.includes('@category')) {
                token.category = line.split('@category')[1].trim();
            }
            if (line.includes('@type')) {
                token.type = line.split('@type')[1].trim();
            }
        });

        // Resolve default value from global tokens
        if (token.reference) {
            token.defaultValue = resolveGlobalToken(token.reference);
        }

        return token;
    });
};

// 3. Write JSON to stories folder
const outputPath = `apps/docs/src/app/stories/${componentName}/fkt-${componentName}-design-tokens.json`;
fs.writeFileSync(outputPath, JSON.stringify(tokens, null, 2));
```

**Output Example:**

```json
[
  {
    "description": "Gap between button content elements (icon and text).",
    "name": "--fkt-button-content-gap",
    "reference": "--fkt-space-xs",
    "category": "Spacing",
    "type": "size",
    "defaultValue": "0.5rem"
  },
  {
    "description": "Button background color for primary theme.",
    "name": "--fkt-button-primary-background",
    "reference": "--fkt-color-primary",
    "category": "Colors",
    "type": "color",
    "defaultValue": "#1f2937"
  }
]
```

### Script 2: Generate External Examples

**File:** `scripts/generate-external-examples.ts`

**Purpose:** Bundle example components' source code for display

**Process:**

```typescript
// 1. Find examples folders
const examplesFolders = glob('apps/docs/src/app/stories/*/examples/');

examplesFolders.forEach(folder => {
    // 2. Find all component folders
    const componentFolders = fs.readdirSync(folder).filter(isDirectory);

    const examplesMap = {};

    componentFolders.forEach(componentName => {
        const componentPath = `${folder}/${componentName}`;

        // 3. Read .ts, .html, .scss files
        const tsContent = fs.readFileSync(`${componentPath}/*.component.ts`, 'utf-8');
        const htmlContent = fs.readFileSync(`${componentPath}/*.component.html`, 'utf-8');
        const scssContent = fs.readFileSync(`${componentPath}/*.component.scss`, 'utf-8');

        // 4. Generate import statements
        const imports = `
import template from "./${componentName}.component.html" with {loader: "text"};
import styles from "./${componentName}.component.scss" with {loader: "text"};
import typescript from "./${componentName}.component.ts" with {loader: "text"};
        `;

        // 5. Build examples object
        examplesMap[componentName] = {
            name: componentName,
            files: [
                { name: `${componentName}.component.html`, content: 'template', language: 'html' },
                { name: `${componentName}.component.ts`, content: 'typescript', language: 'typescript' },
                { name: `${componentName}.component.scss`, content: 'styles', language: 'css' }
            ]
        };
    });

    // 6. Write raw-examples.ts
    const output = `
// @ts-nocheck
// Auto-generated file - do not edit manually
import { ExternalExample } from '@/models/external-example';
${imports}

export default {
    ${Object.entries(examplesMap).map(([key, value]) =>
        `${key}: ${JSON.stringify(value)}`
    ).join(',\n')}
} as Record<string, ExternalExample>;
    `;

    fs.writeFileSync(`${folder}/raw-examples.ts`, output);
});
```

**Output Example:**

```typescript
// apps/docs/src/app/stories/button/examples/raw-examples.ts
// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import template from "./text-variants-example.component.html" with {loader: "text"};
import styles from "./text-variants-example.component.scss" with {loader: "text"};
import typescript from "./text-variants-example.component.ts" with {loader: "text"};

export default {
    TextVariantsExampleComponent: {
        name: "TextVariantsExample",
        files: [
            { name: "text-variants-example.component.html", content: template as string, language: 'html' },
            { name: "text-variants-example.component.ts", content: typescript as string, language: 'typescript' },
            { name: "text-variants-example.component.scss", content: styles as string, language: 'css' }
        ]
    }
} as Record<string, ExternalExample>;
```

### Script 3: Generate Story Indexer

**File:** `scripts/generate-story-indexer.ts`

**Purpose:** Create navigation index with all stories and their metadata

**Process:**

```typescript
import { Project } from 'ts-morph';

// 1. Find all .stories.ts and .docs.md files
const storyFiles = glob('apps/docs/src/app/stories/**/*.stories.ts');
const docsFiles = glob('apps/docs/src/app/stories/**/*.docs.md');

// 2. Use ts-morph to parse story files
const project = new Project();

const storiesMap = storyFiles.map(filePath => {
    const sourceFile = project.addSourceFileAtPath(filePath);

    // 3. Extract default export (meta)
    const defaultExport = sourceFile.getDefaultExportSymbol();
    const metaObject = defaultExport.getValueDeclaration();

    // 4. Parse meta properties
    const meta = {
        id: '', // Derived from file path
        title: metaObject.getProperty('title').getText(),
        componentName: metaObject.getProperty('component')?.getText(),
        description: metaObject.getProperty('description')?.getText(),
        loadType: metaObject.getProperty('loadType')?.getText() || 'lazy',
    };

    // 5. Extract named exports (stories)
    const namedExports = sourceFile.getExportedDeclarations();
    const stories = Array.from(namedExports.entries())
        .filter(([name]) => name !== 'default')
        .map(([name, declarations]) => ({
            id: kebabCase(name),
            name: name,
            componentName: declarations[0].getProperty('component')?.getText() || null,
            description: declarations[0].getProperty('description')?.getText()
        }));

    meta.stories = stories;

    return meta;
});

// 6. Generate imports based on loadType
const generateImports = (stories) => {
    const eagerImports = stories
        .filter(s => s.loadType === 'eagerly')
        .map(s => `import * as ${s.id}Story from "./${s.id}/${s.fileName}"`);

    return eagerImports.join('\n');
};

// 7. Generate stories-map.ts
const output = `
// Auto-generated file - do not edit manually
import { StoryIndexer } from '@/models/story-indexer';
${generateImports(storiesMap)}

export const STORIES_MAP: StoryIndexer[] = [
    ${storiesMap.map(story => `{
        id: "${story.id}",
        title: "${story.title}",
        componentName: "${story.componentName}",
        description: "${story.description}",
        file: async () => ${story.loadType === 'eagerly'
            ? `${story.id}Story`
            : `import("./${story.id}/${story.fileName}")`
        },
        ${story.externalExamples ? `
        externalExamples: () => import("./${story.id}/examples/raw-examples").then(f => f.default),
        ` : ''}
        stories: ${JSON.stringify(story.stories, null, 4)}
    }`).join(',\n')}
];
`;

fs.writeFileSync('apps/docs/src/app/stories/stories-map.ts', output);
```

**Output Example:**

```typescript
// apps/docs/src/app/stories/stories-map.ts
// Auto-generated file - do not edit manually
import { StoryIndexer } from '@/models/story-indexer';
import * as buttonStory from "./button/fkt-button.stories";

export const STORIES_MAP: StoryIndexer[] = [
    {
        id: "button",
        title: "Components/Actions/Button",
        componentName: "FktButtonComponent",
        description: "Interactive button component with multiple themes and states",
        file: async () => buttonStory,  // Eagerly loaded
        externalExamples: () => import("./button/examples/raw-examples").then(f => f.default),
        stories: [
            {
                id: "raised",
                name: "Raised",
                componentName: null,
                description: "Standard button with elevated appearance"
            },
            {
                id: "stroked",
                name: "Stroked",
                componentName: null,
                description: "Outlined button for secondary actions"
            },
            {
                id: "text-variants",
                name: "TextVariants",
                componentName: "TextVariantsExampleComponent",
                description: "Comprehensive showcase of all button text variants"
            }
        ]
    },
    {
        id: "input",
        title: "Components/Form/Input",
        componentName: "FktInputComponent",
        description: "Text input with validation and error handling",
        file: () => import("./input/fkt-input.stories"),  // Lazy loaded
        stories: [
            // ...
        ]
    }
];
```

---

## Layer 4: Runtime Documentation

### Routing

```typescript
// apps/docs/src/app/app.routes.ts

export const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeLayoutComponent,
        children: [
            {
                path: 'docs/:docId',
                component: DocsPageComponent  // Main documentation page
            }
        ]
    }
];
```

### DocsPageComponent - The Orchestrator

```typescript
// apps/docs/src/app/pages/docs-page/docs-page.component.ts

@Component({
    selector: 'app-docs-page',
    template: `
        <fkt-tabs-list>
            <!-- Features Tab: Interactive playground and examples -->
            <fkt-tab key="features" label="Features">
                <fkt-features
                    [title]="title()"
                    [description]="description()"
                    [importStatement]="importStatement()"
                />
            </fkt-tab>

            <!-- API Reference Tab: Markdown documentation -->
            <fkt-tab key="api-reference" label="API">
                <fkt-markdown [data]="docs()!" />
            </fkt-tab>

            <!-- Design Tokens Tab: Token customization -->
            <fkt-tab key="design-tokens" label="Design Tokens">
                <fkt-design-tokens-table [tokens]="designTokens()" />
            </fkt-tab>
        </fkt-tabs-list>
    `,
    standalone: true,
    imports: [FktTabsListComponent, FktTabComponent, FeaturesComponent, FktMarkdownComponent]
})
export class DocsPageComponent {
    // 1. Get route parameter (docId)
    docId = input<string>();  // From route: /docs/button → 'button'

    protected readonly stories = STORIES_MAP;

    // 2. Find story in the index
    private readonly currentIndexer = computed(() => {
        return this.stories.find(story => story.id === this.docId());
    });

    // 3. Load story data (with caching and lazy loading)
    protected readonly currentStoryData = resource({
        request: () => ({ indexer: this.currentIndexer() }),
        loader: async ({ request }) => {
            if (!request.indexer) return null;
            return this.storyLoader.loadData(request.indexer);
        }
    });

    // 4. Computed properties for template
    title = computed(() =>
        this.currentStoryData.value()?.meta?.title.split('/').at(-1)
    );

    description = computed(() =>
        this.currentStoryData.value()?.meta?.description
    );

    docs = computed(() =>
        this.currentStoryData.value()?.meta?.documentation
    );

    designTokens = computed(() =>
        this.currentStoryData.value()?.meta?.designTokens ?? []
    );

    importStatement = computed(() => {
        const componentName = this.currentIndexer()?.componentName;
        const id = this.currentIndexer()?.id;
        return `import { ${componentName} } from "frakton-ng/${id}";`;
    });

    constructor(private storyLoader: StoryLoaderService) {}
}
```

### StoryLoaderService - Cache & Dynamic Import

```typescript
// apps/docs/src/app/services/story-loader.service.ts

@Injectable({ providedIn: 'root' })
export class StoryLoaderService {
    // In-memory cache for loaded stories
    private dataCache = new Map<string, StoryResolved>();
    private externalExamplesCache = new Map<string, Record<string, ExternalExample>>();

    async loadData(currentStory: StoryIndexer): Promise<StoryResolved> {
        // 1. Check cache
        if (this.dataCache.has(currentStory.id)) {
            return this.dataCache.get(currentStory.id)!;
        }

        // 2. Dynamic import (lazy or eager)
        const response = await currentStory.file();

        // 3. Build resolved story object
        const storyData: StoryResolved = {
            meta: {
                ...response['default'],
                componentName: currentStory.componentName
            },
            stories: []
        };

        // 4. Extract each named export (story)
        currentStory.stories?.forEach(story => {
            const storyExport = response[story.name];

            storyData.stories.push({
                ...storyExport,
                name: story.name,
                id: story.id,
                componentName: story.componentName,
                description: story.description || storyExport.description
            });
        });

        // 5. Cache and return
        this.dataCache.set(currentStory.id, storyData);
        return storyData;
    }

    async loadExternalExamples(currentStory: StoryIndexer): Promise<Record<string, ExternalExample> | null> {
        if (!currentStory.externalExamples) return null;

        // Check cache
        if (this.externalExamplesCache.has(currentStory.id)) {
            return this.externalExamplesCache.get(currentStory.id)!;
        }

        // Load and cache
        const examples = await currentStory.externalExamples();
        this.externalExamplesCache.set(currentStory.id, examples);
        return examples;
    }
}
```

### FeaturesComponent - Features Tab

```typescript
// apps/docs/src/app/components/features/features.component.ts

@Component({
    selector: 'fkt-features',
    template: `
        <div class="features">
            <header>
                <h1>{{ title() }}</h1>
                <p class="description">{{ description() }}</p>
            </header>

            <section class="import">
                <h2>Import</h2>
                <fkt-code-highlight
                    [text]="importStatement()!"
                    language="typescript"
                />
            </section>

            <!-- Custom element renders all story examples -->
            <fkt-story-examples></fkt-story-examples>
        </div>
    `,
    standalone: true,
    imports: [FktCodeHighlightComponent]
})
export class FeaturesComponent {
    title = input.required<string>();
    description = input<string>();
    importStatement = input<string>();
}
```

### StoryExamplesComponent - Custom Element

```typescript
// apps/docs/src/app/custom-elements/story-examples/story-examples.component.ts

@Component({
    selector: 'fkt-story-examples',
    template: `
        @if (storyResolved.value(); as resolved) {
            @for (story of resolved.stories; track story.name) {
                <fkt-story-renderer
                    [storyName]="story.name"
                    [indexer]="storyIndexer()!"
                    [storyResolved]="resolved"
                />
            }
        }
    `,
    standalone: true,
    imports: [StoryRendererComponent]
})
export class StoryExamplesComponent {
    // Inject route params to get current docId
    private readonly routeParams = injectRouteParams();

    // Find story indexer
    protected readonly storyIndexer = computed(() => {
        const id = this.routeParams()['docId'];
        return STORIES_MAP.find(story => story.id === id);
    });

    // Load story data
    protected readonly storyResolved = resource({
        request: () => this.storyIndexer(),
        loader: async ({ request: story }) => {
            if (!story) return null;
            return await this.loader.loadData(story);
        }
    });

    constructor(private loader: StoryLoaderService) {}
}
```

### StoryRendererComponent - Renders Single Story

```typescript
// apps/docs/src/app/components/story-renderer/story-renderer.component.ts

@Component({
    selector: 'fkt-story-renderer',
    template: `
        <article class="story">
            <header>
                <h3 [id]="activeStory()?.id">{{ storyName() }}</h3>
                <p>{{ activeStory()?.description }}</p>
            </header>

            <!-- Playground with injector context -->
            @if (injector()) {
                <fkt-playground [injector]="injector()!" />
            }
        </article>
    `,
    standalone: true,
    imports: [FktPlaygroundComponent]
})
export class StoryRendererComponent {
    storyName = input.required<string>();
    indexer = input.required<StoryIndexer>();
    storyResolved = input.required<StoryResolved>();

    // Find active story
    protected readonly activeStory = computed(() => {
        return this.storyResolved().stories.find(
            story => story.name === this.storyName()
        );
    });

    // Create injector with story-specific context
    protected readonly injector = computed(() => {
        const story = this.activeStory();
        if (!story) return null;

        return Injector.create({
            providers: [
                { provide: STORY_INDEXER_TOKEN, useValue: this.indexer() },
                { provide: STORY_META_TOKEN, useValue: this.storyResolved().meta },
                { provide: ACTIVE_STORY_TOKEN, useValue: story },
                { provide: ALL_STORIES_TOKEN, useValue: this.storyResolved().stories },
                StoryInfoService  // Service with access to all tokens above
            ]
        });
    });
}
```

### FktPlaygroundComponent - The Magic Happens Here

```typescript
// apps/docs/src/app/components/playground/playground.component.ts

@Component({
    selector: 'fkt-playground',
    template: `
        <div class="playground" [style]="designTokensStyle()">
            <!-- Component preview area -->
            <div #container class="preview" [style]="customDimensions()">
                <!-- Dynamically created component renders here -->
                <ng-container #componentHost />
            </div>

            <!-- Controls panel -->
            <fkt-playground-panel
                [argsList]="argsList()"
                [designTokens]="designTokens()"
            />

            <!-- Source code viewer -->
            <fkt-source-code />
        </div>
    `,
    standalone: true,
    imports: [FktPlaygroundPanelComponent, SourceCodeComponent]
})
export class FktPlaygroundComponent {
    protected readonly storyInfoService = inject(StoryInfoService);
    protected readonly elementRef = inject(ElementRef);

    // ViewContainerRef for dynamic component creation
    private readonly viewRef = viewChild('componentHost', { read: ViewContainerRef });

    // Effect: Render component dynamically when story changes
    protected readonly renderComponent = effect(() => {
        const component = this.storyInfoService.getComponent();
        const argsList = this.argsList();
        const viewRef = this.viewRef();

        if (!component || !argsList || !viewRef) return;

        // Clear previous component
        viewRef.clear();

        // Create component with signal bindings
        const componentRef = viewRef.createComponent(component, {
            environmentInjector: inject(EnvironmentInjector),
            // Reactive input bindings using signals
            bindings: argsList.map(arg =>
                inputBinding(arg.name, arg.control)  // Signal → Input
            )
        });

        // Apply custom providers if specified
        const providers = this.storyInfoService.activeStory?.providers;
        if (providers) {
            // Apply providers to component
        }
    });

    // List of controllable arguments
    protected readonly argsList = computed((): ArgItem<any>[] => {
        const argTypes = this.storyInfoService.meta.argTypes;
        const args = this.storyInfoService.activeStory?.args ?? {};

        return Object.entries(args).flatMap(([key, value]) => {
            const argType = argTypes?.[key];

            // Only show Attributes in playground (not Events/Methods)
            if (!argType || argType.category !== "Attributes") return [];

            return [{
                name: key,
                type: argType.control,
                label: argType.label || key,
                options: argType.options?.map(opt => ({ label: opt, value: opt })),
                control: signal(value),  // Reactive signal!
                defaultValue: value
            }];
        });
    });

    // Design tokens with live editing
    protected readonly designTokens = computed((): DesignTokenItem[] => {
        const tokens = this.storyInfoService.meta.designTokens ?? [];
        const elementRef = this.elementRef();

        return tokens.map(token => {
            let defaultValue = token.defaultValue;

            // Resolve CSS variable value at runtime
            if (token.reference.startsWith('--')) {
                const computedValue = getComputedStyle(elementRef.nativeElement)
                    .getPropertyValue(token.reference);

                if (computedValue) {
                    defaultValue = computedValue.trim();
                }
            }

            return {
                ...token,
                defaultValue,
                control: signal(defaultValue),  // Editable signal!
            };
        });
    });

    // Dynamic CSS for design tokens
    protected readonly designTokensStyle = computed(() => {
        const styles: Record<string, string> = {};

        this.designTokens().forEach(token => {
            const value = token.control();
            if (value) {
                styles[token.name] = value;
            }
        });

        return styles;
    });

    // Custom dimensions for preview area
    protected readonly customDimensions = computed(() => {
        const dimensions = this.storyInfoService.activeStory?.customDimensions;
        if (!dimensions) return {};

        return {
            width: dimensions.width,
            height: dimensions.height
        };
    });
}
```

### SourceCodeComponent - Auto-Generated Code

```typescript
// apps/docs/src/app/components/source-code/source-code.component.ts

@Component({
    selector: 'fkt-source-code',
    template: `
        <div class="source-code">
            <fkt-tabs-list>
                @if (externalExample.value(); as example) {
                    <!-- External example: show actual files -->
                    @for (file of example.files; track file.name) {
                        <fkt-tab [key]="file.language" [label]="file.name">
                            <fkt-code-highlight
                                [text]="file.content"
                                [language]="file.language"
                            />
                        </fkt-tab>
                    }
                } @else {
                    <!-- Auto-generated example -->
                    <fkt-tab key="html" label="Template">
                        <fkt-code-highlight
                            [text]="autoSource().html"
                            language="html"
                        />
                    </fkt-tab>
                    <fkt-tab key="typescript" label="Component">
                        <fkt-code-highlight
                            [text]="autoSource().ts"
                            language="typescript"
                        />
                    </fkt-tab>
                }
            </fkt-tabs-list>
        </div>
    `,
    standalone: true,
    imports: [FktTabsListComponent, FktTabComponent, FktCodeHighlightComponent]
})
export class SourceCodeComponent {
    protected readonly storyInfoService = inject(StoryInfoService);

    // Load external examples if available
    protected readonly externalExample = resource({
        loader: async () => {
            const examples = await this.storyInfoService.fetchExternalExamples();

            if (!examples) return null;

            // Get example for current story's component
            const componentName = this.storyInfoService.activeStory?.componentName
                || this.storyInfoService.meta.componentName;

            return examples[componentName] || null;
        }
    });

    // Auto-generate code if no external example
    protected readonly autoSource = computed(() => {
        if (this.externalExample.value()) return { html: '', ts: '' };

        return generateAutoSource({
            meta: this.storyInfoService.meta,
            story: this.storyInfoService.activeStory!,
            id: this.storyInfoService.indexer.id
        });
    });
}
```

### generateAutoSource - Code Generation

```typescript
// apps/docs/src/app/utils/generate-auto-source.ts

export const generateAutoSource = (options: {
    meta: Meta;
    story: Story<any>;
    id: string;
}) => {
    const component = options.story.component ?? options.meta.component;
    const reflection = reflectComponentType(component);
    const selector = reflection?.selector;
    const args = options.story.args;
    const argTypes = options.meta.argTypes;

    // 1. Generate HTML template
    let template = `<${selector}`;

    Object.entries(args).forEach(([key, value]) => {
        const argType = argTypes[key];

        if (argType?.category === 'Attributes') {
            // Determine binding syntax
            if (typeof value === 'string') {
                template += `\n  ${key}="${value}"`;
            } else if (typeof value === 'boolean') {
                if (value) {
                    template += `\n  [${key}]="true"`;
                }
            } else {
                template += `\n  [${key}]="${key}"`;
            }
        }
    });

    template += '\n/>';

    // 2. Generate TypeScript class
    const componentName = options.meta.componentName;
    const moduleName = `frakton-ng/${options.id}`;

    let classProperties = '';
    Object.entries(args).forEach(([key, value]) => {
        const propertyType = argTypes[key]?.type || 'any';
        const valueString = typeof value === 'string'
            ? `'${value}'`
            : JSON.stringify(value);

        classProperties += `  protected ${key}: ${propertyType} = ${valueString};\n`;
    });

    const typescript = `
import { Component } from '@angular/core';
import { ${componentName} } from '${moduleName}';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [${componentName}],
  template: \`
${template}
  \`
})
export class ExampleComponent {
${classProperties}
}
    `.trim();

    return {
        html: template,
        ts: typescript
    };
};
```

### Custom Elements Registration

Custom elements are registered at app bootstrap:

```typescript
// apps/docs/src/main.ts

import { createCustomElement } from '@angular/elements';

const CUSTOM_ELEMENTS = [
    { selector: 'story-examples', component: StoryExamplesComponent },
    { selector: 'arg-types', component: ArgTypesComponent },
    { selector: 'beta-alert', component: BetaAlertComponent },
];

bootstrapApplication(AppComponent, appConfig).then((appRef) => {
    // Register each custom element
    CUSTOM_ELEMENTS.forEach(({ selector, component }) => {
        const customElement = createCustomElement(component, {
            injector: appRef.injector
        });

        customElements.define(selector, customElement);
    });
});
```

**Usage in Markdown:**

```markdown
## Examples

<story-examples></story-examples>

## API

<arg-types></arg-types>

## Beta Notice

<beta-alert>This component is in beta and may have breaking changes</beta-alert>
```

### Side Menu - Navigation

```typescript
// apps/docs/src/app/core/side-menu/side-menu.component.ts

@Component({
    selector: 'fkt-side-menu',
    template: `
        @for (group of menuTree(); track group.title) {
            <fkt-side-menu-group [group]="group" />
        }
    `,
    standalone: true,
    imports: [SideMenuGroupComponent]
})
export class SideMenuComponent {
    protected readonly menuTree = computed(() => {
        return buildTree(STORIES_MAP);
    });
}

// Build hierarchical tree from flat titles
function buildTree(items: StoryIndexer[]): MenuGroup[] {
    const tree: MenuGroup[] = [];

    items.forEach(item => {
        // "Components/Actions/Button" → ["Components", "Actions", "Button"]
        const parts = item.title.split('/');

        let currentLevel = tree;

        // Build nested structure
        parts.forEach((part, index) => {
            const isLeaf = index === parts.length - 1;

            if (isLeaf) {
                // Add leaf node
                currentLevel.push({
                    title: part,
                    id: item.id,
                    children: []
                });
            } else {
                // Find or create group node
                let group = currentLevel.find(g => g.title === part);

                if (!group) {
                    group = { title: part, children: [] };
                    currentLevel.push(group);
                }

                currentLevel = group.children;
            }
        });
    });

    return tree;
}
```

### OmniSearch - Command Palette

```typescript
// apps/docs/src/app/core/omni-search/omni-search.component.ts

@Component({
    selector: 'fkt-omni-search',
    template: `
        <div class="search-container">
            <fkt-input
                [(value)]="search"
                placeholder="Search documentation..."
                autofocus
            />

            <fkt-navigable-list (onSelect)="keyboardSelect($event)">
                @for (item of filtered(); track item.id) {
                    <a [routerLink]="item.link" class="result-item">
                        <span class="type">{{ item.type }}</span>
                        <h4 [innerHTML]="item.title"></h4>
                        <p [innerHTML]="item.description"></p>
                    </a>
                }
            </fkt-navigable-list>
        </div>
    `,
    standalone: true,
    imports: [FktInputComponent, FktNavigableListDirective, RouterLink]
})
export class OmniSearchComponent {
    close = output();
    router = inject(Router);

    // Flatten all searchable items
    items = STORIES_MAP.flatMap(meta => {
        return [
            // Documentation page
            {
                id: meta.id,
                title: meta.title.split('/').at(-1)!,
                type: 'documentation',
                description: meta.description,
                link: this.router.createUrlTree(['home', 'docs', meta.id])
            },
            // Individual stories
            ...(meta.stories?.map(story => ({
                id: story.id,
                type: 'section',
                title: pascalToHumanReadable(story.name),
                description: story.description as string | undefined,
                link: this.router.createUrlTree(['home', 'docs', meta.id], {
                    fragment: story.id  // Scroll to story
                })
            })) ?? [])
        ];
    });

    search = signal("");

    // Filter and highlight results
    filtered = computed(() => {
        const search = this.search();
        const limit = 120;

        if (!search) {
            return this.items.map(item => ({
                ...item,
                description: truncate(item.description, limit)
            }));
        }

        const regex = new RegExp(`(${search})`, 'ig');

        return this.items
            .filter(item =>
                item.title.match(regex) || item.description?.match(regex)
            )
            .map(item => ({
                ...item,
                title: item.title.replaceAll(regex, '<span class="highlight">$1</span>'),
                description: getHighlightedExcerpt(item.description ?? '', search, limit)
            }));
    });

    keyboardSelect(index: number) {
        const selected = this.filtered()[index];
        if (!selected) return;

        this.router.navigateByUrl(selected.link.toString());
        this.close.emit();
    }
}
```

---

## Data Models

### Meta

```typescript
export interface Meta<Component = any> {
    title: string;                        // "Components/Actions/Button"
    loadType?: 'lazy' | 'eagerly';        // Optimization strategy
    component?: Type<Component>;          // Angular component class
    description: string;                  // Short description
    documentation: string;                // Full Markdown content
    noPadding?: boolean;                  // Remove playground padding
    customDimensions?: {                  // Custom preview dimensions
        width?: string;
        height?: string;
    };
    argTypes: Record<string, ArgType>;    // Playground controls
    designTokens?: DesignToken[];         // Auto-generated tokens
}
```

### ArgType

```typescript
export interface ArgType {
    type: string;                         // 'boolean' | 'string' | 'FktColor'
    control: ControlType;                 // 'boolean' | 'text' | 'select' | 'color'
    required?: boolean;
    options?: readonly string[];          // For select control
    defaultValue?: string;
    import?: string;                      // Import statement for docs
    category: string;                     // "Attributes" | "Events" | "Methods"
    description?: string;
    label?: string;                       // Display label
}

export type ControlType =
    | 'text'       // Text input
    | 'boolean'    // Checkbox
    | 'select'     // Dropdown
    | 'color'      // Color picker
    | 'number';    // Number input
```

### Story

```typescript
export interface Story<T> {
    component?: Type<T>;                  // Custom component override
    description: string;                  // Story description
    args: Partial<FktComponentInputs<T>>; // Component props
    noPadding?: boolean;                  // Override meta padding
    customDimensions?: {                  // Override meta dimensions
        width?: string;
        height?: string;
    };
    providers?: (Provider | EnvironmentProviders)[];  // Custom DI providers
}
```

### StoryIndexer

```typescript
export interface StoryIndexer {
    id: string;                           // "button"
    title: string;                        // "Components/Actions/Button"
    componentName?: string;               // "FktButtonComponent"
    description?: string;
    file: () => Promise<any>;             // Lazy import function
    externalExamples?: () => Promise<Record<string, ExternalExample>>;
    stories?: Array<{
        id: string;                       // "raised"
        name: string;                     // "Raised"
        componentName: string | null;     // Override component
        description: string;
    }>;
}
```

### DesignToken

```typescript
export interface DesignToken {
    name: string;                         // "--fkt-button-padding"
    description: string;                  // "Padding for button"
    reference: string;                    // "--fkt-space-md"
    category: string;                     // "Spacing" | "Colors" | "Typography"
    type: string;                         // "size" | "color"
    defaultValue: string;                 // "1rem"
}
```

### ExternalExample

```typescript
export interface ExternalExample {
    name: string;                         // "IconVariantsExample"
    files: Array<{
        name: string;                     // "icon-variants.component.html"
        content: string;                  // Source code as string
        language: 'html' | 'typescript' | 'css';
    }>;
}
```

---

## Advanced Features

### 1. Reactive Playground with Signal Bindings

The playground uses Angular's `inputBinding` to create **reactive connections** between controls and component inputs:

```typescript
// When user changes a control
argItem.control.set('accent');  // Signal mutation

// inputBinding creates reactive effect
inputBinding('color', argItem.control)
// ↓
// Automatically updates component input
componentInstance.color = 'accent'
// ↓
// Component re-renders with new value
```

This is **pure Angular signals** - no custom change detection, no manual updates.

### 2. Live Design Token Editing

Design tokens are applied as inline styles and update reactively:

```typescript
// User edits token in panel
designToken.control.set('#FF0000');

// Computed signal recalculates
designTokensStyle = computed(() => {
    return Object.fromEntries(
        this.designTokens().map(token => [token.name, token.control()])
    );
});

// Template applies styles
<div [style]="designTokensStyle()">
    <!-- Component renders with new token values -->
</div>
```

### 3. Type-Safe Story Arguments

TypeScript infers component input types from signals:

```typescript
export class FktButtonComponent {
    color = input<FktColor>('primary');  // Signal input with type
}

export const Raised: Story<FktButtonComponent> = {
    args: {
        color: 'accent'  // ✅ TypeScript validates this!
        // color: 'invalid'  // ❌ TypeScript error
    }
};
```

### 4. Lazy vs Eager Loading

Stories can be loaded differently for optimization:

```typescript
// stories-map.ts (generated)

// EAGER: Imported at build time, available immediately
import * as buttonStory from "./button/fkt-button.stories";
{
    id: "button",
    file: async () => buttonStory  // No network request
}

// LAZY: Dynamic import at runtime, code splitting
{
    id: "autocomplete",
    file: () => import("./autocomplete/fkt-autocomplete.stories")  // Loads on demand
}
```

**Strategy:**
- Core components (button, input): Eager
- Complex components (calendar, table): Lazy
- Result: Fast initial load, on-demand features

### 5. Custom Element Integration

Markdown is processed and custom elements are rendered as Angular components:

```markdown
<story-examples></story-examples>
```

```typescript
// At bootstrap
customElements.define('story-examples', createCustomElement(StoryExamplesComponent, {
    injector: appRef.injector
}));

// In runtime
// 1. Markdown parsed to HTML
// 2. Custom element found: <story-examples>
// 3. Angular component instantiated with app injector
// 4. Component has access to route, services, etc.
```

### 6. Automatic Code Generation

If no external example exists, code is generated automatically:

```typescript
// Input: Story args
{
    text: 'Click me',
    theme: 'raised',
    disabled: false
}

// Output: Generated template
<fkt-button
  text="Click me"
  [theme]="theme"
  [disabled]="false">
</fkt-button>

// Output: Generated class
export class ExampleComponent {
  protected text: string = 'Click me';
  protected theme: FktButtonTheme = 'raised';
  protected disabled: boolean = false;
}
```

---

## Design Decisions

### Why Not Storybook?

1. **Customization Complexity**: Deep Storybook customization requires fighting against its architecture, webpack configs, and React-first assumptions
2. **Performance**: Storybook bundles are large; iframe isolation adds overhead
3. **Angular-Specific Features**: Signal bindings, Angular elements, type inference work better natively
4. **Dependencies**: Storybook brings 50+ dependencies; custom system has zero external doc dependencies
5. **Control**: Every pixel, interaction, and optimization is under direct control
6. **Learning Curve**: Angular devs know Angular; contributing to Storybook setup is harder

### Why Scripts Instead of Bundler Plugins?

1. **Simplicity**: Node.js scripts are straightforward - read files, process, write files
2. **Debuggability**: If something breaks, you read the script and see exactly what happens
3. **Framework Agnostic**: Scripts work regardless of bundler (esbuild, webpack, vite)
4. **Explicit Execution**: `pnpm index:docs` clearly shows when generation happens
5. **Easy Contribution**: Any dev can read and modify a Node.js script

### Why Custom Elements Instead of MDX?

1. **Zero Compilation**: Markdown stays Markdown, no MDX compiler needed
2. **GitHub Compatibility**: `.md` files render on GitHub (MDX doesn't)
3. **Simplicity**: HTML tags are familiar, no JSX syntax
4. **Angular Native**: `@angular/elements` is official, built-in
5. **Injector Access**: Custom elements get full app injector, can use services

### Trade-offs

| Decision | Pro | Con |
|----------|-----|-----|
| Custom docs | Complete control, Angular-native | Maintenance burden, no ecosystem |
| Scripts generation | Simple, debuggable | Manual execution needed |
| Custom elements | No compilation, MD stays MD | No type safety in Markdown |
| Regex for tokens | Simple, works | Could break with complex SCSS |
| Signal-based | Reactive, performant | Requires Angular 16+ |

---

## Summary

The Frakton NG documentation system is a **custom-built, Angular-native** solution that prioritizes:

1. **Developer Experience**: Familiar API (Storybook-like), simple contribution process
2. **Performance**: Lazy loading, code splitting, caching, no iframe overhead
3. **Type Safety**: TypeScript inference throughout, signal-based reactivity
4. **Maintainability**: Simple scripts, clear conventions, readable code
5. **Innovation**: Live token editing, auto-code generation, type-safe playground

The system transforms this flow:

```
Component (SCSS with tokens)
    → Story (Meta + variations)
    → Build Scripts (auto-generate JSON/map)
    → Runtime (lazy load, dynamic render, signal bindings)
    → Interactive Documentation
```

Every decision balances **complexity vs control**, choosing simplicity where possible and sophistication where necessary, resulting in a documentation system that is both **powerful for users** and **maintainable for contributors**.

---

**Created by:** Frakton NG Documentation System
**Last Updated:** 2025
**License:** MIT
