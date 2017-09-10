import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BfCalculatorComponent} from './bf-calculator/bf-calculator.component';

const routes: Routes = [
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
export class CalculatorRouterModule { }
