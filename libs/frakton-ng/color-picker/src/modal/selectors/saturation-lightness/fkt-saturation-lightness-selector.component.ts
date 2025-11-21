import { Component, computed, DOCUMENT, ElementRef, inject, model, signal, viewChild } from '@angular/core';
import { fktColorFormatters } from 'frakton-ng/internal/utils';
import { FktColorPickerHSV } from 'frakton-ng/internal/types';
import { clampNumber } from 'frakton-ng/internal/utils';
import { FKT_COLOR_PICKER_LOCALE_TOKEN } from '../../../injection-tokens/fkt-color-picker-locale-token';
import { getColorDescription } from '../../../helpers/get-color-description';

@Component({
	selector: 'fkt-saturation-lightness-selector',
	imports: [],
	templateUrl: './fkt-saturation-lightness-selector.component.html',
	styleUrl: './fkt-saturation-lightness-selector.component.scss',
})
export class FktSaturationLightnessSelectorComponent {
	value = model.required<FktColorPickerHSV>();

	private locale = inject(FKT_COLOR_PICKER_LOCALE_TOKEN);
    private readonly document = inject(DOCUMENT);

	protected backgroundColor = computed(() => {
		const color = `hsl(${this.value().hue}, 100%, 50%)`;

		return `linear-gradient(90deg, #ffff 0%, ${color} 100%)`
	});

	protected position = computed(() => {
		const {saturation, value} = this.value();

		return {
			top: `${(100 - value)}%`,
			left: `${saturation}%`
		}
	})
	protected moving = signal(false);
	protected movingSaturation = signal(true);
	protected movingLightness = signal(false);

	protected pickerColor = computed(() => {
		const {hue, saturation, lightness} = fktColorFormatters.hsl.fromHsv(this.value());

		return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
	});

	protected description = computed(() => {
		let {hue, saturation, value, alpha} = {...this.value()};

		hue = Math.round(hue);
		saturation = Math.round(saturation);
		value = Math.round(value);
		alpha = Math.round(alpha);

		const labels = this.locale.controls.hsv;
		const colorDescription = getColorDescription(fktColorFormatters.hsl.fromHsv(this.value()), this.locale);
		let description = `${labels.hue}: ${hue}°, ${labels.brightness}: ${value}%, ${labels.saturation}: ${saturation}%`

		if(alpha < 100)
			description += `, ${this.locale.controls.opacity}: ${alpha} %`

		description += `, ${colorDescription}`;

		return description;
	});

	protected bar = viewChild.required('bar', {read: ElementRef});

	private onMove = (event: MouseEvent) => {
		const {nativeElement: bar} = this.bar() as ElementRef<HTMLDivElement>;
		const x = event.clientX;
		const y = event.clientY;

		const barRect = bar.getBoundingClientRect();

		const minX = 0;
		const maxX = barRect.width;
		const minY = 0;
		const maxY = barRect.height;
		const factor = 100;

		let saturation = ((Math.min(Math.max(x - barRect.x, minX), maxX)) / maxX) * factor;
		let brightness = 100 - (((Math.min(Math.max(y - barRect.y, minY), maxY)) / maxY) * 100);

		saturation = +(saturation.toFixed(2))
		brightness = +(brightness.toFixed(2))

		this.value.update(value => {
			return {
				saturation,
				value: brightness,
				hue: value.hue,
				alpha: value.alpha,
			}
		});
	}

	private finishMovement = () => {
		this.document.removeEventListener('mousemove', this.onMove)
		this.document.removeEventListener('mouseup', this.finishMovement)
		this.moving.set(false);
	}

	protected startMovement($event: MouseEvent) {
		$event.preventDefault();
		this.document.addEventListener('mousemove', this.onMove)
		this.document.addEventListener('mouseup', this.finishMovement)
		this.moving.set(true);
	}

	updateSaturation($event: Event, difference: number) {
		$event.preventDefault();
		this.movingSaturation.set(true);
		this.movingLightness.set(false);

		this.value.update(value => {
			return {
				...value,
				saturation: clampNumber(value.saturation + difference, 0, 100),
			}
		})
	}

	updateBrightness($event: Event, difference: number) {
		$event.preventDefault();
		this.movingSaturation.set(false);
		this.movingLightness.set(true);

		this.value.update(value => {
			return {
				...value,
				value: clampNumber(value.value + difference, 0, 100),
			}
		})
	}
}
