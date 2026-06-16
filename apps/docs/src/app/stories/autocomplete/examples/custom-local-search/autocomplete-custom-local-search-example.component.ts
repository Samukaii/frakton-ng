import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';
import { Country, COUNTRIES } from '../autocomplete-demo-data';

@Component({
    selector: 'app-autocomplete-custom-local-search-example',
    imports: [
        FktAutocompleteComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-custom-local-search-example.component.html',
    styleUrl: './autocomplete-custom-local-search-example.component.scss',
})
export class AutocompleteCustomLocalSearchExampleComponent {
    protected readonly countries = COUNTRIES;
    protected readonly country = new FormControl<string | null>(null);
    protected readonly value = toSignal(this.country.valueChanges, {
        initialValue: this.country.value,
    });

    protected readonly searchByCode = (query: string, options: Country[]) => {
        const normalizedQuery = this.normalize(query);

        if (!normalizedQuery) return options;

        return options.filter((country) => {
            return this.normalize(country.code).includes(normalizedQuery);
        });
    };

    private normalize(value: string) {
        return value
            .normalize('NFD')
            .replace(/\p{Diacritic}/gu, '')
            .toLowerCase()
            .trim();
    }
}
