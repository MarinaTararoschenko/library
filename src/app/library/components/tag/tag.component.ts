import { NgClass } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export type TagSize = 's' | 'm' | 'l' | 'xl';
export type TagColor = 'blue' | 'yellow' | 'green' | 'red' | 'grey' | 'purple' | 'orange' | 'disabled' | 'error' | 'white' | 'theme' | 'theme-fill' | 'black-fill' | 'green-fill' | 'orange-fill' | 'red-fill' | 'purple-fill';

export interface ITag {
    text: string;
    iconStart?: string;
    iconEnd?: string;
}

@Component({
    standalone: true,
    selector: 'air-tag',
    template: `
        @if (data.iconStart) {
            <mat-icon [svgIcon]="data.iconStart" class="leading" [ngClass]="'size-' + iconSize"></mat-icon>
        }
        <span>{{data.text}}</span>
        @if (data.iconEnd) {
           <mat-icon
            [svgIcon]="data.iconEnd"
            class="trailing"
            [ngClass]="'size-' + iconSize"
            (click)="onIconEndClick($event)"></mat-icon>
        }
    `,
    styleUrls: ['./tag.component.scss'],
    imports: [ MatIconModule, NgClass ],
})
export class TagComponent {
    @Input() public data!: ITag;

    public currentColor: TagColor = 'grey';
    public currentSize: TagSize = 'm';
    public iconSize = 16;

    @Input() public set color(value: TagColor | null) {
        if (value !== null) {
            this.currentColor = value;
        }
    }

    @Input() public set size(value: TagSize | null) {
        if (value !== null) {
            this.currentSize = value;

            this._setIconSize();
        }
    }

    @Output() public iconEndClick: EventEmitter<any> = new EventEmitter();

    @HostBinding('class') public get currentClass() {
        return 'size-' + this.currentSize + ' color-' + this.currentColor;
    }

    private _setIconSize() {
        const iconSizeMap = {
            's': 12,
            'm': 16,
            'l': 16,
            'xl': 20,
        };

        this.iconSize = iconSizeMap[this.currentSize];
    }

    public onIconEndClick(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        this.iconEndClick.emit(event);
    }
}
