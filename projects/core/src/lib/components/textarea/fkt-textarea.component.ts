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
import { FieldErrorComponent } from '../field-error/field-error.component';
import { SignalFormControl } from '../../form/signal-form-control';
import { SignalFormControlDirective } from '../../directives';
import { MarkUsed } from '../../utils/mark-used';

@Component({
	selector: 'fkt-textarea',
	imports: [
		ReactiveFormsModule,
		FieldErrorComponent,
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
