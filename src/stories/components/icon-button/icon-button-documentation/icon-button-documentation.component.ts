import { Component } from '@angular/core';

import { IconButtonComponent } from 'src/app/library/components/buttons/icon-button/icon-button.component';

@Component({
    standalone: true,
    selector: 'app-icon-button-documentation',
    templateUrl: './icon-button-documentation.component.html',
    styleUrls: ['./icon-button-documentation.component.scss'],
    imports: [
        IconButtonComponent,
    ],
})
export class IconButtonDocumentationComponent {
    icons = {
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
