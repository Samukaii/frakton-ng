import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { FktSelectComponent } from 'frakton-ng/select';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';
import { SELECT_USERS, SelectUser } from '../select-demo-data';

@Component({
    selector: 'app-select-hydrated-value-example',
    imports: [
        FktSelectComponent,
        FktButtonLegacyComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './select-hydrated-value-example.component.html',
    styleUrl: './select-hydrated-value-example.component.scss',
})
export class SelectHydratedValueExampleComponent {
    protected readonly users = SELECT_USERS;
    protected readonly assignee = new FormControl<string | SelectUser>('');
    protected readonly value = toSignal(this.assignee.valueChanges, {
        initialValue: this.assignee.value,
    });

    protected fill() {
        this.assignee.setValue({
            id: 'usr-1006',
            name: 'Frank Miller',
            email: 'frank.miller@example.com',
            department: 'Legal',
        });
    }
}
