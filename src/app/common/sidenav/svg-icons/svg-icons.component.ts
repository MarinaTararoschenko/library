import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-svg-icons',
    templateUrl: './svg-icons.component.html',
    styles: [`
        .flex-wrap {
            row-gap: 16px;
            column-gap: 16px;
        }
    `]
})
export class SvgIconsComponent {

    constructor(
        iconRegistry: MatIconRegistry,
        sanitizer: DomSanitizer
    ) {
        iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('./assets/images/icons/set.svg'))
    }
}
