import { Component, computed, inject, input, model } from '@angular/core';
import {FktIconComponent} from "frakton-ng/icon";
import { capitalize } from 'frakton-ng/internal/utils';
import { SchemaEditorArrayComponent } from '@/components/schema-editor/array/schema-editor-array.component';
import { SchemaEditorObjectComponent } from '@/components/schema-editor/object/schema-editor-object.component';
import { FktOverlayRef, FktOverlayService } from 'frakton-ng/overlay';
import { IconSelectorModalComponent } from '@/components/icon-selector/modal/icon-selector-modal.component';

@Component({
  selector: 'fkt-icon-selector',
    imports: [
        FktIconComponent
    ],
  templateUrl: './icon-selector.component.html',
  styleUrl: './icon-selector.component.scss',
})
export class IconSelectorComponent {
    value = model<string>()
    private readonly overlay = inject(FktOverlayService);

    protected readonly preview = computed(() => {
        const value = this.value();

        if(!value) return 'No icon selected';

        return 'Icon selected: '
    })

    private overlayRef: FktOverlayRef<IconSelectorModalComponent> | null = null;

    openOverlay(anchor: HTMLElement) {
        if(this.overlayRef) return;

        this.overlayRef = this.overlay.open({
            component: IconSelectorModalComponent,
            data: {
                value: this.value
            },
            anchorElementRef: {nativeElement: anchor},
            panelOptions: {
                allowDuplicates: true,
                preferredPositions: ['bottom-end', 'top-end'],
                width: 'fit-content',
                maxHeight: '500px',
                onAutoClose: () => {
                    this.overlayRef = null;
                }
            }
        })
    }
}
