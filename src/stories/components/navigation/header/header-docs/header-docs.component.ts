import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { DocsHeaderComponent, IDocsHeader } from '../../../docs/docs-header/docs-header.component';
import { DocsSectionComponent } from '../../../docs/docs-section.component';
import { DocsComponent } from '../../../docs/docs.component';
import { DocsCardComponent } from '../../../docs/docs-card/docs-card.componet';
import { DocsCardListComponent } from '../../../docs/docs-card/docs-card-list.component';
import { DocsCardTextComponent } from '../../../docs/docs-card/docs-card-text.component';
import { DocsCardGuidelineStatusComponent } from '../../../docs/docs-card/docs-card-guideline-status.component';
import { HeaderDocsCodeComponent } from './header-docs-code/header-docs-code.component';
import { HeaderDocsAnatomyComponent } from './header-docs-anatomy/header-docs-anatomy.component';
import { HeaderDocsVariantsComponent } from './header-docs-variants/header-docs-variants.component';
import { HeaderDocsSizesComponent } from './header-docs-sizes/header-docs-sizes.component';
import { HeaderComponent, IHeader } from 'src/app/library/components/navigation/header/header.component';

@Component({
    standalone: true,
    selector: 'app-header-docs',
    templateUrl: './header-docs.component.html',
    styleUrls: ['./header-docs.component.scss'],
    imports: [
        DocsComponent,
        DocsHeaderComponent,
        DocsSectionComponent,
        DocsCardComponent,
        DocsCardListComponent,
        DocsCardTextComponent,
        DocsCardGuidelineStatusComponent,
        HeaderDocsCodeComponent,
        HeaderDocsAnatomyComponent,
        HeaderDocsVariantsComponent,
        HeaderDocsSizesComponent,
        HeaderComponent,
        MatDividerModule
    ],
})
export class HeaderDocsComponent {

    public headerData: IDocsHeader = {
        title: 'Header',
        version: 'v1.0',
        description: `
            Muestra visualmente el progreso de una tarea o proceso en curso mediante una serie de puntos o dots. Estos dots representan diferentes etapas o hitos del proceso, y a medida que avanza la tarea, se iluminan o se llenan para indicar el progreso realizado hasta el momento.
        `,
    };

    public cardsOverview = [
        {
            title: 'Cuándo usarlo',
            list: [
                `Está presente en todas las vistas para identificar la sección actual`,
                `Cuando la vista requiere acciones contextuales accesibles desde la parte superior`,
                `Cuando la vista tiene jerarquía de navegación y necesita acceso al nivel anterior`,
            ]
        },
        {
            title: 'Cuándo no usarlo',
            list: [
                `En modales o confirmaciones donde el título ya forma parte del componente`,
                `En flujos de pasos donde la navegación la controla otro componente`,
                `Cuando el contenido visual ocupa toda la pantalla y el header interrumpe la experiencia`,
            ]
        }
    ];

    public accessibilityText = `El contraste de todos los elementos del header debe ser suficiente para garantizar su legibilidad en cualquier contexto de uso..`;

    public accessibilityList = [
        `El nombre de la sección es siempre el elemento de mayor jerarquía visual`,
        `Los action buttons reflejan claramente su estado según las acciones disponibles en la vista`,
        `En mobile el header reorganiza sus elementos sin perder acciones ni información`,
    ];

    public dataInteractions: IHeader = {
        title: 'Título de sección',
        back: true,
        actions: {
            buttons: [
                {
                    data: {
                        text: 'Body text'
                    },
                    theme: 'primary',
                    type: 'primary',
                    size: 'l',
                    disabled: false,
                    isLoading: false,
                },
                {
                    data: {
                        text: 'Body text'
                    },
                    theme: 'primary',
                    type: 'primary',
                    size: 'l',
                    disabled: false,
                    isLoading: false,
                }
            ],
        }
    }

    public dataGuidelinesDo: IHeader = {
        title: 'Título de sección',
        back: true,
        actions: {
            buttons: [
                {
                    data: {
                        text: 'Body text'
                    },
                    theme: 'primary',
                    type: 'primary',
                    size: 'l',
                    disabled: false,
                    isLoading: false,
                }
            ],
        }
    }

    public dataGuidelinesDo2: IHeader = {
        title: 'Título de sección',
        actions: {
            iconButtons: [
                {
                    icon: 'layers',
                    theme: 'primary',
                    type: 'tonal',
                    size: 'l',
                    disabled: false,
                    isLoading: false,
                },
                {
                    icon: 'layers',
                    theme: 'primary',
                    type: 'tonal',
                    size: 'l',
                    disabled: false,
                    isLoading: false,
                },
                {
                    icon: 'layers',
                    theme: 'primary',
                    type: 'tonal',
                    size: 'l',
                    disabled: false,
                    isLoading: false,
                }
            ],
        }
    }

    public dataGuidelinesDo3: IHeader = {
        title: 'Título de sección',
        subtitle: 'Subtítulo de sección',
        actions: {
            buttons: [
                {
                    data: {
                        text: 'Body text'
                    },
                    theme: 'primary',
                    type: 'primary',
                    size: 'l',
                    disabled: false,
                    isLoading: false,
                }
            ],
        }
    }

    public dataGuidelinesDont: IHeader = {
        title: 'Título de sección',
        subtitle: 'Subtítulo de sección',
        menu: true,
        back: true,
        tags: [
            {
                color: 'grey',
                size: 's',
                data: {
                    text: 'Cambios guardados',
                    iconStart: 'cloud'
                }
            }
        ],
        actions: {
            buttons: [
                {
                    data: {
                        text: 'Body text'
                    },
                    theme: 'primary',
                    type: 'primary',
                    size: 'l',
                    disabled: false,
                    isLoading: false,
                }
            ]
        },
        submenu: {
            tags: [
                {
                    data: {
                        text: 'Body text',
                        iconStart: 'layers'
                    },
                    color: 'grey',
                    size: 's'
                },
                {
                    data: {
                        text: 'Body text',
                        iconStart: 'layers'
                    },
                    color: 'grey',
                    size: 's'
                },
            ],
            tag: {
                data: {
                    text: 'Total mesa: $0',
                    iconStart: 'currency-dollar-circle'
                },
                color: 'grey',
                size: 'm'
            }
        },
    }

    public dataGuidelinesDont2: IHeader = {
        title: 'Título de sección',
        actions: {
            buttons: [
                {
                    data: {
                        text: 'Guardar cambios'
                    },
                    theme: 'neutral',
                    type: 'tonal',
                    size: 'l',
                    disabled: false,
                    isLoading: false,
                },
                {
                    data: {
                        text: 'Guardar cambios'
                    },
                    theme: 'neutral',
                    type: 'tonal',
                    size: 'l',
                    disabled: false,
                    isLoading: false,
                }
            ]
        }
    }

    public dataGuidelinesDont3: IHeader = {
        title: 'Detalle del pedido',
        actions: {
            buttons: [
                {
                    data: {
                        text: 'Compartir'
                    },
                    theme: 'primary',
                    type: 'primary',
                    size: 'l',
                    disabled: false,
                    isLoading: false,
                }
            ]
        }
    }
}
