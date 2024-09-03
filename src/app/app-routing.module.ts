import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TypographyComponent } from './common/typography/typography.component';
import { ColorHelpersComponent } from './common/color-helpers/color-helpers.component';
import { WebHeaderComponent } from './common/web-header/web-header.component';
import { ComponentsComponent } from './components/components.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SvgIconsComponent } from './common/sidenav/svg-icons/svg-icons.component';
import { SliderComponent } from './common/slider/slider.component';

const routes: Routes = [
    {
        path: '',
        component: TypographyComponent,
        pathMatch: 'full'
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'colors-scheme',
        component: ColorHelpersComponent
    },
    {
        path: 'components',
        component: ComponentsComponent
    },
    {
        path: 'web-header',
        component: WebHeaderComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'icons',
        component: SvgIconsComponent
    },
    {
        path: 'slider',
        component: SliderComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
