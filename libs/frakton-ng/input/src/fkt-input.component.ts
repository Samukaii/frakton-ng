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
import { FktFieldErrorComponent } from 'frakton-ng/field-error';
import {
	currencyTransformer,
	FormControlSuffixDirective,
	hourTransformer,
	percentTransformer,
	SignalFormControl,
	SignalFormControlDirective
} from 'frakton-ng/forms';
import { NgTemplateOutlet } from '@angular/common';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktInputTransformer, FktInputType } from './fkt-input.types';

@Component({
	selector: 'fkt-input',
	imports: [
		ReactiveFormsModule,
		FktFieldErrorComponent,
		SignalFormControlDirective,
		NgTemplateOutlet,
		FktButtonComponent,
	],
	templateUrl: './fkt-input.component.html',
	styleUrl: './fkt-input.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FktInputComponent {
	control = input.required<SignalFormControl<any>>();
	label = input('');
	placeholder = input('');
	inputPadding = input('.5rem 1rem');
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
