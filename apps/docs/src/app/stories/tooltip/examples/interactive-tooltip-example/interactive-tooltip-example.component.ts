import { Component, input, signal } from '@angular/core';
import { FktSelectComponent } from 'frakton-ng/select';
import { FktInputComponent } from 'frakton-ng/input';
import { FktCheckboxComponent } from 'frakton-ng/checkbox';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { FktGeometryPosition, fktGeometryPositions } from 'frakton-ng/internal/types';
import { Field, form } from '@angular/forms/signals';

@Component({
	selector: 'interactive-tooltip-example',
	styleUrl: './interactive-tooltip-example.component.scss',
	templateUrl: './interactive-tooltip-example.component.html',
    imports: [FktSelectComponent, FktInputComponent, FktCheckboxComponent, FktTooltipDirective, Field]
})
export class InteractiveTooltipExampleComponent {
	tooltipColor = input('primary');

	positionOptions = fktGeometryPositions.map(position => ({
		value: position,
		label: this.formatPositionLabel(position)
	}));

	private value = signal({
		enabled: true,
		position: 'bottom-center' as FktGeometryPosition,
		text: 'This is a configurable tooltip message'
	});

	protected form = form(this.value);

	private formatPositionLabel(position: FktGeometryPosition): string {
		return position
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}
}
