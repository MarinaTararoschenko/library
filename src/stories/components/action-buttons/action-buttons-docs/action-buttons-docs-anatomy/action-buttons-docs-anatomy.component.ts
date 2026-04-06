
import { Component } from '@angular/core';

import { DocsCardTagComponent } from 'src/stories/components/docs/docs-card/docs-card-tag.component';
import { DocsCardTagBracketComponent } from 'src/stories/components/docs/docs-card/docs-card-tag-bracket.component';
import { ActionButtonsComponent } from 'src/app/library/components/action/action-buttons/action-buttons.component';

@Component({
    standalone: true,
    selector: 'app-action-buttons-docs-anatomy',
    templateUrl: './action-buttons-docs-anatomy.component.html',
    styleUrl: './action-buttons-docs-anatomy.component.scss',
    imports: [
        DocsCardTagComponent,
        DocsCardTagBracketComponent,
        ActionButtonsComponent
    ],
})
export class ActionButtonsDocsAnatomyComponent { }
