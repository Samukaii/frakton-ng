import { Component, computed, inject, resource, signal } from '@angular/core';
import { FktTableColumn, FktTableComponent, FktTableSelection, FktTableSelectionDirective } from 'frakton-ng/table';
import { FktPaginatorComponent } from 'frakton-ng/paginator';
import { User, UsersService } from '@/stories/table/services/users.service';
import { FktButtonComponent } from 'frakton-ng/button';
import { formatDate } from '@angular/common';


@Component({
    selector: 'app-table-examples-row-selection',
    imports: [FktTableComponent, FktTableSelectionDirective, FktPaginatorComponent, FktButtonComponent],
    templateUrl: './table-examples-row-selection.component.html',
    styleUrl: './table-examples-row-selection.component.scss',
})
export class TableExamplesRowSelectionComponent {
    private readonly usersService = inject(UsersService);

    protected page = signal(1);
    protected pageSize = signal(10);
    protected selection = signal<FktTableSelection<User>>({
        selectAll: false,
        items: [],
    });

    protected response = resource({
        params: () => ({
            page: this.page(),
            pageSize: this.pageSize(),
        }),
        loader: async ({ params }) => this.usersService.getAll(params),
    });

    protected total = computed(() => this.response.value()?.total ?? 0);
    protected users = computed(() => this.response.value()?.results ?? []);

    protected selectionLabel = computed(() => {
        const selection = this.selection();

        if (selection.selectAll) return `All ${this.total()} users selected`;

        if (selection.items.length === 0) return 'No users selected';

        return `${selection.items.length} user${
            selection.items.length > 1 ? 's' : ''
        } selected`;
    });

    protected hasSelection = computed(() => {
        const selection = this.selection();
        return selection.selectAll || selection.items.length > 0;
    });

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
            key: 'email',
            header: 'Email',
            cell: (user) => user.email,
        },
        {
            key: 'joinedAt',
            header: 'Joined',
            cell: (user) => formatDate(user.joinedAt, 'mediumDate', 'en'),
        },
    ];
}
