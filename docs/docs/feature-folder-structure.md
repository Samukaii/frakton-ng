# Component Structure & Documentation Guidelines

This document describes the standard structure for feature/component folders in this repository.
Follow this pattern to ensure maintainability, easy onboarding, and high-quality documentation.

---

## 📁 Folder Structure

Each component folder (e.g. `calendar-navigator/`) should be organized as follows:

```
calendar-navigator/
│
├── examples/                           # Demo/example components for Storybook
│     └── month-mode-example.component.ts
│     └── year-mode-example.component.ts
│     └── form-integration-example.component.ts
│     └── dynamic-mode-example.component.ts
│
├── fkt-calendar-navigator.component.html
├── fkt-calendar-navigator.component.scss
├── fkt-calendar-navigator.component.ts
├── fkt-calendar-navigator.docs.mdx      # Storybook MDX documentation
├── fkt-calendar-navigator.stories.ts    # Storybook stories
├── fkt-calendar-navigator.types.ts      # Types/interfaces/enums for this component
├── index.ts                             # Barrel file (public API)
```

---

## 📖 File Responsibilities

- **`component.ts/html/scss`**
  The actual Angular component and its template/styles.

- **`examples/`**
  All interactive examples and demo components used in Storybook stories.
- Example: `month-mode-example.component.ts`, etc.
- *Always put demo logic here, never in the main component!*

- **`docs.mdx`**
  Rich Markdown/MDX documentation for Storybook.
  Should include:
	- Overview/summary
	- Key features
- Usage
- Configuration options (with `<ArgTypes />` for automated tables)
- Examples (`<Story />` blocks)
- Accessibility and performance notes (if relevant)
	- Use cases and code snippets

- **`stories.ts`**
  Storybook stories, one per main usage scenario.
- Use only example/demo components in the stories.
- Always bind args to inputs/outputs to enable controls.
- Document all inputs in `argTypes`.

- **`types.ts`**
  Export any enums, types, or interfaces used only by this component (avoid mixing with global types).

- **`index.ts`**
  Barrel file for re-exports — use this for the public API.

---

## 🧑‍💻 Authoring Guidelines

- **Always create new example/demo components in `examples/`** — never mix demo logic with the main component.
- **Use arg bindings everywhere** in stories for interactive controls (e.g., `[input]="arg"`).
- **Document all component inputs/outputs** in the `argTypes` of the stories.
- **Keep code modular and strongly typed** — all types/enums in `types.ts`.
- **Update the MDX doc** whenever you add features, breaking changes, or new usage scenarios.
- **Stick to this structure** for all new components and refactor existing ones for consistency.

  ---

## 💡 Why This Matters

- **Discoverability:** New devs can easily find everything (API, stories, docs, examples) in one place.
- **Maintainability:** Example code is decoupled from core logic — easier to update or extend.
- **Docs quality:** Centralized, complete docs make Storybook a reliable single source of truth.
