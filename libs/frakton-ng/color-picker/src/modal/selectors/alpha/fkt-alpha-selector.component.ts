import { Component, computed, ElementRef, inject, model, viewChild } from '@angular/core';
import { FktColorPickerHSV } from 'frakton-ng/internal/types';
import { fktColorFormatters } from 'frakton-ng/internal/utils';
import { clampNumber } from 'frakton-ng/internal/utils';
import { FKT_COLOR_PICKER_LOCALE_TOKEN } from '../../../injection-tokens/fkt-color-picker-locale-token';
import { getColorDescription } from '../../../helpers/get-color-description';

@Component({
	selector: 'fkt-alpha-selector',
	imports: [],
	templateUrl: './fkt-alpha-selector.component.html',
	styleUrl: './fkt-alpha-selector.component.scss'
})
export class FktAlphaSelectorComponent {
	value = model.required<FktColorPickerHSV>()
	protected locale = inject(FKT_COLOR_PICKER_LOCALE_TOKEN);

	protected description = computed(() => {
		let {alpha} = {...this.value()};

		alpha = Math.round(alpha);

		const colorDescription = getColorDescription(fktColorFormatters.hsl.fromHsv(this.value()), this.locale);

		return `${alpha}%, ${colorDescription}`;
	});

	protected background = computed(() => {
		const {hue, saturation, lightness} = fktColorFormatters.hsl.fromHsv(this.value());

		return `linear-gradient(90deg, hsla(${hue}, ${saturation}%, ${lightness}%, 0%), hsla(${hue}, ${saturation}%, ${lightness}%, 100%))`
	});

	protected percentage = computed(() => {
		return this.value().alpha + '%';
	});

	protected pickerColor = computed(() => {
		const {hue, saturation, lightness, alpha} = fktColorFormatters.hsl.fromHsv(this.value());

		return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha}%)`;
	})

	protected bar = viewChild.required('bar', {read: ElementRef});

	private onMove = (event: MouseEvent) => {
		const bar = this.bar().nativeElement as HTMLDivElement;
		const x = event.clientX;

		const barRect = bar.getBoundingClientRect();

		const min = 0;
		const max = barRect.width;
		const factor = 100;

		let alpha = ((Math.min(Math.max(x - barRect.x, min), max)) / max) * factor;
		alpha = +alpha.toFixed(2);

		this.value.update(value => ({...value, alpha}));
	}

	private finishMovement = () => {
		document.removeEventListener('mousemove', this.onMove)
		document.removeEventListener('mouseup', this.finishMovement)
	}

	protected startMovement() {
		document.addEventListener('mousemove', this.onMove)
		document.addEventListener('mouseup', this.finishMovement)
	}

	protected updateAlpha($event: Event, difference: number) {
		$event.preventDefault();

		this.value.update(value => ({
			...value,
			alpha: clampNumber(value.alpha + difference, 0, 100),
		}))
	}
}
