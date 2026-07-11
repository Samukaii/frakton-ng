import {Component, signal} from "@angular/core";
import {FktCheckboxComponent} from "frakton-ng/checkbox";
import {form, FormField} from '@angular/forms/signals';
import {FktFieldComponent} from 'frakton-ng/field';
import {FktInputTextDirective} from 'frakton-ng/input-text';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'admin-settings-page',
    templateUrl: './admin-settings-page.component.html',
    imports: [
        FktCheckboxComponent,
        FktFieldComponent,
        FktInputTextDirective,
        FormField,
        FktButtonComponent,
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
