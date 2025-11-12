import"./chunk-A25UGBQK.js";var o=`<story-meta title="Getting Started/Migration Guides"/>\r
\r
# Migration Guides\r
\r
Frakton NG is designed to work alongside other UI libraries without conflicts. You can migrate gradually or use multiple libraries together.\r
\r
---\r
\r
## Zero-Conflict Architecture\r
\r
Unlike other libraries, Frakton NG **doesn't impose any global styles** or CSS resets, making it perfectly compatible with existing projects:\r
\r
\`\`\`html\r
<!-- Mix and match with ANY other UI library -->\r
<mat-toolbar>Angular Material toolbar</mat-toolbar>\r
<p-button>PrimeNG button</p-button>\r
<ng-bootstrap-button>Ng-Bootstrap button</ng-bootstrap-button>\r
<fkt-button>Frakton NG button</fkt-button>\r
<!-- All work together perfectly - no style conflicts -->\r
\`\`\`\r
\r
---\r
\r
## From Angular Material\r
\r
### Compatibility Approach\r
\r
Frakton NG works alongside Angular Material seamlessly:\r
\r
\`\`\`html\r
<!-- Complete Angular Material layout -->\r
<mat-toolbar color="primary">\r
	<span>My Application</span>\r
\r
	<!-- Frakton NG button in Material toolbar -->\r
	<fkt-button\r
		text="Custom Action"\r
		color="#FF6B35"\r
		theme="basic">\r
	</fkt-button>\r
</mat-toolbar>\r
\r
<mat-sidenav-container>\r
	<mat-sidenav mode="side" opened>\r
		<!-- Material navigation -->\r
		<mat-nav-list>\r
			<mat-list-item>Dashboard</mat-list-item>\r
			<mat-list-item>Settings</mat-list-item>\r
		</mat-nav-list>\r
	</mat-sidenav>\r
\r
	<mat-sidenav-content>\r
		<!-- Mix components freely -->\r
		<mat-card>\r
			<mat-card-header>\r
				<mat-card-title>User Profile</mat-card-title>\r
			</mat-card-header>\r
\r
			<mat-card-content>\r
				<!-- Use Frakton NG for specific needs -->\r
				<fkt-color-picker\r
					label="Theme Color"\r
					[(value)]="userThemeColor">\r
				</fkt-color-picker>\r
\r
				<fkt-date-picker\r
					label="Birth Date"\r
					[(value)]="birthDate">\r
				</fkt-date-picker>\r
			</mat-card-content>\r
\r
			<mat-card-actions>\r
				<!-- Material and Frakton side by side -->\r
				<button mat-button>Cancel</button>\r
				<fkt-button\r
					text="Save Profile"\r
					color="success"\r
					[loading]="isSaving()">\r
				</fkt-button>\r
			</mat-card-actions>\r
		</mat-card>\r
	</mat-sidenav-content>\r
</mat-sidenav-container>\r
\`\`\`\r
\r
### Component Equivalents\r
\r
| Angular Material  | Frakton NG         | Migration Notes                                      |\r
|-------------------|--------------------|------------------------------------------------------|\r
| \`mat-button\`      | \`fkt-button\`       | Support for custom hex colors, better loading states |\r
| \`mat-input\`       | \`fkt-input\`        | Signal-based forms, automatic validation display     |\r
| \`mat-select\`      | \`fkt-select\`       | Enhanced keyboard navigation, custom styling         |\r
| \`mat-datepicker\`  | \`fkt-date-picker\`  | More flexible date formats, better accessibility     |\r
| \`mat-dialog\`      | \`fkt-overlay\`      | Type-safe data passing, automatic theme inheritance  |\r
| \`mat-checkbox\`    | \`fkt-checkbox\`     | Enhanced accessibility validation                    |\r
| \`mat-card\`        | \`fkt-card\`         | Complete design token customization                  |\r
| *(not available)* | \`fkt-color-picker\` | Multi-format color selection with accessibility      |\r
\r
### Gradual Migration Strategy\r
\r
**Phase 1: Add Frakton NG for missing components**\r
\r
\`\`\`typescript\r
// Start with components Material doesn't offer\r
import {FktColorPickerComponent} from 'frakton-ng/color-picker';\r
\r
@Component({\r
	template: \`\r
    <!-- Keep existing Material components -->\r
    <mat-form-field>\r
      <mat-label>Username</mat-label>\r
      <input matInput [(ngModel)]="username">\r
    </mat-form-field>\r
\r
    <!-- Add Frakton for new functionality -->\r
    <fkt-color-picker\r
      label="Theme Color"\r
      [(value)]="themeColor">\r
    </fkt-color-picker>\r
  \`,\r
	imports: [MaterialModule, FktColorPickerComponent]\r
})\r
\`\`\`\r
\r
**Phase 2: Replace components with better alternatives**\r
\r
\`\`\`html\r
<!--Replace Material buttons with Frakton for better features-->\r
<!--Before-->\r
<button mat-raised-button color="primary" [disabled]="loading">\r
	{{ loading ? 'Saving...' : 'Save' }}\r
</button>\r
\r
<!--// After-->\r
<fkt-button\r
	text="Save"\r
	color="primary"\r
	[loading]="loading()">\r
</fkt-button>\r
\`\`\`\r
\r
**Phase 3: Adopt signal-based patterns**\r
\r
\`\`\`typescript\r
// Modernize with signals where beneficial\r
export class ProfileComponent {\r
	// Replace template-driven with signal forms\r
	name = signal('');\r
	email = signal('');\r
\r
	isValid = computed(() =>\r
		this.name().length > 0 && this.email().includes('@')\r
	);\r
}\r
\`\`\`\r
\r
---\r
\r
## From PrimeNG\r
\r
### Direct Replacement\r
\r
PrimeNG components can often be replaced directly:\r
\r
\`\`\`typescript\r
// Before (PrimeNG)\r
import {ButtonModule} from 'primeng/button';\r
import {InputTextModule} from 'primeng/inputtext';\r
import {DropdownModule} from 'primeng/dropdown';\r
\r
@Component({\r
	template: \`\r
    <p-button label="Click me" (onClick)="handleClick()"></p-button>\r
    <input pInputText [(ngModel)]="value" placeholder="Enter text">\r
    <p-dropdown [options]="cities" [(ngModel)]="selectedCity"></p-dropdown>\r
  \`,\r
	imports: [ButtonModule, InputTextModule, DropdownModule]\r
})\r
\`\`\`\r
\r
\`\`\`typescript\r
// After (Frakton NG)\r
import {FktButtonComponent} from 'frakton-ng/button';\r
import {FktInputComponent} from 'frakton-ng/input';\r
import {FktSelectComponent} from 'frakton-ng/select';\r
\r
@Component({\r
	template: \`\r
    <fkt-button text="Click me" (click)="handleClick()"></fkt-button>\r
    <fkt-input [(value)]="value" placeholder="Enter text"></fkt-input>\r
    <fkt-select [options]="cities" [(value)]="selectedCity"></fkt-select>\r
  \`,\r
	imports: [FktButtonComponent, FktInputComponent, FktSelectComponent]\r
})\r
\`\`\`\r
\r
### Benefits of Migration\r
\r
- **Better Bundle Size**: Import only what you need\r
- **Enhanced Accessibility**: Runtime validation and semantic descriptions\r
- **Modern Patterns**: Signal-based reactivity\r
- **Design Freedom**: Complete visual customization\r
- **TypeScript Integration**: Better type inference\r
\r
### Component Mapping\r
\r
| PrimeNG         | Frakton NG         | Key Improvements                                    |\r
|-----------------|--------------------|-----------------------------------------------------|\r
| \`p-button\`      | \`fkt-button\`       | Custom colors, loading states, better accessibility |\r
| \`p-inputText\`   | \`fkt-input\`        | Signal forms, automatic validation display          |\r
| \`p-dropdown\`    | \`fkt-select\`       | Better keyboard navigation, custom styling          |\r
| \`p-calendar\`    | \`fkt-date-picker\`  | Enhanced accessibility, flexible formats            |\r
| \`p-dialog\`      | \`fkt-overlay\`      | Type-safe data, theme inheritance                   |\r
| \`p-checkbox\`    | \`fkt-checkbox\`     | Runtime accessibility validation                    |\r
| \`p-colorPicker\` | \`fkt-color-picker\` | Multi-format support, semantic descriptions         |\r
| \`p-table\`       | \`fkt-table\`        | Virtual scrolling, better performance               |\r
\r
---\r
\r
## From Ng-Bootstrap\r
\r
### Enhanced Functionality\r
\r
Ng-Bootstrap provides basic Bootstrap components, while Frakton NG offers enterprise features:\r
\r
\`\`\`typescript\r
// Before (Ng-Bootstrap)\r
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';\r
\r
@Component({\r
	template: \`\r
    <button type="button" class="btn btn-primary" (click)="save()">\r
      <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
      {{ loading ? 'Saving...' : 'Save' }}\r
    </button>\r
\r
    <div class="dropdown">\r
      <button class="btn btn-secondary dropdown-toggle" ngbDropdownToggle>\r
        Actions\r
      </button>\r
      <div class="dropdown-menu" ngbDropdownMenu>\r
        <button class="dropdown-item" (click)="edit()">Edit</button>\r
        <button class="dropdown-item" (click)="delete()">Delete</button>\r
      </div>\r
    </div>\r
  \`,\r
	imports: [NgbModule]\r
})\r
\`\`\`\r
\r
\`\`\`typescript\r
// After (Frakton NG)\r
import {FktButtonComponent} from 'frakton-ng/button';\r
import {FktOverlayService} from 'frakton-ng/overlay';\r
\r
@Component({\r
	template: \`\r
    <!-- Built-in loading state -->\r
    <fkt-button\r
      text="Save"\r
      [loading]="loading()"\r
      (click)="save()">\r
    </fkt-button>\r
\r
    <!-- Type-safe overlay menu -->\r
    <fkt-button\r
      text="Actions"\r
      icon="chevron-down"\r
      (click)="openMenu($event)">\r
    </fkt-button>\r
  \`,\r
	imports: [FktButtonComponent]\r
})\r
export class ExampleComponent {\r
	constructor(private overlay: FktOverlayService) {\r
	}\r
\r
	openMenu(event: Event) {\r
		this.overlay.open({\r
			anchorElementRef: {nativeElement: event.target as HTMLElement},\r
			component: ActionsMenuComponent,\r
			data: {\r
				onEdit: () => this.edit(),\r
				onDelete: () => this.delete()\r
			}\r
		});\r
	}\r
}\r
\`\`\`\r
\r
---\r
\r
## Migration Best Practices\r
\r
### Incremental Approach\r
\r
**1. Start Small**\r
\r
\`\`\`typescript\r
// Begin with new features or components\r
@Component({\r
	template: \`\r
    <!-- Keep existing UI -->\r
    <div class="existing-ui">...</div>\r
\r
    <!-- Add Frakton for new functionality -->\r
    <fkt-color-picker [(value)]="newFeatureColor"></fkt-color-picker>\r
  \`\r
})\r
\`\`\`\r
\r
**2. Replace Pain Points**\r
\r
\`\`\`html\r
<!--Replace components that cause issues-->\r
<!--Before: Complex date picker implementation-->\r
<input type="date" [(ngModel)]="date" [min]="minDate" [max]="maxDate">\r
\r
<!--After: Rich date picker with validation-->\r
<fkt-date-picker\r
	[(value)]="date"\r
	[minDate]="minDate"\r
	[maxDate]="maxDate"\r
	[validation]="dateValidation">\r
</fkt-date-picker>\r
\`\`\`\r
\r
**3. Adopt Modern Patterns**\r
\r
\`\`\`typescript\r
// Gradually introduce signals\r
export class ModernComponent {\r
	// Replace reactive forms with signal forms\r
	email = new FormControl('', [Validators.required, Validators.email]);\r
\r
	// Use with Frakton components\r
	template = \`\r
    <fkt-input\r
      [control]="email"\r
      label="Email Address"\r
      type="email">\r
    </fkt-input>\r
  \`;\r
}\r
\`\`\`\r
\r
### Coexistence Strategies\r
\r
**Theme Coordination**\r
\r
\`\`\`css\r
/* Coordinate colors between libraries */\r
:root {\r
	/* Your brand colors */\r
	--brand-primary: #1976d2;\r
	--brand-accent: #ff4081;\r
\r
	/* Material variables */\r
	--mat-primary: var(--brand-primary);\r
\r
	/* Frakton variables */\r
	--fkt-color-primary: var(--brand-primary);\r
	--fkt-color-accent: var(--brand-accent);\r
}\r
\`\`\`\r
\r
**Consistent Spacing**\r
\r
\`\`\`css\r
/* Align spacing systems */\r
:root {\r
	--spacing-unit: 8px;\r
\r
	/* Bootstrap spacing (if using Ng-Bootstrap) */\r
	--bs-spacer: var(--spacing-unit);\r
\r
	/* Frakton spacing */\r
	--fkt-space-xs: calc(var(--spacing-unit) * 0.5);\r
	--fkt-space-sm: var(--spacing-unit);\r
	--fkt-space-md: calc(var(--spacing-unit) * 2);\r
}\r
\`\`\`\r
\r
### Testing Strategy\r
\r
**Component Testing**\r
\r
\`\`\`typescript\r
describe('Migration Component', () => {\r
	it('should work with mixed UI libraries', () => {\r
		const fixture = TestBed.createComponent(MixedComponent);\r
\r
		// Test Material components\r
		const matButton = fixture.debugElement.query(By.css('[mat-button]'));\r
		expect(matButton).toBeTruthy();\r
\r
		// Test Frakton components\r
		const fktButton = fixture.debugElement.query(By.css('fkt-button'));\r
		expect(fktButton).toBeTruthy();\r
\r
		// Ensure no style conflicts\r
		const computedStyles = getComputedStyle(fixture.nativeElement);\r
		expect(computedStyles.getPropertyValue('margin')).not.toBe('0');\r
	});\r
});\r
\`\`\`\r
\r
---\r
\r
## Migration Checklist\r
\r
### Pre-Migration\r
\r
- [ ] **Audit current components:** Identify replacement candidates\r
- [ ] **Review dependencies:** Check for conflicts or overlaps\r
- [ ] **Plan migration phases:** Prioritize high-impact components\r
- [ ] **Set up testing:** Ensure existing functionality works\r
\r
### During Migration\r
\r
- [ ] **Install Frakton NG:** Add to project dependencies\r
- [ ] **Configure styles:** Add theme files to angular.json\r
- [ ] **Start with new features:** Use Frakton for new development\r
- [ ] **Replace incrementally:** Migrate existing components gradually\r
- [ ] **Test compatibility:** Verify no style conflicts occur\r
\r
### Post-Migration\r
\r
- [ ] **Update documentation:** Document new component usage\r
- [ ] **Train team:** Share signal-based patterns and design tokens\r
- [ ] **Optimize bundles:** Remove unused library dependencies\r
- [ ] **Monitor performance:** Verify improvements in bundle size and runtime\`\r
\r
---\r
\r
## Troubleshooting\r
\r
### Common Issues\r
\r
**Style Conflicts**\r
\r
\`\`\`css\r
/* Problem: Global styles interfering\r
 Solution: Use Frakton's isolated approach */\r
\r
.my-component {\r
	/* Frakton components are unaffected by global resets */\r
}\r
\`\`\`\r
\r
**TypeScript Errors**\r
\r
\`\`\`typescript\r
// Problem: Mixed import patterns\r
// Solution: Use consistent import structure\r
import {FktButtonComponent} from 'frakton-ng/button';\r
import {MatButtonModule} from '@angular/material/button';\r
\`\`\`\r
\r
**Theme Inconsistencies**\r
\r
\`\`\`css\r
/* Problem: Different color systems\r
   Solution: Create unified design tokens */\r
:root {\r
	--unified-primary: #1976d2;\r
	--mat-primary: var(--unified-primary);\r
	--fkt-color-primary: var(--unified-primary);\r
}\r
\`\`\`\r
\r
### Getting Help\r
\r
- **[GitHub Issues](https://github.com/Samukaii/frakton-ng/issues)** - Report migration problems\r
- **[Documentation](https://samukaii.github.io/frakton-ng)** - Complete component reference\r
- **[Community Examples](https://github.com/Samukaii/frakton-ng/discussions)** - Migration success stories\r
`;export{o as default};
