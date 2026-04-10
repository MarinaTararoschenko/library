import { Component } from '@angular/core';

import { DocsCardTagComponent } from 'src/stories/components/docs/docs-card/docs-card-tag.component';
import { HeaderComponent, IHeader } from 'src/app/library/components/navigation/header/header.component';
import { DocsCardTagBracketComponent } from 'src/stories/components/docs/docs-card/docs-card-tag-bracket.component';

@Component({
    standalone: true,
    selector: 'app-header-docs-anatomy',
    templateUrl: './header-docs-anatomy.component.html',
    styleUrl: './header-docs-anatomy.component.scss',
    imports: [
        DocsCardTagComponent,
        DocsCardTagBracketComponent,
        HeaderComponent,
    ],
})
export class HeaderDocsAnatomyComponent {

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
}
