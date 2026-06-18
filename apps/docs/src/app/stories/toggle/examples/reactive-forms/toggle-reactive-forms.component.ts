import { Component, inject } from '@angular/core';
import { FktToggleComponent } from 'frakton-ng/toggle';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktFieldErrorComponent } from 'frakton-ng/field';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'fkt-toggle-reactive-forms',
    imports: [
        FktToggleComponent,
        ReactiveFormsModule,
        FktButtonComponent,
        FktFieldErrorComponent,
        AsyncPipe,
    ],
    templateUrl: './toggle-reactive-forms.component.html',
    styleUrl: './toggle-reactive-forms.component.scss',
})
export class ToggleReactiveFormsComponent {
    protected form = inject(FormBuilder).group({
        terms: [false, Validators.requiredTrue],
    });

    protected fieldError$ = this.form.controls.terms.statusChanges.pipe(
        map(() => this.form.controls.terms.invalid && this.form.controls.terms.touched)
    );

    protected toggleDisabled() {
        if (this.form.controls.terms.disabled)
            this.form.controls.terms.enable();
        else this.form.controls.terms.disable();
    }
}
