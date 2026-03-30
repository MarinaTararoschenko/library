import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-docs-section-subtitle',
    template: `
        {{text}}
    `,
    styles: `
        :host {
            display: block;
            font-size: 13px;
            font-weight: 700;
            color: var(--c-navy);
        }
    `,
})
export class DocsSectionSubtitleComponent {
    @Input() public text!: string;

}
