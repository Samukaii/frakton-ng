import {
    Component,
    computed,
    inject,
    resource,
    TemplateRef,
    viewChild,
} from '@angular/core';
import { FktTableColumn, FktTableComponent } from 'frakton-ng/table';
import { User, UsersService } from '@/stories/table/services/users.service';

@Component({
    selector: 'app-table-examples-custom-header',
    imports: [FktTableComponent],
    templateUrl: './table-examples-custom-header.component.html',
    styleUrl: './table-examples-custom-header.component.scss',
})
export class TableExamplesCustomHeaderComponent {
    private readonly usersService = inject(UsersService);

    protected response = resource({
        loader: async () => this.usersService.getAll(),
    });

    protected users = computed(() => this.response.value()?.results ?? []);

    protected totalUsers = computed(() => this.users().length);

    protected averageAge = computed(() => {
        const users = this.users();
        if (!users.length) return 0;
        return Math.round(users.reduce((sum, user) => sum + user.age, 0) / users.length);
    });

    private readonly nameHeader = viewChild.required<TemplateRef<any>>('nameHeader');
    private readonly ageHeader = viewChild.required<TemplateRef<any>>('ageHeader');

    protected columns: FktTableColumn<User>[] = [
        {
            key: 'name',
            header: () => this.nameHeader(),
            cell: (user) => user.name,
        },
        {
            key: 'email',
            header: 'Email',
            cell: (user) => user.email,
        },
        {
            key: 'age',
            header: () => this.ageHeader(),
            cell: (user) => user.age.toString(),
        },
        {
            key: 'joinedAt',
            header: 'Joined at',
            cell: (user) => new Date(user.joinedAt).toLocaleDateString('en-US', { dateStyle: 'medium' }),
        },
    ];
}
