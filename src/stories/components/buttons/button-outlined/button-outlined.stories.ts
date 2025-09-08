import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonOutlinedComponent } from 'src/app/library/components/buttons/button-outlined/button-outlined.component';

const meta: Meta<ButtonOutlinedComponent> = {
    title: 'Component/Buttons/ButtonOutlined',
    component: ButtonOutlinedComponent,
    tags: ['autodocs'],
    args: {
        size: 'md',
        disabled: false,
        onClick: (event: Event) => console.log('Clicked!', event)
    },
    render: (args) => ({
        props: args,
        template: `
          <app-button-outlined (onClick)="onClick($event)" [size]="size" [disabled]="disabled">
            Outlined button
          </app-button-outlined>
        `,
      }),
};

export default meta;
type Story = StoryObj<ButtonOutlinedComponent>;

export const Preview: Story = {};
