import type { Meta, StoryObj } from '@storybook/angular';
import { IconsGalleyComponent } from './galley/icons-galley.component';
import { FktIconComponent } from './fkt-icon.component';

const meta: Meta = {
	title: 'Components/Icon',
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
