import { Component } from '@angular/core';

import { DocsCardTagComponent } from 'src/stories/components/docs/docs-card/docs-card-tag.component';
import { IconButtonComponent } from 'src/app/library/components/action/icon-button/icon-button.component';

@Component({
    standalone: true,
    selector: 'app-icon-button-docs-anatomy',
    templateUrl: './icon-button-docs-anatomy.component.html',
    styleUrl: './icon-button-docs-anatomy.component.scss',
    imports: [
        DocsCardTagComponent,
        IconButtonComponent
    ],
})
export class IconButtonDocsAnatomyComponent { }
