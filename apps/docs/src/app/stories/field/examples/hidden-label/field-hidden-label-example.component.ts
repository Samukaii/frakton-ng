import { Component } from '@angular/core';
import { FktFieldComponent, FktFieldPrefixDirective } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-field-hidden-label-example',
    imports: [FktFieldComponent, FktInputTextDirective, FktIconComponent, FktFieldPrefixDirective],
    templateUrl: './field-hidden-label-example.component.html',
    styleUrl: './field-hidden-label-example.component.scss',
})
export class FieldHiddenLabelExampleComponent {}
