<story-meta title="Getting Started/Migration Guides"/>

# Migration Guides

Frakton NG is designed to work alongside other UI libraries without conflicts. You can migrate gradually or use multiple libraries together.

---

## Zero-Conflict Architecture

Unlike other libraries, Frakton NG **doesn't impose any global styles** or CSS resets, making it perfectly compatible with existing projects:

```html
<!-- Mix and match with ANY other UI library -->
<mat-toolbar>Angular Material toolbar</mat-toolbar>
<p-button>PrimeNG button</p-button>
<ng-bootstrap-button>Ng-Bootstrap button</ng-bootstrap-button>
<fkt-button>Frakton NG button</fkt-button>
<!-- All work together perfectly - no style conflicts -->
```

---

## From Angular Material

### Compatibility Approach

Frakton NG works alongside Angular Material seamlessly:

```html
<!-- Complete Angular Material layout -->
<mat-toolbar color="primary">
	<span>My Application</span>

	<!-- Frakton NG button in Material toolbar -->
	<fkt-button
		text="Custom Action"
		color="#FF6B35"
		theme="basic">
	</fkt-button>
</mat-toolbar>

<mat-sidenav-container>
	<mat-sidenav mode="side" opened>
		<!-- Material navigation -->
		<mat-nav-list>
			<mat-list-item>Dashboard</mat-list-item>
			<mat-list-item>Settings</mat-list-item>
		</mat-nav-list>
	</mat-sidenav>

	<mat-sidenav-content>
		<!-- Mix components freely -->
		<mat-card>
			<mat-card-header>
				<mat-card-title>User Profile</mat-card-title>
			</mat-card-header>

			<mat-card-content>
				<!-- Use Frakton NG for specific needs -->
				<fkt-color-picker
					label="Theme Color"
					[(value)]="userThemeColor">
				</fkt-color-picker>

				<fkt-date-picker
					label="Birth Date"
					[(value)]="birthDate">
				</fkt-date-picker>
			</mat-card-content>

			<mat-card-actions>
				<!-- Material and Frakton side by side -->
				<button mat-button>Cancel</button>
				<fkt-button
					text="Save Profile"
					color="success"
					[loading]="isSaving()">
				</fkt-button>
			</mat-card-actions>
		</mat-card>
	</mat-sidenav-content>
</mat-sidenav-container>
```

### Component Equivalents

| Angular Material  | Frakton NG         | Migration Notes                                      |
|-------------------|--------------------|------------------------------------------------------|
| `mat-button`      | `fkt-button`       | Support for custom hex colors, better loading states |
| `mat-input`       | `fkt-input`        | Signal-based forms, automatic validation display     |
| `mat-select`      | `fkt-select`       | Enhanced keyboard navigation, custom styling         |
| `mat-datepicker`  | `fkt-date-picker`  | More flexible date formats, better accessibility     |
| `mat-dialog`      | `fkt-overlay`      | Type-safe data passing, automatic theme inheritance  |
| `mat-checkbox`    | `fkt-checkbox`     | Enhanced accessibility validation                    |
| `mat-card`        | `fkt-card`         | Complete design token customization                  |
| *(not available)* | `fkt-color-picker` | Multi-format color selection with accessibility      |

### Gradual Migration Strategy

**Phase 1: Add Frakton NG for missing components**

```typescript
// Start with components Material doesn't offer
import {FktColorPickerComponent} from 'frakton-ng/color-picker';

@Component({
	template: `
    <!-- Keep existing Material components -->
    <mat-form-field>
      <mat-label>Username</mat-label>
      <input matInput [(ngModel)]="username">
    </mat-form-field>

    <!-- Add Frakton for new functionality -->
    <fkt-color-picker
      label="Theme Color"
      [(value)]="themeColor">
    </fkt-color-picker>
  `,
	imports: [MaterialModule, FktColorPickerComponent]
})
```

**Phase 2: Replace components with better alternatives**

```html
<!--Replace Material buttons with Frakton for better features-->
<!--Before-->
<button mat-raised-button color="primary" [disabled]="loading">
	{{ loading ? 'Saving...' : 'Save' }}
</button>

<!--// After-->
<fkt-button
	text="Save"
	color="primary"
	[loading]="loading()">
</fkt-button>
```

**Phase 3: Adopt signal-based patterns**

