import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FktButtonContentDirective } from './directives/fkt-button-content.directive';
import { FktButtonLoadingIndicatorDirective } from './directives/fkt-button-loading-indicator.directive';
import { FktButtonComponent } from './fkt-button.component';

@Component({
    imports: [
        FktButtonComponent,
    ],
    template: `
        <button
            fktButton
            label="Save"
            name="intent"
            value="save"
            [loading]="loading()"
            [loadingPosition]="loadingPosition()"
            [disabled]="disabled()"
            [icon]="icon()"
            [suffixIcon]="suffixIcon()"
        >
        </button>
    `,
})
class ButtonHostComponent {
    readonly loading = signal(false);
    readonly loadingPosition = signal<'start' | 'end'>('start');
    readonly disabled = signal(false);
    readonly icon = signal<'check' | undefined>(undefined);
    readonly suffixIcon = signal<'chevron-right' | undefined>(undefined);
}

@Component({
    imports: [FktButtonComponent, FktButtonLoadingIndicatorDirective],
    template: `
        <button fktButton label="Upload" loading>
            <span fktButtonLoadingIndicator data-testid="custom-loader">
                Loading
            </span>
        </button>
    `,
})
class CustomLoadingIndicatorHostComponent {}

@Component({
    imports: [FktButtonComponent, FktButtonContentDirective],
    template: `
        <button fktButton label="Open profile">
            <span fktButtonContent data-testid="custom-content">
                Profile
            </span>
        </button>
    `,
})
class CustomContentHostComponent {}

@Component({
    imports: [FktButtonComponent, FktButtonContentDirective],
    template: `
        <button fktButton label="Open profile">
            <span fktButtonContent fill data-testid="custom-content">
                Profile
            </span>
        </button>
    `,
})
class FillCustomContentHostComponent {}

@Component({
    imports: [FktButtonComponent],
    template: `
        <button
            fktButton
            label="Delete"
            icon="trash"
            iconOnly
            [loading]="loading()"
        ></button>
    `,
})
class IconOnlyHostComponent {
    readonly loading = signal(false);
}

@Component({
    imports: [FktButtonComponent],
    template: `
        <button
            fktButton
            label="Delete"
            color="danger"
            appearance="stroked"
            shape="sharp"
            size="sm"
            type="submit"
        ></button>
    `,
})
class ButtonVariantsHostComponent {}

@Component({
    imports: [FktButtonComponent],
    template: `
        <button
            fktButton
            label="Brand"
            color="oklch(55% 0.24 292)"
            labelColor="navy"
        ></button>
    `,
})
class CustomCssColorHostComponent {}

@Component({
    imports: [FktButtonComponent],
    template: `
        <button
            fktButton
            data-testid="red"
            label="Red"
            color="red"
        ></button>
        <button
            fktButton
            data-testid="navy"
            label="Navy"
            color="navy"
        ></button>
    `,
})
class AutomaticCssColorHostComponent {}

@Component({
    imports: [FktButtonComponent],
    template: `
        <a
            fktButton
            href="/docs"
            label="Docs"
            [disabled]="disabled()"
            [loading]="loading()"
            (click)="$event.preventDefault(); clicked.set(clicked() + 1)"
        ></a>
    `,
})
class AnchorHostComponent {
    readonly clicked = signal(0);
    readonly disabled = signal(false);
    readonly loading = signal(false);
}

