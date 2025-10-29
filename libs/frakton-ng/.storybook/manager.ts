import { addons } from 'storybook/manager-api';
import { dark, light } from './theme/panel';

const defaultTheme = localStorage.getItem('fkt-storybook-theme') === "dark" ? 'dark' : 'light';

addons.setConfig({
	theme: defaultTheme === 'dark' ? dark : light,
	toolbar: {
		title: { hidden: false },
		zoom: { hidden: false },
		eject: { hidden: false },
		copy: { hidden: false },
		fullscreen: { hidden: false },
	},
});

window.parent.document.body.setAttribute('data-fkt-theme', defaultTheme);
document.body.setAttribute('data-fkt-theme', defaultTheme);

document.addEventListener('theme-changed', (event: any) => {
	const saved = localStorage.getItem('fkt-storybook-theme');

	window.parent.document.body.setAttribute('data-fkt-theme', event.detail);

	if(event.detail === saved)
		return;

	localStorage.setItem('fkt-storybook-theme', event.detail);

	addons.setConfig({
		theme: event.detail === 'dark' ? dark : light,
	})
})
