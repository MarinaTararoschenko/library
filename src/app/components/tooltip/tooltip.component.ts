import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-tooltip',
    template: `
        <ng-content #content></ng-content>
    `,
    styles: [`
        :host {
            display: block;
            position: fixed;
            max-width: 280px;
            padding: 8px;
            border-radius: 4px;
            background-color: var(--surface);
            box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, .2),
                0px 2px 2px 0px rgba(0, 0, 0, .14),
                0px 1px 5px 0px rgba(0, 0, 0, .12);
            transform: scale(0);
            transform-origin: center center;
            z-index: 101;
        }
    `],
})
export class TooltipComponent {
    @HostBinding('class') classes = 'tooltip mat-body-2';
}
