import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { ButtonTextComponent } from 'src/app/library/components/buttons/button-text/button-text.component';
import { ButtonFilledComponent } from 'src/app/library/components/buttons/button-filled/button-filled.component';
import { ButtonOutlinedComponent } from 'src/app/library/components/buttons/button-outlined/button-outlined.component';
import { BannerComponent } from 'src/app/library/components/banner/banner.component';
import { DialogBasicComponent, IDialogBasic } from 'src/app/library/components/dialog-basic/dialog-basic.component';
import { FormFieldInputComponent, IFormFieldInput } from 'src/app/library/components/form-field-input/form-field-input.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'app-storybook-library',
    templateUrl: './storybook-library.component.html',
    imports: [
        MatDialogModule,
        ButtonTextComponent,
        ButtonFilledComponent,
        ButtonOutlinedComponent,
        BannerComponent,
        MatIconModule,
        MatButtonModule,
        FormFieldInputComponent
    ],
})
export class StorybookLibraryComponent {

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

    constructor(
        public dialog: MatDialog,
        private _iconRegistry: MatIconRegistry,
        private _sanitizer: DomSanitizer,
    ) {
        this._iconRegistry.addSvgIconSet(this._sanitizer.bypassSecurityTrustResourceUrl('./assets/images/icons/set.svg'));

        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
        });
    }

    public onClick(ev: Event): void {
        console.log('click btn storybook: ', ev);
    }

    public openModal(): void {
        const dialogData: IDialogBasic = {
            title: 'Title',
            description: 'A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.',
            actions: [
                { text: 'Cancelar'},
                { text: 'Guardar'}
            ],
            icon: 'info',
            style: 'icon'
        };
        this.dialog.open(DialogBasicComponent, {
            width: '312px',
            panelClass: 'dialogBasic',
            data: dialogData
        });
    }
}
