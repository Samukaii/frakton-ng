import { Component, inject, viewChild } from '@angular/core';
import { SideMenuComponent } from '@/core/side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '@/core/toolbar/toolbar.component';
import { TableOfContentsComponent } from '@/components/table-of-contents/table-of-contents.component';
import { TableOfContentsService } from '@/core/services/table-of-contents.service';

@Component({
  selector: 'app-home-layout',
    imports: [
        SideMenuComponent,
        RouterOutlet,
        ToolbarComponent,
        TableOfContentsComponent
    ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
})
export class HomeLayoutComponent {

    tableOfContents = viewChild.required(TableOfContentsComponent);

    private service = inject(TableOfContentsService);

    ngOnInit(): void {
        this.service.watch().subscribe(() => {
            this.tableOfContents().generate();
        })
    }
}
