import { Component, inject } from '@angular/core';
import {
    FktButtonGroupComponent,
    FktButtonGroupOption,
} from 'frakton-ng/button-group';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
    selector: 'fkt-button-group-reactive-forms',
    imports: [
        FktButtonGroupComponent,
        ReactiveFormsModule,
        FktButtonComponent
    ],
    templateUrl: './button-group-reactive-forms.component.html',
    styleUrl: './button-group-reactive-forms.component.scss',
})
export class ButtonGroupReactiveFormsComponent {
    form = inject(FormBuilder).group({
        filter: ['list', Validators.required]
    })

    options: FktButtonGroupOption[] = [
        {
            id: 'list',
            label: "List",
            icon: 'list-bullet'
        },
        {
            id: 'grid',
            label: "Grid",
            icon: 'squares-2x2'
        },
        {
            id: 'cards',
            label: "Cards",
            icon: 'square-3-stack-3d'
        }
    ];


    disable() {
        if (this.form.controls.filter.disabled)
            this.form.controls.filter.enable();
        else this.form.controls.filter.disable();
    }
}
