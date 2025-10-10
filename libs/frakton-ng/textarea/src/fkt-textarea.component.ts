import {
	AfterViewInit,
	booleanAttribute,
	ChangeDetectionStrategy,
	Component,
	effect,
	ElementRef,
	input,
	model, signal,
	untracked,
	viewChild,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';

@Component({
	selector: 'fkt-textarea',
	imports: [
		ReactiveFormsModule,

	],
	templateUrl: './fkt-textarea.component.html',
	styleUrl: './fkt-textarea.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[class.disabled]': 'disabled()'
	}
})
export class FktTextareaComponent implements AfterViewInit, FormValueControl<string | null> {
	value = model<string | null>("");
	touched = model(false);
	disabled = input(false);
	invalid = input(false);
	errors = input<readonly WithOptionalField<ValidationError>[]>([]);

	label = input.required<string>();
	noResize = input(false, {transform: booleanAttribute});
	placeholder = input('');
	autoExpand = input(false, {transform: booleanAttribute});
	spellcheck = input(true);

	private element = viewChild.required('textarea', { read: ElementRef });
	protected focused = signal(false);

	@MarkUsed()
	protected autoExpandWhenValueChanges = effect(() => {
		this.value();

		untracked(() => {
			this.autoExpandElement();
		})
	});

	ngAfterViewInit() {
		this.autoExpandElement()
	}

	focus() {
		const element = this.element()?.nativeElement as
			| HTMLTextAreaElement
			| undefined;

		element?.focus();
	}

	protected autoExpandElement() {
		if(!this.autoExpand()) return;

		const textarea = this.element().nativeElement as HTMLTextAreaElement;
		const VERTICAL_PADDING = 8;

		textarea.style.height = 'auto';
		textarea.style.height = textarea.scrollHeight + VERTICAL_PADDING + 'px';
	}

	protected onFocus() {
		this.focused.set(true);
	}

	protected onBlur() {
		this.touched.set(true);
		this.focused.set(false);
	}

	protected onChange($event: Event) {
		const target = $event.target as HTMLInputElement;

		this.value.set(target.value);
	}
}
