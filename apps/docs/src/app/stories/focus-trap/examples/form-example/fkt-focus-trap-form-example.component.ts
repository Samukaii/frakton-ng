import { Component, input, signal } from '@angular/core';
import { FktFocusTrapDirective } from 'frakton-ng/focus-trap';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktInputComponent } from 'frakton-ng/input';
import { FktSelectComponent } from 'frakton-ng/select';
import { FktCheckboxComponent } from 'frakton-ng/checkbox';

@Component({
  selector: 'fkt-focus-trap-form-example',
  imports: [
    FktFocusTrapDirective, 
    FktButtonComponent, 
    FktInputComponent, 
    FktSelectComponent,
    FktCheckboxComponent
  ],
  templateUrl: './fkt-focus-trap-form-example.component.html',
  styleUrl: './fkt-focus-trap-form-example.component.scss'
})
export class FktFocusTrapFormExampleComponent {
  preventScroll = input(true);
  
  countryOptions = signal([
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' }
  ]);
  
  submitForm() {
    console.log('Form submitted');
  }
  
  resetForm() {
    console.log('Form reset');
  }
}