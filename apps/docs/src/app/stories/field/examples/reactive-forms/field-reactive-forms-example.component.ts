import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { FktFieldComponent, FktFieldPrefixDirective } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import { FktIconComponent } from 'frakton-ng/icon';
import { map, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-field-reactive-forms-example',
    imports: [
        ReactiveFormsModule,
        FktButtonLegacyComponent,
        FktFieldComponent,
        FktInputTextDirective,
        FktIconComponent,
        AsyncPipe,
        FktFieldPrefixDirective
    ],
    templateUrl: './field-reactive-forms-example.component.html',
    styleUrl: './field-reactive-forms-example.component.scss',
})
export class FieldReactiveFormsExampleComponent {
    protected form = inject(FormBuilder).group({
        name: ['', [Validators.required]],
        username: ['ab', [Validators.minLength(5)]],
        bio: ['This text is too long', [Validators.maxLength(12)]],
        email: ['', [Validators.required, Validators.email]],
    });

    private stateChanges$ = this.form.events.pipe(startWith(null));

    protected disabled$ = this.stateChanges$.pipe(
        map(() => this.form.disabled)
    );

    protected toggleDisabled() {
        if (this.form.enabled) this.form.disable();
        else this.form.enable();
    }

    protected fillProfile() {
        this.form.setValue({
            name: 'Alice Johnson',
            username: 'alice',
            bio: 'Short bio',
            email: 'alice@example.com',
        });
    }

    protected reset() {
        this.form.reset({
            name: '',
            username: '',
            bio: '',
            email: '',
        });
    }
}
