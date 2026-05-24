import { Component, inject } from '@angular/core';
import { SideMenuComponent } from '@/core/side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '@/core/toolbar/toolbar.component';
import { TableOfContentsComponent } from '@/components/table-of-contents/table-of-contents.component';
import { FktDrawerComponent } from 'frakton-ng/drawer';
import { MobileMenuService } from '@/core/services/mobile-menu.service';

@Component({
  selector: 'app-home-layout',
    imports: [
        SideMenuComponent,
        RouterOutlet,
        ToolbarComponent,
        TableOfContentsComponent,
        FktDrawerComponent
    ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
})
export class HomeLayoutComponent {
    protected readonly mobileMenuService = inject(MobileMenuService);
}
