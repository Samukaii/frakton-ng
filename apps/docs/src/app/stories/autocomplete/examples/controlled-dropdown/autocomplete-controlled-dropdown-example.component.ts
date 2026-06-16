import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import { FktButtonComponent } from 'frakton-ng/button';
import { COUNTRIES } from '../autocomplete-demo-data';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-autocomplete-controlled-dropdown-example',
    imports: [
        FktAutocompleteComponent,
        FktButtonComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-controlled-dropdown-example.component.html',
    styleUrl: './autocomplete-controlled-dropdown-example.component.scss',
})
export class AutocompleteControlledDropdownExampleComponent {
    protected readonly countries = COUNTRIES;
    protected readonly country = new FormControl<string | null>(null);
    protected readonly value = toSignal(this.country.valueChanges, {
        initialValue: this.country.value,
    });
    protected readonly isDropdownOpened = signal(false);

    protected open() {
        this.isDropdownOpened.set(true);
    }

    protected close() {
        this.isDropdownOpened.set(false);
    }
}
