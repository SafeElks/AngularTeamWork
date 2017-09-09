import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import {MdButtonModule, MdInputModule} from '@angular/material';
import {NgForm, FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainInfoComponent} from './main/main-info.component';
import {BfCalculatorComponent} from './bfcalculator/bf-calculator.component';
import {PlanRouterModule} from './plan-router.module';

@NgModule({
  imports: [
    PlanRouterModule,
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdInputModule,
    InlineEditorModule,
    BrowserAnimationsModule
  ],
  declarations: [MainInfoComponent, BfCalculatorComponent]
})
export class PlanModule {
}
