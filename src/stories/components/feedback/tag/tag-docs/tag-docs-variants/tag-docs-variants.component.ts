import { Component } from '@angular/core';

import { DocsCardTagBracketComponent } from 'src/stories/components/docs/docs-card/docs-card-tag-bracket.component';
import { TagComponent } from 'src/app/library/components/feedback/tag/tag.component';

@Component({
    standalone: true,
    selector: 'app-tag-docs-variants',
    templateUrl: './tag-docs-variants.component.html',
    styleUrl: './tag-docs-variants.component.scss',
    imports: [
        DocsCardTagBracketComponent,
        TagComponent
    ],
})
export class TagDocsVariantsComponent {

}
