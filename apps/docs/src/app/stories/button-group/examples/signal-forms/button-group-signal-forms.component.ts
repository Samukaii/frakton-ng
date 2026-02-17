import { Component, signal } from '@angular/core';
import { FktButtonGroupComponent, FktButtonGroupOption } from 'frakton-ng/button-group';
import { Field, form, required } from '@angular/forms/signals';
import { FktFieldErrorComponent } from 'frakton-ng/field-error';

@Component({
  selector: 'fkt-button-group-signal-forms',
    imports: [
        FktButtonGroupComponent,
        Field,
        FktFieldErrorComponent
    ],
  templateUrl: './button-group-signal-forms.component.html',
  styleUrl: './button-group-signal-forms.component.scss',
})
export class ButtonGroupSignalFormsComponent {
    model = signal({
        filter: 'list'
    });

    form = form(this.model, path => {
        required(path.filter, {message: "Field is required"});
    });

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



}
