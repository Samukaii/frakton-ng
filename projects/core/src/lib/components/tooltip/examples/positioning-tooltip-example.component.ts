import { Component } from '@angular/core';
import { FktButtonComponent } from '../../button';
import { FktTooltipDirective } from '../fkt-tooltip.directive';

@Component({
  selector: 'positioning-tooltip-example',
  template: `
	  <div class="space-y-6">
		  <h3 class="text-lg font-semibold">Tooltip Positioning</h3>

		  <div class="grid grid-cols-1 gap-8">
			  <!-- Top positions -->
			  <div class="space-y-3">
				  <h4 class="font-semibold text-gray-700 text-center w-full">Top Positions</h4>
				  <div class="flex justify-center gap-4">
					  <fkt-button
						  text="Top Start"
						  theme="stroked"
						  color="primary"
						  disableAutoReposition
						  fktTooltip="Top start positioned tooltip"
						  position="top-start"
					  ></fkt-button>

					  <fkt-button
						  text="Top Center"
						  theme="stroked"
						  color="primary"
						  disableAutoReposition
						  fktTooltip="Top center positioned tooltip"
						  position="top-center"
					  ></fkt-button>

					  <fkt-button
						  text="Top End"
						  theme="stroked"
						  color="primary"
						  disableAutoReposition
						  fktTooltip="Top end positioned tooltip"
						  position="top-end"
					  ></fkt-button>
				  </div>
			  </div>

			  <!-- Bottom positions -->
			  <div class="space-y-3">
				  <h4 class="font-semibold text-gray-700 text-center w-full">Bottom Positions</h4>
				  <div class="flex justify-center gap-4">
					  <fkt-button
						  text="Bottom Start"
						  theme="stroked"
						  color="red"
						  disableAutoReposition
						  fktTooltip="Bottom start positioned tooltip"
						  position="bottom-start"
					  ></fkt-button>

					  <fkt-button
						  text="Bottom Center"
						  theme="stroked"
						  color="red"
						  disableAutoReposition
						  fktTooltip="Bottom center positioned tooltip (default)"
						  position="bottom-center"
					  ></fkt-button>

					  <fkt-button
						  text="Bottom End"
						  theme="stroked"
						  color="red"
						  disableAutoReposition
						  fktTooltip="Bottom end positioned tooltip"
						  position="bottom-end"
					  ></fkt-button>
				  </div>
			  </div>

			  <!-- Side positions -->
			  <div class="space-y-3">
				  <h4 class="font-semibold text-gray-700 text-center w-full">Side Positions</h4>
				  <div class="flex justify-center gap-4">
					  <div class="flex flex-col gap-2">
						  <fkt-button
							  text="Left Start"
							  theme="stroked"
							  color="green"
							  disableAutoReposition
							  fktTooltip="Left start positioned tooltip"
							  position="left-start"
						  ></fkt-button>

						  <fkt-button
							  text="Left Center"
							  theme="stroked"
							  color="green"
							  disableAutoReposition
							  fktTooltip="Left center positioned tooltip"
							  position="left-center"
						  ></fkt-button>

						  <fkt-button
							  text="Left End"
							  theme="stroked"
							  color="green"
							  disableAutoReposition
							  fktTooltip="Left end positioned tooltip"
							  position="left-end"
						  ></fkt-button>
					  </div>

					  <div class="flex flex-col gap-2">
						  <fkt-button
							  text="Right Start"
							  theme="stroked"
							  color="yellow"
							  disableAutoReposition
							  fktTooltip="Right start positioned tooltip"
							  position="right-start"
						  ></fkt-button>

						  <fkt-button
							  text="Right Center"
							  theme="stroked"
							  color="yellow"
							  disableAutoReposition
							  fktTooltip="Right center positioned tooltip"
							  position="right-center"
						  ></fkt-button>

						  <fkt-button
							  text="Right End"
							  theme="stroked"
							  color="yellow"
							  disableAutoReposition
							  fktTooltip="Right end positioned tooltip"
							  position="right-end"
						  ></fkt-button>
					  </div>
				  </div>
			  </div>

			  <!-- Corners -->
			  <div class="space-y-3">
				  <h4 class="font-semibold text-gray-700 text-center w-full">Corner Positions</h4>
				  <div class="flex justify-center gap-4">
					  <fkt-button
						  text="Bottom Left"
						  theme="stroked"
						  color="primary"
						  disableAutoReposition
						  fktTooltip="Bottom left positioned tooltip"
						  position="bottom-left"
					  ></fkt-button>

					  <fkt-button
						  text="Top Left"
						  theme="stroked"
						  color="primary"
						  disableAutoReposition
						  fktTooltip="Top left positioned tooltip"
						  position="top-left"
					  ></fkt-button>

					  <fkt-button
						  text="Bottom Right"
						  theme="stroked"
						  color="primary"
						  disableAutoReposition
						  fktTooltip="Bottom right positioned tooltip"
						  position="bottom-right"
					  ></fkt-button>

					  <fkt-button
						  text="Top Right"
						  theme="stroked"
						  color="primary"
						  disableAutoReposition
						  fktTooltip="Top right positioned tooltip"
						  position="top-right"
					  ></fkt-button>
				  </div>
			  </div>
		  </div>
	  </div>
  `,
  standalone: true,
  imports: [FktButtonComponent, FktTooltipDirective]
})
export class PositioningTooltipExampleComponent {}
