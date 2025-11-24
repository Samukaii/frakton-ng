import { Component } from '@angular/core';
import { FktAvatarComponent } from 'frakton-ng/avatar';

@Component({
    selector: 'basic-example',
    imports: [FktAvatarComponent],
    template: `
        <div class="example-container">
            <h3>Basic Avatar Usage</h3>

            <div class="avatar-grid">
                <div class="avatar-item">
                    <fkt-avatar
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                        alt="John Doe"
                        size="md"
                    />
                    <span>Image Avatar</span>
                </div>

                <div class="avatar-item">
                    <fkt-avatar
                        initials="AB"
                        backgroundColor="primary"
                        size="md"
                    />
                    <span>Initials Avatar</span>
                </div>

                <div class="avatar-item">
                    <fkt-avatar
                        icon="user-group"
                        backgroundColor="neutral"
                        size="md"
                    />
                    <span>Icon Avatar</span>
                </div>

                <div class="avatar-item">
                    <fkt-avatar
                        backgroundColor="secondary"
                        size="md"
                    />
                    <span>Placeholder</span>
                </div>
            </div>
        </div>
    `,
    styleUrl: './basic-example.component.scss'
})
export class BasicExampleComponent {}
