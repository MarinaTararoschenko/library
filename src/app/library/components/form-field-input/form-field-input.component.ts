import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

export interface IFormFieldInput {
    label?: string;
    placeholder?: string;
    suffix?: string;
    btnSuffix?: string;
    prefix?: string;
    hint?: string;
    error?: string;
    value?: string;
    controlName: string;
    readonly?: boolean;
    prefixPhone?: { img: string; code: string; };
}

@Component({
    standalone: true,
    selector: 'app-form-field-input',
    templateUrl: './form-field-input.component.html',
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule
    ],
})
export class FormFieldInputComponent {
    @Input() public data!: IFormFieldInput;
    @Input() public form!: FormGroup;
    @Output() public emitClick: EventEmitter<HTMLInputElement> = new EventEmitter();
}
