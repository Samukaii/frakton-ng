import {
	booleanAttribute,
	ChangeDetectionStrategy,
	Component,
	computed,
	contentChild,
	ElementRef,
	input,
	model,
	output,
	signal,
	viewChild,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktInputTransformer, FktInputType, fktInputTypes } from './fkt-input.types';
import { FormValueControl, ValidationError, WithOptionalField, } from '@angular/forms/signals';
import { FktIconComponent } from 'frakton-ng/icon';
import {
	currencyFormatter,
	FktControlFormatterDirective,
	FormControlSuffixDirective,
	hourFormatter,
	numberFormatter,
	percentFormatter
} from 'frakton-ng/forms';


@Component({
	selector: 'fkt-input',
	imports: [
		ReactiveFormsModule,
		NgTemplateOutlet,
		FktButtonComponent,
		FormsModule,
		FktControlFormatterDirective,
		FktIconComponent,
	],
	templateUrl: './fkt-input.component.html',
	styleUrl: './fkt-input.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FktInputComponent<T = string> implements FormValueControl<T | null> {
	value = model<T | null>(null);
	touched = model(false);
	disabled = input(false);
	invalid = input(false);
	errors = input<readonly WithOptionalField<ValidationError>[]>([]);

	label = input.required<string>();
	ariaDescribedby = input<string>();
	placeholder = input('');

	hideLabel = input(false, {
		transform: booleanAttribute
	});
	hideNumericControl = input(false, {
		transform: booleanAttribute
	});

	min = input<number>();
	max = input<number>();
	maxDecimals = input(0);
	step = input(1);

	inputPadding = input('var(--fkt-input-vertical-padding, var(--space-md)) var(--fkt-input-horizontal-padding, var(--space-md))');
	type = input<FktInputType, FktInputType>('text', {
		transform: (value: FktInputType) => {
			if (fktInputTypes.includes(value)) return value;

			return "text";
		}
	});
	formatter = input<FktInputTransformer<T>>();
	spellcheck = input(true);
	inputKeyDown = output<KeyboardEvent>();

	public element = viewChild.required('input', {read: ElementRef});
	protected formatterDirective = viewChild('input', {read: FktControlFormatterDirective});
	public formattedValue = computed(() => this.formatterDirective()?.formattedValue() ?? '')

	protected suffix = contentChild(FormControlSuffixDirective);

	protected showPassword = signal(false);
	protected focused = signal(false);

	protected inputType = computed(() => {
		const type = this.type();
		const showPassword = this.showPassword();

		if (type !== 'password') return type;

		return showPassword ? 'text' : 'password';
	});

	protected formatterFn = computed(() => {
		const transformer = this.formatter();
		const type = this.type();

		if (typeof transformer !== 'string' && typeof transformer !== "undefined") return transformer;

		if (transformer === 'currency') return currencyFormatter;

		if (transformer === 'percent') return percentFormatter;

		if (transformer === 'hour') return hourFormatter;
		if (type === 'number') return numberFormatter({
			min: this.min(),
			max: this.max(),
			maxDecimals: this.maxDecimals()
		});

		return transformer;
	});

	protected onFocus() {
		this.focused.set(true);
	}

	protected onBlur() {
		this.focused.set(false);
		this.touched.set(true)
	}

	protected onKeyDown(event: KeyboardEvent) {
		this.inputKeyDown.emit(event);

		if (this.type() !== "number")
			return;

		const keysMap: Record<string, ((event: KeyboardEvent) => void)> = {
			"ArrowUp": this.increaseNumber,
			"ArrowDown": this.decreaseNumber
		}

		keysMap[event.key]?.(event);
	}

	protected increaseNumber = (event: KeyboardEvent) => {
		event.preventDefault();

		const max = this.max();

		const valueAsNumber = (!isNaN(+this.value()!) && this.value() !== null) ? +this.value()! : null;

		if (valueAsNumber === null) return;
		const updatedValue = valueAsNumber + this.step();

		if (max !== undefined && updatedValue > max) return;

		this.value.set(updatedValue as unknown as T);
	}

	protected decreaseNumber = (event: KeyboardEvent) => {
		event.preventDefault();

		const min = this.min();

		const valueAsNumber = (!isNaN(+this.value()!) && this.value() !== null) ? +this.value()! : null;

		if (valueAsNumber === null) return;

		const updatedValue = valueAsNumber - this.step();

		if (min !== undefined && updatedValue < min) return;

		this.value.set(updatedValue as unknown as T);
	}
}
