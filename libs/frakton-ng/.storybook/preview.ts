import 'zone.js';
import type { Preview } from '@storybook/angular';
import '../assets/styles/styles.css';
import '../assets/styles/themes/light.css';

const preview: Preview = {
	parameters: {
		controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
	},

};
export default preview;
