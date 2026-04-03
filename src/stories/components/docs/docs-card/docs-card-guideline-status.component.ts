import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
    standalone: true,
    selector: 'app-docs-card-guideline-status',
    template: `
        <mat-icon
            [svgIcon]="status === 'success' ? 'check-circle' : 'cross-circle'"
            class="size-24"
            [ngClass]="status">
        </mat-icon>
        <strong class="status__text" [ngClass]="status">{{text}}</strong>
    `,
    styles: `
        :host {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .status__text {
            font: 700 var(--ds-font-titles-s);

            &.success {
                color: var(--ds-text-color-success-default);
            }

            &.error {
                color: var(--ds-text-color-error-default);
            }
        }

        mat-icon {
            &.success {
                color: var(--ds-text-color-success-default);
            }

            &.error {
                color: var(--ds-text-color-error-default);
            }
        }
    `,
    imports: [ NgClass, MatIconModule ]
})
export class DocsCardGuidelineStatusComponent {
    @Input() public status!: string;
    @Input() public text!: string;

}
