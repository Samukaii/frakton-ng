import './polyfills.server.mjs';
import"./chunk-RIAI3ORJ.mjs";var e=`<div class="narrow-example">\r
    <fkt-drawer\r
        [opened]="opened()"\r
        mode="push"\r
        width="60px">\r
        <div side-content data-fkt-theme="dark" class="drawer-content">\r
            <div class="logo-icon">\r
                <fkt-icon name="rocket-launch"></fkt-icon>\r
            </div>\r
\r
            <nav class="icon-navigation">\r
                @for (item of menuItems; track item.id) {\r
                    <button\r
                        class="nav-icon"\r
                        [class.active]="activeIcon() === item.id"\r
                        (click)="selectItem(item.id)"\r
                        [title]="item.label">\r
                        <fkt-icon [name]="item.icon"></fkt-icon>\r
                    </button>\r
                }\r
            </nav>\r
\r
            <div class="bottom-actions">\r
                <button class="nav-icon" title="Logout">\r
                    <fkt-icon name="power"></fkt-icon>\r
                </button>\r
            </div>\r
        </div>\r
\r
        <div side-main class="main-content">\r
            <header data-fkt-theme="dark" class="header">\r
                <button class="toggle-btn" (click)="toggleDrawer()">\r
                    @if (opened()) {\r
                        \u25C0\r
                    } @else {\r
                        \u25B6\r
                    }\r
                </button>\r
                <h2>Narrow Drawer Example</h2>\r
                <div class="header-info">\r
                    Current: {{ activeIconLabel() }}\r
                </div>\r
            </header>\r
\r
            <div class="content">\r
                <div class="hero-section">\r
                    <h3>Compact Icon Navigation</h3>\r
                    <p>This narrow drawer (60px) is perfect for icon-based navigation. It provides quick access to main\r
                        functions while taking minimal screen space.</p>\r
                </div>\r
\r
                <div class="features-section">\r
                    <div class="feature-item">\r
                        <div class="feature-title">\r
                            <div class="feature-icon">\r
                                <fkt-icon name="archive-box"></fkt-icon>\r
                            </div>\r
                            <h4>Space Efficient</h4>\r
                        </div>\r
                        <p>Minimal width maximizes content area while maintaining navigation accessibility.</p>\r
                    </div>\r
\r
                    <div class="feature-item">\r
                        <div class="feature-title">\r
                            <div class="feature-icon">\r
                                <fkt-icon name="cursor-arrow-rays"></fkt-icon>\r
                            </div>\r
                            <h4>Quick Access</h4>\r
                        </div>\r
                        <p>Icon-based navigation provides instant visual recognition and fast interaction.</p>\r
                    </div>\r
\r
                    <div class="feature-item">\r
                        <div class="feature-title">\r
                            <span class="feature-icon">\r
                                <fkt-icon name="device-phone-mobile"></fkt-icon>\r
                            </span>\r
                            <h4>Mobile First</h4>\r
                        </div>\r
                        <p>Perfect for mobile applications where screen real estate is precious.</p>\r
                    </div>\r
\r
                    <div class="feature-item">\r
                        <div class="feature-title">\r
                            <div class="feature-icon">\r
                                <fkt-icon name="paint-brush"></fkt-icon>\r
                            </div>\r
                            <h4>Clean Design</h4>\r
                        </div>\r
\r
                        <p>Minimalist approach focuses attention on main content without distraction.</p>\r
                    </div>\r
                </div>\r
\r
                <div class="content-area">\r
                    <div class="content-card">\r
                        @switch (activeIcon()) {\r
                            @case ('home') {\r
                                <div class="content-header">\r
                                    <fkt-icon name="home"></fkt-icon>\r
                                    <h4>Home Dashboard</h4>\r
                                </div>\r
                                <p>Welcome to your dashboard! Here you can see an overview of your activities and quick\r
                                    access to important features.</p>\r
                            }\r
                            @case ('profile') {\r
                                <div class="content-header">\r
                                    <fkt-icon name="user"></fkt-icon>\r
                                    <h4>User Profile</h4>\r
                                </div>\r
                                <p>Manage your personal information, preferences, and account settings from this\r
                                    page.</p>\r
                            }\r
                            @case ('messages') {\r
                                <div class="content-header">\r
                                    <fkt-icon name="chat-bubble-left"></fkt-icon>\r
                                    <h4>Messages</h4>\r
                                </div>\r
                                <p>View and respond to your messages. Stay connected with your team and contacts.</p>\r
                            }\r
                            @case ('notifications') {\r
                                <div class="content-header">\r
                                    <fkt-icon name="bell"></fkt-icon>\r
                                    <h4>Notifications</h4>\r
                                </div>\r
                                <p>Check your latest notifications and alerts. Configure your notification preferences\r
                                    here.</p>\r
                            }\r
                            @case ('settings') {\r
                                <div class="content-header">\r
                                    <fkt-icon name="cog-6-tooth"></fkt-icon>\r
                                    <h4>Settings</h4>\r
                                </div>\r
                                <p>Customize your application experience. Adjust themes, preferences, and system\r
                                    configurations.</p>\r
                            }\r
                            @case ('help') {\r
                                <div class="content-header">\r
                                    <fkt-icon name="question-mark-circle"></fkt-icon>\r
                                    <h4>Help & Support</h4>\r
                                </div>\r
                                <p>Find answers to common questions, access documentation, and contact support.</p>\r
                            }\r
                        }\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
    </fkt-drawer>\r
\r
</div>\r
`;var t=`.narrow-example {\r
    display: flex;\r
    height: 100%;\r
    min-height: 600px;\r
    background: var(--fkt-color-neutral-100);\r
\r
    .drawer-content {\r
        background: var(--fkt-color-modal-background);\r
        display: flex;\r
        flex-direction: column;\r
        align-items: center;\r
        height: 100%;\r
        box-sizing: border-box;\r
        padding: var(--fkt-space-md) 0;\r
\r
        .logo-icon {\r
            font-size: var(--fkt-font-size-2xl);\r
            margin-bottom: var(--fkt-space-xl);\r
            padding: var(--fkt-space-xs);\r
            background: var(--fkt-color-primary-opacity-20);\r
            border-radius: var(--fkt-radius-xl);\r
            display: flex;\r
            align-items: center;\r
            justify-content: center;\r
            box-sizing: border-box;\r
            width: 44px;\r
            height: 44px;\r
            color: var(--fkt-color-accent);\r
        }\r
\r
        .icon-navigation {\r
            flex: 1;\r
            display: flex;\r
            flex-direction: column;\r
            gap: var(--fkt-space-xs);\r
            width: 100%;\r
            align-items: center;\r
\r
            .nav-icon {\r
                width: 44px;\r
                height: 44px;\r
                border: none;\r
                background: none;\r
                color: var(--fkt-color-neutral-800);\r
                cursor: pointer;\r
                border-radius: var(--fkt-radius-xl);\r
                display: flex;\r
                align-items: center;\r
                justify-content: center;\r
                transition: var(--fkt-transition-base);\r
                position: relative;\r
\r
                &:hover {\r
                    background: var(--fkt-color-primary-opacity-20);\r
                    color: var(--fkt-color-neutral-900);\r
                    transform: scale(1.1);\r
                }\r
\r
                &.active {\r
                    background: var(--fkt-color-primary);\r
                    color: var(--fkt-color-on-primary);\r
                    box-shadow: var(--fkt-shadow-md);\r
\r
                    &::after {\r
                        content: '';\r
                        position: absolute;\r
                        right: -8px;\r
                        top: 50%;\r
                        transform: translateY(-50%);\r
                        width: 4px;\r
                        height: 20px;\r
                        background: var(--fkt-color-accent);\r
                        border-radius: var(--fkt-radius-sm);\r
                    }\r
                }\r
            }\r
        }\r
\r
        .bottom-actions {\r
            .nav-icon {\r
                width: 44px;\r
                height: 44px;\r
                border: none;\r
                background: none;\r
                color: var(--fkt-color-neutral-800);\r
                cursor: pointer;\r
                border-radius: var(--fkt-radius-xl);\r
                display: flex;\r
                align-items: center;\r
                justify-content: center;\r
                transition: var(--fkt-transition-base);\r
\r
                &:hover {\r
                    background: var(--fkt-color-danger-opacity-20);\r
                    color: var(--fkt-color-danger);\r
                    transform: scale(1.1);\r
                }\r
            }\r
        }\r
    }\r
\r
    .main-content {\r
        flex: 1;\r
        display: flex;\r
        flex-direction: column;\r
        height: 100%;\r
        background: var(--fkt-color-neutral-background);\r
        min-width: 0;\r
\r
        .header {\r
            padding: var(--fkt-space-md) var(--fkt-space-xl);\r
            background: var(--fkt-color-modal-background);\r
            color: var(--fkt-color-neutral-900);\r
            display: flex;\r
            align-items: center;\r
            gap: var(--fkt-space-md);\r
\r
            .toggle-btn {\r
                width: 36px;\r
                height: 36px;\r
                background: var(--fkt-color-primary-opacity-20);\r
                border: none;\r
                color: var(--fkt-color-neutral-900);\r
                border-radius: var(--fkt-radius-md);\r
                cursor: pointer;\r
                transition: var(--fkt-transition-base);\r
                font-size: var(--fkt-font-size-md);\r
                display: flex;\r
                align-items: center;\r
                justify-content: center;\r
\r
                &:hover {\r
                    background: var(--fkt-color-primary-opacity-40);\r
                    transform: scale(1.05);\r
                }\r
            }\r
\r
            h2 {\r
                margin: 0;\r
                font-size: 20px;\r
                font-weight: 600;\r
                flex: 1;\r
            }\r
\r
            .header-info {\r
                font-size: var(--fkt-font-size-sm);\r
                color: var(--fkt-color-primary-opacity-80);\r
                padding: var(--fkt-space-2xs) var(--fkt-space-sm);\r
                background: var(--fkt-color-primary-opacity-20);\r
                border-radius: var(--fkt-radius-sm);\r
            }\r
        }\r
\r
        .content {\r
            flex: 1;\r
            padding: 24px;\r
\r
            .hero-section {\r
                text-align: center;\r
                margin-bottom: 32px;\r
\r
                h3 {\r
                    margin: 0 0 12px 0;\r
                    font-size: 24px;\r
                    color: var(--fkt-color-neutral-900);\r
                }\r
\r
                p {\r
                    font-size: 16px;\r
                    color: var(--fkt-color-neutral-700);\r
                    line-height: 1.6;\r
                    max-width: 600px;\r
                    margin: 0 auto;\r
                }\r
            }\r
\r
            .features-section {\r
                display: grid;\r
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r
                gap: 20px;\r
                margin-bottom: 32px;\r
\r
                .feature-title {\r
                    display: flex;\r
                    gap: var(--fkt-space-xs);\r
                    justify-content: center;\r
                }\r
\r
                .feature-item {\r
                    text-align: center;\r
                    padding: 20px;\r
                    background: var(--fkt-color-card-background);\r
                    border-radius: 12px;\r
                    box-shadow: var(--fkt-shadow-md);\r
                    border: 1px solid var(--fkt-color-neutral-300);\r
                    transition: transform 0.2s ease;\r
\r
                    &:hover {\r
                        transform: translateY(-4px);\r
                    }\r
\r
                    .feature-icon {\r
                        font-size: 32px;\r
                        margin-bottom: 12px;\r
                    }\r
\r
                    h4 {\r
                        margin: 0 0 8px 0;\r
                        font-size: 16px;\r
                        color: var(--fkt-color-neutral-900);\r
                        font-weight: 600;\r
                    }\r
\r
                    p {\r
                        margin: 0;\r
                        font-size: 14px;\r
                        color: var(--fkt-color-neutral-700);\r
                        line-height: 1.4;\r
                    }\r
                }\r
            }\r
\r
            .content-area {\r
                .content-card {\r
                    background: var(--fkt-color-modal-background);\r
                    padding: var(--fkt-space-xl);\r
                    border-radius: var(--fkt-radius-xl);\r
                    box-shadow: var(--fkt-shadow-lg);\r
                    border-left: 4px solid var(--fkt-color-accent);\r
\r
                    .content-header {\r
                        display: flex;\r
                        align-items: center;\r
                        gap: var(--fkt-space-sm);\r
                        margin-bottom: var(--fkt-space-sm);\r
\r
                        fkt-icon {\r
                            color: var(--fkt-color-accent);\r
                        }\r
                    }\r
\r
                    h4 {\r
                        margin: 0;\r
                        font-size: var(--fkt-font-size-xl);\r
                        color: var(--fkt-color-text-base);\r
                        font-weight: var(--fkt-font-semibold);\r
                    }\r
\r
                    p {\r
                        margin: 0;\r
                        line-height: var(--fkt-line-height-md);\r
                        color: var(--fkt-color-text-muted);\r
                        font-size: var(--fkt-font-size-md);\r
                    }\r
                }\r
            }\r
        }\r
    }\r
}\r
`;var a=`import { Component, computed, model, signal } from '@angular/core';\r
import { FktDrawerComponent } from 'frakton-ng/drawer';\r
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';\r
\r
@Component({\r
    selector: 'fkt-drawer-narrow-example',\r
    imports: [FktDrawerComponent, FktIconComponent],\r
    templateUrl: './narrow-example.component.html',\r
    styleUrl: './narrow-example.component.scss'\r
})\r
export class NarrowExampleComponent {\r
    mode = model('push');\r
    width = model('200px');\r
    opened = model(false);\r
    activeIcon = signal('home');\r
\r
    menuItems: {id: string; icon: FktIconName; label: string}[] = [\r
        {id: 'home', icon: 'home', label: 'Home'},\r
        {id: 'profile', icon: 'user', label: 'Profile'},\r
        {id: 'messages', icon: 'chat-bubble-left', label: 'Messages'},\r
        {id: 'notifications', icon: 'bell', label: 'Notifications'},\r
        {id: 'settings', icon: 'cog-6-tooth', label: 'Settings'},\r
        {id: 'help', icon: 'question-mark-circle', label: 'Help'}\r
    ];\r
\r
    activeIconLabel = computed(() => {\r
        const item = this.menuItems.find(item => item.id === this.activeIcon());\r
        return item?.label || 'Home';\r
    });\r
\r
    toggleDrawer() {\r
        this.opened.set(!this.opened());\r
    }\r
\r
    selectItem(itemId: string) {\r
        this.activeIcon.set(itemId);\r
    }\r
}\r
`;var o=`<div class="opened-example">\r
  <fkt-drawer \r
    [opened]="opened()" \r
    mode="push" \r
    width="250px">\r
    <div side-content class="drawer-content">\r
      <div class="logo-section">\r
        <div class="logo">\r
          <fkt-icon name="building-office"></fkt-icon>\r
        </div>\r
        <h3>Admin Panel</h3>\r
      </div>\r
      \r
      <nav class="navigation">\r
        <div class="nav-section">\r
          <div class="nav-label">MAIN</div>\r
          <a href="#" class="nav-item active">\r
            <span class="icon">\r
              <fkt-icon name="chart-bar"></fkt-icon>\r
            </span>\r
            <span>Dashboard</span>\r
          </a>\r
          <a href="#" class="nav-item">\r
            <span class="icon">\r
              <fkt-icon name="users"></fkt-icon>\r
            </span>\r
            <span>Users</span>\r
          </a>\r
          <a href="#" class="nav-item">\r
            <span class="icon">\r
              <fkt-icon name="cube"></fkt-icon>\r
            </span>\r
            <span>Products</span>\r
          </a>\r
        </div>\r
        \r
        <div class="nav-section">\r
          <div class="nav-label">ANALYTICS</div>\r
          <a href="#" class="nav-item">\r
            <span class="icon">\r
              <fkt-icon name="document-chart-bar"></fkt-icon>\r
            </span>\r
            <span>Reports</span>\r
          </a>\r
          <a href="#" class="nav-item">\r
            <span class="icon">\r
              <fkt-icon name="chart-pie"></fkt-icon>\r
            </span>\r
            <span>Analytics</span>\r
          </a>\r
        </div>\r
        \r
        <div class="nav-section">\r
          <div class="nav-label">SETTINGS</div>\r
          <a href="#" class="nav-item">\r
            <span class="icon">\r
              <fkt-icon name="cog-6-tooth"></fkt-icon>\r
            </span>\r
            <span>Configuration</span>\r
          </a>\r
          <a href="#" class="nav-item">\r
            <span class="icon">\r
              <fkt-icon name="wrench"></fkt-icon>\r
            </span>\r
            <span>Tools</span>\r
          </a>\r
        </div>\r
      </nav>\r
      \r
      <div class="user-section">\r
        <div class="user-avatar">\r
          <fkt-icon name="user-circle"></fkt-icon>\r
        </div>\r
        <div class="user-info">\r
          <div class="user-name">John Doe</div>\r
          <div class="user-role">Administrator</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div side-main class="main-content">\r
    <header class="header">\r
      <button class="toggle-btn" (click)="toggleDrawer()">\r
        @if (opened()) {\r
          <fkt-icon name="chevron-left"></fkt-icon>\r
          Collapse\r
        } @else {\r
          <fkt-icon name="chevron-right"></fkt-icon>\r
          Expand\r
        }\r
      </button>\r
      <h2>Opened State Example</h2>\r
    </header>\r
    \r
    <div class="content">\r
      <div class="welcome-card">\r
        <h3>Welcome to the Admin Dashboard</h3>\r
        <p>This example shows the drawer in its opened state by default, demonstrating how it looks when fully expanded with navigation content.</p>\r
      </div>\r
      \r
      <div class="stats-grid">\r
        <div class="stat-card">\r
          <div class="stat-value">1,234</div>\r
          <div class="stat-label">Total Users</div>\r
        </div>\r
        \r
        <div class="stat-card">\r
          <div class="stat-value">567</div>\r
          <div class="stat-label">Active Sessions</div>\r
        </div>\r
        \r
        <div class="stat-card">\r
          <div class="stat-value">89%</div>\r
          <div class="stat-label">Uptime</div>\r
        </div>\r
        \r
        <div class="stat-card">\r
          <div class="stat-value">$12.3k</div>\r
          <div class="stat-label">Revenue</div>\r
        </div>\r
      </div>\r
    </div>\r
    </div>\r
  </fkt-drawer>\r
</div>`;var r=`.opened-example {\r
    display: flex;\r
    height: 100%;\r
    min-height: 600px;\r
    background: var(--fkt-color-neutral-50);\r
\r
    .drawer-content {\r
        background: var(--fkt-color-modal-background);\r
        color: var(--fkt-color-neutral-100);\r
        display: flex;\r
        flex-direction: column;\r
        border-right: solid 1px var(--fkt-color-neutral-300);\r
        height: 100%;\r
\r
        .logo-section {\r
            display: flex;\r
            gap: var(--fkt-space-xs);\r
            padding: var(--fkt-space-xl) var(--fkt-space-lg);\r
            text-align: center;\r
            border-bottom: 1px solid var(--fkt-color-neutral-300);\r
\r
            .logo {\r
                font-size: var(--fkt-font-size-3xl);\r
                margin-bottom: var(--fkt-space-xs);\r
                color: var(--fkt-color-accent);\r
            }\r
\r
            h3 {\r
                margin: 0;\r
                font-size: var(--fkt-font-size-lg);\r
                font-weight: var(--fkt-font-semibold);\r
                color: var(--fkt-color-accent);\r
            }\r
        }\r
\r
        .navigation {\r
            flex: 1;\r
            padding: 20px 0;\r
            overflow-y: auto;\r
\r
            .nav-section {\r
                margin-bottom: 24px;\r
\r
                .nav-label {\r
                    padding: 0 var(--fkt-space-lg) var(--fkt-space-xs);\r
                    font-size: 11px;\r
                    font-weight: var(--fkt-font-semibold);\r
                    color: var(--fkt-color-neutral-500);\r
                    text-transform: uppercase;\r
                    letter-spacing: 1px;\r
                }\r
\r
                .nav-item {\r
                    display: flex;\r
                    align-items: center;\r
                    padding: var(--fkt-space-sm) var(--fkt-space-lg);\r
                    color: var(--fkt-color-neutral-700);\r
                    text-decoration: none;\r
                    transition: var(--fkt-transition-base);\r
                    border-left: 3px solid transparent;\r
\r
                    .icon {\r
                        margin-right: var(--fkt-space-sm);\r
                        width: 20px;\r
                        text-align: center;\r
                        color: inherit;\r
                    }\r
\r
                    &:hover {\r
                        background: var(--fkt-color-neutral-400);\r
                        color: var(--fkt-color-neutral-900);\r
                        border-left-color: var(--fkt-color-accent);\r
                    }\r
\r
                    &.active {\r
                        background: var(--fkt-color-neutral-300);\r
                        color: var(--fkt-color-neutral-900);\r
                        border-left-color: var(--fkt-color-accent);\r
\r
                        .icon {\r
                            color: var(--fkt-color-accent);\r
                        }\r
                    }\r
                }\r
            }\r
        }\r
\r
        .user-section {\r
            padding: var(--fkt-space-lg);\r
            border-top: 1px solid var(--fkt-color-neutral-300);\r
            display: flex;\r
            align-items: center;\r
            gap: var(--fkt-space-sm);\r
\r
            .user-avatar {\r
                width: 40px;\r
                height: 40px;\r
                background: var(--fkt-color-accent);\r
                border-radius: var(--fkt-radius-full);\r
                display: flex;\r
                align-items: center;\r
                justify-content: center;\r
                color: var(--fkt-color-on-accent);\r
            }\r
\r
            .user-info {\r
                .user-name {\r
                    font-size: var(--fkt-font-size-sm);\r
                    font-weight: var(--fkt-font-semibold);\r
                    color: var(--fkt-color-neutral-900);\r
                    margin-bottom: 2px;\r
                }\r
\r
                .user-role {\r
                    font-size: var(--fkt-font-size-xs);\r
                    color: var(--fkt-color-neutral-600);\r
                }\r
            }\r
        }\r
    }\r
\r
    .main-content {\r
        flex: 1;\r
        display: flex;\r
        flex-direction: column;\r
        background: var(--fkt-color-neutral-background);\r
        height: 100%;\r
        min-width: 0;\r
\r
        .header {\r
            padding: var(--fkt-space-lg) var(--fkt-space-xl);\r
            background: var(--fkt-color-modal-background);\r
            color: var(--fkt-color-neutral-900);\r
            display: flex;\r
            align-items: center;\r
            gap: var(--fkt-space-md);\r
\r
            .toggle-btn {\r
                padding: var(--fkt-space-xs) var(--fkt-space-md);\r
                background: var(--fkt-color-accent-opacity-20);\r
                border: none;\r
                color: var(--fkt-color-neutral-900);\r
                border-radius: var(--fkt-radius-sm);\r
                cursor: pointer;\r
                transition: var(--fkt-transition-base);\r
                font-size: var(--fkt-font-size-sm);\r
                display: flex;\r
                align-items: center;\r
                gap: var(--fkt-space-xs);\r
\r
                &:hover {\r
                    background: var(--fkt-color-accent-opacity-30);\r
                }\r
            }\r
\r
            h2 {\r
                margin: 0;\r
                font-size: var(--fkt-font-size-2xl);\r
                font-weight: var(--fkt-font-semibold);\r
            }\r
        }\r
\r
        .content {\r
            flex: 1;\r
            padding: 24px;\r
\r
            .welcome-card {\r
                background: var(--fkt-color-modal-background);\r
                padding: 24px;\r
                border-radius: 8px;\r
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r
                margin-bottom: 24px;\r
                border-left: 4px solid #e94560;\r
\r
                h3 {\r
                    margin: 0 0 12px 0;\r
                    color: var(--fkt-color-neutral-900);\r
                    font-size: 20px;\r
                }\r
\r
                p {\r
                    margin: 0;\r
                    line-height: 1.6;\r
                    color: var(--fkt-color-neutral-600);\r
                }\r
            }\r
\r
            .stats-grid {\r
                display: grid;\r
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r
                gap: 16px;\r
\r
                .stat-card {\r
                    background: var(--fkt-color-modal-background);\r
                    padding: 24px;\r
                    border-radius: 8px;\r
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r
                    text-align: center;\r
                    transition: transform 0.2s ease;\r
\r
                    &:hover {\r
                        transform: translateY(-2px);\r
                    }\r
\r
                    .stat-value {\r
                        font-size: 32px;\r
                        font-weight: 700;\r
                        color: #e94560;\r
                        margin-bottom: 8px;\r
                    }\r
\r
                    .stat-label {\r
                        font-size: 14px;\r
                        color: var(--fkt-color-neutral-900);\r
                        text-transform: uppercase;\r
                        letter-spacing: 0.5px;\r
                    }\r
                }\r
            }\r
        }\r
    }\r
}\r
`;var n=`import { Component, signal } from '@angular/core';\r
import { FktDrawerComponent } from 'frakton-ng/drawer';\r
import { FktIconComponent } from 'frakton-ng/icon';\r
\r
@Component({\r
  selector: 'fkt-drawer-opened-example',\r
  imports: [FktDrawerComponent, FktIconComponent],\r
  templateUrl: './opened-example.component.html',\r
  styleUrl: './opened-example.component.scss'\r
})\r
export class OpenedExampleComponent {\r
  opened = signal(true);\r
\r
  toggleDrawer() {\r
    this.opened.set(!this.opened());\r
  }\r
}`;var i=`<div class="overlay-example">\r
  <fkt-drawer \r
    [opened]="opened()" \r
    mode="overlay" \r
    width="300px"\r
    (backdropClick)="onBackdropClick()">\r
    <div side-content class="drawer-content">\r
      <div class="drawer-header">\r
        <h3>Quick Actions</h3>\r
        <button class="close-btn" (click)="toggleDrawer()">\r
          <fkt-icon name="x-mark"></fkt-icon>\r
        </button>\r
      </div>\r
      <div class="drawer-body">\r
        <div class="action-group">\r
          <h4>Recent Files</h4>\r
          <a href="#" class="action-item">\r
            <fkt-icon name="document"></fkt-icon>\r
            Document.pdf\r
          </a>\r
          <a href="#" class="action-item">\r
            <fkt-icon name="table-cells"></fkt-icon>\r
            Spreadsheet.xlsx\r
          </a>\r
          <a href="#" class="action-item">\r
            <fkt-icon name="photo"></fkt-icon>\r
            Image.png\r
          </a>\r
        </div>\r
        \r
        <div class="action-group">\r
          <h4>Quick Tools</h4>\r
          <a href="#" class="action-item">\r
            <fkt-icon name="magnifying-glass"></fkt-icon>\r
            Search\r
          </a>\r
          <a href="#" class="action-item">\r
            <fkt-icon name="cog-6-tooth"></fkt-icon>\r
            Settings\r
          </a>\r
          <a href="#" class="action-item">\r
            <fkt-icon name="arrow-up-tray"></fkt-icon>\r
            Upload\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div side-main class="main-content">\r
    <header class="header">\r
      <button class="toggle-btn" (click)="toggleDrawer()">\r
        <fkt-icon name="queue-list"></fkt-icon>\r
        Quick Menu\r
      </button>\r
      <h2>Overlay Mode Drawer</h2>\r
    </header>\r
    \r
    <div class="content">\r
      <p>This drawer floats over the main content with a backdrop. The content remains in place and is overlaid by the drawer.</p>\r
      <p>Click outside the drawer (on the backdrop) or the close button to dismiss it.</p>\r
      \r
      <div class="feature-grid">\r
        <div class="feature-card">\r
          <div class="card-header">\r
            <fkt-icon name="cursor-arrow-rays"></fkt-icon>\r
            <h4>Focused Access</h4>\r
          </div>\r
          <p>Provides quick access to tools and actions without disrupting the main workflow.</p>\r
        </div>\r
        \r
        <div class="feature-card">\r
          <div class="card-header">\r
            <fkt-icon name="cursor-arrow-ripple"></fkt-icon>\r
            <h4>Backdrop Click</h4>\r
          </div>\r
          <p>Click anywhere outside the drawer to close it - intuitive and user-friendly.</p>\r
        </div>\r
        \r
        <div class="feature-card">\r
          <div class="card-header">\r
            <fkt-icon name="device-phone-mobile"></fkt-icon>\r
            <h4>Mobile Friendly</h4>\r
          </div>\r
          <p>Perfect for mobile interfaces where screen space is limited.</p>\r
        </div>\r
        \r
        <div class="feature-card">\r
          <div class="card-header">\r
            <fkt-icon name="bolt"></fkt-icon>\r
            <h4>Quick Actions</h4>\r
          </div>\r
          <p>Ideal for context menus, filters, and temporary tool panels.</p>\r
        </div>\r
      </div>\r
    </div>\r
    </div>\r
  </fkt-drawer>\r
</div>`;var s=`.overlay-example {\r
  height: 100%;\r
  min-height: 500px;\r
  position: relative;\r
\r
  .drawer-content {\r
    background: var(--fkt-color-modal-background);\r
    height: 100%;\r
    box-shadow: var(--fkt-shadow-xl);\r
    display: flex;\r
    flex-direction: column;\r
\r
    .drawer-header {\r
      padding: var(--fkt-space-lg);\r
      background: var(--fkt-color-modal-background);\r
      color: var(--fkt-color-neutral-900);\r
      display: flex;\r
      justify-content: space-between;\r
      align-items: center;\r
\r
      h3 {\r
        margin: 0;\r
        font-size: var(--fkt-font-size-lg);\r
        font-weight: var(--fkt-font-semibold);\r
      }\r
\r
      .close-btn {\r
        background: none;\r
        border: none;\r
        color: var(--fkt-color-neutral-900);\r
        cursor: pointer;\r
        padding: 0;\r
        width: 30px;\r
        height: 30px;\r
        display: flex;\r
        align-items: center;\r
        justify-content: center;\r
        border-radius: var(--fkt-radius-full);\r
        transition: var(--fkt-transition-base);\r
\r
        &:hover {\r
          background: var(--fkt-color-neutral-400);\r
        }\r
      }\r
    }\r
\r
    .drawer-body {\r
      flex: 1;\r
      padding: var(--fkt-space-lg);\r
      overflow-y: auto;\r
\r
      .action-group {\r
        margin-bottom: var(--fkt-space-xl);\r
\r
        &:last-child {\r
          margin-bottom: 0;\r
        }\r
\r
        h4 {\r
          margin: 0 0 var(--fkt-space-sm) 0;\r
          color: var(--fkt-color-text-base);\r
          font-size: var(--fkt-font-size-sm);\r
          font-weight: var(--fkt-font-semibold);\r
          text-transform: uppercase;\r
          letter-spacing: 0.5px;\r
        }\r
\r
        .action-item {\r
          display: flex;\r
          align-items: center;\r
          gap: var(--fkt-space-sm);\r
          padding: var(--fkt-space-sm) var(--fkt-space-md);\r
          color: var(--fkt-color-text-muted);\r
          text-decoration: none;\r
          border-radius: var(--fkt-radius-md);\r
          margin-bottom: var(--fkt-space-3xs);\r
          transition: var(--fkt-transition-base);\r
          border: 1px solid transparent;\r
\r
          fkt-icon {\r
            color: var(--fkt-color-info);\r
          }\r
\r
          &:hover {\r
            background: var(--fkt-color-neutral-300);\r
            border-color: var(--fkt-color-neutral-200);\r
            color: var(--fkt-color-text-base);\r
          }\r
        }\r
      }\r
    }\r
  }\r
\r
  .main-content {\r
    height: 100%;\r
    background: var(--fkt-color-neutral-background);\r
    display: flex;\r
    flex-direction: column;\r
\r
    .header {\r
      padding: var(--fkt-space-lg);\r
      background: var(--fkt-color-modal-background);\r
      color: var(--fkt-color-neutral-900);\r
      display: flex;\r
      align-items: center;\r
      gap: var(--fkt-space-md);\r
\r
      .toggle-btn {\r
        padding: var(--fkt-space-xs) var(--fkt-space-md);\r
        background: var(--fkt-color-neutral-300);\r
        border: none;\r
        color: var(--fkt-color-neutral-900);\r
        border-radius: var(--fkt-radius-sm);\r
        cursor: pointer;\r
        transition: var(--fkt-transition-base);\r
        display: flex;\r
        align-items: center;\r
        gap: var(--fkt-space-xs);\r
\r
        &:hover {\r
          background: var(--fkt-color-neutral-400);\r
        }\r
      }\r
\r
      h2 {\r
        margin: 0;\r
        font-size: var(--fkt-font-size-2xl);\r
        font-weight: var(--fkt-font-semibold);\r
      }\r
    }\r
\r
    .content {\r
      flex: 1;\r
      padding: 24px;\r
\r
      p {\r
        margin: 0 0 16px 0;\r
        line-height: 1.6;\r
        color: var(--fkt-color-neutral-600);\r
      }\r
\r
      .feature-grid {\r
        display: grid;\r
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r
        gap: 20px;\r
        margin-top: 24px;\r
\r
        .feature-card {\r
          background: var(--fkt-color-modal-background);\r
          padding: var(--fkt-space-lg);\r
          border-radius: var(--fkt-radius-lg);\r
          box-shadow: var(--fkt-shadow-md);\r
          border-left: 4px solid var(--fkt-color-info);\r
          transition: var(--fkt-transition-base);\r
\r
          &:hover {\r
            transform: translateY(-2px);\r
            box-shadow: var(--fkt-shadow-lg);\r
          }\r
\r
          .card-header {\r
            display: flex;\r
            align-items: center;\r
            gap: var(--fkt-space-sm);\r
            margin-bottom: var(--fkt-space-sm);\r
\r
            fkt-icon {\r
              color: var(--fkt-color-info);\r
            }\r
          }\r
\r
          h4 {\r
            margin: 0;\r
            color: var(--fkt-color-text-base);\r
            font-size: var(--fkt-font-size-md);\r
            font-weight: var(--fkt-font-semibold);\r
          }\r
\r
          p {\r
            margin: 0;\r
            font-size: var(--fkt-font-size-sm);\r
            color: var(--fkt-color-text-muted);\r
            line-height: var(--fkt-line-height-md);\r
          }\r
        }\r
      }\r
    }\r
  }\r
}\r
`;var c=`import { Component, signal } from '@angular/core';\r
import { FktDrawerComponent } from 'frakton-ng/drawer';\r
import { FktIconComponent } from 'frakton-ng/icon';\r
\r
@Component({\r
  selector: 'fkt-drawer-overlay-example',\r
  imports: [FktDrawerComponent, FktIconComponent],\r
  templateUrl: './overlay-example.component.html',\r
  styleUrl: './overlay-example.component.scss'\r
})\r
export class OverlayExampleComponent {\r
  opened = signal(false);\r
\r
  toggleDrawer() {\r
    this.opened.set(!this.opened());\r
  }\r
\r
  onBackdropClick() {\r
    this.opened.set(false);\r
  }\r
}`;var l=`<div class="push-example">\r
  <fkt-drawer \r
    [opened]="opened()" \r
    mode="push" \r
    width="250px">\r
    <div side-content class="drawer-content">\r
      <h3>Navigation Menu</h3>\r
      <nav>\r
        <a href="#" class="nav-item">Dashboard</a>\r
        <a href="#" class="nav-item">Profile</a>\r
        <a href="#" class="nav-item">Settings</a>\r
        <a href="#" class="nav-item">Analytics</a>\r
        <a href="#" class="nav-item">Reports</a>\r
        <a href="#" class="nav-item">Help</a>\r
      </nav>\r
    </div>\r
\r
    <div side-main class="main-content">\r
    <header class="header">\r
      <button class="toggle-btn" (click)="toggleDrawer()">\r
        <fkt-icon name="bars-3"></fkt-icon>\r
        Toggle Menu\r
      </button>\r
      <h2>Push Mode Drawer</h2>\r
    </header>\r
    \r
    <div class="content">\r
      <p>This drawer pushes the main content to the side when opened. The content moves and resizes to accommodate the drawer.</p>\r
      <p>Try clicking the toggle button to see how the drawer pushes the main content area.</p>\r
      \r
      <div class="demo-content">\r
        <h4>Sample Content</h4>\r
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r
      </div>\r
    </div>\r
    </div>\r
  </fkt-drawer>\r
</div>`;var d=`.push-example {\r
    display: flex;\r
    height: 100%;\r
    min-height: 500px;\r
    background: var(--fkt-color-neutral-100);\r
\r
    .drawer-content {\r
        padding: var(--fkt-space-lg);\r
        background: var(--fkt-color-modal-background);\r
        color: var(--fkt-color-neutral-900);\r
        border-right: solid 1px var(--fkt-color-neutral-300);\r
        height: 100%;\r
\r
        h3 {\r
            margin: 0 0 var(--fkt-space-lg) 0;\r
            font-size: var(--fkt-font-size-lg);\r
            color: var(--fkt-color-neutral-900);\r
            font-weight: var(--fkt-font-semibold);\r
        }\r
\r
        nav {\r
            display: flex;\r
            flex-direction: column;\r
            gap: var(--fkt-space-xs);\r
        }\r
\r
        .nav-item {\r
            padding: var(--fkt-space-sm) var(--fkt-space-md);\r
            color: var(--fkt-color-primary-opacity-70);\r
            text-decoration: none;\r
            border-radius: var(--fkt-radius-md);\r
            transition: var(--fkt-transition-base);\r
\r
            &:hover {\r
                background: var(--fkt-color-primary-hover);\r
                color: var(--fkt-color-on-primary);\r
            }\r
        }\r
    }\r
\r
    .main-content {\r
        flex: 1;\r
        display: flex;\r
        flex-direction: column;\r
        background: var(--fkt-color-neutral-background);\r
        height: 100%;\r
        min-width: 0;\r
\r
        .header {\r
            padding: var(--fkt-space-lg);\r
            background: var(--fkt-color-modal-background);\r
            color: var(--fkt-color-neutral-900);\r
            display: flex;\r
            align-items: center;\r
            gap: var(--fkt-space-md);\r
\r
            .toggle-btn {\r
                padding: var(--fkt-space-xs) var(--fkt-space-md);\r
                background: var(--fkt-color-neutral-300);\r
                border: none;\r
                color: var(--fkt-color-neutral-900);\r
                border-radius: var(--fkt-radius-sm);\r
                cursor: pointer;\r
                transition: var(--fkt-transition-base);\r
                display: flex;\r
                align-items: center;\r
                gap: var(--fkt-space-xs);\r
\r
                &:hover {\r
                    background: var(--fkt-color-neutral-400);\r
                }\r
            }\r
\r
            h2 {\r
                margin: 0;\r
                font-size: var(--fkt-font-size-2xl);\r
                font-weight: var(--fkt-font-semibold);\r
            }\r
        }\r
\r
        .content {\r
            flex: 1;\r
            padding: var(--fkt-space-xl);\r
\r
            p {\r
                margin: 0 0 var(--fkt-space-md) 0;\r
                line-height: var(--fkt-line-height-md);\r
                color: var(--fkt-color-text-base);\r
            }\r
\r
            .demo-content {\r
                background: var(--fkt-color-modal-background);\r
                padding: var(--fkt-space-lg);\r
                border-radius: var(--fkt-radius-lg);\r
                border-left: 4px solid var(--fkt-color-info);\r
                margin-top: var(--fkt-space-xl);\r
\r
                h4 {\r
                    margin: 0 0 var(--fkt-space-sm) 0;\r
                    color: var(--fkt-color-text-base);\r
                    font-weight: var(--fkt-font-semibold);\r
                }\r
\r
                p {\r
                    margin: 0 0 var(--fkt-space-sm) 0;\r
\r
                    &:last-child {\r
                        margin: 0;\r
                    }\r
                }\r
            }\r
        }\r
    }\r
}\r
`;var p=`import { Component, signal } from '@angular/core';\r
import { FktDrawerComponent } from 'frakton-ng/drawer';\r
import { FktIconComponent } from 'frakton-ng/icon';\r
\r
@Component({\r
  selector: 'fkt-drawer-push-example',\r
  imports: [FktDrawerComponent, FktIconComponent],\r
  templateUrl: './push-example.component.html',\r
  styleUrl: './push-example.component.scss'\r
})\r
export class PushExampleComponent {\r
  opened = signal(false);\r
\r
  toggleDrawer() {\r
    this.opened.set(!this.opened());\r
  }\r
}`;var f=`<div class="wide-example">\r
  <fkt-drawer\r
    [opened]="opened()"\r
    mode="push"\r
    width="500px">\r
    <div side-content class="drawer-content">\r
      <div class="drawer-header">\r
        <h3>Product Categories</h3>\r
        <p>Browse our extensive product catalog</p>\r
      </div>\r
\r
      <div class="search-section">\r
        <input type="text" placeholder="Search categories..." class="search-input">\r
      </div>\r
\r
      <div class="categories-list">\r
        @for (category of categories; track category.id) {\r
          <button\r
            class="category-item"\r
            [class.active]="selectedCategory() === category.id"\r
            (click)="selectCategory(category.id)">\r
            <div class="category-info">\r
              <span class="category-name">{{ category.name }}</span>\r
              <span class="category-count">{{ category.count }} items</span>\r
            </div>\r
            <div class="category-arrow">\u203A</div>\r
          </button>\r
        }\r
      </div>\r
\r
      <div class="filters-section">\r
        <h4>Filters</h4>\r
\r
        <div class="filter-group">\r
          <label>Price Range</label>\r
          <div class="price-inputs">\r
            <input type="number" placeholder="Min" class="price-input">\r
            <span>-</span>\r
            <input type="number" placeholder="Max" class="price-input">\r
          </div>\r
        </div>\r
\r
        <div class="filter-group">\r
          <label>Rating</label>\r
          <div class="rating-options">\r
            <label class="rating-option">\r
              <input type="checkbox">\r
              \u2B50\u2B50\u2B50\u2B50\u2B50 & up\r
            </label>\r
            <label class="rating-option">\r
              <input type="checkbox">\r
              \u2B50\u2B50\u2B50\u2B50 & up\r
            </label>\r
            <label class="rating-option">\r
              <input type="checkbox">\r
              \u2B50\u2B50\u2B50 & up\r
            </label>\r
          </div>\r
        </div>\r
\r
        <div class="filter-group">\r
          <label>Availability</label>\r
          <label class="checkbox-option">\r
            <input type="checkbox">\r
            In Stock\r
          </label>\r
          <label class="checkbox-option">\r
            <input type="checkbox">\r
            On Sale\r
          </label>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div side-main class="main-content">\r
    <header class="header">\r
      <button class="toggle-btn" (click)="toggleDrawer()">\r
        <fkt-icon name="funnel"></fkt-icon>\r
        Categories & Filters\r
      </button>\r
      <h2>Wide Drawer Example</h2>\r
      <div class="header-actions">\r
        <button class="action-btn">\r
          <fkt-icon name="arrows-up-down"></fkt-icon>\r
          Sort\r
        </button>\r
        <button class="action-btn">\r
          <fkt-icon name="view-columns"></fkt-icon>\r
          View\r
        </button>\r
      </div>\r
    </header>\r
\r
    <div class="content">\r
      <div class="breadcrumb">\r
        <span>Home</span>\r
        <span>\u203A</span>\r
        <span>{{ selectedCategoryName() }}</span>\r
      </div>\r
\r
      <div class="content-description">\r
        <h3>Product Catalog</h3>\r
        <p>This wide drawer (350px) provides more space for detailed navigation, filters, and search options. Perfect for e-commerce sites, data dashboards, and complex applications.</p>\r
      </div>\r
\r
      <div class="products-grid">\r
        @for (i of [1,2,3,4,5,6]; track i) {\r
          <div class="product-card">\r
            <div class="product-image">\r
              <fkt-icon name="shopping-bag"></fkt-icon>\r
            </div>\r
            <div class="product-info">\r
              <h4>Product {{ i }}</h4>\r
              <p class="product-description">High-quality product with excellent features and ratings.</p>\r
              <div class="product-meta">\r
                <span class="price">$99.99</span>\r
                <span class="rating">\u2B50\u2B50\u2B50\u2B50\u2B50</span>\r
              </div>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
    </div>\r
  </fkt-drawer>\r
</div>\r
`;var m=`.wide-example {\r
    display: flex;\r
    height: 100%;\r
    min-height: 700px;\r
    background: var(--fkt-color-modal-background);\r
\r
    .drawer-content {\r
        background: var(--fkt-color-modal-background);\r
        display: flex;\r
        flex-direction: column;\r
        height: 100%;\r
        border-right: 1px solid var(--fkt-color-neutral-300);\r
        box-sizing: border-box;\r
\r
        .drawer-header {\r
            padding: 24px 20px;\r
            border-bottom: 1px solid var(--fkt-color-neutral-300);\r
\r
            h3 {\r
                margin: 0 0 8px 0;\r
                font-size: 20px;\r
                color: var(--fkt-color-neutral-900);\r
                font-weight: 600;\r
            }\r
\r
            p {\r
                margin: 0;\r
                color: var(--fkt-color-neutral-600);\r
                font-size: 14px;\r
            }\r
        }\r
\r
        .search-section {\r
            padding: 20px;\r
            border-bottom: 1px solid var(--fkt-color-neutral-300);\r
\r
            .search-input {\r
                width: 100%;\r
                padding: 12px 16px;\r
                border: 1px solid var(--fkt-color-neutral-400);\r
                background-color: transparent;\r
                box-sizing: border-box;\r
                color: var(--fkt-color-neutral-900);\r
                border-radius: 8px;\r
                font-size: 14px;\r
\r
                &:focus {\r
                    outline: none;\r
                    border-color: var(--fkt-color-accent);\r
                }\r
            }\r
        }\r
\r
        .categories-list {\r
            flex: 1;\r
            overflow-y: auto;\r
            padding: 20px;\r
            border-bottom: 1px solid var(--fkt-color-neutral-300);\r
\r
            .category-item {\r
                display: flex;\r
                align-items: center;\r
                justify-content: space-between;\r
                width: 100%;\r
                padding: 16px;\r
                border: none;\r
                background: none;\r
                border-radius: 8px;\r
                cursor: pointer;\r
                margin-bottom: 8px;\r
                text-align: left;\r
                transition: all 0.2s ease;\r
\r
                &:hover {\r
                    background: var(--fkt-color-neutral-300);\r
                }\r
\r
                &.active {\r
                    background: var(--fkt-color-info-opacity-10);\r
                    border-left: 4px solid var(--fkt-color-info);\r
\r
                    .category-name {\r
                        color: var(--fkt-color-neutral-900);\r
                        font-weight: 600;\r
                    }\r
                }\r
\r
                .category-info {\r
                    .category-name {\r
                        display: block;\r
                        font-size: 14px;\r
                        color: var(--fkt-color-neutral-900);\r
                        margin-bottom: 4px;\r
                    }\r
\r
                    .category-count {\r
                        display: block;\r
                        font-size: 12px;\r
                        color: var(--fkt-color-neutral-600);\r
                    }\r
                }\r
\r
                .category-arrow {\r
                    color: var(--fkt-color-neutral-900);\r
                    font-size: 16px;\r
                }\r
            }\r
        }\r
\r
        .filters-section {\r
            padding: 20px;\r
\r
            h4 {\r
                margin: 0 0 16px 0;\r
                font-size: 16px;\r
                color: var(--fkt-color-neutral-900);\r
                font-weight: 600;\r
            }\r
\r
            .filter-group {\r
                margin-bottom: 20px;\r
\r
                &:last-child {\r
                    margin-bottom: 0;\r
                }\r
\r
                > label {\r
                    display: block;\r
                    font-size: 14px;\r
                    font-weight: 500;\r
                    color: var(--fkt-color-neutral-600);\r
                    margin-bottom: 8px;\r
                }\r
\r
                .price-inputs {\r
                    display: flex;\r
                    align-items: center;\r
                    gap: 8px;\r
\r
                    .price-input {\r
                        flex: 1;\r
                        padding: 8px 12px;\r
                        border: 1px solid var(--fkt-color-neutral-400);\r
                        background-color: transparent;\r
                        color: var(--fkt-color-neutral-900);\r
                        border-radius: 6px;\r
                        font-size: 14px;\r
\r
                        &:focus {\r
                            outline: none;\r
                            border-color: var(--fkt-color-accent);\r
                            box-shadow: 0 0 0 2px rgba(49, 130, 206, 0.1);\r
                        }\r
                    }\r
\r
                    span {\r
                        color: #718096;\r
                        font-size: 14px;\r
                    }\r
                }\r
\r
                .rating-options {\r
                    display: flex;\r
                    flex-direction: column;\r
                    gap: 8px;\r
                }\r
\r
                .rating-option,\r
                .checkbox-option {\r
                    display: flex;\r
                    align-items: center;\r
                    gap: 8px;\r
                    font-size: 14px;\r
                    color: var(--fkt-color-neutral-600);\r
                    cursor: pointer;\r
\r
                    input[type="checkbox"] {\r
                        margin: 0;\r
                    }\r
                }\r
            }\r
        }\r
    }\r
\r
    .main-content {\r
        flex: 1;\r
        display: flex;\r
        flex-direction: column;\r
        background: var(--fkt-color-neutral-background);\r
        min-width: 0;\r
\r
        .header {\r
            padding: 20px 24px;\r
            background: var(--fkt-color-modal-background);\r
            color: var(--fkt-color-neutral-900);\r
            display: flex;\r
            align-items: center;\r
            justify-content: space-between;\r
\r
            .toggle-btn {\r
                padding: 10px 16px;\r
                background: var(--fkt-color-neutral-300);\r
                border: none;\r
                color: var(--fkt-color-neutral-900);\r
                border-radius: 6px;\r
                cursor: pointer;\r
                transition: background 0.2s ease;\r
                font-size: 14px;\r
                display: flex;\r
                gap: var(--fkt-space-xs);\r
\r
                &:hover {\r
                    background: var(--fkt-color-neutral-400);\r
                }\r
            }\r
\r
            h2 {\r
                margin: 0;\r
                font-size: 24px;\r
                font-weight: 600;\r
                flex: 1;\r
                margin-left: 16px;\r
            }\r
\r
            .header-actions {\r
                display: flex;\r
                gap: 8px;\r
\r
                .action-btn {\r
                    padding: 8px 16px;\r
                    background: var(--fkt-color-neutral-300);\r
                    border: none;\r
                    display: flex;\r
                    justify-content: center;\r
                    align-items: center;\r
                    gap: var(--fkt-space-xs);\r
                    color: var(--fkt-color-neutral-900);\r
                    border-radius: 4px;\r
                    cursor: pointer;\r
                    transition: background 0.2s ease;\r
                    font-size: 14px;\r
\r
                    &:hover {\r
                        background: rgba(255, 255, 255, 0.3);\r
                    }\r
                }\r
            }\r
        }\r
\r
        .content {\r
            flex: 1;\r
            padding: 24px;\r
\r
            .breadcrumb {\r
                display: flex;\r
                align-items: center;\r
                gap: 8px;\r
                margin-bottom: 20px;\r
                font-size: 14px;\r
                color: var(--fkt-color-neutral-500);\r
\r
                span:last-child {\r
                    color: var(--color-neutral-800);\r
                    font-weight: 500;\r
                }\r
            }\r
\r
            .content-description {\r
                margin-bottom: 32px;\r
\r
                h3 {\r
                    margin: 0 0 12px 0;\r
                    font-size: 20px;\r
                    color: var(--fkt-color-neutral-900);\r
                }\r
\r
                p {\r
                    margin: 0;\r
                    line-height: 1.6;\r
                    color: var(--fkt-color-neutral-600);\r
                }\r
            }\r
\r
            .products-grid {\r
                display: grid;\r
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\r
                gap: 20px;\r
\r
                .product-card {\r
                    background: var(--fkt-color-modal-background);\r
                    border-radius: 8px;\r
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r
                    overflow: hidden;\r
                    transition: transform 0.2s ease;\r
\r
                    &:hover {\r
                        transform: translateY(-4px);\r
                    }\r
\r
                    .product-image {\r
                        height: 160px;\r
                        background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);\r
                        display: flex;\r
                        color: white;\r
                        align-items: center;\r
                        justify-content: center;\r
                        font-size: 48px;\r
                    }\r
\r
                    .product-info {\r
                        padding: 16px;\r
\r
                        h4 {\r
                            margin: 0 0 8px 0;\r
                            font-size: 16px;\r
                            color: var(--fkt-color-neutral-900);\r
                        }\r
\r
                        .product-description {\r
                            margin: 0 0 12px 0;\r
                            font-size: 14px;\r
                            color: var(--fkt-color-neutral-600);\r
                            line-height: 1.4;\r
                        }\r
\r
                        .product-meta {\r
                            display: flex;\r
                            justify-content: space-between;\r
                            align-items: center;\r
\r
                            .price {\r
                                font-size: 18px;\r
                                font-weight: 600;\r
                                color: var(--fkt-color-info);\r
                            }\r
\r
                            .rating {\r
                                font-size: 14px;\r
                            }\r
                        }\r
                    }\r
                }\r
            }\r
        }\r
    }\r
}\r
`;var v=`import { Component, signal, computed } from '@angular/core';\r
import { FktDrawerComponent } from 'frakton-ng/drawer';\r
import { FktIconComponent } from 'frakton-ng/icon';\r
\r
@Component({\r
  selector: 'fkt-drawer-wide-example',\r
  imports: [FktDrawerComponent, FktIconComponent],\r
  templateUrl: './wide-example.component.html',\r
  styleUrl: './wide-example.component.scss'\r
})\r
export class WideExampleComponent {\r
  opened = signal(false);\r
  selectedCategory = signal('all');\r
\r
  categories = [\r
    { id: 'all', name: 'All Products', count: 156 },\r
    { id: 'electronics', name: 'Electronics', count: 42 },\r
    { id: 'clothing', name: 'Clothing', count: 38 },\r
    { id: 'books', name: 'Books', count: 28 },\r
    { id: 'home', name: 'Home & Garden', count: 31 },\r
    { id: 'sports', name: 'Sports & Outdoors', count: 17 }\r
  ];\r
\r
  selectedCategoryName = computed(() => {\r
    const category = this.categories.find(c => c.id === this.selectedCategory());\r
    return category?.name || 'All Products';\r
  });\r
\r
  toggleDrawer() {\r
    this.opened.set(!this.opened());\r
  }\r
\r
  selectCategory(categoryId: string) {\r
    this.selectedCategory.set(categoryId);\r
  }\r
}`;var ie={NarrowExampleComponent:{name:"NarrowExample",files:[{name:"narrow-example.component.html",content:e,language:"html"},{name:"narrow-example.component.ts",content:a,language:"typescript"},{name:"narrow-example.component.scss",content:t,language:"css"}]},OpenedExampleComponent:{name:"OpenedExample",files:[{name:"opened-example.component.html",content:o,language:"html"},{name:"opened-example.component.ts",content:n,language:"typescript"},{name:"opened-example.component.scss",content:r,language:"css"}]},OverlayExampleComponent:{name:"OverlayExample",files:[{name:"overlay-example.component.html",content:i,language:"html"},{name:"overlay-example.component.ts",content:c,language:"typescript"},{name:"overlay-example.component.scss",content:s,language:"css"}]},PushExampleComponent:{name:"PushExample",files:[{name:"push-example.component.html",content:l,language:"html"},{name:"push-example.component.ts",content:p,language:"typescript"},{name:"push-example.component.scss",content:d,language:"css"}]},WideExampleComponent:{name:"WideExample",files:[{name:"wide-example.component.html",content:f,language:"html"},{name:"wide-example.component.ts",content:v,language:"typescript"},{name:"wide-example.component.scss",content:m,language:"css"}]}};export{ie as default};
