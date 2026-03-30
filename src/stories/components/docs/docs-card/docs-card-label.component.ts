import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-docs-card-label',
    template: `
        <span>{{text}}</span>
    `,
    styles: `
        :host {
            font-size: 11px;
            font-weight: 700;
            color: #9ca3af;
            letter-spacing: .06em;
            text-transform: uppercase;
        }
    `,
})
export class DocsCardLabelComponent {
    @Input() public text!: string;

}
