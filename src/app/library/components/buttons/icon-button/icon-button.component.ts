import { NgClass } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

export type IconButtonType = 'primary' | 'secondary' | 'tertiary' | 'tonal' | 'danger' | 'dangerText';
export type IconButtonTheme = 'primary' | 'neutral';
export type IconButtonSize = 'extrasmall' | 'small' | 'medium' | 'large' | 'xlarge' | '2xl';

@Component({
    standalone: true,
    selector: 'app-icon-button',
    templateUrl: './icon-button.component.html',
    styleUrls: ['./icon-button.component.scss'],
    imports: [
        MatButtonModule,
        NgClass,
        MatProgressSpinnerModule,
        MatIconModule
    ],
})
export class IconButtonComponent {
    @Input() public disabled?: boolean;
    @Input() public icon!: string;
    @Input() public isLoading?: boolean;

    public currentType: IconButtonType = 'primary';
    public currentTheme: IconButtonTheme = 'primary';
    public currentSize: IconButtonSize = 'medium';
    public iconSize = 16;

    @Input() public set type(value: IconButtonType | null) {
        if (value !== null) {
            this.currentType = value;
        }
    }

    @Input() public set theme(value: IconButtonTheme | null) {
        if (value !== null) {
            this.currentTheme = value;
        }
    }

    @Input() public set size(value: IconButtonSize | null) {
        if (value !== null) {
            this.currentSize = value;
        }

        this._setIconSize();
    }

    @HostBinding('class') public get hostClass() {
        return 'theme-' + this.currentTheme;
    }

    @Output() public buttonClick: EventEmitter<any> = new EventEmitter();

    private _setIconSize() {
        const iconSizeMap = {
            'extrasmall': 12,
            'small': 16,
            'medium': 16,
            'large': 20,
            'xlarge': 24,
            '2xl': 32,
        };

        this.iconSize = iconSizeMap[this.currentSize];
    }
}
