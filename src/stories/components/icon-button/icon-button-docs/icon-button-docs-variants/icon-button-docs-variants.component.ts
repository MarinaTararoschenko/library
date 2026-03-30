import { Component } from '@angular/core';

import { DocsCardBoxComponent } from 'src/stories/components/docs/docs-card/docs-card-box.component';
import { DocsCardLabelComponent } from 'src/stories/components/docs/docs-card/docs-card-label.component';
import { IconButtonComponent } from 'src/app/library/components/buttons/icon-button/icon-button.component';

@Component({
    standalone: true,
    selector: 'app-icon-button-docs-variants',
    templateUrl: './icon-button-docs-variants.component.html',
    styleUrl: './icon-button-docs-variants.component.scss',
    imports: [
        DocsCardBoxComponent,
        DocsCardLabelComponent,
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
