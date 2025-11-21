import { Component, input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'fkt-tabs-renderer',
    imports: [
        NgTemplateOutlet
    ],
  templateUrl: './fkt-tabs-renderer.component.html',
  styleUrl: './fkt-tabs-renderer.component.scss',
    host: {
      '[style.display]': 'hidden() ? "none" : "block"'
    }
})
export class FktTabsRendererComponent {
    template = input.required<TemplateRef<any>>();
    hidden = input(false);
    showMode = input<'lazy' | 'eager'>('eager');
}
