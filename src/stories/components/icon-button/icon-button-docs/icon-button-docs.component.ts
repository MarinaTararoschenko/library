import { Component } from '@angular/core';

import { DocsHeaderComponent, IDocsHeader } from '../../docs/docs-header/docs-header.component';
import { DocsSectionComponent } from '../../docs/docs-section.component';
import { DocsSectionSubtitleComponent } from '../../docs/docs-section-subtitle.component';
import { DocsComponent } from '../../docs/docs.component';
import { DocsCardComponent } from '../../docs/docs-card/docs-card.componet';
import { DocsCardListComponent } from '../../docs/docs-card/docs-card-list.component';
import { DocsCardTextComponent } from '../../docs/docs-card/docs-card-text.component';
import { DocsCardBoxComponent } from '../../docs/docs-card/docs-card-box.component';
import { DocsCardHeaderComponent } from '../../docs/docs-card/docs-card-header.component';
import { DocsCardGuidelineStatusComponent } from '../../docs/docs-card/docs-card-guideline-status.component';
import { DocsCardLabelComponent } from '../../docs/docs-card/docs-card-label.component';
import { IconButtonDocsAnatomyComponent } from './icon-button-docs-anatomy/icon-button-docs-anatomy.component';
import { IconButtonDocsVariantsComponent } from './icon-button-docs-variants/icon-button-docs-variants.component';
import { IconButtonDocsSizesComponent } from './icon-button-docs-sizes/icon-button-docs-sizes.component';
import { IconButtonComponent } from 'src/app/library/components/buttons/icon-button/icon-button.component';

@Component({
    standalone: true,
    selector: 'app-icon-button-docs',
    templateUrl: './icon-button-docs.component.html',
    styleUrls: ['./icon-button-docs.component.scss'],
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
        DocsCardLabelComponent,
        IconButtonDocsAnatomyComponent,
        IconButtonDocsVariantsComponent,
        IconButtonDocsSizesComponent,
        IconButtonComponent,
    ],
})
export class IconButtonDocsComponent {

    public headerData: IDocsHeader = {
        badge: 'AIR DesignSystem',
        title: 'Icon Button',
        version: 'v1.0',
        description: `
        Botón de acción compacto que contiene exclusivamente un ícono. Se usa cuando el espacio es reducido o cuando la
        acción es suficientemente reconocible sin texto. Disponible en 5 variantes visuales y 6 tamaños.
    `,
        copyright: '2026 HAULMER · All rights reserved',
    };

    public cardsOverview = [
        {
            title: 'Cuándo usarlo',
            list: [
                `Usar cuando la acción es clara e inequívoca sin texto: cerrar, agregar, buscar, editar.`,
                `Siempre proveer <code>ariaLabel</code> con una descripción precisa de la acción.`,
                `Usar <strong>primary</strong> para la acción más importante, <strong>tertiary</strong> para acciones secundarias en barras de herramientas.`,
                `Agrupar Icon Buttons relacionados con separadores visuales para dar contexto.`,
                `Preferir tamaños M o L en interfaces táctiles (área mínima recomendada: 40px).`,
            ]
        },
        {
            title: 'Cuándo no usarlo',
            list: [
                `No usar si la acción puede ser ambigua — optar por un <code>air-button</code> con label.`,
                `No omitir el atributo <code>ariaLabel</code> — los lectores de pantalla lo necesitan.`,
                `No mezclar variantes <strong>primary</strong> y <strong>danger</strong> en el mismo grupo de acciones.`,
                `No usar tamaño XS en interfaces táctiles — el área de toque sería demasiado pequeña.`,
            ]
        }
    ];

    public behaviorIteractionsText = `El botón responde a <strong>hover</strong> y <strong>active</strong> con cambio   de fondo. <code>disabled</code> reduce la opacidad al 40%. <code>loading</code> muestra un spinner circular y bloquea la interacción.`;

    public accessibilityText = `El componente <strong>Icon Button</strong> renderiza un <code>&lt;button&gt;</code> nativo. Al no tener texto visible, el atributo <code>ariaLabel</code> es <strong>obligatorio</strong> para garantizar la accesibilidad con lectores de pantalla.`;

    public accessibilityList = [
        `<strong>ariaLabel:</strong> requerido — describe la acción del botón para lectores de pantalla.`,
        `<strong>Teclado:</strong> Tab para enfocar, Enter o Space para activar.`,
        `<strong>Foco visible:</strong> anillo de 3px con color del tema (<code>--air-color-theme-background-a50</code>).`,
        `<strong>disabled:</strong> usa atributo nativo <code>disabled</code> — excluido del orden de Tab.`,
        `<strong>loading:</strong> considerar <code>aria-busy="true"</code> en el contenedor padre para notificar el estado.`,
        `<strong>Área táctil mínima:</strong> usar tamaño M (40px) o mayor en interfaces móviles.`,
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
