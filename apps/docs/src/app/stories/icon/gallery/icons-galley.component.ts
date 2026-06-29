import { Component, computed, signal } from '@angular/core';
import { IconsGalleryItemComponent } from './item/icons-gallery-item.component';
import { FktIconComponent, FktIconName, fontIconNames } from 'frakton-ng/icon';
import { FktFieldComponent, FktFieldPrefixDirective } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import { FormsModule } from '@angular/forms';
import { debounce, form, FormField } from '@angular/forms/signals';

@Component({
    selector: 'fkt-icons-galley',
    imports: [
        IconsGalleryItemComponent,
        FktFieldComponent,
        FktInputTextDirective,
        FormsModule,
        FktIconComponent,
        FktFieldPrefixDirective,
        FormField,
    ],
    templateUrl: './icons-galley.component.html',
    styleUrl: './icons-galley.component.scss',
})
export class IconsGalleyComponent {
    allIcons = fontIconNames as FktIconName[];

    search = form(signal(''), (field) => {
        debounce(field, 300);
    });

    filteredIcons = computed(() => {
        const search = this.search().value();

        return this.allIcons.filter((icon) =>
            icon.toLowerCase().includes(search.toLowerCase())
        );
    });
}
