import { Component, inject } from '@angular/core';
import { FktSelectComponent } from 'frakton-ng/select';
import { FktInputComponent } from 'frakton-ng/input';
import { FktCheckboxComponent } from 'frakton-ng/checkbox';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { SignalFormBuilder } from 'frakton-ng/forms';
import { FktGeometryPosition, fktGeometryPositions } from 'frakton-ng/internal/types';
import { FktFormComponent } from 'frakton-ng/form';

@Component({
	selector: 'interactive-tooltip-example',
	styleUrl: './interactive-tooltip-example.component.scss',
	templateUrl: './interactive-tooltip-example.component.html',
	imports: [FktSelectComponent, FktInputComponent, FktCheckboxComponent, FktTooltipDirective, FktFormComponent]
})
export class InteractiveTooltipExampleComponent {
	positionOptions = fktGeometryPositions.map(position => ({
		value: position,
		label: this.formatPositionLabel(position)
	}));
	private fb = inject(SignalFormBuilder);
	form = this.fb.group({
		enabled: true,
		position: 'bottom-center' as FktGeometryPosition,
		text: 'This is a configurable tooltip message'
	});

	private formatPositionLabel(position: FktGeometryPosition): string {
		return position
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}
}
