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
      '[style.display]': 'hidden() ? "none" : "block"',
      'role': 'tabpanel',
      '[attr.aria-labelledby]': '"fkt-tab-" + tabKey()'
    }
})
export class FktTabsRendererComponent {
    template = input.required<TemplateRef<any>>();
    hidden = input(false);
    tabKey = input.required<string>();
}
