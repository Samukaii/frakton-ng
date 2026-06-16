import { Component, inject } from '@angular/core';
import { FktButtonGroupComponent, FktButtonGroupOption } from 'frakton-ng/button-group';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktFieldErrorComponent } from 'frakton-ng/field';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'fkt-button-group-reactive-forms',
    imports: [
        FktButtonGroupComponent,
        ReactiveFormsModule,
        FktButtonComponent,
        FktFieldErrorComponent,
        AsyncPipe,
    ],
    templateUrl: './button-group-reactive-forms.component.html',
    styleUrl: './button-group-reactive-forms.component.scss',
})
export class ButtonGroupReactiveFormsComponent {
    protected form = inject(FormBuilder).group({
        filter: [null as string | null, Validators.required],
    });

    protected fieldError$ = this.form.controls.filter.statusChanges.pipe(
        map(() => this.form.controls.filter.invalid && this.form.controls.filter.touched)
    );

    protected options: FktButtonGroupOption[] = [
        {
            id: 'list',
            label: 'List',
            icon: 'list-bullet',
        },
        {
            id: 'grid',
            label: 'Grid',
            icon: 'squares-2x2',
        },
        {
            id: 'cards',
            label: 'Cards',
            icon: 'square-3-stack-3d',
        },
    ];

    protected toggleDisabled() {
        if (this.form.controls.filter.disabled)
            this.form.controls.filter.enable();
        else this.form.controls.filter.disable();
    }
}
