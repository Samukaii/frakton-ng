import { Component, effect, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import { USERS } from '../autocomplete-demo-data';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-autocomplete-lazy-search-example',
    imports: [
        FktAutocompleteComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-lazy-search-example.component.html',
    styleUrl: './autocomplete-lazy-search-example.component.scss',
})
export class AutocompleteLazySearchExampleComponent {
    protected readonly user = new FormControl<string | null>(null);
    protected readonly value = toSignal(this.user.valueChanges, {
        initialValue: this.user.value,
    });
    protected readonly results = signal<typeof USERS>([]);
    protected readonly loading = signal(false);
    protected readonly hasFetched = signal(false);
    protected readonly canFetch = signal(false);

    private readonly fetchWhenDropdownOpen = effect(() => {
        if (!this.canFetch()) return;

        this.fetch();
    });

    protected fetch() {
        this.loading.set(true);

        setTimeout(() => {
            this.results.set(USERS.slice(0, 5));
            this.hasFetched.set(true);
            this.loading.set(false);
        }, 400);
    }
}
