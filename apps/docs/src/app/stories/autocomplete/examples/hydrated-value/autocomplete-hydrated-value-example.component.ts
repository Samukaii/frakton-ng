import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { User } from '../autocomplete-demo-data';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

const PRELOADED_USERS = [
    {
        id: 'usr-2315',
        name: 'John Smith',
        email: 'john.smith@company.com',
        department: 'Engineering',
    },
    {
        id: 'usr-2316',
        name: 'Emma Johnson',
        email: 'emma.johnson@company.com',
        department: 'Marketing',
    },
    {
        id: 'usr-2317',
        name: 'Michael Brown',
        email: 'michael.brown@company.com',
        department: 'Finance',
    },
    {
        id: 'usr-2318',
        name: 'Olivia Davis',
        email: 'olivia.davis@company.com',
        department: 'Human Resources',
    },
    {
        id: 'usr-2319',
        name: 'William Wilson',
        email: 'william.wilson@company.com',
        department: 'Sales',
    },
    {
        id: 'usr-2320',
        name: 'Sophia Miller',
        email: 'sophia.miller@company.com',
        department: 'Customer Support',
    },
    {
        id: 'usr-2321',
        name: 'James Taylor',
        email: 'james.taylor@company.com',
        department: 'Operations',
    },
    {
        id: 'usr-2322',
        name: 'Charlotte Anderson',
        email: 'charlotte.anderson@company.com',
        department: 'Legal',
    },
];

@Component({
    selector: 'app-autocomplete-hydrated-value-example',
    imports: [
        FktAutocompleteComponent,
        FktButtonLegacyComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-hydrated-value-example.component.html',
    styleUrl: './autocomplete-hydrated-value-example.component.scss',
})
export class AutocompleteHydratedValueExampleComponent {
    protected readonly usersControl = new FormControl<
        (string | number | User)[]
    >([]);
    protected readonly value = toSignal(this.usersControl.valueChanges, {
        initialValue: this.usersControl.value,
    });

    protected users: User[] = [];

    protected fillWithPrimitiveValues() {
        this.usersControl.setValue(['usr-3010', 'usr-3011']);
    }

    protected fillWithHydratedUsers() {
        this.usersControl.setValue([
            {
                id: 'usr-2316',
                name: 'Emma Johnson',
                email: 'emma.johnson@company.com',
                department: 'Marketing',
            },
            {
                id: 'usr-2317',
                name: 'Michael Brown',
                email: 'michael.brown@company.com',
                department: 'Finance',
            },
        ]);
    }

    protected loadFreshOptions() {
        this.users = PRELOADED_USERS.map((user) => ({
            ...user,
            name: `${user.name} (fresh)`,
        }));
    }
}
