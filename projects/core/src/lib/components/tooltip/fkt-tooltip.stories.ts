import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FktTooltipDirective } from './fkt-tooltip.directive';
import { fktGeometryPositions } from '../../shared/types';
import {
	BasicTooltipExampleComponent,
	DifferentElementsExampleComponent,
	InteractiveTooltipExampleComponent,
	PositioningTooltipExampleComponent
} from './examples';

const meta: Meta<FktTooltipDirective> = {
  title: 'Components/Tooltip',
  component: FktTooltipDirective,
  decorators: [
    moduleMetadata({
      imports: [
        BasicTooltipExampleComponent,
        PositioningTooltipExampleComponent,
        InteractiveTooltipExampleComponent,
        DifferentElementsExampleComponent
      ]
    })
  ],
  argTypes: {
    fktTooltip: {
      control: 'text',
      description: 'The tooltip text to display',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Required - tooltip message' }
      }
    },
    tooltipEnabled: {
      control: 'boolean',
      description: 'Whether the tooltip is enabled or disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    position: {
      control: 'select',
      options: fktGeometryPositions,
      description: 'Position of the tooltip relative to the trigger element',
      table: {
        type: { summary: 'FktGeometryPosition' },
        defaultValue: { summary: 'bottom-center' }
      }
    }
  }
};

type Story = StoryObj<FktTooltipDirective>;

export const BasicTooltips: Story = {
  render: () => ({
    template: '<basic-tooltip-example></basic-tooltip-example>'
  }),
  parameters: {
    docs: {
      description: {
        story: 'Basic tooltip examples showing simple hover interactions with different button styles and states.'
      }
    }
  }
};

export const Positioning: Story = {
  render: () => ({
    template: '<positioning-tooltip-example></positioning-tooltip-example>'
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive positioning examples showing all available tooltip positions: top, bottom, left, right with start, center, and end alignments.'
      }
    }
  }
};

export const InteractiveControls: Story = {
  render: () => ({
    template: '<interactive-tooltip-example></interactive-tooltip-example>'
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive example with form controls allowing you to dynamically change tooltip text, position, and enabled state.'
      }
    }
  }
};

export const DifferentElements: Story = {
  render: () => ({
    template: '<different-elements-example></different-elements-example>'
  }),
  parameters: {
    docs: {
      description: {
        story: 'Examples showing tooltips on various UI elements including buttons, icons, badges, text, and custom elements.'
      }
    }
  }
};

export default meta;
