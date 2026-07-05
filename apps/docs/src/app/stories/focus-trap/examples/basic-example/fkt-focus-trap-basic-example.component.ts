import { Component, input } from '@angular/core';
import { FktFocusTrapDirective } from 'frakton-ng/focus-trap';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';

@Component({
  selector: 'fkt-focus-trap-basic-example',
  imports: [FktFocusTrapDirective, FktButtonLegacyComponent],
  templateUrl: './fkt-focus-trap-basic-example.component.html',
  styleUrl: './fkt-focus-trap-basic-example.component.scss'
})
export class FktFocusTrapBasicExampleComponent {
  preventScroll = input(true);
}
