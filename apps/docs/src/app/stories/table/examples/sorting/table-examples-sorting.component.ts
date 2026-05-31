import { Component, computed, inject, resource, signal } from '@angular/core';
import {
    FktTableColumn,
    FktTableComponent,
    FktTableSortEvent,
} from 'frakton-ng/table';
import { FktPaginatorComponent } from 'frakton-ng/paginator';
import { User, UsersService } from '@/stories/table/services/users.service';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-table-examples-sorting',
    imports: [FktTableComponent, FktPaginatorComponent],
    templateUrl: './table-examples-sorting.component.html',
    styleUrl: './table-examples-sorting.component.scss',
})
export class TableExamplesSortingComponent {
    private readonly usersService = inject(UsersService);

    protected pageSize = signal(10);
    protected page = signal(1);
    protected sortEvent = signal<FktTableSortEvent | null>(null);

    protected response = resource({
        params: () => ({
            page: this.page(),
            pageSize: this.pageSize(),
            sort: this.sortEvent(),
        }),
        loader: async ({ params }) => this.usersService.getAll(params),
    });

    protected total = computed(() => this.response.value()?.total ?? 0);
    protected users = computed(() => this.response.value()?.results ?? []);

    protected onSort(event: FktTableSortEvent | null) {
        this.sortEvent.set(event);
        this.page.set(1);
    }

    protected columns: FktTableColumn<User>[] = [
        {
            key: 'id',
            header: 'ID',
            allowSorting: true,
            cell: (user) => user.id.toString(),
        },
        {
            key: 'name',
            header: 'Name',
            allowSorting: true,
            cell: (user) => user.name,
        },
        {
            key: 'joinedAt',
            header: 'Joined at',
            allowSorting: true,
            cell: (user) => formatDate(user.joinedAt, 'mediumDate', 'en'),
        },
        {
            key: 'age',
            header: 'Age',
            allowSorting: true,
            cell: (user) => user.age.toString(),
        },
    ];
}
