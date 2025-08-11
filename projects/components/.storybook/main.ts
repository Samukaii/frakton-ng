import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
	framework: { name: '@storybook/angular', options: {} },
	stories: [
		'../src/**/*.mdx',
		'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-styling-webpack',
	],
	staticDirs: ['../src/lib/assets', '.'],
	previewHead: (head) => `
    ${head}
    <link rel="preload" href="assets/fonts/fintrax-icons/frakton-icons.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="assets/fonts/fintrax-icons/frakton-icons.woff" as="font" type="font/woff" crossorigin>
    <style>
      @font-face {
        font-family: 'FintraxIcons';
        src: url('assets/fonts/fintrax-icons/frakton-icons.woff2') format('woff2'),
             url('assets/fonts/fintrax-icons/frakton-icons.woff') format('woff'),
             url('assets/fonts/fintrax-icons/frakton-icons.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    </style>
  `,
	webpackFinal: async (cfg) => {
		cfg.module = cfg.module || { rules: [] };
		cfg.module.rules = [
			{
				test: /\.css$/i,
				sideEffects: true,
				resourceQuery: { not: [/ngResource/, /ngGlobalStyle/] },
				use: [
					require.resolve('style-loader'),
					{ loader: require.resolve('css-loader'), options: { importLoaders: 1 } },
					require.resolve('postcss-loader'),
				],
			},
			...(cfg.module.rules || []),
		];

		return cfg;
	},
};

export default config;
