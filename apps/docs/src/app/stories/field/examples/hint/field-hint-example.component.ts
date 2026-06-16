import { Component } from '@angular/core';
import {
    FktFieldComponent,
    FktFieldHintComponent,
    FktHintStartDirective,
} from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
    selector: 'app-field-hint-example',
    imports: [FktFieldComponent, FktFieldHintComponent, FktInputTextDirective, FktHintStartDirective],
    templateUrl: './field-hint-example.component.html',
    styleUrl: './field-hint-example.component.scss',
})
export class FieldHintExampleComponent {}
