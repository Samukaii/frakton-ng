import { Component } from '@angular/core';
import { FktFieldComponent, FktFieldHintComponent } from 'frakton-ng/field';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
    selector: 'app-input-basic-example',
    imports: [
        FktFieldComponent,
        FktFieldHintComponent,
        FktIconComponent,
        FktInputTextDirective,
    ],
    templateUrl: './input-basic-example.component.html',
    styleUrl: './input-basic-example.component.scss',
})
export class InputBasicExampleComponent {}
