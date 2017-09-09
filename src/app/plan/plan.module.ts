import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import {MdButtonModule, MdCardModule, MdInputModule} from '@angular/material';
import {NgForm, FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainInfoComponent} from './main/main-info.component';
import {BfCalculatorComponent} from './bfcalculator/bf-calculator.component';
import {PlanRouterModule} from './plan-router.module';
import {BfFormComponent} from "./bfcalculator/bf-form/bf-form.component";

@NgModule({
  imports: [
    PlanRouterModule,
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdInputModule,
    InlineEditorModule,
    MdCardModule,
    BrowserAnimationsModule
  ],
  declarations: [MainInfoComponent, BfCalculatorComponent, BfFormComponent]
})
export class PlanModule {
}
