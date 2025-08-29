import { Component, input, signal, computed, linkedSignal } from '@angular/core';
import { FktSideMenuComponent } from '../fkt-side-menu.component';
import { FktMenuGroup } from '../fkt-side-menu.types';
import { FktButtonComponent } from '../../button';

@Component({
  selector: 'admin-dashboard-layout-example',
  template: `
    <div style="height: 800px; width: 100%; display: flex;">
      <fkt-side-menu
        [groups]="groups()"
        [(opened)]="menuOpened"
      >
        <!-- Main Content Area -->
        <div style="display: flex; flex-direction: column; width: 100%; height: 100%; background-color: #f9fafb;">
          <!-- Header -->
          <header style="background: white; border-bottom: 1px solid #e5e7eb; padding: 16px 24px; display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 16px;">
              <fkt-button
                [icon]="menuOpened() ? 'bars-3' : 'bars-3'"
                [variant]="'rect'"
                [theme]="'basic'"
                [color]="'primary'"
                (click)="toggleMenu()"
              />
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #111827;">{{ currentPageTitle() }}</h1>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <fkt-button
                [icon]="'bell'"
                [variant]="'rect'"
                [theme]="'basic'"
                [color]="'primary'"
              />
              <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%;"></div>
            </div>
          </header>

          <!-- Main Content -->
          <main style="flex: 1; padding: 24px; overflow-y: auto;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 32px;">
                <!-- Stats Cards -->
                <div style="background: white; border-radius: 8px; padding: 24px; border: 1px solid #e5e7eb;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: #6b7280; font-size: 14px; font-weight: 500;">Total Users</span>
                    <div style="width: 32px; height: 32px; background: #dbeafe; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #2563eb;">
                      👥
                    </div>
                  </div>
                  <div style="font-size: 32px; font-weight: 700; color: #111827; margin-bottom: 4px;">1,249</div>
                  <div style="color: #10b981; font-size: 14px; font-weight: 500;">+12.5% from last month</div>
                </div>

                <div style="background: white; border-radius: 8px; padding: 24px; border: 1px solid #e5e7eb;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: #6b7280; font-size: 14px; font-weight: 500;">Revenue</span>
                    <div style="width: 32px; height: 32px; background: #dcfce7; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #16a34a;">
                      💰
                    </div>
                  </div>
                  <div style="font-size: 32px; font-weight: 700; color: #111827; margin-bottom: 4px;">$54,329</div>
                  <div style="color: #10b981; font-size: 14px; font-weight: 500;">+8.2% from last month</div>
                </div>

                <div style="background: white; border-radius: 8px; padding: 24px; border: 1px solid #e5e7eb;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: #6b7280; font-size: 14px; font-weight: 500;">Orders</span>
                    <div style="width: 32px; height: 32px; background: #fef3c7; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #d97706;">
                      📦
                    </div>
                  </div>
                  <div style="font-size: 32px; font-weight: 700; color: #111827; margin-bottom: 4px;">328</div>
                  <div style="color: #ef4444; font-size: 14px; font-weight: 500;">-2.1% from last month</div>
                </div>
              </div>

              <div style="background: white; border-radius: 8px; padding: 24px; border: 1px solid #e5e7eb;">
                <h2 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #111827;">Recent Activity</h2>
                <div style="space-y: 12px;">
                  <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f9fafb; border-radius: 6px; margin-bottom: 8px;">
                    <div style="width: 8px; height: 8px; background: #10b981; border-radius: 50%;"></div>
                    <span style="flex: 1; color: #374151;">New user registration: john.doe&#64;example.com</span>
                    <span style="color: #6b7280; font-size: 14px;">2 minutes ago</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f9fafb; border-radius: 6px; margin-bottom: 8px;">
                    <div style="width: 8px; height: 8px; background: #3b82f6; border-radius: 50%;"></div>
                    <span style="flex: 1; color: #374151;">Order #1248 has been completed</span>
                    <span style="color: #6b7280; font-size: 14px;">15 minutes ago</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f9fafb; border-radius: 6px; margin-bottom: 8px;">
                    <div style="width: 8px; height: 8px; background: #f59e0b; border-radius: 50%;"></div>
                    <span style="flex: 1; color: #374151;">Product inventory updated: Wireless Headphones</span>
                    <span style="color: #6b7280; font-size: 14px;">1 hour ago</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </fkt-side-menu>
    </div>
  `,
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
