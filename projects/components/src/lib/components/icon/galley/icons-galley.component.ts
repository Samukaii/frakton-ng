import { Component, computed, inject } from '@angular/core';
import { FktInputComponent } from '../../input/fkt-input.component';
import { SignalFormBuilder } from '../../../form/signal-form-builder';
import { IconsGalleryItemComponent } from './item/icons-gallery-item.component';
import { fktIcons } from '../../../static/fkt-icons';

@Component({
  selector: 'fkt-icons-galley',
	imports: [
		FktInputComponent,
		IconsGalleryItemComponent
	],
  templateUrl: './icons-galley.component.html',
  styleUrl: './icons-galley.component.scss'
})
export class IconsGalleyComponent {
	allIcons  = fktIcons;

	search = inject(SignalFormBuilder).control('');

	filteredIcons = computed(() => {
		const search = this.search.value();

		return this.allIcons.filter(icon => icon.toLowerCase().includes(search.toLowerCase()));
	});
}
