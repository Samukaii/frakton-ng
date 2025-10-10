import {
	Directive,
	effect,
	ElementRef,
	inject,
	input,
	model,
	OnDestroy,
	OnInit,
	signal,
	untracked,
} from '@angular/core';
import { FktControlFormatter } from './types';
import { MarkUsed } from 'frakton-ng/internal/utils';

@Directive({
	selector: 'input[fktControlFormatter],textarea[fktControlFormatter]',
})
export class FktControlFormatterDirective<ModelValue> implements OnInit, OnDestroy {
	fktControlFormatter = input<FktControlFormatter<ModelValue, string> | FktControlFormatter<ModelValue, boolean>>();
	modelValue = model.required<ModelValue>();

	private elementValue = signal<string | boolean>('');

	public formattedValue = this.elementValue.asReadonly()

	private elementRef = inject(ElementRef);
	private element = this.elementRef.nativeElement as HTMLInputElement;

	private cursorPosition: number | null = null;
	private previousValue: string | boolean | null = null;

	@MarkUsed()
	protected watchModelValue = effect(() => {
		const value = this.modelValue();

		untracked(() => {
			this.updateViewValueFromModel(value);
		})
	});

	private onInput = () => {
		const elementValue = this.getElementValue();

		const parser = (this.fktControlFormatter()?.viewToModelValue ?? ((value: any) => value as ModelValue)) as FktControlFormatter<ModelValue, string | boolean>['viewToModelValue'];

		const result = this.sanitizeViewValue();

		this.modelValue.set(parser(result?.sanitizedValue ?? elementValue));
	};

	private updateViewValueFromModel(value: ModelValue) {
		const parser = this.fktControlFormatter()?.modelToViewValue ?? ((value) => value as string);
		const parsed = parser(value);

		const sanitized = this.getSanitized(parsed);
		const result = sanitized?.sanitizedValue ?? parsed;

		this.elementValue.set(result);

		if (result === this.getElementValue()) return;

		this.setElementValue(sanitized?.sanitizedValue ?? parsed);
	}

	private sanitizeViewValue = () => {
		const elementValue = this.getElementValue();
		const result = this.getSanitized(elementValue);

		if (!result) return;

		this.setElementValue(result.sanitizedValue);

		if (typeof result.sanitizedValue === "boolean" || typeof this.previousValue === "boolean")
			return;

		let position = result.sanitizedValue.length + (result.cursorOffset || 0);

		if (this.previousValue && this.cursorPosition! < this.previousValue.length) {
			position = this.cursorPosition! + result.sanitizedValue.length - this.previousValue.length;
		}

		try {
			this.element.setSelectionRange(
				position,
				position,
			);
		} catch (e) {
		}

		return result;
	}

	private getSanitized(value: string | boolean) {
		const sanitizer = this.fktControlFormatter()?.sanitizeViewValue as FktControlFormatter<ModelValue, string | boolean>['sanitizeViewValue'];

		if (!sanitizer) return;

		return sanitizer({
			currentValue: value,
			previousValue: this.previousValue,
			previousCursorPosition: this.cursorPosition!
		});
	}

	private setElementValue(value: string | boolean | null) {
		if (this.element.type === "checkbox") {
			this.element.checked = !!value;
			this.elementValue.set(!!value);
		} else {
			this.element.value = value?.toString() ?? '';
			this.elementValue.set(value?.toString() ?? '');
		}
	}

	private getElementValue() {
		if (this.element.type === "checkbox")
			return this.element.checked;

		return this.element.value;
	}

	private onBeforeInput = () => {
		this.cursorPosition = this.element.selectionEnd;
		this.previousValue = this.getElementValue();
	}

	ngOnInit() {
		this.element.addEventListener('input', this.onInput);
		this.element.addEventListener('beforeinput', this.onBeforeInput);
	}

	ngOnDestroy() {
		this.element.removeEventListener('input', this.onInput);
		this.element.removeEventListener('beforeinput', this.onBeforeInput);
	}
}
