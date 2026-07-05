import { Component, signal } from '@angular/core';
import { FormField, form, maxLength, minLength, required } from '@angular/forms/signals';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktTextareaDirective } from 'frakton-ng/textarea';

@Component({
    selector: 'app-textarea-signal-forms-example',
    imports: [
        FormField,
        FktButtonLegacyComponent,
        FktFieldComponent,
        FktTextareaDirective,
    ],
    templateUrl: './textarea-signal-forms-example.component.html',
    styleUrl: './textarea-signal-forms-example.component.scss',
})
export class TextareaSignalFormsExampleComponent {
    private readonly model = signal({
        message: '',
    });

    protected readonly form = form(this.model, (schema) => {
        required(schema.message);
        minLength(schema.message, 10);
        maxLength(schema.message, 160);
    });

    protected fill() {
        this.model.set({
            message:
                'I need help configuring the production deployment workflow.',
        });
    }

    protected reset() {
        this.model.set({ message: '' });
        this.form().reset();
    }
}
