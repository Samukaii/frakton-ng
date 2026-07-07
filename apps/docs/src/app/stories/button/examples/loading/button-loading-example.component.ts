import { Component } from '@angular/core';
import {
    FktButtonComponent,
    FktButtonLoadingIndicatorDirective,
    FktButtonPrefixDirective
} from 'frakton-ng/button';
import { FktIconComponent } from 'frakton-ng/icon';


@Component({
    selector: 'app-button-loading-example',
    imports: [
        FktButtonComponent,
        FktButtonLoadingIndicatorDirective,
        FktButtonPrefixDirective,
        FktIconComponent
    ],
    templateUrl: './button-loading-example.component.html',
    styleUrl: './button-loading-example.component.scss',
})
export class ButtonLoadingExampleComponent { }
