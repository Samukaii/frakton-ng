import { Component } from '@angular/core';
import { FktButtonComponent } from '@frakton-ng/button';
import { FktIconComponent } from '@frakton-ng/icon';
import { FktBadgeComponent } from '@frakton-ng/badge';
import { FktTooltipDirective } from '@frakton-ng/tooltip';

@Component({
  selector: 'different-elements-example',
  template: `
    <div class="space-y-6">
      <h3 class="text-lg font-semibold">Tooltips on Different Elements</h3>

      <div class="flex flex-col gap-4">
        <!-- Buttons Section -->
        <div class="space-y-3">
          <h4 class="font-semibold text-gray-700">Buttons</h4>
          <div class="space-y-2 w-fit">
            <fkt-button
              text="Primary Action"
              theme="raised"
              color="primary"
              fktTooltip="This is the main call-to-action button"
            ></fkt-button>

            <fkt-button
              text="Secondary"
              theme="stroked"
              color="primary"
              fktTooltip="Secondary action with less emphasis"
            ></fkt-button>

            <fkt-button
              text="Danger"
              theme="raised"
              color="red"
			  disableAutoReposition
              fktTooltip="Destructive action - use with caution"
              position="top-center"
            ></fkt-button>
          </div>
        </div>

        <!-- Icons Section -->
        <div class="space-y-3 border-t mt-2 pt-2 border-gray-200">
          <h4 class="font-semibold text-gray-700">Icons</h4>
          <div class="flex gap-3">
            <fkt-icon
              name="information-circle"
              size="24"
              class="text-blue-500 cursor-pointer"
			  disableAutoReposition
              fktTooltip="Get more information about this feature"
              position="top-center"
            ></fkt-icon>

            <fkt-icon
              name="cog-6-tooth"
              size="24"
              class="text-gray-600 cursor-pointer"
			  disableAutoReposition
              fktTooltip="Open settings and preferences"
              position="top-center"
            ></fkt-icon>

            <fkt-icon
              name="bell"
              size="24"
              class="text-yellow-500 cursor-pointer"
			  disableAutoReposition
              fktTooltip="View your notifications"
              position="top-center"
            ></fkt-icon>

            <fkt-icon
              name="user"
              size="24"
              class="text-green-600 cursor-pointer"
			  disableAutoReposition
              fktTooltip="Access your user profile"
              position="top-center"
            ></fkt-icon>
          </div>
        </div>

        <!-- Badges Section -->
        <div class="space-y-3 border-t mt-2 pt-2 border-gray-200">
          <h4 class="font-semibold text-gray-700">Badges</h4>
          <div class="flex flex-wrap gap-2">
            <fkt-badge
              text="New"
              color="green"
              fktTooltip="Recently added feature"
            ></fkt-badge>

            <fkt-badge
              text="Beta"
              color="orange"
              fktTooltip="Feature in testing phase"
            ></fkt-badge>

            <fkt-badge
              text="Popular"
              color="blue"
              fktTooltip="Most used by our customers"
            ></fkt-badge>
          </div>
        </div>

        <!-- Text Elements Section -->
        <div class="space-y-3 border-t mt-2 pt-2 border-gray-200">
          <h4 class="font-semibold text-gray-700">Text Elements</h4>
          <div class="space-y-2">
            <p
              class="text-gray-800 cursor-help border-b border-dotted border-gray-400 inline-block"
              fktTooltip="This is a helpful explanation of the underlined term"
            >
              Hover over this text
            </p>

            <span
              class="font-semibold text-blue-600 cursor-help"
			  disableAutoReposition
              fktTooltip="Click to learn more about this topic"
              position="right-center"
            >
              Technical Term
            </span>
          </div>
        </div>

        <!-- Interactive Elements Section -->
        <div class="space-y-3 border-t mt-2 pt-2 border-gray-200">
          <h4 class="font-semibold text-gray-700">Interactive Elements</h4>
          <div class="flex gap-2">
            <div
              class="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg cursor-pointer flex items-center justify-center text-white font-bold"
			  disableAutoReposition
              fktTooltip="Custom interactive element with gradient background"
              position="left-center"
            >
              ?
            </div>

            <div
              class="px-3 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-colors w-full"
			  disableAutoReposition
			  fktTooltip="This is a custom card component with hover effects"
              position="top-start"
            >
              <small class="text-gray-500">Custom Card</small>
            </div>
          </div>
        </div>

        <!-- Status Indicators Section -->
        <div class="space-y-3 border-t mt-2 pt-2 border-gray-200">
          <h4 class="font-semibold text-gray-700">Status Indicators</h4>
          <div class="flex items-center gap-3">
            <div
              class="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
              fktTooltip="Service is online and operational"
            ></div>

            <div
              class="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"
              fktTooltip="Service experiencing minor issues"
            ></div>

            <div
              class="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
              fktTooltip="Service is currently unavailable"
            ></div>
          </div>
        </div>
      </div>

      <div class="text-xs text-gray-500 bg-gray-50 p-3 rounded-md">
        <strong>Tip:</strong> Tooltips work on any element with the <code>fktTooltip</code> directive.
        They're perfect for providing contextual help, explanations, and additional information without cluttering the interface.
      </div>
    </div>
  `,
  standalone: true,
  imports: [FktButtonComponent, FktIconComponent, FktBadgeComponent, FktTooltipDirective]
})
export class DifferentElementsExampleComponent {}
