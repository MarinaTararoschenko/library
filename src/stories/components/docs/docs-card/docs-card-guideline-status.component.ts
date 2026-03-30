import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-docs-card-guideline-status',
    template: `
        <span class="status__icon" [ngClass]="status">
            @if (status === 'success') {
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1.5 5l2.5 2.5 4.5-5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
            } @else {
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 2l6 6M8 2L2 8" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                </svg>
            }
        </span>
        <strong class="status__text" [ngClass]="status">{{text}}</strong>
    `,
    styles: `
        :host {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .status__icon {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;

            &.success {
                background: #16a34a;
            }

            &.error {
                background: #dc2626;
            }
        }

        .status__text {
            font-size: 13px;
            font-weight: 700;

            &.success {
                color: #15803d;
            }

            &.error {
                color: #dc2626;
            }
        }
    `,
    imports: [ NgClass ]
})
export class DocsCardGuidelineStatusComponent {
    @Input() public status!: string;
    @Input() public text!: string;

}
