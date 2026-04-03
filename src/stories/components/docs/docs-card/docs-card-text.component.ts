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
            font: 400 var(--ds-font-text-l);
            color: var(--ds-text-color-neutral-default);
        }
    `,
})
export class DocsCardTextComponent {
    @Input() public text!: string;

}
