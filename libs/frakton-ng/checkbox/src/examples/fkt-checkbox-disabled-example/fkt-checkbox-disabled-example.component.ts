import { Component, input, signal } from '@angular/core';
import { FktCheckboxComponent } from '../../fkt-checkbox.component';
import { Control, form } from '@angular/forms/signals';

@Component({
  selector: 'fkt-checkbox-disabled-example',
  imports: [
    FktCheckboxComponent,
    Control
  ],
  templateUrl: './fkt-checkbox-disabled-example.component.html',
  styleUrl: './fkt-checkbox-disabled-example.component.scss'
})
export class FktCheckboxDisabledExampleComponent {
  disabled = input(false);

  protected field = form(signal(true));
}
