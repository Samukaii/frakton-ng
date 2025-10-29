import type { Meta, StoryObj } from '@storybook/angular';
import { IconsGalleyComponent } from './gallery/icons-galley.component';
import { FktIconComponent } from 'frakton-ng/icon';

const meta: Meta = {
	title: 'Components/Data display/Icon',
	component: IconsGalleyComponent,
	decorators: [
		() => ({
			moduleMetadata: {
				imports: [FktIconComponent],
			},
		}),
	],
};
export default meta;

type Story = StoryObj<IconsGalleyComponent>;

export const Gallery: Story = {
};
