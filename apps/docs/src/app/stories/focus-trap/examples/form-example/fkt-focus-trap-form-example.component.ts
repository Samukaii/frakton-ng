import {Component, input, signal} from '@angular/core';
import {FktFocusTrapDirective} from 'frakton-ng/focus-trap';
import {FktSelectComponent} from 'frakton-ng/select';
import {FktCheckboxComponent} from 'frakton-ng/checkbox';
import {FktFieldComponent} from 'frakton-ng/field';
import {FktInputTextDirective} from 'frakton-ng/input-text';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'fkt-focus-trap-form-example',
    imports: [
        FktFocusTrapDirective,
        FktFieldComponent,
        FktInputTextDirective,
        FktSelectComponent,
        FktCheckboxComponent,
        FktButtonComponent,
    ],
    templateUrl: './fkt-focus-trap-form-example.component.html',
    styleUrl: './fkt-focus-trap-form-example.component.scss',
})
export class FktFocusTrapFormExampleComponent {
    preventScroll = input(true);

    countryOptions = signal([
        { label: 'United States', value: 'us' },
        { label: 'Canada', value: 'ca' },
        { label: 'United Kingdom', value: 'uk' },
        { label: 'Germany', value: 'de' },
        { label: 'France', value: 'fr' },
    ]);

    submitForm() {
        console.log('Form submitted');
    }

    resetForm() {
        console.log('Form reset');
    }
}
