import { Component, computed, inject, resource, signal } from '@angular/core';
import { FktTableColumn, FktTableComponent } from 'frakton-ng/table';
import { User, UsersService } from '@/stories/table/services/users.service';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-table-examples-row-click',
    imports: [FktTableComponent],
    templateUrl: './table-examples-row-click.component.html',
    styleUrl: './table-examples-row-click.component.scss',
})
export class TableExamplesRowClickComponent {
    private readonly service = inject(UsersService);
    private readonly response = resource({ loader: () => this.service.getAll() });
    protected readonly data = computed(() => this.response.value()?.results ?? []);

    protected selectedUser = signal<User | null>(null);

    protected columns: FktTableColumn<User>[] = [
        { key: 'id', header: 'ID', cell: (user) => user.id.toString() },
        { key: 'name', header: 'Name', cell: (user) => user.name },
        { key: 'email', header: 'Email', cell: (user) => user.email },
        { key: 'age', header: 'Age', cell: (user) => user.age.toString() },
        {
            key: 'joinedAt',
            header: 'Joined at',
            cell: (user) => formatDate(user.joinedAt, 'mediumDate', 'en'),
        },
    ];
}
