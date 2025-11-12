import { Component, computed, inject, Injector, input } from '@angular/core';
import { FktPlaygroundComponent } from '../playground/fkt-playground.component';
import { PascalToHumanReadablePipe } from '@/pipes/pascal-to-human-readable.pipe';
import { NgTemplateOutlet } from '@angular/common';
import { StoryLoaderService } from '@/core/services/story-loader.service';
import { STORY_INDEXER_TOKEN } from '@/tokens/story-indexer.token';
import { StoryInfoService } from '@/core/services/story-info.service';
import { StoryIndexer } from '@/models/story-indexer';
import { StoryResolved } from '@/models/story.resolved';
import { ACTIVE_STORY_TOKEN } from '@/tokens/active-story.token';
import { STORY_META_TOKEN } from '@/tokens/story-meta.token';
import { ALL_STORIES_TOKEN } from '@/tokens/all-stories.token';
import { pascalToKebab } from '@/utils/pascal-to-kebab';

@Component({
	selector: 'fkt-story-renderer',
    imports: [
        FktPlaygroundComponent,
        PascalToHumanReadablePipe,
        NgTemplateOutlet
    ],
	templateUrl: './story-renderer.component.html',
	styleUrl: './story-renderer.component.scss'
})
export class StoryRendererComponent {
    storyName = input.required<string>();
    indexer = input.required<StoryIndexer>()
    storyResolved = input.required<StoryResolved>()

    storyId = computed(() => {
        return pascalToKebab(this.storyName());
    })

    private readonly loader = inject(StoryLoaderService);

    protected readonly activeStory = computed(() => {
        const storyResolved = this.storyResolved();
        const storyName = this.storyName();

        return storyResolved.stories.find((story) => story.name === storyName);
    });

    protected readonly injector = computed(() => {
        const indexer = this.indexer();
        const resolved = this.storyResolved();
        const activeStory = this.activeStory();

        if(!activeStory || !indexer) return null;

        return Injector.create({
            providers: [
                {
                    provide: StoryLoaderService,
                    useValue: this.loader,
                },
                {
                    provide: STORY_INDEXER_TOKEN,
                    useValue: indexer,
                },
                {
                    provide: STORY_META_TOKEN,
                    useValue: resolved.meta,
                },
                {
                    provide: ALL_STORIES_TOKEN,
                    useValue: resolved.stories,
                },
                {
                    provide: ACTIVE_STORY_TOKEN,
                    useValue: activeStory
                },
                StoryInfoService
            ]
        })

    })
    protected readonly pascalToKebab = pascalToKebab;
}
