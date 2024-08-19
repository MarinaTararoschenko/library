import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import { DropdownService } from '../../services/dropdown.service';

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
    isOpenDropdown = false;

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
        private renderer: Renderer2,
        private _dropdownSrv: DropdownService
    ) {
    }

    ngOnInit(): void {
    }

    openDropdownMenu(ev: any): void {
        this.isOpenDropdown = true;

        setTimeout(() => {
            this._dropdownSrv.setDropdownPosition(ev.target.getBoundingClientRect().left);
            this.renderer.addClass(document.body, 'open-dropdown');
        }, 100);
    }

    closeDropdownMenu(): void {
        this.renderer.removeClass(document.body, 'open-dropdown');
        this.isOpenDropdown = false;
    }

}
