import { Component, computed, inject, resource, signal } from '@angular/core';
import { ExternalExample } from '@/models/external-example';
import { StoryInfoService } from '@/core/services/story-info.service';
import { toKebabCase } from '@/utils/to-kebab-case';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { CodeHighlightComponent } from '@/components/code-highlight/code-highlight.component';
import { generateEmulatedStoryExample } from '@/components/playground/utils/generate-emulated-story-example';
import { FktButtonComponent } from 'frakton-ng/button';
import { CallPipe } from 'frakton-ng/internal/pipes';
import { createClipboardCopy } from '@/utils/create-clipboard-copy';

type SourceCodeFile = ExternalExample['files'][number];
type SourceCodeLanguage = SourceCodeFile['language'];

const SOURCE_CODE_LANGUAGE_METADATA = {
    angular2html: {
        label: 'HTML',
        color: '#F4BF75',
    },
    typescript: {
        label: 'TS',
        color: '#0288d1',
    },
    css: {
        label: 'SCSS',
        color: '#F24D7C',
    },
} as const satisfies Record<SourceCodeLanguage, { label: string; color: string }>;

@Component({
    selector: 'app-story-source-code',
    imports: [
        CallPipe,
        CodeHighlightComponent,
        FktSpinnerComponent,
        FktButtonComponent,
        FktTooltipDirective,
    ],
    templateUrl: './story-source-code.component.html',
    styleUrl: './story-source-code.component.scss',
})
export class StorySourceCodeComponent {
    private readonly storyInfoService = inject(StoryInfoService);

    protected readonly currentTab = signal(0);
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

    protected readonly currentFile = computed(() => {
        const files = this.externalExample.value()?.files ?? [];
        return files.at(this.currentTab()) ?? null;
    });

    private readonly clipboardCopy = createClipboardCopy(async () => {
        return this.currentFile()?.content ?? '';
    });

    protected readonly copied = this.clipboardCopy.copied;
    protected readonly copy = this.clipboardCopy.copy;

    protected readonly getLanguageLabel = (file: SourceCodeFile) => {
        return SOURCE_CODE_LANGUAGE_METADATA[file.language].label;
    };

    protected readonly getLanguageColor = (file: SourceCodeFile, active: boolean) => {
        if (!active) return 'white';

        return SOURCE_CODE_LANGUAGE_METADATA[file.language].color;
    };

    protected setTab(index: number) {
        this.currentTab.set(index);
    }
}
