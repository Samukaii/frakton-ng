The **FktAutocomplete** component provides an input field with dropdown suggestions that filter as the user types.
It supports custom options, actions on each option, loading states, and auto-creation of new options.

## Features

- **Filtering**: Options are filtered based on user input
- **Custom Actions**: Add action buttons to each option (like delete, edit, etc.)
- **Auto-creation**: Allow users to create new options by typing
- **Loading State**: Show spinner while options are being loaded
- **No Results**: Custom message when no options match the input
- **Form Integration**: Works seamlessly with Angular forms via SignalFormControl

## Usage

```typescript
import { FktAutocompleteComponent } from '@frakton-ng/core';
import { SignalFormControl } from '@frakton-ng/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <fkt-autocomplete
      [control]="myControl"
      [options]="myOptions"
      [label]="'Select an option'"
      [placeholder]="'Start typing...'"
      [actions]="optionActions"
      [enableAutoCreation]="true"
      [loading]="isLoading"
      (search)="handleSearch($event)"
    ></fkt-autocomplete>
  `,
  standalone: true,
  imports: [FktAutocompleteComponent]
})
export class ExampleComponent {
  myControl = new SignalFormControl('');

  myOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  optionActions = [
    {
      icon: 'trash',
      color: 'red',
      variant: 'icon',
      theme: 'basic',
      identifier: 'remove'
    }
  ];

  isLoading = false;

  handleSearch(searchTerm: string) {
    this.isLoading = true;
    // Fetch options based on search term
    // When done, set isLoading to false
  }
}
```

## Option Type

```typescript
export interface FktAutocompleteOption {
  value: string | number;
  label: string;
}
```

## Action Type

```typescript
export interface FktButtonAction {
  icon: string;        // Icon name
  color?: string;      // Button color
  variant: string;     // Button variant ('icon', 'text', etc.)
  theme: string;       // Button theme ('basic', 'primary', etc.)
  identifier: string;  // Unique identifier for the action
}
```

## Accessibility

- The autocomplete component is keyboard accessible
- Arrow keys can be used to navigate options
- Escape key closes the dropdown
- Enter key selects the highlighted option
- Screen readers can navigate and select options
