import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { DocsComponent } from '../../../docs/docs.component';
import { DocsHeaderComponent, IDocsHeader } from '../../../docs/docs-header/docs-header.component';
import { DocsSectionComponent } from '../../../docs/docs-section.component';
import { DocsSectionSubtitleComponent } from '../../../docs/docs-section-subtitle.component';
import { DocsCardComponent } from '../../../docs/docs-card/docs-card.componet';
import { DocsCardListComponent } from '../../../docs/docs-card/docs-card-list.component';
import { DocsCardTextComponent } from '../../../docs/docs-card/docs-card-text.component';
import { DocsCardBoxComponent } from '../../../docs/docs-card/docs-card-box.component';
import { DocsCardHeaderComponent } from '../../../docs/docs-card/docs-card-header.component';
import { DocsCardGuidelineStatusComponent } from '../../../docs/docs-card/docs-card-guideline-status.component';
import { DocsCardTagComponent } from '../../../docs/docs-card/docs-card-tag.component';
import { ActionButtonsDocsCodeComponent } from './action-buttons-docs-code/action-buttons-docs-code.component';
import { ActionButtonsDocsAnatomyComponent } from './action-buttons-docs-anatomy/action-buttons-docs-anatomy.component';
import { ActionButtonsDocsVariantsComponent } from './action-buttons-docs-variants/action-buttons-docs-variants.component';
import { ActionButtonsDocsSizesComponent } from './action-buttons-docs-sizes/action-buttons-docs-sizes.component';
import { ActionButtonsComponent } from 'src/app/library/components/action/action-buttons/action-buttons.component';
import { ButtonComponent } from 'src/app/library/components/action/button/button.component';

@Component({
    standalone: true,
    selector: 'app-action-buttons-docs',
    templateUrl: './action-buttons-docs.component.html',
    styleUrls: ['./action-buttons-docs.component.scss'],
    imports: [
        DocsComponent,
        DocsHeaderComponent,
        DocsSectionComponent,
        DocsSectionSubtitleComponent,
        DocsCardComponent,
        DocsCardListComponent,
        DocsCardTextComponent,
        DocsCardBoxComponent,
        DocsCardHeaderComponent,
        DocsCardGuidelineStatusComponent,
        DocsCardTagComponent,
        ActionButtonsDocsCodeComponent,
        ActionButtonsDocsAnatomyComponent,
        ActionButtonsDocsVariantsComponent,
        ActionButtonsDocsSizesComponent,
        ActionButtonsComponent,
        ButtonComponent,
        MatDividerModule
    ],
})
export class ActionButtonsDocsComponent {

    public headerData: IDocsHeader = {
        title: 'Action Buttons',
        version: 'v1.0',
        description: `
            Este layout está diseñado para destacar y priorizar las acciones más relevantes o frecuentemente utilizadas por los usuarios, colocándolas en posiciones estratégicas según su importancia. Los "Action Buttons" suelen seguir una jerarquía clara, donde las acciones primarias están ubicadas en lugares prominentes y las acciones secundarias o menos utilizadas se presentan de manera más discreta. Este enfoque permite una navegación más intuitiva y eficiente para los usuarios, ya que pueden identificar rápidamente las acciones disponibles y tomar decisiones informadas sobre cómo interactuar
        `,
    };

    public cardsOverview = [
        {
            title: 'Cuándo usarlo',
            list: [
                `Cuando la vista requiere una o más acciones principales accesibles de forma directa.`,
                `Cuando las acciones tienen diferente jerarquía y necesitan distinguirse visualmente entre sí.`,
                `Cuando el usuario necesita ejecutar una acción sin abandonar el contexto de la vista actual.`,
            ]
        },
        {
            title: 'Cuándo no usarlo',
            list: [
                `Cuando hay más de 3 acciones visibles simultáneamente, genera sobrecarga visual.`,
                `Cuando la acción es de navegación entre páginas, para eso existe el sidebar o el menú principal.`,
                `Cuando el contexto es mobile y el espacio no permite mostrar los botones correctamente sin truncar el texto.`,
            ]
        }
    ];

    public accessibilityText = `El contraste de los botones debe garantizar su legibilidad en cualquier contexto de uso.`;

    public accessibilityList = [
        `El botón primario debe ser el de mayor peso visual para comunicar la acción principal de forma inmediata..`,
        `Los botones deben tener un área de toque adecuada al contexto para garantizar una interacción cómoda.`,
        `El estado disabled debe comunicarse visualmente de forma clara sin depender únicamente del color.`,
    ]

    public icons = {
        chevronRight: 'angle-right',
        chevronLeft: 'angle-left',
        layers: 'layers'
    };

    /** Example code for html */
    public templateCode = `
<air-action-buttons
    size="m"
    type="hugged"
    [data]="{
        tertiary: {text: 'Body text'},
        secondary: {text: 'Body text'},
        primary: {text: 'Body text'},
    }"
    (buttonClick)="onAction($event)">
</air-action-buttons>

public onAction(button: IButtonWithState): void {
    console.log(button);
}
    `;
}
