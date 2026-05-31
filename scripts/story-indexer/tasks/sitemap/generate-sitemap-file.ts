import { IndexerContext } from '../../pipeline/indexer-context';
import { StoryIndex } from '../stories-map/stories-map.models';

export const generateSitemapFile = (
    context: IndexerContext,
    storyIndex: StoryIndex
) => {
    const stories = storyIndex.entries;
    const rootStoryLastModified =
        stories.find((entry) => entry.story.meta.id === 'getting-started-installation')
            ?.story.meta.lastModified ?? new Date();
    const changeFrequency = `<changefreq>weekly</changefreq>`;
    const lastModification = `<lastmod>${rootStoryLastModified.toISOString()}</lastmod>`;

    const sitemap = `\
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${context.config.general.baseUrl}</loc>
        <priority>1.0</priority>
        ${changeFrequency}
        ${lastModification}
    </url>`;

    const urls = stories
        .filter((entry) => entry.story.meta.id !== 'getting-started-installation')
        .map((entry) => `\
    <url>
        <loc>${context.config.general.baseUrl}docs/${entry.story.meta.id}</loc>
        <priority>0.9</priority>
        ${changeFrequency}
        <lastmod>${entry.story.meta.lastModified.toISOString()}</lastmod>
    </url>`);

    return `${sitemap}
${urls.join('\n')}
</urlset>`;
};
