import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktSelectComponent } from 'frakton-ng/select';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';
import { SELECT_USERS } from '../select-demo-data';

@Component({
    selector: 'app-select-object-options-example',
    imports: [FktSelectComponent, ReactiveFormsModule, CodeOutputComponent],
    templateUrl: './select-object-options-example.component.html',
    styleUrl: './select-object-options-example.component.scss',
})
export class SelectObjectOptionsExampleComponent {
    protected readonly users = SELECT_USERS;
    protected readonly assignee = new FormControl('');
    protected readonly value = toSignal(this.assignee.valueChanges, {
        initialValue: this.assignee.value,
    });
}
