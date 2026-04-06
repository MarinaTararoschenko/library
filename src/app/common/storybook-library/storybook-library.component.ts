import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { BannerComponent } from 'src/app/library/components/banner/banner.component';
import { DialogBasicComponent, IDialogBasic } from 'src/app/library/components/dialog-basic/dialog-basic.component';
import { FormFieldInputComponent, IFormFieldInput } from 'src/app/library/components/form-field-input/form-field-input.component';
import { ButtonComponent } from 'src/app/library/components/action/button/button.component';
import { IconButtonComponent } from 'src/app/library/components/action/icon-button/icon-button.component';
import { HeaderComponent, IHeader } from 'src/app/library/components/navigation/header/header.component';
import { IDropdown } from 'src/app/library/components/layout/dropdown-item/dropdown-item.component';

@Component({
    standalone: true,
    selector: 'app-storybook-library',
    templateUrl: './storybook-library.component.html',
    styles: `
        air-header {
            position: sticky;
            top: 0;
            left: 0;
            z-index: 100;
        }
    `,
    imports: [
        MatDialogModule,
        BannerComponent,
        MatIconModule,
        MatButtonModule,
        FormFieldInputComponent,
        ButtonComponent,
        IconButtonComponent,
        HeaderComponent
    ],
})
export class StorybookLibraryComponent {

    public form: FormGroup;

    public headerData: IHeader = {
        title: 'Título de sección',
        subtitle: 'Subtítulo de sección',
        // menu: true,
        back: true,
        tags: [{
            data: {
                text: 'Cambios guardados',
                iconStart: 'cloud'
            },
            color: 'grey',
            size: 's'
        }],
        info: {
            text: 'Info text'
        },
        actions: {
            iconButtons: [
                // {
                //     icon: 'layers',
                //     theme: 'primary',
                //     type: 'tertiary',
                //     size: 'l',
                //     disabled: false,
                //     isLoading: false,
                // },
                // {
                //     icon: 'layers',
                //     theme: 'primary',
                //     type: 'secondary',
                //     size: 'l',
                //     disabled: false,
                //     isLoading: false,
                // },
                {
                    icon: 'layers',
                    theme: 'primary',
                    type: 'primary',
                    size: 'l',
                    disabled: false,
                    isLoading: false,
                    menu: [
                        {
                            id: 1,
                            text: 'Option 1',
                            subtext: 'Supporting text',
                            icon: 'layers',
                            badge: '9',
                            checkbox: {
                                controlName: 'opt1',
                            },
                            disabled: true
                        },
                        {
                            id: 2,
                            text: 'Option 2',
                            subtext: 'Supporting text',
                            icon: 'layers',
                            badge: '9',
                            checkbox: {
                                controlName: 'opt2',
                            }
                        },
                        {
                            id: 3,
                            text: 'Option 3',
                            subtext: 'Supporting text',
                            icon: 'layers',
                            badge: '9',
                            checkbox: {
                                controlName: 'opt3',
                            }
                        }
                    ]
                }
            ],
            // buttons: [
            //     {
            //         data: {
            //             text: 'Body text'
            //         },
            //         theme: 'primary',
            //         type: 'secondary',
            //         size: 'l',
            //         disabled: false,
            //         isLoading: false,
            //     },
            //     {
            //         data: {
            //             text: 'Body text'
            //         },
            //         theme: 'primary',
            //         type: 'primary',
            //         size: 'l',
            //         disabled: false,
            //         isLoading: false,
            //     }
            // ],
            // tag: {
            //     data: {
            //         text: 'Total mesa: $0',
            //         iconStart: 'layers'
            //     },
            //     color: 'grey',
            //     size: 'm'
            // }
        },
        submenu: {
            tags: [
                {
                    data: {
                        text: 'Body text',
                        iconStart: 'layers'
                    },
                    color: 'grey',
                    size: 's'
                },
                {
                    data: {
                        text: 'Body text',
                        iconStart: 'layers'
                    },
                    color: 'grey',
                    size: 's'
                },
                {
                    data: {
                        text: 'Body text',
                        iconStart: 'layers'
                    },
                    color: 'grey',
                    size: 's'
                },
                {
                    data: {
                        text: 'Body text',
                        iconStart: 'layers'
                    },
                    color: 'grey',
                    size: 's'
                }
            ],
            tag: {
                data: {
                    text: 'Body text',
                    iconStart: 'layers'
                },
                color: 'grey',
                size: 'm'
            }
        },
    }

    public dataInput: IFormFieldInput = {
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
    };

    public icons = {
        chevronRight: 'angle-right',
        chevronLeft: 'angle-left',
        layers: 'layers'
    };

    constructor(
        public dialog: MatDialog,
        private _iconRegistry: MatIconRegistry,
        private _sanitizer: DomSanitizer,
        private fb: FormBuilder
    ) {
        this._iconRegistry.addSvgIconSet(this._sanitizer.bypassSecurityTrustResourceUrl('./assets/images/icons/set.svg'));

        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            checkboxes: this.fb.group({})
        });
        this.initCheckboxes();
    }

    private initCheckboxes(): void {
        const checkboxesGroup = this.checkboxesForm;

        this.headerData.actions?.iconButtons?.forEach(button => {
            button.menu?.forEach(item => {
                if (item.checkbox?.controlName) {
                    const control = new FormControl({
                        value: false,
                        disabled: item.disabled ?? false
                    });
                    checkboxesGroup.addControl(
                        item.checkbox.controlName,
                        control
                    );
                }
            });
        });
    }

    public get checkboxesForm(): FormGroup {
        return this.form.get('checkboxes') as FormGroup;
    }

    public selectedDropdownOptions(event: IDropdown): void {
        if (event.checkbox?.controlName) {
            console.log('Change checkboxes: ', this.checkboxesForm);
        } else {
            console.log('Selected menu item:', event.text);
        }
    }

    public onClick(ev: Event): void {
        console.log('click btn storybook: ', ev);
    }

    public openModal(): void {
        const dialogData: IDialogBasic = {
            title: 'Title',
            description: 'A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.',
            actions: [
                { text: 'Cancelar'},
                { text: 'Guardar'}
            ],
            icon: 'info',
            style: 'icon'
        };
        this.dialog.open(DialogBasicComponent, {
            width: '312px',
            panelClass: 'dialogBasic',
            data: dialogData
        });
    }
}
