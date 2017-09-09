import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdToolbarModule, MdCardModule, MdPaginatorModule, MdTableModule,
  MdDatepickerModule, MdNativeDateModule, MdFormFieldModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {HomeModule} from './home/home.module';
import {UsersModule} from './users/users.module';
import {PlanModule} from './plan/plan.module';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';

import {CookieService} from 'ngx-cookie-service';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {HomeService} from './services/home.service';
import {FooterComponent} from './footer/footer.component';
import {PlanService} from './services/plan.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    HomeModule,
    UsersModule,
    PlanModule,
    MdToolbarModule,
    MdButtonModule,
    MdFormFieldModule,
    MdCardModule,
    MdPaginatorModule,
    MdTableModule,
    MdDatepickerModule,
    MdNativeDateModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/', pathMatch: 'full'},
    ])
  ],
  bootstrap: [AppComponent],
  providers: [
    CookieService,
    AuthService,
    UserService,
    HomeService,
    PlanService
  ]
})
export class AppModule {
}
