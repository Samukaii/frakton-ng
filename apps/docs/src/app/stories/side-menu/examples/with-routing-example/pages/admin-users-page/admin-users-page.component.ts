import {Component} from "@angular/core";
import {FktTagComponent} from "frakton-ng/tag";
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'admin-users-page',
    templateUrl: './admin-users-page.component.html',
    imports: [FktTagComponent, FktButtonComponent],
    styleUrl: './admin-users-page.component.scss',
})
export class AdminUsersPageComponent {}
