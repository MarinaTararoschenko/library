import { Component, HostBinding, Input } from '@angular/core';

export type BadgeColor = 'blue' | 'green' | 'red' | 'yellow' | 'grey' | 'disabled' | 'green-fill' | 'yellow-fill' | 'red-fill' | 'blue-fill' | 'black-fill';
export type BadgeSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';
export type BadgeType = 'default' | 'no-number' | 'state';

@Component({
    standalone: true,
    selector: 'air-badge',
    template: `
        @if (text && currentType === 'default') {
            <span>{{text}}</span>
        }
    `,
    styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
    @Input() public text?: string;

    public currentColor: BadgeColor = 'blue';
    public currentSize: BadgeSize = 'm';
    public currentType: BadgeType = 'default';

    @Input() public set color(value: BadgeColor) {
        if (value !== null) {
            this.currentColor = value;
        }
    }

    @Input() public set size(value: BadgeSize) {
        if (value !== null) {
            this.currentSize = value;
        }
    }

    @Input() public set type(value: BadgeType) {
        if (value !== null) {
            this.currentType = value;
        }
    }

    @HostBinding('class') public get currentClass() {
        return 'size-' + this.currentSize + ' color-' + this.currentColor + ' type-' + this.currentType;
    }
}
