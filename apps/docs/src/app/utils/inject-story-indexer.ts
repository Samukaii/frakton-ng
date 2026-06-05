import { injectRouteParams } from '@/utils/inject-route-params';
import { computed, inject } from '@angular/core';
import { STORIES_MAP } from '@/stories/stories-map';
import { generateEmulatedStoryExample } from '@/components/playground/utils/generate-emulated-story-example';
import { toKebabCase } from '@/utils/to-kebab-case';
import { ExternalExample } from '@/models/external-example';
import { StoryLoaderService } from '@/core/services/story-loader.service';

export const injectStoryIndexer = () => {
    const routeParams = injectRouteParams();
    const storyLoader = inject(StoryLoaderService);

    return computed(() => {
        const id = routeParams()['docId'];

        const story = STORIES_MAP.find((story) => story.id === id);

        if(!story) return null;

        return {
            ...story,
            externalExamples: async () => {
                const examples = await storyLoader.loadExternalExamples(story) ?? {};
                const file = await storyLoader.loadData(story);

                const examplesObject: Record<string, ExternalExample> = {};

                story.stories?.forEach(storySection => {
                    if(storySection.type === 'introduction') return;

                    const componentName = storySection.componentName ?? `${storySection.name}Component`

                    const example = examples[componentName];

                    if(example) {
                        examplesObject[componentName] = example;

                        return;
                    }

                    const runTimeStory = file.stories.find(
                        (storyResolved) => storyResolved.name === storySection.name
                    );

                    if(!runTimeStory) return;

                    const autoSource = generateEmulatedStoryExample({
                        meta: file.meta,
                        story: runTimeStory,
                        id: story.id,
                    });

                    examplesObject[componentName] = {
                        name: componentName,
                        files: [
                            {
                                name: `fkt-${toKebabCase(
                                    storySection.name
                                )}.component.html`,
                                content: autoSource.html,
                                language: 'angular-html',
                            },
                            {
                                name: `fkt-${toKebabCase(
                                    storySection.name
                                )}.component.ts`,
                                content: autoSource.ts,
                                language: 'typescript',
                            },
                            {
                                name: `fkt-${toKebabCase(
                                    storySection.name
                                )}.component.scss`,
                                content: autoSource.scss,
                                language: 'css',
                            },
                        ],
                    } as ExternalExample;
                });

                return examplesObject;
            }
        }
    });
};
