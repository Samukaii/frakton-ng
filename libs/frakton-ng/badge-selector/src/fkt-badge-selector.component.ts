import { Component, computed, ElementRef, inject, input, model, } from '@angular/core';
import { FktBadge } from './fkt-badge-selector.types';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { BadgeSelectorModalComponent } from './modal/badge-selector-modal.component';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktBadgeComponent } from 'frakton-ng/badge';


@Component({
	selector: 'fkt-badge-selector',
	imports: [FktBadgeComponent, FktIconComponent],
	templateUrl: './fkt-badge-selector.component.html',
	styleUrl: './fkt-badge-selector.component.scss',
})
export class FktBadgeSelectorComponent<Id extends string> {
	options = input.required<FktBadge<Id>[]>();
	currentBadgeId = model<Id>();

	private overlay = inject(FktOverlayService);

	private ref: FktOverlayRef<BadgeSelectorModalComponent<Id>> | null =
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
			},
			anchorElementRef: this.elementRef,
			panelOptions: {
				position: 'bottom-start',
				minWidth: 'fit-content',
				width: 'fit-content',
				maxHeight: 'fit-content',
				outsideClick: () => {
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
