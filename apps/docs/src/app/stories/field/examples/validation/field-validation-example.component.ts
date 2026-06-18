import { Component, signal } from '@angular/core';
import {
    email,
    Field,
    form,
    maxLength,
    minLength,
    required,
} from '@angular/forms/signals';
import { FktFieldComponent, FktFieldPrefixDirective } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-field-validation-example',
    imports: [Field, FktFieldComponent, FktInputTextDirective, FktIconComponent, FktFieldPrefixDirective],
    templateUrl: './field-validation-example.component.html',
    styleUrl: './field-validation-example.component.scss',
})
export class FieldValidationExampleComponent {
    private model = signal({
        name: '',
        username: 'ab',
        bio: 'This text is too long',
        email: '',
    });

    protected form = form(this.model, (schema) => {
        required(schema.name);
        minLength(schema.username, 5);
        maxLength(schema.bio, 12);
        required(schema.email);
        email(schema.email);
    });
}
