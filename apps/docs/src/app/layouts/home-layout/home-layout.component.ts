import { Component, DestroyRef, inject, OnInit, viewChild } from '@angular/core';
import { SideMenuComponent } from '@/core/side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '@/core/toolbar/toolbar.component';
import { TableOfContentsComponent } from '@/components/table-of-contents/table-of-contents.component';
import { TableOfContentsService } from '@/core/services/table-of-contents.service';
import { FktDrawerComponent } from 'frakton-ng/drawer';
import { MobileMenuService } from '@/core/services/mobile-menu.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
export class HomeLayoutComponent implements OnInit {
    protected readonly mobileMenuService = inject(MobileMenuService);
    private readonly service = inject(TableOfContentsService);
    protected destroyRef = inject(DestroyRef);

    private readonly tableOfContents = viewChild.required(TableOfContentsComponent);

    ngOnInit(): void {
        this.service.watch().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
            this.tableOfContents().generate();
        })
    }
}
