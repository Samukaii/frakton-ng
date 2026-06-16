import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import { COUNTRIES } from '../autocomplete-demo-data';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-autocomplete-multiple-example',
    imports: [
        FktAutocompleteComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-multiple-example.component.html',
    styleUrl: './autocomplete-multiple-example.component.scss',
})
export class AutocompleteMultipleExampleComponent {
    protected readonly countries = COUNTRIES;
    protected readonly countriesControl = new FormControl<(string | number)[]>(
        []
    );
    protected readonly value = toSignal(this.countriesControl.valueChanges, {
        initialValue: this.countriesControl.value,
    });
}
