import { Component } from '@angular/core';

import { ThemeService } from '../services/theme.services';

@Component({
    selector: 'app-color-helpers',
    templateUrl: './color-helpers.component.html'
})
export class ColorHelpersComponent {
    isDarkMode = false;

    constructor(
        private srvTheme: ThemeService
    ) {

    }

    ngOnInit(): void {
        this.srvTheme.getThemeMode$().subscribe(v => {
            this.isDarkMode = v === 'dark';
        });
    }

}
