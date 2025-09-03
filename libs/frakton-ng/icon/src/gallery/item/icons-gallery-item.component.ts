import { Component, input, signal } from '@angular/core';
import { wait } from 'frakton-ng/internal/utils';
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';

@Component({
  selector: 'fkt-icons-gallery-item',
	imports: [
		FktIconComponent
	],
  templateUrl: './icons-gallery-item.component.html',
  styleUrl: './icons-gallery-item.component.scss'
})
export class IconsGalleryItemComponent {
	icon = input.required<FktIconName>();

	copied = signal(false);
	showActions = signal(false);

	protected async copyTemplate() {
		const icon = this.icon();
		this.copied.set(true);

		await navigator.clipboard.writeText('<fkt-icon\n' +
			'\t\t\tclass="text-xl"\n' +
			`\t\t\tname="${icon}"\n` +
			'\t\t/>');

		await wait(1000);

		this.copied.set(false);
	}

	protected async copyIconName() {
		const icon = this.icon();
		this.copied.set(true);

		await navigator.clipboard.writeText(icon);

		await wait(1000);

		this.copied.set(false);
	}
}
