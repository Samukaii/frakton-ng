export interface StoryIndexedMeta {
    id: string;
    componentName?: string;
    type: 'story' | 'doc';
    title: string;
    lastModified: Date;
    description?: string;
    loadType: 'lazy' | 'eagerly';
    relativePath: string;
}

export interface StoryIndexedSection {
    id: string;
    name: string;
    componentName?: string;
    description: string;
}

export interface StoryIndexedInfo {
    meta: StoryIndexedMeta,
    sections: StoryIndexedSection[]
}
