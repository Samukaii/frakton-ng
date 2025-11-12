import { FktDrawerComponent, fktSidebarModes } from 'frakton-ng/drawer';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-drawer.docs.md' with { loader: "text" };
import { PushExampleComponent } from './examples/push-example/push-example.component';
import { OverlayExampleComponent } from './examples/overlay-example/overlay-example.component';
import { OpenedExampleComponent } from './examples/opened-example/opened-example.component';
import { WideExampleComponent } from './examples/wide-example/wide-example.component';
import { NarrowExampleComponent } from './examples/narrow-example/narrow-example.component';

const meta: Meta = {
	title: "Components/Navigation/Drawer",
	component: FktDrawerComponent,
    description: "The FktDrawer component provides a slide-out navigation panel that can either push content aside or overlay on top of it. Built with Angular signals and modern design patterns, it offers flexible positioning and smooth animations.",
	documentation,
    customDimensions: {
        height: "800px",
    },
    noPadding: true,
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

export const Push: Story<PushExampleComponent> = {
	description: "Drawer in push mode that displaces the main content when opened.",
	component: PushExampleComponent,
	args: {
		opened: false,
		mode: 'push',
		width: '250px'
	}
};

export const Overlay: Story<OverlayExampleComponent> = {
	description: "Drawer in overlay mode that floats over the content with backdrop.",
	component: OverlayExampleComponent,
	args: {
		opened: false,
		mode: 'overlay',
		width: '300px'
	}
};

export const Opened: Story<OpenedExampleComponent> = {
	description: "Drawer in opened state showing expanded navigation content.",
	component: OpenedExampleComponent,
	args: {
		opened: true,
		mode: 'push',
		width: '250px'
	}
};

export const Wide: Story<WideExampleComponent> = {
	description: "Drawer with wider width for more content and better readability.",
	component: WideExampleComponent,
	args: {
		opened: false,
		mode: 'push',
		width: '350px'
	}
};

export const Narrow: Story<NarrowExampleComponent> = {
	description: "Compact drawer with minimal width for icon-based navigation.",
	component: NarrowExampleComponent,
	args: {
		opened: false,
		mode: 'push',
		width: '60px'
	}
};

export default meta;
