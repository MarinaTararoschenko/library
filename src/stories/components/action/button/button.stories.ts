import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { ButtonComponent } from 'src/app/library/components/action/button/button.component';
import { ButtonDocsComponent } from './button-docs/button-docs.component';

const meta: Meta<ButtonComponent> = {
    title: 'Action/Button',
    component: ButtonComponent,
    argTypes: {
        theme: {
            control: 'select',
            options: ['primary', 'neutral'],
            description: 'Brand theme',
        },
        type: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary', 'tonal', 'danger', 'dangerText'],
            description: 'Visual style of the button',
        },
        size: {
            control: 'select',
            options: ['s', 'm', 'l', 'xl', '2xl'],
            description: 'Button size',
        },
        disabled: {
            control: 'boolean',
        },
        isLoading: {
            control: 'boolean',
        },
        buttonClick: {
            action: 'clicked',
        },
    },
    args: {
        theme: 'primary',
        type: 'primary',
        size: 'm',
        data: { text: 'Button', iconStart: 'layers', iconEnd: 'angle-right' },
        disabled: false,
        isLoading: false,
    },
    render: (args) => ({
        props: args,
        template: `
            <air-button
                [theme]="theme"
                [type]="type"
                [size]="size"
                [disabled]="disabled"
                [isLoading]="isLoading"
                [data]="data"
                (buttonClick)="buttonClick()">
            </air-button>
        `,
    }),
    parameters: {
        controls: {
            // Exclude all unnecessary parameters
            exclude: [
                'currentType',
                'currentTheme',
                'currentSize',
                'iconSize',
                '_setIconSize',
                'clicked',
                'onClick',
                'backgroundColor',
                'label',
                'primary'
            ],
        },
    },
};

export default meta;

export const Documentation: StoryObj = {
    name: 'Documentation',
    render: () => ({
        template: '<app-button-docs></app-button-docs>',
    }),
    decorators: [
        moduleMetadata({
            imports: [ButtonDocsComponent],
        }),
    ],
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        actions: { disable: true },
    },
};

type Story = StoryObj<ButtonComponent>;

export const Preview: Story = {};

