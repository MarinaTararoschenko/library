import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { TagComponent } from 'src/app/library/components/tag/tag.component';

export interface IDocsHeader {
    badge?: string;
    title: string;
    version: string;
    description: string;
}

@Component({
    standalone: true,
    selector: 'app-docs-header',
    templateUrl: './docs-header.component.html',
    styleUrl: './docs-header.component.scss',
    imports: [ MatIconModule, TagComponent ]
})
export class DocsHeaderComponent {
    @Input() public data!: IDocsHeader;
}
