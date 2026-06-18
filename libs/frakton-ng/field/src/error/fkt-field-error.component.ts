import { Component, input } from '@angular/core';

@Component({
    selector: 'fkt-field-error',
    imports: [],
    templateUrl: './fkt-field-error.component.html',
    styleUrl: './fkt-field-error.component.scss',
})
export class FktFieldErrorComponent {
    show = input(false);
    error = input<string | undefined | null>();
}
