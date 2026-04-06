import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { ActionButtonsComponent } from 'src/app/library/components/action/action-buttons/action-buttons.component';

@Component({
    standalone: true,
    selector: 'app-action-buttons-docs-code',
    templateUrl: './action-buttons-docs-code.component.html',
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
    imports: [ MatTabsModule, ActionButtonsComponent ],
})
export class ActionButtonsDocsCodeComponent {

    /** Example code for html */
    public templateCode = `
<air-action-buttons
    size="medium"
    type="hugged"
    [data]="{
        tertiary: {text: 'Body text'},
        secondary: {text: 'Body text'},
        primary: {text: 'Body text'},
    }"
    (buttonClick)="onAction($event)">
</air-action-buttons>
    `;

    /** Example code for ts */
    public componentCode = `
@Component({
    ...,
    standalone: true,
    imports: [ ActionButtonsComponent ],
})

public onAction(ev: any): void {
    // TODO logic
}
    `;

    public buttonClick(ev: any): void {}
}
