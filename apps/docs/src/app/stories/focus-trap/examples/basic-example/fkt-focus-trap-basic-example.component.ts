import { Component, input } from '@angular/core';
import { FktFocusTrapDirective } from 'frakton-ng/focus-trap';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
  selector: 'fkt-focus-trap-basic-example',
  imports: [FktFocusTrapDirective, FktButtonComponent],
  templateUrl: './fkt-focus-trap-basic-example.component.html',
  styleUrl: './fkt-focus-trap-basic-example.component.scss'
})
export class FktFocusTrapBasicExampleComponent {
  preventScroll = input(true);
}