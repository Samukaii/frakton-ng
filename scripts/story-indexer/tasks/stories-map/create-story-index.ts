import { StoryIndex, StoryIndexEntry } from './stories-map.models';

export const createStoryIndex = (entries: StoryIndexEntry[]): StoryIndex => {
    const indexedMap = new Map(
        entries.map((entry) => [entry.path, entry.story] as const)
    );

    return {
        entries,
        getOne(path: string) {
            return indexedMap.get(path) ?? null;
        },
    };
};
