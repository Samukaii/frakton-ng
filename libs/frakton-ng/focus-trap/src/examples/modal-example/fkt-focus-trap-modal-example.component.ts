import { Component, inject, input, output } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktInputComponent } from 'frakton-ng/input';
import { FktDialogService } from 'frakton-ng/dialog';

@Component({
  selector: 'fkt-user-form-dialog',
  imports: [FktInputComponent, FktButtonComponent],
  template: `
    <div class="dialog-content">
      <h2>User Information</h2>
      <p>Focus is automatically trapped within this dialog. Try tabbing through the elements.</p>

      <fkt-input label="First Name" placeholder="Enter your first name" />
      <fkt-input label="Last Name" placeholder="Enter your last name" />
      <fkt-input label="Email" type="email" placeholder="Enter your email" />

      <div class="dialog-actions">
        <fkt-button text="Cancel" theme="basic" (click)="cancel.emit()" />
        <fkt-button text="Save" color="primary" (click)="save.emit()" />
      </div>
    </div>
  `,
  styles: [`
    .dialog-content {
      display: flex;
      flex-direction: column;
      gap: var(--fkt-space-md);

      h2 {
        margin: 0 0 var(--fkt-space-sm) 0;
        color: var(--fkt-color-text-base);
      }

      p {
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
  `]
})
export class FktUserFormDialogComponent {
  save = output<void>();
  cancel = output<void>();
}

@Component({
  selector: 'fkt-focus-trap-modal-example',
  imports: [FktButtonComponent],
  templateUrl: './fkt-focus-trap-modal-example.component.html',
  styleUrl: './fkt-focus-trap-modal-example.component.scss'
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
        }
      },
      panelOptions: {
        width: '500px',
        backdropClick: () => dialogRef.close()
      }
    });
  }
}
