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
            font-size: 13px;
            color: var(--c-text);
            margin: 0;
            padding-left: 1.25rem;
            line-height: 2.1;

            li {
                margin: 0;
            }
        }
    `,
})
export class DocsCardListComponent {
    @Input() public data!: Array<string>;
}
