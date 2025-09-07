import { Component, input, model, output } from '@angular/core';
import { FktBadgeComponent } from 'frakton-ng/badge';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
	selector: 'fkt-interactive-overlay-dialog',
	imports: [
		FktBadgeComponent,
		FktIconComponent,
		FktButtonComponent
	],
	templateUrl: './fkt-interactive-overlay-dialog.component.html',
	styleUrl: './fkt-interactive-overlay-dialog.component.scss'
})
export class FktInteractiveOverlayDialogComponent {
	title = input('Interactive Demo');
	description = input('This overlay demonstrates reactive signals and interactive components.');

	counter = model(0);
	currentItems = model<string[]>([]);

	onDone = output<void>();

	increment() {
		const newValue = this.counter() + 1;
		this.counter.set(newValue);
	}

	decrement() {
		if (this.counter() > 0) {
			const newValue = this.counter() - 1;
			this.counter.set(newValue);
		}
	}

	reset() {
		this.counter.set(0);
	}

	addItem() {
		const itemNumber = this.currentItems().length + 1;
		const newItem = `Item ${itemNumber}`;
		const newItems = [...this.currentItems(), newItem];
		this.currentItems.set(newItems);
	}

	removeItem(index: number) {
		const newItems = this.currentItems().filter((_, i) => i !== index);
		this.currentItems.set(newItems);
	}

	clearItems() {
		this.currentItems.set(['Initial Item']);
	}

	handleDone() {
		this.onDone.emit();
	}
}
