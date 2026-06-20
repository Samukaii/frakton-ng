import { Component, signal } from '@angular/core';
import { FormField, form, maxLength } from '@angular/forms/signals';
import { FktCharacterCountDirective, FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
    selector: 'app-input-character-count-example',
    imports: [
        FormField,
        FktCharacterCountDirective,
        FktFieldComponent,
        FktInputTextDirective,
    ],
    templateUrl: './input-character-count-example.component.html',
    styleUrl: './input-character-count-example.component.scss',
})
export class InputCharacterCountExampleComponent {
    private readonly model = signal({
        displayName: 'Alice Johnson',
    });

    protected readonly form = form(this.model, (schema) => {
        maxLength(schema.displayName, 32);
    });
}
