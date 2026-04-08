import { Component } from '@angular/core';

import { DocsCardTagBracketComponent } from 'src/stories/components/docs/docs-card/docs-card-tag-bracket.component';
import { BadgeComponent } from 'src/app/library/components/feedback/badge/badge.component';

@Component({
    standalone: true,
    selector: 'app-badge-docs-variants',
    templateUrl: './badge-docs-variants.component.html',
    styleUrl: './badge-docs-variants.component.scss',
    imports: [
        DocsCardTagBracketComponent,
        BadgeComponent
    ],
})
export class BadgeDocsVariantsComponent {

}