describe('FktButtonComponent', () => {
    it('renders the required label and preserves native button attributes', () => {
        const fixture = TestBed.createComponent(ButtonHostComponent);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.textContent).toContain('Save');
        expect(button.querySelector('.surface')).not.toBeNull();
        expect(button.type).toBe('button');
        expect(button.name).toBe('intent');
        expect(button.value).toBe('save');
        expect(button.getAttribute('aria-label')).toBeNull();
    });

    it('uses custom content as the visual content and keeps label as aria-label', () => {
        const fixture = TestBed.createComponent(CustomContentHostComponent);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.getAttribute('aria-label')).toBe('Open profile');
        expect(button.querySelector('.label')).toBeNull();
        expect(
            button.querySelector('[data-testid="custom-content"]')
        ).not.toBeNull();
    });

    it('allows custom content to fill the button surface', () => {
        const fixture = TestBed.createComponent(FillCustomContentHostComponent);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');
        const content: HTMLElement = fixture.nativeElement.querySelector(
            '[data-testid="custom-content"]'
        );

        expect(button.hasAttribute('data-fkt-content-fill')).toBeTrue();
        expect(content.hasAttribute('data-fkt-fill')).toBeTrue();
    });

    it('replaces the start icon while loading and derives disabled state', () => {
        const fixture = TestBed.createComponent(ButtonHostComponent);
        fixture.componentInstance.icon.set('check');
        fixture.componentInstance.loading.set(true);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.disabled).toBeTrue();
        expect(button.hasAttribute('data-fkt-loading')).toBeTrue();
        expect(button.hasAttribute('data-fkt-disabled')).toBeFalse();
        expect(button.getAttribute('aria-busy')).toBe('true');
        expect(button.textContent).toContain('Save');
        expect(button.querySelector('.surface')).not.toBeNull();
        expect(button.querySelector('fkt-icon')).toBeNull();
        expect(button.querySelector('.spinner')).not.toBeNull();
    });

    it('replaces the suffix icon when loading at the end', () => {
        const fixture = TestBed.createComponent(ButtonHostComponent);
        fixture.componentInstance.suffixIcon.set('chevron-right');
        fixture.componentInstance.loadingPosition.set('end');
        fixture.componentInstance.loading.set(true);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.textContent).toContain('Save');
        expect(button.querySelector('fkt-icon')).toBeNull();
        expect(button.querySelector('.spinner')).not.toBeNull();
    });

    it('renders only the built-in icon in icon-only mode', () => {
        const fixture = TestBed.createComponent(IconOnlyHostComponent);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.getAttribute('aria-label')).toBe('Delete');
        expect(button.hasAttribute('data-fkt-icon-only')).toBeTrue();
        expect(button.querySelector('.label')).toBeNull();
        expect(button.querySelector('fkt-icon')).not.toBeNull();
    });

    it('replaces the icon in icon-only mode while loading', () => {
        const fixture = TestBed.createComponent(IconOnlyHostComponent);
        fixture.componentInstance.loading.set(true);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.querySelector('fkt-icon')).toBeNull();
        expect(button.querySelector('.spinner')).not.toBeNull();
    });

    it('keeps explicit disabled state visually authoritative while loading', () => {
        const fixture = TestBed.createComponent(ButtonHostComponent);
        fixture.componentInstance.loading.set(true);
        fixture.componentInstance.disabled.set(true);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.disabled).toBeTrue();
        expect(button.hasAttribute('data-fkt-loading')).toBeTrue();
        expect(button.hasAttribute('data-fkt-disabled')).toBeTrue();
    });

    it('uses a projected loading indicator instead of the default spinner', () => {
        const fixture = TestBed.createComponent(
            CustomLoadingIndicatorHostComponent
        );
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(
            button.querySelector('[data-testid="custom-loader"]')
        ).not.toBeNull();
        expect(button.querySelector('.spinner')).toBeNull();
    });

    it('exposes its visual variants as styling attributes', () => {
        const fixture = TestBed.createComponent(ButtonVariantsHostComponent);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.type).toBe('submit');
        expect(button.getAttribute('data-fkt-color')).toBe('danger');
        expect(button.getAttribute('data-fkt-appearance')).toBe('stroked');
        expect(button.getAttribute('data-fkt-shape')).toBe('sharp');
        expect(button.getAttribute('data-fkt-size')).toBe('sm');
        expect(button.hasAttribute('data-fkt-variant')).toBeFalse();
    });

    it('does not apply button-only attributes to anchor hosts', () => {
        const fixture = TestBed.createComponent(AnchorHostComponent);
        fixture.detectChanges();

        const anchor: HTMLAnchorElement =
            fixture.nativeElement.querySelector('a');

        expect(anchor.getAttribute('type')).toBeNull();
        expect(anchor.hasAttribute('disabled')).toBeFalse();
        expect(anchor.getAttribute('aria-disabled')).toBeNull();
        expect(anchor.getAttribute('tabindex')).toBeNull();

        anchor.click();

        expect(fixture.componentInstance.clicked()).toBe(1);
    });

    it('uses aria-disabled and blocks activation when anchor hosts are disabled', () => {
        const fixture = TestBed.createComponent(AnchorHostComponent);
        fixture.componentInstance.disabled.set(true);
        fixture.detectChanges();

        const anchor: HTMLAnchorElement =
            fixture.nativeElement.querySelector('a');

        expect(anchor.hasAttribute('disabled')).toBeFalse();
        expect(anchor.getAttribute('aria-disabled')).toBe('true');
        expect(anchor.getAttribute('tabindex')).toBe('-1');
        expect(anchor.hasAttribute('data-fkt-disabled')).toBeTrue();

        anchor.click();

        expect(fixture.componentInstance.clicked()).toBe(0);
    });

    it('blocks anchor activation while loading without marking it as visually disabled', () => {
        const fixture = TestBed.createComponent(AnchorHostComponent);
        fixture.componentInstance.loading.set(true);
        fixture.detectChanges();

        const anchor: HTMLAnchorElement =
            fixture.nativeElement.querySelector('a');

        expect(anchor.hasAttribute('disabled')).toBeFalse();
        expect(anchor.getAttribute('aria-disabled')).toBe('true');
        expect(anchor.getAttribute('tabindex')).toBe('-1');
        expect(anchor.hasAttribute('data-fkt-loading')).toBeTrue();
        expect(anchor.hasAttribute('data-fkt-disabled')).toBeFalse();

        anchor.click();

        expect(fixture.componentInstance.clicked()).toBe(0);
    });

    it('accepts arbitrary CSS colors and an explicit text color', () => {
        const fixture = TestBed.createComponent(
            CustomCssColorHostComponent
        );
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.getAttribute('data-fkt-color')).toBe('custom');
        expect(button.hasAttribute('data-fkt-variant')).toBeFalse();
        expect(
            button.style.getPropertyValue(
                '--_fkt-button-custom-color'
            )
        ).toBe('oklch(55% 0.24 292)');
        expect(
            button.style.getPropertyValue(
                '--_fkt-button-explicit-text-color'
            )
        ).toBe('navy');
    });

    it('derives a contrasting text color from resolved CSS colors', () => {
        const fixture = TestBed.createComponent(
            AutomaticCssColorHostComponent
        );
        fixture.detectChanges();

        const readRenderedColor = (
            element: HTMLElement
        ): Uint8ClampedArray => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d', {
                willReadFrequently: true,
            });

            if (!context) throw new Error('Canvas is not supported.');

            context.fillStyle = getComputedStyle(element).color;
            context.fillRect(0, 0, 1, 1);

            return context.getImageData(0, 0, 1, 1).data;
        };

        const red: HTMLButtonElement =
            fixture.nativeElement.querySelector(
                '[data-testid="red"]'
            );
        const navy: HTMLButtonElement =
            fixture.nativeElement.querySelector(
                '[data-testid="navy"]'
            );
        const redSurface: HTMLElement = red.querySelector('.surface')!;
        const navySurface: HTMLElement = navy.querySelector('.surface')!;
        const redText = readRenderedColor(redSurface);
        const navyText = readRenderedColor(navySurface);

        expect([...redText.slice(0, 3)].every((value) => value > 240))
            .toBeTrue();
        expect([...navyText.slice(0, 3)].every((value) => value > 240))
            .toBeTrue();
    });
});
