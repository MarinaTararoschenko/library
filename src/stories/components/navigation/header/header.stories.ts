import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { HeaderComponent } from 'src/app/library/components/navigation/header/header.component';
import { HeaderDocsComponent } from './header-docs/header-docs.component';

const meta: Meta<HeaderComponent> = {
    title: 'Navigation/Header',
    component: HeaderComponent,
    argTypes: {
        type: {
            control: 'select',
            options: ['default', 'columns'],
            description: 'Header type',
        },
        backClick: {
            action: 'clicked',
        },
        actionButtonClick: {
            action: 'clicked',
        },
    },
    args: {
        data: {
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
    },
    render: (args) => ({
        props: args,
        template: `
            <air-header
                [data]="data"
                (backClick)="backClick()"
                (actionButtonClick)="actionButtonClick()">
            </air-header>
        `,
    }),
    parameters: {
        controls: {
            // Exclude all unnecessary parameters
            exclude: [
                'isOpenDropdown',
                'isOpenMatMenu',
                'matMenuList',
                'closeDropdownMenu',
                'ngOnInit',
                'openDropdownMenu',
                'header',
            ],
        },
    },
};

export default meta;

export const Documentation: StoryObj = {
    name: 'Documentation',
    render: () => ({
        template: '<app-header-docs></app-header-docs>',
    }),
    decorators: [
        moduleMetadata({
            imports: [HeaderDocsComponent],
        }),
    ],
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        actions: { disable: true },
    },
};

type Story = StoryObj<HeaderComponent>;

export const Preview: Story = {};

