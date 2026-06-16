import { Component, signal } from "@angular/core";
import { FktButtonComponent } from "frakton-ng/button";
import { FktCheckboxComponent } from "frakton-ng/checkbox";
import { FktInputOldComponent } from 'frakton-ng/input-old';
import { Field, form } from '@angular/forms/signals';

@Component({
	selector: 'admin-settings-page',
	templateUrl: './admin-settings-page.component.html',
	imports: [
		FktButtonComponent,
		FktCheckboxComponent,
		FktInputOldComponent,
		Field
	],
	styleUrl: './admin-settings-page.component.scss'
})
export class AdminSettingsPageComponent {
	private value = signal({
		name: '',
		darkMode: false,
	})

	protected form = form(this.value);
}
