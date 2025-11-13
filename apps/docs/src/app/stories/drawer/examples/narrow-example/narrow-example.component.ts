import { Component, computed, model, signal } from '@angular/core';
import { FktDrawerComponent } from 'frakton-ng/drawer';
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';

@Component({
    selector: 'fkt-drawer-narrow-example',
    imports: [FktDrawerComponent, FktIconComponent],
    templateUrl: './narrow-example.component.html',
    styleUrl: './narrow-example.component.scss'
})
export class NarrowExampleComponent {
    mode = model('push');
    width = model('200px');
    opened = model(false);
    activeIcon = signal('home');

    menuItems: {id: string; icon: FktIconName; label: string}[] = [
        {id: 'home', icon: 'home', label: 'Home'},
        {id: 'profile', icon: 'user', label: 'Profile'},
        {id: 'messages', icon: 'chat-bubble-left', label: 'Messages'},
        {id: 'notifications', icon: 'bell', label: 'Notifications'},
        {id: 'settings', icon: 'cog-6-tooth', label: 'Settings'},
        {id: 'help', icon: 'question-mark-circle', label: 'Help'}
    ];

    activeIconLabel = computed(() => {
        const item = this.menuItems.find(item => item.id === this.activeIcon());
        return item?.label || 'Home';
    });

    toggleDrawer() {
        this.opened.set(!this.opened());
    }

    selectItem(itemId: string) {
        this.activeIcon.set(itemId);
    }
}
