import {Component, signal} from '@angular/core';
import {wait} from 'frakton-ng/internal/utils';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'fkt-markdown-wrapper-copy-button',
    imports: [FktButtonComponent],
    templateUrl: './markdown-wrapper-copy-button.component.html',
    styleUrl: './markdown-wrapper-copy-button.component.scss',
})
export class MarkdownWrapperCopyButtonComponent {
    protected readonly copied = signal<boolean>(false);

    protected async copy() {
        this.copied.set(true);
        await wait(1000);
        this.copied.set(false);
    }
}
