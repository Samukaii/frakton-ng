import { runDesignTokensTask } from '../tasks/design-tokens/run-design-tokens.task';
import { runRawExamplesTask } from '../tasks/raw-examples/run-raw-examples.task';
import { runStoriesMapTask } from '../tasks/stories-map/run-stories-map.task';
import { runSitemapTask } from '../tasks/sitemap/run-sitemap.task';
import { IndexerContext } from './indexer-context';

export const runDocumentationIndexer = (context: IndexerContext) => {
    const designTokens = runDesignTokensTask(context);
    const rawExamples = runRawExamplesTask(context);
    const storiesMap = runStoriesMapTask(context);
    const sitemap = runSitemapTask(context, storiesMap.storyIndex);

    return {
        designTokens,
        rawExamples,
        storiesMap,
        sitemap,
    };
};
