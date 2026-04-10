import { Component } from '@angular/core';

import { DocsCardTagBracketComponent } from 'src/stories/components/docs/docs-card/docs-card-tag-bracket.component';
import { ButtonComponent } from 'src/app/library/components/action/button/button.component';
import { IconButtonComponent } from 'src/app/library/components/action/icon-button/icon-button.component';

@Component({
    standalone: true,
    selector: 'app-header-docs-variants',
    templateUrl: './header-docs-variants.component.html',
    styleUrl: './header-docs-variants.component.scss',
    imports: [
        DocsCardTagBracketComponent,
        ButtonComponent,
        IconButtonComponent,
    ],
})
export class HeaderDocsVariantsComponent {

}
