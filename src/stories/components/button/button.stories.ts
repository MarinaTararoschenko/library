import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { ButtonComponent } from 'src/app/library/components/buttons/button/button.component';
import { ButtonDocumentationComponent } from './button-documentation/button-documentation.component';

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
            options: ['small', 'medium', 'large'],
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
        data: { text: 'Button' },
        disabled: false,
        isLoading: false,
    },
    render: (args) => ({
        props: args,
        template: `
            <app-button
            [theme]="theme"
            [type]="type"
            [size]="size"
            [disabled]="disabled"
            [isLoading]="isLoading"
            [data]="data"
            (buttonClick)="buttonClick($event)">
            </app-button>
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
            ],
        },
        docs: {
            controls: {
                // Exclude all unnecessary parameters
                exclude: [
                    'currentType',
                    'currentTheme',
                    'currentSize',
                    'iconSize',
                    '_setIconSize',
                    'clicked',
                ],
            },
        },
    },
};

export default meta;

export const Documentation: StoryObj = {
    name: 'Documentation',
    render: () => ({
        template: '<app-button-documentation></app-button-documentation>',
    }),
    decorators: [
        moduleMetadata({
            imports: [ButtonDocumentationComponent],
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

