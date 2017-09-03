import { MdButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home-router.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRouterModule,
    MdButtonModule
  ],
  declarations: [HomeComponent,
    HeaderComponent
]
})
export class HomeModule { }
