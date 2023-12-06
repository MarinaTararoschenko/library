import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export interface IChartSettings {
    orientationAxisY: string; // set "toTop" or "toBottom" orientation for Y axis
    bar: IBarSettings;
    axisY: IAxisYSettings;
}

export interface IAxisYSettings {
    borderStyle: { // border styles
        type: string; // set "dashed" or other
        strokeWidth: number; // sets the distance between dashes
    };
    indentAxisX: number; // intent from left
    indentAxisY: number; // intent from top/bottom
}

export interface IBarSettings {
    gap: number; // spacing between bar
    radius: number; // radius for bar
    indentAxisX: number; // intent from left
    indentAxisY: number; // indent from top/bottom
}

export interface IDataAxisY {
    path: string;
    label: { value: string; dy: number };
}

export interface IDataAxisX {
    y: number;
    x: number;
    label: string;
}

export interface IDataBar {
    x: number; y: number; width: number; height: number; tooltip: string;
}

export interface IDataChart {
    domainX: number;
    domainY: number;
    labelX: string;
    prefixY?: string;
    tooltip: string;
}

@Component({
    selector: 'app-bar-chart',
    template: `
    <svg #svg height="406" width="100%">
        <g svg-grid-axis-y [settings]="chartSettings.axisY" [data]="computedValuesAxisY"></g>
        <g svg-grid-axis-x [data]="computedValuesAxisX"></g>
        <g svg-bar [settings]="chartSettings.bar" [data]="computedValuesBar"></g>
    </svg>
    `
})
export class BarChartComponent implements OnInit, OnChanges {
    @Input() public chartSettings!: IChartSettings;
    @Input() public data!: Array<IDataChart>;

    public bounds!: { minX: number; maxX: number; minY: number; maxY: number };
    public computedValuesBar!: Array<IDataBar>;
    public computedValuesAxisY!: Array<IDataAxisY>;
    public computedValuesAxisX!: Array<IDataAxisX>;

