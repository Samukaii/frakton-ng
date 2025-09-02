import { Component } from '@angular/core';
import { FktButtonComponent } from '@frakton-ng/button';
import { FktTooltipDirective } from '@frakton-ng/tooltip';

@Component({
  selector: 'positioning-tooltip-example',
  template: `
	  <div class="container">
		  <h3 class="container__title">Tooltip Positioning</h3>

		  <div class="container__list">
			  <!-- Top positions -->
			  <div class="container__item">
				  <h4 class="container__item-title">Top Positions</h4>
				  <div class="container__item-buttons">
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
			  <div class="container__item">
				  <h4 class="container__item-title">Bottom Positions</h4>
				  <div class="container__item-buttons">
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
			  <div class="container__item">
				  <h4 class="container__item-title">Side Positions</h4>
				  <div class="container__item-buttons">
					  <div class="container__item-cols">
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

					  <div class="container__item-cols">
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
			  <div class="container__item">
				  <h4 class="container__item-title">Corner Positions</h4>
				  <div class="container__item-buttons">
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
	styles: `
		h4, h3 {
			margin: 0;
		}

		.container {
			display: flex;
			flex-direction: column;
			gap: var(--space-xl);

			.container__title {
				font-size: var(--font-size-lg);
				font-weight: var(--font-semibold);
				width: 100%;
				text-align: center;
			}

			.container__list {
				display: grid;
				grid-template-columns: repeat(1, minmax(0, 1fr));
				gap: 2rem;
			}

			.container__item {
				display: flex;
				flex-direction: column;
				gap: var(--space-sm);
			}

			.container__item-title {
				width: 100%;
				font-weight: 600;
				text-align: center;
				color: var(--color-gray-700);
			}

			.container__item-buttons {
				display: flex;
				gap: var(--space-sm);
				justify-content: center;
			}

			.container__item-cols {
				display: flex;
				flex-direction: column;
				gap: var(--space-xs);
			}
		}
	`,
  standalone: true,
  imports: [FktButtonComponent, FktTooltipDirective]
})
export class PositioningTooltipExampleComponent {}
