import { Component } from '@angular/core';

import { DocsCardTagBracketComponent } from 'src/stories/components/docs/docs-card/docs-card-tag-bracket.component';
import { IconButtonComponent } from 'src/app/library/components/action/icon-button/icon-button.component';

@Component({
    standalone: true,
    selector: 'app-icon-button-docs-sizes',
    templateUrl: './icon-button-docs-sizes.component.html',
    styleUrl: './icon-button-docs-sizes.component.scss',
    imports: [
        DocsCardTagBracketComponent,
        IconButtonComponent
    ],
})
export class IconButtonDocsSizesComponent { }
