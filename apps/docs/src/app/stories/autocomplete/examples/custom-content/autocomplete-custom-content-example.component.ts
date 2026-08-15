import { CodeOutputComponent } from '@/components/code-output/code-output.component';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  FktAutocompleteChipDirective,
  FktAutocompleteComponent,
  FktAutocompleteEmptyDirective,
  FktAutocompleteFooterDirective,
  FktAutocompleteGroupDirective,
  FktAutocompleteHeaderDirective,
  FktAutocompleteItemDirective
} from 'frakton-ng/autocomplete';
import { FktAvatarComponent } from 'frakton-ng/avatar';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktIconComponent } from 'frakton-ng/icon';
import { USERS } from '../autocomplete-demo-data';

@Component({
  selector: 'app-autocomplete-custom-content-example',
  imports: [
    FktAutocompleteComponent,
    FktAutocompleteHeaderDirective,
    FktAutocompleteGroupDirective,
    FktAutocompleteItemDirective,
    FktAutocompleteFooterDirective,
    FktAutocompleteChipDirective,
    FktAutocompleteEmptyDirective,
    ReactiveFormsModule,
    FktAvatarComponent,
    FktButtonComponent,
    CodeOutputComponent,
    FktIconComponent,
  ],
  templateUrl: './autocomplete-custom-content-example.component.html',
  styleUrl: './autocomplete-custom-content-example.component.scss',
})
export class AutocompleteCustomContentExampleComponent {
  protected readonly users = USERS;
  protected readonly member = new FormControl<(string | number)[]>([
    'usr-1001',
  ]);
  protected readonly value = toSignal(this.member.valueChanges, {
    initialValue: this.member.value,
  });
}
