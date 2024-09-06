import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { IDataAxisX } from '../bar-chart.component';

@Component({
    selector: 'svg:g[svg-grid-axis-x]',
    template: `
        <ng-container *ngFor="let item of data; let i = index">
            <svg:text
                #text
                fill="currentColor"
                [attr.y]="item.y"
                [attr.x]="item.x"
                [style.transform]="transform"
                *ngIf="i === 0 || (i + 1) % 5 === 0">
                {{item.label}}
            </svg:text>
        </ng-container>
    `,
    styles: [`
        text {
            font-family: 'CircularStd-Book';
            font-size: 0.625rem;
            font-style: normal;
            font-weight: 500;
            line-height: 0.875rem;
            letter-spacing: 1.5px;
            fill: var(--primaryText);
            text-transform: uppercase;
        }
    `]
})
export class SvgGridAxisXComponent implements AfterViewInit {
    @Input() public data!: Array<IDataAxisX>;
    @ViewChild('text') public text!: ElementRef;

    public transform = '';

    constructor(private cdr: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        this.transform = `translateX(-${this.text.nativeElement?.getBoundingClientRect().width / 2}px)`;
        this.cdr.detectChanges();
    }

}
