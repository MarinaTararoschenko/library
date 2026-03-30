import { Component } from '@angular/core';

import { DocsCardLabelComponent } from 'src/stories/components/docs/docs-card/docs-card-label.component';
import { IconButtonComponent } from 'src/app/library/components/buttons/icon-button/icon-button.component';

@Component({
    standalone: true,
    selector: 'app-icon-button-docs-sizes',
    templateUrl: './icon-button-docs-sizes.component.html',
    styleUrl: './icon-button-docs-sizes.component.scss',
    imports: [
        DocsCardLabelComponent,
        IconButtonComponent
    ],
})
export class IconButtonDocsSizesComponent { }
