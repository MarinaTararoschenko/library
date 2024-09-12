import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LangDefinition, provideTranslocoScope, TranslocoService } from '@jsverse/transloco';
import { TranslocoLocaleService } from '@jsverse/transloco-locale';
import { Subscription, take } from 'rxjs';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    providers: [provideTranslocoScope('firstComponent')]
})
export class ComponentsComponent implements OnDestroy {

    public form: FormGroup;

    private subscription: Subscription | null = null;
    public availableLangs = this.translocoService.getAvailableLangs() as LangDefinition[];
    public activeLang = this.translocoService.getActiveLang();
    public greetingText!: string;
    public dynamicCount = 10;
    public date = new Date();

    constructor(
        private _formBuilder: FormBuilder,
        private readonly translocoService: TranslocoService,
        private localeService: TranslocoLocaleService,
        @Inject(DOCUMENT) private _document: Document
    ) {
        this.form = this._formBuilder.group({
            phone: [''],
            phoneMenuSuffix: [''],
            phoneMenuPrefix: ['']
        });

        this.translocoService
            .selectTranslate("title", {name: 'Dima'})
            .subscribe(v => {
                this.greetingText = v;
            });
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
        this.subscription = null;
    }

    public changeLang(lang: string): void {
        // Ensure new active lang is loaded
        this.subscription?.unsubscribe();
        this.subscription = this.translocoService
            .load(lang)
            .pipe(take(1))
            .subscribe(() => {
                this.translocoService.setActiveLang(lang);
                this.activeLang = this.translocoService.getActiveLang();
                const doc = this._document.getElementsByTagName("html")[0];
                doc.setAttribute('lang', this.activeLang);
                doc.setAttribute('dir', this.activeLang === 'ar' ? 'rtl' : 'ltr');
            });
    }

    get currencySymbol() {
        return this.localeService.getCurrencySymbol();
    }

}
