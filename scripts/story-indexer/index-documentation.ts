import { Listr } from 'listr2';
import { createIndexerContext, IndexerContext } from './pipeline/indexer-context';
import {
    runDesignTokensTask,
    DesignTokensTaskResult,
} from './tasks/design-tokens/run-design-tokens.task';
import {
    runRawExamplesTask,
    RawExamplesTaskResult,
} from './tasks/raw-examples/run-raw-examples.task';
import {
    runStoriesMapTask,
    StoriesMapTaskResult,
} from './tasks/stories-map/run-stories-map.task';
import { runSitemapTask } from './tasks/sitemap/run-sitemap.task';

interface DocumentationIndexerCliContext {
    indexerContext: IndexerContext;
    designTokens?: DesignTokensTaskResult;
    rawExamples?: RawExamplesTaskResult;
    storiesMap?: StoriesMapTaskResult;
    sitemap?: {
        urls: number;
        written: number;
    };
}

const pluralize = (count: number, singular: string, plural = `${singular}s`) => {
    return `${count} ${count === 1 ? singular : plural}`;
};

const tasks = new Listr<DocumentationIndexerCliContext>(
    [
        {
            title: 'Generate design tokens',
            task: (ctx, task) => {
                const result = runDesignTokensTask(ctx.indexerContext);
                ctx.designTokens = result;
                task.title = `Generate design tokens (${pluralize(result.components, 'component')}, ${pluralize(result.files, 'style file')}, ${pluralize(result.tokens, 'token')})`;
            },
        },
        {
            title: 'Generate raw examples',
            task: (ctx, task) => {
                const result = runRawExamplesTask(ctx.indexerContext);
                ctx.rawExamples = result;
                task.title = `Generate raw examples (${pluralize(result.folders, 'folder')}, ${pluralize(result.examples, 'example')}, ${pluralize(result.files, 'file')})`;
            },
        },
        {
            title: 'Generate stories map',
            task: (ctx, task) => {
                const result = runStoriesMapTask(ctx.indexerContext);
                ctx.storiesMap = result;
                task.title = `Generate stories map (${pluralize(result.entries, 'entry', 'entries')}, ${pluralize(result.sections, 'section')})`;
            },
        },
        {
            title: 'Generate sitemap',
            task: (ctx, task) => {
                const storyIndex = ctx.storiesMap?.storyIndex;

                if (!storyIndex) {
                    throw new Error('Story index was not generated.');
                }

                const result = runSitemapTask(ctx.indexerContext, storyIndex);
                ctx.sitemap = result;
                task.title = `Generate sitemap (${pluralize(result.urls, 'url')})`;
            },
        },
    ],
    {
        concurrent: false,
        rendererOptions: {
            collapseSubtasks: false,
        },
    }
);

tasks
    .run({
        indexerContext: createIndexerContext(),
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
