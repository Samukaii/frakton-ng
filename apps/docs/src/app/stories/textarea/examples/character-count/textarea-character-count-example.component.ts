import { Component, signal } from '@angular/core';
import { Field, form, maxLength } from '@angular/forms/signals';
import { FktCharacterCountDirective, FktFieldComponent } from 'frakton-ng/field';
import { FktTextareaDirective } from 'frakton-ng/textarea';

@Component({
    selector: 'app-textarea-character-count-example',
    imports: [
        Field,
        FktCharacterCountDirective,
        FktFieldComponent,
        FktTextareaDirective,
    ],
    templateUrl: './textarea-character-count-example.component.html',
    styleUrl: './textarea-character-count-example.component.scss',
})
export class TextareaCharacterCountExampleComponent {
    private readonly model = signal({
        bio: 'Builds internal tools with Angular.',
    });

    protected readonly form = form(this.model, (schema) => {
        maxLength(schema.bio, 120);
    });
}
