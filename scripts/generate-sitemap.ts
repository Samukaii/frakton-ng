import { StoryFileScrapper } from './utils/story-file-scrapper';
import fs from 'fs';
import { SCRIPTS_CONFIG } from './config';
import path from 'path';



export const generateSiteMap = (scrapper: StoryFileScrapper) => {
    const stories = scrapper.getAll();

    const rootStoryLastModified = stories.find(story => story.story.meta.id === 'getting-started-installation')?.story.meta.lastModified ?? new Date();

    const changeFrequency = `<changefreq>weekly</changefreq>`;
    const lastModification = `<lastmod>${rootStoryLastModified.toISOString()}</lastmod>`;

    const sitemap = `\
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://fraktonng.com/</loc>
        <priority>1.0</priority>
        ${changeFrequency}
        ${lastModification}
    </url>`

    const urls = stories.filter(story => story.story.meta.id !== 'getting-started-installation').map(story => `\
    <url>
        <loc>https://fraktonng.com/docs/${story.story.meta.id}</loc>
        <priority>0.9</priority>
        ${changeFrequency}
        <lastmod>${story.story.meta.lastModified.toISOString()}</lastmod>
    </url>`
    );

    let result = sitemap;

    urls.forEach((item) => {
        result += '\n' + item;
    });


    result += `\n</urlset>`;

    fs.writeFileSync(path.join(SCRIPTS_CONFIG.general.assetsFolder, 'sitemap.xml'), result);
}
