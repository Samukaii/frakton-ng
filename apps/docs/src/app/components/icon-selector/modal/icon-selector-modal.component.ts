import { Component, computed, model, signal } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { FktIconName, fontIconNames } from 'frakton-ng/icon';
import { IconSelectorItemComponent } from '@/components/icon-selector/item/icon-selector-item.component';

@Component({
  selector: 'fkt-icon-selector-modal',
    imports: [
        FktInputComponent,
        IconSelectorItemComponent
    ],
  templateUrl: './icon-selector-modal.component.html',
  styleUrl: './icon-selector-modal.component.scss',
})
export class IconSelectorModalComponent {
    value = model<string>();
    allIcons  = fontIconNames as FktIconName[];

    search = signal('');

    filteredIcons = computed(() => {
        const search = this.search();

        return this.allIcons.filter(icon => icon.toLowerCase().includes(search.toLowerCase()));
    });
}
