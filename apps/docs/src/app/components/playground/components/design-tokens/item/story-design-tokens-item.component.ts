import { Component, computed, inject, input, signal } from '@angular/core';
import { DesignTokenItem } from '@/models/design-token-item';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';
import { wait } from 'frakton-ng/internal/utils';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { HumanizeDesignTokenPipe } from '@/pipes/humanize-design-token.pipe';
import { DesignTokenInfoComponent } from '@/components/playground/components/design-tokens/info/design-token-info.component';
import { DesignTokenSizeControlComponent } from '../controls/size/design-token-size-control.component';
import { DesignTokenWeightControlComponent } from '../controls/weight/design-token-weight-control.component';
import { DesignTokenOpacityControlComponent } from '../controls/opacity/design-token-opacity-control.component';
import { DesignTokenShadowControlComponent } from '../controls/shadow/design-token-shadow-control.component';
import { DesignTokenColorControlComponent } from '../controls/color/design-token-color-control.component';
import { DesignTokenSpacingControlComponent } from '../controls/spacing/design-token-spacing-control.component';
import { DesignTokenTransitionControlComponent } from '@/components/playground/components/design-tokens/controls/transition/design-token-transition-control.component';
import { FktButtonComponent } from 'frakton-ng/button';
import { createClipboardCopy } from '@/utils/create-clipboard-copy';
import {
    DesignTokenTextDecorationControlComponent
} from "@/components/playground/components/design-tokens/controls/text-decoration/design-token-text-decoration-control.component";

@Component({
    selector: 'app-story-design-tokens-item',
    imports: [
        FktButtonComponent,
        FktTooltipDirective,
        FktIconComponent,
        HumanizeDesignTokenPipe,
        DesignTokenSizeControlComponent,
        DesignTokenWeightControlComponent,
        DesignTokenOpacityControlComponent,
        DesignTokenShadowControlComponent,
        DesignTokenColorControlComponent,
        DesignTokenSpacingControlComponent,
        DesignTokenTransitionControlComponent,
        DesignTokenTextDecorationControlComponent,
    ],
    templateUrl: './story-design-tokens-item.component.html',
    styleUrl: './story-design-tokens-item.component.scss',
})
export class StoryDesignTokensItemComponent {
    designToken = input.required<DesignTokenItem>();
    templateSelector = input.required<string>();

    private readonly overlayService = inject(FktOverlayService);
    protected overlayRef?: FktOverlayRef<DesignTokenInfoComponent>;

    protected readonly clipboard = createClipboardCopy(async () => {
        const token = this.designToken();

        return `${token.name}: ${token.control()};`;
    });

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

    protected resetToken() {
        const token = this.designToken();

        token.control.set(token.defaultValue);
    }

    protected openInfo(button: HTMLButtonElement) {
        this.overlayRef = this.overlayService.open({
            anchorElementRef: { nativeElement: button },
            component: DesignTokenInfoComponent,
            data: {
                token: this.designToken,
                templateSelector: this.templateSelector,
            },
            panelOptions: {
                autoCloseOnMouseOut: true,
                width: 'fit-content',
                focusTriggerOnClose: false,
            },
        });
    }
}
