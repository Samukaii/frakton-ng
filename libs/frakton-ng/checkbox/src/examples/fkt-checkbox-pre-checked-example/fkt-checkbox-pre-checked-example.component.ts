import { Component, input, signal } from '@angular/core';
import { FktCheckboxComponent } from '../../fkt-checkbox.component';
import { Control, form } from '@angular/forms/signals';

@Component({
  selector: 'fkt-checkbox-pre-checked-example',
  imports: [
    FktCheckboxComponent,
    Control
  ],
  templateUrl: './fkt-checkbox-pre-checked-example.component.html',
  styleUrl: './fkt-checkbox-pre-checked-example.component.scss'
})
export class FktCheckboxPreCheckedExampleComponent {
	label = input('');
  protected field = form(signal(true));
}
