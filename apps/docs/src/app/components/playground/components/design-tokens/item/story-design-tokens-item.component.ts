import { Component, computed, inject, input, Pipe, PipeTransform, signal, WritableSignal } from '@angular/core';
import { DesignTokenItem } from '@/models/design-token-item';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktInputComponent } from 'frakton-ng/input';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { FktColorPickerComponent } from 'frakton-ng/color-picker';
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';
import { FormControlSuffixDirective } from 'frakton-ng/forms';
import { wait } from 'frakton-ng/internal/utils';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { HumanizeDesignTokenPipe } from '@/pipes/humanize-design-token.pipe';
import {
    DesignTokenInfoComponent
} from '@/components/playground/components/design-tokens/info/design-token-info.component';


@Component({
    selector: 'app-story-design-tokens-item',
    imports: [
        FktButtonComponent,
        FktInputComponent,
        FktTooltipDirective,
        FktColorPickerComponent,
        FktIconComponent,
        FormControlSuffixDirective,
        HumanizeDesignTokenPipe,
    ],
    templateUrl: './story-design-tokens-item.component.html',
    styleUrl: './story-design-tokens-item.component.scss',
})
export class StoryDesignTokensItemComponent {
    designToken = input.required<DesignTokenItem>();
    templateSelector = input.required<string>();

    protected readonly copied = signal(false);
    private readonly overlayService = inject(FktOverlayService);
    protected overlayRef?: FktOverlayRef<DesignTokenInfoComponent>;

    protected hasChanges = computed(() => {
        const token = this.designToken();

        return token.control() !== token.defaultValue;
    });

    protected categoryIcon = computed<FktIconName | null>(() => {
        const token = this.designToken();

        const icons: Record<string, FktIconName> = {
            Typography: 'h2',
            Colors: 'paint-brush',
            Spacing: 'squares-2x2',
            Shape: 'rectangle-group',
            Effects: 'sparkles',
        };

        return icons[token.category];
    });

    protected async copyToken() {
        const token = this.designToken();

        const text = `${token.name}: ${token.control()};`;

        await navigator.clipboard.writeText(text);

        this.copied.set(true);
        await wait(1000);
        this.copied.set(false);
    }

    protected resetToken() {
        const token = this.designToken();

        token.control.set(token.defaultValue);
    }

    protected onKeyDown(event: KeyboardEvent, control: WritableSignal<string>) {
        const keysMap: Record<
            string,
            (event: KeyboardEvent, control: WritableSignal<string>) => void
        > = {
            ArrowUp: this.increaseNumber,
            ArrowDown: this.decreaseNumber,
            '+': this.increaseNumber,
            '-': this.decreaseNumber,
        };

        keysMap[event.key]?.(event, control);
    }

    protected increaseNumber = (
        event: KeyboardEvent,
        control: WritableSignal<string>
    ) => {
        this.updateSpacingValue(event, control, 'increase');
    };

    protected decreaseNumber = (
        event: KeyboardEvent,
        control: WritableSignal<string>
    ) => {
        this.updateSpacingValue(event, control, 'decrease');
    };

    private updateSpacingValue(
        event: KeyboardEvent,
        control: WritableSignal<string>,
        operation: 'increase' | 'decrease'
    ) {
        event.preventDefault();

        const value = control();
        const numberPart = value.match(/-?\d*\.?\d+/)?.[0];

        if (!numberPart) return;

        let factor = 1;

        if (value.includes('rem')) factor = 0.25;

        if (event.shiftKey) factor = 10;

        if (event.ctrlKey) factor = 0.1;

        let asNumber =
            +numberPart + (operation === 'increase' ? factor : factor * -1);

        if (asNumber.toString().length > asNumber.toFixed(2).length)
            asNumber = +asNumber.toFixed(2);

        control.set(value.replace(numberPart.toString(), asNumber.toString()));
    }

    protected openInfo(button: HTMLButtonElement) {
        this.overlayRef = this.overlayService.open({
            anchorElementRef: { nativeElement: button },
            component: DesignTokenInfoComponent,
            data: {
                token: this.designToken,
            },
            panelOptions: {
                autoCloseOnMouseOut: true,
                width: 'fit-content',
                focusTriggerOnClose: false,
            },
        });
    }
}
