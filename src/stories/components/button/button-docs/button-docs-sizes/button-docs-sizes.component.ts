import { Component } from '@angular/core';

import { DocsCardLabelComponent } from 'src/stories/components/docs/docs-card/docs-card-label.component';
import { ButtonComponent } from 'src/app/library/components/buttons/button/button.component';

@Component({
    standalone: true,
    selector: 'app-button-docs-sizes',
    templateUrl: './button-docs-sizes.component.html',
    styleUrl: './button-docs-sizes.component.scss',
    imports: [
        DocsCardLabelComponent,
        ButtonComponent
    ],
})
export class ButtonDocsSizesComponent { }
