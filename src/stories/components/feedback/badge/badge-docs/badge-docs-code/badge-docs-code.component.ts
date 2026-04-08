import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { BadgeComponent } from 'src/app/library/components/feedback/badge/badge.component';

@Component({
    standalone: true,
    selector: 'app-badge-docs-code',
    templateUrl: './badge-docs-code.component.html',
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
    imports: [ MatTabsModule, BadgeComponent ],
})
export class BadgeDocsCodeComponent {

    /** Example code for html */
    public templateCode = `
<air-badge
    color="blue"
    size="m"
    text="9"
    type="default">
</air-badge>
    `;

    /** Example code for ts */
    public componentCode = `
@Component({
    ...,
    standalone: true,
    imports: [ BadgeComponent ],
})
    `;
}
