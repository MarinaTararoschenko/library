import { Component } from '@angular/core';

import { DocsCardLabelComponent } from 'src/stories/components/docs/docs-card/docs-card-label.component';
import { ActionButtonsComponent } from 'src/app/library/components/action/action-buttons/action-buttons.component';

@Component({
    standalone: true,
    selector: 'app-action-buttons-docs-sizes',
    templateUrl: './action-buttons-docs-sizes.component.html',
    styleUrl: './action-buttons-docs-sizes.component.scss',
    imports: [
        DocsCardLabelComponent,
        ActionButtonsComponent
    ],
})
export class ActionButtonsDocsSizesComponent { }
