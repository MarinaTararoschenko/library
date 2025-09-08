import { type Meta, type StoryObj } from '@storybook/angular';

import { FormFieldInputDemoComponent } from './form-field-input-demo.component';

const meta: Meta<FormFieldInputDemoComponent> = {
    title: 'Component/FormField/Input',
    component: FormFieldInputDemoComponent,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Full demo of form-field-input with code examples'
            }
        }
    },
    args: {
        dataInput: {
            label: 'Label text',
            placeholder: '999 999 999',
            prefixPhone: {
                img: 'cl',
                code: '+569'
            },
            btnSuffix: 'cross',
            controlName: 'name',
            hint: 'Hint text',
            error: 'Error text',
        }
    },
    render: (args) => ({
        props: args,
        template: `<app-form-field-input-demo [data]="dataInput"></app-form-field-input-demo>`,
    }),
};

export default meta;
type Story = StoryObj<FormFieldInputDemoComponent>;

export const Preview: Story = {

};
