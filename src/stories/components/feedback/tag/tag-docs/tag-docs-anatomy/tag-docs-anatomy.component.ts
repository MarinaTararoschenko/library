import { Component } from '@angular/core';

import { DocsCardTagComponent } from 'src/stories/components/docs/docs-card/docs-card-tag.component';
import { TagComponent } from 'src/app/library/components/feedback/tag/tag.component';

@Component({
    standalone: true,
    selector: 'app-tag-docs-anatomy',
    templateUrl: './tag-docs-anatomy.component.html',
    styleUrl: './tag-docs-anatomy.component.scss',
    imports: [
        DocsCardTagComponent,
        TagComponent
    ],
})
export class TagDocsAnatomyComponent { }
