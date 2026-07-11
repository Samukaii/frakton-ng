import {Component, computed, ElementRef, signal, viewChild, viewChildren,} from '@angular/core';
import {IconsGalleryItemComponent} from './item/icons-gallery-item.component';
import {FktIconComponent, FktIconName, fktIconNames, FktIconVariant,} from 'frakton-ng/icon';
import {FktFieldComponent, FktFieldPrefixDirective} from 'frakton-ng/field';
import {FktInputTextDirective} from 'frakton-ng/input-text';
import {FormsModule} from '@angular/forms';
import {debounce, form, FormField} from '@angular/forms/signals';
import {useActiveDescendantGrid, wait, watchGridColumns,} from 'frakton-ng/internal/utils';
import {filterIcons} from '@/stories/icon/gallery/search-metadata';
import {FktButtonGroupComponent, FktButtonGroupOption,} from 'frakton-ng/button-group';

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
        FktButtonGroupComponent,
    ],
    templateUrl: './icons-galley.component.html',
    styleUrl: './icons-galley.component.scss',
})
export class IconsGalleyComponent {
    allIcons = signal<FktIconName[]>(fktIconNames);

    items = viewChildren(IconsGalleryItemComponent);

    protected readonly copiedIcons = signal<FktIconName[]>([]);

    private readonly gallery = viewChild.required('gallery', {
        read: ElementRef<HTMLElement>,
    });

    private static idCounter = 0;

    protected readonly galleryId = `icons-gallery-${IconsGalleyComponent.idCounter++}`;

    protected readonly columns = watchGridColumns(this.gallery);
    protected readonly variant = signal<FktIconVariant>('outline');

    protected readonly filteredIcons = computed(() => {
        const search = this.search().value();

        return filterIcons(this.allIcons(), search);
    });

    protected readonly options: FktButtonGroupOption[] = [
        {
            label: 'Outline',
            id: 'outline',
        },
        {
            label: 'Solid',
            id: 'solid',
        },
        {
            label: 'Mini',
            id: 'mini',
        },
        {
            label: 'Micro',
            id: 'micro',
        },
    ];

    protected readonly grid = useActiveDescendantGrid({
        items: this.filteredIcons,
        columnsCount: this.columns,
        onSelect: (item) => {
            this.copyIconName(item);
        },
    });

    async copyIconName(icon: FktIconName) {
        this.copiedIcons.update((icons) => [...icons, icon]);

        await navigator.clipboard.writeText(icon);

        await wait(1000);

        this.copiedIcons.update((icons) =>
            icons.filter((copiedIcon) => copiedIcon !== icon)
        );
    }

    protected readonly search = form(signal(''), (field) => {
        debounce(field, 300);
    });
}
