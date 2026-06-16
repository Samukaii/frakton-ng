import { Component, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent, FktAutocompleteVirtualScrollDirective } from 'frakton-ng/autocomplete';
import { User } from '../autocomplete-demo-data';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-autocomplete-virtual-scroll-example',
    imports: [
        FktAutocompleteComponent,
        FktAutocompleteVirtualScrollDirective,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-virtual-scroll-example.component.html',
    styleUrl: './autocomplete-virtual-scroll-example.component.scss',
})
export class AutocompleteVirtualScrollExampleComponent {
    protected readonly canFetch = signal(false);
    protected readonly users = httpResource<User[]>(
        () => (this.canFetch() ? 'api/users-10K.json' : undefined),
        { defaultValue: [] }
    );
    protected readonly user = new FormControl<string | null>(null);
    protected readonly value = toSignal(this.user.valueChanges, {
        initialValue: this.user.value,
    });

    protected readonly getCountryGroup = (user: User) =>
        user.country ?? 'Unknown';
}
