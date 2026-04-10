import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { HeaderComponent, IHeader, IHeaderButton, IHeaderIconButton } from 'src/app/library/components/navigation/header/header.component';

@Component({
    standalone: true,
    selector: 'app-header-docs-code',
    templateUrl: './header-docs-code.component.html',
    styles: [`
        .demo-container {
            display: flex;
            padding: 16px;

            air-header {
                flex-grow: 1;
            }
        }
        pre {
            background: #1e293b;
            color: #e2e8f0;
            padding: 0.5rem 1.5rem;
            border-radius: 12px;
            font-size: 13px;
            overflow-x: auto;
        }
    `],
    imports: [ MatTabsModule, HeaderComponent ],
})
export class HeaderDocsCodeComponent {

    public data: IHeader = {
        title: 'Título de sección',
        subtitle: 'Subtítulo de sección',
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
        info: {
            text: 'Info text'
        },
        actions: {
            buttons: [
                {
                    data: {
                        text: 'Body text'
                    },
                    theme: 'primary',
                    type: 'secondary',
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
            tag: {
                data: {
                    text: 'Total mesa: $0',
                    iconStart: 'currency-dollar-circle'
                },
                color: 'grey',
                size: 'm'
            }
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
    };

    /** Example code for html */
    public templateCode = `
<air-header
    [data]="data"
    (backClick)="backClick()"
    (actionButtonClick)="actionButtonClick($event)">
</air-header>
    `;

    /** Example code for ts */
    public componentCode = `
@Component({
    ...,
    standalone: true,
    imports: [ HeaderComponent ],
})

public data: IHeader = {
    title: 'Título de sección',
    subtitle: 'Subtítulo de sección',
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
    info: {
        text: 'Info text'
    },
    actions: {
        buttons: [
            {
                data: {
                    text: 'Body text'
                },
                theme: 'primary',
                type: 'secondary',
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
        tag: {
            data: {
                text: 'Total mesa: $0',
                iconStart: 'currency-dollar-circle'
            },
            color: 'grey',
            size: 'm'
        }
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

public backClick(): void {
    console.log('Back button click');
}

public actionButtonClick(button: IHeaderButton | IHeaderIconButton): void {
    console.log('Action button click: ', button);
}
    `;

    public backClick(): void {
        console.log('Back button click');
    }

    public actionButtonClick(button: IHeaderButton | IHeaderIconButton): void {
        console.log('Action button click: ', button);
    }
}
