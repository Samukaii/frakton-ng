import { Component, inject, resource, signal } from '@angular/core';
import { ExternalExample } from '@/models/external-example';
import { StoryInfoService } from '@/core/services/story-info.service';
import { toKebabCase } from '@/utils/to-kebab-case';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { CodeHighlightComponent } from '@/components/code-highlight/code-highlight.component';
import { generateEmulatedStoryExample } from '@/components/playground/utils/generate-emulated-story-example';

@Component({
    selector: 'app-story-source-code',
    imports: [
        CodeHighlightComponent,
        FktSpinnerComponent,
        FktButtonLegacyComponent,
        FktTooltipDirective,
    ],
    templateUrl: './story-source-code.component.html',
    styleUrl: './story-source-code.component.scss',
})
export class StorySourceCodeComponent {
    private readonly storyInfoService = inject(StoryInfoService);

    protected readonly currentTab = signal(0);
    protected readonly copied = signal(false);
    protected readonly expanded = signal(false);

    protected readonly externalExample = resource({
        defaultValue: null,
        loader: async () => {
            if (this.storyInfoService.meta.type !== 'story') return null;

            const externalExamples =
                await this.storyInfoService.fetchExternalExamples();

            if (externalExamples) return externalExamples;

            else {
                const story = this.storyInfoService.activeStory;

                if (!story) return null;

                const autoSource = generateEmulatedStoryExample({
                    meta: this.storyInfoService.meta,
                    story,
                    id: this.storyInfoService.indexer.id,
                });

                return {
                    name: story.componentName,
                    files: [
                        {
                            name: `fkt-${toKebabCase(
                                story.name
                            )}.component.html`,
                            content: autoSource.html,
                            language: 'angular2html',
                        },
                        {
                            name: `fkt-${toKebabCase(story.name)}.component.ts`,
                            content: autoSource.ts,
                            language: 'typescript',
                        },
                        {
                            name: `fkt-${toKebabCase(
                                story.name
                            )}.component.scss`,
                            content: autoSource.scss,
                            language: 'css',
                        },
                    ],
                } as ExternalExample;
            }
        },
    });

    protected setTab(index: number) {
        this.currentTab.set(index);
    }

    protected copy() {
        const files = this.externalExample.value()?.files ?? [];
        const currentTabIndex = this.currentTab();

        const file = files.at(currentTabIndex);

        if (!file) return;

        navigator.clipboard.writeText(file.content).then(() => {
            this.copied.set(true);
            setTimeout(() => this.copied.set(false), 1500);
        });
    }
}
