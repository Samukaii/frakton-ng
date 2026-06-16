import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-autocomplete-free-text-example',
    imports: [
        FktAutocompleteComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-free-text-example.component.html',
    styleUrl: './autocomplete-free-text-example.component.scss',
})
export class AutocompleteFreeTextExampleComponent {
    protected readonly suggestions = ['Angular', 'Signals', 'Forms', 'API'];
    protected readonly tags = new FormControl<(string | number)[]>([]);
    protected readonly value = toSignal(this.tags.valueChanges, {
        initialValue: this.tags.value,
    });
}
