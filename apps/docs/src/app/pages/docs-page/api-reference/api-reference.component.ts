import { Component, input } from '@angular/core';
import { MarkdownWrapperComponent } from '@/components/markdown/markdown-wrapper.component';
import { FktButtonComponent } from 'frakton-ng/button';
import { createClipboardCopy } from '@/utils/create-clipboard-copy';

@Component({
    selector: 'app-api-reference',
    imports: [MarkdownWrapperComponent, FktButtonComponent],
    templateUrl: './api-reference.component.html',
    styleUrl: './api-reference.component.scss',
})
export class ApiReferenceComponent {
    title = input.required<string>();
    docs = input<string>();

    protected readonly clipboard = createClipboardCopy(
        async () => this.docs() ?? ''
    );
}
