# Input

_A versatile form input component with multiple types, data transformers, and comprehensive validation support. Built with Angular signals for reactive form integration._

## Key Features

- **Multiple Input Types**: Text, password, number, and email with optimized behavior
- **Data Transformers**: Built-in formatters for currency, percentage, and time duration
- **Password Toggle**: Show/hide functionality with accessible eye icon
- **Form Validation**: Real-time validation with visual error states
- **Custom Suffix**: Content projection for buttons, icons, and additional elements
- **Signal Integration**: Native Angular signals with SignalFormControl

## Configuration Options

<arg-types></arg-types>

### Types

```typescript
import {SignalFormControlTransformer} from "frakton-ng/forms";

type FktInputType = 'text' | 'password' | 'number' | 'email';

type FktInputTransformer = 'currency' | 'percent' | 'hour' | SignalFormControlTransformer;
```

## Examples

<story-examples></story-examples>

## Use Cases

- **User Registration Forms** - Email addresses, passwords, personal information with validation.
- **E-commerce Applications** - Product pricing, quantities, discount percentages with currency formatting.
- **Financial Data Entry** - Investment amounts, interest rates, account balances with precise formatting.
- **Content Management** - Article titles, descriptions, metadata with spell-check control.

## Accessibility

- **Keyboard Navigation**: Tab order and shortcuts work as expected.
- **Screen Reader Support**: ARIA labels and validation announcements.
- **Focus Management**: Clear focus indicators and logical navigation flow.
- **Other Notes**: Supports high contrast modes and respects user preferences.
