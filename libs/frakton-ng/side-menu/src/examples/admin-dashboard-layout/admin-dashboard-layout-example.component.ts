import { Component, input, signal, computed, linkedSignal } from '@angular/core';
import { FktSideMenuComponent, FktMenuGroup } from 'frakton-ng/side-menu';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
  selector: 'admin-dashboard-layout-example',
  template: `
    <div class="admin-dashboard-example">
      <fkt-side-menu
        [groups]="groups()"
        [(opened)]="menuOpened"
      >
        <!-- Main Content Area -->
        <div class="admin-dashboard-example__layout">
          <!-- Header -->
          <header class="admin-dashboard-example__header">
            <div class="admin-dashboard-example__header-left">
              <fkt-button
                [icon]="menuOpened() ? 'bars-3' : 'bars-3'"
                [variant]="'rect'"
                [theme]="'basic'"
                [color]="'primary'"
                (click)="toggleMenu()"
              />
              <h1 class="admin-dashboard-example__title">{{ currentPageTitle() }}</h1>
            </div>
            <div class="admin-dashboard-example__header-right">
              <fkt-button
                [icon]="'bell'"
                [variant]="'rect'"
                [theme]="'basic'"
                [color]="'primary'"
              />
              <div class="admin-dashboard-example__avatar"></div>
            </div>
          </header>

          <!-- Main Content -->
          <main class="admin-dashboard-example__content">
            <div class="admin-dashboard-example__container">
              <div class="admin-dashboard-example__stats">
                <!-- Stats Cards -->
                <div class="admin-dashboard-example__card">
                  <div class="admin-dashboard-example__card-header">
                    <span class="admin-dashboard-example__card-label">Total Users</span>
                    <div class="admin-dashboard-example__card-icon admin-dashboard-example__card-icon--blue">
                      👥
                    </div>
                  </div>
                  <div class="admin-dashboard-example__card-value">1,249</div>
                  <div class="admin-dashboard-example__card-change admin-dashboard-example__card-change--positive">
                    +12.5% from last month
                  </div>
                </div>

                <div class="admin-dashboard-example__card">
                  <div class="admin-dashboard-example__card-header">
                    <span class="admin-dashboard-example__card-label">Revenue</span>
                    <div class="admin-dashboard-example__card-icon admin-dashboard-example__card-icon--green">
                      💰
                    </div>
                  </div>
                  <div class="admin-dashboard-example__card-value">$54,329</div>
                  <div class="admin-dashboard-example__card-change admin-dashboard-example__card-change--positive">
                    +8.2% from last month
                  </div>
                </div>

                <div class="admin-dashboard-example__card">
                  <div class="admin-dashboard-example__card-header">
                    <span class="admin-dashboard-example__card-label">Orders</span>
                    <div class="admin-dashboard-example__card-icon admin-dashboard-example__card-icon--yellow">
                      📦
                    </div>
                  </div>
                  <div class="admin-dashboard-example__card-value">328</div>
                  <div class="admin-dashboard-example__card-change admin-dashboard-example__card-change--negative">
                    -2.1% from last month
                  </div>
                </div>
              </div>

              <div class="admin-dashboard-example__activity">
                <h2 class="admin-dashboard-example__activity-title">Recent Activity</h2>
                <div class="admin-dashboard-example__activity-list">
                  <div class="admin-dashboard-example__activity-item">
                    <div class="admin-dashboard-example__activity-indicator admin-dashboard-example__activity-indicator--green"></div>
                    <span class="admin-dashboard-example__activity-text">New user registration: john.doe&#64;example.com</span>
                    <span class="admin-dashboard-example__activity-time">2 minutes ago</span>
                  </div>
                  <div class="admin-dashboard-example__activity-item">
                    <div class="admin-dashboard-example__activity-indicator admin-dashboard-example__activity-indicator--blue"></div>
                    <span class="admin-dashboard-example__activity-text">Order #1248 has been completed</span>
                    <span class="admin-dashboard-example__activity-time">15 minutes ago</span>
                  </div>
                  <div class="admin-dashboard-example__activity-item">
                    <div class="admin-dashboard-example__activity-indicator admin-dashboard-example__activity-indicator--yellow"></div>
                    <span class="admin-dashboard-example__activity-text">Product inventory updated: Wireless Headphones</span>
                    <span class="admin-dashboard-example__activity-time">1 hour ago</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </fkt-side-menu>
    </div>
  `,
  styleUrl: './admin-dashboard-layout-example.component.scss',
  standalone: true,
  imports: [FktSideMenuComponent, FktButtonComponent]
})
export class AdminDashboardLayoutExampleComponent {
  groups = input.required<FktMenuGroup[]>();
  opened = input<boolean>(true);

  menuOpened = linkedSignal(this.opened);
  private currentPage = signal('dashboard');

  currentPageTitle = computed(() => {
    const page = this.currentPage();
    return page.charAt(0).toUpperCase() + page.slice(1);
  });

  toggleMenu(): void {
    this.menuOpened.update(current => !current);
  }
}
