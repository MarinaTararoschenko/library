import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-docs',
    template: `
        <ng-content select="[docsHeader]"></ng-content>
        <div class="docs__content">
            <ng-content></ng-content>
        </div>

    `,
    styles: `
        :host {
            display: block;
            background: var(--ds-background-color-screen-base);
            min-height: 100vh;
        }

        .docs__content {
            display: flex;
            flex-direction: column;
            row-gap: 24px;
            padding: 48px;
        }
    `,
})
export class DocsComponent {
}
