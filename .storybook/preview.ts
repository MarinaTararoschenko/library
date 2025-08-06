import { applicationConfig, type Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { ErrorHandler, importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        applicationConfig({
            providers: [
                importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
                {
                    provide: MatIconRegistry,
                    useFactory: (http: HttpClient, sanitizer: DomSanitizer) => {
                        const registry = new MatIconRegistry(
                            http,
                            sanitizer,
                            document,
                            new class implements ErrorHandler {
                                handleError(error: any): void {
                                    console.error('Icon error:', error);
                                }
                            }
                        );
                        registry.addSvgIconSet(
                            sanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/set.svg')
                        );
                        return registry;
                    },
                    deps: [HttpClient, DomSanitizer]
                }
            ],
        }),
    ],
};

export default preview;
