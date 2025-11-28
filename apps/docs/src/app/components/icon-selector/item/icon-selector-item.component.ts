import { Component, input, output } from '@angular/core';
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';

@Component({
  selector: 'fkt-icon-selector-item',
    imports: [
        FktIconComponent
    ],
  templateUrl: './icon-selector-item.component.html',
  styleUrl: './icon-selector-item.component.scss',
})
export class IconSelectorItemComponent {
    selected = input.required<boolean>();
    icon = input.required<FktIconName>();
    select = output();
}
