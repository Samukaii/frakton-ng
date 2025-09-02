import {
	AfterViewInit,
	booleanAttribute,
	ChangeDetectionStrategy,
	Component,
	effect,
	ElementRef,
	input,
	untracked,
	viewChild,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FktFieldErrorComponent } from '@frakton-ng/field-error';
import { SignalFormControl, SignalFormControlDirective } from '@frakton-ng/forms';
import { MarkUsed } from '@frakton-ng/internal/utils';

@Component({
	selector: 'fkt-textarea',
	imports: [
		ReactiveFormsModule,
		FktFieldErrorComponent,
		SignalFormControlDirective,
	],
	templateUrl: './fkt-textarea.component.html',
	styleUrl: './fkt-textarea.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[class.disabled]': 'control().disabled()'
	}
})
export class FktTextareaComponent implements AfterViewInit {
	control = input.required<SignalFormControl<any>>();
	label = input.required<string>();
	placeholder = input('');
	autoExpand = input(false, {transform: booleanAttribute});

	private element = viewChild.required('textarea', { read: ElementRef });

	@MarkUsed()
	protected autoExpandWhenValueChanges = effect(() => {
		this.control().value();

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
}
