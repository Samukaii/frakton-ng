import { Component, inject, input } from '@angular/core';
import { FktMenuGroup, FktSideMenuComponent } from 'frakton-ng/side-menu';
import { RouterOutlet, Routes } from '@angular/router';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktCheckboxComponent } from 'frakton-ng/checkbox';
import { FktInputComponent } from 'frakton-ng/input';
import { SignalFormBuilder } from 'frakton-ng/forms';
import { FktBadgeComponent } from 'frakton-ng/badge';

@Component({
	selector: 'admin-dashboard-page',
	template: `
		<div class="admin-page admin-dashboard">
			<h1 class="admin-page__title">Dashboard</h1>
			<div class="admin-page__content">
				<p class="admin-dashboard__welcome">Bem-vindo ao painel de administração! Aqui você visualiza métricas e
					acessos rápidos.</p>
				<div class="admin-dashboard__stats">
					<div class="admin-dashboard__stat">
						<span class="admin-dashboard__stat-label">Usuários ativos</span>
						<span class="admin-dashboard__stat-value">1.245</span>
					</div>
					<div class="admin-dashboard__stat">
						<span class="admin-dashboard__stat-label">Novos cadastros</span>
						<span class="admin-dashboard__stat-value">38</span>
					</div>
					<div class="admin-dashboard__stat">
						<span class="admin-dashboard__stat-label">Visitas hoje</span>
						<span class="admin-dashboard__stat-value">8.102</span>
					</div>
				</div>
			</div>
		</div>
	`,
	styles: `
		* {
			box-sizing: border-box;
		}

		:host {
			display: block;
			height: 100%;
		}

		.admin-page {
			padding: 40px 24px;
			height: 100%;
			background: #fafbfc;
		}

		.admin-page__title {
			font-size: 2.2rem;
			margin-bottom: 18px;
			font-weight: 700;
			color: #30363d;
		}

		.admin-page__content {
			background: #fff;
			border-radius: 10px;
			box-shadow: 0 2px 12px #0f172a12;
			padding: 32px;
		}

		.admin-dashboard__welcome {
			margin-bottom: 24px;
			color: #58617a;
		}

		.admin-dashboard__stats {
			display: flex;
			gap: 32px;
		}

		.admin-dashboard__stat {
			background: #f3f4f6;
			border-radius: 8px;
			padding: 24px 18px;
			flex: 1;
			text-align: center;
		}

		.admin-dashboard__stat-label {
			font-size: 1rem;
			color: #767e95;
		}

		.admin-dashboard__stat-value {
			font-size: 2rem;
			font-weight: 600;
			color: #4A5565FF;
			margin-top: 8px;
			display: block;
		}
	`
})
export class AdminDashboardPageComponent {
}

