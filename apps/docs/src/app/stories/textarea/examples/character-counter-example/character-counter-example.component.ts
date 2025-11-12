import { Component, computed, input, signal } from '@angular/core';
import { FktTextareaComponent } from 'frakton-ng/textarea';
import { Field, form, maxLength } from '@angular/forms/signals';

@Component({
	selector: 'textarea-character-counter-example',
	imports: [FktTextareaComponent, Field],
	templateUrl: './character-counter-example.component.html',
	styleUrl: './character-counter-example.component.scss'
})
export class CharacterCounterExampleComponent {
	maxLength = input(280);
	label = input('Tweet');
	placeholder = input("What's happening?");

	protected control = form(signal(''), path => {
		maxLength(path, this.maxLength())
	});

	protected warningThreshold = computed(() => Math.floor(this.maxLength() * 0.8));

	protected characterCount = computed(() => {
		const value = this.control().value();
		return value?.length || 0;
	});

	protected wordCount = computed(() => {
		const value = this.control().value();
		if (!value) return 0;
		const text = value.trim();
		return text ? text.split(/\s+/).length : 0;
	});

	protected lineCount = computed(() => {
		const value = this.control().value();
		if (!value) return 1;
		return value.split('\n').length;
	});

	protected remainingCharacters = computed(() => {
		const remaining = this.maxLength() - this.characterCount();
		return remaining >= 0 ? remaining : 0;
	});

	protected progressPercentage = computed(() => {
		const percentage = (this.characterCount() / this.maxLength()) * 100;
		return Math.min(percentage, 100);
	});
}
