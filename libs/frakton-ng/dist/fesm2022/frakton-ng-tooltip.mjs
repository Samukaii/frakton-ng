import * as i0 from '@angular/core';
import { input, inject, computed, Component, booleanAttribute, ElementRef, Directive } from '@angular/core';
import { OVERLAY_INFO, FktOverlayService } from 'frakton-ng/overlay';
import { outsideMouseEnterWatcher } from 'frakton-ng/internal/utils';

class FktTooltipComponent {
    text = input.required(...(ngDevMode ? [{ debugName: "text" }] : []));
    color = input(...(ngDevMode ? [undefined, { debugName: "color" }] : []));
    overlayInfo = inject(OVERLAY_INFO);
    colorMap = {
        red: '#ef4444',
        green: '#22c55e',
        primary: '#1f2937',
        yellow: '#eab308',
        blue: '#2B7FFFFF',
    };
    tipPositionMap = {
        'bottom-center': 'top-center',
        'bottom-end': 'top-end',
        'bottom-left': 'top-left',
        'bottom-right': 'top-right',
        'bottom-start': 'top-start',
        'left-center': 'right-center',
        'left-end': 'right-end',
        'left-start': 'right-start',
        'right-center': 'left-center',
        'right-end': 'left-end',
        'right-start': 'left-start',
        'top-center': 'bottom-center',
        'top-end': 'bottom-end',
        'top-left': 'bottom-left',
        'top-right': 'bottom-right',
        'top-start': 'bottom-start',
    };
    tooltipColor = computed(() => {
        return this.colorMap[this.color() ?? 'primary'];
    }, ...(ngDevMode ? [{ debugName: "tooltipColor" }] : []));
    tipPositionClass = computed(() => {
        const currentPosition = this.overlayInfo.currentPosition();
        const tipPosition = this.tipPositionMap[currentPosition ?? 'bottom-center'];
        return `message__tip--${tipPosition}`;
    }, ...(ngDevMode ? [{ debugName: "tipPositionClass" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTooltipComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.2.3", type: FktTooltipComponent, isStandalone: true, selector: "fkt-tooltip", inputs: { text: { classPropertyName: "text", publicName: "text", isSignal: true, isRequired: true, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "style.--color": "tooltipColor()" } }, ngImport: i0, template: "<div class=\"message\">\r\n\t<div\r\n\t\t[class]=\"'message__tip ' + tipPositionClass()\"></div>\r\n\r\n\t<div\r\n\t\tclass=\"message__content\">\r\n\t\t{{ text() }}\r\n\t</div>\r\n</div>\r\n", styles: ["*{box-sizing:border-box}:host{display:block;width:fit-content;position:relative;background-color:transparent;padding:var(--space-xs)}:host .message{position:relative}:host .message__content{position:relative;font-size:var(--font-size-sm);color:var(--color-neutral-100);font-weight:var(--font-semibold);padding:var(--space-xs);box-shadow:1px 8px 15px 5px #00000026;background-color:var(--color);border-radius:6px}:host .message__tip{position:absolute;border-top:solid 0 transparent;border-bottom:solid 10px var(--color);border-right:solid 5px transparent;border-left:solid 5px transparent}:host .message__tip.message__tip--left-center{top:50%;left:0;transform:translate(-100%) translateY(-50%) rotate(270deg)}:host .message__tip.message__tip--left-start{top:6px;left:0;transform:translate(-100%) translateY(0) rotate(270deg)}:host .message__tip.message__tip--left-end{bottom:6px;left:0;transform:translate(-100%) translateY(0) rotate(270deg)}:host .message__tip.message__tip--right-center{top:50%;right:0;transform:translate(100%) translateY(-50%) rotate(90deg)}:host .message__tip.message__tip--right-start{top:6px;right:0;transform:translate(100%) translateY(0) rotate(90deg)}:host .message__tip.message__tip--right-end{bottom:6px;right:0;transform:translate(100%) translateY(0) rotate(90deg)}:host .message__tip.message__tip--top-center{top:0;left:50%;transform:translate(-50%) translateY(-100%)}:host .message__tip.message__tip--top-start{top:0;left:6px;transform:translate(0) translateY(-100%)}:host .message__tip.message__tip--top-end{top:0;right:6px;transform:translate(0) translateY(-100%)}:host .message__tip.message__tip--top-left{transform:rotate(45deg);right:-5.0710678119px;top:-5.0710678119px}:host .message__tip.message__tip--top-right{transform:rotate(-45deg);left:-5.0710678119px;top:-5.0710678119px}:host .message__tip.message__tip--bottom-center{bottom:0;left:50%;transform:translate(50%) translateY(100%) rotate(180deg)}:host .message__tip.message__tip--bottom-start{bottom:0;left:6px;transform:translate(0) translateY(100%) rotate(180deg)}:host .message__tip.message__tip--bottom-end{bottom:0;right:6px;transform:translate(0) translateY(100%) rotate(180deg)}:host .message__tip.message__tip--bottom-left{transform:rotate(135deg);right:-5.0710678119px;bottom:-5.0710678119px}:host .message__tip.message__tip--bottom-right{transform:rotate(-135deg);left:-5.0710678119px;bottom:-5.0710678119px}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'fkt-tooltip', imports: [], host: {
                        '[style.--color]': 'tooltipColor()',
                    }, template: "<div class=\"message\">\r\n\t<div\r\n\t\t[class]=\"'message__tip ' + tipPositionClass()\"></div>\r\n\r\n\t<div\r\n\t\tclass=\"message__content\">\r\n\t\t{{ text() }}\r\n\t</div>\r\n</div>\r\n", styles: ["*{box-sizing:border-box}:host{display:block;width:fit-content;position:relative;background-color:transparent;padding:var(--space-xs)}:host .message{position:relative}:host .message__content{position:relative;font-size:var(--font-size-sm);color:var(--color-neutral-100);font-weight:var(--font-semibold);padding:var(--space-xs);box-shadow:1px 8px 15px 5px #00000026;background-color:var(--color);border-radius:6px}:host .message__tip{position:absolute;border-top:solid 0 transparent;border-bottom:solid 10px var(--color);border-right:solid 5px transparent;border-left:solid 5px transparent}:host .message__tip.message__tip--left-center{top:50%;left:0;transform:translate(-100%) translateY(-50%) rotate(270deg)}:host .message__tip.message__tip--left-start{top:6px;left:0;transform:translate(-100%) translateY(0) rotate(270deg)}:host .message__tip.message__tip--left-end{bottom:6px;left:0;transform:translate(-100%) translateY(0) rotate(270deg)}:host .message__tip.message__tip--right-center{top:50%;right:0;transform:translate(100%) translateY(-50%) rotate(90deg)}:host .message__tip.message__tip--right-start{top:6px;right:0;transform:translate(100%) translateY(0) rotate(90deg)}:host .message__tip.message__tip--right-end{bottom:6px;right:0;transform:translate(100%) translateY(0) rotate(90deg)}:host .message__tip.message__tip--top-center{top:0;left:50%;transform:translate(-50%) translateY(-100%)}:host .message__tip.message__tip--top-start{top:0;left:6px;transform:translate(0) translateY(-100%)}:host .message__tip.message__tip--top-end{top:0;right:6px;transform:translate(0) translateY(-100%)}:host .message__tip.message__tip--top-left{transform:rotate(45deg);right:-5.0710678119px;top:-5.0710678119px}:host .message__tip.message__tip--top-right{transform:rotate(-45deg);left:-5.0710678119px;top:-5.0710678119px}:host .message__tip.message__tip--bottom-center{bottom:0;left:50%;transform:translate(50%) translateY(100%) rotate(180deg)}:host .message__tip.message__tip--bottom-start{bottom:0;left:6px;transform:translate(0) translateY(100%) rotate(180deg)}:host .message__tip.message__tip--bottom-end{bottom:0;right:6px;transform:translate(0) translateY(100%) rotate(180deg)}:host .message__tip.message__tip--bottom-left{transform:rotate(135deg);right:-5.0710678119px;bottom:-5.0710678119px}:host .message__tip.message__tip--bottom-right{transform:rotate(-135deg);left:-5.0710678119px;bottom:-5.0710678119px}\n"] }]
        }] });

