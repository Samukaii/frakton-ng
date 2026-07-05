import { Component, input, output } from '@angular/core';
import { DropdownOption } from '../../dropdown-overlay-example/fkt-dropdown-overlay-example.component';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';

@Component({
	selector: 'fkt-dropdown-overlay-dialog',
	imports: [FktButtonLegacyComponent],
	templateUrl: './fkt-dropdown-overlay-dialog.component.html',
	styleUrl: './fkt-dropdown-overlay-dialog.component.scss'
})
export class FktDropdownOverlayDialogComponent {
	options = input<DropdownOption[]>([]);

	onOptionSelect = output<string>();

	handleOptionClick(option: DropdownOption) {
		if (!option.disabled) {
			this.onOptionSelect.emit(option.action);
		}
	}
}
