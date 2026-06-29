import { Component, signal } from "@angular/core";
import { FktButtonComponent } from "frakton-ng/button";
import { FktCheckboxComponent } from "frakton-ng/checkbox";
import { FormField, form } from '@angular/forms/signals';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
    selector: 'admin-settings-page',
    templateUrl: './admin-settings-page.component.html',
    imports: [
        FktButtonComponent,
        FktCheckboxComponent,
        FktFieldComponent,
        FktInputTextDirective,
        FormField,
    ],
    styleUrl: './admin-settings-page.component.scss',
})
export class AdminSettingsPageComponent {
    private value = signal({
        name: '',
        darkMode: false,
    });

    protected form = form(this.value);
}
