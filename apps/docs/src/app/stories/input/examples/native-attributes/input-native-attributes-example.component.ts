import { Component } from '@angular/core';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
    selector: 'app-input-native-attributes-example',
    imports: [FktFieldComponent, FktIconComponent, FktInputTextDirective],
    templateUrl: './input-native-attributes-example.component.html',
    styleUrl: './input-native-attributes-example.component.scss',
})
export class InputNativeAttributesExampleComponent {}
