import { Component } from '@angular/core';
import {
    FktButtonComponent,
    FktButtonLoadingIndicatorDirective,
} from 'frakton-ng/button';


@Component({
    selector: 'app-button-loading-example',
    imports: [
        FktButtonComponent,
        FktButtonLoadingIndicatorDirective,
    ],
    templateUrl: './button-loading-example.component.html',
    styleUrl: './button-loading-example.component.scss',
})
export class ButtonLoadingExampleComponent {}
