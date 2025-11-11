import { Component, inject, input, resource, signal } from '@angular/core';
import { ExternalExample } from '@/models/external-example';
import { CodeHighlightComponent } from '../../code-highlight/code-highlight.component';
import { generateAutoSource } from './generate-auto-source';
import { StoryInfoService } from '@/core/services/story-info.service';
import { toKebabCase } from '@/utils/to-kebab-case';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
  selector: 'fkt-source-code',
    imports: [
        CodeHighlightComponent,
        FktButtonComponent,
        FktSpinnerComponent,
        FktIconComponent
    ],
  templateUrl: './source-code.component.html',
  styleUrl: './source-code.component.scss'
})
export class SourceCodeComponent {
    expanded = input(true);
	storyName = input.required<string>()

	private readonly storyInfoService = inject(StoryInfoService);

	protected readonly currentTab = signal(0);
	protected readonly copied = signal(false);

	protected readonly externalExample = resource({
		defaultValue: null,
		params: () => ({storyName: this.storyName()}),
		loader: async ({params}) => {
            const externalExamples = await this.storyInfoService.getExternalExamples(params.storyName);

            if(externalExamples) return externalExamples;
            else {
                const story = this.storyInfoService.getStory(params.storyName);

                if(!story) return null;

                const autoSource = generateAutoSource({
                    meta: this.storyInfoService.storyData.meta,
                    story: story,
                    id: this.storyInfoService.storyItem.id,
                })

                return {
                    name: "FktTesteComponent",
                    files: [
                        {
                            name: `fkt-${toKebabCase(params.storyName)}.component.html`,
                            content: autoSource.html,
                            language: 'html'
                        },
                        {
                            name: `fkt-${toKebabCase(params.storyName)}.component.ts`,
                            content: autoSource.ts,
                            language: 'typescript'
                        },
                        {
                            name: `fkt-${toKebabCase(params.storyName)}.component.scss`,
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
