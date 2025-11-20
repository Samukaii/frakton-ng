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
	},
	{
		id: "autocomplete",
		title: "Components/Form/Autocomplete",
		componentName: "FktAutocompleteComponent",
		description: `A powerful and flexible autocomplete input component with dropdown options, search functionality, and support for custom actions. Built with Angular signals and reactive patterns, it offers seamless integration with forms and dynamic data sources.`,
		file: () => import("./autocomplete/fkt-autocomplete.stories"),
		externalExamples: () => import("./autocomplete/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: "FktAutocompleteBasicExampleComponent",
		        description: `Basic autocomplete implementation with predefined options. Perfect starting point showing essential functionality with search and selection capabilities.`,
		    },
		    {
		        id: "auto-creation",
		        name: "AutoCreation",
		        componentName: "FktAutocompleteAutoCreationExampleComponent",
		        description: `Auto-creation mode allows users to create new options by typing values not in the predefined list. Ideal for tag systems, category management, and dynamic data entry.`,
		    },
		    {
		        id: "custom-styling",
		        name: "CustomStyling",
		        componentName: "FktAutocompleteCustomStylingExampleComponent",
		        description: `Custom styling and disabled state demonstration. Shows how to apply visual customization and handle disabled states with interactive controls.`,
		    },
		    {
		        id: "events",
		        name: "Events",
		        componentName: "FktAutocompleteEventsExampleComponent",
		        description: `Interactive functionality with event handling and custom actions. Demonstrates search events, value changes, and action button interactions with real-time event logging.`,
		    },
		    {
		        id: "loading-states",
		        name: "LoadingStates",
		        componentName: "FktAutocompleteLoadingStatesExampleComponent",
		        description: `Loading states and no results handling with simulated API calls. Perfect for async data fetching scenarios with realistic loading indicators and empty state messaging.`,
		    }
	    ]
	},
	{
		id: "badge",
		title: "Components/Data Display/Badge",
		componentName: "FktBadgeComponent",
		description: `The FktBadge component provides a visual indicator for status, categories, counts, and other contextual information. Built with Angular signals and flexible styling options, it offers semantic color coding and variant styles for different visual prominence levels.`,
		file: () => import("./badge/fkt-badge.stories"),
		externalExamples: () => import("./badge/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "success-badge",
		        name: "SuccessBadge",
		        componentName: null,
		        description: `A standard badge with success state and opaque styling, perfect for status indicators.`,
		    },
		    {
		        id: "error-badge",
		        name: "ErrorBadge",
		        componentName: null,
		        description: `Badge showing error state with red color for urgent attention.`,
		    },
		    {
		        id: "warning-badge",
		        name: "WarningBadge",
		        componentName: null,
		        description: `Badge with orange color for warnings and pending states that need attention.`,
		    },
		    {
		        id: "info-badge",
		        name: "InfoBadge",
		        componentName: null,
		        description: `Badge with blue color for informational content and faded variant for subtle display.`,
		    },
		    {
		        id: "badge-variations",
		        name: "BadgeVariations",
		        componentName: "BadgeVariationsExampleComponent",
		        description: `Comprehensive showcase of all available colors and variants, demonstrating the full range of badge styling options.`,
		    },
		    {
		        id: "count-badge",
		        name: "CountBadge",
		        componentName: null,
		        description: `Numerical badges perfect for displaying counts, quantities, and numbers.`,
		    },
		    {
		        id: "status-badge",
		        name: "StatusBadge",
		        componentName: null,
		        description: `Status indicators for workflow states, item conditions, and process stages.`,
		    },
		    {
		        id: "priority-badge",
		        name: "PriorityBadge",
		        componentName: null,
		        description: `Priority indicators for tasks, issues, and items requiring attention levels.`,
		    },
		    {
		        id: "category-badge",
		        name: "CategoryBadge",
		        componentName: null,
		        description: `Category and classification badges for organizing and labeling content.`,
		    },
		    {
		        id: "long-text-badge",
		        name: "LongTextBadge",
		        componentName: null,
		        description: `Badges with longer text content demonstrating text handling and wrapping.`,
		    }
	    ]
	},
	{
		id: "badge-selector",
		title: "Components/Form/Badge Selector",
		componentName: "FktBadgeSelectorComponent",
		description: `The FktBadgeSelector component provides an interactive dropdown for selecting from a list of badge options. Built with Angular signals and the overlay system, it offers a clean interface for choosing status, categories, or other badge-represented values.`,
		file: () => import("./badge-selector/fkt-badge-selector.stories"),
		externalExamples: () => import("./badge-selector/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "preview",
		        name: "Preview",
		        componentName: null,
		        description: `Interactive badge selector with predefined status options. Click to open dropdown and select an option.`,
		    },
		    {
		        id: "order-status",
		        name: "OrderStatus",
		        componentName: "OrderStatusExampleComponent",
		        description: `Badge selector for managing order status with multiple workflow states.`,
		    },
		    {
		        id: "priority",
		        name: "Priority",
		        componentName: "PriorityExampleComponent",
		        description: `Badge selector for task or issue priority levels with visual hierarchy.`,
		    },
		    {
		        id: "project-status",
		        name: "ProjectStatus",
		        componentName: null,
		        description: `Displays the status of a project using colored badges for each phase. Use this example for dashboards, kanbans or project summary views.`,
		    },
		    {
		        id: "user-status",
		        name: "UserStatus",
		        componentName: null,
		        description: `Represents the status of a user with classic availability badges (Online, Away, Busy, Offline). Useful in chat apps, team dashboards, or user presence indicators.`,
		    },
		    {
		        id: "team-assignment",
		        name: "TeamAssignment",
		        componentName: null,
		        description: `Showcases different team assignments using distinctive badge colors. Handy for project management tools, HR apps, or team allocation displays.`,
		    },
		    {
		        id: "category",
		        name: "Category",
		        componentName: null,
		        description: `Demonstrates badges for product or content categories. Use this pattern for e-commerce, content tagging, search filters, or any interface that organizes information by category.`,
		    }
	    ]
	},
	{
		id: "button",
		title: "Components/Actions/Button",
		componentName: "FktButtonComponent",
		description: "The FktButton component provides a versatile and customizable button with multiple themes, variants, and styling options. Built with Angular signals and modern design patterns, it supports various visual styles, icons, loading states, and accessibility features.",
		file: async () => buttonStory, // Imported eagerly for instant loading
		externalExamples: () => import("./button/examples/raw-examples").then(file => file.default),
	    stories: [
		    {
		        id: "raised",
		        name: "Raised",
		        componentName: null,
		        description: "A standard button with elevated appearance, perfect for primary actions.",
		    },
		    {
		        id: "stroked",
		        name: "Stroked",
		        componentName: null,
		        description: "An outlined button style ideal for secondary actions and cancel operations.",
		    },
		    {
		        id: "disabled",
		        name: "Disabled",
		        componentName: null,
		        description: "Button in disabled state showing non-interactive appearance and behavior.",
		    },
		    {
		        id: "with-icon",
		        name: "WithIcon",
		        componentName: null,
		        description: "Button with icon support, demonstrating icon positioning and combination with text.",
		    },
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: null,
		        description: "Minimal button style with basic theme, perfect for subtle actions and text-only interactions.",
		    },
		    {
		        id: "icon-only",
		        name: "IconOnly",
		        componentName: null,
		        description: "Compact circular button with just an icon, ideal for toolbars and action menus.",
		    },
		    {
		        id: "rect-icon",
		        name: "RectIcon",
		        componentName: null,
		        description: "Rectangular icon button with standard padding, perfect for data table actions.",
		    },
		    {
		        id: "loading",
		        name: "Loading",
		        componentName: null,
		        description: "Button showing loading state with custom loading text, perfect for async operations.",
		    },
		    {
		        id: "with-left-icon",
		        name: "WithLeftIcon",
		        componentName: null,
		        description: "Button with icon positioned to the left of the text for enhanced visual hierarchy.",
		    },
		    {
		        id: "text-variants",
		        name: "TextVariants",
		        componentName: "TextVariantsExampleComponent",
		        description: "Comprehensive showcase of all button text variants across different themes, colors, and shapes.",
		    },
		    {
		        id: "icon-variants",
		        name: "IconVariants",
		        componentName: "IconVariantsExampleComponent",
		        description: "Comprehensive showcase of all button icon variants across different themes, colors, and shapes.",
		    },
		    {
		        id: "stroked-secondary",
		        name: "StrokedSecondary",
		        componentName: null,
		        description: "Buttons demonstrating different theme options with the same color for consistency.",
		    },
		    {
		        id: "long-text",
		        name: "LongText",
		        componentName: null,
		        description: "Button with longer text content showing how the component handles text wrapping.",
		    }
	    ]
	},
	{
		id: "buttons-list",
		title: "Components/Actions/Buttons list",
		componentName: "FktButtonsListComponent",
		description: `The FktButtonsList component provides a flexible container for displaying multiple buttons with consistent spacing and alignment. Built with Angular signals and customizable layout options, it supports both horizontal and vertical orientations with various alignment strategies.`,
		file: () => import("./buttons-list/fkt-buttons-list.stories"),
		
		stories: [
		    {
		        id: "preview",
		        name: "Preview",
		        componentName: null,
		        description: `A horizontal list of action buttons with different themes and colors, perfect for form actions.`,
		    },
		    {
		        id: "form-actions",
		        name: "FormActions",
		        componentName: null,
		        description: `Form action buttons with cancel, save, and submit actions using different alignment options.`,
		    },
		    {
		        id: "vertical-list",
		        name: "VerticalList",
		        componentName: null,
		        description: `Buttons arranged vertically with filled button style and center alignment.`,
		    },
		    {
		        id: "icon-only-actions",
		        name: "IconOnlyActions",
		        componentName: null,
		        description: `Compact icon-only buttons with tooltips for space-efficient toolbars.`,
		    },
		    {
		        id: "data-table-actions",
		        name: "DataTableActions",
		        componentName: null,
		        description: `Action buttons commonly used in data tables for row-level operations.`,
		    },
		    {
		        id: "bulk-actions",
		        name: "BulkActions",
		        componentName: null,
		        description: `Demonstrates a group of bulk actions, such as selecting all items, exporting, or deleting selected entries. Each action can have a custom theme, color, icon, and label. Useful for batch operations in tables, lists, or admin panels.`,
		    },
		    {
		        id: "toolbar-actions",
		        name: "ToolbarActions",
		        componentName: null,
		        description: `Shows a classic horizontal toolbar with multiple actions, including "New", "Import", "Export", and "Refresh". Icons, themes, and tooltips are supported for enhanced usability in top toolbars and navigation bars.`,
		    },
		    {
		        id: "floating-actions",
		        name: "FloatingActions",
		        componentName: null,
		        description: `Displays floating action buttons (FAB) in a vertical stack. Ideal for mobile or compact layouts where quick access to chat or add actions is needed. Each button can show an icon and tooltip for accessibility.`,
		    },
		    {
		        id: "loading-states",
		        name: "LoadingStates",
		        componentName: null,
		        description: `Showcases actions in a loading state. Useful for asynchronous operations where feedback is required, such as saving data. The button can display a spinner and custom loading text until the process completes.`,
		    },
		    {
		        id: "disabled-states",
		        name: "DisabledStates",
		        componentName: null,
		        description: `Illustrates disabled actions, preventing user interaction. Use for workflows where certain steps are unavailable or conditional, such as submitting forms only after all required fields are completed.`,
		    }
	    ]
	},
	{
		id: "calendar",
		title: "Components/Navigation/Calendar",
		componentName: "FktCalendarComponent",
		description: `The FktCalendar component provides a comprehensive date selection interface with multiple view modes and extensive customization options. Built with Angular signals for optimal performance and reactivity, it supports date, month, and year selection with configurable styling and behavior.`,
		file: () => import("./calendar/fkt-calendar.stories"),
		externalExamples: () => import("./calendar/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "basic-calendar",
		        name: "BasicCalendar",
		        componentName: "FktCalendarBasicExampleComponent",
		        description: `Basic calendar with date selection functionality and month/year navigation.`,
		    },
		    {
		        id: "borderless-calendar",
		        name: "BorderlessCalendar",
		        componentName: "FktCalendarBorderlessExampleComponent",
		        description: `Calendar displayed without border for seamless integration into containers.`,
		    },
		    {
		        id: "with-disabled-dates",
		        name: "WithDisabledDates",
		        componentName: "FktCalendarDisabledDatesExampleComponent",
		        description: `Calendar with disabled dates to restrict user selection to valid date ranges.`,
		    },
		    {
		        id: "with-events",
		        name: "WithEvents",
		        componentName: "FktCalendarEventsExampleComponent",
		        description: `Calendar displaying events and highlighting dates with special significance.`,
		    },
		    {
		        id: "custom-styling",
		        name: "CustomStyling",
		        componentName: "FktCalendarCustomStylingExampleComponent",
		        description: `Calendar with custom styling and visual indicators for different date states.`,
		    }
	    ]
	},
	{
		id: "calendar-navigator",
		title: "Components/Navigation/Calendar Navigator",
		componentName: "FktCalendarNavigatorComponent",
		description: `The FktCalendarNavigator component provides an interactive calendar header with navigation controls and modal-based date selection. It displays the current month/year and allows users to navigate between dates with modal overlays for detailed selection.`,
		file: () => import("./calendar-navigator/fkt-calendar-navigator.stories"),
		externalExamples: () => import("./calendar-navigator/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "month",
		        name: "Month",
		        componentName: null,
		        description: `Calendar navigator in month mode, allowing users to navigate through months and select specific months.`,
		    },
		    {
		        id: "year",
		        name: "Year",
		        componentName: null,
		        description: `Calendar navigator in year mode, allowing users to navigate through years and select specific years.`,
		    },
		    {
		        id: "month-mode-example",
		        name: "MonthModeExample",
		        componentName: "MonthModeExampleComponent",
		        description: `Comprehensive example showing month mode navigation with date selection and current date display.`,
		    },
		    {
		        id: "year-mode-example",
		        name: "YearModeExample",
		        componentName: "YearModeExampleComponent",
		        description: `Comprehensive example showing year mode navigation with year selection and current year display.`,
		    },
		    {
		        id: "dynamic-mode-example",
		        name: "DynamicModeExample",
		        componentName: "DynamicModeExampleComponent",
		        description: `Dynamic mode switching example showing how to toggle between month and year navigation modes.`,
		    },
		    {
		        id: "form-integration-example",
		        name: "FormIntegrationExample",
		        componentName: "FormIntegrationExampleComponent",
		        description: `Form integration example showing how to use calendar navigator with reactive forms and form validation.`,
		    }
	    ]
	},
	{
		id: "checkbox",
		title: "Components/Form/Checkbox",
		componentName: "FktCheckboxComponent",
		description: `The FktCheckbox component provides a clean and accessible checkbox input with custom styling. Built with Angular signals and reactive forms, it offers seamless integration with form validation and state management.`,
		file: () => import("./checkbox/fkt-checkbox.stories"),
		externalExamples: () => import("./checkbox/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "basic-checkbox",
		        name: "BasicCheckbox",
		        componentName: "FktCheckboxBasicExampleComponent",
		        description: `A basic checkbox with label text. Click either the checkbox or the label to toggle the state.`,
		    },
		    {
		        id: "pre-checked-checkbox",
		        name: "PreCheckedCheckbox",
		        componentName: "FktCheckboxPreCheckedExampleComponent",
		        description: `A checkbox that is initially checked. The control is initialized with true as the default value.`,
		    },
		    {
		        id: "disabled-state",
		        name: "DisabledState",
		        componentName: "FktCheckboxDisabledExampleComponent",
		        description: `A checkbox in disabled state. The checkbox cannot be toggled and appears with reduced opacity.`,
		    },
		    {
		        id: "validation",
		        name: "Validation",
		        componentName: "FktCheckboxValidationExampleComponent",
		        description: `A checkbox with required validation. The checkbox must be checked for the form to be valid, and shows error state when invalid.`,
		    }
	    ]
	},
	{
		id: "color-picker",
		title: "Components/Form/Color Picker",
		componentName: "FktColorPickerComponent",
		description: `A sophisticated color picker component featuring semantic color descriptions, international localization, advanced visual selectors, and seamless Angular signals integration. Built for professional design tools and user-friendly color selection.`,
		file: () => import("./color-picker/fkt-color-picker.stories"),
		
		stories: [
		    {
		        id: "basic-color-picker",
		        name: "BasicColorPicker",
		        componentName: null,
		        description: `A basic color picker with default HSL format and HEX output. Supports alpha channel for transparency.`,
		    },
		    {
		        id: "hex-format",
		        name: "HexFormat",
		        componentName: null,
		        description: `Color picker configured for HEX format input and output with a pre-selected blue color.`,
		    },
		    {
		        id: "rgb-format",
		        name: "RgbFormat",
		        componentName: null,
		        description: `Color picker using RGB format for both input and output with a pre-selected red color.`,
		    },
		    {
		        id: "hsl-format",
		        name: "HslFormat",
		        componentName: null,
		        description: `Color picker using HSL format for both input and output with a pre-selected green color.`,
		    },
		    {
		        id: "with-alpha-channel",
		        name: "WithAlphaChannel",
		        componentName: null,
		        description: `Color picker with alpha channel enabled, allowing transparency selection. Shows a semi-transparent purple color.`,
		    },
		    {
		        id: "disabled-state",
		        name: "DisabledState",
		        componentName: null,
		        description: `Color picker in disabled state that cannot be interacted with but shows the current color value.`,
		    },
		    {
		        id: "hidden-label",
		        name: "HiddenLabel",
		        componentName: null,
		        description: `Color picker with visually hidden label for compact layouts while maintaining accessibility.`,
		    }
	    ]
	},
	{
		id: "date-picker",
		title: "Components/Form/Date Picker",
		componentName: "FktDatePickerComponent",
		description: `The FktDatePicker component provides an intuitive and accessible date selection interface. Built with Angular signals and reactive forms, it offers a clean input field with a calendar overlay for date selection.`,
		file: () => import("./date-picker/fkt-date-picker.stories"),
		
		stories: [
		    {
		        id: "basic-date-picker",
		        name: "BasicDatePicker",
		        componentName: null,
		        description: `A basic date picker with label and placeholder. Click the input field to open the calendar modal for date selection.`,
		    },
		    {
		        id: "with-prefilled-date",
		        name: "WithPrefilledDate",
		        componentName: null,
		        description: `A date picker initialized with today's date, showing how the component displays pre-selected values.`,
		    },
		    {
		        id: "required-validation",
		        name: "RequiredValidation",
		        componentName: null,
		        description: `A date picker with required field validation. The field shows error state when empty and must be filled for form submission.`,
		    },
		    {
		        id: "disabled-state",
		        name: "DisabledState",
		        componentName: null,
		        description: `A date picker in disabled state. The field shows a date value but cannot be modified by the user.`,
		    },
		    {
		        id: "with-format-hint",
		        name: "WithFormatHint",
		        componentName: null,
		        description: `A date picker with a format hint in the placeholder to guide users on the expected date format.`,
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
		externalExamples: () => import("./dialog/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "simple",
		        name: "Simple",
		        componentName: "FktSimpleDialogExampleComponent",
		        description: `Basic dialog implementation with simple content and close functionality.`,
		    },
		    {
		        id: "confirmation",
		        name: "Confirmation",
		        componentName: "FktConfirmationDialogExampleComponent",
		        description: `Dialog for confirmation actions with primary and secondary buttons.`,
		    },
		    {
		        id: "form",
		        name: "Form",
		        componentName: "FktFormDialogExampleComponent",
		        description: `Dialog containing form elements for data input and submission.`,
		    },
		    {
		        id: "custom",
		        name: "Custom",
		        componentName: "FktCustomDialogExampleComponent",
		        description: `Custom styled dialog with unique appearance and behavior.`,
		    },
		    {
		        id: "small",
		        name: "Small",
		        componentName: "FktSmallDialogExampleComponent",
		        description: `Compact dialog size perfect for quick confirmations and alerts.`,
		    },
		    {
		        id: "fullscreen",
		        name: "Fullscreen",
		        componentName: "FktFullscreenDialogExampleComponent",
		        description: `Full viewport dialog for complex content and detailed forms.`,
		    },
		    {
		        id: "overview",
		        name: "Overview",
		        componentName: "FktDialogOverviewExampleComponent",
		        description: `Comprehensive showcase of all dialog variants and their use cases.`,
		    }
	    ]
	},
	{
		id: "drawer",
		title: "Components/Navigation/Drawer",
		componentName: "FktDrawerComponent",
		description: `The FktDrawer component provides a slide-out navigation panel that can either push content aside or overlay on top of it. Built with Angular signals and modern design patterns, it offers flexible positioning and smooth animations.`,
		file: () => import("./drawer/fkt-drawer.stories"),
		externalExamples: () => import("./drawer/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "push",
		        name: "Push",
		        componentName: "PushExampleComponent",
		        description: `Drawer in push mode that displaces the main content when opened.`,
		    },
		    {
		        id: "overlay",
		        name: "Overlay",
		        componentName: "OverlayExampleComponent",
		        description: `Drawer in overlay mode that floats over the content with backdrop.`,
		    },
		    {
		        id: "opened",
		        name: "Opened",
		        componentName: "OpenedExampleComponent",
		        description: `Drawer in opened state showing expanded navigation content.`,
		    },
		    {
		        id: "wide",
		        name: "Wide",
		        componentName: "WideExampleComponent",
		        description: `Drawer with wider width for more content and better readability.`,
		    },
		    {
		        id: "narrow",
		        name: "Narrow",
		        componentName: "NarrowExampleComponent",
		        description: `Compact drawer with minimal width for icon-based navigation.`,
		    }
	    ]
	},
	{
		id: "focus-trap",
		title: "Components/Accessibility/FocusTrap",
		componentName: "FktFocusTrapDirective",
		description: `A directive that traps keyboard focus within a container, ensuring proper accessibility for modals, forms, and other interactive elements that require contained navigation.`,
		file: () => import("./focus-trap/fkt-focus-trap.stories"),
		externalExamples: () => import("./focus-trap/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: "FktFocusTrapBasicExampleComponent",
		        description: `Basic focus trap implementation confining keyboard navigation to a specific area.`,
		    },
		    {
		        id: "modal",
		        name: "Modal",
		        componentName: "FktFocusTrapModalExampleComponent",
		        description: `Focus trap used in modal dialogs to ensure proper keyboard accessibility.`,
		    },
		    {
		        id: "form",
		        name: "Form",
		        componentName: "FktFocusTrapFormExampleComponent",
		        description: `Focus trap applied to form elements for sequential keyboard navigation.`,
		    }
	    ]
	},
	{
		id: "icon",
		title: "Components/Data Display/Icon",
		componentName: "FktIconComponent",
		description: `The FktIcon component provides a comprehensive icon system with a curated set of icons for various UI elements and interactions. Built with scalable vector graphics for crisp display at any size and seamless integration with the design system.`,
		file: () => import("./icon/fkt-icon.stories"),
		
		stories: [
		    {
		        id: "basic-icon",
		        name: "BasicIcon",
		        componentName: null,
		        description: `A basic icon with default size and color, inheriting from parent text color.`,
		    },
		    {
		        id: "large-icon",
		        name: "LargeIcon",
		        componentName: null,
		        description: `An icon with custom large size demonstrating size flexibility.`,
		    },
		    {
		        id: "colored-icon",
		        name: "ColoredIcon",
		        componentName: null,
		        description: `An icon with custom color showing color customization capabilities.`,
		    },
		    {
		        id: "gallery",
		        name: "Gallery",
		        componentName: "IconsGalleyComponent",
		        description: `Complete gallery of all available icons with search functionality to explore the icon library.`,
		    }
	    ]
	},
	{
		id: "input",
		title: "Components/Form/Input",
		componentName: "FktInputComponent",
		description: `A versatile form input component with multiple types, data transformers, and comprehensive validation support. Built with Angular signals for reactive form integration.`,
		file: () => import("./input/fkt-input.stories"),
		externalExamples: () => import("./input/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: null,
		        description: `A basic text input field with label and placeholder text for general text entry.`,
		    },
		    {
		        id: "password",
		        name: "Password",
		        componentName: null,
		        description: `A password input field with show/hide toggle functionality. Click the eye icon to toggle password visibility.`,
		    },
		    {
		        id: "email",
		        name: "Email",
		        componentName: null,
		        description: `An email input field optimized for email addresses with proper keyboard and validation support.`,
		    },
		    {
		        id: "number",
		        name: "Number",
		        componentName: null,
		        description: `A numeric input that only accepts numbers and shows numeric keypad on mobile devices.`,
		    },
		    {
		        id: "currency",
		        name: "Currency",
		        componentName: null,
		        description: `Input with currency transformer that automatically formats values as currency (e.g., $1,234.56).`,
		    },
		    {
		        id: "percent",
		        name: "Percent",
		        componentName: null,
		        description: `Input with percentage transformer that automatically formats values as percentages (e.g., 45.5%).`,
		    },
		    {
		        id: "hour",
		        name: "Hour",
		        componentName: null,
		        description: `Input with hour transformer that formats time values as duration (e.g., 8h 30m).`,
		    }
	    ]
	},
	{
		id: "navigator",
		title: "Components/Navigation/Navigator",
		componentName: "FktNavigatorComponent",
		description: `The FktNavigator component provides a reusable navigation control with previous/next buttons and a flexible content area. It's designed to be a consistent navigation pattern across different components and contexts.`,
		file: () => import("./navigator/fkt-navigator.stories"),
		externalExamples: () => import("./navigator/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: null,
		        description: `Basic navigator with both previous and next buttons enabled for simple navigation.`,
		    },
		    {
		        id: "previous-disabled",
		        name: "PreviousDisabled",
		        componentName: null,
		        description: `Navigator with previous button disabled, useful when at the beginning of a sequence.`,
		    },
		    {
		        id: "next-disabled",
		        name: "NextDisabled",
		        componentName: null,
		        description: `Navigator with next button disabled, useful when at the end of a sequence.`,
		    },
		    {
		        id: "both-disabled",
		        name: "BothDisabled",
		        componentName: null,
		        description: `Navigator with both buttons disabled, useful when navigation is temporarily unavailable.`,
		    },
		    {
		        id: "basic-example",
		        name: "BasicExample",
		        componentName: "BasicExampleComponent",
		        description: `Basic implementation showing simple previous/next navigation with counter state.`,
		    },
		    {
		        id: "date-navigation-example",
		        name: "DateNavigationExample",
		        componentName: "DateNavigationExampleComponent",
		        description: `Date navigation example showing how to navigate through dates with proper boundary conditions.`,
		    },
		    {
		        id: "disabled-state-example",
		        name: "DisabledStateExample",
		        componentName: "DisabledStateExampleComponent",
		        description: `Example demonstrating dynamic enable/disable states based on business logic.`,
		    },
		    {
		        id: "loading-example",
		        name: "LoadingExample",
		        componentName: "LoadingExampleComponent",
		        description: `Navigation with loading states during async operations like data fetching.`,
		    },
		    {
		        id: "item-navigation-example",
		        name: "ItemNavigationExample",
		        componentName: "ItemNavigationExampleComponent",
		        description: `Navigation through a list of items with proper boundary detection.`,
		    },
		    {
		        id: "page-navigation-example",
		        name: "PageNavigationExample",
		        componentName: "PageNavigationExampleComponent",
		        description: `Pagination-style navigation with page numbers and navigation controls.`,
		    }
	    ]
	},
	{
		id: "no-results",
		title: "Components/Feedback/No Results",
		componentName: "FktNoResultsComponent",
		description: `The FktNoResults component provides a consistent and configurable way to display empty states when no data is available. It supports custom icons, descriptions, and action buttons to guide users on what to do next.`,
		file: () => import("./no-results/fkt-no-results.stories"),
		externalExamples: () => import("./no-results/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "simple-no-results",
		        name: "SimpleNoResults",
		        componentName: "SimpleExampleComponent",
		        description: `Basic no results display with just a label, perfect for minimal empty states.`,
		    },
		    {
		        id: "with-icon-and-description",
		        name: "WithIconAndDescription",
		        componentName: "WithIconAndDescriptionExampleComponent",
		        description: `No results display with an icon and descriptive text for better user understanding.`,
		    },
		    {
		        id: "with-action-button",
		        name: "WithActionButton",
		        componentName: "WithActionExampleComponent",
		        description: `Complete no results state with an action button to guide users on next steps.`,
		    },
		    {
		        id: "search-results",
		        name: "SearchResults",
		        componentName: "SearchResultsExampleComponent",
		        description: `No results state specifically designed for search scenarios with clear search action.`,
		    },
		    {
		        id: "data-table-empty-state",
		        name: "DataTableEmptyState",
		        componentName: "DataTableExampleComponent",
		        description: `No results configuration optimized for data tables with add record functionality.`,
		    },
		    {
		        id: "file-upload-empty-state",
		        name: "FileUploadEmptyState",
		        componentName: "FileUploadExampleComponent",
		        description: `No results state for file management interfaces with upload functionality.`,
		    },
		    {
		        id: "compact-size",
		        name: "CompactSize",
		        componentName: "CompactExampleComponent",
		        description: `Compact no results display for smaller containers or inline usage.`,
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
		externalExamples: () => import("./overlay/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "simple",
		        name: "Simple",
		        componentName: "FktSimpleOverlayExampleComponent",
		        description: `Basic overlay implementation with simple content positioning.`,
		    },
		    {
		        id: "dropdown",
		        name: "Dropdown",
		        componentName: "FktDropdownOverlayExampleComponent",
		        description: `Dropdown-style overlay with menu items and selection functionality.`,
		    },
		    {
		        id: "form",
		        name: "Form",
		        componentName: "FktFormOverlayExampleComponent",
		        description: `Overlay containing form elements for input and data collection.`,
		    },
		    {
		        id: "custom-tooltip",
		        name: "CustomTooltip",
		        componentName: "FktCustomTooltipOverlayExampleComponent",
		        description: `Custom tooltip implementation using overlay service with rich content.`,
		    },
		    {
		        id: "interactive",
		        name: "Interactive",
		        componentName: "FktInteractiveOverlayExampleComponent",
		        description: `Interactive overlay with complex content and user interactions.`,
		    }
	    ]
	},
	{
		id: "paginator",
		title: "Components/Navigation/Paginator",
		componentName: "FktPaginatorComponent",
		description: `The FktPaginator component provides server-side pagination controls with configurable display options, responsive design, and accessibility features. Perfect for tables, lists, and any paginated content.`,
		file: () => import("./paginator/fkt-paginator.stories"),
		externalExamples: () => import("./paginator/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: null,
		        description: `Default paginator component with configurable state and options.`,
		    },
		    {
		        id: "basic-example",
		        name: "BasicExample",
		        componentName: "BasicExampleComponent",
		        description: `Default paginator with all features enabled. Try navigating through pages and changing page size.`,
		    },
		    {
		        id: "configurable-example",
		        name: "ConfigurableExample",
		        componentName: "ConfigurableExampleComponent",
		        description: `Examples of different paginator configurations for various use cases.`,
		    },
		    {
		        id: "responsive-example",
		        name: "ResponsiveExample",
		        componentName: "ResponsiveExampleComponent",
		        description: `Responsive design that adapts to different screen sizes with mobile-friendly reordering.`,
		    }
	    ]
	},
	{
		id: "select",
		title: "Components/Form/Select",
		componentName: "FktSelectComponent",
		description: `A dropdown selection component that provides a clean and accessible interface for choosing options. Built with Angular signals and reactive forms, it offers a styled alternative to native select elements with enhanced functionality and consistent design.`,
		file: () => import("./select/fkt-select.stories"),
		externalExamples: () => import("./select/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "basic-select",
		        name: "BasicSelect",
		        componentName: "DefaultExampleComponent",
		        description: `A basic select dropdown with a few options. Click to open the dropdown and select an option.`,
		    },
		    {
		        id: "pre-selected-option",
		        name: "PreSelectedOption",
		        componentName: "PreselectedExampleComponent",
		        description: `A select with a pre-selected value. The control is initialized with a default selection showing the selected option.`,
		    },
		    {
		        id: "large-options-list",
		        name: "LargeOptionsList",
		        componentName: "LargeListExampleComponent",
		        description: `A select with many options showing the scrollable dropdown behavior when there are too many options to fit.`,
		    },
		    {
		        id: "loading-state",
		        name: "LoadingState",
		        componentName: "LoadingExampleComponent",
		        description: `A select showing loading state. This is useful when options are being fetched from an API.`,
		    },
		    {
		        id: "empty-state",
		        name: "EmptyState",
		        componentName: "EmptyStateExampleComponent",
		        description: `A select with no options showing a custom 'no results' message.`,
		    },
		    {
		        id: "with-validation",
		        name: "WithValidation",
		        componentName: "ValidationExampleComponent",
		        description: `A select with required validation. The field shows error state when no option is selected.`,
		    },
		    {
		        id: "disabled-state",
		        name: "DisabledState",
		        componentName: "DisabledExampleComponent",
		        description: `A select in disabled state. The dropdown cannot be opened and the field appears with reduced opacity.`,
		    },
		    {
		        id: "async-loading",
		        name: "AsyncLoading",
		        componentName: "AsyncLoadingExampleComponent",
		        description: `A select that loads options asynchronously. Options are fetched after a simulated API delay.`,
		    }
	    ]
	},
	{
		id: "side-menu",
		title: "Components/Navigation/Side Menu",
		componentName: "FktSideMenuComponent",
		description: `A responsive and customizable side navigation menu component with collapsible states, grouped menu items, and integrated routing support. Built with Angular signals for optimal performance and provides tooltips for collapsed states.`,
		file: () => import("./side-menu/fkt-side-menu.stories"),
		externalExamples: () => import("./side-menu/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "basic-side-menu",
		        name: "BasicSideMenu",
		        componentName: null,
		        description: `Basic side menu with simple menu groups and items for standard navigation.`,
		    },
		    {
		        id: "collapsible-side-menu",
		        name: "CollapsibleSideMenu",
		        componentName: null,
		        description: `Side menu in collapsed state showing only icons with tooltips for space-efficient navigation.`,
		    },
		    {
		        id: "multiple-groups",
		        name: "MultipleGroups",
		        componentName: null,
		        description: `Side menu with multiple grouped sections for organized navigation in complex applications.`,
		    },
		    {
		        id: "dynamic-menu-with-permissions",
		        name: "DynamicMenuWithPermissions",
		        componentName: "DynamicPermissionsSideMenuExampleComponent",
		        description: `Advanced example showing dynamic menu generation based on user permissions.`,
		    },
		    {
		        id: "admin-dashboard-layout",
		        name: "AdminDashboardLayout",
		        componentName: "AdminDashboardLayoutExampleComponent",
		        description: `Complete dashboard layout showcasing real-world usage with content integration.`,
		    },
		    {
		        id: "with-routing",
		        name: "WithRouting",
		        componentName: "WithRoutingExampleComponent",
		        description: `Complete dashboard layout showcasing real-world usage with content integration.`,
		    }
	    ]
	},
	{
		id: "skeleton",
		title: "Components/Feedback/Skeleton",
		componentName: "FktSkeletonComponent",
		description: `The FktSkeleton component provides loading placeholders with multiple types, animations, and configurable appearance. Perfect for indicating content loading states with realistic previews.`,
		file: () => import("./skeleton/fkt-skeleton.stories"),
		externalExamples: () => import("./skeleton/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: null,
		        description: `Basic skeleton component with configurable properties.`,
		    },
		    {
		        id: "basic-example",
		        name: "BasicExample",
		        componentName: "FktSkeletonExamplesBasicComponent",
		        description: `Common skeleton usage patterns and layouts.`,
		    },
		    {
		        id: "types-example",
		        name: "TypesExample",
		        componentName: "FktSkeletonExamplesTypesComponent",
		        description: `Different skeleton types: text, circle, rect, button, and image.`,
		    },
		    {
		        id: "animations-example",
		        name: "AnimationsExample",
		        componentName: "FktSkeletonExamplesAnimationsComponent",
		        description: `Various animation effects: shimmer, pulse, wave, and none.`,
		    }
	    ]
	},
	{
		id: "spinner",
		title: "Components/Feedback/Spinner",
		componentName: "FktSpinnerComponent",
		description: `The FktSpinner component provides a customizable loading indicator with configurable size, stroke width, and color themes. It's designed to give users visual feedback during loading states and async operations.`,
		file: () => import("./spinner/fkt-spinner.stories"),
		externalExamples: () => import("./spinner/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "size-variations",
		        name: "SizeVariations",
		        componentName: "FktSpinnerExampleSizeVariationsComponent",
		        description: `Spinners with different sizes for various use cases and container sizes.`,
		    },
		    {
		        id: "color-themes",
		        name: "ColorThemes",
		        componentName: "FktSpinnerExampleColorThemesComponent",
		        description: `Spinners showcasing different color themes for various semantic meanings.`,
		    },
		    {
		        id: "loading-state",
		        name: "LoadingState",
		        componentName: "FktSpinnerExampleLoadingStateComponent",
		        description: `Spinner used in a typical loading state scenario with conditional display.`,
		    },
		    {
		        id: "custom-configuration",
		        name: "CustomConfiguration",
		        componentName: "FktSpinnerExampleCustomConfigurationComponent",
		        description: `Spinner with dynamic configuration based on different states or conditions.`,
		    }
	    ]
	},
	{
		id: "table",
		title: "Components/Data Display/Table",
		componentName: "FktTableComponent",
		description: `A powerful and flexible table component for displaying tabular data with dynamic columns, row actions, loading states, and customizable empty states. Built with Angular signals for optimal performance and provides extensive customization options for real-world data display scenarios.`,
		file: () => import("./table/fkt-table.stories"),
		externalExamples: () => import("./table/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "basic-table",
		        name: "BasicTable",
		        componentName: "FktTableExamplesBasicTableComponent",
		        description: `A simple table displaying user data with basic column configuration.`,
		    },
		    {
		        id: "table-with-actions",
		        name: "TableWithActions",
		        componentName: "FktTableExamplesTableWithActionsComponent",
		        description: `Complete table with row actions, main header action, and conditional styling.`,
		    },
		    {
		        id: "loading-state",
		        name: "LoadingState",
		        componentName: "FktTableExamplesLoadingStateComponent",
		        description: `Table displaying loading spinner with customizable loading message.`,
		    },
		    {
		        id: "empty-state",
		        name: "EmptyState",
		        componentName: "FktTableExamplesEmptyStateComponent",
		        description: `Table with comprehensive empty state configuration including action button.`,
		    },
		    {
		        id: "interactive-states",
		        name: "InteractiveStates",
		        componentName: "FktTableExamplesInteractiveStatesComponent",
		        description: `Interactive example with state controls for testing different table states.`,
		    },
		    {
		        id: "custom-cell-types",
		        name: "CustomCellTypes",
		        componentName: "FktTableExamplesCustomCellsComponent",
		        description: `Advanced example showing different cell types and custom formatting.`,
		    },
		    {
		        id: "product-table",
		        name: "ProductTable",
		        componentName: "FktTableExamplesProductTableComponent",
		        description: `Real-world example with product data and inventory management actions.`,
		    },
		    {
		        id: "task-table",
		        name: "TaskTable",
		        componentName: "FktTableExamplesTaskTableComponent",
		        description: `Task management table with priority and status indicators.`,
		    }
	    ]
	},
	{
		id: "textarea",
		title: "Components/Form/Textarea",
		componentName: "FktTextareaComponent",
		description: `A multi-line text input component with reactive form integration, validation support, and optional auto-expand functionality for capturing longer text content from users.`,
		file: () => import("./textarea/fkt-textarea.stories"),
		externalExamples: () => import("./textarea/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "basic-usage",
		        name: "BasicUsage",
		        componentName: "BasicExampleComponent",
		        description: `A basic textarea with label and placeholder. Use this as a starting point for most scenarios where free-form multi-line text input is needed.`,
		    },
		    {
		        id: "validation",
		        name: "Validation",
		        componentName: "ValidationExampleComponent",
		        description: `Textarea with validation logic for minimum and maximum length. Shows error messages and disables submission if the requirements are not met.`,
		    },
		    {
		        id: "auto-expand",
		        name: "AutoExpand",
		        componentName: "AutoExpandExampleComponent",
		        description: `Textarea with auto-expand enabled. The textarea grows vertically as the user types more lines, improving the writing experience for long texts.`,
		    },
		    {
		        id: "form-integration",
		        name: "FormIntegration",
		        componentName: "FormIntegrationExampleComponent",
		        description: `Demonstrates how the textarea integrates with signal forms. This is ideal for real-world forms that need validation, control and submission.`,
		    },
		    {
		        id: "character-counter",
		        name: "CharacterCounter",
		        componentName: "CharacterCounterExampleComponent",
		        description: `Textarea with a live character counter, ideal for use cases like social posts, tweets, or messages with a maximum allowed length.`,
		    },
		    {
		        id: "disabled-state",
		        name: "DisabledState",
		        componentName: "DisabledExampleComponent",
		        description: `Shows the textarea in a disabled state. Useful for read-only or preview scenarios, or when editing is not allowed due to permissions or workflow status.`,
		    }
	    ]
	},
	{
		id: "tooltip",
		title: "Components/Overlays/Tooltip",
		componentName: "FktTooltipDirective",
		description: `A lightweight tooltip directive that provides contextual information on hover. Built with Angular signals and overlay system, it offers flexible positioning and seamless integration with any HTML element.`,
		file: () => import("./tooltip/fkt-tooltip.stories"),
		externalExamples: () => import("./tooltip/examples/raw-examples").then(file => file.default),
		stories: [
		    {
		        id: "basic",
		        name: "Basic",
		        componentName: "BasicTooltipExampleComponent",
		        description: `Simple tooltip implementation with basic text content and hover interaction.`,
		    },
		    {
		        id: "positioning",
		        name: "Positioning",
		        componentName: "PositioningTooltipExampleComponent",
		        description: `Tooltip positioning examples showing all available position options.`,
		    },
		    {
		        id: "interactive",
		        name: "Interactive",
		        componentName: "InteractiveTooltipExampleComponent",
		        description: `Advanced tooltip examples with different colors and overflow detection.`,
		    },
		    {
		        id: "different-elements",
		        name: "DifferentElements",
		        componentName: "DifferentElementsExampleComponent",
		        description: `Tooltips applied to various UI elements like buttons, icons, and text.`,
		    }
	    ]
	},
];
