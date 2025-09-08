import { type Meta, type StoryObj } from '@storybook/angular';

import { BannerDemoComponent } from './banner-demo.component';

const meta: Meta<BannerDemoComponent> = {
    title: 'Component/Banner/Base',
    component: BannerDemoComponent,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Full demo of custom banner with code examples'
            }
        }
    },
    args: {
        style: 'info',
    },
    render: (args) => ({
        props: args,
        template: `<app-banner-demo [style]="style"></app-banner-demo>`,
      }),
};

export default meta;
type Story = StoryObj<BannerDemoComponent>;

export const Preview: Story = {};
