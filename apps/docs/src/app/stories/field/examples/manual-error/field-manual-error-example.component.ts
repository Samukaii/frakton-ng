import { Component, signal } from '@angular/core';
import { email, Field, form, required } from '@angular/forms/signals';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktFieldComponent, FktFieldPrefixDirective } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-field-manual-error-example',
    imports: [
        Field,
        FktButtonComponent,
        FktFieldComponent,
        FktInputTextDirective,
        FktIconComponent,
        FktFieldPrefixDirective
    ],
    templateUrl: './field-manual-error-example.component.html',
    styleUrl: './field-manual-error-example.component.scss',
})
export class FieldManualErrorExampleComponent {
    private model = signal({
        email: '',
    });

    protected submitted = signal(false);

    protected form = form(this.model, (schema) => {
        required(schema.email, {
            message: 'Submit the form with a valid e-mail.',
        });
        email(schema.email);
    });
}
