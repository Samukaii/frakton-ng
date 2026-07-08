import {Component, inject} from '@angular/core';
import {FktDialogService} from 'frakton-ng/dialog';
import {FktSimpleDialogDemoComponent} from '../dialog/simple-dialog-demo/fkt-simple-dialog-demo.component';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'small-dialog-example',
    templateUrl: './fkt-small-dialog-example.component.html',
    styleUrl: './fkt-small-dialog-example.component.scss',
    imports: [FktButtonComponent],
})
export class FktSmallDialogExampleComponent {
    private dialogService = inject(FktDialogService);

    openDialog() {
        const dialogInstance = this.dialogService.open({
            component: FktSimpleDialogDemoComponent,
            data: {
                title: 'Compact Dialog',
                message: 'Small dialogs are perfect for quick confirmations.',
                closeDialog: () => dialogInstance.close(),
            },
            panelOptions: { width: '300px', padding: '2rem' },
        });
    }
}
