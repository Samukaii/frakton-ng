import { Component, signal } from '@angular/core';
import { FktFieldComponent, FktInputDirective } from 'frakton-ng/field';
import { disabled, Field, form, required } from '@angular/forms/signals';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-basic-example',
    imports: [
        FktFieldComponent,
        FktInputDirective,
        Field,
        FktButtonComponent,
        FktIconComponent,
    ],
    templateUrl: './basic-example.component.html',
    styleUrl: './basic-example.component.scss',
})
export class BasicExampleComponent {
    disabled = signal(false);

    field = form(signal('Initial value'), (schema) => {
        disabled(schema, this.disabled);
        required(schema, { message: 'Teste' });
    });
}
