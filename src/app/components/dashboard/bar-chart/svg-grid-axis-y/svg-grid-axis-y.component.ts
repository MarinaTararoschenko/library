import { Component, Input } from '@angular/core';

import { IAxisYSettings, IDataAxisY } from '../bar-chart.component';

@Component({
    selector: 'svg:g[svg-grid-axis-y]',
    template: `
        <ng-container *ngFor="let item of data">
            <svg:path
                [attr.stroke-dasharray]="settings.borderStyle.type === 'dashed' ?
                                        settings.borderStyle.strokeWidth : '0'"
                [attr.d]="item.path">
            </svg:path>

            <svg:text fill="currentColor" x="0" [attr.y]="item.label.dy">{{item.label.value}}</svg:text>
        </ng-container>
    `,
    styles: [`
        path {
            stroke: var(--primaryText);
            stroke-opacity: 0.16;
        }

        text {
            font-family: 'CircularStd-Book';
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: 14px;
            letter-spacing: 1.5px;
            fill: var(--primaryText);
            text-transform: uppercase;
            transform: translateY(3px);
        }
    `]
})
export class SvgGridAxisYComponent {
    @Input() public settings!: IAxisYSettings;
    @Input() public data!: Array<IDataAxisY>;
}