class FktTooltipDirective {
    fktTooltip = input.required(...(ngDevMode ? [{ debugName: "fktTooltip" }] : []));
    tooltipEnabled = input(true, ...(ngDevMode ? [{ debugName: "tooltipEnabled" }] : []));
    disableAutoReposition = input(false, ...(ngDevMode ? [{ debugName: "disableAutoReposition", transform: booleanAttribute }] : [{ transform: booleanAttribute }]));
    position = input('bottom-center', ...(ngDevMode ? [{ debugName: "position" }] : []));
    overlay = inject(FktOverlayService);
    overlayRef = null;
    elementRef = inject(ElementRef);
    outsideWatcher = outsideMouseEnterWatcher();
    show() {
        if (!this.tooltipEnabled())
            return;
        if (this.overlayRef)
            return;
        this.overlayRef = this.overlay.open({
            component: FktTooltipComponent,
            data: {
                text: this.fktTooltip(),
            },
            panelOptions: {
                width: 'fit-content',
                maxHeight: 'fit-content',
                minWidth: 'fit-content',
                position: this.position(),
                borderRadius: '0px',
                overflow: 'visible',
                padding: '0',
                boxShadow: 'none',
                backgroundColor: 'transparent',
                disableAutoReposition: this.disableAutoReposition(),
            },
            anchorElementRef: this.elementRef,
        });
        this.outsideWatcher.watch(() => {
            this.outsideWatcher.stop();
            this.hide();
        });
    }
    hide = () => {
        this.overlayRef?.close();
        this.overlayRef = null;
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTooltipDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "20.2.3", type: FktTooltipDirective, isStandalone: true, selector: "[fktTooltip]", inputs: { fktTooltip: { classPropertyName: "fktTooltip", publicName: "fktTooltip", isSignal: true, isRequired: true, transformFunction: null }, tooltipEnabled: { classPropertyName: "tooltipEnabled", publicName: "tooltipEnabled", isSignal: true, isRequired: false, transformFunction: null }, disableAutoReposition: { classPropertyName: "disableAutoReposition", publicName: "disableAutoReposition", isSignal: true, isRequired: false, transformFunction: null }, position: { classPropertyName: "position", publicName: "position", isSignal: true, isRequired: false, transformFunction: null } }, host: { listeners: { "mouseenter": "show();" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: FktTooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fktTooltip]',
                    host: {
                        '(mouseenter)': 'show();',
                    },
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FktTooltipDirective };
//# sourceMappingURL=frakton-ng-tooltip.mjs.map
