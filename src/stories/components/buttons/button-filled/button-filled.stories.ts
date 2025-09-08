import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonFilledComponent } from 'src/app/library/components/buttons/button-filled/button-filled.component';

const meta: Meta<ButtonFilledComponent> = {
    title: 'Component/Buttons/ButtonFilled',
    component: ButtonFilledComponent,
    tags: ['autodocs'],
    args: {
        size: 'md',
        disabled: false,
        onClick: (event: Event) => console.log('Clicked!', event)
    },
    render: (args) => ({
        props: args,
        template: `
          <app-button-filled (onClick)="onClick($event)" [size]="size" [disabled]="disabled">
            Filled button
          </app-button-filled>
        `,
      }),
};

export default meta;
type Story = StoryObj<ButtonFilledComponent>;

export const Preview: Story = {};
