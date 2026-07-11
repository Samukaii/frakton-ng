import {Component, input, linkedSignal, output} from '@angular/core';
import {FormData} from '../../form-overlay-example/fkt-form-overlay-example.component';
import {FormsModule} from '@angular/forms';
import {FktIconComponent} from 'frakton-ng/icon';
import {email, form, FormField, required, submit} from '@angular/forms/signals';
import {FktFieldComponent} from 'frakton-ng/field';
import {FktInputTextDirective} from 'frakton-ng/input-text';
import {FktButtonComponent} from "frakton-ng/button";
import {FktTextareaDirective} from "frakton-ng/textarea";

@Component({
    selector: 'fkt-form-overlay-dialog',
    imports: [
        FktFieldComponent,
        FktInputTextDirective,
        FormsModule,
        FktIconComponent,
        FktButtonComponent,
        FormField,
        FktTextareaDirective,
    ],
    templateUrl: './fkt-form-overlay-dialog.component.html',
    styleUrl: './fkt-form-overlay-dialog.component.scss',
})
export class FktFormOverlayDialogComponent {
    title = input('Contact Form');
    description = input('Please fill out your information below:');
    initialData = input<FormData>();

    formSubmit = output<FormData>();
    cancel = output<void>();

    private value = linkedSignal(() => {
        const initialData = this.initialData();

        if (!initialData)
            return {
                name: '',
                email: '',
                message: '',
            };

        return initialData;
    });

    protected form = form(this.value, (path) => {
        required(path.name, { message: 'Field is required' });

        required(path.email, { message: 'Field is required' });
        email(path.email, { message: 'E-mail invalid' });
    });

    protected async handleSubmit() {
        await submit(this.form, async () => {
            this.formSubmit.emit(this.form().value());
        });
    }

    protected handleCancel() {
        this.cancel.emit();
    }
}
