import { Component, inject, input, resource, signal } from '@angular/core';
import { ExternalExample } from '@/models/external-example';
import { CodeHighlightComponent } from '../../code-highlight/code-highlight.component';
import { generateAutoSource } from './generate-auto-source';
import { StoryInfoService } from '@/core/services/story-info.service';
import { toKebabCase } from '@/utils/to-kebab-case';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
  selector: 'fkt-source-code',
	imports: [
		CodeHighlightComponent,
		FktButtonComponent
	],
  templateUrl: './source-code.component.html',
  styleUrl: './source-code.component.scss'
})
export class SourceCodeComponent {
	storyName = input.required<string>()

	private readonly storyInfoService = inject(StoryInfoService);

	protected readonly currentTab = signal(0);
	protected readonly copied = signal(false);

	protected readonly externalExample = resource({
		defaultValue: null,
		params: () => ({storyName: this.storyName()}),
		loader: async ({params}) => {
			const componentName = this.storyInfoService.getStory(params.storyName)?.story?.component?.name;

			if(!componentName) {
				const story = this.storyInfoService.getStory(params.storyName);

				if(!story) return null;

				const autoSource = generateAutoSource({
					meta: this.storyInfoService.storyData.meta,
					story: story,
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
					]
				} as ExternalExample
			}
			else {
				const examples = await this.storyInfoService.storyItem.externalExamples?.();

				return examples?.[componentName];
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