```typescript
// Modernize with signals where beneficial
export class ProfileComponent {
	// Replace template-driven with signal forms
	name = signal('');
	email = signal('');

	isValid = computed(() =>
		this.name().length > 0 && this.email().includes('@')
	);
}
```

---

## From PrimeNG

### Direct Replacement

PrimeNG components can often be replaced directly:

```typescript
// Before (PrimeNG)
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';

@Component({
	template: `
    <p-button label="Click me" (onClick)="handleClick()"></p-button>
    <input pInputText [(ngModel)]="value" placeholder="Enter text">
    <p-dropdown [options]="cities" [(ngModel)]="selectedCity"></p-dropdown>
  `,
	imports: [ButtonModule, InputTextModule, DropdownModule]
})
```

```typescript
// After (Frakton NG)
import {FktButtonComponent} from 'frakton-ng/button';
import {FktInputComponent} from 'frakton-ng/input';
import {FktSelectComponent} from 'frakton-ng/select';

@Component({
	template: `
    <fkt-button text="Click me" (click)="handleClick()"></fkt-button>
    <fkt-input [(value)]="value" placeholder="Enter text"></fkt-input>
    <fkt-select [options]="cities" [(value)]="selectedCity"></fkt-select>
  `,
	imports: [FktButtonComponent, FktInputComponent, FktSelectComponent]
})
```

### Benefits of Migration

- **Better Bundle Size**: Import only what you need
- **Enhanced Accessibility**: Runtime validation and semantic descriptions
- **Modern Patterns**: Signal-based reactivity
- **Design Freedom**: Complete visual customization
- **TypeScript Integration**: Better type inference

### Component Mapping

| PrimeNG         | Frakton NG         | Key Improvements                                    |
|-----------------|--------------------|-----------------------------------------------------|
| `p-button`      | `fkt-button`       | Custom colors, loading states, better accessibility |
| `p-inputText`   | `fkt-input`        | Signal forms, automatic validation display          |
| `p-dropdown`    | `fkt-select`       | Better keyboard navigation, custom styling          |
| `p-calendar`    | `fkt-date-picker`  | Enhanced accessibility, flexible formats            |
| `p-dialog`      | `fkt-overlay`      | Type-safe data, theme inheritance                   |
| `p-checkbox`    | `fkt-checkbox`     | Runtime accessibility validation                    |
| `p-colorPicker` | `fkt-color-picker` | Multi-format support, semantic descriptions         |
| `p-table`       | `fkt-table`        | Virtual scrolling, better performance               |

---

## From Ng-Bootstrap

### Enhanced Functionality

Ng-Bootstrap provides basic Bootstrap components, while Frakton NG offers enterprise features:

```typescript
// Before (Ng-Bootstrap)
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
	template: `
    <button type="button" class="btn btn-primary" (click)="save()">
      <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
      {{ loading ? 'Saving...' : 'Save' }}
    </button>

    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" ngbDropdownToggle>
        Actions
      </button>
      <div class="dropdown-menu" ngbDropdownMenu>
        <button class="dropdown-item" (click)="edit()">Edit</button>
        <button class="dropdown-item" (click)="delete()">Delete</button>
      </div>
    </div>
  `,
	imports: [NgbModule]
})
```

```typescript
// After (Frakton NG)
import {FktButtonComponent} from 'frakton-ng/button';
import {FktOverlayService} from 'frakton-ng/overlay';

@Component({
	template: `
    <!-- Built-in loading state -->
    <fkt-button
      text="Save"
      [loading]="loading()"
      (click)="save()">
    </fkt-button>

    <!-- Type-safe overlay menu -->
    <fkt-button
      text="Actions"
      icon="chevron-down"
      (click)="openMenu($event)">
    </fkt-button>
  `,
	imports: [FktButtonComponent]
})
export class ExampleComponent {
	constructor(private overlay: FktOverlayService) {
	}

	openMenu(event: Event) {
		this.overlay.open({
			anchorElementRef: {nativeElement: event.target as HTMLElement},
			component: ActionsMenuComponent,
			data: {
				onEdit: () => this.edit(),
				onDelete: () => this.delete()
			}
		});
	}
}
```

---

## Migration Best Practices

### Incremental Approach

**1. Start Small**

```typescript
// Begin with new features or components
@Component({
	template: `
    <!-- Keep existing UI -->
    <div class="existing-ui">...</div>

    <!-- Add Frakton for new functionality -->
    <fkt-color-picker [(value)]="newFeatureColor"></fkt-color-picker>
  `
})
```

