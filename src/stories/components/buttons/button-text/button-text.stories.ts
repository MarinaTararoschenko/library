import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonTextComponent } from 'src/app/library/components/buttons/button-text/button-text.component';

const meta: Meta<ButtonTextComponent> = {
    title: 'Component/Buttons/ButtonText',
    component: ButtonTextComponent,
    tags: ['autodocs'],
    args: {
        size: 'md',
        disabled: false,
        onClick: (event: Event) => console.log('Clicked!', event)
    },
    render: (args) => ({
        props: args,
        template: `
          <app-button-text (onClick)="onClick($event)" [size]="size" [disabled]="disabled">
            Text button
          </app-button-text>
        `,
    }),
};

export default meta;
type Story = StoryObj<ButtonTextComponent>;

export const Preview: Story = {};

