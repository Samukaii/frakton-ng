import 'zone.js';
import type { Preview } from '@storybook/angular';
import '../assets/styles/styles.css';
import '../assets/styles/themes/light.css';
import './theme/storybook-theme.css';
import { SourceCode } from './blocks/SourceCode';

const preview: Preview = {
	parameters: {
		controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
		docs: {
			components: {
				code: SourceCode,
			},
		}
	},

};
export default preview;
