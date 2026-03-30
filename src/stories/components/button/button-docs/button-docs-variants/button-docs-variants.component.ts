import { Component } from '@angular/core';

import { DocsCardBoxComponent } from 'src/stories/components/docs/docs-card/docs-card-box.component';
import { DocsCardLabelComponent } from 'src/stories/components/docs/docs-card/docs-card-label.component';
import { ButtonComponent } from 'src/app/library/components/buttons/button/button.component';

@Component({
    standalone: true,
    selector: 'app-button-docs-variants',
    templateUrl: './button-docs-variants.component.html',
    styleUrl: './button-docs-variants.component.scss',
    imports: [
        DocsCardBoxComponent,
        DocsCardLabelComponent,
        ButtonComponent,
    ],
})
export class ButtonDocsVariantsComponent { }
