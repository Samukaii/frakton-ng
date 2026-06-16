import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import { USERS } from '../autocomplete-demo-data';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-autocomplete-server-search-example',
    imports: [
        FktAutocompleteComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-server-search-example.component.html',
    styleUrl: './autocomplete-server-search-example.component.scss',
})
export class AutocompleteServerSearchExampleComponent {
    protected readonly user = new FormControl<string | null>(null);
    protected readonly value = toSignal(this.user.valueChanges, {
        initialValue: this.user.value,
    });
    protected readonly results = signal(USERS.slice(0, 4));
    protected readonly loading = signal(false);

    protected searchUsers(query: string) {
        this.loading.set(true);

        setTimeout(() => {
            const normalizedQuery = query.toLowerCase();
            this.results.set(
                USERS.filter((user) =>
                    user.name.toLowerCase().includes(normalizedQuery)
                )
            );
            this.loading.set(false);
        }, 400);
    }
}
