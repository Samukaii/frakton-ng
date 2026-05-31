import { Component, inject, resource, signal } from '@angular/core';
import { FktTableColumn, FktTableComponent } from 'frakton-ng/table';
import { User, UsersService } from '@/stories/table/services/users.service';
import { formatDate } from '@angular/common';
import { FktToggleComponent } from 'frakton-ng/toggle';

@Component({
    selector: 'app-table-examples-loading',
    imports: [FktTableComponent, FktToggleComponent],
    templateUrl: './table-examples-loading.component.html',
    styleUrl: './table-examples-loading.component.scss',
})
export class TableExamplesLoadingComponent {
    private readonly service = inject(UsersService);

    protected readonly response = resource({
        loader: () => this.service.getAll(),
    });

    protected readonly loading = signal(false);

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
