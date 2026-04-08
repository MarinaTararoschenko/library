import { Component } from '@angular/core';

import { DocsCardTagComponent } from 'src/stories/components/docs/docs-card/docs-card-tag.component';
import { BadgeComponent } from 'src/app/library/components/feedback/badge/badge.component';

@Component({
    standalone: true,
    selector: 'app-badge-docs-anatomy',
    templateUrl: './badge-docs-anatomy.component.html',
    styleUrl: './badge-docs-anatomy.component.scss',
    imports: [
        DocsCardTagComponent,
        BadgeComponent
    ],
})
export class BadgeDocsAnatomyComponent { }
