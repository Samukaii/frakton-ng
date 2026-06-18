import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import { USERS } from '../autocomplete-demo-data';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-autocomplete-object-options-example',
    imports: [
        FktAutocompleteComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-object-options-example.component.html',
    styleUrl: './autocomplete-object-options-example.component.scss',
})
export class AutocompleteObjectOptionsExampleComponent {
    protected readonly users = USERS;
    protected readonly assignee = new FormControl<string | null>(null);
    protected readonly value = toSignal(this.assignee.valueChanges, {
        initialValue: this.assignee.value,
    });
}
