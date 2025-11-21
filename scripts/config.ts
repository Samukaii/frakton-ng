const libsFolder = 'libs/frakton-ng';
const documentationFolder = 'apps/docs/src/app';
const assetsFolder = 'apps/docs/public';
const storiesFolder = `${documentationFolder}/stories`;

export const SCRIPTS_CONFIG = {
    general: {
        baseUrl: "https://fraktonng.com/",
        assetsFolder,
        libsFolder,
        documentationFolder,
        storiesFolder
    },
	designTokens: {
		globalStyles: {
			styles: `${libsFolder}/assets/styles/styles.css`,
			themes: `${libsFolder}/assets/styles/themes/light.css`,
		}
	}
}
