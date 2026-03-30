import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-docs-card-box',
    template: `<ng-content></ng-content>`,
    styles: `
        :host {
            display: block;
            padding: 1rem 1.5rem;
            border-radius: 8px;

            &.light {
                background: #ffffff;
                border: 1px solid var(--c-border);
            }

            &.dark {
                background: #1f2937;
                border: 1px solid #374151;
            }

            &.dashed {
                border-style: dashed;
            }
        }
    `,
})
export class DocsCardBoxComponent { }
