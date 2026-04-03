import { Component, Input } from "@angular/core";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from '@angular/material/tabs';
import { JsonPipe } from "@angular/common";

import { DialogBasicComponent, IDialogBasic } from "src/app/library/components/dialog-basic/dialog-basic.component";
import { ButtonComponent } from "src/app/library/components/buttons/button/button.component";

@Component({
    standalone: true,
    selector: 'app-dialog-basic-demo',
    templateUrl: './dialog-basic-demo.component.html',
    styles: [`
        .demo-container {
          padding: 16px;
          text-align: center;
        }
        .result {
          margin-top: 16px;
          padding: 8px;
          background: #f5f5f5;
        }
        pre {
          background: #f5f5f5;
          padding: 8px;
          border-radius: 4px;
        }
    `],
    imports: [
        HttpClientModule,
        MatDialogModule,
        MatCardModule,
        MatTabsModule,
        JsonPipe,
        ButtonComponent
    ],
})
export class DialogBasicDemoComponent {
    /** Data interface */
    @Input() public dialogData: IDialogBasic;

    public currentStyle: 'text' | 'icon' = 'text';

    /** Dialog style */
    @Input() public set style(value: 'text' | 'icon') {
        this.currentStyle = value;
    };

    dialogResult: any;

    /** Example code for html */
    public templateCode = `
        <air-button
            theme="primary"
            type="primary"
            size="m"
            [data]="{ text: 'Open dialog' }"
            (buttonClick)="openDialog()">
        </air-button>
    `;

    /** Example code for ts */
    public componentCode = `
        openDialog() {
            const dialogData: IDialogBasic = {
                title: 'Editar nombre',
                description: "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
                actions: [{ text: 'Cancelar' }, { text: 'Guardar' }],
                icon: 'info',
                style: 'text'
            };

            this.dialog.open(DialogBasicComponent, {
                width: '312px',
                data: this.dialogData
            });
        }
    `;

    constructor(public dialog: MatDialog) {
        this.dialogData = {
            title: 'Test',
            description: "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
            actions: [{ text: 'Cancelar' }, { text: 'Guardar' }],
            icon: 'info',
            style: this.currentStyle
        };
    }

    openDialog() {
        this.dialogData.style = this.currentStyle;

        this.dialog.open(DialogBasicComponent, {
            width: '312px',
            data: this.dialogData
        });
    }
}
