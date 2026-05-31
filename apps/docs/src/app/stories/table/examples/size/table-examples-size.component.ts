import { Component, computed, inject, resource, signal } from '@angular/core';
import {
    FktTableColumn,
    FktTableComponent,
    FktTableSize,
} from 'frakton-ng/table';
import { User, UsersService } from '@/stories/table/services/users.service';
import { formatDate } from '@angular/common';
import {
    FktButtonGroupComponent,
    FktButtonGroupOption,
} from 'frakton-ng/button-group';

@Component({
    selector: 'app-table-examples-size',
    imports: [FktTableComponent, FktButtonGroupComponent],
    templateUrl: './table-examples-size.component.html',
    styleUrl: './table-examples-size.component.scss',
})
export class TableExamplesSizeComponent {
    private readonly service = inject(UsersService);

    protected readonly tableSize = signal<FktTableSize>('md');

    protected readonly response = resource({
        loader: () => this.service.getAll({ pageSize: 5 }),
    });
    protected readonly data = computed(
        () => this.response.value()?.results ?? []
    );

    protected readonly options: FktButtonGroupOption[] = [
        {
            id: 'sm',
            label: 'Small',
        },
        {
            id: 'md',
            label: 'Medium',
        },
        {
            id: 'lg',
            label: 'Large',
        },
    ];

    protected readonly columns: FktTableColumn<User>[] = [
        { key: 'id', header: 'ID', cell: (user) => user.id.toString() },
        { key: 'name', header: 'Name', cell: (user) => user.name },
        { key: 'email', header: 'Email', cell: (user) => user.email },
        {
            key: 'joinedAt',
            header: 'Joined',
            cell: (user) => formatDate(user.joinedAt, 'mediumDate', 'en'),
        },
        { key: 'age', header: 'Age', cell: (user) => user.age.toString() },
    ];
}
