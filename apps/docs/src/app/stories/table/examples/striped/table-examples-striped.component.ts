import { Component, computed, inject, resource } from '@angular/core';
import { FktTableColumn, FktTableComponent } from 'frakton-ng/table';
import { User, UsersService } from '@/stories/table/services/users.service';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-table-examples-striped',
    imports: [FktTableComponent],
    templateUrl: './table-examples-striped.component.html',
    styleUrl: './table-examples-striped.component.scss',
})
export class TableExamplesStripedComponent {
    private readonly service = inject(UsersService);

    protected readonly response = resource({ loader: () => this.service.getAll() });
    protected readonly data = computed(() => this.response.value()?.results ?? []);

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
