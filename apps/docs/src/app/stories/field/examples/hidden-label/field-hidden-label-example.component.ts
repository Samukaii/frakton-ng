import { Component } from '@angular/core';
import { FktFieldComponent, FktInputTextDirective } from 'frakton-ng/field';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-field-hidden-label-example',
    imports: [FktFieldComponent, FktInputTextDirective, FktIconComponent],
    templateUrl: './field-hidden-label-example.component.html',
    styleUrl: './field-hidden-label-example.component.scss',
})
export class FieldHiddenLabelExampleComponent {}
