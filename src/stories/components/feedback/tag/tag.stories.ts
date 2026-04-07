import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { TagComponent } from 'src/app/library/components/feedback/tag/tag.component';
import { TagDocsComponent } from './tag-docs/tag-docs.component';

const meta: Meta<TagComponent> = {
    title: 'Feedback/Tag',
    component: TagComponent,
    argTypes: {
        color: {
            control: 'select',
            options: ['blue', 'yellow', 'green', 'red', 'grey', 'purple', 'orange', 'disabled', 'error', 'white', 'theme', 'theme-fill', 'black-fill', 'green-fill', 'orange-fill', 'red-fill', 'purple-fill'],
            description: 'Tag color',
        },
        size: {
            control: 'select',
            options: ['s', 'm', 'l', 'xl'],
            description: 'Tag size',
        },
        onIconEndClick: {
            action: 'clicked',
        },
    },
    args: {
        color: 'grey',
        size: 'm',
        data: { text: 'Body text', iconStart: 'layers', iconEnd: 'x-close' }
    },
    render: (args) => ({
        props: args,
        template: `
            <air-tag
                [color]="color"
                [size]="size"
                [data]="data"
                (onIconEndClick)="onIconEndClick()">
            </air-tag>
        `,
    }),
    parameters: {
        controls: {
            // Exclude all unnecessary parameters
            exclude: [
                'currentColor',
                'currentSize',
                'iconSize',
                '_setIconSize',
                'iconEndClick',
            ],
        },
    },
};

export default meta;

export const Documentation: StoryObj = {
    name: 'Documentation',
    render: () => ({
        template: '<app-tag-docs></app-tag-docs>',
    }),
    decorators: [
        moduleMetadata({
            imports: [TagDocsComponent],
        }),
    ],
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        actions: { disable: true },
    },
};

type Story = StoryObj<TagComponent>;

export const Preview: Story = {};

