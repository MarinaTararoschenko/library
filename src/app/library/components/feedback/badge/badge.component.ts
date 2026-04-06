import { Component, HostBinding, Input } from '@angular/core';

export type BadgeColor = 'blue' | 'green' | 'red' | 'yellow' | 'grey' | 'notifications' | 'theme' | 'disabled';
export type BadgeSize = 'xs' | 's' | 'm' | 'l';

@Component({
    standalone: true,
    selector: 'air-badge',
    template: `
        <span>{{text}}</span>
    `,
    styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
    @Input() public text!: string;

    public currentColor: BadgeColor = 'theme';
    public currentSize: BadgeSize = 'm';
    public iconSize = 32;

    @Input() public set color(value: BadgeColor | null) {
        if (value !== null) {
            this.currentColor = value;
        }
    }

    @Input() public set size(value: BadgeSize | null) {
        if (value !== null) {
            this.currentSize = value;
        }
    }

    @HostBinding('class') public get currentClass() {
        return 'size-' + this.currentSize + ' color-' + this.currentColor;
    }
}
