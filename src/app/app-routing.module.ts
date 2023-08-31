import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TypographyComponent } from './common/typography/typography.component';
import { ColorHelpersComponent } from './common/color-helpers/color-helpers.component';
import { WebHeaderComponent } from './common/web-header/web-header.component';
import { ComponentsComponent } from './components/components.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
