import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { DropdownService } from 'src/app/common/services/dropdown.service';

@Component({
    selector: 'app-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
    styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {
    @Output() public hideMenu = new EventEmitter<boolean>();
    @ViewChild('dropdown') public dropdown!: ElementRef;

    constructor(
        private _dropdownSrv: DropdownService
    ) {
    }

    ngOnInit(): void {
        this._dropdownSrv.getDropdownPosition$().subscribe(position => {
            this.dropdown.nativeElement.style.left = position + 'px';
            this.dropdown.nativeElement.style.maxWidth = (window.innerWidth - position) + 'px';
        });

    }

    closeMenu(): void {
        this.hideMenu.emit(false);
    }

}
