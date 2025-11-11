import { Component, input, signal } from '@angular/core';
import { MarkdownComponent } from "ngx-markdown";
import { FktButtonComponent } from 'frakton-ng/button';
import {
    MarkdownWrapperCopyButtonComponent
} from '@/components/markdown/copy-button/markdown-wrapper-copy-button.component';


@Component({
	selector: 'fkt-markdown',
	imports: [
		FktButtonComponent,
		MarkdownComponent
	],
	templateUrl: './markdown-wrapper.component.html',
	styleUrl: './markdown-wrapper.component.scss'
})
export class MarkdownWrapperComponent {
	data = input.required<string>();

	protected readonly copied = signal<boolean>(false);
    protected readonly copyButtonComponent = MarkdownWrapperCopyButtonComponent;

	protected copy() {
		this.copied.set(true);

		setTimeout(() => {
			this.copied.set(false);
		}, 1000)
	}
}
