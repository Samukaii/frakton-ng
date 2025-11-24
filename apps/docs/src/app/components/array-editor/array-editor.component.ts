import { Component, computed, inject, input, model, signal } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktOverlayService } from 'frakton-ng/overlay';
import { ArrayEditorOverlayComponent } from '@/components/array-editor/overlay/array-editor-overlay.component';
import { ArgTypeSchema } from '@/models/arg-type';
import { JsonPipe } from '@angular/common';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
  selector: 'fkt-array-editor',
    imports: [
        FktButtonComponent,
        JsonPipe,
        FktIconComponent
    ],
  templateUrl: './array-editor.component.html',
  styleUrl: './array-editor.component.scss',
})
export class ArrayEditorComponent {
    label = input.required<string>();
    value = model.required<any[]>()
    schema = input.required<ArgTypeSchema>()

    private readonly overlay = inject(FktOverlayService);

    croppedValue = computed(() => {
        const value = this.value();
        const limit = 20;

        return JSON.stringify(value).slice(0, limit) + '...' + JSON.stringify(value).slice(limit * -1, -1)
    })

    openOverlay(anchor: HTMLElement) {
        const ref = this.overlay.open({
            component: ArrayEditorOverlayComponent,
            data: {
                value: this.value,
                schema: this.schema,
                save: (result) => {
                    this.value.set(result)
                    ref.close();
                },
                close: () => {
                    ref.close();
                }
            },
            anchorElementRef: {nativeElement: anchor},
            panelOptions: {
                allowDuplicates: true,
                preferredPositions: ['bottom-end', 'top-end'],
                width: 'fit-content',
                maxHeight: '700px',
            }
        })
    }
}
