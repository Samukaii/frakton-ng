import {Component, signal} from '@angular/core';
import {disabled, form, FormField, required} from '@angular/forms/signals';
import {FktSelectComponent} from 'frakton-ng/select';
import {CodeOutputComponent} from '@/components/code-output/code-output.component';
import {SELECT_USERS} from '../select-demo-data';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'app-select-signal-forms-example',
    imports: [
        FktSelectComponent,
        FktButtonComponent,
        FormField,
        CodeOutputComponent,
    ],
    templateUrl: './select-signal-forms-example.component.html',
    styleUrl: './select-signal-forms-example.component.scss',
})
export class SelectSignalFormsExampleComponent {
    protected readonly users = SELECT_USERS;
    protected readonly model = signal({ assignee: '' });
    private readonly isDisabled = signal(false);

    protected readonly form = form(this.model, (schema) => {
        required(schema.assignee);
        disabled(schema.assignee, this.isDisabled);
    });

    protected fill() {
        this.model.set({ assignee: 'usr-1003' });
    }

    protected reset() {
        this.model.set({ assignee: '' });
    }

    protected toggleDisabled() {
        this.isDisabled.update((disabled) => !disabled);
    }
}
