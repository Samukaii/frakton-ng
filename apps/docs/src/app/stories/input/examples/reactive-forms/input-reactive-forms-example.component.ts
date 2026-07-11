import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
    selector: 'app-input-reactive-forms-example',
    imports: [
        FktButtonComponent,
        FktFieldComponent,
        FktIconComponent,
        FktInputTextDirective,
        ReactiveFormsModule,
    ],
    templateUrl: './input-reactive-forms-example.component.html',
    styleUrl: './input-reactive-forms-example.component.scss',
})
export class InputReactiveFormsExampleComponent {
    protected readonly form = inject(FormBuilder).group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
    });

    protected fill() {
        this.form.setValue({
            name: 'Alice Johnson',
            email: 'alice@example.com',
        });
    }

    protected reset() {
        this.form.reset({
            name: '',
            email: '',
        });
    }
}
