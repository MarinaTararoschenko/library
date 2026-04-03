import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-docs-section',
    template: `
        <section class="docsSection">
            @if (title) {
                <h2 class="docsSection__title">{{title}}</h2>
            }

            <div class="docsSection__container">
                <ng-content></ng-content>
            </div>
        </section>
    `,
    styles: `
        :host {
            &.columns .docsSection__container {
                grid-template-columns: 1fr 1fr;
            }
        }

        .docsSection {
            display: flex;
            flex-direction: column;
            row-gap: 24px;
            padding: 32px;
            border-radius: var(--ds-border-radius-box);
            background-color: var(--ds-background-color-screen-softest);

            &__title {
                font: 700 var(--ds-font-titles-m);
                color: var(--ds-text-color-neutral-default);
                margin: 0;
            }

            &__container {
                display: grid;
                gap: 1rem;
                overflow: hidden;
            }
        }
    `,
})
export class DocsSectionComponent {
    @Input() public title?: string;

}
