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
import { TagDocsCodeComponent } from './tag-docs-code/tag-docs-code.component';
import { TagDocsAnatomyComponent } from './tag-docs-anatomy/tag-docs-anatomy.component';
import { TagDocsVariantsComponent } from './tag-docs-variants/tag-docs-variants.component';
import { TagDocsSizesComponent } from './tag-docs-sizes/tag-docs-sizes.component';
import { TagComponent } from 'src/app/library/components/feedback/tag/tag.component';

@Component({
    standalone: true,
    selector: 'app-tag-docs',
    templateUrl: './tag-docs.component.html',
    styleUrls: ['./tag-docs.component.scss'],
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
        TagDocsCodeComponent,
        TagDocsAnatomyComponent,
        TagDocsVariantsComponent,
        TagDocsSizesComponent,
        TagComponent,
        MatDividerModule
    ],
})
export class TagDocsComponent {

    public headerData: IDocsHeader = {
        title: 'Tag',
        version: 'v1.0',
        description: `
            Chip compacto para etiquetar, categorizar o filtrar contenido. Disponible en 5 variantes de color, 2 tamaños y con botón de dismiss opcional. A diferencia de Tag State, Tag no tiene semántica de estado — es para categorización y filtrado.
        `,
    };

    public cardsOverview = [
        {
            title: 'Cuándo usarlo',
            list: [
                `Usar para mostrar categorías, etiquetas o filtros activos aplicados por el usuario.`,
                `Usar dismissible cuando el usuario debe poder eliminar la etiqueta.`,
                `Usar el tamaño S en espacios densos como tablas o filtros; M en tarjetas y formularios.`,
                `Usar variantes de color para diferenciar categorías relacionadas.`,
            ]
        },
        {
            title: 'Cuándo no usarlo',
            list: [
                `No usar para estados semánticos — usar Tag State en su lugar.`,
                `No usar como botón de acción — no comunica interactividad clara.`,
                `No combinar más de 4-5 variantes de color distintas en la misma vista.`,
            ]
        }
    ];

    public accessibilityText = `El componente Tag es un elemento informativo estático. Cuando es dismissible, el botón de cierre incluye aria-label descriptivo. El color no es el único diferenciador — siempre hay texto visible.`;

    public accessibilityList = [
        `Botón dismiss con aria-label="Eliminar etiqueta" cuando es dismissible.`,
        `Focus visible en el botón dismiss con anillo de foco.`,
        `Color no es el único diferenciador — el label siempre está presente.`,
        `Contraste mínimo AA (4.5:1) en todas las variantes.`,
    ];
}
