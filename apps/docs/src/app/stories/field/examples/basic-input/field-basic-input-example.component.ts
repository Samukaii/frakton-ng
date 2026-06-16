import { Component } from '@angular/core';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';


@Component({
    selector: 'app-field-basic-input-example',
    imports: [FktFieldComponent, FktInputTextDirective],
    templateUrl: './field-basic-input-example.component.html',
    styleUrl: './field-basic-input-example.component.scss',
})
export class FieldBasicInputExampleComponent {}
