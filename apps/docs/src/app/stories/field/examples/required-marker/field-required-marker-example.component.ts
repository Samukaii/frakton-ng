import { Component, signal } from '@angular/core';
import { FormField, form, required } from '@angular/forms/signals';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
    selector: 'app-field-required-marker-example',
    imports: [FormField, FktFieldComponent, FktInputTextDirective],
    templateUrl: './field-required-marker-example.component.html',
    styleUrl: './field-required-marker-example.component.scss',
})
export class FieldRequiredMarkerExampleComponent {
    private model = signal({
        inferred: '',
        forced: '',
        hidden: '',
    });

    protected form = form(this.model, (schema) => {
        required(schema.inferred);
        required(schema.hidden);
    });
}
