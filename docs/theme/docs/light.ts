import { create } from 'storybook/theming';
import fullLogo from '../../assets/logo/full-logo-dark.svg';

export const light = create({
	base: 'light',
	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',

	brandTitle: 'Frakton NG',
	brandUrl: 'https://example.com',
	brandImage: fullLogo,
	brandTarget: '_self',

	//
	colorPrimary: '#f1b54a',
	colorSecondary: 'rgb(239,180,74)',
	textMutedColor: 'red',

	// UI
	appBg: '#F3F4F6FF',
	appContentBg: '#e2e8f0',
	appPreviewBg: '#ffffff',
	appBorderColor: '#D1D5DBFF',
	appBorderRadius: 8,

	// Text colors
	textColor: '#09192a',
	textInverseColor: '#c5c5c5',

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
