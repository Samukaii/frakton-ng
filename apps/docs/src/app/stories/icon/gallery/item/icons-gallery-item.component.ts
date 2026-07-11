import {
    Component,
    effect,
    ElementRef,
    inject,
    input,
    output,
} from '@angular/core';
import { FktIconComponent, FktIconName, FktIconVariant } from 'frakton-ng/icon';

@Component({
    selector: 'fkt-icons-gallery-item',
    imports: [FktIconComponent],
    templateUrl: './icons-gallery-item.component.html',
    styleUrl: './icons-gallery-item.component.scss',
})
export class IconsGalleryItemComponent {
    icon = input.required<FktIconName>();
    variant = input.required<FktIconVariant>();
    descendantActive = input.required<boolean>();
    descendantId = input.required<string>();

    copied = input(false);
    copyIcon = output();

    private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

    private readonly scrollToActive = effect(() => {
        if (!this.descendantActive()) return;

        this.elementRef.nativeElement.scrollIntoView({
            behavior: 'instant',
            block: 'nearest',
        });
    });
}
