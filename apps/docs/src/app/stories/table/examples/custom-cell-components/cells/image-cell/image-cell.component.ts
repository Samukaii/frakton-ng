import { Component, input } from '@angular/core';

@Component({
    selector: 'app-image-cell',
    template: `
        <img
            class="product-image"
            [src]="src()"
            [alt]="alt()"
        />
    `,
    styles: [`
        .product-image {
            width: 100%;
            height: 44px;
            border-radius: 8px;
            object-fit: cover;
            display: block;
        }
    `],
})
export class ImageCellComponent {
    src = input.required<string>();
    alt = input<string>('');
}
