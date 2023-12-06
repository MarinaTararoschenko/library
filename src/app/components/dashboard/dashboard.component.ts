import { Component, HostBinding, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { IChartSettings, IDataChart } from './bar-chart/bar-chart.component';
import { ICustomSelect } from './custom-select/custom-select.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
    @HostBinding('class') public currentClasses = 'overflow-y';

    public currentMonth!: ICustomSelect;
    public currentMonthIndex = 0;
    public currentMonthesPeriod!: Array<ICustomSelect>;

    public previousMonth!: ICustomSelect;
    public previousMonthesPeriod!: Array<ICustomSelect>;

    public chartData: Array<IDataChart> = [];

    public chartSettings: IChartSettings = {
        orientationAxisY: 'toTop', // toTop or toBottom orientation for Y axis
        bar: {
            gap: 10, // spacing between bar
            radius: 12, // radius for bar
            indentAxisX: 54, // intent from left
            indentAxisY: 30 // indent from top/bottom
        },
        axisY: {
            borderStyle: { // border styles
                type: 'dashed',
                strokeWidth: 4,
            },
            indentAxisX: 0, // intent from left
            indentAxisY: 30 // intent from top/bottom
        }
    }

    constructor(
        private datePipe: DatePipe
    ) {
    }

    public ngOnInit(): void {
        this.computedPeriodOptions(new Date());
    }

    public computedPeriodOptions(startDate: any): void {
        this.currentMonthesPeriod = [];
        this.previousMonthesPeriod = [];

        for (let i = 0; i < 12; i++) {
            // Current period
            let currentDate = new Date();
            currentDate.setMonth(currentDate.getMonth() - i);
            let currentPeriodMonth = currentDate.toLocaleString("default", { month: "long" });
            let currentPeriodYear = currentDate.getFullYear();
            let monthNumber = currentDate.getMonth();

            // Previos period
            let previousDate = new Date(startDate);
            previousDate.setMonth(startDate.getMonth() - i - 1);
            let previousPeriodMonth = previousDate.toLocaleString("default", { month: "long" });
            let previousPeriodYear = previousDate.getFullYear();

            if (monthNumber === new Date().getMonth()) {
                this.currentMonthesPeriod.push({
                    date: currentDate,
                    optionValue: currentPeriodMonth,
                    label: 'This month'
                });
            } else if (monthNumber < new Date().getMonth()) {
                this.currentMonthesPeriod.push({
                    date: currentDate,
                    optionValue: currentPeriodMonth
                });
            } else {
                this.currentMonthesPeriod.push({
                    date: currentDate,
                    optionValue: currentPeriodMonth + ' ' + currentPeriodYear
                });
            }

            this.previousMonthesPeriod.push({
                date: previousDate,
                optionValue: 'vs ' + previousPeriodMonth + ' ' + previousPeriodYear
            });
        }

        this.currentMonth = this.currentMonthesPeriod[this.currentMonthIndex];
        this.previousMonth = this.previousMonthesPeriod[0];

        this.setData(this.currentMonth.date);
    }

    public changeCurrentMonth(selected: { option: ICustomSelect, index?: number }): void {
        if (selected.index) {
            this.currentMonthIndex = selected.index;
        }
        this.computedPeriodOptions(selected.option.date);
    }

    public changePreviousMonth(selected: { option: ICustomSelect; index?: number }): void {
        // TODO
    }

    public setData(date: any): void {
        const daysOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        this.chartData = [];

        for (let i = 0; i < daysOfCurrentMonth; i++) {
            const testValue = Math.floor(Math.random() * 100) + 1;
            this.chartData.push({
                domainX: i + 1,
                domainY: testValue,
                labelX: `${i + 1} ${this.datePipe.transform(new Date(date), 'MMM')}`,
                prefixY: '$',
                tooltip: `${i + 1} ${this.datePipe.transform(new Date(date), 'MMM')} $${testValue}`
            });
        }
    }
}
