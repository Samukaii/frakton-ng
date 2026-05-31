import fs from 'fs';
import path from 'path';
import { normalizePath } from '../../core/path-utils';
import { IndexerContext } from '../../pipeline/indexer-context';

export const discoverStoryFiles = (context: IndexerContext) => {
    const result = fs.readdirSync(context.config.general.storiesFolder, {
        withFileTypes: true,
        recursive: true,
    });

    return result
        .filter((story) => {
            return (
                story.isFile() &&
                (story.name.endsWith('.stories.ts') || story.name.endsWith('.docs.md'))
            );
        })
        .map((dirent) => normalizePath(path.resolve(`${dirent.parentPath}/${dirent.name}`)));
};
