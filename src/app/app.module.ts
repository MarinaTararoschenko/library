import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomMaterialModule } from './common/material.module';

import { SidenavComponent } from './common/sidenav/sidenav.component';
import { TypographyComponent } from './common/typography/typography.component';
import { ColorHelpersComponent } from './common/color-helpers/color-helpers.component';
import { WebHeaderComponent } from './common/web-header/web-header.component';
import { HeaderComponent } from './common/web-header/header/header.component';
import { DropdownMenuComponent } from './common/web-header/header/dropdown-menu/dropdown-menu.component';

import { ComponentsComponent } from './components/components.component';

// components
import { InfoBannerComponent } from './components/info-banner/info-banner.component';

// services
import { ThemeService } from './common/services/theme.services';

@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent,
        TypographyComponent,
        ColorHelpersComponent,
        ComponentsComponent,
        InfoBannerComponent,
        WebHeaderComponent,
        HeaderComponent,
        DropdownMenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CustomMaterialModule
    ],
    providers: [ThemeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
