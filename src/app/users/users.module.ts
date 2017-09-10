import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  MdInputModule, MdButtonModule, MdCardModule, MdPaginatorModule, MdTableModule,
  MdProgressBar, MdProgressBarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import {UsersRouterModule} from './users-router.module';
import {CdkTableModule} from '@angular/cdk/table';

import {UsersComponent} from './users.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';
import {ProfileComponent} from './profile/profile.component';
import {ListComponent} from './list/list.component';
import {MessageComponent} from './message/message.component';
import {ForeignprofileComponent} from './foreignprofile/foreignprofile.component';
@NgModule({
  imports: [
    CdkTableModule,
    UsersRouterModule,
    CommonModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdPaginatorModule,
    MdTableModule,
    InlineEditorModule,
    BrowserAnimationsModule
  ],
  declarations: [
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent,
    ListComponent,
    MessageComponent,
    ForeignprofileComponent
  ],
  exports: [
    MessageComponent
  ]
})
export class UsersModule {
}
