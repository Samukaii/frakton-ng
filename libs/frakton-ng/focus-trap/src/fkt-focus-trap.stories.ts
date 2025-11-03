import { Meta, StoryObj } from '@storybook/angular';
import {
  FktFocusTrapBasicExampleComponent,
  FktFocusTrapFormExampleComponent,
  FktFocusTrapModalExampleComponent
} from './examples';
import { FktFocusTrapDirective } from './fkt-focus-trap.directive';
import { fktStoryRenderer } from '../../.storybook/decorators/fkt-story-renderer';
import { renderComponent } from '../../.storybook/decorators/render-component';

const meta: Meta<FktFocusTrapDirective> = {
  title: 'Utilities/Focus Trap',
  parameters: {
    docs: {
      description: {
        component: 'A directive that traps keyboard focus within a container, ensuring accessibility for modals, forms, and other interactive elements.'
      }
    }
  },
  decorators: [
    fktStoryRenderer({
      selector: 'fktFocusTrap'
    }),
  ],
  argTypes: {
    preventScroll: {
      control: 'boolean',
      description: 'Prevents scrolling when focusing elements within the trap',
      table: {
        category: 'Attributes',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    }
  }
};

type Story = StoryObj<FktFocusTrapDirective>;

export const BasicUsage: Story = {
  render: renderComponent(FktFocusTrapBasicExampleComponent),
  args: {
    preventScroll: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic focus trap demonstration with buttons. Tab navigation cycles within the trapped container.'
      }
    }
  }
};

export const DialogIntegration: Story = {
  render: renderComponent(FktFocusTrapModalExampleComponent),
  args: {
    preventScroll: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of how FktDialogService automatically implements focus trap. Frakton dialogs include built-in focus management without additional setup.'
      }
    }
  }
};

export const FormContainer: Story = {
  render: renderComponent(FktFocusTrapFormExampleComponent),
  args: {
    preventScroll: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Focus trap applied to a form with various input controls. Demonstrates comprehensive form accessibility.'
      }
    }
  }
};

export const PreventScrollDisabled: Story = {
  render: renderComponent(FktFocusTrapBasicExampleComponent),
  args: {
    preventScroll: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Focus trap with scroll prevention disabled. Page may scroll when focusing elements.'
      }
    }
  }
};

export default meta;
