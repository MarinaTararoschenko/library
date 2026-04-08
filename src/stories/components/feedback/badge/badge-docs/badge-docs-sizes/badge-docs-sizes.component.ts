import { Component } from '@angular/core';

import { DocsCardTagBracketComponent } from 'src/stories/components/docs/docs-card/docs-card-tag-bracket.component';
import { BadgeComponent } from 'src/app/library/components/feedback/badge/badge.component';

@Component({
    standalone: true,
    selector: 'app-badge-docs-sizes',
    templateUrl: './badge-docs-sizes.component.html',
    styleUrl: './badge-docs-sizes.component.scss',
    imports: [
        DocsCardTagBracketComponent,
        BadgeComponent
    ],
})
export class BadgeDocsSizesComponent { }
