import { Component } from '@angular/core';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import {
    FktFieldPrefixDirective,
    FktFieldSuffixDirective
} from 'frakton-ng/field';

@Component({
    selector: 'app-field-prefix-suffix-example',
    imports: [
        FktFieldComponent,
        FktInputTextDirective,
        FktIconComponent,
        FktTooltipDirective,
        FktFieldPrefixDirective,
        FktFieldSuffixDirective
    ],
    templateUrl: './field-prefix-suffix-example.component.html',
    styleUrl: './field-prefix-suffix-example.component.scss',
})
export class FieldPrefixSuffixExampleComponent {}
