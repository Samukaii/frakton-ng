import {Component, inject, input, output} from '@angular/core';
import {FktDialogService} from 'frakton-ng/dialog';
import {FktFieldComponent} from 'frakton-ng/field';
import {FktInputTextDirective} from 'frakton-ng/input-text';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'fkt-user-form-dialog',
    imports: [
        FktFieldComponent,
        FktInputTextDirective,
        FktButtonComponent,
    ],
    template: `
        <div class="dialog-content">
            <h2>User Information</h2>
            <p>
                Focus is automatically trapped within this dialog. Try tabbing
                through the elements.
            </p>

            <fkt-field label="First Name">
                <input fktInputText placeholder="Enter your first name"/>
            </fkt-field>
            <fkt-field label="Last Name">
                <input fktInputText placeholder="Enter your last name"/>
            </fkt-field>
            <fkt-field label="Email">
                <input
                        fktInputText
                        placeholder="Enter your email"
                        type="email"
                />
            </fkt-field>

            <div class="dialog-actions">
                <button
                        (click)="cancel.emit()"
                        appearance="basic"
                        fktButton
                        label="Cancel"
                ></button>
                <button
                        (click)="save.emit()"
                        color="primary"
                        fktButton
                        label="Save"
                ></button>
            </div>
        </div>
    `,
    styles: [
        `
            .dialog-content {
                display: flex;
                flex-direction: column;
                gap: var(--fkt-space-md);

                h2 {
                    margin: 0 0 var(--fkt-space-sm) 0;
                    color: var(--fkt-color-text-base);
                }

                & > p {
                    margin: 0 0 var(--fkt-space-md) 0;
                    color: var(--fkt-color-text-muted);
                }
            }

            .dialog-actions {
                display: flex;
                gap: var(--fkt-space-sm);
                justify-content: flex-end;
                margin-top: var(--fkt-space-md);
            }
        `,
    ],
})
export class FktUserFormDialogComponent {
    save = output<void>();
    cancel = output<void>();
}

@Component({
    selector: 'fkt-focus-trap-modal-example',
    imports: [FktButtonComponent],
    templateUrl: './fkt-focus-trap-modal-example.component.html',
    styleUrl: './fkt-focus-trap-modal-example.component.scss',
})
export class FktFocusTrapModalExampleComponent {
    preventScroll = input(true);

    private dialogService = inject(FktDialogService);

    openDialog() {
        const dialogRef = this.dialogService.open({
            component: FktUserFormDialogComponent,
            data: {
                save: () => {
                    console.log('User saved');
                    dialogRef.close();
                },
                cancel: () => {
                    console.log('User cancelled');
                    dialogRef.close();
                },
            },
            panelOptions: {
                width: '500px',
            },
        });
    }
}
