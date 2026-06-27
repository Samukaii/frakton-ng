import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FktSelectComponent } from 'frakton-ng/select';
import {
    FktFieldPrefixDirective,
    FktFieldSuffixDirective,
    FktHintEndDirective,
    FktHintStartDirective,
} from 'frakton-ng/field';
import { FktIconComponent } from 'frakton-ng/icon';
import { SELECT_USERS } from '../select-demo-data';

@Component({
    selector: 'app-select-field-composition-example',
    imports: [
        FktSelectComponent,
        FktFieldPrefixDirective,
        FktFieldSuffixDirective,
        FktHintStartDirective,
        FktHintEndDirective,
        FktIconComponent,
        ReactiveFormsModule,
    ],
    templateUrl: './select-field-composition-example.component.html',
})
export class SelectFieldCompositionExampleComponent {
    protected readonly users = SELECT_USERS;
    protected readonly assignee = new FormControl('');
}
