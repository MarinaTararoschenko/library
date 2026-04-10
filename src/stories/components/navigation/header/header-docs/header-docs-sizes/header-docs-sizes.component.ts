import { Component } from '@angular/core';

import { HeaderComponent, IHeader } from 'src/app/library/components/navigation/header/header.component';
import { DocsCardTagComponent } from 'src/stories/components/docs/docs-card/docs-card-tag.component';

@Component({
    standalone: true,
    selector: 'app-header-docs-sizes',
    templateUrl: './header-docs-sizes.component.html',
    styleUrl: './header-docs-sizes.component.scss',
    imports: [
        DocsCardTagComponent,
        HeaderComponent
    ],
})
export class HeaderDocsSizesComponent {

    public dataDesktop: IHeader = {
        title: 'Título de sección',
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

    public dataTablet: IHeader = {
        title: 'Título de sección',
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

    public dataMobile: IHeader = {
        title: 'Título de sección',
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
}
