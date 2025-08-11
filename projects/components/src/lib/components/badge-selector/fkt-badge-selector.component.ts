import { Component, computed, ElementRef, inject, input, model, } from '@angular/core';
import { AttachedOverlayService } from '../attached-overlay/attached-overlay.service';
import { BadgeSelectorModalComponent } from './modal/badge-selector-modal.component';
import { AttachedOverlayRef } from '../attached-overlay/models/attached-overlay-ref';
import { FktIconComponent } from '../icon';
import { FktBadgeComponent } from '../badge';
import { FktBadge } from './fkt-badge-selector.types';

@Component({
	selector: 'fkt-badge-selector',
	imports: [FktBadgeComponent, FktIconComponent],
	templateUrl: './fkt-badge-selector.component.html',
	styleUrl: './fkt-badge-selector.component.scss',
})
export class FktBadgeSelectorComponent<Id extends string> {
	options = input.required<FktBadge<Id>[]>();
	currentBadgeId = model<Id>();

	private overlay = inject(AttachedOverlayService);

	private ref: AttachedOverlayRef<BadgeSelectorModalComponent<Id>> | null =
		null;
	private elementRef = inject(ElementRef);

	protected selectedOption = computed(() => {
		const currentBadgeId = this.currentBadgeId();
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
					this.currentBadgeId.set(badge.id);
					this.close();
				},
				close: () => {
					this.close();
				},
			},
			anchorElementRef: this.elementRef,
			panelOptions: {
				position: 'bottom-start',
				minWidth: 'fit-content',
				width: 'fit-content',
				maxHeight: 'fit-content',
			},
		});
	}

	private close() {
		this.ref?.close();
		this.ref = null;
	}
}
