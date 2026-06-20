import { Component, signal } from '@angular/core';
import { FktToggleComponent } from 'frakton-ng/toggle';
import { disabled, FormField, form, required } from '@angular/forms/signals';
import { FktFieldErrorComponent } from 'frakton-ng/field';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
    selector: 'fkt-toggle-signal-forms',
    imports: [
        FktToggleComponent,
        FormField,
        FktFieldErrorComponent,
        FktButtonComponent,
    ],
    templateUrl: './toggle-signal-forms.component.html',
    styleUrl: './toggle-signal-forms.component.scss',
})
export class ToggleSignalFormsComponent {
    model = signal({
        terms: false,
    });

    private isDisabled = signal(false);

    protected form = form(this.model, (path) => {
        required(path.terms, { message: 'You must accept the terms' });
        disabled(path.terms, this.isDisabled);
    });

    protected toggleDisabled() {
        this.isDisabled.update((v) => !v);
    }
}
