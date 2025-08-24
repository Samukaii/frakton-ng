import { Component, computed, contentChild, input, TemplateRef, viewChild } from '@angular/core';
import { TabLazyDirective } from '../../../directives';
import { FktIconName } from '../../../shared/types';

@Component({
	selector: 'fkt-tab',
	exportAs: 'appTab',
	imports: [],
	templateUrl: './tab.component.html',
	styleUrl: './tab.component.scss'
})
export class TabComponent {
	label = input.required<string>();
	key = input.required<string>();
	icon = input<FktIconName>();
	private containerTemplate = viewChild.required('tab', {read: TemplateRef});
	private lazyContent = contentChild(TabLazyDirective);

	template = computed(() => this.lazyContent()?.template ?? this.containerTemplate());
}
