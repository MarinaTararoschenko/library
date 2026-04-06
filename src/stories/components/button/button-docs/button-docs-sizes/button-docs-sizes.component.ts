import { Component } from '@angular/core';

import { DocsCardTagBracketComponent } from 'src/stories/components/docs/docs-card/docs-card-tag-bracket.component';
import { ButtonComponent } from 'src/app/library/components/action/button/button.component';

@Component({
    standalone: true,
    selector: 'app-button-docs-sizes',
    templateUrl: './button-docs-sizes.component.html',
    styleUrl: './button-docs-sizes.component.scss',
    imports: [
        DocsCardTagBracketComponent,
        ButtonComponent
    ],
})
export class ButtonDocsSizesComponent { }
