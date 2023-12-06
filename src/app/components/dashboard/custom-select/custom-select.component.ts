import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ICustomSelect {
    date: Date; optionValue: string; label?: string;
}

@Component({
    selector: 'app-custom-select',
    templateUrl: './custom-select.component.html',
    styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {
    @Input() public current!: ICustomSelect;
    @Input() public options!: Array<ICustomSelect>;
    @Input() public type = 1;
    @Output() public selected = new EventEmitter<{ option: ICustomSelect, index?: number }>();

    public data!: Array<ICustomSelect>;
    public lableObj!: ICustomSelect;

    public ngOnInit(): void {
        this.data = this.options;
        this.lableObj = this.data.filter(option => !!option.label)[0];
    }

    public selectedOption(option: ICustomSelect, index?: number): void {
        this.current = option;

        if (index) {
            this.selected.emit({ option: option, index: index})
        } else {
            this.selected.emit({ option: option })
        }

    }

}
