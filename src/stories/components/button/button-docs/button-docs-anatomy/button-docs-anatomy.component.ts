import { Component } from '@angular/core';

import { ButtonComponent } from 'src/app/library/components/buttons/button/button.component';

@Component({
    standalone: true,
    selector: 'app-button-docs-anatomy',
    templateUrl: './button-docs-anatomy.component.html',
    styleUrl: './button-docs-anatomy.component.scss',
    imports: [
        ButtonComponent
    ],
})
export class ButtonDocsAnatomyComponent { }
