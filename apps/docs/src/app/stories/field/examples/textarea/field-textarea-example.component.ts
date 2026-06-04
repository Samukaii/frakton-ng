import { Component } from '@angular/core';
import { FktFieldComponent, FktInputDirective } from 'frakton-ng/field';

@Component({
    selector: 'app-field-textarea-example',
    imports: [FktFieldComponent, FktInputDirective],
    templateUrl: './field-textarea-example.component.html',
    styleUrl: './field-textarea-example.component.scss',
})
export class FieldTextareaExampleComponent {}
