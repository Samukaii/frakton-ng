import {Component, signal} from '@angular/core';
import {email, form, FormField, required} from '@angular/forms/signals';
import {FktFieldComponent, FktFieldPrefixDirective} from 'frakton-ng/field';
import {FktInputTextDirective} from 'frakton-ng/input-text';
import {FktIconComponent} from 'frakton-ng/icon';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'app-field-manual-error-example',
    imports: [
        FormField,
        FktButtonComponent,
        FktFieldComponent,
        FktInputTextDirective,
        FktIconComponent,
        FktFieldPrefixDirective,
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
