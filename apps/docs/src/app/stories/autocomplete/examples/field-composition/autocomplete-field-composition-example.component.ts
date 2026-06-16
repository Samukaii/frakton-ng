import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import {
    FktFieldPrefixDirective,
    FktFieldSuffixDirective,
    FktHintEndDirective,
    FktHintStartDirective,
} from 'frakton-ng/field';
import { FktIconComponent } from 'frakton-ng/icon';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';
import { USERS } from '../autocomplete-demo-data';

@Component({
    selector: 'app-autocomplete-field-composition-example',
    imports: [
        FktAutocompleteComponent,
        FktFieldPrefixDirective,
        FktFieldSuffixDirective,
        FktHintEndDirective,
        FktHintStartDirective,
        FktIconComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-field-composition-example.component.html',
    styleUrl: './autocomplete-field-composition-example.component.scss',
})
export class AutocompleteFieldCompositionExampleComponent {
    protected readonly users = USERS;
    protected readonly user = new FormControl<string | null>(null);
    protected readonly value = toSignal(this.user.valueChanges, {
        initialValue: this.user.value,
    });
}
