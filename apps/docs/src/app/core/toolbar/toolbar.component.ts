import { Component, computed, DOCUMENT, inject, OnInit } from '@angular/core';
import { FktIconComponent } from "frakton-ng/icon";
import { ThemeService } from '../services/theme.service';
import { FktDialogService } from 'frakton-ng/dialog';
import { OmniSearchComponent } from '@/core/omni-search/omni-search.component';
import { FktButtonComponent } from 'frakton-ng/button';
import { MobileMenuService } from '@/core/services/mobile-menu.service';

@Component({
    selector: 'fkt-toolbar',
    imports: [
        FktIconComponent,
        FktButtonComponent
    ],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnInit {
    protected readonly themeService = inject(ThemeService);
    protected readonly dialogService = inject(FktDialogService);
    protected readonly mobileMenuService = inject(MobileMenuService);
    protected readonly document = inject(DOCUMENT);

    protected buttonThemeLabel = computed(() => {
        return this.themeService.currentTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    });

    protected buttonThemeIcon = computed(() => {
        return this.themeService.currentTheme() === 'dark' ? 'sun' : 'moon';
    })

    protected toggleTheme() {
        this.themeService.toggleTheme();
    }

    ngOnInit() {
        this.document.addEventListener('keydown', (event) => {
            if (event.key.toLowerCase() === 'k' && event.ctrlKey) {
                event.preventDefault();
                event.stopPropagation();

                this.openSearch();
            }
        })
    }

    openSearch() {
        const ref = this.dialogService.open({
            component: OmniSearchComponent,
            data: {
                close: () => {
                    ref.close();
                }
            },
            panelOptions: {
                height: "90vh",
                backgroundColor: "transparent",
                width: "800px"

            },
            backdropStyles: {
                'backdropFilter': "blur(12px)",
                'backgroundColor': "#0006"
            }
        })
    }
}
