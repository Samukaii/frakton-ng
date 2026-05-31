import { Component, input } from '@angular/core';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
    selector: 'app-rating-cell',
    template: `
        <div class="rating">
            @for (star of stars; track star) {
                <span class="rating__star" [class.rating__star--filled]="star <= rating()">★</span>
            }
            <span class="rating__value">({{ rating() }})</span>
        </div>
    `,
    styles: [`
        .rating {
            display: flex;
            align-items: center;
            gap: 1px;
        }
        .rating__star {
            color: #d1d5db;
            font-size: 1.5rem;
            line-height: 1;
        }
        .rating__star--filled {
            color: #f59e0b;
        }
        .rating__value {
            font-size: 0.8rem;
            color: #6b7280;
            margin-left: 4px;
        }
    `],
})
export class RatingCellComponent {
    rating = input.required<number>();
    protected stars = [1, 2, 3, 4, 5];
}
