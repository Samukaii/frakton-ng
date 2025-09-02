import 'zone.js';
import type { Preview } from '@storybook/angular';
import '../libs/assets/styles/styles.css';
import '../libs/assets/styles/themes/light.css';

const preview: Preview = {
	parameters: {
		controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
	},

};
export default preview;
