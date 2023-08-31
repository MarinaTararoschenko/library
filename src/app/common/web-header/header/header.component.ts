import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

interface IMatMenuList {
    icon: string;
    text: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @ViewChild('header', { static: true }) header!: ElementRef;

    isOpenMatMenu = false;

    matMenuList: Array<IMatMenuList> = [
        {
            icon: 'settings',
            text: 'Agendar Capacitación'
        },
        {
            icon: 'star',
            text: 'Contactar soporte'
        },
        {
            icon: 'apps',
            text: 'Contactar con ventas'
        }
    ];

    constructor(
        private renderer: Renderer2
    ) {
    }

    ngOnInit(): void {
    }

    openDropdownMenu(): void {
        setTimeout(() => {
            this.renderer.addClass(document.body, 'open-dropdown');
        }, 0);
    }

    closeDropdownMenu(): void {
        this.renderer.removeClass(document.body, 'open-dropdown');
    }

}
