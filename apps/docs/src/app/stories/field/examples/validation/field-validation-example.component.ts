import { Component, signal } from '@angular/core';
import { email, Field, form, required } from '@angular/forms/signals';
import { FktFieldComponent, FktInputDirective } from 'frakton-ng/field';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-field-validation-example',
    imports: [Field, FktFieldComponent, FktInputDirective, FktIconComponent],
    templateUrl: './field-validation-example.component.html',
    styleUrl: './field-validation-example.component.scss',
})
export class FieldValidationExampleComponent {
    private model = signal({
        name: '',
        email: '',
    });

    protected form = form(this.model, (schema) => {
        required(schema.name);
        required(schema.email);
        email(schema.email);
    });
}
