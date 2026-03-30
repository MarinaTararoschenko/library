import { Component, Input } from '@angular/core';

export interface IDocsHeader {
    badge: string;
    title: string;
    version: string;
    description: string;
    copyright: string;
}

@Component({
    standalone: true,
    selector: 'app-docs-header',
    templateUrl: './docs-header.component.html',
    styleUrl: './docs-header.component.scss',
})
export class DocsHeaderComponent {
    @Input() public data!: IDocsHeader;
}
