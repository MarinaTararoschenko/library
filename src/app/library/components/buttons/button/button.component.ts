import { NgClass, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

export interface IButton {
    id?: string;
    iconStart?: string;
    text?: string;
    iconEnd?: string;
}

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'tonal' | 'danger' | 'dangerText';
export type ButtonTheme = 'primary' | 'neutral';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
    standalone: true,
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    imports: [
        MatButtonModule,
        NgClass,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        NgTemplateOutlet,
        MatProgressSpinnerModule,
        MatIconModule,
    ],
})
export class ButtonComponent {
    @Input() public disabled?: boolean;
    @Input() public data!: IButton;
    @Input() public isLoading?: boolean;

    public currentType: ButtonType = 'primary';
    public currentTheme: ButtonTheme = 'primary';
    public currentSize: ButtonSize = 'medium';
    public iconSize = 16;

    @Input() public set type(value: ButtonType | null) {
        if (value !== null) {
            this.currentType = value;
        }
    }

    @Input() public set theme(value: ButtonTheme | null) {
        if (value !== null) {
            this.currentTheme = value;
        }
    }

    @Input() public set size(value: ButtonSize | null) {
        if (value !== null) {
            this.currentSize = value;
        }

        this._setIconSize();
    }

    @HostBinding('class') public get hostClass() {
        return 'theme-' + this.currentTheme;
    }

    @Output() public buttonClick: EventEmitter<any> = new EventEmitter();

    public get matAppearance(): 'flat' | 'stroked' | 'basic' {
        switch (this.currentType) {
            case 'primary':
            case 'danger':
            case 'tonal':
              return 'flat';
            case 'secondary':
                return 'stroked';
            case 'tertiary':
            default:
              return 'basic';
        }
    }

    private _setIconSize() {
        const iconSizeMap = {
            'small': 16,
            'medium': 16,
            'large': 20,
        };

        this.iconSize = iconSizeMap[this.currentSize];
    }
}
