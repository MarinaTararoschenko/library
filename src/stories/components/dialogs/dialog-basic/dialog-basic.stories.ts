import { applicationConfig, StoryObj, type Meta} from '@storybook/angular';

import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { DialogBasicDemoComponent } from './dialog-basic-demo.component';

const meta: Meta<DialogBasicDemoComponent> = {
    title: 'Component/Dialogs/Basic',
    component: DialogBasicDemoComponent,
    tags: ['autodocs'],
    decorators: [
        applicationConfig({
            providers: [
                provideAnimations(),
                importProvidersFrom(
                    MatDialogModule,
                    MatCardModule,
                    MatTabsModule
                )
            ]
        })
    ],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Full demo of custom Material Dialog with code examples'
            }
        }
    },
    args: {
        dialogData: {
            title: 'Editar nombre',
            description: "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
            actions: [{ text: 'Cancelar' }, { text: 'Guardar'}],
            icon: 'info'
        },
        style: 'text'
    },
    render: (args) => ({
        props: args,
        template: `<app-dialog-basic-demo [dialogData]="dialogData" [style]="style"></app-dialog-basic-demo>`
    })
};
export default meta;

type Story = StoryObj<DialogBasicDemoComponent>;

export const Preview: Story = {};
