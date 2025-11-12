import { Component, computed, inject, OnInit } from '@angular/core';
import { FktIconComponent } from "frakton-ng/icon";
import { ThemeService } from '../services/theme.service';
import { FktDialogService } from 'frakton-ng/dialog';
import { OmniSearchComponent } from '@/core/omni-search/omni-search.component';

@Component({
    selector: 'fkt-toolbar',
    imports: [
        FktIconComponent
    ],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnInit {
    protected readonly themeService = inject(ThemeService);
    protected readonly dialogService = inject(FktDialogService);

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
        document.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 'k' && e.ctrlKey) {
                e.preventDefault();
                e.stopPropagation();

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
