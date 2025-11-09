import { FktDrawerComponent, fktSidebarModes } from 'frakton-ng/drawer';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-drawer.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Navigation/Drawer",
	component: FktDrawerComponent,
	documentation,
	argTypes: {
		opened: {
			control: 'boolean',
			category: "Attributes",
			type: 'boolean',
			defaultValue: "false",
			description: 'Controls whether the drawer is open or closed'
		},
		mode: {
			control: 'select',
			category: "Attributes",
			type: 'FktDrawerTypes',
			options: fktSidebarModes,
			import: "import {FktDrawerTypes} from 'frakton-ng/drawer'",
			defaultValue: "'push'",
			description: 'Display mode: overlay (floating) or push (displaces content)'
		},
		width: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			defaultValue: "'250px'",
			description: 'Width of the drawer when opened'
		},
		backdropClick: {
			category: "Events",
			type: 'EventEmitter<void>',
			control: 'text',
			description: 'Emitted when backdrop is clicked in overlay mode'
		}
	}
}

export const Push: Story<FktDrawerComponent> = {
	description: "Drawer in push mode that displaces the main content when opened.",
	args: {
		opened: false,
		mode: 'push',
		width: '250px'
	}
};

export const Overlay: Story<FktDrawerComponent> = {
	description: "Drawer in overlay mode that floats over the content with backdrop.",
	args: {
		opened: false,
		mode: 'overlay', 
		width: '300px'
	}
};

export const Opened: Story<FktDrawerComponent> = {
	description: "Drawer in opened state showing expanded navigation content.",
	args: {
		opened: true,
		mode: 'push',
		width: '250px'
	}
};

export const Wide: Story<FktDrawerComponent> = {
	description: "Drawer with wider width for more content and better readability.",
	args: {
		opened: false,
		mode: 'push',
		width: '350px'
	}
};

export const Narrow: Story<FktDrawerComponent> = {
	description: "Compact drawer with minimal width for icon-based navigation.",
	args: {
		opened: false,
		mode: 'push',
		width: '60px'
	}
};

export default meta;