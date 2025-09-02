import { Component, signal, input } from '@angular/core';
import { FktSelectComponent } from '@frakton-ng/select';
import { SignalFormControl } from '@frakton-ng/forms';
import { FktSelectOption } from '../fkt-select.types';

@Component({
  selector: 'select-async-loading-example',
  template: `
	  <div>
		  <div class="flex flex-col gap-2 p-4 bg-blue-50 text-blue-900 text-sm rounded">
			  <strong>
				  Click field to load users
			  </strong>
			  <p class="text-sm">
				  <strong>Status:</strong>
				  {{ loading() ? 'Loading users from API...' : 'Users loaded successfully' }}
			  </p>
		  </div>
		  <fkt-select
			  [control]="control"
			  (selectOpened)="loadOptions()"
			  [label]="label()"
			  [placeholder]="placeholder()"
			  [options]="options()"
			  [loading]="loading()"
		  />
	  </div>
  `,
  standalone: true,
  imports: [FktSelectComponent]
})
export class AsyncLoadingExampleComponent {
  control = new SignalFormControl('');
  label = input<string>();
  placeholder = input<string>();
  options = signal<FktSelectOption[]>([]);
  loading = signal(false);

  async loadOptions() {
    this.loading.set(true);
    this.options.set([]);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    const users: FktSelectOption[] = [
      { value: 'user1', label: 'John Doe' },
      { value: 'user2', label: 'Jane Smith' },
      { value: 'user3', label: 'Bob Johnson' },
      { value: 'user4', label: 'Alice Williams' },
      { value: 'user5', label: 'Charlie Brown' },
    ];

    this.options.set(users);
    this.loading.set(false);
  }
}
