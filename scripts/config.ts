const libFolder = 'libs/frakton-ng';
const documentationFolder = 'apps/docs/src/app';
const storiesFolder = `${documentationFolder}/stories`;

export const SCRIPTS_CONFIG = {
    general: {
        libsFolder: libFolder,
        documentationFolder,
        storiesFolder
    },
	designTokens: {
		globalStyles: {
			styles: `${libFolder}/assets/styles/styles.css`,
			themes: `${libFolder}/assets/styles/themes/light.css`,
		}
	}
}
