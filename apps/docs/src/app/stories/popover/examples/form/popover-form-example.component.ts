import { CodeOutputComponent } from '@/components/code-output/code-output.component';
import { Component, signal, viewChild } from '@angular/core';
import {
  email,
  form,
  FormField,
  FormRoot,
  required,
} from '@angular/forms/signals';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktCheckboxComponent } from 'frakton-ng/checkbox';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import {
  FktPopoverComponent,
  FktPopoverContentDirective,
  FktPopoverTriggerDirective,
} from 'frakton-ng/popover';

interface Payload {
  name: string;
  email: string;
  updates: boolean;
}

@Component({
  selector: 'app-popover-form-example',
  imports: [
    FktButtonComponent,
    FktPopoverComponent,
    FktPopoverTriggerDirective,
    FktPopoverContentDirective,
    FktFieldComponent,
    FktInputTextDirective,
    FktCheckboxComponent,
    FormField,
    FormRoot,
    CodeOutputComponent,
  ],
  templateUrl: './popover-form-example.component.html',
  styleUrl: './popover-form-example.component.scss',
})
export class PopoverFormExampleComponent {
  protected readonly open = signal(false);
  protected readonly submitted = signal<Payload | null>(null);
  private readonly popover = viewChild.required(FktPopoverComponent);

  private payload = signal<Payload>({
    name: 'Ada Lovelace',
    email: 'adalovelace@email.com',
    updates: false,
  });

  protected readonly form = form(
    this.payload,
    (schema) => {
      required(schema.name);
      required(schema.email);
      email(schema.email);
    },
    {
      submission: {
        action: async (form) => {
          this.submitted.set(form().value());
          this.open.set(false);
          this.popover().restoreTriggerFocus();
        },
      },
    }
  );
}
