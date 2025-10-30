import 'zone.js';
import type { Preview } from '@storybook/angular';
import '../assets/styles/styles.css';
import '../assets/styles/themes/light.css';
import '../assets/styles/themes/dark.css';
import './theme/styles/storybook-theme.css';
import { FktCode } from './blocks/mdx/FktCode/FktCode';
import { DocsContainer } from './blocks/core/DocsContainer';
import { FktHeading } from './blocks/mdx/FktHeading/FktHeading';

const preview: Preview = {

	parameters: {
		controls: {matchers: {color: /(background|color)$/i, date: /Date$/i}},
		options: {
			storySort: {
				method: 'custom',
				order: ['Getting Started', '*'],
			}
		},
		docs: {
			container: DocsContainer,
			components: {
				code: FktCode,
				h1: FktHeading(1),
				h2: FktHeading(2),
				h3: FktHeading(3),
				h4: FktHeading(4),
				h5: FktHeading(5),
				h6: FktHeading(6),
			},
		},
	},
};
export default preview;
