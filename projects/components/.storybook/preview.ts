import 'zone.js';
import type { Preview } from '@storybook/angular';
import '../src/lib/styles/tailwind.css';

const preview: Preview = {
	parameters: {
		controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
	},
};
export default preview;
