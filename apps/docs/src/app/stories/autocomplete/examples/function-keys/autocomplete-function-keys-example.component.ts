import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import { COUNTRIES, Country } from '../autocomplete-demo-data';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-autocomplete-function-keys-example',
    imports: [
        FktAutocompleteComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-function-keys-example.component.html',
    styleUrl: './autocomplete-function-keys-example.component.scss',
})
export class AutocompleteFunctionKeysExampleComponent {
    protected readonly countries = COUNTRIES;
    protected readonly country = new FormControl<string | null>(null);
    protected readonly value = toSignal(this.country.valueChanges, {
        initialValue: this.country.value,
    });

    protected readonly getCountryLabel = (country: Country) => country.name;
    protected readonly getCountryValue = (country: Country) => country.code;
    protected readonly getCountryGroup = (country: Country) => ({
        label: country.continent,
        value: country.continent.toLowerCase().replaceAll(' ', '-'),
    });
}
