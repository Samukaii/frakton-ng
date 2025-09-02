import { Component, computed, input } from '@angular/core';
import { fontIconsMap } from './static/font-icons-map';
import { FktIconName } from './fkt-icon-name';

@Component({
	selector: 'fkt-icon',
	imports: [],
	templateUrl: './fkt-icon.component.html',
	styleUrl: './fkt-icon.component.scss',
})
export class FktIconComponent {
	name = input.required<FktIconName>();
	protected icon = computed(() => fontIconsMap[this.name()]);
}
