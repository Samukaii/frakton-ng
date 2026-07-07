import { Component } from '@angular/core';
import {
    FktButtonComponent,
    FktButtonPrefixDirective,
    FktButtonSuffixDirective,
} from 'frakton-ng/button';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-button-composition-example',
    imports: [
        FktButtonComponent,
        FktButtonPrefixDirective,
        FktButtonSuffixDirective,
        FktIconComponent,
    ],
    templateUrl: './button-composition-example.component.html',
    styleUrl: './button-composition-example.component.scss',
})
export class ButtonCompositionExampleComponent {}
