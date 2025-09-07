# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**frakton-ng** is an Angular monorepo containing two library projects:
- **core**: Core library with services and utilities (prefix: `fk`)
- **components**: UI component library with Storybook integration (prefix: `fkt`)

## Tech Stack

- **Angular 20.1.x** with standalone components
- **TypeScript** with strict mode enabled
- **PNPM** as package manager
- **Storybook 9.1.1** for component development and documentation
- **Karma** for unit testing

## Guidelines

- Always use existing components instead of native elements when creating buttons, inputs, selects, etc
- Always use SignalFormBuilder when you need to integrate forms
- With multiple fields prefer to use `this.signalFormBuilder.group()` instead of standalone fields

## SignalForms
- The signal forms uses the same angular/forms ergonomic with a signal-based API
- We have SignalFormBuilder, SignalFormControl and SignalFormArray
Example:
```ts
@Component({
	selector: 'textarea-form-integration-example',
	imports: [FktTextareaComponent, FktInputComponent, JsonPipe, FktButtonComponent],
	template: `
		<div class="w-full space-y-4">
			<h3 class="text-lg font-semibold">Contact Form</h3>

			<form (submit)="handleSubmit($event)" class="space-y-4">
				<div class="grid grid-cols-2 gap-4">
					<fkt-input
						[control]="form.controls.name"
						[label]="'Name'"
						[placeholder]="'Your name'"
						[type]="'text'"
					/>

					<fkt-input
						[control]="form.controls.email"
						[label]="'Email'"
						[placeholder]="'your@email.com'"
						[type]="'email'"
					/>
				</div>

				<fkt-textarea
					[control]="form.controls.message"
					[label]="'Message'"
					[placeholder]="'Please describe your inquiry in detail...'"
				/>

				<fkt-textarea
					[control]="form.controls.additionalInfo"
					[label]="'Additional Information (Optional)'"
					[placeholder]="'Any other details you would like to share...'"
				/>

				<div class="flex justify-between items-center">
					<div class="text-sm text-gray-600">
						<span [class.text-green-600]="form.valid()">
							{{ form.valid() ? '✓ Form is valid' : 'Please fill all required fields' }}
						</span>
					</div>

					<div class="flex gap-2">
						<fkt-button
							(click)="resetForm()"
							text="Reset"
							theme="stroked"
						>
						</fkt-button>
						<fkt-button
							type="submit"
							text="Submit"
							[disabled]="!form.valid()"
						>
						</fkt-button>
					</div>
				</div>
			</form>

			@if (submittedData()) {
				<div class="mt-4 p-4 bg-green-50 border border-green-200 rounded">
					<h4 class="font-medium text-green-800">Form Submitted Successfully!</h4>
					<pre class="mt-2 text-sm text-gray-700">{{ submittedData() | json }}</pre>
				</div>
			}
		</div>
	`
})
export class FormIntegrationExampleComponent {
	private fb = inject(SignalFormBuilder);

	protected form = this.fb.group({
		name: ['', [SignalValidators.required()]],
		email: ['', [SignalValidators.required(), SignalValidators.email()]],
		message: ['', [
			SignalValidators.required(),
			SignalValidators.minLength(10),
			SignalValidators.maxLength(1000)
		]],
		additionalInfo: ''
	});

	submittedData = signal<any>(null);

	handleSubmit(event: Event) {
		event.preventDefault();

		if (this.form.valid()) {
			const formData = {
				...this.form.value(),
				submittedAt: new Date().toISOString()
			};

			this.submittedData.set(formData);

			console.log('Form submitted:', formData);

			setTimeout(() => {
				this.resetForm();
				this.submittedData.set(null);
			}, 3000);
		}
	}

	resetForm() {
		this.form.reset();
		this.submittedData.set(null);
	}
}
```

## Architecture and Code Structure

### Project Layout
```
frakton-ng/
├── projects/
│   ├── core/                    # Core library
│   │   ├── src/
│   │   │   ├── lib/             # Core services, utilities
│   │   │   └── public-api.ts    # Public exports
│   │   └── tsconfig.*.json
│   └── components/              # UI Components library
│       ├── .storybook/          # Storybook configuration
│       ├── src/
│       │   ├── lib/
│       │   │   ├── components/  # UI components (autocomplete, badge, etc.)
│       │   │   ├── directives/  # Shared directives
│       │   │   ├── services/    # Component services
│       │   │   ├── pipes/       # Shared pipes
│       │   │   ├── form/        # Form-related utilities
│       │   │   ├── validators/  # Custom validators
│       │   │   └── utils/       # Utility functions
│       │   └── public-api.ts    # Public exports
│       └── tsconfig.*.json
├── dist/                        # Build outputs
├── angular.json                 # Angular workspace config
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json               # Root TypeScript config
└── postcss.config.cjs          # PostCSS configuration
```

### Key Architectural Patterns

1. **Standalone Components**: All components use Angular's standalone API
2. **Signal-based Inputs**: Components use the new signal-based `input()` API
3. **Computed Properties**: Reactive computed properties for derived state
4. **Library Structure**: 
   - Each library has a `public-api.ts` defining its public surface
   - Components are feature-grouped (e.g., autocomplete with its options sub-component)
   - Stories are co-located with components (`*.stories.ts`)

### Component Structure Example
```typescript
// fkt-badge.component.ts
@Component({
  selector: 'fkt-badge',
  imports: [ToClassPipe],
  templateUrl: './fkt-badge.component.html',
  styleUrl: './fkt-badge.component.scss',
})
export class FktBadgeComponent {
  text = input<string>();
  color = input.required<FktBadgeColor>();
  variant = input<FktBadgeVariant>('opaque');
  
  protected classes = computed(() => {
    // Computed classes
  });
}
```

### TypeScript Configuration
- **Strict mode** enabled
- **Path mappings** for library imports:
  - `components` → `./dist/components`
  - `core` → `./dist/core`
- **Schematics** configured to skip tests by default and use SCSS

### Storybook Integration
- Configuration in `projects/components/.storybook/`
- Stories alongside components (`*.stories.ts`)
- Font assets served from `projects/components/src/lib/assets`

## Important Conventions

1. **Component Prefixes**:
   - Core library: `fkt-`
   - Components library: `fkt-`

2. **File Naming**:
   - Components: `fkt-[name].component.ts`
   - Types: `fkt-[name].types.ts`
   - Stories: `fkt-[name].stories.ts`

3. **Styling**:
   - Component-specific styles in SCSS files
   - Global styles in `projects/core/assets/styles/styles.css`

4. **Testing**:
   - Unit tests next to source files (`*.spec.ts`)
   - Karma configured for both libraries
   - Coverage reports in `coverage/` directory

5. **Exports**:
   - All public APIs through `public-api.ts`
   - Barrel exports through `public-api.ts` files in component folders

## Tips for Development

1. **Before starting development**, always build both libraries first
2. **Use Storybook** for component development - it's faster than the full app
3. **Watch mode** is available for library builds during development
4. **PNPM** is required - don't use npm or yarn
5**Stories** should demonstrate all component states and variants