@Component({
	selector: 'admin-users-page',
	template: `
		<div class="admin-page admin-users">
			<h1 class="admin-page__title">Gestão de Usuários</h1>
			<div class="admin-page__content">
				<p class="admin-users__subtitle">Acompanhe, edite e remova usuários cadastrados.</p>
				<ul class="admin-users__list">
					<li class="admin-users__item">
						<span class="admin-users__avatar">AB</span>
						<span class="admin-users__name">Ana Beatriz</span>
						<fkt-badge
							text="Administrador"
							color="orange"
						/>
						<fkt-button
							text="Editar"
						/>
					</li>
					<li class="admin-users__item">
						<span class="admin-users__avatar">RF</span>
						<span class="admin-users__name">Rafael Ferreira</span>
						<fkt-badge
							text="Usuário"
							color="blue"
						/>
						<fkt-button
							text="Editar"
						/>
					</li>
					<li class="admin-users__item">
						<span class="admin-users__avatar">JG</span>
						<span class="admin-users__name">João Guilherme</span>
						<fkt-badge
							text="Usuário"
							color="blue"
						/>
						<fkt-button
							text="Editar"
						/>
					</li>
				</ul>
			</div>
		</div>
	`,
	imports: [
		FktButtonComponent,
		FktBadgeComponent
	],
	styles: `
		* {
			box-sizing: border-box;
		}

		:host {
			display: block;
			height: 100%;
		}

		.admin-page {
			padding: 40px 24px;
			height: 100%;
			background: #fafbfc;
		}

		.admin-page__title {
			font-size: 2.2rem;
			margin-bottom: 18px;
			font-weight: 700;
			color: #30363d;
		}

		.admin-page__content {
			background: #fff;
			border-radius: 10px;
			box-shadow: 0 2px 12px #0f172a12;
			padding: 32px;
		}

		.admin-users__subtitle {
			margin-bottom: 22px;
			color: #58617a;
		}

		.admin-users__list {
			list-style: none;
			padding: 0;
			margin: 0;
		}

		.admin-users__item {
			display: flex;
			align-items: center;
			gap: 18px;
			padding: 18px 0;
			border-bottom: 1px solid #f1f2f4;
		}

		.admin-users__avatar {
			background: rgba(74, 85, 101, 0.14);
			color: #4A5565FF;
			border-radius: 50%;
			width: 38px;
			height: 38px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: 700;
			font-size: 1.1rem;
		}

		.admin-users__name {
			flex: 1;
			font-weight: 500;
			color: #29304b;
		}
	`
})
export class AdminUsersPageComponent {
}

@Component({
	selector: 'admin-settings-page',
	template: `
		<div class="admin-page admin-settings">
			<h1 class="admin-page__title">Configurações do Sistema</h1>
			<div class="admin-page__content">
				<form class="admin-settings__form">
					<fkt-input
						label="Nome da aplicação"
						placeholder="Informe aqui o nome da aplicação"
						[control]="form.controls.name"
					/>
					<fkt-checkbox
						label="Modo escuro"
						[control]="form.controls.darkMode"
					/>
					<fkt-button
						type="submit"
						text="Salvar configurações"
					/>
				</form>
			</div>
		</div>
	`,
	imports: [
		FktButtonComponent,
		FktCheckboxComponent,
		FktInputComponent
	],
	styles: `
		* {
			box-sizing: border-box;
		}

		:host {
			display: block;
			height: 100%;
		}

		.admin-page {
			padding: 40px 24px;
			height: 100%;
			background: #fafbfc;
		}

		.admin-page__title {
			font-size: 2.2rem;
			margin-bottom: 18px;
			font-weight: 700;
			color: #30363d;
		}

		.admin-page__content {
			background: #fff;
			border-radius: 10px;
			box-shadow: 0 2px 12px #0f172a12;
			padding: 32px;
		}

		.admin-settings__form {
			display: flex;
			flex-direction: column;
			gap: .5rem;

			fkt-button {
				margin-top: 1rem;
			}
		}
	`
})
export class AdminSettingsPageComponent {
	private fb = inject(SignalFormBuilder);

	protected form = this.fb.group({
		name: '',
		darkMode: false,
	})
}


export const WITH_ROUTING_EXAMPLE_ROUTES: Routes = [
	{
		path: "dashboard",
		component: AdminDashboardPageComponent,
	},
	{
		path: "users",
		component: AdminUsersPageComponent,
	},
	{
		path: "settings",
		component: AdminSettingsPageComponent,
	},
	{
		path: "**",
		redirectTo: "dashboard",
	}
];

@Component({
	selector: 'with-routing-example',
	template: `
		<div class="with-routing-example">
			<fkt-side-menu
				[groups]="groups()"
				[opened]="opened()"
			>
				<router-outlet/>
			</fkt-side-menu>
		</div>
	`,
	styleUrl: './with-routing-example.component.scss',
	standalone: true,
	imports: [FktSideMenuComponent, RouterOutlet]
})
export class WithRoutingExampleComponent {
	groups = input.required<FktMenuGroup[]>();
	opened = input<boolean>(true);
}
