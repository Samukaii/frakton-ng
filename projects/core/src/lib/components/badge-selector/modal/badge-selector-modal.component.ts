import { Component, input, output } from '@angular/core';
import { MarkUsed } from '../../../utils/mark-used';
import { outsideClickEffect } from '../../../utils/outside-click-effect';
import { FktBadge } from '../fkt-badge-selector.types';
import { FktIconComponent } from '../../icon';
import { FktBadgeComponent } from '../../badge';

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
