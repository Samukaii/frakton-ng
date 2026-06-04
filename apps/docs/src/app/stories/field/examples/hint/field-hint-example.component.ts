import { Component } from '@angular/core';
import {
    FktFieldComponent,
    FktFieldHintComponent,
    FktInputTextDirective,
} from 'frakton-ng/field';

@Component({
    selector: 'app-field-hint-example',
    imports: [FktFieldComponent, FktFieldHintComponent, FktInputTextDirective],
    templateUrl: './field-hint-example.component.html',
    styleUrl: './field-hint-example.component.scss',
})
export class FieldHintExampleComponent {}
