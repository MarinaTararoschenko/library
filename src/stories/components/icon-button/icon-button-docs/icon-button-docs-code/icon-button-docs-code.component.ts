import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { IconButtonComponent } from 'src/app/library/components/buttons/icon-button/icon-button.component';

@Component({
    standalone: true,
    selector: 'app-icon-button-docs-code',
    templateUrl: './icon-button-docs-code.component.html',
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
    imports: [ MatTabsModule, IconButtonComponent ],
})
export class IconButtonDocsCodeComponent {

    /** Example code for html */
    public templateCode = `
<air-icon-button
    theme="primary"
    type="primary"
    size="m"
    icon="plus"
    (buttonClick)="onAction()">
</air-icon-button>

<air-icon-button
    theme="primary"
    type="secondary"
    size="m"
    icon="edit"
    (buttonClick)="onAction()">
</air-icon-button>

<air-icon-button
    theme="primary"
    type="tertiary"
    size="m"
    icon="search"
    (buttonClick)="onAction()">
</air-icon-button>

<air-icon-button
    theme="primary"
    type="tonal"
    size="m"
    icon="star"
    (buttonClick)="onAction()">
</air-icon-button>

<air-icon-button
    theme="primary"
    type="danger"
    size="m"
    icon="trash"
    (buttonClick)="onAction()">
</air-icon-button>
    `;

    /** Example code for ts */
    public componentCode = `
@Component({
    ...,
    standalone: true,
    imports: [ IconButtonComponent ],
})

public onAction(): void {
    console.log('Button clicked');
}
    `;

    public onAction(): void {}
}
