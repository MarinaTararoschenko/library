import {
    provideTransloco,
    TranslocoModule
} from '@jsverse/transloco';
import { NgModule } from '@angular/core';

import { TranslocoHttpLoader } from './transloco-loader';
import { provideTranslocoMessageformat } from '@jsverse/transloco-messageformat';
import { provideTranslocoLocale, TranslocoLocaleModule } from '@jsverse/transloco-locale';

@NgModule({
    exports: [TranslocoModule, TranslocoLocaleModule],
    providers: [
        provideTransloco({
            config: {
                availableLangs: [
                    { id: "en", label: "English" },
                    { id: "es", label: "Spanish" },
                    { id: "ru", label: "Russia" },
                    { id: "ar", label: "Arabic" },
                ],
                defaultLang: 'en',
                fallbackLang: "es",
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true
            },
            loader: TranslocoHttpLoader
        }),
        provideTranslocoMessageformat(),
        provideTranslocoLocale({
            langToLocaleMapping: {
                en: "en-US",
                es: "es-ES",
                ru: "ru-RU",
                ar: "ar-AR"
            },
        }),
    ],
})
export class TranslocoRootModule { }
