import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { NgForm, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan.component';
import { PlanRouterModule } from './plan-router.module';

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
  declarations: [PlanComponent]
})
export class PlanModule { }
