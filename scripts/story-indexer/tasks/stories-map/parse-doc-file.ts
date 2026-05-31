import fs from 'fs';
import path from 'path';
import { getStoryRelativePath } from '../../core/path-utils';
import { stripInlineMarkdown } from '../../core/string-utils';
import { IndexerContext } from '../../pipeline/indexer-context';
import { StoryIndexedInfo, StoryIndexedSection } from './stories-map.models';

export const getMarkdownTitles = (content: string) => {
    const headingRegex = /^(#{1,3})\s+(.*)$/gm;
    const headings: { level: number; text: string; slug: string }[] = [];
    let match;

    while ((match = headingRegex.exec(content))) {
        const level = match[1].length;
        const rawText = match[2];
        const text = stripInlineMarkdown(rawText);
        const slug = rawText
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-');

        headings.push({ level, text, slug });
    }

    return headings;
};

const getMarkdownInfo = (content: string) => {
    let matches = content.match(/<story-meta title="(.*)" loadType="(.*)"\/>/);

    if (!matches) matches = content.match(/<story-meta title="(.*)"\/>/);
    if (!matches) return null;

    return {
        title: matches[1],
        loadType: (matches[2] ?? 'lazy') as 'lazy' | 'eagerly',
    };
};

export const parseDocFile = (
    file: string,
    context: IndexerContext
): StoryIndexedInfo | null => {
    const relativePath = getStoryRelativePath(file, context.config.general.storiesFolder);
    const content = fs.readFileSync(file, 'utf8');
    const lastModified = fs.statSync(file).mtime;
    const folder = path.dirname(relativePath);
    const baseName = path.basename(relativePath);
    const { title, loadType } = getMarkdownInfo(content) ?? {};

    if (!title) return null;

    const sections = getMarkdownTitles(content);
    const id = `${folder}-${baseName.replace('.docs.md', '')}`;

    return {
        meta: {
            id,
            title,
            type: 'doc',
            lastModified,
            loadType: loadType ?? 'lazy',
            relativePath,
        },
        sections: sections.map((section): StoryIndexedSection => {
            return {
                name: section.text,
                id: section.slug,
                type: 'section',
                level: section.level,
                description: '',
            };
        }),
    };
};
