import path from 'path';
import { writeTextFile } from '../../core/file-system';
import { IndexerContext } from '../../pipeline/indexer-context';
import { StoryIndex } from '../stories-map/stories-map.models';
import { generateSitemapFile } from './generate-sitemap-file';

export const runSitemapTask = (context: IndexerContext, storyIndex: StoryIndex) => {
    const content = generateSitemapFile(context, storyIndex);
    const outputPath = path.join(context.config.general.assetsFolder, 'sitemap.xml');

    writeTextFile(outputPath, content);

    return {
        urls: storyIndex.entries.length,
        written: 1,
    };
};
