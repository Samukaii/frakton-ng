import { Component } from "@angular/core";
import { FktButtonComponent } from "frakton-ng/button";
import { FktTagComponent } from "frakton-ng/tag";

@Component({
	selector: 'admin-users-page',
	templateUrl: './admin-users-page.component.html',
	imports: [
		FktButtonComponent,
		FktTagComponent
	],
	styleUrl: './admin-users-page.component.scss'
})
export class AdminUsersPageComponent {
}
