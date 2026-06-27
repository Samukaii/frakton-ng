import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktSelectComponent } from 'frakton-ng/select';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';
import { SELECT_USERS } from '../select-demo-data';

@Component({
    selector: 'app-select-multiple-example',
    imports: [FktSelectComponent, ReactiveFormsModule, CodeOutputComponent],
    templateUrl: './select-multiple-example.component.html',
    styleUrl: './select-multiple-example.component.scss',
})
export class SelectMultipleExampleComponent {
    protected readonly users = SELECT_USERS;
    protected readonly reviewers = new FormControl<(string | number)[]>([
        'usr-1001',
        'usr-1003',
    ]);
    protected readonly value = toSignal(this.reviewers.valueChanges, {
        initialValue: this.reviewers.value,
    });
}
