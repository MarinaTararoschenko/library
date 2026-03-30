import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-docs-card',
    template: `
        <div class="docsCard">
            @if (title) {
                <div class="docsCard__title">{{title}}</div>
            }
            <ng-content></ng-content>
        </div>
    `,
    styles: `
        :host {
            flex-grow: 1;
            display: flex;

            &.no-padding .docsCard {
                padding: 0;
            }

            &.success .docsCard {
                background: #f0fdf4;
                border-color: #bbf7d0;
            }

            &.error .docsCard {
                background: #fff1f2;
                border-color: #fecdd3;
            }
        }

        .docsCard {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            width: 100%;
            background: #fff;
            border: 1px solid var(--c-border);
            border-radius: var(--r-card);
            padding: 1.5rem;

            &__title {
                font-size: 13px;
                font-weight: 700;
                color: var(--c-navy);
                display: block;
            }
        }
    `,
})
export class DocsCardComponent {
    @Input() public title?: string;
}
