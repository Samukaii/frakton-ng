import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FktSelectComponent } from 'frakton-ng/select';
import {
    FktErrorDirective,
    FktFieldErrorComponent,
    FktFieldPrefixDirective,
} from 'frakton-ng/field';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktButtonComponent } from 'frakton-ng/button';
import { SELECT_USERS } from '../select-demo-data';

@Component({
    selector: 'app-select-validations-example',
    imports: [
        FktSelectComponent,
        FktErrorDirective,
        FktFieldErrorComponent,
        FktFieldPrefixDirective,
        FktIconComponent,
        FktButtonComponent,
        ReactiveFormsModule,
    ],
    templateUrl: './select-validations-example.component.html',
    styleUrl: './select-validations-example.component.scss',
})
export class SelectValidationsExampleComponent {
    protected readonly users = SELECT_USERS;
    protected readonly automatic = new FormControl('', Validators.required);
    protected readonly custom = new FormControl('', Validators.required);

    protected validate() {
        this.automatic.markAsTouched();
        this.custom.markAsTouched();
    }
}
