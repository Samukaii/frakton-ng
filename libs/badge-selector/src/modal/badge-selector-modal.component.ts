import { Component, input, output } from '@angular/core';
import { outsideClickEffect, MarkUsed } from '@frakton-ng/internal/utils';
import { FktBadge } from '@frakton-ng/badge-selector';
import { FktIconComponent } from '@frakton-ng/icon';
import { FktBadgeComponent } from '@frakton-ng/badge';

@Component({
	selector: 'fkt-badge-selector-modal',
	imports: [FktBadgeComponent, FktIconComponent],
	templateUrl: './badge-selector-modal.component.html',
	styleUrl: './badge-selector-modal.component.scss',
})
export class BadgeSelectorModalComponent<Id extends string> {
	options = input.required<FktBadge<Id>[]>();
	selected = input<FktBadge<Id>>();
	select = output<FktBadge<Id>>();
	close = output();

	@MarkUsed()
	protected autoclose = outsideClickEffect(() => {
		this.close.emit();
	});
}
