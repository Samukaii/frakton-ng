import { Component, computed, ElementRef, inject, input, model, } from '@angular/core';
import { FktBadge } from './fkt-badge-selector.types';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { BadgeSelectorModalComponent } from './modal/badge-selector-modal.component';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktBadgeComponent } from 'frakton-ng/badge';
import { FormValueControl } from '@angular/forms/signals';

/**
 * A component that allows users to select badges from a dropdown modal.
 * Displays the currently selected badge and opens a modal overlay for selection.
 *
 * @example
 * ```html
 * <fkt-badge-selector
 *   [options]="badgeOptions"
 *   [(currentBadgeId)]="selectedBadgeId">
 * </fkt-badge-selector>
 * ```
 *
 * @example
 * ```typescript
 * export class MyComponent {
 *   badgeOptions: FktBadge<string>[] = [
 *     { id: 'urgent', text: 'Urgent', color: 'red' },
 *     { id: 'normal', text: 'Normal', color: 'blue' }
 *   ];
 *   selectedBadgeId = signal<string>('normal');
 * }
 * ```
 */
@Component({
	selector: 'fkt-badge-selector',
	imports: [FktBadgeComponent, FktIconComponent],
	templateUrl: './fkt-badge-selector.component.html',
	styleUrl: './fkt-badge-selector.component.scss',
})
export class FktBadgeSelectorComponent<Id extends string> implements FormValueControl<Id | null> {
	/**
	 * Array of badge options to display in the selector
	 * @required
	 */
	options = input.required<FktBadge<Id>[]>();

	/**
	 * Currently selected badge ID with two-way binding
	 */
	value = model<Id | null>(null);

	private overlay = inject(FktOverlayService);

	private ref: FktOverlayRef<BadgeSelectorModalComponent<Id>> | null =
		null;
	private elementRef = inject(ElementRef);

	protected selectedOption = computed(() => {
		const currentBadgeId = this.value();
		const options = this.options();

		return options.find(option => option.id === currentBadgeId);
	});

	protected select() {
		if (this.ref) return;

		this.ref = this.overlay.open({
			component: BadgeSelectorModalComponent<Id>,
			data: {
				options: this.options,
				selected: this.selectedOption,
				select: badge => {
					this.value.set(badge.id);
					this.close();
				},
			},
			anchorElementRef: this.elementRef,
			panelOptions: {
				position: 'bottom-start',
				minWidth: 'fit-content',
				width: 'fit-content',
				maxHeight: 'fit-content',
				onAutoClose: () => {
					this.close();
				}
			},
		});
	}

	private close() {
		this.ref?.close();
		this.ref = null;
	}
}
