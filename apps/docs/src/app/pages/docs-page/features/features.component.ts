import { Component, computed, inject, input, resource } from '@angular/core';
import { CodeHighlightComponent } from '@/components/code-highlight/code-highlight.component';
import { StoryLoaderService } from '@/core/services/story-loader.service';
import { injectRouteParams } from '@/utils/inject-route-params';
import { STORIES_MAP } from '@/stories/stories-map';
import { MarkdownWrapperComponent } from '@/components/markdown/markdown-wrapper.component';
import { PascalToHumanReadablePipe } from '@/pipes/pascal-to-human-readable.pipe';
import { PascalToKebabPipe } from '@/pipes/pascal-to-kebab.pipe';
import { FeatureComponent } from '@/pages/docs-page/features/feature/feature.component';

@Component({
    selector: 'app-features',
    imports: [
        CodeHighlightComponent,
        MarkdownWrapperComponent,
        PascalToHumanReadablePipe,
        PascalToKebabPipe,
        FeatureComponent,
    ],
    templateUrl: './features.component.html',
    styleUrl: './features.component.scss',
})
export class FeaturesComponent {
    title = input.required<string>();
    description = input<string>();
    importStatement = input<string>();

    private loader = inject(StoryLoaderService);

    private readonly routeParams = injectRouteParams();

    protected readonly storyIndexer = computed(() => {
        const id = this.routeParams()['docId'];

        const story = STORIES_MAP.find((story) => story.id === id);

        return story ?? null;
    });

    protected readonly storyResolved = resource({
        defaultValue: null,
        params: this.storyIndexer,
        loader: async ({ params: story }) => {
            if (!story) return null;

            return (await this.loader.loadData(story)) ?? null;
        },
    });

    protected readonly stories = computed(() => {
        return this.storyResolved.value()?.stories ?? [];
    });
}
