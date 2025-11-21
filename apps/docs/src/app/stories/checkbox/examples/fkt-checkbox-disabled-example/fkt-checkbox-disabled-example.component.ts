import { Component, input, signal } from '@angular/core';
import { FktCheckboxComponent } from 'frakton-ng/checkbox';
import { disabled, Field, form } from '@angular/forms/signals';

@Component({
  selector: 'fkt-checkbox-disabled-example',
  imports: [
    FktCheckboxComponent,
    Field
  ],
  templateUrl: './fkt-checkbox-disabled-example.component.html',
  styleUrl: './fkt-checkbox-disabled-example.component.scss'
})
export class FktCheckboxDisabledExampleComponent {
  disabled = input(false);

  protected field = form(signal(true), path => {
      disabled(path, this.disabled);
  });
}
