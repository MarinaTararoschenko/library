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
            overflow: hidden;

            &.no-padding .docsCard {
                padding: 0;
            }

            &.success > .docsCard {
                background: #f0fdf4;
                border-color: #bbf7d0;
            }

            &.error > .docsCard {
                background: #fff1f2;
                border-color: #fecdd3;
            }
        }

        .docsCard {
            display: flex;
            flex-direction: column;
            row-gap: 24px;
            width: 100%;
            height: 100%;
            padding: 20px;
            border: 1px solid var(--ds-border-color-neutral-softest);
            border-radius: var(--ds-border-radius-box);
            background-color: var(--ds-background-color-screen-base);

            &__title {
                font: 600 var(--ds-font-text-l);
                color: var(--ds-text-color-neutral-default);
            }
        }
    `,
})
export class DocsCardComponent {
    @Input() public title?: string;
}
