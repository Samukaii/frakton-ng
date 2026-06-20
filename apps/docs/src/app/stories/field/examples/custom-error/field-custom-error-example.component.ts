import { Component, signal } from '@angular/core';
import { email, FormField, form, required } from '@angular/forms/signals';
import {
    FktErrorDirective,
    FktFieldComponent,
    FktFieldPrefixDirective,
} from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import { FktFieldErrorComponent } from 'frakton-ng/field';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-field-custom-error-example',
    imports: [
        FormField,
        FktFieldComponent,
        FktInputTextDirective,
        FktFieldErrorComponent,
        FktIconComponent,
        FktErrorDirective,
        FktFieldPrefixDirective
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
