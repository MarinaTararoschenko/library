import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
    styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent {
    @Output() public hideMenu = new EventEmitter<boolean>();

    closeMenu(): void {
        this.hideMenu.emit(false);
    }

}
