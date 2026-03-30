import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-docs-card-header',
    template: `
        <div class="docsCardHeader">
            <span class="docsCardHeader__label">{{data.label}}</span>
            @if (data.badge) {
                <span class="docsCardHeader__badge">{{data.badge}}</span>
            }
        </div>
    `,
    styles: `
        .docsCardHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 0.5rem;

            &__label {
                font-size: 11px;
                color: #9ca3af;
            }

            &__badge {
                font-size: 11px;
                font-weight: 600;
                color: #6b7280;
                background: #f3f4f6;
                padding: 2px 10px;
                border-radius: 4px;
            }
        }
    `,
})
export class DocsCardHeaderComponent {
    @Input() public data!: {label: string; badge?: string };

}
