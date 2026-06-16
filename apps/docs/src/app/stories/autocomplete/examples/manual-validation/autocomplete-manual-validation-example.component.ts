import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import {
    FktErrorDirective,
    FktFieldErrorComponent,
    FktFieldPrefixDirective,
    FktFieldSuffixDirective,
    FktHintEndDirective,
    FktHintStartDirective,
} from 'frakton-ng/field';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktIconComponent } from 'frakton-ng/icon';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';
import { USERS } from '../autocomplete-demo-data';

@Component({
    selector: 'app-autocomplete-manual-validation-example',
    imports: [
        FktAutocompleteComponent,
        FktButtonComponent,
        FktErrorDirective,
        FktFieldErrorComponent,
        FktFieldPrefixDirective,
        FktFieldSuffixDirective,
        FktHintEndDirective,
        FktHintStartDirective,
        FktIconComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-manual-validation-example.component.html',
    styleUrl: './autocomplete-manual-validation-example.component.scss',
})
export class AutocompleteManualValidationExampleComponent {
    protected readonly users = USERS;
    protected readonly approver = new FormControl<string | null>(null, {
        validators: [Validators.required],
    });
    protected readonly value = toSignal(this.approver.valueChanges, {
        initialValue: this.approver.value,
    });

    protected validate() {
        this.approver.markAsTouched();
        this.approver.updateValueAndValidity();
    }
}
