import { Component, computed, signal } from '@angular/core';
import { FktNavigatorComponent } from 'frakton-ng/navigator';

@Component({
	selector: 'item-navigation-example',
	templateUrl: './item-navigation-example.component.html',
	imports: [FktNavigatorComponent]
})
export class ItemNavigationExampleComponent {
	protected items = [
		{title: 'First Item', description: 'This is the first item in the list'},
		{title: 'Second Item', description: 'This is the second item in the list'},
		{title: 'Third Item', description: 'This is the third item in the list'}
	];
	protected currentIndex = signal(0);

	protected currentItem = computed(() => {
		return this.items[this.currentIndex()];
	});

	protected previousItem() {
		if (this.canGoToPrevious()) {
			this.currentIndex.update(index => index - 1);
		}
	}

	protected nextItem() {
		if (this.canGoToNext()) {
			this.currentIndex.update(index => index + 1);
		}
	}

	protected canGoToPrevious = computed(() => {
		return this.currentIndex() > 0;
	});

	protected canGoToNext = computed(() => {
		return this.currentIndex() < this.items.length - 1;
	});
}
