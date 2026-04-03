import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { DocsComponent } from '../../docs/docs.component';
import { DocsHeaderComponent, IDocsHeader } from '../../docs/docs-header/docs-header.component';
import { DocsSectionComponent } from '../../docs/docs-section.component';
import { DocsCardComponent } from '../../docs/docs-card/docs-card.componet';
import { DocsCardListComponent } from '../../docs/docs-card/docs-card-list.component';
import { DocsCardTextComponent } from '../../docs/docs-card/docs-card-text.component';
import { DocsCardBoxComponent } from '../../docs/docs-card/docs-card-box.component';
import { DocsCardHeaderComponent } from '../../docs/docs-card/docs-card-header.component';
import { DocsCardGuidelineStatusComponent } from '../../docs/docs-card/docs-card-guideline-status.component';
import { DocsCardTagComponent } from '../../docs/docs-card/docs-card-tag.component';
import { ButtonDocsCodeComponent } from './button-docs-code/button-docs-code.component';
import { ButtonDocsAnatomyComponent } from './button-docs-anatomy/button-docs-anatomy.component';
import { ButtonDocsVariantsComponent } from './button-docs-variants/button-docs-variants.component';
import { ButtonDocsSizesComponent } from './button-docs-sizes/button-docs-sizes.component';
import { ButtonDocsStatesComponent } from './button-docs-states/button-docs-states.component';
import { ButtonComponent } from 'src/app/library/components/buttons/button/button.component';

@Component({
    standalone: true,
    selector: 'app-button-docs',
    templateUrl: './button-docs.component.html',
    styleUrls: ['./button-docs.component.scss'],
    imports: [
        DocsComponent,
        DocsHeaderComponent,
        DocsSectionComponent,
        DocsCardComponent,
        DocsCardListComponent,
        DocsCardTextComponent,
        DocsCardBoxComponent,
        DocsCardHeaderComponent,
        DocsCardGuidelineStatusComponent,
        DocsCardTagComponent,
        ButtonDocsCodeComponent,
        ButtonDocsAnatomyComponent,
        ButtonDocsVariantsComponent,
        ButtonDocsSizesComponent,
        ButtonDocsStatesComponent,
        ButtonComponent,
        MatDividerModule,
    ],
})
export class ButtonDocsComponent {

    public headerData: IDocsHeader = {
        title: 'Button',
        version: 'v1.0',
        description: `
            Es un elemento interactivo fundamental en interfaces de usuario de aplicaciones y sitios web, diseñado para que los usuarios puedan activar acciones o iniciar procesos con solo un clic o presionado. Este componente es esencial para la navegación y la interacción dentro del entorno digital, ya que proporciona una forma intuitiva y visualmente clara para que los usuarios realicen acciones específicas, como enviar formularios, confirmar selecciones o iniciar funciones dentro de la plataforma.
        `,
    };

    public cardsOverview = [
        {
            title: 'Cuándo usarlo',
            list: [
                `Cuando el usuario necesita ejecutar una acción dentro de un flujo sin abandonar el contexto actual.`,
                `Cuando la acción tiene diferente nivel de importancia y requiere comunicarse visualmente con jerarquía.`,
                `Cuando se necesita comunicar una acción destructiva que advierte al usuario del riesgo de la operación.`
            ]
        },
        {
            title: 'Cuándo no usarlo',
            list: [
                `Cuando la acción es de navegación entre páginas, para eso existe el sidebar o el menú principal.`,
                `Cuando hay más de 3 botones simultáneos en la misma zona de acciones.`,
                `Cuando el contexto requiere un componente especializado como Button Pay o Button Progress.`,
            ]
        }
    ];

    public accessibilityText = `El contraste de todos los elementos del botón debe garantizar su legibilidad en cualquier contexto de uso.`;

    public accessibilityList = [
        `El botón primary debe ser siempre el de mayor peso visual para comunicar la acción principal.`,
        `El botón destructive debe diferenciarse visualmente del resto para advertir al usuario del riesgo de la acción.`,
        `El estado disabled debe comunicarse visualmente de forma clara para que el usuario entienda que la acción no está disponible.`,
    ]

    public icons = {
        chevronRight: 'angle-right',
        chevronLeft: 'angle-left',
        layers: 'layers'
    };
}
