import { Component, computed, contentChild, ElementRef, input, TemplateRef, viewChild } from '@angular/core';
import { FktIconName } from 'frakton-ng/icon';
import { FktTabLazyDirective } from '../fkt-tab-lazy.directive';

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
	hidden = input(false);
	private containerTemplate = viewChild.required('tab', {read: TemplateRef});
	private lazyContent = contentChild(FktTabLazyDirective);

	template = computed(() => this.lazyContent()?.template ?? this.containerTemplate());
}
