import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import {
  MdButtonModule, MdCardModule, MdExpansionModule, MdHeaderCell, MdHeaderRow, MdInputModule, MdProgressSpinnerModule,
  MdRadioModule,
  MdTable,
  MdTableModule,
  MdTabsModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainInfoComponent} from './main/main-info.component';
import {BfCalculatorComponent, ChangeUS, ChangeMetrics} from './bfcalculator/bf-calculator.component';
import {PlanRouterModule} from './plan-router.module';
import {BfFormComponent} from "./bfcalculator/bf-form/bf-form.component";
import {BfTableComponent} from "./bfcalculator/bf-table/bf-table.component";
import {CdkTableModule} from "@angular/cdk";

@NgModule({
  imports: [
    CdkTableModule,
    PlanRouterModule,
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
    BrowserAnimationsModule
  ],
  declarations: [MainInfoComponent,
    BfCalculatorComponent,
    BfFormComponent,
    BfTableComponent,
    ChangeMetrics,
    ChangeUS]
})
export class PlanModule {
}
