import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    FktAutocompleteComponent,
    FktAutocompleteFooterDirective,
    FktAutocompleteGroupDirective,
    FktAutocompleteHeaderDirective,
    FktAutocompleteItemDirective
} from 'frakton-ng/autocomplete';
import { FktButtonComponent } from 'frakton-ng/button';
import { USERS } from '../autocomplete-demo-data';
import { FktAvatarComponent } from 'frakton-ng/avatar';
import { FktTagComponent } from 'frakton-ng/tag';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-autocomplete-custom-content-example',
    imports: [
        FktAutocompleteComponent,
        FktAutocompleteHeaderDirective,
        FktAutocompleteGroupDirective,
        FktAutocompleteItemDirective,
        FktAutocompleteFooterDirective,
        FktButtonComponent,
        ReactiveFormsModule,
        FktAvatarComponent,
        FktTagComponent,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-custom-content-example.component.html',
    styleUrl: './autocomplete-custom-content-example.component.scss',
})
export class AutocompleteCustomContentExampleComponent {
    protected readonly users = USERS;
    protected readonly member = new FormControl<string | null>(null);
    protected readonly value = toSignal(this.member.valueChanges, {
        initialValue: this.member.value,
    });
}
