import { Component, ElementRef, inject } from '@angular/core';
import { FktDialogService } from 'frakton-ng/dialog';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'confirmation-dialog-example',
    templateUrl: './fkt-confirmation-dialog-example.component.html',
    styleUrl: './fkt-confirmation-dialog-example.component.scss',
    imports: [FktButtonComponent],
})
export class FktConfirmationDialogExampleComponent {
    private dialogService = inject(FktDialogService);
    private elementRef = inject(ElementRef);

    openDialog() {
        this.dialogService.confirm({
            title: 'Delete Item',
            description:
                'This action cannot be undone. Are you sure you want to delete this item?',
            actions: {
                primary: {
                    label: 'Delete',
                    color: 'danger',
                    click: () => {
                        console.log('Item deleted!');
                    },
                },
                secondary: {
                    label: 'Cancel',
                },
            },
            inheritDesignTokensFrom: this.elementRef.nativeElement,
            onBackdropClick: () => {
                console.log('Backdrop clicked - dialog cancelled');
            },
        });
    }
}
