import { NgClass } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

import { BadgeColor, BadgeComponent, BadgeSize } from '../../feedback/badge/badge.component';

export type IconButtonType = 'primary' | 'secondary' | 'tertiary' | 'tonal' | 'danger' | 'dangerText';
export type IconButtonTheme = 'primary' | 'neutral';
export type IconButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';

@Component({
    standalone: true,
    selector: 'air-icon-button',
    templateUrl: './icon-button.component.html',
    styleUrls: ['./icon-button.component.scss'],
    imports: [
        MatButtonModule,
        NgClass,
        MatProgressSpinnerModule,
        MatIconModule,
        BadgeComponent
    ],
})
export class IconButtonComponent {
    @Input() public disabled?: boolean;
    @Input() public icon!: string;
    @Input() public isLoading?: boolean;
    @Input() public badge?: { text: string; size: BadgeSize; color: BadgeColor };

    public currentType: IconButtonType = 'primary';
    public currentTheme: IconButtonTheme = 'primary';
    public currentSize: IconButtonSize = 'm';
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

    @Output() public buttonClick: EventEmitter<void> = new EventEmitter();

    private _setIconSize() {
        const iconSizeMap = {
            'xs': 12,
            's': 16,
            'm': 16,
            'l': 20,
            'xl': 24,
            '2xl': 32,
        };

        this.iconSize = iconSizeMap[this.currentSize];
    }
}
