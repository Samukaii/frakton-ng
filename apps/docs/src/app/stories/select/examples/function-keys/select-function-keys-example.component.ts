import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktSelectComponent } from 'frakton-ng/select';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';
import { SELECT_USERS, SelectUser } from '../select-demo-data';

@Component({
    selector: 'app-select-function-keys-example',
    imports: [FktSelectComponent, ReactiveFormsModule, CodeOutputComponent],
    templateUrl: './select-function-keys-example.component.html',
    styleUrl: './select-function-keys-example.component.scss',
})
export class SelectFunctionKeysExampleComponent {
    protected readonly users = SELECT_USERS;
    protected readonly assignee = new FormControl('');
    protected readonly value = toSignal(this.assignee.valueChanges, {
        initialValue: this.assignee.value,
    });

    protected readonly labelKey = (user: SelectUser) =>
        `${user.name} (${user.email})`;
    protected readonly valueKey = (user: SelectUser) => user.id;
    protected readonly groupKey = (user: SelectUser) => ({
        label: `${user.department} team`,
        value: user.department.toLowerCase(),
    });
}
