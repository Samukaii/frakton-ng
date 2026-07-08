import { Component } from '@angular/core';
import {
    FktButtonContentDirective,
    FktButtonComponent,
} from 'frakton-ng/button';

@Component({
    selector: 'app-button-composition-example',
    imports: [
        FktButtonComponent,
        FktButtonContentDirective,
    ],
    templateUrl: './button-composition-example.component.html',
    styleUrl: './button-composition-example.component.scss',
})
export class ButtonCompositionExampleComponent {}
