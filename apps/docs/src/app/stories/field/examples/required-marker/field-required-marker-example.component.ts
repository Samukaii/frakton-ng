import { Component, signal } from '@angular/core';
import { Field, form, required } from '@angular/forms/signals';
import { FktFieldComponent, FktInputTextDirective } from 'frakton-ng/field';

@Component({
    selector: 'app-field-required-marker-example',
    imports: [Field, FktFieldComponent, FktInputTextDirective],
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
