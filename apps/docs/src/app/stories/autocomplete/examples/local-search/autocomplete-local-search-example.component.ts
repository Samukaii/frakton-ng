import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import { COUNTRIES } from '../autocomplete-demo-data';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-autocomplete-local-search-example',
    imports: [
        FktAutocompleteComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-local-search-example.component.html',
    styleUrl: './autocomplete-local-search-example.component.scss',
})
export class AutocompleteLocalSearchExampleComponent {
    protected readonly countries = COUNTRIES;
    protected readonly country = new FormControl<string | null>(null);
    protected readonly value = toSignal(this.country.valueChanges, {
        initialValue: this.country.value,
    });
}
