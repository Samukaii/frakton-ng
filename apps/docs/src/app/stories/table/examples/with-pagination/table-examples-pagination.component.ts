import { Component, computed, inject, resource, signal } from '@angular/core';
import { FktTableColumn, FktTableComponent } from 'frakton-ng/table';
import { FktPaginatorComponent } from 'frakton-ng/paginator';
import { User, UsersService } from '@/stories/table/services/users.service';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-table-examples-with-pagination',
    imports: [FktTableComponent, FktPaginatorComponent],
    templateUrl: './table-examples-pagination.component.html',
    styleUrl: './table-examples-pagination.component.scss',
})
export class TableExamplesPaginationComponent {
    private readonly usersService = inject(UsersService);

    protected pageSize = signal(10);
    protected page = signal(1);

    protected response = resource({
        params: () => ({ page: this.page(), pageSize: this.pageSize() }),
        loader: async ({ params }) => this.usersService.getAll(params),
    });

    protected total = computed(() => this.response.value()?.total ?? 0);
    protected users = computed(() => this.response.value()?.results ?? []);

    protected columns: FktTableColumn<User>[] = [
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
