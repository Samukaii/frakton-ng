import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktFieldComponent, FktInputDirective } from 'frakton-ng/field';
import { FktFieldErrorComponent } from 'frakton-ng/field-error';
import { FktIconComponent } from 'frakton-ng/icon';
import { map, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-field-reactive-forms-example',
    imports: [
        ReactiveFormsModule,
        FktButtonComponent,
        FktFieldComponent,
        FktInputDirective,
        FktFieldErrorComponent,
        FktIconComponent,
        AsyncPipe,
    ],
    templateUrl: './field-reactive-forms-example.component.html',
    styleUrl: './field-reactive-forms-example.component.scss',
})
export class FieldReactiveFormsExampleComponent {
    protected form = inject(FormBuilder).group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
    });

    private stateChanges$ = this.form.events.pipe(startWith(null));
    protected disabled$ = this.stateChanges$.pipe(
        map(() => this.form.disabled)
    );

    protected nameErrors$ = this.stateChanges$.pipe(
        map(() => this.form.controls.name.errors)
    );

    protected emailErrors$ = this.stateChanges$.pipe(
        map(() => this.form.controls.email.errors)
    );

    protected toggleDisabled() {
        if (this.form.enabled) this.form.disable();
        else this.form.enable();
    }

    protected fillProfile() {
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
