import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdButtonModule, MdCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersRouterModule } from './users-router.module';

import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  imports: [
    UsersRouterModule,
    CommonModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    BrowserAnimationsModule
  ],
  declarations: [
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent
  ]
})
export class UsersModule { }
