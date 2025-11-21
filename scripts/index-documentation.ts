import fs from 'fs';
import { generateDesignTokens } from './generate-design-tokens';
import { generateExternalExamples } from './generate-external-examples';
import { generateStoryIndexer } from './generate-story-indexer';
import { SCRIPTS_CONFIG } from './config';
import { fetchStoryFiles } from './fetch-story-files';
import { fetchStoryFolders } from './fetch-story-folders';
import { StoryFileScrapper } from './utils/story-file-scrapper';
import { generateSiteMap } from './generate-sitemap';


const storyFolders = fetchStoryFolders();

storyFolders.forEach(folder => {
    const directory = `${SCRIPTS_CONFIG.general.libsFolder}/${folder.name}/src`;

    if (!fs.existsSync(directory))
        return;

    generateDesignTokens({
        directory: `${SCRIPTS_CONFIG.general.libsFolder}/${folder.name}/src`,
        outputPath: `${SCRIPTS_CONFIG.general.storiesFolder}/${folder.name}/fkt-${folder.name}-design-tokens.json`
    });

    const externalExamplesFolder = `${folder.parentPath}/${folder.name}/examples`;

    const existsExamples = fs.existsSync(externalExamplesFolder);

    if (existsExamples) {
        generateExternalExamples({
            directory: externalExamplesFolder,
            outputPath: `${externalExamplesFolder}/raw-examples.ts`
        })
    }
})

const storyFiles = fetchStoryFiles();
const scrapper = new StoryFileScrapper(storyFiles);

generateStoryIndexer(scrapper, storyFiles);
generateSiteMap(scrapper);

