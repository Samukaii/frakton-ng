import { Component, computed, ElementRef, inject, model, viewChild } from '@angular/core';
import { FktColorPickerHSV } from '../../../models/fkt-color-picker-hsv';
import { clampNumber } from 'frakton-ng/internal/utils';
import { FKT_COLOR_PICKER_LOCALE_TOKEN } from '../../../injection-tokens/fkt-color-picker-locale-token';
import { getColorDescription } from '../../../helpers/get-color-description';
import { fktColorFormatters } from '../../../../../internal/utils/fkt-color-formatters';

@Component({
  selector: 'fkt-hue-selector',
  imports: [],
  templateUrl: './fkt-hue-selector.component.html',
  styleUrl: './fkt-hue-selector.component.scss'
})
export class FktHueSelectorComponent {
	value = model.required<FktColorPickerHSV>();
	protected locale = inject(FKT_COLOR_PICKER_LOCALE_TOKEN);

	protected percentage = computed(() => {
		return ((this.value().hue / 360) * 100) + '%';
	});

	protected pickerColor = computed(() => {
		const {hue} = this.value();

		return `hsl(${hue}, 100%, 50%)`;
	})

	protected description = computed(() => {
		let {hue} = {...this.value()};

		hue = Math.round(hue);

		const colorDescription = getColorDescription(fktColorFormatters.hsl.fromHsv(this.value()), this.locale);

		return `${hue}°, ${colorDescription}`;
	});

	protected bar = viewChild.required('bar', {read: ElementRef});

	private onMove = (event: MouseEvent) => {
		const bar = this.bar().nativeElement as HTMLDivElement;
		const x = event.clientX;

		const barRect = bar.getBoundingClientRect();

		const min = 0;
		const max = barRect.width;
		const factor = 360;

		let hue = ((Math.min(Math.max(x - barRect.x, min), max)) / max) * factor;
		hue = +hue.toFixed(2);

		this.value.update(value => ({...value, hue}));
	}

	private finishMovement = () => {
		document.removeEventListener('mousemove', this.onMove)
		document.removeEventListener('mouseup', this.finishMovement)
	}

	protected startMovement() {
		document.addEventListener('mousemove', this.onMove)
		document.addEventListener('mouseup', this.finishMovement)
	}

	protected updateHue($event: Event, difference: number) {
		$event.preventDefault();

		this.value.update(value => ({
			...value,
			hue: clampNumber(value.hue + difference, 0, 360),
		}))
	}
}
