import { Component, signal } from '@angular/core';
import { FktButtonGroupComponent, FktButtonGroupOption } from 'frakton-ng/button-group';
import { disabled, Field, form, required } from '@angular/forms/signals';
import { FktFieldErrorComponent } from 'frakton-ng/field-error';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
    selector: 'fkt-button-group-signal-forms',
    imports: [
        FktButtonGroupComponent,
        Field,
        FktFieldErrorComponent,
        FktButtonComponent,
    ],
    templateUrl: './button-group-signal-forms.component.html',
    styleUrl: './button-group-signal-forms.component.scss',
})
export class ButtonGroupSignalFormsComponent {
    model = signal({
        filter: null as string | null,
    });

    private disabled = signal(false);

    protected form = form(this.model, (path) => {
        required(path.filter, { message: 'Field is required' });
        disabled(path.filter, this.disabled);
    });

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
        this.disabled.update((value) => !value);
    }
}
