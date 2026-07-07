import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FktButtonLoadingIndicatorDirective } from './directives/fkt-button-loading-indicator.directive';
import { FktButtonPrefixDirective } from './directives/fkt-button-prefix.directive';
import { FktButtonSuffixDirective } from './directives/fkt-button-suffix.directive';
import { FktButtonComponent } from './fkt-button.component';

@Component({
    imports: [
        FktButtonComponent,
        FktButtonPrefixDirective,
        FktButtonSuffixDirective,
    ],
    template: `
        <button
            fktButton
            label="Save"
            name="intent"
            value="save"
            [hideLabel]="hideLabel()"
            [loading]="loading()"
            [disabled]="disabled()"
        >
            <span fktButtonPrefix data-testid="prefix">P</span>
            <span fktButtonSuffix data-testid="suffix">S</span>
        </button>
    `,
})
class ButtonHostComponent {
    readonly hideLabel = signal(false);
    readonly loading = signal(false);
    readonly disabled = signal(false);
}

@Component({
    imports: [
        FktButtonComponent,
        FktButtonLoadingIndicatorDirective,
    ],
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
    imports: [FktButtonComponent],
    template: `
        <button
            fktButton
            label="Delete"
            color="danger"
            appearance="stroked"
            shape="square"
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

describe('FktButtonComponent', () => {
    it('renders the required label and preserves native button attributes', () => {
        const fixture = TestBed.createComponent(ButtonHostComponent);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.textContent).toContain('Save');
        expect(button.type).toBe('button');
        expect(button.name).toBe('intent');
        expect(button.value).toBe('save');
        expect(button.getAttribute('aria-label')).toBeNull();
    });

    it('uses label as aria-label and hides the visual label', () => {
        const fixture = TestBed.createComponent(ButtonHostComponent);
        fixture.componentInstance.hideLabel.set(true);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.getAttribute('aria-label')).toBe('Save');
        expect(button.querySelector('.label')).toBeNull();
        expect(button.classList).toContain('hide-label');
    });

    it('replaces the prefix while loading and derives disabled state', () => {
        const fixture = TestBed.createComponent(ButtonHostComponent);
        fixture.componentInstance.loading.set(true);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.disabled).toBeTrue();
        expect(button.hasAttribute('data-fkt-loading')).toBeTrue();
        expect(button.hasAttribute('data-fkt-disabled')).toBeFalse();
        expect(button.getAttribute('aria-busy')).toBe('true');
        expect(button.textContent).toContain('Save');
        expect(button.querySelector('[data-testid="prefix"]')).toBeNull();
        expect(button.querySelector('[data-testid="suffix"]')).not.toBeNull();
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
        expect(button.getAttribute('data-fkt-shape')).toBe('square');
        expect(button.getAttribute('data-fkt-size')).toBe('sm');
        expect(button.hasAttribute('data-fkt-variant')).toBeFalse();
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
        const redText = readRenderedColor(red);
        const navyText = readRenderedColor(navy);

        expect([...redText.slice(0, 3)].every((value) => value > 240))
            .toBeTrue();
        expect([...navyText.slice(0, 3)].every((value) => value > 240))
            .toBeTrue();
    });
});
