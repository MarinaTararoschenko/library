import { Component } from '@angular/core';

import { IconButtonComponent } from 'src/app/library/components/buttons/icon-button/icon-button.component';

@Component({
    standalone: true,
    selector: 'app-icon-button-docs-anatomy',
    templateUrl: './icon-button-docs-anatomy.component.html',
    styleUrl: './icon-button-docs-anatomy.component.scss',
    imports: [
        IconButtonComponent
    ],
})
export class IconButtonDocsAnatomyComponent { }
