import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html'
})
export class ComponentsComponent {

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
