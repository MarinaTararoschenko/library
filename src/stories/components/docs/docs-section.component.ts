import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-docs-section',
    template: `
        <section class="docsSection">
            <h2 class="docsSection__title">{{title}}</h2>

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

            &.first .docsSection {
                padding-top: 3rem;
            }
        }

        .docsSection {
            padding: 0 3.5rem 3rem;

            &__title {
                font-size: 1.375rem;
                font-weight: 700;
                color: var(--c-navy);
                margin: 0 0 1.5rem;
                letter-spacing: -0.01em;
            }

            &__container {
                display: grid;
                gap: 1rem;
            }
        }
    `,
})
export class DocsSectionComponent {
    @Input() public title!: string;

}
