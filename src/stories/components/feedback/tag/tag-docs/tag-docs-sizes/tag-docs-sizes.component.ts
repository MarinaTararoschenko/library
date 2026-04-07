import { Component } from '@angular/core';

import { DocsCardTagBracketComponent } from 'src/stories/components/docs/docs-card/docs-card-tag-bracket.component';
import { TagComponent } from 'src/app/library/components/feedback/tag/tag.component';

@Component({
    standalone: true,
    selector: 'app-tag-docs-sizes',
    templateUrl: './tag-docs-sizes.component.html',
    styleUrl: './tag-docs-sizes.component.scss',
    imports: [
        DocsCardTagBracketComponent,
        TagComponent
    ],
})
export class TagDocsSizesComponent { }
