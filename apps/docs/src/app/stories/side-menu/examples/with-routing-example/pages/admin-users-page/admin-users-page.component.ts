import { Component } from "@angular/core";
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { FktTagComponent } from "frakton-ng/tag";

@Component({
	selector: 'admin-users-page',
	templateUrl: './admin-users-page.component.html',
	imports: [
		FktButtonLegacyComponent,
		FktTagComponent
	],
	styleUrl: './admin-users-page.component.scss'
})
export class AdminUsersPageComponent {
}
