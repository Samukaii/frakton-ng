import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { USERS } from '../autocomplete-demo-data';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-autocomplete-reactive-forms-example',
    imports: [
        FktAutocompleteComponent,
        FktButtonLegacyComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-reactive-forms-example.component.html',
    styleUrl: './autocomplete-reactive-forms-example.component.scss',
})
export class AutocompleteReactiveFormsExampleComponent {
    protected readonly users = USERS;
    protected readonly form = inject(FormBuilder).group({
        assignee: ['', Validators.required],
    });
    protected readonly formValue = toSignal(
        this.form.valueChanges.pipe(map(() => this.form.getRawValue())),
        { initialValue: this.form.getRawValue() }
    );

    protected fill() {
        this.form.patchValue({ assignee: 'usr-1002' });
    }

    protected reset() {
        this.form.reset();
    }

    protected toggleDisabled() {
        const control = this.form.controls.assignee;

        if (control.disabled) control.enable();
        else control.disable();
    }
}
