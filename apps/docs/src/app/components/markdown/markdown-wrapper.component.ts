import { Component, input } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { MarkdownWrapperCopyButtonComponent } from '@/components/markdown/copy-button/markdown-wrapper-copy-button.component';
import '../../prism-languages/prism-js'

@Component({
    selector: 'fkt-markdown',
    imports: [MarkdownComponent],
    templateUrl: './markdown-wrapper.component.html',
    styleUrl: './markdown-wrapper.component.scss',
})
export class MarkdownWrapperComponent {
    data = input.required<string>();

    protected readonly copyButtonComponent = MarkdownWrapperCopyButtonComponent;
}
