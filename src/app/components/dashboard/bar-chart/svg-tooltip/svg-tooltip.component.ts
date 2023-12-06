import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'svg-tooltip',
    template: `<div class="svgTooltip">{{text}}</div>`,
    styles: [`
        :host {
            display: block;
            position: fixed;
            z-index: 100;
            transition: .3s;
            transform: scale(0) translate(-50%, -100%);
        }

        .svgTooltip {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-family: 'CircularStd-Book';
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 16px;
            letter-spacing: 0.5px;
            color: var(--color-menu-active);
            padding: 8px 12px;
            margin-bottom: 10px;
            border-radius: 40px;
            border: 1px solid var(--color-menu-active);
            background: var(--surface);
        }
    `]
})
export class SvgTooltipComponent {
    @HostBinding('style') public style!: any;
    @Input() public text!: string;

}
