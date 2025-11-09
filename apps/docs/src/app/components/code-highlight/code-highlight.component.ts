import { Component, computed, effect, ElementRef, input, viewChild } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import { MarkUsed } from 'frakton-ng/internal/utils';

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

		anchor.nativeElement.innerHTML = Prism.highlight(this.text(), grammar, language);
	})
}
