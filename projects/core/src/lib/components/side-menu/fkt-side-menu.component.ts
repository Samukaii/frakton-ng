import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { SideMenuService } from './side-menu.service';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuGroup } from '../../../shared/models/menu-group';
import { TooltipDirective } from '../../../shared/directives/tooltip.directive';

@Component({
	selector: 'fkt-side-menu',
	imports: [
		SidebarComponent,
		IconComponent,
		RouterLink,
		RouterLinkActive,
		TooltipDirective,
	],
	templateUrl: './side-menu.component.html',
	styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
	protected service = inject(SideMenuService);

	groups: MenuGroup[] = [
		{
			name: 'Família',
			items: [
				{
					name: 'Divisão de contas',
					icon: 'scale',
					path: '/home/family-bills',
				},
			],
		},
		{
			name: 'Salário',
			items: [
				{
					name: 'Assinaturas',
					icon: 'credit-card',
					path: '/home/subscriptions',
				},
				{
					name: 'Ganhos',
					icon: 'currency-dollar',
					path: '/home/earnings',
				},
				{
					name: 'Alocação mensal',
					icon: 'chart-bar-square',
					path: '/home/monthly-allocation',
				},
			],
		},
		{
			name: "Planejamento",
			items: [
				{
					name: 'Metas anuais',
					icon: 'rocket-launch',
					path: '/home/goals',
				},

				{
					name: 'Metas mensais',
					icon: 'wallet',
					path: '/home/monthly-goals',
				},

			],
		}
	];
}
