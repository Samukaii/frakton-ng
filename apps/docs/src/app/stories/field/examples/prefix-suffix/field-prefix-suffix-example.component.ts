import { Component } from '@angular/core';
import { FktFieldComponent, FktInputTextDirective } from 'frakton-ng/field';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktTooltipDirective } from 'frakton-ng/tooltip';

@Component({
    selector: 'app-field-prefix-suffix-example',
    imports: [
        FktFieldComponent,
        FktInputTextDirective,
        FktIconComponent,
        FktTooltipDirective,
    ],
    templateUrl: './field-prefix-suffix-example.component.html',
    styleUrl: './field-prefix-suffix-example.component.scss',
})
export class FieldPrefixSuffixExampleComponent {}
