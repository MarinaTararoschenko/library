import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-button-text',
    standalone: true,
    template: `
        <button
            mat-button
            [ngClass]="classes"
            [disabled]="disabled"
            (click)="onClick.emit($event)">
            <ng-content></ng-content>
        </button>
    `,
    styleUrl: './button-text.component.scss',
    imports: [MatButtonModule, NgClass]
})
export class ButtonTextComponent {
    /** How large should the button be? */
    @Input() size: 'sm' | 'md' | 'lg' = 'md';

    /** State button */
    @Input() disabled: boolean = false;

    /** Optional click handler */
    @Output() onClick = new EventEmitter<Event>();

    public get classes(): string[] {
        return ['button-text', `button-text--${this.size}`];
    }
}
