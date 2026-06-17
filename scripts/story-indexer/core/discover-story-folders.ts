import fs from 'fs';
import { IndexerContext } from '../pipeline/indexer-context';

export const discoverStoryFolders = (context: IndexerContext) => {
    return fs
        .readdirSync(context.config.general.storiesFolder, {
            withFileTypes: true,
        })
        .filter((story) => story.isDirectory());
};
