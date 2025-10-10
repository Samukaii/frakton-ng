// .storybook/main.ts

import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
	framework: {name: '@storybook/angular', options: {}},
	stories: [
		'../**/*.mdx',
		'../**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-styling-webpack',
	],

	staticDirs: ['../assets', './theme', '.'],
	managerHead: head => `
	${head}
    <style>
      	/*div:has(> #storybook-panel-root) {*/
		/*	display: none !important;*/
		/*}*/

		/*section.sb-bar {*/
		/*	display: none !important;*/
		/*}*/

		/*#root > div {*/
		/*	grid-template: "sidebar content content" 1fr "sidebar content content" minmax(0px, 313px) / minmax(0px, 300px) minmax(100px, 1fr) minmax(0px, 400px) !important;*/
		/*}*/
    </style>
	`,
	previewHead: (head) => `
    ${head}
    <style>
      * { font-family: Frakton, serif; }
      .height-600 {
        [data-story-block="true"] {
          height: 600px;
          overflow-y: scroll;
          & > * { height: 100%; display: block; }
        }
      }

      body {
      	padding: 0 !important;
      }

      #storybook-root { height: 100vh; }
    </style>
  `,
	webpackFinal: async (config) => {
		config.module = config.module || {rules: []};

		// Mantém regras existentes, adiciona raw-loader
		config.module.rules = [
			...(config.module.rules ?? []),
			{
				test: /\.css$/i,
				sideEffects: true,
				resourceQuery: {not: [/ngResource/, /ngGlobalStyle/]},
				use: [
					require.resolve('style-loader'),
					{loader: require.resolve('css-loader'), options: {importLoaders: 1}},
					require.resolve('postcss-loader'),
				],
			},
			// Raw loader para arquivos .ts, .html, .scss, etc
			{
				resourceQuery: /raw/,
				type: 'asset/source'
			},
			// Markdown direto como string
			{
				test: /\.md$/,
				type: 'asset/source'
			}
		];

		return config;
	},
};

export default config;
