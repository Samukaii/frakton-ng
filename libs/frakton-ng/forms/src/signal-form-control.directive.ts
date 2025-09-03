import {
	Directive,
	effect,
	ElementRef,
	inject,
	input,
	linkedSignal,
	OnDestroy,
	OnInit,
	untracked,
} from '@angular/core';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { SignalFormControlTransformer } from './types';
import { SignalFormControl } from './signal-form-control';

@Directive({
	selector: 'input[signalFormControl],textarea[signalFormControl]',
	host: {
		'[disabled]': 'signalFormControl().disabled()'
	}
})
export class SignalFormControlDirective<T> implements OnInit, OnDestroy {
	signalFormControl = input.required<SignalFormControl<T>>();
	transformer = input<SignalFormControlTransformer>();
	updateOn = input<'blur' | 'focus'>('blur');

	private elementRef = inject(ElementRef);
	private element = this.elementRef.nativeElement as HTMLInputElement;

	private cursorPosition: number | null = null;
	viewValue = linkedSignal<any>(() => this.signalFormControl().viewValue(), {
		equal: () => false,
	});

	@MarkUsed()
	protected updateValue = effect(() => {
		this.viewValue();
		this.transformer();

		untracked(() => {
			const viewValue = this.getViewValue();

			if (this.element.value === viewValue) return;
			if (typeof viewValue !== "string" && typeof viewValue !== "boolean" && typeof viewValue !== "number") return;

			if (this.element.type === 'checkbox') {
				this.element.checked = !!viewValue;
				console.log(viewValue)

			} else this.element.value = viewValue.toString();

			if (this.cursorPosition === null) return;
			this.element.setSelectionRange(
				this.cursorPosition,
				this.cursorPosition,
			);
		});
	});

	@MarkUsed()
	protected updateTransformer = effect(() => {
		const transformer = this.transformer();

		if (transformer) this.onInput();
	});

	private onInput = () => {
		const transformer = this.transformer();
		const elementValue =
			this.element.type === 'checkbox'
				? this.element.checked
				: this.element.value;

		if (!!transformer) {
			const result = transformer(elementValue);
			this.cursorPosition = result.cursorPosition ?? null;
			this.viewValue.set(result.viewValue);

			this.signalFormControl().setValue(result, {
				source: 'ui',
			});
		} else {
			this.signalFormControl().setValue(elementValue as any, {
				source: 'ui',
			});
		}
		this.signalFormControl().markAsDirty();
	};

	private getViewValue() {
		const originalViewValue = this.viewValue();
		const transformer = this.transformer();

		if (transformer) return transformer(originalViewValue).viewValue;

		return originalViewValue;
	}

	private onKeyDown = () => {
	};

	private markAsTouched = () => {
		this.signalFormControl().markAsTouched();
	};

	ngOnInit() {
		this.element.addEventListener('input', this.onInput);
		this.element.addEventListener('keydown', this.onKeyDown);
		this.element.addEventListener(this.updateOn(), this.markAsTouched);
	}

	ngOnDestroy(): void {
		this.element.removeEventListener('input', this.onInput);
		this.element.removeEventListener(this.updateOn(), this.markAsTouched);
		this.element.removeEventListener('keydown', this.onKeyDown);
	}
}
