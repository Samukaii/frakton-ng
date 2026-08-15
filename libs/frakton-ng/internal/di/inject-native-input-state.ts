import { DestroyRef, ElementRef, inject, signal } from '@angular/core';
import { FktFieldControlState } from 'frakton-ng/internal/types';

function readNativeValue<T>(
  element: HTMLInputElement | HTMLTextAreaElement
): T {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'checkbox') {
      return element.checked as T;
    }

    if (element.type === 'number') {
      const value = element.value;

      return (value === '' ? null : element.valueAsNumber) as T;
    }
  }

  return element.value as T;
}

function readNativeInvalid(
  element: HTMLInputElement | HTMLTextAreaElement
): boolean {
  const ariaInvalid = element.getAttribute('aria-invalid');

  if (ariaInvalid === 'true') return true;
  if (ariaInvalid === 'false') return false;

  return !element.validity.valid;
}

function readNativeMaxLength(
  element: HTMLInputElement | HTMLTextAreaElement
): number | null {
  return element.maxLength >= 0 ? element.maxLength : null;
}

export function injectNativeInputState<T>(): {
  state: FktFieldControlState<T>;
  listen: () => void;
} {
  const element = inject(
    ElementRef<HTMLInputElement | HTMLTextAreaElement>
  ).nativeElement;
  const destroyRef = inject(DestroyRef);

  const elementValue = signal(readNativeValue<T>(element));
  const disabled = signal(element.disabled);
  const invalid = signal(readNativeInvalid(element));
  const touched = signal(false);
  const required = signal(element.required);
  const maxLength = signal(readNativeMaxLength(element));


  const state: FktFieldControlState<T> = {
    value: elementValue.asReadonly(),
    disabled: disabled.asReadonly(),
    invalid: invalid.asReadonly(),
    touched: touched.asReadonly(),
    required: required.asReadonly(),
    maxLength: maxLength.asReadonly(),
    errors: signal(null),
    setValue: (value) => {
      element.value = String(value);
      console.log(element);
      elementValue.set(readNativeValue<T>(element));
    },
  };

  const listen = () => {
    const sync = () => {
      elementValue.set(readNativeValue<T>(element));
      disabled.set(element.disabled);
      invalid.set(readNativeInvalid(element));
      required.set(element.required);
      maxLength.set(readNativeMaxLength(element));
    };

    const markTouched = () => {
      touched.set(true);
      sync();
    };

    queueMicrotask(sync);
    const observer = new MutationObserver(sync);

    element.addEventListener('input', sync);
    element.addEventListener('change', sync);
    element.addEventListener('blur', markTouched);

    observer.observe(element, {
      attributes: true,
      attributeFilter: [
        'value',
        'disabled',
        'required',
        'maxlength',
        'readonly',
        'aria-invalid',
        'class',
      ],
    });

    destroyRef.onDestroy(() => {
      element.removeEventListener('input', sync);
      element.removeEventListener('change', sync);
      element.removeEventListener('blur', markTouched);
      observer.disconnect();
    });
  };

  return { state, listen };
}
