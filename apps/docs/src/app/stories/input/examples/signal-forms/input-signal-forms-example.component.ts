import { Component, signal } from '@angular/core';
import { email, FormField, form, minLength, required } from '@angular/forms/signals';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
    selector: 'app-input-signal-forms-example',
    imports: [
        FormField,
        FktButtonLegacyComponent,
        FktFieldComponent,
        FktIconComponent,
        FktInputTextDirective,
    ],
    templateUrl: './input-signal-forms-example.component.html',
    styleUrl: './input-signal-forms-example.component.scss',
})
export class InputSignalFormsExampleComponent {
    private readonly model = signal({
        name: '',
        email: '',
    });

    protected readonly form = form(this.model, (schema) => {
        required(schema.name);
        minLength(schema.name, 3);
        required(schema.email);
        email(schema.email);
    });

    protected fill() {
        this.model.set({
            name: 'Alice Johnson',
            email: 'alice@example.com',
        });
    }

    protected reset() {
        this.model.set({
            name: '',
            email: '',
        });
    }
}
