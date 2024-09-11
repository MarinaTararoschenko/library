import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { TranslocoRootModule } from './transoloco-root.module';

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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomSelectComponent } from './components/dashboard/custom-select/custom-select.component';
import { BarChartComponent } from './components/dashboard/bar-chart/bar-chart.component';
import { SvgBarComponent } from './components/dashboard/bar-chart/svg-bar/svg-bar.component';
import { SvgGridAxisYComponent } from './components/dashboard/bar-chart/svg-grid-axis-y/svg-grid-axis-y.component';
import { SvgGridAxisXComponent } from './components/dashboard/bar-chart/svg-grid-axis-x/svg-grid-axis-x.component';
import { SvgTooltipComponent } from './components/dashboard/bar-chart/svg-tooltip/svg-tooltip.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { SvgIconsComponent } from './common/sidenav/svg-icons/svg-icons.component';
import { PhoneFieldComponent } from './components/form/phone-field/phone-field.component';
import { PhoneFieldMenuSuffixComponent } from './components/form/phone-field-menu-suffix/phone-field-menu-suffix.component';
import { PhoneFieldMenuPrefixComponent } from './components/form/phone-field-menu-prefix/phone-field-menu-prefix.component';
import { SliderComponent } from './common/slider/slider.component';

// services
import { ThemeService } from './common/services/theme.services';
import { DropdownService } from './common/services/dropdown.service';

// directives
import { SvgTooltipDirective } from './components/dashboard/bar-chart/svg-tooltip.directive';
import { TooltipDirective } from './common/directives/tooltip.directive';

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
        DropdownMenuComponent,
        DashboardComponent,
        CustomSelectComponent,
        BarChartComponent,
        SvgBarComponent,
        SvgGridAxisYComponent,
        SvgGridAxisXComponent,
        SvgTooltipComponent,
        TooltipComponent,
        SvgIconsComponent,
        PhoneFieldComponent,
        PhoneFieldMenuSuffixComponent,
        PhoneFieldMenuPrefixComponent,
        SliderComponent,
        // directives
        SvgTooltipDirective,
        TooltipDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CustomMaterialModule,
        HttpClientModule,
        TranslocoRootModule
    ],
    providers: [
        ThemeService,
        DropdownService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
