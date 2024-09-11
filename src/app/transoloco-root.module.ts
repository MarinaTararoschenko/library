import {
    provideTransloco,
    TranslocoModule
} from '@jsverse/transloco';
import { NgModule } from '@angular/core';

import { TranslocoHttpLoader } from './transloco-loader';

@NgModule({
    exports: [TranslocoModule],
    providers: [
        provideTransloco({
            config: {
                availableLangs: [
                    { id: "en", label: "English" },
                    { id: "es", label: "Spanish" },
                    { id: "ru", label: "Russia" },
                ],
                defaultLang: 'en',
                fallbackLang: "es",
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true
            },
            loader: TranslocoHttpLoader
        })
    ],
})
export class TranslocoRootModule { }