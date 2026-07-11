import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {FktCharacterCountDirective, FktFieldComponent} from 'frakton-ng/field';
import {FktTextareaDirective} from 'frakton-ng/textarea';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'app-textarea-reactive-forms-example',
    imports: [
        FktCharacterCountDirective,
        FktFieldComponent,
        FktTextareaDirective,
        ReactiveFormsModule,
        FktButtonComponent,
    ],
    templateUrl: './textarea-reactive-forms-example.component.html',
    styleUrl: './textarea-reactive-forms-example.component.scss',
})
export class TextareaReactiveFormsExampleComponent {
    protected readonly form = inject(FormBuilder).group({
        comment: ['', [Validators.required, Validators.maxLength(180)]],
    });

    protected fill() {
        this.form.setValue({
            comment:
                'The new table and field APIs are ready for an internal review.',
        });
    }

    protected reset() {
        this.form.reset({ comment: '' });
    }
}
