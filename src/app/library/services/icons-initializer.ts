import { APP_INITIALIZER, Provider } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Initializes the icon set for the component library
 * @param iconRegistry - Material icon registry service
 * @param sanitizer - Service for safely handling URLs
//  * @param iconSetPath - Path to the SVG icon set file (defaults to './assets/images/icons/set.svg')
 * @returns A factory function that registers the icon set
 */
export function initializeIcons(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    iconSetPath: string = './assets/images/icons/set.svg'
) {
    return () => {
        iconRegistry.addSvgIconSet(
            sanitizer.bypassSecurityTrustResourceUrl(iconSetPath)
        );
    };
}

/**
 * Provider for initializing icons in the consuming application
 * @param iconSetPath - Optional custom path to the SVG icon set file
 * @returns Array of providers to be added to the application's providers array
 *
 * @example
 * // Example 1: Use library icons only (default path)
 * bootstrapApplication(AppComponent, {
 *   providers: [provideIcons()]
 * });
 *
 * @example
 * // Example 2: Use library icons with custom path
 * bootstrapApplication(AppComponent, {
 *   providers: [provideIcons('/assets/images/custom-icons/set.svg')]
 * });
 *
 * @example
 * // Example 3: Add custom icons in addition to library icons
 * // In your app.module.ts or main.ts
 * import { MatIconRegistry } from '@angular/material/icon';
 * import { DomSanitizer } from '@angular/platform-browser';
 *
 * export function initializeCustomIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
 *   return () => {
 *     iconRegistry.addSvgIconSet(
 *       sanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/custom-set.svg')
 *     );
 *   };
 * }
 *
 * @NgModule({
 *   providers: [
 *     provideIcons('/assets/images/icons/set.svg'),
 *     {
 *       provide: APP_INITIALIZER,
 *       useFactory: initializeCustomIcons,
 *       deps: [MatIconRegistry, DomSanitizer],
 *       multi: true,
 *     }
 *   ]
 * })
 * export class AppModule {}
 *
 * @example
 * // Usage in templates after registration:
 * // Icons from library: <app-icon-button icon="save"></app-icon-button>
 * // Custom icons: <app-icon-button icon="custom-icon"></app-icon-button>
 */
export const provideIcons = (iconSetPath?: string): Provider[] => [
    {
        provide: APP_INITIALIZER,
        useFactory: (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
            return initializeIcons(iconRegistry, sanitizer, iconSetPath);
        },
        deps: [MatIconRegistry, DomSanitizer],
        multi: true,
    },
];
