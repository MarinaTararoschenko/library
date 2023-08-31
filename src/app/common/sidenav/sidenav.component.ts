import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

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

    constructor(
        private renderer: Renderer2,
        private srvTheme: ThemeService
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
    }

    changeThemeMode(): void {
        this.srvTheme.setThemeMode(!this.isChecked ? 'dark' : 'light');
    }

    toggle(): void {
        this.isOpen = !this.isOpen;
        this.sidebarState.emit(this.isOpen);
    }
}
