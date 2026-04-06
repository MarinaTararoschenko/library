import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface ICheckbox {
    label?: string;
    controlName: string;
}

@Component({
    standalone: true,
    selector: 'air-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
    ],
})
export class CheckboxComponent {
    @Input() public form!: FormGroup;
    @Input() public data!: ICheckbox;
    @Output() public checkboxClick = new EventEmitter<Event>();

    public onCheckboxClick(event: Event): void {
        event.stopPropagation();
        this.checkboxClick.emit(event);
    }
}
