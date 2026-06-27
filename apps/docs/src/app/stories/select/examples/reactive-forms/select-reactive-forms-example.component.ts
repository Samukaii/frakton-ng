import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { FktSelectComponent } from 'frakton-ng/select';
import { FktButtonComponent } from 'frakton-ng/button';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';
import { SELECT_USERS } from '../select-demo-data';

@Component({
    selector: 'app-select-reactive-forms-example',
    imports: [
        FktSelectComponent,
        FktButtonComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    styleUrl: 'select-reactive-forms-example.component.scss',
    templateUrl: './select-reactive-forms-example.component.html',
})
export class SelectReactiveFormsExampleComponent {
    protected readonly users = SELECT_USERS;
    protected readonly form = inject(FormBuilder).group({
        assignee: ['', Validators.required],
    });

    protected readonly disabled = signal(false);

    protected readonly formValue = toSignal(
        this.form.valueChanges.pipe(map(() => this.form.getRawValue())),
        { initialValue: this.form.getRawValue() }
    );

    private readonly toggleDisabled = effect(() => {
        if (this.disabled()) this.form.controls.assignee.disable();
        else this.form.controls.assignee.enable();
    });

    protected fill() {
        this.form.patchValue({ assignee: 'usr-1002' });
    }

    protected reset() {
        this.form.reset();
    }
}
