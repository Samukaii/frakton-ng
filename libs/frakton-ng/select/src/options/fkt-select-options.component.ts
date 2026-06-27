import {
    AfterViewInit,
    Component,
    effect,
    ElementRef,
    inject,
    input,
    output,
    TemplateRef,
    untracked,
    viewChildren,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { CallPipe } from 'frakton-ng/internal/pipes';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { Generic } from 'frakton-ng/internal/types';
import {
    FktSelectEmptyContext,
    FktSelectGroupContext,
    FktSelectItemContext,
    FktNormalizedSelectOption,
} from '../fkt-select.types';
import { FktSelectStoreService } from '../services/fkt-select-store.service';
import { FktSelectSelectionDirective } from '../directives/fkt-select-selection.directive';
import { FktSelectContextDirective } from '../directives/fkt-select-context.directive';

@Component({
    selector: 'fkt-select-options',
    imports: [
        NgTemplateOutlet,
        FktIconComponent,
        FktSpinnerComponent,
        CallPipe,
    ],
    templateUrl: './fkt-select-options.component.html',
    styleUrl: './fkt-select-options.component.scss',
})
export class FktSelectOptionsComponent<
    Option extends Generic | string | number,
>
    implements AfterViewInit
{
    readonly itemTemplate = input<TemplateRef<FktSelectItemContext<Option>>>();
    readonly groupTemplate =
        input<TemplateRef<FktSelectGroupContext<Option>>>();
    readonly headerTemplate = input<TemplateRef<unknown>>();
    readonly footerTemplate = input<TemplateRef<unknown>>();
    readonly emptyTemplate = input<TemplateRef<FktSelectEmptyContext>>();
    readonly select = output<FktNormalizedSelectOption<Option>>();

    protected readonly context = inject<FktSelectContextDirective<Option>>(
        FktSelectContextDirective
    );
    protected readonly store = inject<FktSelectStoreService<Option>>(
        FktSelectStoreService
    );
    protected readonly selection = inject<FktSelectSelectionDirective<Option>>(
        FktSelectSelectionDirective
    );
    private readonly items =
        viewChildren<ElementRef<HTMLLIElement>>('optionElement');

    private readonly scrollToActiveOption = effect(() => {
        const id = this.store.activeDescendant.id();

        untracked(() => {
            if (!this.store.activeDescendant.option().scroll) return;

            this.items()
                .find((item) => item.nativeElement.id === id)
                ?.nativeElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
        });
    });

    protected itemContext(
        option: FktNormalizedSelectOption<Option>,
        _selectedOptions: FktNormalizedSelectOption<Option>[]
    ): FktSelectItemContext<Option> {
        return {
            $implicit: option,
            isSelected: this.selection.isSelected(option),
        };
    }

    protected isSelected(
        option: FktNormalizedSelectOption<Option>,
        _selectedOptions: FktNormalizedSelectOption<Option>[]
    ) {
        return this.selection.isSelected(option);
    }

    ngAfterViewInit() {
        const selected = this.selection.selectedOptions()[0];

        if (!selected) return;

        const index = this.store
            .flattenedOptions()
            .findIndex((option) => option.value === selected.value);

        this.store.activeDescendant.setIndex(index, { scroll: true });
    }
}
