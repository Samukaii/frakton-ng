import { Component, signal } from '@angular/core';
import { Field, form, required } from '@angular/forms/signals';
import { FktFieldComponent, FktInputTextDirective } from 'frakton-ng/field';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-field-automatic-errors-example',
    imports: [
        Field,
        FktFieldComponent,
        FktInputTextDirective,
        FktIconComponent,
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
