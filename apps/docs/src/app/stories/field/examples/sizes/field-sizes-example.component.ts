import { Component } from '@angular/core';
import { FktFieldComponent, FktInputTextDirective } from 'frakton-ng/field';

@Component({
    selector: 'app-field-sizes-example',
    imports: [FktFieldComponent, FktInputTextDirective],
    templateUrl: './field-sizes-example.component.html',
    styleUrl: './field-sizes-example.component.scss',
})
export class FieldSizesExampleComponent {}