    constructor(private el: ElementRef) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!!changes['data'].previousValue) {
            this.data = changes['data'].currentValue;
            this.initData();
        }
    }

    ngOnInit(): void {
        this.initData();
    }

    public initData(): void {
        this.bounds = this._getBounds(this.data);

        const indentAxisX = !!this.chartSettings.bar.indentAxisX ? this.chartSettings.bar.indentAxisX : 0;
        const indentAxisY = !!this.chartSettings.bar.indentAxisY ? this.chartSettings.bar.indentAxisY : 0;
        const barWidth = (this._getRect().width - indentAxisX - (this.data.length * this.chartSettings.bar.gap)) / this.data.length;
        const offsetAxisYLabel = 6;

        const scaleY = this._createScale(
            [0, this._roundedValueY(this.bounds.maxY)],
            [0, this._getRect().height - indentAxisY - offsetAxisYLabel]
        );

        // set computed data for the axis Y
        const startPath =   !!this.chartSettings.axisY.indentAxisX ?
                            this.chartSettings.axisY.indentAxisX : 0; // start of the path
        const widthPath = this._getRect().width - startPath; // path width
        const prefixY = !!this.data[0].prefixY ? this.data[0].prefixY : '';

        this.computedValuesAxisY = this._createDivisions(this.bounds.maxY).map(division => {
            const calcY =   this.chartSettings.orientationAxisY === 'toBottom' ?
                            scaleY(division) + indentAxisY :
                            this._getRect().height - scaleY(division) - indentAxisY;
            return {
                path: `M${startPath},${calcY}H${widthPath}`,
                label: {
                    value: `${prefixY}${division}`,
                    dy: calcY
                }
            }
        });

        const endIndentAxisX = 10; // padding at the end so that the long X-axis text label is not cut off

        // set computed data for the axis X
        this.computedValuesAxisX = this.data.map((obj: any, i: number) => {
            const calcX = i === 0 ? indentAxisX - endIndentAxisX :
                                    ((barWidth + this.chartSettings.bar.gap) * i) + indentAxisX - endIndentAxisX;
            return {
                x: calcX + barWidth / 2,
                y: this._getRect().height - 10,
                label: `${obj.labelX}`
            }
        });

        // set computed data for the bar
        this.computedValuesBar = this.data.map((obj: any, i: number) => {
            const calcY =   this.chartSettings.orientationAxisY === 'toBottom' ? indentAxisY :
                            this._getRect().height - scaleY(obj.domainY) - indentAxisY;
            const calcX = i === 0 ? indentAxisX - endIndentAxisX :
                                    ((barWidth + this.chartSettings.bar.gap) * i) + indentAxisX - endIndentAxisX;

            return {
                x: calcX,
                y: calcY,
                width: barWidth,
                height: scaleY(obj.domainY),
                tooltip: `${obj.tooltip}`
            }
        });
    }

    private _roundedValueY(maxValue: number): number {
        if (maxValue > 1e7) {
            return (Math.ceil(maxValue / 1e7) * 1e7);
        }
        else if (maxValue > 1e6) {
            return (Math.ceil(maxValue / 1e6) * 1e6)
        }
        else if (maxValue > 1e5) {
            return (Math.ceil(maxValue / 1e5) * 1e5)
        }
        else if (maxValue > 1e4) {
            return (Math.ceil(maxValue / 1e4) * 1e4)
        }
        else if (maxValue > 1e3) {
            return (Math.ceil(maxValue / 1e3) * 1e3)
        }
        else if (maxValue > 100) {
            return (Math.ceil(maxValue / 100) * 100)
        }
        else if (maxValue > 10) {
            return (Math.ceil(maxValue / 10) * 10)
        }
        else {
            return maxValue
        }
    }

    private _createScale(domain: [number, number], range: [number, number]) {
        const [minDomain, maxDomain] = domain;
        const [minRange, maxRange] = range;
        const sizeOfDomain = maxDomain - minDomain;
        const sizeOfRange = maxRange - minRange;

        return function scale(value: number) {
            const positionInDomain = (value - minDomain) / sizeOfDomain;
            return positionInDomain * sizeOfRange + minRange;
        }
    }

    private _createDivisions(maxValue: number): Array<number> {
        const arrDivisions: Array<number> = [];

        if (maxValue > 1e7) {
            for (let i = 0; i <= this._roundedValueY(maxValue) / 1e7; i++) {
                arrDivisions.push(i * 1e7);
            }
            return arrDivisions;
        }
        else if (maxValue > 1e6) {
            for (let i = 0; i <= this._roundedValueY(maxValue) / 1e6; i++) {
                arrDivisions.push(i * 1e6);
            }
            return arrDivisions;
        }
        else if (maxValue > 1e5) {
            for (let i = 0; i <= this._roundedValueY(maxValue) / 1e5; i++) {
                arrDivisions.push(i * 1e5);
            }
            return arrDivisions;
        }
        else if (maxValue > 1e4) {
            for (let i = 0; i <= this._roundedValueY(maxValue) / 1e4; i++) {
                arrDivisions.push(i * 1e4);
            }
            return arrDivisions;
        }
        else if (maxValue > 1e3) {
            for (let i = 0; i <= this._roundedValueY(maxValue) / 1e3; i++) {
                arrDivisions.push(i * 1e3);
            }
            return arrDivisions;
        } else if (maxValue > 100) {
            for (let i = 0; i <= this._roundedValueY(maxValue) / 100; i++) {
                arrDivisions.push(i * 100);
            }
            return arrDivisions;
        } else if (maxValue > 10) {
            for (let i = 0; i <= this._roundedValueY(maxValue) / 10; i++) {
                arrDivisions.push(i * 10);
            }
            return arrDivisions;
        } else {
            for (let i = 0; i <= maxValue; i++) {
                arrDivisions.push(i);
            }
            return arrDivisions;
        }
    }

    private _getBounds(arr: Array<IDataChart>): { minX: number; maxX: number; minY: number; maxY: number} {
        return {
            minX: arr.reduce((prev: any, cur: any) =>   cur.domainX < prev.domainX ? cur : prev,
                                                        { domainX: Infinity }).domainX,
            maxX: arr.reduce((prev: any, cur: any) =>   cur.domainX > prev.domainX ? cur : prev,
                                                        { domainX: -Infinity }).domainX,
            minY: arr.reduce((prev: any, cur: any) =>   cur.domainY < prev.domainY ? cur : prev,
                                                        { domainY: Infinity }).domainY,
            maxY: arr.reduce((prev: any, cur: any) =>   cur.domainY > prev.domainY ? cur : prev,
                                                        { domainY: -Infinity }).domainY
        }
    }

    private _getRect(): any {
        return this.el.nativeElement?.getBoundingClientRect()
    }

}
