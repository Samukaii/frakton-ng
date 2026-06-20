import { Component, signal } from '@angular/core';
import { FormField, form, required } from '@angular/forms/signals';
import { FktFieldComponent, FktFieldPrefixDirective } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-field-automatic-errors-example',
    imports: [
        FormField,
        FktFieldComponent,
        FktInputTextDirective,
        FktIconComponent,
        FktFieldPrefixDirective
    ],
    templateUrl: './field-automatic-errors-example.component.html',
    styleUrl: './field-automatic-errors-example.component.scss',
})
export class FieldAutomaticErrorsExampleComponent {
    private model = signal({
        name: '',
    });

    protected form = form(this.model, (schema) => {
        required(schema.name);
    });
}
