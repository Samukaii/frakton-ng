import { Component, computed, inject, resource, signal } from '@angular/core';
import { formatDate } from '@angular/common';
import {
    defineCells,
    FktTableColumn,
    FktTableComponent,
    FktTableFrozenRowsDirective,
} from 'frakton-ng/table';
import { User, UsersService } from '@/stories/table/services/users.service';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';

const cell = defineCells({
    actions: FktButtonsListComponent,
});

@Component({
    selector: 'app-table-examples-frozen-rows',
    imports: [FktTableComponent, FktTableFrozenRowsDirective],
    templateUrl: './table-examples-frozen-rows.component.html',
    styleUrl: './table-examples-frozen-rows.component.scss',
})
export class TableExamplesFrozenRowsComponent {
    private readonly service = inject(UsersService);

    protected readonly response = resource({
        loader: () => this.service.getAll({ pageSize: 20 }),
        defaultValue: { results: [], total: 0 },
    });

    private readonly lockedUserIds = signal(new Set<number>([]));

    private readonly allData = computed(() => this.response.value().results);

    protected readonly lockedUsers = computed(() => {
        const allData = this.allData();
        const lockedUserIds = this.lockedUserIds();

        return allData.filter((user) => lockedUserIds.has(user.id));
    });

    protected readonly unlockedUsers = computed(() => {
        const allData = this.allData();
        const lockedUserIds = this.lockedUserIds();

        return allData.filter((user) => !lockedUserIds.has(user.id));
    });

    protected readonly columns = computed<FktTableColumn<User>[]>(() => {
        const lockedUsers = this.lockedUserIds();

        return [
            { key: 'id', header: 'ID', cell: (user) => user.id.toString() },
            { key: 'name', header: 'Name', cell: (user) => user.name },
            { key: 'email', header: 'Email', cell: (user) => user.email },
            {
                key: 'joinedAt',
                header: 'Joined',
                cell: (user) => formatDate(user.joinedAt, 'mediumDate', 'en'),
            },
            { key: 'age', header: 'Age', cell: (user) => user.age.toString() },
            {
                key: 'actions',
                header: '',
                cell: (user) => {
                    const isLocked = lockedUsers.has(user.id);

                    return cell.actions({
                        actions: [
                            {
                                identifier: 'lock',
                                theme: 'basic',
                                color: 'primary',
                                ariaLabel: isLocked
                                    ? 'Unlock user'
                                    : 'Lock user',
                                icon: isLocked ? 'lock-open' : 'lock-closed',
                                click: () => {
                                    if (isLocked) this.unlockUser(user);
                                    else this.lockUser(user);
                                },
                            },
                        ],
                    });
                },
            },
        ];
    });

    private lockUser(user: User) {
        const lockedIds = new Set(this.lockedUserIds());

        lockedIds.add(user.id);

        this.lockedUserIds.set(lockedIds);
    }

    private unlockUser(user: User) {
        const lockedIds = new Set(this.lockedUserIds());

        lockedIds.delete(user.id);

        this.lockedUserIds.set(lockedIds);
    }
}
