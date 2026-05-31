import { Component, computed, inject, resource } from '@angular/core';
import { FktTableColumn, FktTableComponent } from 'frakton-ng/table';
import { User, UsersService } from '@/stories/table/services/users.service';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-table-examples-basic-table',
    imports: [FktTableComponent],
    templateUrl: './table-examples-basic-table.component.html',
    styleUrl: './table-examples-basic-table.component.scss',
})
export class TableExamplesBasicTableComponent {
    private readonly service = inject(UsersService);
    protected readonly response = resource({ loader: () => this.service.getAll() });
    protected readonly data = computed(() => this.response.value()?.results ?? []);

    protected readonly columns: FktTableColumn<User>[] = [
        {
            key: 'id',
            header: 'ID',
            cell: (user) => user.id.toString(),
        },
        {
            key: 'name',
            header: 'Name',
            cell: (user) => user.name,
        },
        {
            key: 'joinedAt',
            header: 'Joined at',
            cell: (user) => formatDate(user.joinedAt, 'mediumDate', 'en'),
        },
        {
            key: 'age',
            header: 'Age',
            cell: (user) => user.age.toString(),
        },
    ];
}
