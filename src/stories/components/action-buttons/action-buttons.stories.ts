import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { ActionButtonsDocsComponent } from './action-buttons-docs/action-buttons-docs.component';
import { ActionButtonsComponent } from 'src/app/library/components/action-buttons/action-buttons.component';

const meta: Meta<ActionButtonsComponent> = {
    title: 'Action/Action Buttons',
    component: ActionButtonsComponent,
    argTypes: {
        type: {
            control: 'select',
            options: ['filled', 'hugged', 'vertical', 'center'],
            description: 'Visual style of the Action Buttons',
        },
        size: {
            control: 'select',
            options: ['s', 'm', 'l', 'xl', '2xl'],
            description: 'Button size',
        },
        buttonClick: {
            action: 'clicked',
        },
    },
    args: {
        size: 'm',
        type: 'hugged',
        data: {
            tertiary: {
                text: 'Button text', disabled: false, isLoading: false
            },
            primary: {
                text: 'Button text', disabled: false, isLoading: false
            },
            secondary: {
                text: 'Button text', disabled: false, isLoading: false
            },
        },
    },
    render: (args) => ({
        props: args,
        template: `
            <air-action-buttons
                [size]="size"
                [type]="type"
                [data]="data"
                (buttonClick)="navigation($event)">
            </air-action-buttons>
        `,
    }),
    parameters: {
        controls: {
            // Exclude all unnecessary parameters
            exclude: [
                'currentType',
                'currentSize',
                'clicked',
                'onClick',
                'clickButton',
            ],
        },
    },
};

export default meta;

export const Documentation: StoryObj = {
    name: 'Documentation',
    render: () => ({
        template: '<app-action-buttons-docs></app-action-buttons-docs>',
    }),
    decorators: [
        moduleMetadata({
            imports: [ActionButtonsDocsComponent],
        }),
    ],
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        actions: { disable: true },
    },
};

type Story = StoryObj<ActionButtonsComponent>;

export const Preview: Story = {};

