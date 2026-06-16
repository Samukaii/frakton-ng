import { Component } from '@angular/core';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
    selector: 'app-field-sizes-example',
    imports: [FktFieldComponent, FktInputTextDirective],
    templateUrl: './field-sizes-example.component.html',
    styleUrl: './field-sizes-example.component.scss',
})
export class FieldSizesExampleComponent {}
