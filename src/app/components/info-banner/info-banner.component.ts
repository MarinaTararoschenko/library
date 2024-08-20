import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-info-banner',
    templateUrl: './info-banner.component.html',
    styleUrls: ['./info-banner.component.scss']
})
export class InfoBannerComponent {
    @Input() type = 'info';
    @Input() matIcon?: string;
    @Input() svgIcon?: string;

    constructor(
        iconRegistry: MatIconRegistry,
        sanitizer: DomSanitizer
    ) {
        iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('./assets/images/icons/set.svg'))
    }

}
