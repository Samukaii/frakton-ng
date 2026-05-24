import { StoryIndexer } from '@/models/story-indexer';
//@ts-expect-error
import gettingStartedInstallation from "./getting-started/installation.docs.md" with {loader: "text"}
import * as buttonStory from "./button/fkt-button.stories"

export const STORIES_MAP: StoryIndexer[] = [	{
		id: "getting-started-installation",
		title: "Getting Started/Installation",
		file: async () => ({
		 	// Imported eagerly for instant loading
			default: {
				title: "Getting Started/Installation",
				documentation: gettingStartedInstallation
			}
		}),
		type: 'doc',
		docSections: [
			{ id: "quick-installation", text: "Quick Installation", level: 2 },
			{ id: "1-install-the-package", text: "1. Install the Package", level: 3 },
			{ id: "2-add-styles-to-your-project", text: "2. Add Styles to Your Project", level: 3 },
			{ id: "3-your-first-component", text: "3. Your First Component", level: 3 },
			{ id: "accessibility-first", text: "Accessibility First", level: 2 },
			{ id: "automatic-validation", text: "Automatic Validation", level: 3 },
			{ id: "semantic-color-descriptions", text: "Semantic Color Descriptions", level: 3 },
			{ id: "keyboard-navigation", text: "Keyboard Navigation", level: 3 },
			{ id: "type-safe-overlays", text: "Type-Safe Overlays", level: 2 },
			{ id: "next-steps", text: "Next Steps", level: 2 },
			{ id: "continue-learning", text: "Continue Learning", level: 3 },
			{ id: "explore-components", text: "Explore Components", level: 3 },
			{ id: "learn-advanced-features", text: "Learn Advanced Features", level: 3 },
			{ id: "join-the-community", text: "Join the Community", level: 3 }
		],
		stories: []
	},
	{
		id: "getting-started-migration-guides",
		title: "Getting Started/Migration Guides",
		file: async () => {
			//@ts-expect-error
			const documentation = await import("./getting-started/migration-guides.docs.md", {with: {loader: 'text'}}).then(file => file['default']);
	
			return {
				default: {
					title: "Getting Started/Migration Guides",
					documentation,
				}
			}
		},
		type: 'doc',
		docSections: [
			{ id: "zero-conflict-architecture", text: "Zero-Conflict Architecture", level: 2 },
			{ id: "from-angular-material", text: "From Angular Material", level: 2 },
			{ id: "compatibility-approach", text: "Compatibility Approach", level: 3 },
			{ id: "component-equivalents", text: "Component Equivalents", level: 3 },
			{ id: "gradual-migration-strategy", text: "Gradual Migration Strategy", level: 3 },
			{ id: "from-primeng", text: "From PrimeNG", level: 2 },
			{ id: "direct-replacement", text: "Direct Replacement", level: 3 },
			{ id: "benefits-of-migration", text: "Benefits of Migration", level: 3 },
			{ id: "component-mapping", text: "Component Mapping", level: 3 },
			{ id: "from-ng-bootstrap", text: "From Ng-Bootstrap", level: 2 },
			{ id: "enhanced-functionality", text: "Enhanced Functionality", level: 3 },
			{ id: "migration-best-practices", text: "Migration Best Practices", level: 2 },
			{ id: "incremental-approach", text: "Incremental Approach", level: 3 },
			{ id: "coexistence-strategies", text: "Coexistence Strategies", level: 3 },
			{ id: "testing-strategy", text: "Testing Strategy", level: 3 },
			{ id: "migration-checklist", text: "Migration Checklist", level: 2 },
			{ id: "pre-migration", text: "Pre-Migration", level: 3 },
			{ id: "during-migration", text: "During Migration", level: 3 },
			{ id: "post-migration", text: "Post-Migration", level: 3 },
			{ id: "troubleshooting", text: "Troubleshooting", level: 2 },
			{ id: "common-issues", text: "Common Issues", level: 3 },
			{ id: "getting-help", text: "Getting Help", level: 3 }
		],
		stories: []
	},
	{
		id: "getting-started-theming-styling",
		title: "Getting Started/Theming & Styling",
		file: async () => {
			//@ts-expect-error
			const documentation = await import("./getting-started/theming-styling.docs.md", {with: {loader: 'text'}}).then(file => file['default']);
	
			return {
				default: {
					title: "Getting Started/Theming & Styling",
					documentation,
				}
			}
		},
		type: 'doc',
		docSections: [
			{ id: "design-token-architecture", text: "Design Token Architecture", level: 2 },
			{ id: "three-tier-fallback-system", text: "Three-Tier Fallback System", level: 3 },
			{ id: "token-categories", text: "Token Categories", level: 3 },
			{ id: "multi-theme-support", text: "Multi-Theme Support", level: 2 },
			{ id: "default-setup", text: "Default Setup", level: 3 },
			{ id: "theme-switching-setup", text: "Theme Switching Setup", level: 3 },
			{ id: "dynamic-theme-switching", text: "Dynamic Theme Switching", level: 3 },
			{ id: "theme-toggle-component", text: "Theme Toggle Component", level: 3 },
			{ id: "customization-strategies", text: "Customization Strategies", level: 2 },
			{ id: "global-brand-customization", text: "Global Brand Customization", level: 3 },
			{ id: "component-specific-customization", text: "Component-Specific Customization", level: 3 },
			{ id: "context-specific-theming", text: "Context-Specific Theming", level: 3 },
			{ id: "advanced-customization", text: "Advanced Customization", level: 2 },
			{ id: "custom-color-intelligence", text: "Custom Color Intelligence", level: 3 },
			{ id: "complete-css-token-freedom", text: "Complete CSS Token Freedom", level: 3 },
			{ id: "runtime-token-manipulation", text: "Runtime Token Manipulation", level: 3 },
			{ id: "creating-custom-themes", text: "Creating Custom Themes", level: 2 },
			{ id: "theme-file-structure", text: "Theme File Structure", level: 3 },
			{ id: "using-custom-themes", text: "Using Custom Themes", level: 3 },
			{ id: "best-practices", text: "Best Practices", level: 2 },
			{ id: "performance-considerations", text: "Performance Considerations", level: 3 },
			{ id: "maintainability", text: "Maintainability", level: 3 },
			{ id: "design-system-integration", text: "Design System Integration", level: 3 },
			{ id: "resources", text: "Resources", level: 2 },
			{ id: "design-token-reference", text: "Design Token Reference", level: 3 },
			{ id: "tools-utilities", text: "Tools & Utilities", level: 3 }
		],
		stories: []
	},
	{
		id: "autocomplete",
		title: "Components/Form/Autocomplete",
		componentName: "FktAutocompleteComponent",
		description: `A powerful and flexible autocomplete input component with dropdown options, search functionality, and support for custom actions. Built with Angular signals and reactive patterns, it offers seamless integration with forms and dynamic data sources.`,
		file: () => import("./autocomplete/fkt-autocomplete.stories"),
		type: 'story',
		externalExamples: () => import("./autocomplete/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "component-architecture", text: "Component Architecture", level: 2 },
			{ id: "core-components", text: "Core Components", level: 3 },
			{ id: "state-management", text: "State Management", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "performance", text: "Performance", level: 2 }
		],
		stories: [
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: "FktAutocompleteBasicExampleComponent",
		        description:  `Basic autocomplete implementation with predefined options. Perfect starting point showing essential functionality with search and selection capabilities.`,
		    },
		    {
		        id: "auto-creation",
		        name: "AutoCreation",
		        componentName: "FktAutocompleteAutoCreationExampleComponent",
		        description:  `Auto-creation mode allows users to create new options by typing values not in the predefined list. Ideal for tag systems, category management, and dynamic data entry.`,
		    },
		    {
		        id: "custom-styling",
		        name: "CustomStyling",
		        componentName: "FktAutocompleteCustomStylingExampleComponent",
		        description:  `Custom styling and disabled state demonstration. Shows how to apply visual customization and handle disabled states with interactive controls.`,
		    },
		    {
		        id: "events",
		        name: "Events",
		        componentName: "FktAutocompleteEventsExampleComponent",
		        description:  `Interactive functionality with event handling and custom actions. Demonstrates search events, value changes, and action button interactions with real-time event logging.`,
		    },
		    {
		        id: "loading-states",
		        name: "LoadingStates",
		        componentName: "FktAutocompleteLoadingStatesExampleComponent",
		        description:  `Loading states and no results handling with simulated API calls. Perfect for async data fetching scenarios with realistic loading indicators and empty state messaging.`,
		    }
	    ]
	},
	{
		id: "avatar",
		title: "Components/Data Display/Avatar",
		componentName: "FktAvatarComponent",
		description: `A versatile avatar component for displaying user profile pictures, initials, or icons with customizable styling options.`,
		file: () => import("./avatar/fkt-avatar.stories"),
		type: 'story',
		externalExamples: () => import("./avatar/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "avatar", text: "Avatar", level: 1 },
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "basic-usage", text: "Basic Usage", level: 2 },
			{ id: "api-reference", text: "API Reference", level: 2 },
			{ id: "inputs", text: "Inputs", level: 3 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "display-modes", text: "Display Modes", level: 2 },
			{ id: "best-practices", text: "Best Practices", level: 2 },
			{ id: "do-", text: "Do ✅", level: 3 },
			{ id: "dont-", text: "Don't ❌", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "examples", text: "Examples", level: 2 },
			{ id: "user-profile-header", text: "User Profile Header", level: 3 },
			{ id: "team-member-list", text: "Team Member List", level: 3 },
			{ id: "loading-state", text: "Loading State", level: 3 },
			{ id: "custom-colors", text: "Custom Colors", level: 3 },
			{ id: "customization", text: "Customization", level: 2 },
			{ id: "custom-colors", text: "Custom Colors", level: 3 },
			{ id: "design-tokens", text: "Design Tokens", level: 3 }
		],
		stories: [
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: null,
		        description:  `Basic avatar with default settings showing an icon.`,
		    },
		    {
		        id: "image",
		        name: "Image",
		        componentName: null,
		        description:  `Avatar displaying a user image.`,
		    },
		    {
		        id: "initials",
		        name: "Initials",
		        componentName: null,
		        description:  `Avatar displaying user initials.`,
		    },
		    {
		        id: "loading",
		        name: "Loading",
		        componentName: null,
		        description:  `Avatar in loading state.`,
		    },
		    {
		        id: "custom-icons",
		        name: "CustomIcons",
		        componentName: null,
		        description:  `Avatar with a custom icon.`,
		    },
		    {
		        id: "shapes",
		        name: "Shapes",
		        componentName: null,
		        description:  `Avatar with circle shape.`,
		    },
		    {
		        id: "semantic-colors",
		        name: "SemanticColors",
		        componentName: null,
		        description:  `Avatar with primary background color.`,
		    },
		    {
		        id: "custom-colors",
		        name: "CustomColors",
		        componentName: null,
		        description:  `Avatar with custom hex colors.`,
		    }
	    ]
	},
	{
		id: "button",
		title: "Components/Actions/Button",
		componentName: "FktButtonComponent",
		description: `The FktButton component provides a versatile and customizable button with multiple themes, variants, and styling options. Built with Angular signals and modern design patterns, it supports various visual styles, icons, loading states, and accessibility features.`,
		file: async () => buttonStory, // Imported eagerly for instant loading
		type: 'story',
		externalExamples: () => import("./button/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "performance", text: "Performance", level: 2 }
		],
	    stories: [
		    {
		        id: "raised",
		        name: "Raised",
		        componentName: null,
		        description: `A standard button with elevated appearance, perfect for primary actions.`,
		    },
		    {
		        id: "stroked",
		        name: "Stroked",
		        componentName: null,
		        description: `An outlined button style ideal for secondary actions and cancel operations.`,
		    },
		    {
		        id: "disabled",
		        name: "Disabled",
		        componentName: null,
		        description: `Button in disabled state showing non-interactive appearance and behavior.`,
		    },
		    {
		        id: "with-icon",
		        name: "WithIcon",
		        componentName: null,
		        description: `Button with icon support, demonstrating icon positioning and combination with text.`,
		    },
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: null,
		        description: `Minimal button style with basic theme, perfect for subtle actions and text-only interactions.`,
		    },
		    {
		        id: "icon-only",
		        name: "IconOnly",
		        componentName: null,
		        description: `Compact circular button with just an icon, ideal for toolbars and action menus.`,
		    },
		    {
		        id: "rect-icon",
		        name: "RectIcon",
		        componentName: null,
		        description: `Rectangular icon button with standard padding, perfect for data table actions.`,
		    },
		    {
		        id: "loading",
		        name: "Loading",
		        componentName: null,
		        description: `Button showing loading state with custom loading text, perfect for async operations.`,
		    },
		    {
		        id: "with-left-icon",
		        name: "WithLeftIcon",
		        componentName: null,
		        description: `Button with icon positioned to the left of the text for enhanced visual hierarchy.`,
		    },
		    {
		        id: "text-variants",
		        name: "TextVariants",
		        componentName: "TextVariantsExampleComponent",
		        description: `Comprehensive showcase of all button text variants across different themes, colors, and shapes.`,
		    },
		    {
		        id: "icon-variants",
		        name: "IconVariants",
		        componentName: "IconVariantsExampleComponent",
		        description: `Comprehensive showcase of all button icon variants across different themes, colors, and shapes.`,
		    },
		    {
		        id: "stroked-secondary",
		        name: "StrokedSecondary",
		        componentName: null,
		        description: `Buttons demonstrating different theme options with the same color for consistency.`,
		    },
		    {
		        id: "long-text",
		        name: "LongText",
		        componentName: null,
		        description: `Button with longer text content showing how the component handles text wrapping.`,
		    }
	    ]
	},
	{
		id: "button-group",
		title: "Components/Form/Button group",
		componentName: "FktButtonGroupComponent",
		description: `Group related actions into toggleable buttons with support for icons, shapes, and multi-select workflows.`,
		file: () => import("./button-group/fkt-button-group.stories"),
		type: 'story',
		externalExamples: () => import("./button-group/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "usage", text: "Usage", level: 2 }
		],
		stories: [
		    {
		        id: "basic-usage",
		        name: "BasicUsage",
		        componentName: null,
		        description:  `Single-select group with labeled icons and a predefined selection.`,
		    },
		    {
		        id: "multiple",
		        name: "Multiple",
		        componentName: null,
		        description:  `Single-select group with labeled icons and a predefined selection.`,
		    },
		    {
		        id: "shapes",
		        name: "Shapes",
		        componentName: null,
		        description:  `Compare rounded, rectangular, and flat shapes while keeping the same options.`,
		    },
		    {
		        id: "sizes",
		        name: "Sizes",
		        componentName: null,
		        description:  `Demonstrates how the control scales across the available size tokens.`,
		    },
		    {
		        id: "only-labels",
		        name: "OnlyLabels",
		        componentName: null,
		        description:  `Text-only buttons without icons for compact layouts.`,
		    },
		    {
		        id: "only-icons",
		        name: "OnlyIcons",
		        componentName: null,
		        description:  `Icon-only presentation with labels hidden for minimal UI.`,
		    },
		    {
		        id: "reactive-forms",
		        name: "ReactiveForms",
		        componentName: "ButtonGroupReactiveFormsComponent",
		        description:  `PLACEHOLDER`,
		    },
		    {
		        id: "signal-forms",
		        name: "SignalForms",
		        componentName: "ButtonGroupSignalFormsComponent",
		        description:  `PLACEHOLDER`,
		    },
		    {
		        id: "input-driven",
		        name: "InputDriven",
		        componentName: "ButtonGroupInputDrivenComponent",
		        description:  `PLACEHOLDER`,
		    }
	    ]
	},
	{
		id: "buttons-list",
		title: "Components/Actions/Buttons list",
		componentName: "FktButtonsListComponent",
		description: `The FktButtonsList component provides a flexible container for displaying multiple buttons with consistent spacing and alignment. Built with Angular signals and customizable layout options, it supports both horizontal and vertical orientations with various alignment strategies.`,
		file: () => import("./buttons-list/fkt-buttons-list.stories"),
		type: 'story',
		
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "types", text: "Types", level: 2 },
			{ id: "examples", text: "Examples", level: 2 },
			{ id: "layout-options", text: "Layout Options", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "form-actions", text: "Form Actions", level: 3 },
			{ id: "data-tables", text: "Data Tables", level: 3 },
			{ id: "navigation", text: "Navigation", level: 3 },
			{ id: "toolbar-actions", text: "Toolbar Actions", level: 3 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "performance", text: "Performance", level: 2 }
		],
		stories: [
		    {
		        id: "preview",
		        name: "Preview",
		        componentName: null,
		        description:  `A horizontal list of action buttons with different themes and colors, perfect for form actions.`,
		    },
		    {
		        id: "form-actions",
		        name: "FormActions",
		        componentName: null,
		        description:  `Form action buttons with cancel, save, and submit actions using different alignment options.`,
		    },
		    {
		        id: "vertical-list",
		        name: "VerticalList",
		        componentName: null,
		        description:  `Buttons arranged vertically with filled button style and center alignment.`,
		    },
		    {
		        id: "icon-only-actions",
		        name: "IconOnlyActions",
		        componentName: null,
		        description:  `Compact icon-only buttons with tooltips for space-efficient toolbars.`,
		    },
		    {
		        id: "data-table-actions",
		        name: "DataTableActions",
		        componentName: null,
		        description:  `Action buttons commonly used in data tables for row-level operations.`,
		    },
		    {
		        id: "bulk-actions",
		        name: "BulkActions",
		        componentName: null,
		        description:  `Demonstrates a group of bulk actions, such as selecting all items, exporting, or deleting selected entries. Each action can have a custom theme, color, icon, and label. Useful for batch operations in tables, lists, or admin panels.`,
		    },
		    {
		        id: "toolbar-actions",
		        name: "ToolbarActions",
		        componentName: null,
		        description:  `Shows a classic horizontal toolbar with multiple actions, including "New", "Import", "Export", and "Refresh". Icons, themes, and tooltips are supported for enhanced usability in top toolbars and navigation bars.`,
		    },
		    {
		        id: "floating-actions",
		        name: "FloatingActions",
		        componentName: null,
		        description:  `Displays floating action buttons (FAB) in a vertical stack. Ideal for mobile or compact layouts where quick access to chat or add actions is needed. Each button can show an icon and tooltip for accessibility.`,
		    },
		    {
		        id: "loading-states",
		        name: "LoadingStates",
		        componentName: null,
		        description:  `Showcases actions in a loading state. Useful for asynchronous operations where feedback is required, such as saving data. The button can display a spinner and custom loading text until the process completes.`,
		    },
		    {
		        id: "disabled-states",
		        name: "DisabledStates",
		        componentName: null,
		        description:  `Illustrates disabled actions, preventing user interaction. Use for workflows where certain steps are unavailable or conditional, such as submitting forms only after all required fields are completed.`,
		    }
	    ]
	},
	{
		id: "calendar",
		title: "Components/Navigation/Calendar",
		componentName: "FktCalendarComponent",
		description: `The FktCalendar component provides a comprehensive date selection interface with multiple view modes and extensive customization options. Built with Angular signals for optimal performance and reactivity, it supports date, month, and year selection with configurable styling and behavior.`,
		file: () => import("./calendar/fkt-calendar.stories"),
		type: 'story',
		externalExamples: () => import("./calendar/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "component-architecture", text: "Component Architecture", level: 2 },
			{ id: "core-components", text: "Core Components", level: 3 },
			{ id: "header-components", text: "Header Components", level: 3 },
			{ id: "state-management", text: "State Management", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "performance", text: "Performance", level: 2 }
		],
		stories: [
		    {
		        id: "basic-calendar",
		        name: "BasicCalendar",
		        componentName: "FktCalendarBasicExampleComponent",
		        description:  `Basic calendar with date selection functionality and month/year navigation.`,
		    },
		    {
		        id: "borderless-calendar",
		        name: "BorderlessCalendar",
		        componentName: "FktCalendarBorderlessExampleComponent",
		        description:  `Calendar displayed without border for seamless integration into containers.`,
		    },
		    {
		        id: "with-disabled-dates",
		        name: "WithDisabledDates",
		        componentName: "FktCalendarDisabledDatesExampleComponent",
		        description:  `Calendar with disabled dates to restrict user selection to valid date ranges.`,
		    },
		    {
		        id: "with-events",
		        name: "WithEvents",
		        componentName: "FktCalendarEventsExampleComponent",
		        description:  `Calendar displaying events and highlighting dates with special significance.`,
		    },
		    {
		        id: "custom-styling",
		        name: "CustomStyling",
		        componentName: "FktCalendarCustomStylingExampleComponent",
		        description:  `Calendar with custom styling and visual indicators for different date states.`,
		    }
	    ]
	},
	{
		id: "calendar-navigator",
		title: "Components/Navigation/Calendar Navigator",
		componentName: "FktCalendarNavigatorComponent",
		description: `The FktCalendarNavigator component provides an interactive calendar header with navigation controls and modal-based date selection. It displays the current month/year and allows users to navigate between dates with modal overlays for detailed selection.`,
		file: () => import("./calendar-navigator/fkt-calendar-navigator.stories"),
		type: 'story',
		externalExamples: () => import("./calendar-navigator/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "navigation-behavior", text: "Navigation Behavior", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "accessibility", text: "Accessibility", level: 2 }
		],
		stories: [
		    {
		        id: "month",
		        name: "Month",
		        componentName: null,
		        description:  `Calendar navigator in month mode, allowing users to navigate through months and select specific months.`,
		    },
		    {
		        id: "year",
		        name: "Year",
		        componentName: null,
		        description:  `Calendar navigator in year mode, allowing users to navigate through years and select specific years.`,
		    },
		    {
		        id: "month-mode-example",
		        name: "MonthModeExample",
		        componentName: "MonthModeExampleComponent",
		        description:  `Comprehensive example showing month mode navigation with date selection and current date display.`,
		    },
		    {
		        id: "year-mode-example",
		        name: "YearModeExample",
		        componentName: "YearModeExampleComponent",
		        description:  `Comprehensive example showing year mode navigation with year selection and current year display.`,
		    },
		    {
		        id: "dynamic-mode-example",
		        name: "DynamicModeExample",
		        componentName: "DynamicModeExampleComponent",
		        description:  `Dynamic mode switching example showing how to toggle between month and year navigation modes.`,
		    },
		    {
		        id: "form-integration-example",
		        name: "FormIntegrationExample",
		        componentName: "FormIntegrationExampleComponent",
		        description:  `Form integration example showing how to use calendar navigator with reactive forms and form validation.`,
		    }
	    ]
	},
	{
		id: "checkbox",
		title: "Components/Form/Checkbox",
		componentName: "FktCheckboxComponent",
		description: `The FktCheckbox component provides a clean and accessible checkbox input with custom styling. Built with Angular signals and reactive forms, it offers seamless integration with form validation and state management.`,
		file: () => import("./checkbox/fkt-checkbox.stories"),
		type: 'story',
		externalExamples: () => import("./checkbox/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "terms-and-conditions", text: "Terms and Conditions", level: 3 },
			{ id: "user-preferences", text: "User Preferences", level: 3 },
			{ id: "multi-selection", text: "Multi-Selection", level: 3 },
			{ id: "form-validation", text: "Form Validation", level: 3 },
			{ id: "accessibility", text: "Accessibility", level: 2 }
		],
		stories: [
		    {
		        id: "basic-checkbox",
		        name: "BasicCheckbox",
		        componentName: "FktCheckboxBasicExampleComponent",
		        description:  `A basic checkbox with label text. Click either the checkbox or the label to toggle the state.`,
		    },
		    {
		        id: "pre-checked-checkbox",
		        name: "PreCheckedCheckbox",
		        componentName: "FktCheckboxPreCheckedExampleComponent",
		        description:  `A checkbox that is initially checked. The control is initialized with true as the default value.`,
		    },
		    {
		        id: "disabled-state",
		        name: "DisabledState",
		        componentName: "FktCheckboxDisabledExampleComponent",
		        description:  `A checkbox in disabled state. The checkbox cannot be toggled and appears with reduced opacity.`,
		    },
		    {
		        id: "validation",
		        name: "Validation",
		        componentName: "FktCheckboxValidationExampleComponent",
		        description:  `A checkbox with required validation. The checkbox must be checked for the form to be valid, and shows error state when invalid.`,
		    }
	    ]
	},
	{
		id: "color-picker",
		title: "Components/Form/Color Picker",
		componentName: "FktColorPickerComponent",
		description: `A sophisticated color picker component featuring semantic color descriptions, international localization, advanced visual selectors, and seamless Angular signals integration. Built for professional design tools and user-friendly color selection.`,
		file: () => import("./color-picker/fkt-color-picker.stories"),
		type: 'story',
		
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "advanced-color-selection", text: "Advanced Color Selection", level: 3 },
			{ id: "semantic-color-intelligence", text: "Semantic Color Intelligence", level: 3 },
			{ id: "internationalization-ready", text: "Internationalization Ready", level: 3 },
			{ id: "signal-native-architecture", text: "Signal-Native Architecture", level: 3 },
			{ id: "professional-controls", text: "Professional Controls", level: 3 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "core-types", text: "Core Types", level: 3 },
			{ id: "advanced-features", text: "Advanced Features", level: 3 },
			{ id: "integration-examples", text: "Integration Examples", level: 2 },
			{ id: "basic-form-integration", text: "Basic Form Integration", level: 3 },
			{ id: "advanced-usage-with-custom-locale", text: "Advanced Usage with Custom Locale", level: 3 },
			{ id: "signal-based-reactive-forms", text: "Signal-Based Reactive Forms", level: 3 },
			{ id: "technical-features", text: "Technical Features", level: 2 },
			{ id: "format-support-conversion", text: "Format Support & Conversion", level: 3 },
			{ id: "overlay-system-integration", text: "Overlay System Integration", level: 3 },
			{ id: "design-token-support", text: "Design Token Support", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "accessibility-standards", text: "Accessibility & Standards", level: 2 },
			{ id: "universal-accessibility", text: "Universal Accessibility", level: 3 },
			{ id: "inclusive-design-benefits", text: "Inclusive Design Benefits", level: 3 }
		],
		stories: [
		    {
		        id: "basic-color-picker",
		        name: "BasicColorPicker",
		        componentName: null,
		        description:  `A basic color picker with default HSL format and HEX output. Supports alpha channel for transparency.`,
		    },
		    {
		        id: "hex-format",
		        name: "HexFormat",
		        componentName: null,
		        description:  `Color picker configured for HEX format input and output with a pre-selected blue color.`,
		    },
		    {
		        id: "rgb-format",
		        name: "RgbFormat",
		        componentName: null,
		        description:  `Color picker using RGB format for both input and output with a pre-selected red color.`,
		    },
		    {
		        id: "hsl-format",
		        name: "HslFormat",
		        componentName: null,
		        description:  `Color picker using HSL format for both input and output with a pre-selected green color.`,
		    },
		    {
		        id: "with-alpha-channel",
		        name: "WithAlphaChannel",
		        componentName: null,
		        description:  `Color picker with alpha channel enabled, allowing transparency selection. Shows a semi-transparent purple color.`,
		    },
		    {
		        id: "disabled-state",
		        name: "DisabledState",
		        componentName: null,
		        description:  `Color picker in disabled state that cannot be interacted with but shows the current color value.`,
		    },
		    {
		        id: "hidden-label",
		        name: "HiddenLabel",
		        componentName: null,
		        description:  `Color picker with visually hidden label for compact layouts while maintaining accessibility.`,
		    }
	    ]
	},
	{
		id: "date-picker",
		title: "Components/Form/Date Picker",
		componentName: "FktDatePickerComponent",
		description: `The FktDatePicker component provides an intuitive and accessible date selection interface. Built with Angular signals and reactive forms, it offers a clean input field with a calendar overlay for date selection.`,
		file: () => import("./date-picker/fkt-date-picker.stories"),
		type: 'story',
		
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "date-format-support", text: "Date Format Support", level: 3 },
			{ id: "calendar-features", text: "Calendar Features", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "event-planning", text: "Event Planning", level: 3 },
			{ id: "data-entry", text: "Data Entry", level: 3 },
			{ id: "filtering-and-search", text: "Filtering and Search", level: 3 },
			{ id: "booking-systems", text: "Booking Systems", level: 3 },
			{ id: "accessibility", text: "Accessibility", level: 2 }
		],
		stories: [
		    {
		        id: "basic-date-picker",
		        name: "BasicDatePicker",
		        componentName: null,
		        description:  `A basic date picker with label and placeholder. Click the input field to open the calendar modal for date selection.`,
		    },
		    {
		        id: "with-prefilled-date",
		        name: "WithPrefilledDate",
		        componentName: null,
		        description:  `A date picker initialized with today's date, showing how the component displays pre-selected values.`,
		    },
		    {
		        id: "required-validation",
		        name: "RequiredValidation",
		        componentName: null,
		        description:  `A date picker with required field validation. The field shows error state when empty and must be filled for form submission.`,
		    },
		    {
		        id: "disabled-state",
		        name: "DisabledState",
		        componentName: null,
		        description:  `A date picker in disabled state. The field shows a date value but cannot be modified by the user.`,
		    },
		    {
		        id: "with-format-hint",
		        name: "WithFormatHint",
		        componentName: null,
		        description:  `A date picker with a format hint in the placeholder to guide users on the expected date format.`,
		    }
	    ]
	},
	{
		id: "dialog",
		title: "Components/Overlays/Dialog",
		componentName: "FktDialogService",
		description: `"The FktDialog service provides a powerful and flexible system for creating modal dialogs in your Angular applications.\n" +
	        "Built with modern Angular signals and reactive patterns, it supports advanced TypeScript inference, custom components, various sizing options, and pre-built confirmation dialogs with seamless data binding."`,
		file: () => import("./dialog/fkt-dialog.stories"),
		type: 'story',
		externalExamples: () => import("./dialog/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "types", text: "Types", level: 2 },
			{ id: "typescript-inference-component-design", text: "TypeScript Inference & Component Design", level: 2 },
			{ id: "required-signal---based-component-apis", text: "Required: Signal - Based Component APIs", level: 3 },
			{ id: "component-agnostic-design-benefits", text: "Component Agnostic Design Benefits", level: 3 },
			{ id: "how-the-typescript-inference-works", text: "How the TypeScript Inference Works", level: 3 },
			{ id: "migration-from-decorator-components", text: "Migration from Decorator Components", level: 3 },
			{ id: "dialog-sizing-options", text: "Dialog Sizing Options", level: 2 },
			{ id: "predefined-sizes", text: "Predefined Sizes", level: 3 },
			{ id: "responsive-sizing", text: "Responsive Sizing", level: 3 },
			{ id: "advanced-features-tips", text: "Advanced Features & Tips", level: 2 },
			{ id: "reactive-data-binding", text: "Reactive Data Binding", level: 3 },
			{ id: "multiple-dialog-management", text: "Multiple Dialog Management", level: 3 },
			{ id: "custom-backdrop-behavior", text: "Custom Backdrop Behavior", level: 3 },
			{ id: "best-practices", text: "Best Practices", level: 2 },
			{ id: "component-design", text: "Component Design", level: 3 },
			{ id: "data-management", text: "Data Management", level: 3 },
			{ id: "performance-memory", text: "Performance & Memory", level: 3 },
			{ id: "user-experience", text: "User Experience", level: 3 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "performance", text: "Performance", level: 2 },
			{ id: "common-use-cases", text: "Common Use Cases", level: 2 },
			{ id: "quick-actions", text: "Quick Actions", level: 3 },
			{ id: "forms-data-entry", text: "Forms & Data Entry", level: 3 },
			{ id: "content-display", text: "Content Display", level: 3 },
			{ id: "system-operations", text: "System Operations", level: 3 }
		],
		stories: [
		    {
		        id: "simple",
		        name: "Simple",
		        componentName: "FktSimpleDialogExampleComponent",
		        description:  `Basic dialog implementation with simple content and close functionality.`,
		    },
		    {
		        id: "confirmation",
		        name: "Confirmation",
		        componentName: "FktConfirmationDialogExampleComponent",
		        description:  `Dialog for confirmation actions with primary and secondary buttons.`,
		    },
		    {
		        id: "form",
		        name: "Form",
		        componentName: "FktFormDialogExampleComponent",
		        description:  `Dialog containing form elements for data input and submission.`,
		    },
		    {
		        id: "custom",
		        name: "Custom",
		        componentName: "FktCustomDialogExampleComponent",
		        description:  `Custom styled dialog with unique appearance and behavior.`,
		    },
		    {
		        id: "small",
		        name: "Small",
		        componentName: "FktSmallDialogExampleComponent",
		        description:  `Compact dialog size perfect for quick confirmations and alerts.`,
		    },
		    {
		        id: "fullscreen",
		        name: "Fullscreen",
		        componentName: "FktFullscreenDialogExampleComponent",
		        description:  `Full viewport dialog for complex content and detailed forms.`,
		    },
		    {
		        id: "overview",
		        name: "Overview",
		        componentName: "FktDialogOverviewExampleComponent",
		        description:  `Comprehensive showcase of all dialog variants and their use cases.`,
		    }
	    ]
	},
	{
		id: "divider",
		title: "Components/Layout/Divider",
		componentName: "FktDividerComponent",
		description: `A flexible divider component for visually separating content with customizable orientation, styling, and optional labels.`,
		file: () => import("./divider/fkt-divider.stories"),
		type: 'story',
		externalExamples: () => import("./divider/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "divider", text: "Divider", level: 1 },
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "basic-usage", text: "Basic Usage", level: 2 },
			{ id: "api-reference", text: "API Reference", level: 2 },
			{ id: "inputs", text: "Inputs", level: 3 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "section-separation", text: "Section Separation", level: 3 },
			{ id: "form-sections", text: "Form Sections", level: 3 },
			{ id: "sidebar-layout", text: "Sidebar Layout", level: 3 },
			{ id: "card-separators", text: "Card Separators", level: 3 },
			{ id: "dialog-sections", text: "Dialog Sections", level: 3 },
			{ id: "best-practices", text: "Best Practices", level: 2 },
			{ id: "do-", text: "Do ✅", level: 3 },
			{ id: "dont-", text: "Don't ❌", level: 3 },
			{ id: "styling-notes", text: "Styling Notes", level: 2 },
			{ id: "vertical-dividers", text: "Vertical Dividers", level: 3 },
			{ id: "custom-spacing", text: "Custom Spacing", level: 3 },
			{ id: "label-customization", text: "Label Customization", level: 3 },
			{ id: "examples", text: "Examples", level: 2 },
			{ id: "login-form-divider", text: "Login Form Divider", level: 3 },
			{ id: "dashboard-sections", text: "Dashboard Sections", level: 3 },
			{ id: "navigation-menu", text: "Navigation Menu", level: 3 }
		],
		stories: [
		    {
		        id: "default",
		        name: "Default",
		        componentName: null,
		        description:  `Basic horizontal divider with default settings.`,
		    },
		    {
		        id: "horizontal-sizes",
		        name: "HorizontalSizes",
		        componentName: null,
		        description:  `Horizontal divider with a label in the center.`,
		    },
		    {
		        id: "horizontal-variants",
		        name: "HorizontalVariants",
		        componentName: null,
		        description:  `Horizontal divider with a label in the center.`,
		    },
		    {
		        id: "horizontal-with-label",
		        name: "HorizontalWithLabel",
		        componentName: null,
		        description:  `Vertical divider with a label in the middle.`,
		    },
		    {
		        id: "vertical-sizes",
		        name: "VerticalSizes",
		        componentName: null,
		        description:  `Vertical divider for separating content horizontally.`,
		    },
		    {
		        id: "vertical-variants",
		        name: "VerticalVariants",
		        componentName: null,
		        description:  `Vertical divider for separating content horizontally.`,
		    },
		    {
		        id: "vertical-with-label",
		        name: "VerticalWithLabel",
		        componentName: null,
		        description:  `Vertical divider with a label in the middle.`,
		    },
		    {
		        id: "spacings",
		        name: "Spacings",
		        componentName: null,
		        description:  `Horizontal divider with a label in the center.`,
		    }
	    ]
	},
	{
		id: "drawer",
		title: "Components/Navigation/Drawer",
		componentName: "FktDrawerComponent",
		description: `The FktDrawer component provides a slide-out navigation panel that can either push content aside or overlay on top of it. Built with Angular signals and modern design patterns, it offers flexible positioning and smooth animations.`,
		file: () => import("./drawer/fkt-drawer.stories"),
		type: 'story',
		externalExamples: () => import("./drawer/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "performance", text: "Performance", level: 2 }
		],
		stories: [
		    {
		        id: "push",
		        name: "Push",
		        componentName: "PushExampleComponent",
		        description:  `Drawer in push mode that displaces the main content when opened.`,
		    },
		    {
		        id: "overlay",
		        name: "Overlay",
		        componentName: "OverlayExampleComponent",
		        description:  `Drawer in overlay mode that floats over the content with backdrop.`,
		    },
		    {
		        id: "opened",
		        name: "Opened",
		        componentName: "OpenedExampleComponent",
		        description:  `Drawer in opened state showing expanded navigation content.`,
		    },
		    {
		        id: "wide",
		        name: "Wide",
		        componentName: "WideExampleComponent",
		        description:  `Drawer with wider width for more content and better readability.`,
		    },
		    {
		        id: "narrow",
		        name: "Narrow",
		        componentName: "NarrowExampleComponent",
		        description:  `Compact drawer with minimal width for icon-based navigation.`,
		    }
	    ]
	},
	{
		id: "focus-trap",
		title: "Components/Accessibility/FocusTrap",
		componentName: "FktFocusTrapDirective",
		description: `A directive that traps keyboard focus within a container, ensuring proper accessibility for modals, forms, and other interactive elements that require contained navigation.`,
		file: () => import("./focus-trap/fkt-focus-trap.stories"),
		type: 'story',
		externalExamples: () => import("./focus-trap/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "usage", text: "Usage", level: 3 },
			{ id: "integration-with-frakton-components", text: "Integration with Frakton Components", level: 2 },
			{ id: "fktdialogservice", text: "FktDialogService", level: 3 },
			{ id: "other-frakton-components", text: "Other Frakton Components", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "implementation-details", text: "Implementation Details", level: 2 },
			{ id: "how-it-works", text: "How It Works", level: 3 },
			{ id: "focusable-elements", text: "Focusable Elements", level: 3 },
			{ id: "browser-support", text: "Browser Support", level: 3 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "best-practices", text: "Best Practices", level: 2 },
			{ id: "performance-notes", text: "Performance Notes", level: 2 }
		],
		stories: [
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: "FktFocusTrapBasicExampleComponent",
		        description:  `Basic focus trap implementation confining keyboard navigation to a specific area.`,
		    },
		    {
		        id: "modal",
		        name: "Modal",
		        componentName: "FktFocusTrapModalExampleComponent",
		        description:  `Focus trap used in modal dialogs to ensure proper keyboard accessibility.`,
		    },
		    {
		        id: "form",
		        name: "Form",
		        componentName: "FktFocusTrapFormExampleComponent",
		        description:  `Focus trap applied to form elements for sequential keyboard navigation.`,
		    }
	    ]
	},
	{
		id: "icon",
		title: "Components/Data Display/Icon",
		componentName: "FktIconComponent",
		description: `The FktIcon component provides a comprehensive icon system with a curated set of icons for various UI elements and interactions. Built with scalable vector graphics for crisp display at any size and seamless integration with the design system.`,
		file: () => import("./icon/fkt-icon.stories"),
		type: 'story',
		
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "icon-library", text: "Icon Library", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "performance", text: "Performance", level: 2 }
		],
		stories: [
		    {
		        id: "basic-icon",
		        name: "BasicIcon",
		        componentName: null,
		        description:  `A basic icon with default size and color, inheriting from parent text color.`,
		    },
		    {
		        id: "large-icon",
		        name: "LargeIcon",
		        componentName: null,
		        description:  `An icon with custom large size demonstrating size flexibility.`,
		    },
		    {
		        id: "colored-icon",
		        name: "ColoredIcon",
		        componentName: null,
		        description:  `An icon with custom color showing color customization capabilities.`,
		    },
		    {
		        id: "gallery",
		        name: "Gallery",
		        componentName: "IconsGalleyComponent",
		        description:  `Complete gallery of all available icons with search functionality to explore the icon library.`,
		    }
	    ]
	},
	{
		id: "input",
		title: "Components/Form/Input",
		componentName: "FktInputComponent",
		description: `A versatile form input component with multiple types, data transformers, and comprehensive validation support. Built with Angular signals for reactive form integration.`,
		file: () => import("./input/fkt-input.stories"),
		type: 'story',
		externalExamples: () => import("./input/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "accessibility", text: "Accessibility", level: 2 }
		],
		stories: [
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: null,
		        description:  `A basic text input field with label and placeholder text for general text entry.`,
		    },
		    {
		        id: "password",
		        name: "Password",
		        componentName: null,
		        description:  `A password input field with show/hide toggle functionality. Click the eye icon to toggle password visibility.`,
		    },
		    {
		        id: "email",
		        name: "Email",
		        componentName: null,
		        description:  `An email input field optimized for email addresses with proper keyboard and validation support.`,
		    },
		    {
		        id: "number",
		        name: "Number",
		        componentName: null,
		        description:  `A numeric input that only accepts numbers and shows numeric keypad on mobile devices.`,
		    },
		    {
		        id: "currency",
		        name: "Currency",
		        componentName: null,
		        description:  `Input with currency transformer that automatically formats values as currency (e.g., $1,234.56).`,
		    },
		    {
		        id: "percent",
		        name: "Percent",
		        componentName: null,
		        description:  `Input with percentage transformer that automatically formats values as percentages (e.g., 45.5%).`,
		    },
		    {
		        id: "hour",
		        name: "Hour",
		        componentName: null,
		        description:  `Input with hour transformer that formats time values as duration (e.g., 8h 30m).`,
		    }
	    ]
	},
	{
		id: "navigator",
		title: "Components/Navigation/Navigator",
		componentName: "FktNavigatorComponent",
		description: `The FktNavigator component provides a reusable navigation control with previous/next buttons and a flexible content area. It's designed to be a consistent navigation pattern across different components and contexts.`,
		file: () => import("./navigator/fkt-navigator.stories"),
		type: 'story',
		externalExamples: () => import("./navigator/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "content-projection", text: "Content Projection", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "performance", text: "Performance", level: 2 }
		],
		stories: [
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: null,
		        description:  `Basic navigator with both previous and next buttons enabled for simple navigation.`,
		    },
		    {
		        id: "previous-disabled",
		        name: "PreviousDisabled",
		        componentName: null,
		        description:  `Navigator with previous button disabled, useful when at the beginning of a sequence.`,
		    },
		    {
		        id: "next-disabled",
		        name: "NextDisabled",
		        componentName: null,
		        description:  `Navigator with next button disabled, useful when at the end of a sequence.`,
		    },
		    {
		        id: "both-disabled",
		        name: "BothDisabled",
		        componentName: null,
		        description:  `Navigator with both buttons disabled, useful when navigation is temporarily unavailable.`,
		    },
		    {
		        id: "basic-example",
		        name: "BasicExample",
		        componentName: "BasicExampleComponent",
		        description:  `Basic implementation showing simple previous/next navigation with counter state.`,
		    },
		    {
		        id: "date-navigation-example",
		        name: "DateNavigationExample",
		        componentName: "DateNavigationExampleComponent",
		        description:  `Date navigation example showing how to navigate through dates with proper boundary conditions.`,
		    },
		    {
		        id: "disabled-state-example",
		        name: "DisabledStateExample",
		        componentName: "DisabledStateExampleComponent",
		        description:  `Example demonstrating dynamic enable/disable states based on business logic.`,
		    },
		    {
		        id: "loading-example",
		        name: "LoadingExample",
		        componentName: "LoadingExampleComponent",
		        description:  `Navigation with loading states during async operations like data fetching.`,
		    },
		    {
		        id: "item-navigation-example",
		        name: "ItemNavigationExample",
		        componentName: "ItemNavigationExampleComponent",
		        description:  `Navigation through a list of items with proper boundary detection.`,
		    },
		    {
		        id: "page-navigation-example",
		        name: "PageNavigationExample",
		        componentName: "PageNavigationExampleComponent",
		        description:  `Pagination-style navigation with page numbers and navigation controls.`,
		    }
	    ]
	},
	{
		id: "no-results",
		title: "Components/Feedback/No Results",
		componentName: "FktNoResultsComponent",
		description: `The FktNoResults component provides a consistent and configurable way to display empty states when no data is available. It supports custom icons, descriptions, and action buttons to guide users on what to do next.`,
		file: () => import("./no-results/fkt-no-results.stories"),
		type: 'story',
		externalExamples: () => import("./no-results/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "types", text: "Types", level: 2 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "performance", text: "Performance", level: 2 }
		],
		stories: [
		    {
		        id: "simple-no-results",
		        name: "SimpleNoResults",
		        componentName: null,
		        description:  `Basic no results display with just a label, perfect for minimal empty states.`,
		    },
		    {
		        id: "with-icon-and-description",
		        name: "WithIconAndDescription",
		        componentName: null,
		        description:  `No results display with an icon and descriptive text for better user understanding.`,
		    },
		    {
		        id: "with-action-button",
		        name: "WithActionButton",
		        componentName: null,
		        description:  `Complete no results state with an action button to guide users on next steps.`,
		    },
		    {
		        id: "search-results",
		        name: "SearchResults",
		        componentName: "SearchResultsExampleComponent",
		        description:  `No results state specifically designed for search scenarios with clear search action.`,
		    },
		    {
		        id: "data-table-empty-state",
		        name: "DataTableEmptyState",
		        componentName: "DataTableExampleComponent",
		        description:  `No results configuration optimized for data tables with add record functionality.`,
		    },
		    {
		        id: "file-upload-empty-state",
		        name: "FileUploadEmptyState",
		        componentName: "FileUploadExampleComponent",
		        description:  `No results state for file management interfaces with upload functionality.`,
		    },
		    {
		        id: "compact-size",
		        name: "CompactSize",
		        componentName: "CompactExampleComponent",
		        description:  `Compact no results display for smaller containers or inline usage.`,
		    }
	    ]
	},
	{
		id: "overlay",
		title: "Components/Overlays/Overlay",
		componentName: "FktOverlayService",
		description: `"The FktOverlay service provides a powerful and flexible system for creating positioned overlays in your Angular applications.\n" +
	        "Built with modern Angular signals and reactive patterns, it supports dynamic positioning, intelligent repositioning, and seamless data binding between parent and overlay components."`,
		file: () => import("./overlay/fkt-overlay.stories"),
		type: 'story',
		externalExamples: () => import("./overlay/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "positioning-options", text: "Positioning Options", level: 2 },
			{ id: "typescript-inference-component-design", text: "TypeScript Inference & Component Design", level: 2 },
			{ id: "required-signal-based-component-apis", text: "Required: Signal-Based Component APIs", level: 3 },
			{ id: "component-agnostic-design-benefits", text: "Component Agnostic Design Benefits", level: 3 },
			{ id: "migration-from-decorator-components", text: "Migration from Decorator Components", level: 3 },
			{ id: "advanced-features-tips", text: "Advanced Features & Tips", level: 2 },
			{ id: "reactive-data-binding-optional", text: "Reactive Data Binding (Optional)", level: 3 },
			{ id: "outside-click-customization", text: "Outside Click Customization", level: 3 },
			{ id: "positioning-control", text: "Positioning Control", level: 3 },
			{ id: "managing-multiple-overlays", text: "Managing Multiple Overlays", level: 3 },
			{ id: "best-practices", text: "Best Practices", level: 2 },
			{ id: "data-binding-approaches", text: "Data Binding Approaches", level: 3 },
			{ id: "lifecycle-management", text: "Lifecycle Management", level: 3 },
			{ id: "positioning-responsiveness", text: "Positioning & Responsiveness", level: 3 },
			{ id: "performance-considerations", text: "Performance Considerations", level: 3 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "performance", text: "Performance", level: 2 },
			{ id: "common-use-cases", text: "Common Use Cases", level: 2 }
		],
		stories: [
		    {
		        id: "simple",
		        name: "Simple",
		        componentName: "FktSimpleOverlayExampleComponent",
		        description:  `Basic overlay implementation with simple content positioning.`,
		    },
		    {
		        id: "dropdown",
		        name: "Dropdown",
		        componentName: "FktDropdownOverlayExampleComponent",
		        description:  `Dropdown-style overlay with menu items and selection functionality.`,
		    },
		    {
		        id: "form",
		        name: "Form",
		        componentName: "FktFormOverlayExampleComponent",
		        description:  `Overlay containing form elements for input and data collection.`,
		    },
		    {
		        id: "custom-tooltip",
		        name: "CustomTooltip",
		        componentName: "FktCustomTooltipOverlayExampleComponent",
		        description:  `Custom tooltip implementation using overlay service with rich content.`,
		    },
		    {
		        id: "interactive",
		        name: "Interactive",
		        componentName: "FktInteractiveOverlayExampleComponent",
		        description:  `Interactive overlay with complex content and user interactions.`,
		    }
	    ]
	},
	{
		id: "paginator",
		title: "Components/Navigation/Paginator",
		componentName: "FktPaginatorComponent",
		description: `The FktPaginator component provides server-side pagination controls with configurable display options, responsive design, and accessibility features. Perfect for tables, lists, and any paginated content.`,
		file: () => import("./paginator/fkt-paginator.stories"),
		type: 'story',
		externalExamples: () => import("./paginator/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "pagination", text: "Pagination", level: 1 },
			{ id: "features", text: "Features", level: 2 },
			{ id: "basic-usage", text: "Basic Usage", level: 2 },
			{ id: "configuration", text: "Configuration", level: 2 },
			{ id: "integration-examples", text: "Integration Examples", level: 2 },
			{ id: "with-tables", text: "With Tables", level: 3 },
			{ id: "with-search-results-", text: "With Search Results  ", level: 3 },
			{ id: "with-product-grids", text: "With Product Grids", level: 3 },
			{ id: "responsive-behavior", text: "Responsive Behavior", level: 2 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "design-tokens", text: "Design Tokens", level: 2 },
			{ id: "api-reference", text: "API Reference", level: 2 },
			{ id: "fktpaginationstate", text: "FktPaginationState", level: 3 },
			{ id: "fktpaginationevent", text: "FktPaginationEvent", level: 3 },
			{ id: "fktpaginationconfig", text: "FktPaginationConfig", level: 3 }
		],
		stories: [
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: null,
		        description:  `Default paginator component with configurable state and options.`,
		    },
		    {
		        id: "basic-example",
		        name: "BasicExample",
		        componentName: "BasicExampleComponent",
		        description:  `Default paginator with all features enabled. Try navigating through pages and changing page size.`,
		    },
		    {
		        id: "configurable-example",
		        name: "ConfigurableExample",
		        componentName: "ConfigurableExampleComponent",
		        description:  `Examples of different paginator configurations for various use cases.`,
		    },
		    {
		        id: "responsive-example",
		        name: "ResponsiveExample",
		        componentName: "ResponsiveExampleComponent",
		        description:  `Responsive design that adapts to different screen sizes with mobile-friendly reordering.`,
		    }
	    ]
	},
	{
		id: "progress-bar",
		title: "Components/Feedback/Progress Bar",
		componentName: "FktProgressBarComponent",
		description: `A versatile progress bar component for displaying progress indicators, loading states, and completion status with customizable styling options.`,
		file: () => import("./progress-bar/fkt-progress-bar.stories"),
		type: 'story',
		externalExamples: () => import("./progress-bar/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "progress-bar", text: "Progress Bar", level: 1 },
			{ id: "features", text: "Features", level: 2 },
			{ id: "basic-usage", text: "Basic Usage", level: 2 },
			{ id: "api-reference", text: "API Reference", level: 2 },
			{ id: "inputs", text: "Inputs", level: 3 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "formatting-values", text: "Formatting Values", level: 3 },
			{ id: "design-tokens", text: "Design Tokens", level: 2 },
			{ id: "usage-patterns", text: "Usage Patterns", level: 2 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "best-practices", text: "Best Practices", level: 2 },
			{ id: "do", text: "Do", level: 3 },
			{ id: "dont", text: "Don't", level: 3 }
		],
		stories: [
		    {
		        id: "default",
		        name: "Default",
		        componentName: null,
		        description:  `Basic progress bar with default settings.`,
		    },
		    {
		        id: "with-label",
		        name: "WithLabel",
		        componentName: null,
		        description:  `Progress bar with label text displayed above.`,
		    },
		    {
		        id: "value-only",
		        name: "ValueOnly",
		        componentName: null,
		        description:  `Progress bar with value shown inside the fill area.`,
		    },
		    {
		        id: "sizes",
		        name: "Sizes",
		        componentName: null,
		        description:  `Progress bar with different sizes.`,
		    },
		    {
		        id: "semantic-colors",
		        name: "SemanticColors",
		        componentName: null,
		        description:  `Progress bar with semantic colors.`,
		    },
		    {
		        id: "variants",
		        name: "Variants",
		        componentName: null,
		        description:  `Progress bar with different variants.`,
		    },
		    {
		        id: "shapes",
		        name: "Shapes",
		        componentName: null,
		        description:  `Progress bar with different shapes.`,
		    },
		    {
		        id: "indeterminate",
		        name: "Indeterminate",
		        componentName: null,
		        description:  `Progress bar in indeterminate state.`,
		    },
		    {
		        id: "custom-color",
		        name: "CustomColor",
		        componentName: null,
		        description:  `Progress bar with custom hex color.`,
		    },
		    {
		        id: "complete-progress",
		        name: "CompleteProgress",
		        componentName: null,
		        description:  `Progress bar showing completed state.`,
		    },
		    {
		        id: "example-list",
		        name: "ExampleList",
		        componentName: "BasicUsageComponent",
		        description:  `Grouped progress bars showing sizes, semantic colors, and animated variants.`,
		    },
		    {
		        id: "example-with-labels",
		        name: "ExampleWithLabels",
		        componentName: "WithLabelsComponent",
		        description:  `Demonstrates label rows, inline values, and custom value formatting.`,
		    },
		    {
		        id: "example-dashboard-metrics",
		        name: "ExampleDashboardMetrics",
		        componentName: "DashboardMetricsComponent",
		        description:  `Dashboard-style KPIs with semantic colors, custom hex values, and striped states.`,
		    }
	    ]
	},
	{
		id: "select",
		title: "Components/Form/Select",
		componentName: "FktSelectComponent",
		description: `A dropdown selection component that provides a clean and accessible interface for choosing options. Built with Angular signals and reactive forms, it offers a styled alternative to native select elements with enhanced functionality and consistent design.`,
		file: () => import("./select/fkt-select.stories"),
		type: 'story',
		externalExamples: () => import("./select/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "accessibility", text: "Accessibility", level: 2 }
		],
		stories: [
		    {
		        id: "basic-select",
		        name: "BasicSelect",
		        componentName: "DefaultExampleComponent",
		        description:  `A basic select dropdown with a few options. Click to open the dropdown and select an option.`,
		    },
		    {
		        id: "pre-selected-option",
		        name: "PreSelectedOption",
		        componentName: "PreselectedExampleComponent",
		        description:  `A select with a pre-selected value. The control is initialized with a default selection showing the selected option.`,
		    },
		    {
		        id: "large-options-list",
		        name: "LargeOptionsList",
		        componentName: "LargeListExampleComponent",
		        description:  `A select with many options showing the scrollable dropdown behavior when there are too many options to fit.`,
		    },
		    {
		        id: "loading-state",
		        name: "LoadingState",
		        componentName: "LoadingExampleComponent",
		        description:  `A select showing loading state. This is useful when options are being fetched from an API.`,
		    },
		    {
		        id: "empty-state",
		        name: "EmptyState",
		        componentName: "EmptyStateExampleComponent",
		        description:  `A select with no options showing a custom 'no results' message.`,
		    },
		    {
		        id: "with-validation",
		        name: "WithValidation",
		        componentName: "ValidationExampleComponent",
		        description:  `A select with required validation. The field shows error state when no option is selected.`,
		    },
		    {
		        id: "disabled-state",
		        name: "DisabledState",
		        componentName: "DisabledExampleComponent",
		        description:  `A select in disabled state. The dropdown cannot be opened and the field appears with reduced opacity.`,
		    },
		    {
		        id: "async-loading",
		        name: "AsyncLoading",
		        componentName: "AsyncLoadingExampleComponent",
		        description:  `A select that loads options asynchronously. Options are fetched after a simulated API delay.`,
		    }
	    ]
	},
	{
		id: "side-menu",
		title: "Components/Navigation/Side Menu",
		componentName: "FktSideMenuComponent",
		description: `A responsive and customizable side navigation menu component with collapsible states, grouped menu items, and integrated routing support. Built with Angular signals for optimal performance and provides tooltips for collapsed states.`,
		file: () => import("./side-menu/fkt-side-menu.stories"),
		type: 'story',
		externalExamples: () => import("./side-menu/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "administrative-dashboards", text: "Administrative Dashboards", level: 3 },
			{ id: "application-navigation", text: "Application Navigation", level: 3 },
			{ id: "content-management-systems", text: "Content Management Systems", level: 3 },
			{ id: "e-commerce-platforms", text: "E-commerce Platforms", level: 3 },
			{ id: "analytics-and-reporting-platforms", text: "Analytics and Reporting Platforms", level: 3 },
			{ id: "multi-tenant-applications", text: "Multi-tenant Applications", level: 3 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "keyboard-navigation", text: "Keyboard Navigation", level: 3 },
			{ id: "screen-reader-support", text: "Screen Reader Support", level: 3 },
			{ id: "focus-management", text: "Focus Management", level: 3 },
			{ id: "aria-support", text: "ARIA Support", level: 3 },
			{ id: "tooltip-accessibility", text: "Tooltip Accessibility", level: 3 },
			{ id: "high-contrast-support", text: "High Contrast Support", level: 3 },
			{ id: "performance", text: "Performance", level: 2 },
			{ id: "efficient-rendering", text: "Efficient Rendering", level: 3 },
			{ id: "memory-management", text: "Memory Management", level: 3 },
			{ id: "bundle-optimization", text: "Bundle Optimization", level: 3 }
		],
		stories: [
		    {
		        id: "basic-side-menu",
		        name: "BasicSideMenu",
		        componentName: null,
		        description:  `Basic side menu with simple menu groups and items for standard navigation.`,
		    },
		    {
		        id: "collapsible-side-menu",
		        name: "CollapsibleSideMenu",
		        componentName: null,
		        description:  `Side menu in collapsed state showing only icons with tooltips for space-efficient navigation.`,
		    },
		    {
		        id: "multiple-groups",
		        name: "MultipleGroups",
		        componentName: null,
		        description:  `Side menu with multiple grouped sections for organized navigation in complex applications.`,
		    },
		    {
		        id: "dynamic-menu-with-permissions",
		        name: "DynamicMenuWithPermissions",
		        componentName: "DynamicPermissionsSideMenuExampleComponent",
		        description:  `Advanced example showing dynamic menu generation based on user permissions.`,
		    },
		    {
		        id: "admin-dashboard-layout",
		        name: "AdminDashboardLayout",
		        componentName: "AdminDashboardLayoutExampleComponent",
		        description:  `Complete dashboard layout showcasing real-world usage with content integration.`,
		    },
		    {
		        id: "with-routing",
		        name: "WithRouting",
		        componentName: "WithRoutingExampleComponent",
		        description:  `Complete dashboard layout showcasing real-world usage with content integration.`,
		    }
	    ]
	},
	{
		id: "skeleton",
		title: "Components/Feedback/Skeleton",
		componentName: "FktSkeletonComponent",
		description: `The FktSkeleton component provides loading placeholders with multiple types, animations, and configurable appearance. Perfect for indicating content loading states with realistic previews.`,
		file: () => import("./skeleton/fkt-skeleton.stories"),
		type: 'story',
		externalExamples: () => import("./skeleton/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "skeleton", text: "Skeleton", level: 1 },
			{ id: "features", text: "Features", level: 2 },
			{ id: "basic-usage", text: "Basic Usage", level: 2 },
			{ id: "types", text: "Types", level: 2 },
			{ id: "text-skeleton", text: "Text Skeleton", level: 3 },
			{ id: "circle-skeleton-", text: "Circle Skeleton  ", level: 3 },
			{ id: "rectangle-skeleton", text: "Rectangle Skeleton", level: 3 },
			{ id: "button-skeleton", text: "Button Skeleton", level: 3 },
			{ id: "image-skeleton", text: "Image Skeleton", level: 3 },
			{ id: "animations", text: "Animations", level: 2 },
			{ id: "layout-with-container", text: "Layout with Container", level: 2 },
			{ id: "common-patterns", text: "Common Patterns", level: 2 },
			{ id: "user-profile-card", text: "User Profile Card", level: 3 },
			{ id: "article-preview", text: "Article Preview", level: 3 },
			{ id: "data-table-row", text: "Data Table Row", level: 3 },
			{ id: "design-tokens", text: "Design Tokens", level: 2 },
			{ id: "api-reference", text: "API Reference", level: 2 },
			{ id: "fktskeletoncomponent", text: "FktSkeletonComponent", level: 3 },
			{ id: "fktskeletoncontainercomponent", text: "FktSkeletonContainerComponent", level: 3 },
			{ id: "types", text: "Types", level: 3 }
		],
		stories: [
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: null,
		        description:  `Basic skeleton component with configurable properties.`,
		    },
		    {
		        id: "basic-example",
		        name: "BasicExample",
		        componentName: "FktSkeletonExamplesBasicComponent",
		        description:  `Common skeleton usage patterns and layouts.`,
		    },
		    {
		        id: "types-example",
		        name: "TypesExample",
		        componentName: "FktSkeletonExamplesTypesComponent",
		        description:  `Different skeleton types: text, circle, rect, button, and image.`,
		    },
		    {
		        id: "animations-example",
		        name: "AnimationsExample",
		        componentName: "FktSkeletonExamplesAnimationsComponent",
		        description:  `Various animation effects: shimmer, pulse, wave, and none.`,
		    }
	    ]
	},
	{
		id: "spinner",
		title: "Components/Feedback/Spinner",
		componentName: "FktSpinnerComponent",
		description: `The FktSpinner component provides a customizable loading indicator with configurable size, stroke width, and color themes. It's designed to give users visual feedback during loading states and async operations.`,
		file: () => import("./spinner/fkt-spinner.stories"),
		type: 'story',
		externalExamples: () => import("./spinner/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "fktcolor-type", text: "FktColor Type", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "performance", text: "Performance", level: 2 }
		],
		stories: [
		    {
		        id: "size-variations",
		        name: "SizeVariations",
		        componentName: "FktSpinnerExampleSizeVariationsComponent",
		        description:  `Spinners with different sizes for various use cases and container sizes.`,
		    },
		    {
		        id: "color-themes",
		        name: "ColorThemes",
		        componentName: "FktSpinnerExampleColorThemesComponent",
		        description:  `Spinners showcasing different color themes for various semantic meanings.`,
		    },
		    {
		        id: "loading-state",
		        name: "LoadingState",
		        componentName: "FktSpinnerExampleLoadingStateComponent",
		        description:  `Spinner used in a typical loading state scenario with conditional display.`,
		    },
		    {
		        id: "custom-configuration",
		        name: "CustomConfiguration",
		        componentName: "FktSpinnerExampleCustomConfigurationComponent",
		        description:  `Spinner with dynamic configuration based on different states or conditions.`,
		    }
	    ]
	},
	{
		id: "table",
		title: "Components/Data Display/Table",
		componentName: "FktTableComponent",
		description: `A powerful and flexible table component for displaying tabular data with dynamic columns, row actions, loading states, and customizable empty states. Built with Angular signals for optimal performance and provides extensive customization options for real-world data display scenarios.`,
		file: () => import("./table/fkt-table.stories"),
		type: 'story',
		externalExamples: () => import("./table/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "administrative-dashboards", text: "Administrative Dashboards", level: 3 },
			{ id: "data-management-interfaces", text: "Data Management Interfaces", level: 3 },
			{ id: "content-management-systems", text: "Content Management Systems", level: 3 },
			{ id: "analytics-and-reporting", text: "Analytics and Reporting", level: 3 },
			{ id: "e-commerce-platforms", text: "E-commerce Platforms", level: 3 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "keyboard-navigation", text: "Keyboard Navigation", level: 3 },
			{ id: "screen-reader-support", text: "Screen Reader Support", level: 3 },
			{ id: "focus-management", text: "Focus Management", level: 3 },
			{ id: "aria-support", text: "ARIA Support", level: 3 },
			{ id: "high-contrast-support", text: "High Contrast Support", level: 3 },
			{ id: "performance", text: "Performance", level: 2 },
			{ id: "efficient-rendering", text: "Efficient Rendering", level: 3 },
			{ id: "memory-management", text: "Memory Management", level: 3 },
			{ id: "bundle-optimization", text: "Bundle Optimization", level: 3 }
		],
		stories: [
		    {
		        id: "basic-table",
		        name: "BasicTable",
		        componentName: "TableExamplesBasicTableComponent",
		        description:  `A simple table displaying user data with basic column configuration.`,
		    },
		    {
		        id: "with-pagination",
		        name: "WithPagination",
		        componentName: "TableExamplesWithPaginationComponent",
		        description:  `A simple table displaying user data with basic column configuration.`,
		    }
	    ]
	},
	{
		id: "tag",
		title: "Components/Data Display/Tag",
		componentName: "FktTagComponent",
		description: `The FktTag component provides a visual indicator for status, categories, counts, and other contextual information. Built with Angular signals and flexible styling options, it offers semantic color coding and variant styles for different visual prominence levels.`,
		file: () => import("./tag/fkt-tag.stories"),
		type: 'story',
		externalExamples: () => import("./tag/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "status-indicators", text: "Status Indicators", level: 3 },
			{ id: "categorization", text: "Categorization", level: 3 },
			{ id: "notifications", text: "Notifications", level: 3 },
			{ id: "data-visualization", text: "Data Visualization", level: 3 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "performance", text: "Performance", level: 2 }
		],
		stories: [
		    {
		        id: "success-tag",
		        name: "SuccessTag",
		        componentName: null,
		        description:  `A standard badge with success state and opaque styling, perfect for status indicators.`,
		    },
		    {
		        id: "error-tag",
		        name: "ErrorTag",
		        componentName: null,
		        description:  `Badge showing error state with red color for urgent attention.`,
		    },
		    {
		        id: "warning-tag",
		        name: "WarningTag",
		        componentName: null,
		        description:  `Badge with orange color for warnings and pending states that need attention.`,
		    },
		    {
		        id: "info-tag",
		        name: "InfoTag",
		        componentName: null,
		        description:  `Badge with blue color for informational content and faded variant for subtle display.`,
		    },
		    {
		        id: "tag-variations",
		        name: "TagVariations",
		        componentName: "TagVariationsExampleComponent",
		        description:  `Comprehensive showcase of all available colors and variants, demonstrating the full range of badge styling options.`,
		    },
		    {
		        id: "count-tag",
		        name: "CountTag",
		        componentName: null,
		        description:  `Numerical badges perfect for displaying counts, quantities, and numbers.`,
		    },
		    {
		        id: "status-tag",
		        name: "StatusTag",
		        componentName: null,
		        description:  `Status indicators for workflow states, item conditions, and process stages.`,
		    },
		    {
		        id: "priority-tag",
		        name: "PriorityTag",
		        componentName: null,
		        description:  `Priority indicators for tasks, issues, and items requiring attention levels.`,
		    },
		    {
		        id: "category-tag",
		        name: "CategoryTag",
		        componentName: null,
		        description:  `Category and classification badges for organizing and labeling content.`,
		    },
		    {
		        id: "long-text-tag",
		        name: "LongTextTag",
		        componentName: null,
		        description:  `Badges with longer text content demonstrating text handling and wrapping.`,
		    }
	    ]
	},
	{
		id: "tag-selector",
		title: "Components/Form/Tag Selector",
		componentName: "FktTagSelectorComponent",
		description: `The FktTagSelector component provides an interactive dropdown for selecting from a list of tag options. Built with Angular signals and the overlay system, it offers a clean interface for choosing status, categories, or other tag-represented values.`,
		file: () => import("./tag-selector/fkt-tag-selector.stories"),
		type: 'story',
		externalExamples: () => import("./tag-selector/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "two-way-binding", text: "Two-Way Binding", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "status-management", text: "Status Management", level: 3 },
			{ id: "category-selection", text: "Category Selection", level: 3 },
			{ id: "team-and-assignment", text: "Team and Assignment", level: 3 },
			{ id: "configuration", text: "Configuration", level: 3 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "performance", text: "Performance", level: 2 }
		],
		stories: [
		    {
		        id: "preview",
		        name: "Preview",
		        componentName: null,
		        description:  `Interactive tag selector with predefined status options. Click to open dropdown and select an option.`,
		    },
		    {
		        id: "order-status",
		        name: "OrderStatus",
		        componentName: "OrderStatusExampleComponent",
		        description:  `Tag selector for managing order status with multiple workflow states.`,
		    },
		    {
		        id: "priority",
		        name: "Priority",
		        componentName: "PriorityExampleComponent",
		        description:  `Tag selector for task or issue priority levels with visual hierarchy.`,
		    },
		    {
		        id: "project-status",
		        name: "ProjectStatus",
		        componentName: null,
		        description:  `Displays the status of a project using colored tags for each phase. Use this example for dashboards, kanbans or project summary views.`,
		    },
		    {
		        id: "user-status",
		        name: "UserStatus",
		        componentName: null,
		        description:  `Represents the status of a user with classic availability tags (Online, Away, Busy, Offline). Useful in chat apps, team dashboards, or user presence indicators.`,
		    },
		    {
		        id: "team-assignment",
		        name: "TeamAssignment",
		        componentName: null,
		        description:  `Showcases different team assignments using distinctive tag colors. Handy for project management tools, HR apps, or team allocation displays.`,
		    },
		    {
		        id: "category",
		        name: "Category",
		        componentName: null,
		        description:  `Demonstrates tags for product or content categories. Use this pattern for e-commerce, content tagging, search filters, or any interface that organizes information by category.`,
		    }
	    ]
	},
	{
		id: "textarea",
		title: "Components/Form/Textarea",
		componentName: "FktTextareaComponent",
		description: `A multi-line text input component with reactive form integration, validation support, and optional auto-expand functionality for capturing longer text content from users.`,
		file: () => import("./textarea/fkt-textarea.stories"),
		type: 'story',
		externalExamples: () => import("./textarea/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "accessibility", text: "Accessibility", level: 2 }
		],
		stories: [
		    {
		        id: "basic-usage",
		        name: "BasicUsage",
		        componentName: "BasicExampleComponent",
		        description:  `A basic textarea with label and placeholder. Use this as a starting point for most scenarios where free-form multi-line text input is needed.`,
		    },
		    {
		        id: "validation",
		        name: "Validation",
		        componentName: "ValidationExampleComponent",
		        description:  `Textarea with validation logic for minimum and maximum length. Shows error messages and disables submission if the requirements are not met.`,
		    },
		    {
		        id: "auto-expand",
		        name: "AutoExpand",
		        componentName: "AutoExpandExampleComponent",
		        description:  `Textarea with auto-expand enabled. The textarea grows vertically as the user types more lines, improving the writing experience for long texts.`,
		    },
		    {
		        id: "form-integration",
		        name: "FormIntegration",
		        componentName: "FormIntegrationExampleComponent",
		        description:  `Demonstrates how the textarea integrates with signal forms. This is ideal for real-world forms that need validation, control and submission.`,
		    },
		    {
		        id: "character-counter",
		        name: "CharacterCounter",
		        componentName: "CharacterCounterExampleComponent",
		        description:  `Textarea with a live character counter, ideal for use cases like social posts, tweets, or messages with a maximum allowed length.`,
		    },
		    {
		        id: "disabled-state",
		        name: "DisabledState",
		        componentName: "DisabledExampleComponent",
		        description:  `Shows the textarea in a disabled state. Useful for read-only or preview scenarios, or when editing is not allowed due to permissions or workflow status.`,
		    }
	    ]
	},
	{
		id: "tooltip",
		title: "Components/Overlays/Tooltip",
		componentName: "FktTooltipDirective",
		description: `A lightweight tooltip directive that provides contextual information on hover. Built with Angular signals and overlay system, it offers flexible positioning and seamless integration with any HTML element.`,
		file: () => import("./tooltip/fkt-tooltip.stories"),
		type: 'story',
		externalExamples: () => import("./tooltip/examples/raw-examples").then(file => file.default),
		docSections: [
			{ id: "key-features", text: "Key Features", level: 2 },
			{ id: "configuration-options", text: "Configuration Options", level: 2 },
			{ id: "types", text: "Types", level: 3 },
			{ id: "use-cases", text: "Use Cases", level: 2 },
			{ id: "ui-element-enhancement", text: "UI Element Enhancement", level: 3 },
			{ id: "information-architecture", text: "Information Architecture", level: 3 },
			{ id: "accessibility-support", text: "Accessibility Support", level: 3 },
			{ id: "accessibility", text: "Accessibility", level: 2 },
			{ id: "performance", text: "Performance", level: 2 }
		],
		stories: [
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: "BasicTooltipExampleComponent",
		        description:  `Simple tooltip implementation with basic text content and hover interaction.`,
		    },
		    {
		        id: "positioning",
		        name: "Positioning",
		        componentName: "PositioningTooltipExampleComponent",
		        description:  `Tooltip positioning examples showing all available position options.`,
		    },
		    {
		        id: "interactive",
		        name: "Interactive",
		        componentName: "InteractiveTooltipExampleComponent",
		        description:  `Advanced tooltip examples with different colors and overflow detection.`,
		    },
		    {
		        id: "different-elements",
		        name: "DifferentElements",
		        componentName: "DifferentElementsExampleComponent",
		        description:  `Tooltips applied to various UI elements like buttons, icons, and text.`,
		    }
	    ]
	},
];
