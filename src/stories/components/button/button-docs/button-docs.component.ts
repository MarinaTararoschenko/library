import { Component } from '@angular/core';

import { DocsComponent } from '../../docs/docs.component';
import { DocsHeaderComponent, IDocsHeader } from '../../docs/docs-header/docs-header.component';
import { DocsSectionComponent } from '../../docs/docs-section.component';
import { DocsSectionSubtitleComponent } from '../../docs/docs-section-subtitle.component';
import { DocsCardComponent } from '../../docs/docs-card/docs-card.componet';
import { DocsCardListComponent } from '../../docs/docs-card/docs-card-list.component';
import { DocsCardTextComponent } from '../../docs/docs-card/docs-card-text.component';
import { DocsCardBoxComponent } from '../../docs/docs-card/docs-card-box.component';
import { DocsCardHeaderComponent } from '../../docs/docs-card/docs-card-header.component';
import { DocsCardGuidelineStatusComponent } from '../../docs/docs-card/docs-card-guideline-status.component';
import { ButtonDocsAnatomyComponent } from './button-docs-anatomy/button-docs-anatomy.component';
import { ButtonDocsVariantsComponent } from './button-docs-variants/button-docs-variants.component';
import { ButtonDocsSizesComponent } from './button-docs-sizes/button-docs-sizes.component';
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
        DocsSectionSubtitleComponent,
        DocsCardComponent,
        DocsCardListComponent,
        DocsCardTextComponent,
        DocsCardBoxComponent,
        DocsCardHeaderComponent,
        DocsCardGuidelineStatusComponent,
        ButtonDocsAnatomyComponent,
        ButtonDocsVariantsComponent,
        ButtonDocsSizesComponent,
        ButtonComponent,
    ],
})
export class ButtonDocsComponent {

    public headerData: IDocsHeader = {
        badge: 'AIR DesignSystem',
        title: 'Button',
        version: 'v1.0',
        description: `
            Elemento de acción principal del AIR Design System. Permite a los usuarios ejecutar
            acciones dentro de una interfaz — confirmar, cancelar, navegar o ejecutar operaciones.
            Disponible en 6 tipos visuales, 2 temas (primary/neutral), 2 modos (light/dark) y 6 tamaños.
        `,
        copyright: '2026 HAULMER · All rights reserved',
    };

    public cardsOverview = [
        {
            title: 'Cuándo usarlo',
            list: [
                `Usar <strong>primary</strong> para la acción principal de una vista — máximo uno por sección visual.`,
                `Usar <strong>secondary</strong> o <strong>tertiary</strong> para acciones complementarias o de navegación.`,
                `Elegir el tamaño según el contexto: XS/S para espacios densos, L/XL/2XL para call-to-action prominentes.`,
                `Usar <code>type="danger"</code> o <code>type="danger-text"</code> únicamente para acciones destructivas.`,
                `Usar <code>mode="dark"</code> cuando el botón aparece sobre fondos oscuros o con imagen de fondo.`
            ]
        },
        {
            title: 'Cuándo no usarlo',
            list: [
                `No colocar más de un botón <strong>primary</strong> en la misma sección visual.`,
                `No usar <code>danger</code> para acciones neutras o de navegación — genera alarma innecesaria.`,
                `No combinar 3 o más botones del mismo tipo visual en una misma línea.`,
                `No usar el estado <code>loading</code> sin manejar el retorno al estado anterior cuando termina la operación.`
            ]
        }
    ];

    public behaviorIteractionsText = `El botón responde a <strong>hover</strong>, <strong>active/pressed</strong> y <strong>focus</strong> con transiciones de 150ms. En estado <code>loading</code> muestra un spinner y bloquea la interacción. En <code>disabled</code> reduce opacidad al 40%.`;

    public accessibilityText = `El componente <strong>Button</strong> renderiza un elemento <code>&lt;button&gt;</code> nativo, garantizando foco por teclado, activación con Enter/Space y soporte nativo de lectores de pantalla. El estado <code>disabled</code> deshabilita completamente la interacción.`;

    public accessibilityList = [
        `<strong>Teclado:</strong> Tab para enfocar, Enter o Space para activar.`,
        `<strong>Foco visible:</strong> anillo de 3px con color del tema (<code>--air-color-theme-background-a50</code>).`,
        `<strong>disabled:</strong> usa atributo nativo <code>disabled</code> — no recibe foco ni puede ser activado.`,
        `<strong>loading:</strong> bloquea interacción con <code>pointer-events:none</code> — considerar <code>aria-busy="true"</code> en el contenedor.`,
        `<strong>iconLeft / iconRight:</strong> son decorativos (<code>aria-hidden="true"</code>) — el label del botón es suficiente.`,
        `<strong>Contraste:</strong> todos los tipos cumplen WCAG AA (4.5:1) en ambos modos.`,
    ]

    public icons = {
        chevronRight: 'angle-right',
        chevronLeft: 'angle-left',
        layers: 'layers'
    };
}
