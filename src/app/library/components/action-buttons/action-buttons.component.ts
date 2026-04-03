import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { ButtonComponent, ButtonSize, IButton } from '../buttons/button/button.component';

export interface IActionButtons {
    tertiary?: IButtonWithState;
    primary?: IButtonWithState;
    secondary?: IButtonWithState;
}

export interface IButtonWithState extends IButton {
    disabled?: boolean;
    isLoading?: boolean;
}

export type ActionButtonsType = 'filled' | 'hugged' | 'vertical' | 'center';

@Component({
    standalone: true,
    selector: 'air-action-buttons',
    templateUrl: './action-buttons.component.html',
    styleUrls: ['./action-buttons.component.scss'],
    imports: [
        ButtonComponent,
    ],
})
export class ActionButtonsComponent {
    @Input() public data!: IActionButtons;

    public currentType: ActionButtonsType = 'center';
    public currentSize: ButtonSize = 'm';

    @Input() public set type(value: ActionButtonsType | null) {
        if (value !== null) {
            this.currentType = value;
        }
    }

    @Input() public set size(value: ButtonSize | null) {
        if (value !== null) {
            this.currentSize = value;
        }
    }

    @HostBinding('class') public get currentClass() {
        return `type-${this.currentType} size-${this.currentSize}`;
    }

    @Output() public buttonClick: EventEmitter<IButtonWithState> = new EventEmitter();

    public clickButton(currentButton: IButtonWithState): void {
        this.buttonClick.emit(currentButton);
    }

}
