import { Component, input } from '@angular/core';
import { StoryExamplesComponent } from "@/custom-elements/story-playground/story-examples.component";
import { CodeHighlightComponent } from '@/components/code-highlight/code-highlight.component';

@Component({
    selector: 'fkt-features',
    imports: [
        StoryExamplesComponent,
        CodeHighlightComponent
    ],
    templateUrl: './features.component.html',
    styleUrl: './features.component.scss',
})
export class FeaturesComponent {
    title = input.required<string>();
    description = input<string>();
    importStatement = input("");
}
