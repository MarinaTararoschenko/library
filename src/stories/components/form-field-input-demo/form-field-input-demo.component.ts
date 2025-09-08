import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { FormFieldInputComponent, IFormFieldInput } from 'src/app/library/components/form-field-input/form-field-input.component';

@Component({
    standalone: true,
    selector: 'app-form-field-input-demo',
    templateUrl: './form-field-input-demo.component.html',
    styles: [`
        .demo-container {
          padding: 16px;
        }
        pre {
          background: #f5f5f5;
          padding: 8px;
          border-radius: 4px;
        }
    `],
    imports: [
        MatCardModule,
        MatTabsModule,
        FormFieldInputComponent
    ],
})
export class FormFieldInputDemoComponent {
    @Input() public data!: IFormFieldInput;

    public form: FormGroup;

    public dataInput: IFormFieldInput = {
        label: 'Label text',
        placeholder: '999 999 999',
        prefixPhone: {
            img: 'cl',
            code: '+569'
        },
        btnSuffix: 'cross',
        controlName: 'name',
        hint: 'Hint text',
        error: 'Error text',
    };

    /** Example code for html */
    public templateCode = `
        <app-form-field-input [data]="dataInput" [form]="form"></app-form-field-input>
    `;

    /** Example code for ts */
    public componentCode = `
        public form: FormGroup;

        public dataInput: IFormFieldInput = {
            label: 'Label text',
            placeholder: '999 999 999',
            prefixPhone: {
                img: 'cl',
                code: '+569'
            },
            btnSuffix: 'cross',
            controlName: 'name',
            hint: 'Hint text',
            error: 'Error text',
        };

        constructor() {
            this.form = new FormGroup({
                name: new FormControl('', Validators.required),
            });
        }
    `;

    constructor() {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
        });
    }

    public clear(input: HTMLInputElement): void {
        input.value = '';
    }
}
