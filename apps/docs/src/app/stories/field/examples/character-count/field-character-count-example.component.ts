import { Component, inject, signal } from '@angular/core';
import { FormField, form, maxLength } from '@angular/forms/signals';
import {
    FktCharacterCountDirective,
    FktFieldComponent,
    FktHintEndDirective,
} from 'frakton-ng/field';
import {FktInputTextDirective} from 'frakton-ng/input-text';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-field-character-count-example',
    imports: [
        FktCharacterCountDirective,
        FktFieldComponent,
        FktInputTextDirective,
        FormField,
        ReactiveFormsModule,
        FktHintEndDirective
    ],
    templateUrl: './field-character-count-example.component.html',
    styleUrl: './field-character-count-example.component.scss',
})
export class FieldCharacterCountExampleComponent {
    form = form(signal({ name: '' }), (schema) => {
        maxLength(schema.name, 24);
    });

    reactiveForm = inject(FormBuilder).group({
        slug: ['', [Validators.maxLength(32)]],
    });
}
