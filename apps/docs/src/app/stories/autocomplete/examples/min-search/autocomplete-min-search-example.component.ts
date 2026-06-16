import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import { USERS } from '../autocomplete-demo-data';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-autocomplete-min-search-example',
    imports: [
        FktAutocompleteComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-min-search-example.component.html',
    styleUrl: './autocomplete-min-search-example.component.scss',
})
export class AutocompleteMinSearchExampleComponent {
    protected readonly user = new FormControl<string | null>(null);
    protected readonly value = toSignal(this.user.valueChanges, {
        initialValue: this.user.value,
    });
    protected readonly results = signal(USERS);

    protected searchUsers(query: string) {
        this.results.set(
            USERS.filter((user) =>
                user.name.toLowerCase().includes(query.toLowerCase())
            )
        );
    }
}
