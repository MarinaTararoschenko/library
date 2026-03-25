import { Component } from '@angular/core';

import { ButtonComponent } from 'src/app/library/components/buttons/button/button.component';

@Component({
    standalone: true,
    selector: 'app-button-documentation',
    templateUrl: './button-documentation.component.html',
    styleUrls: ['./button-documentation.component.scss'],
    imports: [
        ButtonComponent,
    ],
})
export class ButtonDocumentationComponent {
    public icons = {
        chevronRight: 'angle-right',
        chevronLeft: 'angle-left',
        layers: 'layers'
    };
}
