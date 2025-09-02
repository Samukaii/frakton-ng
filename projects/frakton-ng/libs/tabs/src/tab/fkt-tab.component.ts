import { Component, computed, contentChild, input, TemplateRef, viewChild } from '@angular/core';
import { FktTabLazyDirective } from '../fkt-tab-lazy.directive';
import { FktIconName } from '@frakton-ng/icon';

@Component({
	selector: 'fkt-tab',
	exportAs: 'fktTab',
	imports: [],
	templateUrl: './fkt-tab.component.html',
	styleUrl: './fkt-tab.component.scss'
})
export class FktTabComponent {
	label = input.required<string>();
	key = input.required<string>();
	icon = input<FktIconName>();
	private containerTemplate = viewChild.required('tab', {read: TemplateRef});
	private lazyContent = contentChild(FktTabLazyDirective);

	template = computed(() => this.lazyContent()?.template ?? this.containerTemplate());
}
