import { Component, inject } from "@angular/core";
import { FktButtonComponent } from "frakton-ng/button";
import { FktCheckboxComponent } from "frakton-ng/checkbox";
import { FktInputComponent } from "frakton-ng/input";
import { SignalFormBuilder } from "frakton-ng/forms";

@Component({
	selector: 'admin-settings-page',
	templateUrl: './admin-settings-page.component.html',
	imports: [
		FktButtonComponent,
		FktCheckboxComponent,
		FktInputComponent
	],
	styleUrl: './admin-settings-page.component.scss'
})
export class AdminSettingsPageComponent {
	private fb = inject(SignalFormBuilder);

	protected form = this.fb.group({
		name: '',
		darkMode: false,
	})
}
