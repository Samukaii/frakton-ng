import {
    Component,
    computed,
    inject,
    input,
    resource,
    signal,
} from '@angular/core';
import { CodeHighlightComponent } from '@/components/code-highlight/code-highlight.component';
import { StoryLoaderService } from '@/core/services/story-loader.service';
import { MarkdownWrapperComponent } from '@/components/markdown/markdown-wrapper.component';
import { PascalToHumanReadablePipe } from '@/pipes/pascal-to-human-readable.pipe';
import { PascalToKebabPipe } from '@/pipes/pascal-to-kebab.pipe';
import { FeatureComponent } from '@/pages/docs-page/features/feature/feature.component';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { injectStoryIndexer } from '@/utils/inject-story-indexer';

@Component({
    selector: 'app-features',
    imports: [
        CodeHighlightComponent,
        MarkdownWrapperComponent,
        PascalToHumanReadablePipe,
        PascalToKebabPipe,
        FeatureComponent,
        FktButtonLegacyComponent,
    ],
    templateUrl: './features.component.html',
    styleUrl: './features.component.scss',
})
export class FeaturesComponent {
    title = input.required<string>();
    description = input<string>();
    importStatement = input<string>();

    private loader = inject(StoryLoaderService);

    protected readonly storyIndexer = injectStoryIndexer();
    protected readonly copyLoading = signal(false);

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

    protected async copyMarkdown() {
        this.copyLoading.set(true);
        let text = `# ${this.title()}`;

        text += '\n\n' + this.description();

        const examples = await this.storyIndexer()?.externalExamples?.();

        this.storyIndexer()?.stories?.forEach(story => {

            text += '\n\n\n' + `${'#'.repeat(story.level)} ${story.name}`;

            text += '\n\n' + story.description

            const example = examples?.[story.componentName ?? `${story.name}Component`];

            const mappedLanguage = {
                angular2html: 'angular2html',
                css: 'css',
                typescript: 'ts',
            };

            if(example) {
                example.files.forEach(file => {
                    text += '\n\n' + `\`\`\`${mappedLanguage[file.language]}`;
                    text += '\n' + file.content;
                    text += '\n```';
                })

            }
        });

        await navigator.clipboard.writeText(text);
        this.copyLoading.set(false);
    }
}
