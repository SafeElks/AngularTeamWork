import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import {
  MdButtonModule, MdCardModule, MdExpansionModule, MdInputModule, MdProgressSpinnerModule,
  MdRadioModule, MdTableModule, MdTabsModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BfCalculatorComponent, ChangeUS, ChangeMetrics} from './bf-calculator/bf-calculator.component';
import {BfFormComponent} from './bf-calculator/bf-form/bf-form.component';
import {BfTableComponent} from './bf-calculator/bf-table/bf-table.component';
import {CdkTableModule} from '@angular/cdk/table';
import {CalculatorRouterModule} from './calculator-router.module';
import {UsersModule} from '../users/users.module';

@NgModule({
  imports: [
    CalculatorRouterModule,
    CdkTableModule,
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdRadioModule,
    MdInputModule,
    InlineEditorModule,
    MdCardModule,
    MdTabsModule,
    MdProgressSpinnerModule,
    MdExpansionModule,
    MdTableModule,
    BrowserAnimationsModule,
    UsersModule
  ],
  declarations: [
    BfCalculatorComponent,
    BfFormComponent,
    BfTableComponent,
    ChangeMetrics,
    ChangeUS
  ]
})

export class CalculatorModule {
}
