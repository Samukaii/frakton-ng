import { Component } from '@angular/core';
import {
    FktButtonComponent,
    FktButtonPrefixDirective,
} from 'frakton-ng/button';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-button-sizes-example',
    imports: [
        FktButtonComponent,
        FktButtonPrefixDirective,
        FktIconComponent,
    ],
    templateUrl: './button-sizes-example.component.html',
    styleUrl: './button-sizes-example.component.scss',
})
export class ButtonSizesExampleComponent {}
