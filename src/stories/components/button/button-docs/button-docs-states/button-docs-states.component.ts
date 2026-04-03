import { Component } from '@angular/core';

import { DocsCardTagBracketComponent } from 'src/stories/components/docs/docs-card/docs-card-tag-bracket.component';
import { ButtonComponent } from 'src/app/library/components/buttons/button/button.component';

@Component({
    standalone: true,
    selector: 'app-button-docs-states',
    templateUrl: './button-docs-states.component.html',
    styleUrl: './button-docs-states.component.scss',
    imports: [
        DocsCardTagBracketComponent,
        ButtonComponent
    ],
})
export class ButtonDocsStatesComponent { }
