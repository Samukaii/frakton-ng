import {
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    input,
    PLATFORM_ID,
    viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FktIconComponent } from 'frakton-ng/icon';
import { Prism } from '@/prism-languages/prism-js';

@Component({
    selector: 'app-code-output',
    imports: [FktIconComponent],
    templateUrl: './code-output.component.html',
    styleUrl: './code-output.component.scss',
})
export class CodeOutputComponent {
    title = input<string>();
    value = input.required<any>();

    private readonly codeAnchor = viewChild.required('codeAnchor', {
        read: ElementRef,
    });

    private readonly platform = inject(PLATFORM_ID);

    private stringifiedValue = computed(() => {
        const value = this.value();

        if (Array.isArray(value)) {
            let text = '[';

            if (value.length > 0) {
                text += value
                    .map((item) => {
                        if (typeof item === 'string') return `"${item}"`;

                        return JSON.stringify(item);
                    })
                    .join(', ');
            }

            text += ']';

            return text;
        }

        return JSON.stringify(value, null, 2);
    });

    protected readonly highlightCode = effect(() => {
        const anchor = this.codeAnchor();

        const grammar = Prism.languages['json'];

        const stringified = this.stringifiedValue();

        if (!isPlatformBrowser(this.platform)) {
            anchor.nativeElement.innerHTML = stringified;

            return;
        }

        anchor.nativeElement.innerHTML = Prism.highlight(
            stringified,
            grammar,
            'json'
        );
    });
}
