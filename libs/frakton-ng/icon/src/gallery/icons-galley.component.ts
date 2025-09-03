import { Component, computed, inject } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { SignalFormBuilder } from 'frakton-ng/forms';
import { IconsGalleryItemComponent } from './item/icons-gallery-item.component';
import { fontIconNames } from 'frakton-ng/icon';

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
	allIcons  = fontIconNames;

	search = inject(SignalFormBuilder).control('');

	filteredIcons = computed(() => {
		const search = this.search.value();

		return this.allIcons.filter(icon => icon.toLowerCase().includes(search.toLowerCase()));
	});
}
