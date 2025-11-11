import { FktIconComponent, fontIconNames } from 'frakton-ng/icon';
import { IconsGalleyComponent } from './gallery/icons-galley.component';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-icon.docs.md' with { loader: "text" };

const meta: Meta = {
	title: "Components/Data Display/Icon",
    description: "The FktIcon component provides a comprehensive icon system with a curated set of icons for various UI elements and interactions. Built with scalable vector graphics for crisp display at any size and seamless integration with the design system.",
	component: FktIconComponent,
	documentation,
	argTypes: {
		name: {
			control: 'select',
			category: "Attributes",
			type: 'FktIconName',
			options: fontIconNames,
			import: "import {FktIconName} from 'frakton-ng/icon'",
			required: true,
			description: 'The name of the icon to display'
		}
	}
}

export const BasicIcon: Story<FktIconComponent> = {
	description: "A basic icon with default size and color, inheriting from parent text color.",
	args: {
		name: 'home'
	}
};

export const LargeIcon: Story<FktIconComponent> = {
	description: "An icon with custom large size demonstrating size flexibility.",
	args: {
		name: 'star'
		// size: '2rem' // Note: size is controlled via CSS
	}
};

export const ColoredIcon: Story<FktIconComponent> = {
	description: "An icon with custom color showing color customization capabilities.",
	args: {
		name: 'heart'
		// color: '#e74c3c' // Note: color is controlled via CSS
	}
};

export const Gallery: Story<IconsGalleyComponent> = {
	component: IconsGalleyComponent,
	description: "Complete gallery of all available icons with search functionality to explore the icon library.",
	args: {}
};

export default meta;
