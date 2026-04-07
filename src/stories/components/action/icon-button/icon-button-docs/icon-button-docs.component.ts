import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { DocsHeaderComponent, IDocsHeader } from '../../../docs/docs-header/docs-header.component';
import { DocsSectionComponent } from '../../../docs/docs-section.component';
import { DocsComponent } from '../../../docs/docs.component';
import { DocsCardComponent } from '../../../docs/docs-card/docs-card.componet';
import { DocsCardListComponent } from '../../../docs/docs-card/docs-card-list.component';
import { DocsCardTextComponent } from '../../../docs/docs-card/docs-card-text.component';
import { DocsCardBoxComponent } from '../../../docs/docs-card/docs-card-box.component';
import { DocsCardHeaderComponent } from '../../../docs/docs-card/docs-card-header.component';
import { DocsCardGuidelineStatusComponent } from '../../../docs/docs-card/docs-card-guideline-status.component';
import { DocsCardTagComponent } from '../../../docs/docs-card/docs-card-tag.component';
import { IconButtonDocsCodeComponent } from './icon-button-docs-code/icon-button-docs-code.component';
import { IconButtonDocsAnatomyComponent } from './icon-button-docs-anatomy/icon-button-docs-anatomy.component';
import { IconButtonDocsVariantsComponent } from './icon-button-docs-variants/icon-button-docs-variants.component';
import { IconButtonDocsSizesComponent } from './icon-button-docs-sizes/icon-button-docs-sizes.component';
import { IconButtonComponent } from 'src/app/library/components/action/icon-button/icon-button.component';

@Component({
    standalone: true,
    selector: 'app-icon-button-docs',
    templateUrl: './icon-button-docs.component.html',
    styleUrls: ['./icon-button-docs.component.scss'],
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
        IconButtonDocsCodeComponent,
        IconButtonDocsAnatomyComponent,
        IconButtonDocsVariantsComponent,
        IconButtonDocsSizesComponent,
        IconButtonComponent,
        MatDividerModule
    ],
})
export class IconButtonDocsComponent {

    public headerData: IDocsHeader = {
        title: 'Icon Button',
        version: 'v1.0',
        description: `
            El Icon Button es un botón que comunica su acción únicamente mediante un ícono, sin label de texto. Puede usarse de forma individual o agrupado con otros Icon Buttons según el contexto, y su acción debe ser reconocible e identificable a simple vista.
        `,
    };

    public cardsOverview = [
        {
            title: 'Cuándo usarlo',
            list: [
                `Cuando la acción es suficientemente reconocible mediante un ícono sin necesitar un label de texto`,
                `Cuando el espacio disponible es reducido y un botón con texto ocuparía demasiado espacio`,
                `Cuando se agrupa con otros Icon Buttons para formar una zona de acciones compacta`,
            ]
        },
        {
            title: 'Cuándo no usarlo',
            list: [
                `Cuando la acción no es reconocible mediante un ícono y requiere un label para ser comprendida`,
                `Cuando el contexto es crítico y la acción necesita ser comunicada con total claridad`,
                `Cuando el ícono disponible no representa con precisión la acción que ejecuta el botón`,
            ]
        }
    ];

    public accessibilityText = `El contraste del ícono debe garantizar su legibilidad en cualquier contexto de uso.`;

    public accessibilityList = [
        `El ícono debe ser reconocible e identificable a simple vista sin necesitar texto de apoyo`,
        `El estado disabled debe comunicarse visualmente de forma clara para que el usuario entienda que la acción no está disponible`,
        `Cuando se agrupa con otros Icon Buttons el espaciado entre ellos debe evitar toques accidentales en mobile`,
    ];

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
