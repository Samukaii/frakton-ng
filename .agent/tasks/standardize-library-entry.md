# Task: Standardize Library Entry

## Objective
Standardize a frakton-ng library component to ensure it follows all documentation and structure requirements for design tokens and Storybook stories.

## Required Guides
Before starting this task, you MUST read and understand these guides:
1. [design-tokens-documentation-guide.md](../guides/design-tokens-documentation-guide.md) - Located in project root
2. [storybook-stories-guide.md](../guides/storybook-stories-guide.md) - Located in .agent/guides folder

## Task Parameters
You will be provided with:
- **Component Name**: The name of the component to standardize (e.g., "toggle", "badge", "input")
- **Component Path**: Path to the component directory (e.g., `libs/frakton-ng/toggle/src`)

## Task Requirements

### 1. Design Token Documentation
Follow the DESIGN_TOKENS_DOCUMENTATION_GUIDE.md exactly:

#### SCSS Requirements
- [ ] Locate the main component SCSS file: `fkt-{component}.component.scss`
- [ ] Document design tokens in SCSS using exact format:
  ```scss
  // <design-tokens>
  /*
  Description of the token's purpose
  @name CSS custom property name
  @reference Reference to design system token or literal value
  @component Component category
  @category Token category
  @type Token type
  */
  $variable-name: var(CSS custom property, fallback value);
  // </design-tokens>
  ```
- [ ] Use proper naming conventions: `--fkt-{component}-{element}-{property}`
- [ ] Include all customizable visual properties
- [ ] Reference design system tokens when available

#### JSON Generation
- [ ] Use the automated script to generate design tokens JSON:
  ```bash
  node libs/frakton-ng/scripts/create-design-tokens.mjs {component-src-dir} {project-root} {component-name}
  ```
- [ ] Verify the generated JSON file contains all documented tokens
- [ ] Do NOT manually create or edit JSON files

### 2. Storybook Stories Implementation
Follow the storybook-stories-guide.md exactly:

#### File Structure
- [ ] Create or update: `libs/frakton-ng/{component}/src/fkt-{component}.stories.ts`
- [ ] If complex interactions needed, create examples directory structure:
  ```
  libs/frakton-ng/{component}/src/examples/
  ├── index.ts
  ├── {example-name}-example/
  │   ├── fkt-{component}-{example-name}-example.component.ts
  │   ├── fkt-{component}-{example-name}-example.component.html
  │   └── fkt-{component}-{example-name}-example.component.scss
  ```

#### Required Imports
- [ ] Import Meta, StoryObj from '@storybook/angular'
- [ ] Import component(s) from appropriate paths
- [ ] Import customDocsControl and renderComponent decorators
- [ ] Import design tokens JSON: `import designTokens from './fkt-{component}-design-tokens.json';`

#### Meta Configuration
- [ ] Set appropriate title: `'Components/{Category}/{Component Name}'`
- [ ] Configure customDocsControl decorator with design tokens
- [ ] Document all public properties in argTypes with:
  - Proper control types
  - Table categories
  - Type summaries
  - Default values
  - Clear descriptions

#### Story Implementation
- [ ] Create Basic story showing default usage
- [ ] Create variant stories for different states/configurations
- [ ] Use appropriate approach (direct component vs example components)
- [ ] Add descriptive documentation for each story
- [ ] Follow naming conventions (PascalCase)

### 3. Integration Verification
- [ ] Verify design tokens are properly imported in stories
- [ ] Test that Storybook displays design tokens in documentation
- [ ] Ensure all stories render correctly
- [ ] Validate that argTypes controls work properly
- [ ] Check that design token script generates without errors

## Implementation Steps

### Step 1: Analysis
1. Examine the existing component structure
2. Identify all customizable visual properties
3. Determine if simple or complex stories are needed
4. Check existing design token usage

### Step 2: Design Token Documentation
1. Add design token documentation to SCSS files
2. Use proper naming and categorization
3. Reference design system tokens appropriately
4. Run the generation script to create JSON

### Step 3: Storybook Stories
1. Choose appropriate implementation approach
2. Create or update stories file
3. Create example components if needed
4. Document all component properties
5. Implement comprehensive story coverage

### Step 4: Validation
1. Run the design token generation script
2. Test Storybook rendering
3. Verify design token integration
4. Check all interactive controls

## Common Patterns to Follow

### Design Token Categories
- **Spacing**: padding, margin, gap, width, height
- **Colors**: background, text, border colors  
- **Typography**: font weights, sizes, line heights
- **Shape**: border radius, border width

### Story Categories
- **Form**: Input-related components
- **Layout**: Structural components
- **Navigation**: Navigation components
- **Feedback**: User feedback components
- **Display**: Content display components

### Naming Conventions
- CSS Custom Properties: `--fkt-{component}-{element}-{property}`
- SCSS Variables: `${property-name}`
- Story Names: PascalCase (e.g., `BasicToggle`, `DisabledState`)
- Example Components: `Fkt{Component}{ExampleName}ExampleComponent`

## Success Criteria
Task is complete when:
- [ ] All design tokens are documented in SCSS with proper format
- [ ] JSON file is generated successfully via script
- [ ] Stories file follows exact structure requirements
- [ ] All component properties are documented in argTypes
- [ ] Design tokens are integrated with Storybook
- [ ] All stories render and function correctly
- [ ] Component follows established patterns and conventions

## Error Handling
If you encounter issues:
1. **Script Errors**: Check SCSS format matches requirements exactly
2. **Missing Tokens**: Ensure all visual properties are documented
3. **Import Errors**: Verify file paths and component exports
4. **Story Errors**: Check component usage and property bindings

## Output Requirements
When complete, provide:
1. Summary of changes made
2. List of design tokens documented
3. List of stories created
4. Any issues encountered and resolutions
5. Verification that all requirements are met

## Example Command Usage
```bash
# Generate design tokens for toggle component
node libs/frakton-ng/scripts/create-design-tokens.mjs libs/frakton-ng/toggle/src C:\Users\samuel\programming\frakton-ng toggle
```
