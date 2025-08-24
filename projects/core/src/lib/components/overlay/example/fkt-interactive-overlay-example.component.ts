import { Component, inject, input, model, output, signal } from '@angular/core';
import { FktButtonComponent } from '../../button';
import { FktOverlayService } from '../fkt-overlay.service';
import { FktIconComponent } from '../../icon';
import { FktBadgeComponent } from '../../badge';

@Component({
	selector: 'fkt-interactive-overlay-demo',
	template: `
		<div class="p-4 space-y-4 min-w-80">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-2">
					<fkt-icon name="cursor-arrow-ripple" size="20" class="text-primary-600"></fkt-icon>
					<h3 class="text-lg font-semibold text-gray-900">{{title()}}</h3>
				</div>
				<fkt-badge
					[text]="counter().toString()"
					color="green"
					variant="opaque"
				></fkt-badge>
			</div>

			<p class="text-sm text-gray-600">{{description()}}</p>

			<div class="bg-gray-50 p-3 rounded-lg">
				<h4 class="text-sm font-medium text-gray-700 mb-2">Counter: {{counter()}}</h4>
				<div class="flex gap-2">
					<fkt-button
						icon="minus-circle"
						theme="basic"
						color="red"
						variant="icon"
						(click)="decrement()"
						[disabled]="counter() <= 0"
					></fkt-button>
					<fkt-button
						icon="plus-circle"
						theme="basic"
						color="green"
						variant="icon"
						(click)="increment()"
					></fkt-button>
					<fkt-button
						text="Reset"
						theme="basic"
						color="primary"
						size="sm"
						(click)="reset()"
					></fkt-button>
				</div>
			</div>

			@if(currentItems().length > 0) {
				<div class="space-y-2">
					<h4 class="text-sm font-medium text-gray-700">Items:</h4>
					<div class="max-h-32 overflow-y-auto space-y-1">
						@for(item of currentItems(); track $index) {
							<div class="flex items-center justify-between bg-white px-3 py-2 rounded border">
								<span class="text-sm">{{item}}</span>
								<button
									class="text-red-500 hover:text-red-700"
									(click)="removeItem($index)"
								>
									<fkt-button
										icon="x-mark"
										theme="basic"
										color="red"
										variant="icon"
										[disabled]="currentItems().length <= 1"
										(click)="decrement()"
									/>
								</button>
							</div>
						}
					</div>
				</div>
			}

			<div class="flex gap-2">
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

			<div class="flex gap-2 justify-end pt-2 border-t border-gray-200">
				<fkt-button
					text="Done"
					theme="raised"
					(click)="handleDone()"
				></fkt-button>
			</div>
		</div>
	`,
	standalone: true,
	imports: [FktButtonComponent, FktIconComponent, FktBadgeComponent]
})
export class FktInteractiveOverlayDemoComponent {
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


@Component({
	selector: 'interactive-overlay-example',
	template: `
		<div class="bg-blue-50 border-blue-200 border p-4 rounded-lg space-y-3 mb-4">
			<h4 class="font-medium">Shared State:</h4>
			<div class="flex items-center gap-4">
				<span>Counter: <strong>{{ sharedCounter() }}</strong></span>
				<span>Items: <strong>{{ sharedItems().length }}</strong></span>
			</div>
			<div class="text-sm text-gray-600">
				Changes made in overlays will update this shared state automatically.
			</div>
		</div>

		<div class="flex gap-2">
			<div #interactiveButton1>
				<fkt-button
					text="Counter Overlay"
					theme="stroked"
					color="primary"
					(click)="openCounterOverlay(interactiveButton1)"
				></fkt-button>
			</div>
			<fkt-button
				text="Reset All"
				theme="basic"
				color="red"
				(click)="resetAll()"
			></fkt-button>
		</div>
	`,
	standalone: true,
	imports: [FktButtonComponent]
})
export class FktInteractiveOverlayExampleComponent {
	private overlayService = inject(FktOverlayService);

	sharedCounter = signal(0);
	sharedItems = signal<string[]>(['Initial Item']);

	openCounterOverlay(nativeElement: HTMLElement) {
		const overlayRef = this.overlayService.open({
			anchorElementRef: {nativeElement},
			component: FktInteractiveOverlayDemoComponent,
			data: {
				title: 'Counter Demo',
				description: 'This overlay demonstrates reactive counter functionality.',
				counter: this.sharedCounter,
				currentItems: this.sharedItems,
				onDone: () => {
					console.log('Counter overlay done');
					overlayRef.close();
				}
			},
			panelOptions: {
				position: 'bottom-center',
				padding: '0',
				width: 'fit-content',
				disableAutoReposition: true,
				maxHeight: 'fit-content',
				borderRadius: '8px',
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)'
			}
		});
	}

	resetAll() {
		this.sharedCounter.set(0);
		this.sharedItems.set(['Initial Item']);
	}
}
