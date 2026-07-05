import { Component, signal } from '@angular/core';
import {FktButtonLegacyComponent} from 'frakton-ng/button-legacy';

@Component({
  selector: 'fkt-markdown-wrapper-copy-button',
    imports: [
        FktButtonLegacyComponent
    ],
  templateUrl: './markdown-wrapper-copy-button.component.html',
  styleUrl: './markdown-wrapper-copy-button.component.scss',
})
export class MarkdownWrapperCopyButtonComponent {
    protected readonly copied = signal<boolean>(false);

    protected copy() {
        this.copied.set(true);

        setTimeout(() => {
            this.copied.set(false);
        }, 1000)
    }
}
