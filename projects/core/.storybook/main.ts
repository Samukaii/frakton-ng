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
	staticDirs: ['../assets', '.'],
	previewHead: (head) => `
    ${head}
    <style>
      * {
      	font-family: Frakton, serif;
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
			// Add raw loader for markdown files
			{
				test: /\.md$/,
				type: 'asset/source'
			},
			...(cfg.module.rules || []),
		];

		return cfg;
	},
};

export default config;
