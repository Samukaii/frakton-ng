import { Component, inject, input, resource, signal } from '@angular/core';
import { ExternalExample } from '@/models/external-example';
import { CodeHighlightComponent } from '../../code-highlight/code-highlight.component';
import { generateAutoSource } from './generate-auto-source';
import { StoryInfoService } from '@/core/services/story-info.service';
import { toKebabCase } from '@/utils/to-kebab-case';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
  selector: 'fkt-source-code',
    imports: [
        CodeHighlightComponent,
        FktSpinnerComponent,
        FktIconComponent
    ],
  templateUrl: './source-code.component.html',
  styleUrl: './source-code.component.scss'
})
export class SourceCodeComponent {
    expanded = input(true);

	private readonly storyInfoService = inject(StoryInfoService);

	protected readonly currentTab = signal(0);
	protected readonly copied = signal(false);

	protected readonly externalExample = resource({
		defaultValue: null,
		loader: async () => {
            const externalExamples = await this.storyInfoService.fetchExternalExamples();

            if(externalExamples) return externalExamples;
            else {
                const story = this.storyInfoService.activeStory;

                if(!story) return null;

                const autoSource = generateAutoSource({
                    meta: this.storyInfoService.meta,
                    story,
                    id: this.storyInfoService.indexer.id,
                })

                return {
                    name: "FktTesteComponent",
                    files: [
                        {
                            name: `fkt-${toKebabCase(story.name)}.component.html`,
                            content: autoSource.html,
                            language: 'html'
                        },
                        {
                            name: `fkt-${toKebabCase(story.name)}.component.ts`,
                            content: autoSource.ts,
                            language: 'typescript'
                        },
                        {
                            name: `fkt-${toKebabCase(story.name)}.component.scss`,
                            content: '/* No styles needed for this example */',
                            language: 'css'
                        },
                    ]
                } as ExternalExample
            }
		}
	})

	protected setTab(index: number) {
		this.currentTab.set(index);
	}

	protected copy(content: string) {
		navigator.clipboard.writeText(content).then(() => {
			this.copied.set(true);
			setTimeout(() => this.copied.set(false), 1500);
		});
	}
}
