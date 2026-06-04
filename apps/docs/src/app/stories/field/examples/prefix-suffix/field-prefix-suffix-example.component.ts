import { Component } from '@angular/core';
import { FktFieldComponent, FktInputDirective } from 'frakton-ng/field';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktTooltipDirective } from 'frakton-ng/tooltip';

@Component({
    selector: 'app-field-prefix-suffix-example',
    imports: [
        FktFieldComponent,
        FktInputDirective,
        FktIconComponent,
        FktTooltipDirective,
    ],
    templateUrl: './field-prefix-suffix-example.component.html',
    styleUrl: './field-prefix-suffix-example.component.scss',
})
export class FieldPrefixSuffixExampleComponent {}
