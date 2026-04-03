import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-docs-card-list',
    template: `
        <ul class="docsCardList">
            @for (option of data; track $index) {
                <li [innerHTML]="option"></li>
            }
        </ul>
    `,
    styles: `
        .docsCardList {
            font: 400 var(--ds-font-text-l);
            color: var(--ds-text-color-neutral-default);
            margin: 0;
            padding-left: 20px;

            li {
                margin: 0;
            }
        }
    `,
})
export class DocsCardListComponent {
    @Input() public data!: Array<string>;
}
