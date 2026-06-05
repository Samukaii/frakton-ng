import { Component, input } from '@angular/core';
import { MarkdownWrapperComponent } from '@/components/markdown/markdown-wrapper.component';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
    selector: 'app-api-reference',
    imports: [MarkdownWrapperComponent, FktButtonComponent],
    templateUrl: './api-reference.component.html',
    styleUrl: './api-reference.component.scss',
})
export class ApiReferenceComponent {
    title = input.required<string>();
    docs = input<string>();

    protected async copyMarkdown() {
        await navigator.clipboard.writeText(this.docs() ?? '');
    }
}
