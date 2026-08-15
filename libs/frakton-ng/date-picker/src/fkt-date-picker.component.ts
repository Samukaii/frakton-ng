import {booleanAttribute, Component, input, model, signal } from '@angular/core';
import { FktFocusTrapDirective } from 'frakton-ng/focus-trap';
import { CallPipe } from 'frakton-ng/internal/pipes';
import { FktPopoverComponent, FktPopoverContentDirective, FktPopoverTriggerDirective } from 'frakton-ng/popover';
import {FktDatePickerModalComponent} from './modal/fkt-date-picker-modal.component';
import {isValidDateString, transformedSignal} from 'frakton-ng/internal/utils';
import {FktButtonComponent} from 'frakton-ng/button';
import {FormValueControl, ValidationError, WithOptionalFieldTree} from '@angular/forms/signals';
import {FktFieldComponent, FktFieldSuffixDirective} from 'frakton-ng/field';
import {FktInputTextDirective} from 'frakton-ng/input-text';
import {injectCompatFormStateWithoutNative} from 'frakton-ng/internal/di';
import {FktDateMaskDirective} from './directives/fkt-date-mask.directive';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'fkt-date-picker',
  imports: [
    FktButtonComponent,
    FktFieldComponent,
    FktInputTextDirective,
    FktFieldSuffixDirective,
    FktDateMaskDirective,
    FormsModule,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
    FktDatePickerModalComponent,
    CallPipe,
    FktFocusTrapDirective,
  ],
  templateUrl: './fkt-date-picker.component.html',
  styleUrl: './fkt-date-picker.component.scss',
})
export class FktDatePickerComponent
  implements FormValueControl<Date | string | null>
{
  value = model<Date | string | null>(null);
  touched = model(false);
  disabled = input(false);
  invalid = input(false);
  errors = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);

  label = input.required<string>();
  hideLabel = input(false, {
    transform: booleanAttribute,
  });
  placeholder = input<string>();
  valueFormat = input<'iso-string' | 'date-instance'>('iso-string');

  state = injectCompatFormStateWithoutNative();

  transformed = transformedSignal(this.value, {
    from: (source) => {
      if (!source) return '';

      const isValidDate = isValidDateString(
        source instanceof Date ? source.toISOString() : source ?? ''
      );

      if (!isValidDate) return '';

      const date = new Date(source);

      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString().padStart(2, '0');

      return `${day}/${month}/${year}`;
    },
    to: (formatted, source) => {
      if (formatted.length < 10) return source;

      const [day, month, year] = formatted.split('/');

      const date = new Date(+year, +month - 1, +day);
      const format = this.valueFormat();

      return format === 'date-instance' ? date : date.toISOString();
    },
  });

  protected isOpen = signal(false);

  protected getCurrentDate(value: unknown) {
    if (value instanceof Date) return value;

    if (typeof value === 'string' && isValidDateString(value))
      return new Date(value);

    return new Date();
  }

  protected select(date: Date) {
    this.transformed.set(this.formatDate(date));
    this.isOpen.set(false);
  }

  private formatDate(value: Date) {
    const date = new Date(value);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().padStart(2, '0');

    return `${day}/${month}/${year}`;
  }
}
