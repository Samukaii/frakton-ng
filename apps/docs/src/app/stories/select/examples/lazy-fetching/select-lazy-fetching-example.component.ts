import { Component, signal } from '@angular/core';
import { FktSelectComponent } from 'frakton-ng/select';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';
import { SELECT_USERS, SelectUser } from '../select-demo-data';

@Component({
    selector: 'app-select-lazy-fetching-example',
    imports: [FktSelectComponent, CodeOutputComponent],
    templateUrl: './select-lazy-fetching-example.component.html',
    styleUrl: './select-lazy-fetching-example.component.scss',
})
export class SelectLazyFetchingExampleComponent {
    protected readonly loading = signal(false);
    protected readonly users = signal<SelectUser[]>([]);

    protected fetchOptions(opened: boolean) {
        if (!opened || this.loading() || this.users().length) return;

        this.loading.set(true);
        setTimeout(() => {
            this.users.set(SELECT_USERS);
            this.loading.set(false);
        }, 700);
    }
}
