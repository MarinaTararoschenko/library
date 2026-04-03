import { Component } from '@angular/core';

import { DocsCardTagBracketComponent } from 'src/stories/components/docs/docs-card/docs-card-tag-bracket.component';
import { IconButtonComponent } from 'src/app/library/components/buttons/icon-button/icon-button.component';

@Component({
    standalone: true,
    selector: 'app-icon-button-docs-variants',
    templateUrl: './icon-button-docs-variants.component.html',
    styleUrl: './icon-button-docs-variants.component.scss',
    imports: [
        DocsCardTagBracketComponent,
        IconButtonComponent
    ],
})
export class IconButtonDocsVariantsComponent {

    public icons = {
        plus: 'plus',
        edit: 'edit',
        search: 'search',
        star: 'star',
        trash: 'trash',
        bell: 'bell',
        settings: 'settings',
        layers: 'layers'
    };
}
