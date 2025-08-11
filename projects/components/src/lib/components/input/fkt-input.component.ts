import {
	ChangeDetectionStrategy,
	Component,
	computed,
	contentChild,
	ElementRef,
	input,
	signal,
	viewChild,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldErrorComponent } from '../field-error/field-error.component';
import { SignalFormControl, } from '../../form/signal-form-control';
import { FormControlSuffixDirective, SignalFormControlDirective } from '../../directives';
import { currencyTransformer, hourTransformer, percentTransformer } from '../../utils';
import { NgTemplateOutlet } from '@angular/common';
import { FktIconComponent } from '../icon';
import { FktInputTransformer, FktInputType } from './fkt-input.types';

@Component({
	selector: 'fkt-input',
	imports: [
		ReactiveFormsModule,
		FieldErrorComponent,
		FktIconComponent,
		SignalFormControlDirective,
		NgTemplateOutlet,
	],
	templateUrl: './fkt-input.component.html',
	styleUrl: './fkt-input.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FktInputComponent {
	control = input.required<SignalFormControl<any>>();
	label = input('');
	placeholder = input('');
	type = input<FktInputType>('text');
	transformer = input<FktInputTransformer>();
	spellcheck = input(true);

	protected suffix = contentChild(FormControlSuffixDirective);

	protected showPassword = signal(false);

	protected inputType = computed(() => {
		const type = this.type();
		const showPassword = this.showPassword();

		if (type !== 'password') return type;

		return showPassword ? 'text' : 'password';
	});

	protected transformerValue = computed(() => {
		const transformer = this.transformer();

		if (transformer === 'currency') return currencyTransformer;

		if (transformer === 'percent') return percentTransformer;

		if (transformer === 'hour') return hourTransformer;

		return transformer;
	});

	public element = viewChild('input', {read: ElementRef});
}
