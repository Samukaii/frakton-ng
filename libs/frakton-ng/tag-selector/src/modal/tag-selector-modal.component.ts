import { Component, input, output } from '@angular/core';
import { outsideClickEffect, MarkUsed } from 'frakton-ng/internal/utils';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktTagComponent } from 'frakton-ng/tag';
import { FktTag } from '../fkt-tag-selector.types';

@Component({
	selector: 'fkt-badge-selector-modal',
	imports: [FktTagComponent, FktIconComponent],
	templateUrl: './tag-selector-modal.component.html',
	styleUrl: './tag-selector-modal.component.scss',
})
export class TagSelectorModalComponent<Id extends string> {
	options = input.required<FktTag<Id>[]>();
	selected = input<FktTag<Id>>();
	select = output<FktTag<Id>>();
	close = output();

	@MarkUsed()
	protected autoclose = outsideClickEffect(() => {
		this.close.emit();
	});
}
