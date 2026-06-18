import { Component, computed, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent, FktAutocompleteInfiniteLoadingDirective } from 'frakton-ng/autocomplete';
import { createLargeUserList } from '../autocomplete-demo-data';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-autocomplete-infinite-loading-example',
    imports: [
        FktAutocompleteComponent,
        FktAutocompleteInfiniteLoadingDirective,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-infinite-loading-example.component.html',
    styleUrl: './autocomplete-infinite-loading-example.component.scss',
})
export class AutocompleteInfiniteLoadingExampleComponent {
    private readonly allUsers = createLargeUserList(80);
    private readonly pageSize = 20;

    protected readonly user = new FormControl<string | null>(null);
    protected readonly value = toSignal(this.user.valueChanges, {
        initialValue: this.user.value,
    });
    protected readonly page = signal(1);
    protected readonly loading = signal(false);
    protected readonly visibleUsers = computed(() =>
        this.allUsers.slice(0, this.page() * this.pageSize)
    );
    protected readonly hasEnded = computed(
        () => this.visibleUsers().length >= this.allUsers.length
    );

    protected loadMore() {
        if (this.loading() || this.hasEnded()) return;

        this.loading.set(true);

        setTimeout(() => {
            this.page.update((page) => page + 1);
            this.loading.set(false);
        }, 1500);
    }
}
