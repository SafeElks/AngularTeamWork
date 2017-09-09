import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainInfoComponent} from './main/main-info.component';
import {BfCalculatorComponent} from './bfcalculator/bf-calculator.component';

const routes: Routes = [
  { path: 'plan', component: MainInfoComponent },
  {path: 'bfc', component: BfCalculatorComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PlanRouterModule { }
