import { create } from 'storybook/theming';

export const dark = create({
	base: 'dark',
	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',

	brandTitle: 'Frakton NG',
	brandUrl: 'https://samukaii.github.io/frakton-ng',
	brandTarget: '_self',

	//
	colorPrimary: '#f1b54a',
	colorSecondary: 'rgb(239,180,74)',

	// UI
	appBg: '#111827',
	appContentBg: '#1f2329',
	appPreviewBg: '#1f2329',
	appBorderColor: '#4B5563FF',
	appBorderRadius: 8,

	// Text colors
	textColor: '#c5c5c5',
	textInverseColor: '#09192a',

	// Toolbar default and active colors
	barTextColor: '#d5d5d5',
	barSelectedColor: '#c99438',
	barHoverColor: '#efb44a',
	barBg: '#374151',

	// Form colors
	inputBg: 'rgba(255,255,255,0)',
	inputBorder: '#8f8f8f',
	inputTextColor: '#ffffff',
	inputBorderRadius: 8,
	buttonBg: '#181e31',
	booleanBg: "#2a313d",
	buttonBorder: "none",
	booleanSelectedBg: "#3f556e"
});
