import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { ButtonComponent } from 'src/app/library/components/buttons/button/button.component';

@Component({
    standalone: true,
    selector: 'app-button-docs-code',
    templateUrl: './button-docs-code.component.html',
    styles: [`
        .demo-container {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            gap: 16px;
            padding: 16px;
        }
        pre {
            background: #1e293b;
            color: #e2e8f0;
            padding: 0.5rem 1.5rem;
            border-radius: 12px;
            font-size: 13px;
            overflow-x: auto;
        }
    `],
    imports: [ MatTabsModule, ButtonComponent ],
})
export class ButtonDocsCodeComponent {

    /** Example code for html */
    public templateCode = `
<air-button
    theme="primary"
    type="primary"
    [disabled]="false"
    [isLoading]="false"
    [data]="{ text: 'Primary', iconStart: 'layers', iconEnd: 'angle-right'}"
    (buttonClick)="onAction()">
</air-button>

<air-button
    theme="primary"
    type="secondary"
    [disabled]="false"
    [isLoading]="false"
    [data]="{text: 'Secondary', iconStart: 'layers', iconEnd: 'angle-right'}"
    (buttonClick)="onAction()">
</air-button>

<air-button
    theme="primary"
    type="tertiary"
    [disabled]="false"
    [isLoading]="false"
    [data]="{text: 'Tertiary', iconStart: 'layers', iconEnd: 'angle-right'}"
    (buttonClick)="onAction()">
</air-button>

<air-button
    theme="primary"
    type="tonal"
    [disabled]="false"
    [isLoading]="false"
    [data]="{text: 'Tonal', iconStart: 'layers', iconEnd: 'angle-right'}"
    (buttonClick)="onAction()">
</air-button>

<air-button
    theme="primary"
    type="danger"
    [disabled]="false"
    [isLoading]="false"
    [data]="{text: 'Danger', iconStart: 'layers', iconEnd: 'angle-right'}"
    (buttonClick)="onAction()">
</air-button>

<air-button
    theme="primary"
    type="dangerText"
    [disabled]="false"
    [isLoading]="false"
    [data]="{text: 'Danger Text', iconStart: 'layers', iconEnd: 'angle-right'}"
    (buttonClick)="onAction()">
</air-button>
    `;

    /** Example code for ts */
    public componentCode = `
@Component({
    ...,
    standalone: true,
    imports: [ ButtonComponent ],
})

public onAction(): void {
    console.log('Button click');
}
    `;

    public onAction(): void {
        console.log('Button click');
    }
}
