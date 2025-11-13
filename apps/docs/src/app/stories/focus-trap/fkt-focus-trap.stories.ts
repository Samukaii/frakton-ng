import { FktFocusTrapDirective } from 'frakton-ng/focus-trap';
import {
	FktFocusTrapBasicExampleComponent,
	FktFocusTrapModalExampleComponent,
	FktFocusTrapFormExampleComponent
} from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-focus-trap.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Accessibility/FocusTrap",
	component: FktFocusTrapDirective,
    description: "A directive that traps keyboard focus within a container, ensuring proper accessibility for modals, forms, and other interactive elements that require contained navigation.",
	documentation,
	argTypes: {
		preventScroll: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: "true",
			description: 'Prevents scrolling when focusing elements within the trap'
		},
		restoreFocus: {
			category: "Methods",
			type: 'function',
			control: 'text',
			description: 'Restores focus to the element that was focused before the trap was activated'
		}
	}
}

export const Basic: Story<FktFocusTrapBasicExampleComponent> = {
	component: FktFocusTrapBasicExampleComponent,
	description: "Basic focus trap implementation confining keyboard navigation to a specific area.",
	args: {}
};

export const Modal: Story<FktFocusTrapModalExampleComponent> = {
	component: FktFocusTrapModalExampleComponent,
	description: "Focus trap used in modal dialogs to ensure proper keyboard accessibility.",
	args: {}
};

export const Form: Story<FktFocusTrapFormExampleComponent> = {
	component: FktFocusTrapFormExampleComponent,
	description: "Focus trap applied to form elements for sequential keyboard navigation.",
	args: {}
};

export default meta;
