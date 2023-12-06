import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        FormsModule,
        MatRippleModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatSlideToggleModule,
        MatExpansionModule,
        MatMenuModule,
        MatCardModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MatRippleModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatSlideToggleModule,
        MatExpansionModule,
        MatMenuModule,
        MatCardModule
    ]
})
export class CustomMaterialModule {}
