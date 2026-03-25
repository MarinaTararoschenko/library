import { Component, Inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialog } from '@angular/material/dialog';

import { ButtonComponent } from '../buttons/button/button.component';


export interface IDialogBasic {
    title: string;
    description: string;
    actions: Array<{text: string}>;
    icon?: string;
    style?: string;
}

@Component({
    standalone: true,
    selector: 'app-dialog-basic',
    templateUrl: './dialog-basic.component.html',
    styleUrl: './dialog-basic.component.scss',
    imports: [
        MatButtonModule,
        MatDialogClose,
        MatDialogContent,
        MatDialogActions,
        MatIconModule,
        ButtonComponent,
    ],
})
export class DialogBasicComponent {

    public dialogData: IDialogBasic;

    constructor(
        private _iconRegistry: MatIconRegistry,
        private _sanitizer: DomSanitizer,
        public dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: IDialogBasic,
    ) {
        this._iconRegistry.addSvgIconSet(this._sanitizer.bypassSecurityTrustResourceUrl('./assets/images/icons/set.svg'));
        this.dialogData = this.data;
    }
}
