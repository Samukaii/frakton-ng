import { Component } from '@angular/core';
import { FktDividerComponent } from 'frakton-ng/divider';

@Component({
    selector: 'basic-usage',
    imports: [FktDividerComponent],
    template: `
        <div class="example-container">
            <h3>Basic Divider Usage</h3>
            
            <div class="content-section">
                <h4>Section A</h4>
                <p>This is the first section of content. It contains some important information that needs to be separated from the next section.</p>
            </div>

            <fkt-divider />

            <div class="content-section">
                <h4>Section B</h4>
                <p>This is the second section of content. The divider above helps visually separate this content from the previous section.</p>
            </div>

            <fkt-divider label="With Label" spacing="lg" />

            <div class="content-section">
                <h4>Section C</h4>
                <p>This section is separated with a labeled divider, which provides additional context about the content division.</p>
            </div>

            <fkt-divider variant="dashed" color="primary" />

            <div class="content-section">
                <h4>Section D</h4>
                <p>This section uses a dashed divider with primary color to create a different visual separation.</p>
            </div>

            <h3 style="margin-top: 2rem;">Vertical Divider Example</h3>
            
            <div class="horizontal-layout">
                <div class="column">
                    <h4>Left Content</h4>
                    <p>This content is on the left side of a vertical divider.</p>
                    <ul>
                        <li>Feature A</li>
                        <li>Feature B</li>
                        <li>Feature C</li>
                    </ul>
                </div>

                <fkt-divider orientation="vertical" spacing="md" />

                <div class="column">
                    <h4>Right Content</h4>
                    <p>This content is on the right side of a vertical divider.</p>
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    styleUrl: './basic-usage.component.scss'
})
export class BasicUsageComponent {}