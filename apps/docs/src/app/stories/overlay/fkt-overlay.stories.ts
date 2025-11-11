import { FktOverlayService } from 'frakton-ng/overlay';
import {
	FktCustomTooltipOverlayExampleComponent,
	FktDropdownOverlayExampleComponent,
	FktFormOverlayExampleComponent,
	FktSimpleOverlayExampleComponent,
	FktInteractiveOverlayExampleComponent
} from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-overlay.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Overlays/Overlay",
    description: "The FktOverlay service provides a powerful and flexible system for creating positioned overlays in your Angular applications.\n" +
        "Built with modern Angular signals and reactive patterns, it supports dynamic positioning, intelligent repositioning, and seamless data binding between parent and overlay components.",
	component: FktOverlayService,
	documentation,
	argTypes: {
		open: {
			category: "Methods",
			type: 'function',
			control: 'text',
			description: 'Opens an overlay with the specified component and options'
		}
	}
}

export const Simple: Story<FktSimpleOverlayExampleComponent> = {
	component: FktSimpleOverlayExampleComponent,
	description: "Basic overlay implementation with simple content positioning.",
	args: {}
};

export const Dropdown: Story<FktDropdownOverlayExampleComponent> = {
	component: FktDropdownOverlayExampleComponent,
	description: "Dropdown-style overlay with menu items and selection functionality.",
	args: {}
};

export const Form: Story<FktFormOverlayExampleComponent> = {
	component: FktFormOverlayExampleComponent,
	description: "Overlay containing form elements for input and data collection.",
	args: {}
};

export const CustomTooltip: Story<FktCustomTooltipOverlayExampleComponent> = {
	component: FktCustomTooltipOverlayExampleComponent,
	description: "Custom tooltip implementation using overlay service with rich content.",
	args: {}
};

export const Interactive: Story<FktInteractiveOverlayExampleComponent> = {
	component: FktInteractiveOverlayExampleComponent,
	description: "Interactive overlay with complex content and user interactions.",
	args: {}
};

export default meta;
