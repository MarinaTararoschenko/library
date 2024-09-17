import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html'
})
export class ComponentsComponent {

    public today: number = Date.now();
    public tasksCount = 1;
    public minutes = 0;

    public form: FormGroup;

    constructor(
        private _formBuilder: FormBuilder
    ) {
        this.form = this._formBuilder.group({
            phone: [''],
            phoneMenuSuffix: [''],
            phoneMenuPrefix: ['']
        });

    }

}
