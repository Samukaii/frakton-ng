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
		'@storybook/addon-themes'
	],

	staticDirs: ['../assets', './theme', '.'],
	managerHead: head => `
	${head}
    <style>
		@font-face {
			font-family: 'Frakton Icons';
			src: url(./assets/fonts/frakton-icons/frakton-icons.woff2') format('woff2'),
			url('./assets/fonts/frakton-icons/frakton-icons.woff') format('woff'),
			url('./assets/fonts/frakton-icons/frakton-icons.ttf') format('truetype');
			font-weight: normal;
			font-style: normal;
			font-display: swap;
		}

		:root {
			--fkt-storybook-text-color: black;
			--fkt-storybook-shadow: rgb(179 187 199) 0px 4px 21px 1px;

			--fkt-storybook-sidebar-icon-border-color: rgba(0,0,0,0.2);
			--fkt-storybook-sidebar-hover-color: rgba(239,180,74,0.3);
			--fkt-storybook-sidebar-background-color: #efb44a;

			--fkt-storybook-sidebar-story-icon-color: #efb44a;
			--fkt-storybook-sidebar-document-icon-color: #bd1313;
			--fkt-storybook-sidebar-component-icon-color: #2b14ca;
			--fkt-storybook-sidebar-group-icon-color: #2b14ca;
		}

		[data-fkt-theme="dark"] {
			--fkt-storybook-text-color: white;
			--fkt-storybook-shadow: rgb(24, 27, 32) 0px 4px 21px 1px;

			--fkt-storybook-sidebar-icon-border-color: rgba(255,255,255,0.2);
			--fkt-storybook-sidebar-hover-color: rgba(239,180,74,0.3);
			--fkt-storybook-sidebar-background-color: #efb44a;

			--fkt-storybook-sidebar-story-icon-color: #efb44a;
			--fkt-storybook-sidebar-document-icon-color: #fb6262;
			--fkt-storybook-sidebar-component-icon-color: #8a7aff;
			--fkt-storybook-sidebar-group-icon-color: #8a7aff;
		}

      	div:has(> #storybook-panel-root) {
			display: none !important;
		}

		#root > div {
			grid-template: "sidebar content content" 1fr "sidebar content content" minmax(0px, 313px) / minmax(0px, 300px) minmax(100px, 1fr) minmax(0px, 400px) !important;

			.sidebar-container {
				z-index: 4;
				box-shadow: var(--fkt-storybook-shadow);
				transition: .3s ease;

				.sidebar-item {
					&:hover {
						background-color: var(--fkt-storybook-sidebar-hover-color);
					}

					&[data-selected="true"] {
						background-color: var(--fkt-storybook-sidebar-background-color);

						&[data-nodetype="group"] button > div::after,
						&[data-nodetype="component"] button > div::after,
						 &[data-nodetype="story"] a > div::after,
						 &[data-nodetype="document"] a > div::after {
							color: white;
							border-color: #fff6;
						}
					}
				}
			}
		}

		main .sb-bar {
			display: none;
		}

		[data-nodetype="root"] {
			color: var(--fkt-storybook-text-color) !important;
		}

		[data-nodetype="group"] {
			svg[type] {
				display: none;
			}

			button > div::after {
				content: '';
				font-family: "Frakton Icons", serif;
				width: 18px;
				height: 18px;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 1rem;
				color: var(--fkt-storybook-sidebar-group-icon-color);
				font-weight: normal;
			}
		}

		[data-nodetype="component"] {
			svg[type] {
				display: none;
			}

			button > div::after {
				content: '';
				font-family: "Frakton Icons", serif;
				width: 18px;
				height: 18px;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 1rem;
				color: var(--fkt-storybook-sidebar-component-icon-color);
				font-weight: normal;
			}
		}

		[data-nodetype="story"] {
			svg[type] {
				display: none;
			}

			a > div::after {
				content: '';
				font-family: "Frakton Icons", serif;
				width: 18px;
				height: 18px;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 1rem;
				color: var(--fkt-storybook-sidebar-story-icon-color);
				font-weight: normal;
			}
		}

		[data-nodetype="document"] {
			svg[type] {
				display: none;
			}

			a > div::after {
				content: '';
				font-family: "Frakton Icons", serif;
				width: 18px;
				height: 18px;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 1rem;
				color: var(--fkt-storybook-sidebar-document-icon-color);
				font-weight: normal;
			}
		}

		#getting-started-installation--docs {
			display: flex;
			align-items: center !important;

			div::after {
				content: "";

				color: var(--fkt-storybook-text-color);
				border: solid 1px var(--fkt-storybook-sidebar-icon-border-color);
				border-radius: 3px;
				padding: .2rem;
			}
		}

		#getting-started-migration-guides--docs {
			display: flex;
			align-items: center !important;

			div::after {
				content: "";

				color: var(--fkt-storybook-text-color);
				border: solid 1px var(--fkt-storybook-sidebar-icon-border-color);
				border-radius: 3px;
				padding: .2rem;
			}
		}

		#getting-started-theming-styling--docs {
			display: flex;
			align-items: center !important;

			div::after {
				content: "";

				color: var(--fkt-storybook-text-color);
				border: solid 1px var(--fkt-storybook-sidebar-icon-border-color);
				border-radius: 3px;
				padding: .2rem;
			}
		}

		.search-field, .sidebar-header {
			& > div:has(button) {
				display: none;
			}
		}

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
