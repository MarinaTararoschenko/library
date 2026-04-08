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
import { BadgeDocsCodeComponent } from './badge-docs-code/badge-docs-code.component';
import { BadgeDocsAnatomyComponent } from './badge-docs-anatomy/badge-docs-anatomy.component';
import { BadgeDocsVariantsComponent } from './badge-docs-variants/badge-docs-variants.component';
import { BadgeDocsSizesComponent } from './badge-docs-sizes/badge-docs-sizes.component';
import { BadgeComponent } from 'src/app/library/components/feedback/badge/badge.component';
import { IconButtonComponent } from 'src/app/library/components/action/icon-button/icon-button.component';

@Component({
    standalone: true,
    selector: 'app-badge-docs',
    templateUrl: './badge-docs.component.html',
    styleUrls: ['./badge-docs.component.scss'],
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
        BadgeDocsCodeComponent,
        BadgeDocsAnatomyComponent,
        BadgeDocsVariantsComponent,
        BadgeDocsSizesComponent,
        BadgeComponent,
        MatDividerModule,
        IconButtonComponent
    ],
})
export class BadgeDocsComponent {

    public headerData: IDocsHeader = {
        title: 'Badge',
        version: 'v1.0',
        description: `
            Indicador numérico compacto que se superpone sobre iconos o elementos de navegación para comunicar conteos de notificaciones o estados pendientes. Escala automáticamente de círculo a píldora cuando el texto supera el diámetro del contenedor.
        `,
    };

    public cardsOverview = [
        {
            title: 'Cuándo usarlo',
            list: [
                `Mostrar conteo de notificaciones no leídas sobre un icono de alerta o menú.`,
                `Indicar cantidad de ítems en un carrito, bandeja de entrada o cola de tareas.`,
                `Señalizar alertas activas en ítems de navegación (tabs, bottom nav, sidebar).`,
                `Usar junto a BottomNavItem, IconButton o íconos en cabeceras.`,
            ]
        },
        {
            title: 'Cuándo no usarlo',
            list: [
                `Mostrar etiquetas de texto como "Nuevo" o "Activo" — usar Tag o TagState.`,
                `Usar como indicador de estado on/off sin número — usar un dot indicator.`,
                `Superponer sobre elementos de texto en línea o párrafos.`,
                `Mostrar conteos negativos, cero o valores no numéricos.`,
            ]
        }
    ];

    public accessibilityText = `El Badge es un indicador de estado no interactivo. Por sí solo no recibe foco ni tiene rol semántico propio: su accesibilidad depende del elemento padre (botón, ícono) que lo contiene. El elemento padre debe comunicar el conteo al lector de pantalla mediante aria-label o aria-describedby, actualizando el mensaje cuando el valor cambia para evitar interrumpir la navegación.`;

    public accessibilityList = [
        `No recibe foco directamente— el foco se gestiona en el elemento padre (botón o ícono).`,
        `aria-label en el padre:aria-label="Notificaciones: 5 sin leer".`,
        `aria-live="polite" en el padre para anunciar cambios de conteo sin interrumpir.`,
        `Contraste AA (4.5:1) — número blanco sobre fondo de color de variante.`,
        `No usar color como único indicador — el número es siempre la señal primaria.`,
        `Overflow textual: el sufijo "+" debe incluirse en el aria-label del padre: "99 o más notificaciones".`,
    ];
}
