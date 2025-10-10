import { Component, computed, signal } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { IconsGalleryItemComponent } from './item/icons-gallery-item.component';
import { FktIconName, fontIconNames } from 'frakton-ng/icon';

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
	allIcons  = fontIconNames as FktIconName[];

	search = signal('');

	filteredIcons = computed(() => {
		const search = this.search();

		return this.allIcons.filter(icon => icon.toLowerCase().includes(search.toLowerCase()));
	});
}
