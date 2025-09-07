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
	template: `
		<div class="container">
			<div class="container__header">
				<div>
					<fkt-icon name="cursor-arrow-ripple" size="20" class="container__header-icon"></fkt-icon>
					<h3 class="container__header-title">{{ title() }}</h3>
				</div>
			</div>

			<p class="container__description">{{ description() }}</p>

			<hr>

			<div class="container__counter">
				<div class="container__counter-title">
					<h4>
						Counter:
					</h4>
					<fkt-badge
						[text]="counter().toString()"
						color="green"
					></fkt-badge>
				</div>

				<div class="container__counter-actions">
					<fkt-button
						icon="minus-circle"
						theme="basic"
						color="red"
						(click)="decrement()"
						[disabled]="counter() <= 0"
					></fkt-button>
					<fkt-button
						icon="plus-circle"
						theme="basic"
						color="green"
						(click)="increment()"
					></fkt-button>
					<fkt-button
						text="Reset"
						theme="stroked"
						color="primary"
						size="sm"
						(click)="reset()"
					></fkt-button>
				</div>
			</div>
			<hr>

			@if (currentItems().length > 0) {
				<div class="container__items">
					<h4 class="container__items-title">Items</h4>
					<div class="container__items-list">
						@for (item of currentItems(); track $index) {
							<div class="container__items-item">
								<span class="text-sm">{{ item }}</span>
								<fkt-button
									icon="x-mark"
									theme="basic"
									color="red"
									[disabled]="currentItems().length <= 1"
									(click)="removeItem($index)"
								/>
							</div>
						}
					</div>
				</div>
			}

			<div class="container__items-actions">
				<fkt-button
					class="w-fit h-fit"
					text="Add Item"
					theme="stroked"
					color="primary"
					(click)="addItem()"
				></fkt-button>
				<fkt-button
					text="Clear All"
					theme="stroked"
					color="red"
					(click)="clearItems()"
					[disabled]="currentItems().length <= 1"
				></fkt-button>
			</div>

			<hr>

			<div class="container__actions">
				<fkt-button
					text="Done"
					theme="raised"
					(click)="handleDone()"
				></fkt-button>
			</div>
		</div>
	`,
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
