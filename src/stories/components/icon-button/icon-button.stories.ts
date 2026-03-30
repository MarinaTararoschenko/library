import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { IconButtonComponent } from 'src/app/library/components/buttons/icon-button/icon-button.component';
import { IconButtonDocsComponent } from './icon-button-docs/icon-button-docs.component';

const meta: Meta<IconButtonComponent> = {
    title: 'Action/Icon Button',
    component: IconButtonComponent,
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
            options: ['extrasmall', 'small', 'medium', 'large', 'xlarge', '2xl'],
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
        size: 'medium',
        icon: 'layers',
        disabled: false,
        isLoading: false,
    },
    render: (args) => ({
        props: args,
        template: `
            <app-icon-button
                [theme]="theme"
                [type]="type"
                [size]="size"
                [disabled]="disabled"
                [isLoading]="isLoading"
                [icon]="icon"
                (buttonClick)="buttonClick($event)">
            </app-icon-button>
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
                'primary'
            ],
        },
    },
};

export default meta;

export const Documentation: StoryObj = {
    name: 'Documentation',
    render: () => ({
        template: '<app-icon-button-docs></app-icon-button-docs>',
    }),
    decorators: [
        moduleMetadata({
            imports: [IconButtonDocsComponent],
        }),
    ],
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        actions: { disable: true },
    },
};

type Story = StoryObj<IconButtonComponent>;

export const Preview: Story = {};

