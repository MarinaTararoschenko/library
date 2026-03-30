import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-docs',
    template: `
        <ng-content></ng-content>
    `,
    styles: `
        :host {
            display: block;
            font-family: 'DM Sans', sans-serif;
            background: var(--c-bg, #f7f8fc);
            min-height: 100vh;
            color: var(--c-navy, #1a1d2e);
        }
    `,
})
export class DocsComponent {
}
