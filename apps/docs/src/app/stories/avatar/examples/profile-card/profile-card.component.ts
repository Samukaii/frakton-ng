import { Component, signal } from '@angular/core';
import { FktAvatarComponent } from 'frakton-ng/avatar';

@Component({
    selector: 'profile-card',
    imports: [FktAvatarComponent],
    template: `
        <div class="example-container">
            <h3>Profile Card with Avatar</h3>
            
            <div class="profile-card">
                <div class="profile-header">
                    <div class="profile-avatar-section">
                        <fkt-avatar
                            [src]="userProfile().avatar"
                            [alt]="userProfile().name"
                            size="xl"
                            shape="circle"
                            backgroundColor="primary"
                        />
                        <button class="avatar-edit-btn" type="button">
                            <span>📷</span>
                        </button>
                    </div>
                    
                    <div class="profile-info">
                        <h4 class="profile-name">{{ userProfile().name }}</h4>
                        <p class="profile-title">{{ userProfile().title }}</p>
                        <p class="profile-company">{{ userProfile().company }}</p>
                    </div>
                </div>
                
                <div class="profile-stats">
                    <div class="stat-item">
                        <span class="stat-value">{{ userProfile().projectsCount }}</span>
                        <span class="stat-label">Projects</span>
                    </div>
                    
                    <div class="stat-item">
                        <span class="stat-value">{{ userProfile().experience }}</span>
                        <span class="stat-label">Experience</span>
                    </div>
                    
                    <div class="stat-item">
                        <span class="stat-value">{{ userProfile().teamSize }}</span>
                        <span class="stat-label">Team Size</span>
                    </div>
                </div>
                
                <div class="profile-actions">
                    <button class="btn-primary">Send Message</button>
                    <button class="btn-secondary">View Profile</button>
                </div>
            </div>
            
            <div class="size-showcase">
                <h4>Different Avatar Sizes</h4>
                <div class="size-grid">
                    <div class="size-item">
                        <fkt-avatar
                            [src]="userProfile().avatar"
                            size="xs"
                            shape="circle"
                        />
                        <span>XS</span>
                    </div>
                    <div class="size-item">
                        <fkt-avatar
                            [src]="userProfile().avatar"
                            size="sm"
                            shape="circle"
                        />
                        <span>SM</span>
                    </div>
                    <div class="size-item">
                        <fkt-avatar
                            [src]="userProfile().avatar"
                            size="md"
                            shape="circle"
                        />
                        <span>MD</span>
                    </div>
                    <div class="size-item">
                        <fkt-avatar
                            [src]="userProfile().avatar"
                            size="lg"
                            shape="circle"
                        />
                        <span>LG</span>
                    </div>
                    <div class="size-item">
                        <fkt-avatar
                            [src]="userProfile().avatar"
                            size="xl"
                            shape="circle"
                        />
                        <span>XL</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
    userProfile = signal({
        name: 'Alex Johnson',
        title: 'Senior Frontend Developer',
        company: 'TechCorp Inc.',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        projectsCount: 24,
        experience: '5+ years',
        teamSize: 8
    });
}