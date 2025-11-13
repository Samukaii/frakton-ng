import { Component, computed, input, Signal, WritableSignal } from '@angular/core';
import { DesignTokenItem } from '../../../../models/design-token-item';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktInputComponent } from 'frakton-ng/input';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { FktColorPickerComponent } from 'frakton-ng/color-picker';
import { FktIconComponent } from 'frakton-ng/icon';
import { FormControlSuffixDirective } from 'frakton-ng/forms';

@Component({
	selector: 'fkt-playground-design-tokens-item',
	imports: [
		FktButtonComponent,
		FktInputComponent,
		FktTooltipDirective,
		FktColorPickerComponent,
		FktIconComponent,
		FormControlSuffixDirective
	],
	templateUrl: './fkt-playground-design-tokens-item.component.html',
	styleUrl: './fkt-playground-design-tokens-item.component.scss'
})
export class FktPlaygroundDesignTokensItemComponent {
	designToken = input.required<DesignTokenItem>();
	templateSelector = input.required<string>();

	protected hasChanges = computed(() => {
		const token = this.designToken();

		return token.control() !== token.defaultValue;
	});

	protected async copyToken() {
		const token = this.designToken();

		let text = `${this.templateSelector()} {`;

		text += '\n';
		text += `  ${token.name}: ${token.control()};`
		text += '\n}';

		await navigator.clipboard.writeText(text);
	}

	protected resetToken() {
		const token = this.designToken();

		token.control.set(token.defaultValue);
	}

	protected onKeyDown(event: KeyboardEvent, control: WritableSignal<string>) {
		const keysMap: Record<string, ((event: KeyboardEvent, control: WritableSignal<string>) => void)> = {
			"ArrowUp": this.increaseNumber,
			"ArrowDown": this.decreaseNumber,
			"+": this.increaseNumber,
			"-": this.decreaseNumber,
		}

		keysMap[event.key]?.(event, control);
	}

	protected increaseNumber = (event: KeyboardEvent, control: WritableSignal<string>) => {
		this.updateSpacingValue(event, control, "increase")
	}

	protected decreaseNumber = (event: KeyboardEvent, control: WritableSignal<string>) => {
		this.updateSpacingValue(event, control, "decrease")
	}

	private updateSpacingValue(event: KeyboardEvent, control: WritableSignal<string>, operation: "increase" | "decrease") {
		event.preventDefault();

		const value = control();
		const numberPart = value.match(/-?\d*\.?\d+/)?.[0];

		if(!numberPart) return;

		let factor = 1;

		if(value.includes('rem'))
			factor = .25;

		if(event.shiftKey)
			factor = 10;

		if(event.ctrlKey)
			factor = 0.1;

		let asNumber = +numberPart + (operation === "increase" ? factor : factor * -1);

		if(asNumber.toString().length > asNumber.toFixed(2).length)
			asNumber = +asNumber.toFixed(2);

		control.set(value.replace(numberPart.toString(), asNumber.toString()));
	}
}
