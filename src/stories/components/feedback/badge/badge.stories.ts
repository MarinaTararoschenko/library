import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { BadgeComponent } from 'src/app/library/components/feedback/badge/badge.component';
import { BadgeDocsComponent } from './badge-docs/badge-docs.component';

const meta: Meta<BadgeComponent> = {
    title: 'Feedback/Badge',
    component: BadgeComponent,
    argTypes: {
        color: {
            control: 'select',
            options: ['blue', 'green', 'red', 'yellow', 'grey', 'disabled', 'green-fill', 'yellow-fill', 'red-fill', 'blue-fill', 'black-fill'],
            description: 'Badge color',
        },
        size: {
            control: 'select',
            options: ['xs', 's', 'm', 'l', 'xl', '2xl'],
            description: 'Badge size',
        },
        type: {
            control: 'select',
            options: ['default', 'no-number', 'state'],
            description: 'Badge type',
        }
    },
    args: {
        color: 'blue',
        size: 'm',
        text: '9',
        type: 'default'
    },
    render: (args) => ({
        props: args,
        template: `
            <air-badge
                [color]="color"
                [size]="size"
                [text]="text"
                [type]="type">
            </air-badge>
        `,
    }),
    parameters: {
        controls: {
            // Exclude all unnecessary parameters
            exclude: [
                'currentColor',
                'currentSize',
            ],
        },
    },
};

export default meta;

export const Documentation: StoryObj = {
    name: 'Documentation',
    render: () => ({
        template: '<app-badge-docs></app-badge-docs>',
    }),
    decorators: [
        moduleMetadata({
            imports: [BadgeDocsComponent],
        }),
    ],
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        actions: { disable: true },
    },
};

type Story = StoryObj<BadgeComponent>;

export const Preview: Story = {};

