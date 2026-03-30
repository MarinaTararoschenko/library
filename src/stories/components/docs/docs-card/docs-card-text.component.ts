import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-docs-card-text',
    template: `
        <span [innerHTML]="text"></span>
    `,
    styles: `
        :host {
            display: block;
            font-size: 13px;
            color: var(--c-text);
            line-height: 1.6;
        }

        :host-context(.success),
        :host-context(.error) {
            font-size: 12px;
            margin: 0 0 0.75rem;
            font-weight: 500;
            line-height: 1.5;
        }

        :host-context(.success) {
            color: #15803d;
        }
        :host-context(.error) {
            color: #dc2626;
        }
    `,
})
export class DocsCardTextComponent {
    @Input() public text!: string;

}
