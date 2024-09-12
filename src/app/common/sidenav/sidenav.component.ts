import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

import { ThemeService } from '../services/theme.services';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
    @Input() isOpen: boolean;
    @Output() sidebarState = new EventEmitter(true);

    isChecked = false;
    scale = 0;

    constructor(
        private renderer: Renderer2,
        private srvTheme: ThemeService,
        public translocoService: TranslocoService
    ) {
        this.isOpen = true;
    }

    ngOnInit(): void {
        this.srvTheme.setThemeMode();
        this.srvTheme.getThemeMode$().subscribe(v => {
            this.isChecked = v === 'dark';
            if (this.isChecked ) {
                this.renderer.addClass(document.body, 'dark');
            } else {
                this.renderer.removeClass(document.body, 'dark');
            }
        });

        // set scale from localStorage
        if (localStorage.getItem('scale') !== null) {
            this.renderer.addClass(document.body.parentElement, 'scale-' + localStorage.getItem('scale'));
            this.scale = Number(localStorage.getItem('scale'));
        }
    }

    changeThemeMode(): void {
        this.srvTheme.setThemeMode(!this.isChecked ? 'dark' : 'light');
    }

    toggle(): void {
        this.isOpen = !this.isOpen;
        this.sidebarState.emit(this.isOpen);
    }

    toScale(type: number): void {
        if (type === 1) {
            if (this.scale < 2) {
                this.renderer.removeClass(document.body.parentElement, 'scale-' + this.scale);
                localStorage.removeItem('scale');
                this.scale++;
            }
        } else {
            if (this.scale > -2) {
                this.renderer.removeClass(document.body.parentElement, 'scale-' + this.scale);
                localStorage.removeItem('scale');
                this.scale--;
            }
        }
        if (this.scale !== 0) {
            this.renderer.addClass(document.body.parentElement, 'scale-' + this.scale);
            localStorage.setItem('scale', this.scale + '');
        }
    }

    get currencyLang() {
        return this.translocoService.getActiveLang();
    }
}
