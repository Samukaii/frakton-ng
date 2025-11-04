import { create } from 'storybook/theming';
import fullLogo from '../../assets/logo/full-logo.svg';

export const light = create({
	base: 'light',
	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',

	brandTitle: 'Frakton NG',
	brandUrl: 'https://samukaii.github.io/frakton-ng',
	brandImage: fullLogo,
	brandTarget: '_self',

	//
	colorPrimary: '#f1b54a',
	colorSecondary: 'rgb(239,180,74)',
	textMutedColor: 'gray',

	// UI
	appBg: '#f1f5f9',
	appContentBg: '#374151',
	appPreviewBg: '#e2e8f0',
	appBorderColor: '#b5b7bb',
	appBorderRadius: 8,

	// Text colors
	textColor: '#09192a',
	textInverseColor: '#c5c5c5',

	// Toolbar default and active colors
	barTextColor: '#09192a',
	barSelectedColor: '#c99438',
	barHoverColor: '#efb44a',
	barBg: '#f1f5f9',

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

