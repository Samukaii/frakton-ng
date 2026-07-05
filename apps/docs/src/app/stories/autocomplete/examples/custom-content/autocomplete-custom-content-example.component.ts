import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    FktAutocompleteComponent,
    FktAutocompleteFooterDirective,
    FktAutocompleteGroupDirective,
    FktAutocompleteHeaderDirective,
    FktAutocompleteItemDirective,
    FktAutocompleteChipDirective,
    FktAutocompleteEmptyDirective,
} from 'frakton-ng/autocomplete';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { USERS } from '../autocomplete-demo-data';
import { FktAvatarComponent } from 'frakton-ng/avatar';
import { FktTagComponent } from 'frakton-ng/tag';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-autocomplete-custom-content-example',
    imports: [
        FktAutocompleteComponent,
        FktAutocompleteHeaderDirective,
        FktAutocompleteGroupDirective,
        FktAutocompleteItemDirective,
        FktAutocompleteFooterDirective,
        FktAutocompleteChipDirective,
        FktAutocompleteEmptyDirective,
        FktButtonLegacyComponent,
        ReactiveFormsModule,
        FktAvatarComponent,
        FktTagComponent,
        CodeOutputComponent,
        FktIconComponent,
    ],
    templateUrl: './autocomplete-custom-content-example.component.html',
    styleUrl: './autocomplete-custom-content-example.component.scss',
})
export class AutocompleteCustomContentExampleComponent {
    protected readonly users = USERS;
    protected readonly member = new FormControl<(string | number)[]>([
        'usr-1001',
    ]);
    protected readonly value = toSignal(this.member.valueChanges, {
        initialValue: this.member.value,
    });
}