**2. Replace Pain Points**

```html
<!--Replace components that cause issues-->
<!--Before: Complex date picker implementation-->
<input type="date" [(ngModel)]="date" [min]="minDate" [max]="maxDate">

<!--After: Rich date picker with validation-->
<fkt-date-picker
	[(value)]="date"
	[minDate]="minDate"
	[maxDate]="maxDate"
	[validation]="dateValidation">
</fkt-date-picker>
```

**3. Adopt Modern Patterns**

```typescript
// Gradually introduce signals
export class ModernComponent {
	// Replace reactive forms with signal forms
	email = new FormControl('', [Validators.required, Validators.email]);

	// Use with Frakton components
	template = `
    <fkt-input
      [control]="email"
      label="Email Address"
      type="email">
    </fkt-input>
  `;
}
```

### Coexistence Strategies

**Theme Coordination**

```css
/* Coordinate colors between libraries */
:root {
	/* Your brand colors */
	--brand-primary: #1976d2;
	--brand-accent: #ff4081;

	/* Material variables */
	--mat-primary: var(--brand-primary);

	/* Frakton variables */
	--fkt-color-primary: var(--brand-primary);
	--fkt-color-accent: var(--brand-accent);
}
```

**Consistent Spacing**

```css
/* Align spacing systems */
:root {
	--spacing-unit: 8px;

	/* Bootstrap spacing (if using Ng-Bootstrap) */
	--bs-spacer: var(--spacing-unit);

	/* Frakton spacing */
	--fkt-space-xs: calc(var(--spacing-unit) * 0.5);
	--fkt-space-sm: var(--spacing-unit);
	--fkt-space-md: calc(var(--spacing-unit) * 2);
}
```

### Testing Strategy

**Component Testing**

```typescript
describe('Migration Component', () => {
	it('should work with mixed UI libraries', () => {
		const fixture = TestBed.createComponent(MixedComponent);

		// Test Material components
		const matButton = fixture.debugElement.query(By.css('[mat-button]'));
		expect(matButton).toBeTruthy();

		// Test Frakton components
		const fktButton = fixture.debugElement.query(By.css('fkt-button'));
		expect(fktButton).toBeTruthy();

		// Ensure no style conflicts
		const computedStyles = getComputedStyle(fixture.nativeElement);
		expect(computedStyles.getPropertyValue('margin')).not.toBe('0');
	});
});
```

---

## Migration Checklist

### Pre-Migration

- [ ] **Audit current components:** Identify replacement candidates
- [ ] **Review dependencies:** Check for conflicts or overlaps
- [ ] **Plan migration phases:** Prioritize high-impact components
- [ ] **Set up testing:** Ensure existing functionality works

### During Migration

- [ ] **Install Frakton NG:** Add to project dependencies
- [ ] **Configure styles:** Add theme files to angular.json
- [ ] **Start with new features:** Use Frakton for new development
- [ ] **Replace incrementally:** Migrate existing components gradually
- [ ] **Test compatibility:** Verify no style conflicts occur

### Post-Migration

- [ ] **Update documentation:** Document new component usage
- [ ] **Train team:** Share signal-based patterns and design tokens
- [ ] **Optimize bundles:** Remove unused library dependencies
- [ ] **Monitor performance:** Verify improvements in bundle size and runtime`

---

## Troubleshooting

### Common Issues

**Style Conflicts**

```css
/* Problem: Global styles interfering
 Solution: Use Frakton's isolated approach */

.my-component {
	/* Frakton components are unaffected by global resets */
}
```

**TypeScript Errors**

```typescript
// Problem: Mixed import patterns
// Solution: Use consistent import structure
import {FktButtonComponent} from 'frakton-ng/button';
import {MatButtonModule} from '@angular/material/button';
```

**Theme Inconsistencies**

```css
/* Problem: Different color systems
   Solution: Create unified design tokens */
:root {
	--unified-primary: #1976d2;
	--mat-primary: var(--unified-primary);
	--fkt-color-primary: var(--unified-primary);
}
```

### Getting Help

- **[GitHub Issues](https://github.com/Samukaii/frakton-ng/issues)** - Report migration problems
- **[Documentation](https://samukaii.github.io/frakton-ng)** - Complete component reference
- **[Community Examples](https://github.com/Samukaii/frakton-ng/discussions)** - Migration success stories
