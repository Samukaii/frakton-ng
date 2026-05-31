import path from 'path';
import { writeTextFile } from '../../core/file-system';
import { IndexerContext } from '../../pipeline/indexer-context';
import { createStoryIndex } from './create-story-index';
import { discoverStoryFiles } from './discover-story-files';
import { generateStoriesMapFile } from './generate-stories-map-file';
import { parseDocFile } from './parse-doc-file';
import { StoryFileParser } from './parse-story-file';
import { StoryIndexEntry } from './stories-map.models';

export interface StoriesMapTaskResult {
    storyIndex: ReturnType<typeof createStoryIndex>;
    files: number;
    docs: number;
    stories: number;
    entries: number;
    sections: number;
    written: number;
}

export const runStoriesMapTask = (context: IndexerContext) => {
    const files = discoverStoryFiles(context);
    const markdownFiles = files.filter((file) => file.endsWith('.md'));
    const storyFiles = files.filter((file) => file.endsWith('.ts'));
    const docEntries: StoryIndexEntry[] = files
        .filter((file) => file.endsWith('.md'))
        .flatMap((file) => {
            const story = parseDocFile(file, context);
            return story ? [{ path: file, story }] : [];
        });
    const storyEntries = new StoryFileParser(
        context,
        storyFiles
    ).parseAll();
    const storyIndex = createStoryIndex([...docEntries, ...storyEntries]);
    const content = generateStoriesMapFile(context, storyIndex, files);
    const outputPath = path.resolve(
        context.config.general.documentationFolder,
        'stories/stories-map.ts'
    );

    writeTextFile(outputPath, content);

    return {
        storyIndex,
        files: files.length,
        docs: markdownFiles.length,
        stories: storyFiles.length,
        entries: storyIndex.entries.length,
        sections: storyIndex.entries.reduce(
            (total, entry) => total + entry.story.sections.length,
            0
        ),
        written: 1,
    };
};
