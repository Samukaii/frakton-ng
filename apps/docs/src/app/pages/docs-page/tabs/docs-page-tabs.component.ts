import { Component, computed, input, output } from '@angular/core';
import { FktTabComponent, FktTabsListComponent } from 'frakton-ng/tabs';
import { FeaturesComponent } from '@/pages/docs-page/features/features.component';
import { MarkdownWrapperComponent } from '@/components/markdown/markdown-wrapper.component';
import { SkeletonComponent } from '@/components/skeleton/skeleton.component';
import { SkeletonContainerComponent } from '@/components/skeleton-container/skeleton-container.component';
import { StoryResolved } from '@/models/story.resolved';

@Component({
  selector: 'fkt-docs-page-tabs',
    imports: [
        FktTabsListComponent,
        FktTabComponent,
        FeaturesComponent,
        MarkdownWrapperComponent,
        SkeletonContainerComponent,
        SkeletonComponent,
    ],
  templateUrl: './docs-page-tabs.component.html',
  styleUrl: './docs-page-tabs.component.scss',
})
export class DocsPageTabsComponent {
    activeTab = input<string>();
    activeTabChange = output<string>();
    storyId = input.required<string>();
    currentStoryData = input.required<StoryResolved | null>();
    loading = input(false);
    docs = input<string>();


    protected readonly isStoryType = computed(() => {
        const data = this.currentStoryData();

        if (!data) return false;

        return data.meta.type === 'story';
    })

    title = computed(() => {
        const data = this.currentStoryData();

        const fullTitle = data?.meta?.title;

        return fullTitle?.split('/').at(-1) ?? ''
    })

    description = computed(() => {
        const data = this.currentStoryData();

        return data?.meta?.description ?? '';
    })

    importStatement = computed(() => {
        const data = this.currentStoryData();
        const componentName = data?.meta?.componentName;

        if (!componentName) return;

        return `import {${componentName}} from "frakton-ng/${this.storyId()}";`
    })

    onActiveTabChange($event: string) {

    }
}
