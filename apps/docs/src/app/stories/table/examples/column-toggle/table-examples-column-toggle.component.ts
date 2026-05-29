import { Component, computed, inject, resource, signal } from '@angular/core';
import { FktTableColumn, FktTableComponent } from 'frakton-ng/table';
import { FktCheckboxComponent } from 'frakton-ng/checkbox';
import { User, UsersService } from '@/stories/table/services/users.service';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-table-examples-column-toggle',
    imports: [FktTableComponent, FktCheckboxComponent],
    templateUrl: './table-examples-column-toggle.component.html',
    styleUrl: './table-examples-column-toggle.component.scss',
})
export class TableExamplesColumnToggleComponent {
    private readonly service = inject(UsersService);

    protected readonly response = resource({
        loader: () => this.service.getAll(),
    });
    protected readonly data = computed(
        () => this.response.value()?.results ?? []
    );

    protected readonly columnToggles = signal([
        { key: 'id', label: 'Id', visible: signal(true) },
        { key: 'name', label: 'Name', visible: signal(true) },
        { key: 'email', label: 'Email', visible: signal(true) },
        { key: 'age', label: 'Age', visible: signal(true) },
        { key: 'joinedAt', label: 'Joined', visible: signal(true) },
    ]);

    private readonly allColumns: FktTableColumn<User>[] = [
        { key: 'id', header: 'ID', cell: (user) => user.id.toString() },
        { key: 'name', header: 'Name', cell: (user) => user.name },
        { key: 'email', header: 'Email', cell: (user) => user.email },
        { key: 'age', header: 'Age', cell: (user) => user.age.toString() },
        {
            key: 'joinedAt',
            header: 'Joined',
            cell: (user) => formatDate(user.joinedAt, 'mediumDate', 'en'),
        },
    ];

    protected readonly columns = computed(() => {
        const visible = this.columnToggles().map((toggle) =>
            toggle.visible() ? toggle.key : null
        );

        return this.allColumns.filter((column) => visible.includes(column.key));
    });
}
