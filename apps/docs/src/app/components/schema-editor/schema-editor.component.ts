import { Component, computed, inject, input, model } from '@angular/core';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { SchemaEditorArrayComponent } from '@/components/schema-editor/array/schema-editor-array.component';
import { ArgTypeSchema } from '@/models/arg-type';
import { FktIconComponent } from 'frakton-ng/icon';
import { capitalize } from 'frakton-ng/internal/utils';
import { SchemaEditorObjectComponent } from '@/components/schema-editor/object/schema-editor-object.component';
import { IconSelectorModalComponent } from '@/components/icon-selector/modal/icon-selector-modal.component';

@Component({
    selector: 'fkt-schema-editor',
    imports: [
        FktIconComponent,
    ],
    templateUrl: './schema-editor.component.html',
    styleUrl: './schema-editor.component.scss',
})
export class SchemaEditorComponent {
    label = input.required<string>();
    value = model.required<any>()
    schema = input.required<ArgTypeSchema>()

    private readonly overlay = inject(FktOverlayService);

    private overlayRef: FktOverlayRef<any> | null = null;


    protected readonly preview = computed(() => {
        const value = this.value();

        if(Array.isArray(value)) {
            return capitalize(`${this.label()} (${value.length === 1 ? `1 item` : `${value.length} items`})`);
        }

        const keys = Object.keys(value ?? {});

        return capitalize(`${this.label()} (${keys.length === 1 ? `1 key` : `${keys.length} keys`})`);
    })

    openOverlay(anchor: HTMLElement) {
        if(this.overlayRef) return;

        const value = this.value();

        if (Array.isArray(value)) {
            this.overlayRef = this.overlay.open({
                component: SchemaEditorArrayComponent,
                data: {
                    value: this.value,
                    schema: this.schema,
                },
                anchorElementRef: {nativeElement: anchor},
                panelOptions: {
                    allowDuplicates: true,
                    preferredPositions: ['bottom-end', 'top-end'],
                    width: 'fit-content',
                    maxHeight: '700px',
                    onAutoClose: () => {
                        this.overlayRef = null;
                    }
                }
            })

            return;
        }

       this.overlayRef = this.overlay.open({
            component: SchemaEditorObjectComponent,
            data: {
                value: this.value,
                schema: this.schema,
                label: this.label(),
            },
            anchorElementRef: {nativeElement: anchor},
            panelOptions: {
                allowDuplicates: true,
                preferredPositions: ['bottom-end', 'top-end'],
                width: 'fit-content',
                maxHeight: '700px',
                onAutoClose: () => {
                    this.overlayRef = null;
                }
            }
        })
    }
}
