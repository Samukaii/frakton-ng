import {
    booleanAttribute,
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    input,
    PLATFORM_ID,
    viewChild
} from '@angular/core';

import { MarkUsed } from 'frakton-ng/internal/utils';
import { isPlatformBrowser } from '@angular/common';
import { Prism } from '@/prism-languages/prism-js';

@Component({
    selector: 'app-code-highlight',
    imports: [],
    templateUrl: './code-highlight.component.html',
    styleUrl: './code-highlight.component.scss',
})
export class CodeHighlightComponent {
    text = input.required<string>();
    noBorderRadius = input(false, {
        transform: booleanAttribute,
    });

    language = input.required<
        'typescript' | 'html' | 'css' | 'json' | 'angular2html'
    >();

    codeAnchor = viewChild.required('codeAnchor', { read: ElementRef });

    private readonly platform = inject(PLATFORM_ID);

    protected readonly mappedLanguage = computed(() => {
        const languageMap = {
            typescript: 'ts',
            html: 'html',
            'angular2html': 'angular2html',
            css: 'css',
            json: 'json',
        };

        return languageMap[this.language()];
    });

    @MarkUsed()
    protected readonly highlightCode = effect(() => {
        const anchor = this.codeAnchor();
        const language = this.mappedLanguage();

        const grammar = Prism.languages[language] ?? Prism.languages['javascript'];

        if (!isPlatformBrowser(this.platform)) {
            anchor.nativeElement.innerHTML = this.text();

            return;
        }

        anchor.nativeElement.innerHTML = Prism.highlight(
            this.text(),
            grammar,
            language
        );
    });
}
