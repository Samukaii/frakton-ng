import { Component, effect, inject, input, Type, ViewContainerRef } from '@angular/core';
import { createComponentBindings, MarkUsed } from 'frakton-ng/internal/utils';
import { Generic } from 'frakton-ng/internal/types';

@Component({
    selector: 'fkt-component-renderer',
    template: '',
})
export class FktComponentRendererComponent {
    component = input.required<Type<unknown>>();
    data = input<Generic>({});

    private readonly viewRef = inject(ViewContainerRef);

    @MarkUsed()
    protected readonly createComponent = effect((onCleanup) => {
        const component = this.component();
        const data = this.data();

        if(!component) return;

        this.viewRef.clear();

        const ref = this.viewRef.createComponent(component, {
            bindings: createComponentBindings(component, data),
        });

        onCleanup(() => {
            ref.destroy();
        });
    });
}
