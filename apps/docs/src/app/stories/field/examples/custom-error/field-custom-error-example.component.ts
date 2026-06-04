import { Component, signal } from '@angular/core';
import { email, Field, form, required } from '@angular/forms/signals';
import {
    FktFieldComponent,
    FktInputTextDirective,
} from 'frakton-ng/field';
import { FktFieldErrorComponent } from 'frakton-ng/field-error';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-field-custom-error-example',
    imports: [
        Field,
        FktFieldComponent,
        FktInputTextDirective,
        FktFieldErrorComponent,
        FktIconComponent,
    ],
    templateUrl: './field-custom-error-example.component.html',
    styleUrl: './field-custom-error-example.component.scss',
})
export class FieldCustomErrorExampleComponent {
    private model = signal({
        email: '',
    });

    protected form = form(this.model, (schema) => {
        required(schema.email);
        email(schema.email);
    });
}
