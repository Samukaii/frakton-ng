import { Component, signal } from '@angular/core';
import { FktAvatarComponent } from 'frakton-ng/avatar';

interface User {
    id: string;
    name: string;
    initials: string;
    avatar?: string;
    role: string;
    isOnline: boolean;
}

@Component({
    selector: 'user-list',
    imports: [FktAvatarComponent],
    template: `
        <div class="example-container">
            <h3>User List with Avatars</h3>
            
            <div class="user-list">
                @for (user of users(); track user.id) {
                    <div class="user-item">
                        <div class="user-avatar-container">
                            <fkt-avatar
                                [src]="user.avatar"
                                [initials]="user.initials"
                                [alt]="user.name"
                                size="md"
                                shape="circle"
                                backgroundColor="primary"
                            />
                            @if (user.isOnline) {
                                <div class="online-indicator"></div>
                            }
                        </div>
                        
                        <div class="user-info">
                            <div class="user-name">{{ user.name }}</div>
                            <div class="user-role">{{ user.role }}</div>
                        </div>
                        
                        <div class="user-status">
                            <span [class]="user.isOnline ? 'status-online' : 'status-offline'">
                                {{ user.isOnline ? 'Online' : 'Offline' }}
                            </span>
                        </div>
                    </div>
                }
            </div>
        </div>
    `,
    styleUrl: './user-list.component.scss'
})
export class UserListComponent {
    users = signal<User[]>([
        {
            id: '1',
            name: 'John Doe',
            initials: 'JD',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            role: 'Senior Developer',
            isOnline: true
        },
        {
            id: '2',
            name: 'Jane Smith',
            initials: 'JS',
            role: 'Product Manager',
            isOnline: true
        },
        {
            id: '3',
            name: 'Mike Johnson',
            initials: 'MJ',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            role: 'Designer',
            isOnline: false
        },
        {
            id: '4',
            name: 'Sarah Wilson',
            initials: 'SW',
            role: 'Frontend Developer',
            isOnline: true
        },
        {
            id: '5',
            name: 'David Brown',
            initials: 'DB',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
            role: 'Backend Developer',
            isOnline: false
        }
    ]);
}