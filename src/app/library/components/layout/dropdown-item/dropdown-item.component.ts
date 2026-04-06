import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CheckboxComponent, ICheckbox } from '../../forms/checkbox/checkbox.component';
import { BadgeComponent } from '../../feedback/badge/badge.component';

export interface IDropdown {
    id?: number | string;
    text: string;
    subtext?: string;
    icon?: string;
    checkbox?: ICheckbox;
    badge?: string;
    disabled?: boolean;
}

@Component({
    standalone: true,
    selector: 'air-dropdown-item',
    templateUrl: './dropdown-item.component.html',
    styleUrls: ['./dropdown-item.component.scss'],
    imports: [
        MatSelectModule,
        MatIconModule,
        CheckboxComponent,
        MatButtonModule,
        BadgeComponent,
    ],
})
export class DropdownItemComponent {
    @Input() public data!: IDropdown;
    @Input() public form?: FormGroup;
    @Input() public selected: boolean = false;

    @Output() public selectItem: EventEmitter<IDropdown> = new EventEmitter;
    @Output() public checkboxChange: EventEmitter<{ checked: boolean, data: IDropdown }> = new EventEmitter();

    /**
     * Handle checkbox click
     */
    public onCheckboxClick(event: Event): void {
        event.stopPropagation();
        if (this.data.disabled) {
            return;
        }
        this.selectItem.emit(this.data);
    }

    /**
     * Handle button click
     */
    public onButtonClick(event: Event): void {
        if (this.data.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return;
        }

        if (this.data.checkbox) {
            event.preventDefault();
            event.stopImmediatePropagation();

            const control = this.form?.get(this.data.checkbox.controlName);
            if (control) {
                const newValue = !control.value;
                control.setValue(newValue);
            }

            this.selectItem.emit(this.data);
            return;
        }
        this.selectItem.emit(this.data);
    }

}
