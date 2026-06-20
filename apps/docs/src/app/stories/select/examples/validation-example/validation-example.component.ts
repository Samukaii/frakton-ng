import { Component, input, signal } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { FormField, form, required } from '@angular/forms/signals';
import { FktFieldErrorComponent } from 'frakton-ng/field';

@Component({
    selector: 'select-validation-example',
    templateUrl: './validation-example.component.html',
    styleUrl: './validation-example.component.scss',
    imports: [FktSelectComponent, FormField, FktFieldErrorComponent],
})
export class ValidationExampleComponent {
    label = input.required<string>();
    placeholder = input<string>();
    options = input.required<FktSelectOption[]>();

    protected control = form(signal(''), (path) => {
        required(path, { message: 'Field is required' });
    });
}
