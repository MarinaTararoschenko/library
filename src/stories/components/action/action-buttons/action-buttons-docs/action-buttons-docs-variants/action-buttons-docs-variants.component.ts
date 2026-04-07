import { Component } from '@angular/core';

import { DocsCardBoxComponent } from 'src/stories/components/docs/docs-card/docs-card-box.component';
import { DocsCardLabelComponent } from 'src/stories/components/docs/docs-card/docs-card-label.component';
import { ActionButtonsComponent } from 'src/app/library/components/action/action-buttons/action-buttons.component';

@Component({
    standalone: true,
    selector: 'app-action-buttons-docs-variants',
    templateUrl: './action-buttons-docs-variants.component.html',
    styleUrl: './action-buttons-docs-variants.component.scss',
    imports: [
        DocsCardBoxComponent,
        DocsCardLabelComponent,
        ActionButtonsComponent,
    ],
})
export class ActionButtonsDocsVariantsComponent { }
