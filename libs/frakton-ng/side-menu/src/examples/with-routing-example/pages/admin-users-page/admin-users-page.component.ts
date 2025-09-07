import { Component } from "@angular/core";
import { FktButtonComponent } from "frakton-ng/button";
import { FktBadgeComponent } from "frakton-ng/badge";

@Component({
	selector: 'admin-users-page',
	templateUrl: './admin-users-page.component.html',
	imports: [
		FktButtonComponent,
		FktBadgeComponent
	],
	styleUrl: './admin-users-page.component.scss'
})
export class AdminUsersPageComponent {
}
