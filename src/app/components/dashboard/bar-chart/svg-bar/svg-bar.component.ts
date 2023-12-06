import { Component, Input } from '@angular/core';

import { IBarSettings, IDataBar } from '../bar-chart.component';

@Component({
    selector: 'svg:g[svg-bar]',
    template: `
    <svg:rect
        #bar
        [attr.width]="item.width"
        [attr.height]="item.height"
        [attr.rx]="settings.radius ? settings.radius + 'px' : 0"
        [attr.ry]="settings.radius ? settings.radius + 'px' : 0"
        [attr.x]="item.x"
        [attr.y]="item.y"
        svgTooltip
        [svgTooltipText]="item.tooltip"
        *ngFor="let item of data" />
    `,
    styles: [`rect {fill: #747878; transition: .3s} rect:hover {fill: blue}`]
})
export class SvgBarComponent {
    @Input() public settings!: IBarSettings;
    @Input() public data!: Array<IDataBar>;

}
