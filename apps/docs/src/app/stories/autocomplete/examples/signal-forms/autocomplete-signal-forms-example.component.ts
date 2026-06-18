import { Component, signal } from '@angular/core';
import { disabled, Field, form, required } from '@angular/forms/signals';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import { FktButtonComponent } from 'frakton-ng/button';
import { COUNTRIES } from '../autocomplete-demo-data';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-autocomplete-signal-forms-example',
    imports: [
        FktAutocompleteComponent,
        FktButtonComponent,
        Field,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-signal-forms-example.component.html',
    styleUrl: './autocomplete-signal-forms-example.component.scss',
})
export class AutocompleteSignalFormsExampleComponent {
    protected readonly countries = COUNTRIES;
    protected readonly model = signal({ country: '' });
    private disabled = signal(false);

    protected readonly form = form(this.model, (schema) => {
        required(schema.country);
        disabled(schema.country, this.disabled);
    });

    protected fill() {
        this.model.set({ country: 'br' });
    }

    protected reset() {
        this.model.set({ country: '' });
    }

    protected toggleDisabled() {
        this.disabled.set(!this.disabled());
    }
}
