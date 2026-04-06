import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormGroup } from '@angular/forms';

import { ButtonComponent, ButtonSize, ButtonTheme, ButtonType, IButton } from '../../buttons/button/button.component';
import { IconButtonComponent, IconButtonSize, IconButtonTheme, IconButtonType } from '../../buttons/icon-button/icon-button.component';
import { ITag, TagColor, TagComponent, TagSize } from '../../feedback/tag/tag.component';
import { DropdownItemComponent, IDropdown } from '../../layout/dropdown-item/dropdown-item.component';

export interface IHeader {
    title?: string;
    subtitle?: string;
    menu?: boolean;
    back?: boolean;
    tags?: Array<IHeaderTag>;
    info?: {
        text?: string;
    };
    actions?: {
        iconButtons?: Array<IHeaderIconButton>;
        buttons?: Array<IHeaderButton>;
        tag?: IHeaderTag;
    },
    submenu?: IHeaderSubmenu;
}

export interface IHeaderSubmenu {
    tags?: Array<IHeaderTag>;
    tag?: IHeaderTag;
}

export interface IHeaderButton {
    data: IButton;
    theme?: ButtonTheme;
    type?: ButtonType;
    size?: ButtonSize;
    disabled?: boolean;
    isLoading?: boolean;
}

export interface IHeaderIconButton {
    theme?: IconButtonTheme;
    type?: IconButtonType;
    size?: IconButtonSize;
    icon: string;
    disabled?: boolean;
    isLoading?: boolean;
    menu?: Array<IDropdown>;
}

export interface IHeaderTag {
    color?: TagColor;
    size?: TagSize;
    data: ITag;
}

export type HeaderType = 'default' | 'columns';

@Component({
    standalone: true,
    selector: 'air-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [
        ButtonComponent,
        IconButtonComponent,
        TagComponent,
        MatIconModule,
        MatMenuModule,
        DropdownItemComponent,
    ],
})
export class HeaderComponent {
    @Input() public type?: HeaderType = 'default';
    @Input() public data!: IHeader;
    @Input() public form?: FormGroup;
    @Output() public backClick: EventEmitter<void> = new EventEmitter();
    @Output() public actionButtonClick: EventEmitter<IHeaderButton | IHeaderIconButton> = new EventEmitter();
    @Output() public dropdownMenuSelected: EventEmitter<IDropdown> = new EventEmitter();

    public selectedItem: IDropdown | Array<IDropdown> | null = null;
    public checkboxSelectedMap: Map<string, boolean> = new Map();

    constructor(
    ) { }

    public toggleMenu(): void {
        console.log('Toggle menu');
    }

    public back(): void {
        this.backClick.emit();
    }

    public onActionButton(button: IHeaderButton | IHeaderIconButton): void {
        this.actionButtonClick.emit(button);
    }

    public onDropdownClick(item: IDropdown): void {
        if (item.checkbox && this.form) {

            const currentValue = this.checkboxSelectedMap.get(item.checkbox.controlName) ?? false;
            this.checkboxSelectedMap.set(item.checkbox.controlName, !currentValue);

            if (!Array.isArray(this.selectedItem)) {
                this.selectedItem = [];
            }

            if (!currentValue) {
                (this.selectedItem as Array<IDropdown>).push(item);
            } else {
                const index = (this.selectedItem as Array<IDropdown>).findIndex(i => i.id === item.id);
                if (index !== -1) {
                    (this.selectedItem as Array<IDropdown>).splice(index, 1);
                }
            }
        } else {
            this.selectedItem = item;
        }
        this.dropdownMenuSelected.emit(item);
    }

    public isSelected(item: IDropdown): boolean {
        if (item.checkbox && this.form) {
            return this.checkboxSelectedMap.get(item.checkbox.controlName) ?? false;
        }
        return this.selectedItem === item;
    }
}
