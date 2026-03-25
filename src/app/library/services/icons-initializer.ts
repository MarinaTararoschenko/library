import { APP_INITIALIZER, Provider } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export function initializeIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    return () => {
        iconRegistry.addSvgIconSet(
            sanitizer.bypassSecurityTrustResourceUrl('./assets/images/icons/set.svg')
        );
    };
}

export const provideIcons = (): Provider[] => [
    {
        provide: APP_INITIALIZER,
        useFactory: initializeIcons,
        deps: [MatIconRegistry, DomSanitizer],
        multi: true,
    },
];
