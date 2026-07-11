import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {toSignal} from '@angular/core/rxjs-interop';
import {FktAutocompleteComponent} from 'frakton-ng/autocomplete';
import {
    FktFieldPrefixDirective,
    FktFieldSuffixDirective,
    FktHintEndDirective,
    FktHintStartDirective,
} from 'frakton-ng/field';
import {FktIconComponent} from 'frakton-ng/icon';
import {CodeOutputComponent} from '@/components/code-output/code-output.component';
import {USERS} from '../autocomplete-demo-data';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'app-autocomplete-automatic-validation-example',
    imports: [
        FktAutocompleteComponent,
        FktFieldPrefixDirective,
        FktFieldSuffixDirective,
        FktHintEndDirective,
        FktHintStartDirective,
        FktIconComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
        FktButtonComponent,
    ],
    templateUrl: './autocomplete-automatic-validation-example.component.html',
    styleUrl: './autocomplete-automatic-validation-example.component.scss',
})
export class AutocompleteAutomaticValidationExampleComponent {
    protected readonly users = USERS;
    protected readonly assignee = new FormControl<string | null>(null, {
        validators: [Validators.required],
    });
    protected readonly value = toSignal(this.assignee.valueChanges, {
        initialValue: this.assignee.value,
    });

    protected validate() {
        this.assignee.markAsTouched();
        this.assignee.updateValueAndValidity();
    }
}
