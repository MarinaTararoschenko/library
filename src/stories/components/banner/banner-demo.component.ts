import { Component, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { DomSanitizer } from "@angular/platform-browser";

import { BannerComponent } from "src/app/library/components/banner/banner.component";
import { ButtonComponent } from "src/app/library/components/buttons/button/button.component";

@Component({
    standalone: true,
    selector: 'app-banner-demo',
    templateUrl: './banner-demo.component.html',
    styles: [`
        .demo-container {
            padding: 16px;
        }
        pre {
            background: #f5f5f5;
            padding: 8px;
            border-radius: 4px;
        }
    `],
    imports: [
        BannerComponent,
        MatIconModule,
        ButtonComponent,
        MatCardModule,
        MatTabsModule,
    ],
})
export class BannerDemoComponent {
    @Input() public style: 'info' | 'warn' | 'error' = 'info';

    /** Example code for html */
    public templateCode = `
        <app-banner [style]="style">
            <mat-icon class="size-24" [svgIcon]="'info'" bannerIcon>info</mat-icon>
            <span class="mat-body-1" bannerTitle>Title</span>
            <span class="mat-body-2" bannerText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>

            <app-button
              [theme]="'primary'"
              [type]="'tertiary'"
              [size]="'small'"
              [data]="{ text: 'Button' }"
              bannerButton>
            </app-button>

            <app-button
              [theme]="'primary'"
              [type]="'tertiary'"
              [size]="'small'"
              [data]="{ text: 'Button' }"
              bannerButton>
            </app-button>
        </app-banner>
    `;

    /** Example code for ts */
    public componentCode = `
        public style: 'info' | 'warn' | 'error' = 'info';

        constructor(
            private _iconRegistry: MatIconRegistry,
            private _sanitizer: DomSanitizer,
        ) {
            this._iconRegistry.addSvgIconSet(this._sanitizer.bypassSecurityTrustResourceUrl('./assets/images/icons/set.svg'));
        }
    `;

    constructor(
        private _iconRegistry: MatIconRegistry,
        private _sanitizer: DomSanitizer,
    ) {
        this._iconRegistry.addSvgIconSet(this._sanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/set.svg'));
    }
}
