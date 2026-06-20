import { Component, input, signal } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { FormField, form } from '@angular/forms/signals';

@Component({
    selector: 'select-large-list-example',
    templateUrl: './large-list-example.component.html',
    styleUrl: './large-list-example.component.scss',
    imports: [FktSelectComponent, FormField],
})
export class LargeListExampleComponent {
    label = input.required<string>();
    placeholder = input<string>();
    options = input.required<FktSelectOption[]>();

    protected control = form(signal(''));
}
