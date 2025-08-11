import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	input,
	viewChild,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldErrorComponent } from '../field-error/field-error.component';
import { SignalFormControl } from '../../form/signal-form-control';
import { SignalFormControlDirective } from '../../directives';

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
})
export class FktTextareaComponent {
	control = input.required<SignalFormControl<any>>();
	label = input('');
	placeholder = input('');

	private element = viewChild('textarea', { read: ElementRef });

	focus() {
		const element = this.element()?.nativeElement as
			| HTMLTextAreaElement
			| undefined;

		element?.focus();
	}
}
