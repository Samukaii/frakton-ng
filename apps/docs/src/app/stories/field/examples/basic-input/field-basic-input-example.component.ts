import { Component } from '@angular/core';
import { FktFieldComponent, FktInputDirective } from 'frakton-ng/field';

@Component({
    selector: 'app-field-basic-input-example',
    imports: [FktFieldComponent, FktInputDirective],
    templateUrl: './field-basic-input-example.component.html',
    styleUrl: './field-basic-input-example.component.scss',
})
export class FieldBasicInputExampleComponent {}
