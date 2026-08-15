import { NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  contentChild,
  effect,
  inject,
  Optional,
  Self,
  signal,
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { FktButtonComponent } from 'frakton-ng/button';
import {
  FktErrorDirective,
  FktFieldComponent,
  FktFieldPrefixDirective,
  FktFieldSuffixDirective,
  FktHintEndDirective,
  FktHintStartDirective,
} from 'frakton-ng/field';
import { FktIconComponent } from 'frakton-ng/icon';
import { injectCompatFormStateWithoutNative } from 'frakton-ng/internal/di';
import { Generic } from 'frakton-ng/internal/types';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';
import { FktSelectContextDirective } from './directives/fkt-select-context.directive';
import { FktSelectControlDirective } from './directives/fkt-select-control.directive';
import { FktSelectKeyboardDirective } from './directives/fkt-select-keyboard.directive';
import { FktSelectSelectionDirective } from './directives/fkt-select-selection.directive';
import { FktSelectChipDirective } from './directives/public/fkt-select-chip.directive';
import { FktSelectEmptyDirective } from './directives/public/fkt-select-empty.directive';
import { FktSelectFooterDirective } from './directives/public/fkt-select-footer.directive';
import { FktSelectGroupDirective } from './directives/public/fkt-select-group.directive';
import { FktSelectHeaderDirective } from './directives/public/fkt-select-header.directive';
import { FktSelectItemDirective } from './directives/public/fkt-select-item.directive';
import {
  FktNormalizedSelectOption,
  FktSelectWritableValue,
} from './fkt-select.types';
import { FktSelectOptionsComponent } from './options/fkt-select-options.component';
import { FktSelectStoreService } from './services/fkt-select-store.service';
import { normalizeWrittenSelectValue } from './utils/normalize-written-select-value';

@Component({
  selector: 'fkt-select',
  imports: [
    NgTemplateOutlet,
    FktFieldComponent,
    FktFieldPrefixDirective,
    FktFieldSuffixDirective,
    FktHintStartDirective,
    FktHintEndDirective,
    FktErrorDirective,
    FktIconComponent,
    FktSelectControlDirective,
    FktSelectKeyboardDirective,
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
    FktSelectOptionsComponent,
  ],
  templateUrl: './fkt-select.component.html',
  styleUrl: './fkt-select.component.scss',
  providers: [FktSelectStoreService],
  hostDirectives: [
    {
      directive: FktSelectContextDirective,
      inputs: [
        'label',
        'placeholder',
        'hideClearButton',
        'options',
        'value',
        'labelKey',
        'valueKey',
        'groupKey',
        'loading',
        'disabled',
        'multiple',
        'listHeight',
        'hint',
        'showError',
        'size',
        'requiredMarker',
        'hideLabel',
      ],
      outputs: ['valueChange', 'dropdownOpenChange'],
    },
    FktSelectSelectionDirective,
  ],
})
export class FktSelectComponent<Option extends Generic | string | number>
  implements ControlValueAccessor, AfterViewInit
{
  protected readonly formState = injectCompatFormStateWithoutNative();
  protected readonly context = inject<FktSelectContextDirective<Option>>(
    FktSelectContextDirective
  );
  protected readonly selection = inject<FktSelectSelectionDirective<Option>>(
    FktSelectSelectionDirective
  );
  protected readonly store = inject<FktSelectStoreService<Option>>(
    FktSelectStoreService
  );

  private readonly field = viewChild.required(FktFieldComponent);
  protected readonly popoverAnchor = signal<HTMLElement | null>(null);
  protected readonly control = viewChild.required(FktSelectControlDirective);

  protected readonly hintStartDirective = contentChild(FktHintStartDirective);
  protected readonly hintEndDirective = contentChild(FktHintEndDirective);
  protected readonly errorDirective = contentChild(FktErrorDirective);
  protected readonly prefixDirective = contentChild(FktFieldPrefixDirective);
  protected readonly suffixDirective = contentChild(FktFieldSuffixDirective);
  protected readonly chipDirective = contentChild(FktSelectChipDirective);

  protected readonly itemTemplate = contentChild(FktSelectItemDirective);
  protected readonly groupTemplate = contentChild(FktSelectGroupDirective);
  protected readonly headerTemplate = contentChild(FktSelectHeaderDirective);
  protected readonly footerTemplate = contentChild(FktSelectFooterDirective);
  protected readonly emptyTemplate = contentChild(FktSelectEmptyDirective);

  private onChange?: (value: unknown) => void;
  protected onTouched?: () => void;

  protected readonly disabled = computed(
    () =>
      this.context.loading() ||
      this.context.disabled() ||
      (this.formState?.disabled() ?? false)
  );

  private readonly emitValue = effect(() => {
    this.onChange?.(this.context.value());
  });

  constructor(@Self() @Optional() ngControl: NgControl) {
    if (ngControl) ngControl.valueAccessor = this;
  }

  ngAfterViewInit() {
    const fieldContainer = this.field().container();

    this.context.fieldContainer.set(fieldContainer);
    this.popoverAnchor.set(fieldContainer.nativeElement);
  }

  writeValue(value: FktSelectWritableValue<Option>): void {
    const normalized = normalizeWrittenSelectValue(value, {
      multiple: this.context.multiple(),
      valueKey: this.context.valueKey(),
    });

    this.selection.updateValue(normalized.value);

    this.context.preloadedOptions.set(normalized.preloadedOptions);

    if (normalized.preloadedOptions.length) {
      this.onChange?.(this.context.value());
    }
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  protected toggleDropdown() {
    if (this.disabled() || this.context.loading()) return;

    if (this.context.dropdownOpened()) this.context.closeDropdown();
    else this.context.openDropdown();
  }

  protected clear(event: MouseEvent) {
    event.stopPropagation();
    this.selection.clear();
    this.context.closeDropdown();
  }

  protected remove(
    event: MouseEvent,
    option: FktNormalizedSelectOption<Option>
  ) {
    event.stopPropagation();
    this.selection.remove(option);
  }
}
