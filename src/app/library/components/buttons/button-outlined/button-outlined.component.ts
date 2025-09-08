import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-button-outlined',
    standalone: true,
    template: `
        <button
            mat-stroked-button
            color="primary"
            [ngClass]="classes"
            [disabled]="disabled"
            (click)="onClick.emit($event)">
            <ng-content></ng-content>
        </button>
    `,
    styleUrl: './button-outlined.component.scss',
    imports: [MatButtonModule, NgClass]
})
export class ButtonOutlinedComponent {
    /** How large should the button be? */
    @Input() size: 'sm' | 'md' | 'lg' = 'md';

    /** State button */
    @Input() disabled: boolean = false;

    /** Optional click handler */
    @Output() onClick = new EventEmitter<Event>();

    public get classes(): string[] {
        return ['button-outlined', `button-outlined--${this.size}`];
    }
}
