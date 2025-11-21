import { Component, computed, effect, ElementRef, inject, input, PLATFORM_ID, viewChild } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'fkt-code-highlight',
  imports: [],
  templateUrl: './code-highlight.component.html',
  styleUrl: './code-highlight.component.scss'
})
export class CodeHighlightComponent {
	text = input.required<string>();
	language = input.required<'typescript' | 'html' | 'css' | 'json'>();

	codeAnchor = viewChild.required('codeAnchor', {read: ElementRef})

    private readonly platform = inject(PLATFORM_ID);

	protected readonly mappedLanguage = computed(() => {
		const languageMap = {
			typescript: 'ts',
			html: 'html',
			css: 'css',
			json: 'xml',
		}

		return languageMap[this.language()];
	})

	@MarkUsed()
	protected readonly highlightCode = effect(() => {
		const anchor = this.codeAnchor();
		const language = this.mappedLanguage();

		const grammar = Prism.languages[language];

        if(!isPlatformBrowser(this.platform)) {
            anchor.nativeElement.innerHTML = this.text();

            return;
        }

		anchor.nativeElement.innerHTML = Prism.highlight(this.text(), grammar, language);
	})
}
