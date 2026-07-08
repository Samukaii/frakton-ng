import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FktButtonLegacyComponent } from './fkt-button-legacy.component';

@Component({
    imports: [FktButtonLegacyComponent],
    template: `
        <fkt-button
            text="Save"
            type="button"
            color="danger"
            theme="stroked"
            shape="square"
            icon="check"
            iconPosition="left"
            [loading]="loading()"
            [disabled]="disabled()"
            [loadingText]="loadingText()"
        />
    `,
})
class ButtonHostComponent {
    readonly loading = signal(false);
    readonly disabled = signal(false);
    readonly loadingText = signal('');
}

@Component({
    imports: [FktButtonLegacyComponent],
    template: `
        <fkt-button
            ariaLabel="Delete"
            icon="trash"
        />
    `,
})
class IconOnlyHostComponent {}

@Component({
    imports: [FktButtonLegacyComponent],
    template: `
        <fkt-button
            text="Brand"
            color="#663399"
            labelColor="#ffffff"
        />
    `,
})
class CustomCssColorHostComponent {}

describe('FktButtonLegacyComponent', () => {
    it('renders text, icon, and native button attributes', () => {
        const fixture = TestBed.createComponent(ButtonHostComponent);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.textContent).toContain('Save');
        expect(button.type).toBe('button');
        expect(button.getAttribute('aria-label')).toBe('Save');
        expect(button.classList).toContain('theme-stroked');
        expect(button.classList).toContain('color-danger');
        expect(button.classList).toContain('shape-square');
        expect(button.querySelector('fkt-icon')).not.toBeNull();
    });

    it('uses ariaLabel as the accessible name for icon-only buttons', () => {
        const fixture = TestBed.createComponent(IconOnlyHostComponent);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.textContent?.trim()).toBe('');
        expect(button.getAttribute('aria-label')).toBe('Delete');
        expect(button.classList).toContain('icon-only');
        expect(button.querySelector('fkt-icon')).not.toBeNull();
    });

    it('shows the loading state and disables the native button', () => {
        const fixture = TestBed.createComponent(ButtonHostComponent);
        fixture.componentInstance.loading.set(true);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.disabled).toBeTrue();
        expect(button.getAttribute('aria-busy')).toBe('true');
        expect(button.classList).toContain('loading');
        expect(button.querySelector('.spinner')).not.toBeNull();
        expect(button.textContent).toContain('Save');
    });

    it('prefers loadingText as the accessible name while loading', () => {
        const fixture = TestBed.createComponent(ButtonHostComponent);
        fixture.componentInstance.loading.set(true);
        fixture.componentInstance.loadingText.set('Saving');
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.getAttribute('aria-label')).toBe('Saving');
        expect(button.textContent).toContain('Saving');
    });

    it('keeps explicit disabled state on the native button', () => {
        const fixture = TestBed.createComponent(ButtonHostComponent);
        fixture.componentInstance.disabled.set(true);
        fixture.detectChanges();

        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.disabled).toBeTrue();
    });

    it('accepts legacy hex custom colors and an explicit label color', () => {
        const fixture = TestBed.createComponent(CustomCssColorHostComponent);
        fixture.detectChanges();

        const host: HTMLElement =
            fixture.nativeElement.querySelector('fkt-button');
        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.classList).toContain('color-custom');
        expect(host.style.getPropertyValue('--custom-color')).toBe('#663399FF');
        expect(host.style.getPropertyValue('--custom-label-color')).toBe('#ffffff');
    });
});
