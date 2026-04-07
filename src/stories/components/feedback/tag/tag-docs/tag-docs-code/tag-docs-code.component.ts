import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { TagComponent } from 'src/app/library/components/feedback/tag/tag.component';

@Component({
    standalone: true,
    selector: 'app-tag-docs-code',
    templateUrl: './tag-docs-code.component.html',
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
    imports: [ MatTabsModule, TagComponent ],
})
export class TagDocsCodeComponent {

    /** Example code for html */
    public templateCode = `
<air-tag
    color="grey"
    size="s"
    [data]="{text: 'Body text', iconStart: 'layers', iconEnd: 'x-close'}"
    (onIconEndClick)="onIconEndClick()">
</air-tag>
    `;

    /** Example code for ts */
    public componentCode = `
@Component({
    ...,
    standalone: true,
    imports: [ TagComponent ],
})

public onIconEndClick(): void {
    console.log('Icon click');
}
    `;

    public onIconEndClick(): void {
        console.log('Button click');
    }
}
