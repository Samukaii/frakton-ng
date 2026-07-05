import { Component, computed, model, signal } from '@angular/core';
import { FktIconComponent, FktIconName, fktIconNames } from 'frakton-ng/icon';
import { IconSelectorItemComponent } from '@/components/icon-selector/item/icon-selector-item.component';
import { FktFieldComponent, FktFieldPrefixDirective } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import { debounce, form, FormField } from '@angular/forms/signals';

@Component({
    selector: 'fkt-icon-selector-modal',
    imports: [
        FktFieldComponent,
        FktFieldPrefixDirective,
        FktIconComponent,
        FktInputTextDirective,
        FormField,
        IconSelectorItemComponent,
    ],
  templateUrl: './icon-selector-modal.component.html',
  styleUrl: './icon-selector-modal.component.scss',
})
export class IconSelectorModalComponent {
    value = model<string>();
    allIcons  = fktIconNames as FktIconName[];

    search = form(signal(''), (field) => {
        debounce(field, 300);
    });

    filteredIcons = computed(() => {
        const search = this.search().value();

        return this.allIcons.filter(icon => icon.toLowerCase().includes(search.toLowerCase()));
    });
}
